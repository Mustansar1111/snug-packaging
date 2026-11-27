/**
 * Handles quote and mockup requests from the site (POST /api/lead) and emails them to the sales inbox
 * through Cloudflare Email Routing. Everything else on the site is a static file served by Cloudflare.
 */

interface Attachment {
  content: string | ArrayBuffer | ArrayBufferView;
  filename: string;
  type: string;
  disposition: "attachment" | "inline";
}

interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
  LEADS: {
    send(message: {
      to: string;
      from: string | { email: string; name: string };
      replyTo?: string;
      subject: string;
      text: string;
      html?: string;
      attachments?: Attachment[];
    }): Promise<unknown>;
  };
  LEADS_TO: string;
  LEADS_FROM: string;
}

/** Field labels, in the order they appear in the email. */
const LABELS: Record<string, string> = {
  style: "Packaging style",
  quantity: "Quantity",
  dimensions: "Size (L × W × H)",
  units: "Units",
  finish: "Finish",
  name: "Name",
  email: "Email",
  phone: "Phone",
  reply_by: "Reply by",
  country: "Country",
  message: "Message",
  page: "Sent from page",
};

const MAX_FILE = 8 * 1024 * 1024;
const MAX_FIELD = 5000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });

const escapeHtml = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

async function handleLead(request: Request, env: Env): Promise<Response> {
  if (request.method !== "POST") return json({ error: "Method not allowed" }, 405);

  // Only accept posts from our own pages.
  const origin = request.headers.get("Origin");
  if (origin && new URL(origin).host !== new URL(request.url).host) return json({ error: "Forbidden" }, 403);

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json({ error: "Bad request" }, 400);
  }

  const kind = form.get("form-name") === "mockup" ? "mockup" : "quote";
  const field = (k: string) => {
    const v = form.get(k);
    return typeof v === "string" ? v.trim().slice(0, MAX_FIELD) : "";
  };

  // Honeypot: real people never fill this hidden field. Pretend it worked so bots move on.
  if (field("company_website")) return json({ ok: true });

  const email = field("email");
  if (!EMAIL_RE.test(email)) return json({ error: "Add a valid email so we can reply." }, 400);

  const rows = Object.keys(LABELS)
    .map((k) => [LABELS[k], field(k)] as const)
    .filter(([, v]) => v);

  const attachments: Attachment[] = [];
  const file = form.get("artwork");
  if (file && typeof file !== "string" && file.size > 0) {
    if (file.size > MAX_FILE) return json({ error: "That file is over 8 MB. Send a smaller version, or email it to us." }, 413);
    attachments.push({
      content: await file.arrayBuffer(),
      filename: file.name.replace(/[^\w.\- ]+/g, "_").slice(0, 120) || "artwork",
      type: file.type || "application/octet-stream",
      disposition: "attachment",
    });
    rows.push(["Artwork", `${file.name} (attached)`]);
  }

  const who = field("name") || email;
  const subject =
    kind === "mockup"
      ? `Free mockup request from ${email}`
      : `Quote request: ${field("quantity") || "?"} × ${field("style") || "packaging"} (${who})`;

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n") + "\n\nReply to this email to answer the customer directly.";
  const html =
    `<h2 style="font-family:sans-serif">${escapeHtml(kind === "mockup" ? "New free mockup request" : "New quote request")}</h2>` +
    `<table style="font-family:sans-serif;border-collapse:collapse">` +
    rows
      .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#666;vertical-align:top">${escapeHtml(k)}</td><td style="padding:4px 0;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`)
      .join("") +
    `</table><p style="font-family:sans-serif;color:#666">Reply to this email to answer the customer directly.</p>`;

  try {
    await env.LEADS.send({
      to: env.LEADS_TO,
      from: { email: env.LEADS_FROM, name: "Snug Packaging website" },
      replyTo: email,
      subject: subject.slice(0, 200),
      text,
      html,
      attachments: attachments.length ? attachments : undefined,
    });
  } catch (err) {
    console.error("Lead email failed", err, text);
    return json({ error: "We couldn't send that just now. Please email sales@snugpackaging.com." }, 502);
  }
  return json({ ok: true });
}

const worker = {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === "/api/lead") return handleLead(request, env);
    if (url.pathname.startsWith("/api/")) return json({ error: "Not found" }, 404);
    return env.ASSETS.fetch(request);
  },
};

export default worker;
