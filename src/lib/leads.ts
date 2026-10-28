export type LeadKind = "quote" | "sample" | "contact";

export type Lead = {
  kind: LeadKind;
  email: string;
  name?: string;
  country?: string;
  style?: string;
  quantity?: string;
  dimensions?: string;
  units?: "in" | "mm";
  finish?: string;
  message?: string;
  /** Page the lead was sent from, so you can see which pages bring business. */
  page?: string;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateLead(input: unknown): { lead?: Lead; error?: string } {
  if (!input || typeof input !== "object") return { error: "Send the form as JSON." };
  const data = input as Record<string, unknown>;
  const str = (k: string, max = 200) => (typeof data[k] === "string" ? (data[k] as string).trim().slice(0, max) : undefined);
  const kind = str("kind") as LeadKind | undefined;
  if (!kind || !["quote", "sample", "contact"].includes(kind)) return { error: "Unknown form." };
  const email = str("email", 160);
  if (!email || !EMAIL.test(email)) return { error: "Add a valid email address so we can reply." };
  const units = str("units");
  return {
    lead: {
      kind,
      email,
      name: str("name", 120),
      country: str("country", 80),
      style: str("style", 120),
      quantity: str("quantity", 40),
      dimensions: str("dimensions", 80),
      units: units === "mm" ? "mm" : units === "in" ? "in" : undefined,
      finish: str("finish", 80),
      message: str("message", 2000),
      page: str("page", 200),
    },
  };
}

/**
 * Delivers a lead. Set LEAD_WEBHOOK_URL (HubSpot workflow, Zapier, Make or a Slack webhook)
 * in the hosting environment; without it, leads are only written to the server log.
 */
export async function deliverLead(lead: Lead): Promise<boolean> {
  const url = process.env.LEAD_WEBHOOK_URL;
  const payload = { ...lead, receivedAt: new Date().toISOString(), site: "musapackaging.com" };
  if (!url) {
    console.info("[lead]", JSON.stringify(payload));
    return true;
  }
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.ok;
}
