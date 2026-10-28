import { deliverLead, validateLead } from "@/lib/leads";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Send the form as JSON." }, { status: 400 });
  }
  // Honeypot field: real visitors never fill it in.
  if (body && typeof body === "object" && (body as Record<string, unknown>).company_website) {
    return Response.json({ ok: true });
  }
  const { lead, error } = validateLead(body);
  if (!lead) return Response.json({ ok: false, error }, { status: 400 });
  try {
    const delivered = await deliverLead(lead);
    if (!delivered) throw new Error("Webhook refused the lead");
  } catch (e) {
    console.error("[lead] delivery failed", e);
    return Response.json(
      { ok: false, error: "We couldn't send your request just now. Please try again or email us." },
      { status: 502 },
    );
  }
  return Response.json({ ok: true });
}
