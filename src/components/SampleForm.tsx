"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

export function SampleForm() {
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
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind: "sample", email, page: pathname }),
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error);
      setState("done");
    } catch (err) {
      setState("error");
      setError(err instanceof Error && err.message ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (state === "done") return <p className="ok">Thanks. We&apos;ll email you to confirm your address for the sample kit.</p>;

  return (
    <>
      <form className="inline-form" onSubmit={submit} noValidate>
        <input id="s-email" type="email" autoComplete="email" placeholder="Your work email" aria-label="Your work email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button className="btn btn-plum" type="submit" disabled={state === "sending"}>
          {state === "sending" ? "Sending…" : "Send me a kit"}
        </button>
      </form>
      {state === "error" && <p className="err" role="alert" style={{ marginTop: 10 }}>{error}</p>}
    </>
  );
}
