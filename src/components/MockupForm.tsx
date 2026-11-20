"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { submitLead } from "@/lib/submitLead";

export function MockupForm() {
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setState("error");
      return setError("Add a valid email address.");
    }
    setState("sending");
    try {
      await submitLead("mockup", { email, page: pathname, company_website: "" });
      setState("done");
    } catch (err) {
      setState("error");
      setError(err instanceof Error && err.message ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (state === "done") return <p className="ok">Thanks. We&apos;ll email you to ask for your logo and the box you have in mind.</p>;

  return (
    <>
      <form className="inline-form" onSubmit={submit} noValidate>
        <input id="s-email" type="email" autoComplete="email" placeholder="Your work email" aria-label="Your work email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button className="btn btn-plum" type="submit" disabled={state === "sending"}>
          {state === "sending" ? "Sending…" : "Get my free mockup"}
        </button>
      </form>
      {state === "error" && <p className="err" role="alert" style={{ marginTop: 10 }}>{error}</p>}
    </>
  );
}
