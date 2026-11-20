/**
 * Sends a form to Netlify Forms. Netlify finds the forms in public/__forms.html at deploy time,
 * then emails each submission to the addresses set under Site configuration → Forms → Notifications.
 * This only works on a Netlify deploy (not in `next dev`).
 */
export async function submitLead(formName: "quote" | "mockup", fields: Record<string, string>): Promise<void> {
  const body = new URLSearchParams({ "form-name": formName, ...fields });
  const res = await fetch("/__forms.html", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });
  if (!res.ok) throw new Error("Something went wrong. Please try again, or email us.");
}
