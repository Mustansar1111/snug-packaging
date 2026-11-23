/**
 * Sends a form to Netlify Forms. Netlify finds the forms in public/__forms.html at deploy time,
 * then emails each submission to the addresses set under Site configuration → Forms → Notifications.
 * This only works on a Netlify deploy (not in `next dev`).
 */
export async function submitLead(formName: "quote" | "mockup", fields: Record<string, string>, file?: File | null): Promise<void> {
  let res: Response;
  if (file) {
    // With a file attached, send multipart form data (the browser sets the content type and boundary).
    const data = new FormData();
    data.append("form-name", formName);
    Object.entries(fields).forEach(([k, v]) => data.append(k, v));
    data.append("artwork", file);
    res = await fetch("/__forms.html", { method: "POST", body: data });
  } else {
    const body = new URLSearchParams({ "form-name": formName, ...fields });
    res = await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    });
  }
  if (!res.ok) throw new Error("Something went wrong. Please try again, or email us.");
}
