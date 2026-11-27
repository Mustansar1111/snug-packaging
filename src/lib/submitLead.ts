/**
 * Sends a quote or mockup request to /api/lead. On Cloudflare, worker/index.ts emails it to the sales inbox.
 * This only works on the deployed site or under `npx wrangler dev` (not in `next dev`).
 */
export async function submitLead(formName: "quote" | "mockup", fields: Record<string, string>, file?: File | null): Promise<void> {
  const data = new FormData();
  data.append("form-name", formName);
  Object.entries(fields).forEach(([k, v]) => data.append(k, v));
  if (file) data.append("artwork", file);
  let res: Response;
  try {
    res = await fetch("/api/lead", { method: "POST", body: data });
  } catch {
    throw new Error("Couldn't reach us. Check your connection and try again, or email us.");
  }
  if (!res.ok) {
    const body = (await res.json().catch(() => null)) as { error?: string } | null;
    throw new Error(body?.error || "Something went wrong. Please try again, or email us.");
  }
}
