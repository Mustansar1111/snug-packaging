"use client";

import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { allCountries } from "@/data/regions";

const QUANTITIES = ["100", "250", "500", "1,000", "2,500+"];
const FINISHES = ["Matte", "Gloss", "Soft-touch", "Foil", "Emboss", "Not sure"];

type Props = {
  styles: string[];
  defaultStyle?: string;
  defaultCountry?: string;
  defaultUnits?: "in" | "mm";
};

function Chips({ options, value, onChange, label }: { options: string[]; value: string; onChange: (v: string) => void; label: string }) {
  return (
    <div className="chips" role="group" aria-label={label}>
      {options.map((o) => (
        <button key={o} type="button" className="chip" aria-pressed={o === value} onClick={() => onChange(o)}>
          {o}
        </button>
      ))}
    </div>
  );
}

/** Three short steps: product and quantity, size and finish, contact details. */
export function QuoteForm({ styles, defaultStyle, defaultCountry = "United States", defaultUnits = "in" }: Props) {
  const pathname = usePathname();
  const formRef = useRef<HTMLFormElement>(null);
  const [step, setStep] = useState(1);
  const [style, setStyle] = useState(defaultStyle ?? styles[0]);
  const [quantity, setQuantity] = useState("500");
  const [units, setUnits] = useState<"in" | "mm">(defaultUnits);
  const [dims, setDims] = useState({ l: "", w: "", h: "" });
  const [finish, setFinish] = useState("Matte");
  const [name, setName] = useState("");
  const [country, setCountry] = useState(defaultCountry);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  function go(n: number) {
    setStep(n);
    const pane = formRef.current?.querySelector(`[data-step="${n}"]`);
    if (pane && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.fromTo(pane, { x: 24 }, { x: 0, duration: 0.45, ease: "power3.out" });
    }
  }

  function switchUnits(u: "in" | "mm") {
    if (u === units) return;
    const convert = (v: string) => {
      const n = parseFloat(v);
      if (Number.isNaN(n)) return v;
      return u === "mm" ? String(Math.round(n * 25.4)) : (n / 25.4).toFixed(2).replace(/\.?0+$/, "");
    };
    setDims((d) => ({ l: convert(d.l), w: convert(d.w), h: convert(d.h) }));
    setUnits(u);
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (step < 3) return go(step + 1);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError("Add your email so we can send the price.");
    setError("");
    setSending(true);
    const honeypot = (new FormData(e.currentTarget).get("company_website") as string) || "";
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: "quote",
          style,
          quantity,
          units,
          dimensions: [dims.l, dims.w, dims.h].every(Boolean) ? `${dims.l} × ${dims.w} × ${dims.h} ${units}` : "",
          finish,
          name,
          country,
          email,
          message,
          page: pathname,
          company_website: honeypot,
        }),
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error);
      go(4);
    } catch (err) {
      setError(err instanceof Error && err.message ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="form" ref={formRef} onSubmit={submit} noValidate>
      <div className="progress" aria-hidden="true">
        {[1, 2, 3].map((n) => (
          <span key={n} className={n <= Math.min(step, 3) ? "on" : ""} />
        ))}
      </div>

      <div className="pane" data-step="1" hidden={step !== 1}>
        <p className="stepper">Step 1 of 3</p>
        <h3>What are you packing?</h3>
        <div className="field">
          <label htmlFor="q-style">Packaging style</label>
          <select id="q-style" value={style} onChange={(e) => setStyle(e.target.value)}>
            {styles.map((s) => (
              <option key={s}>{s}</option>
            ))}
            <option>Not sure yet</option>
          </select>
        </div>
        <div className="field">
          <span className="lbl">Quantity</span>
          <Chips label="Quantity" options={QUANTITIES} value={quantity} onChange={setQuantity} />
        </div>
      </div>

      <div className="pane" data-step="2" hidden={step !== 2}>
        <p className="stepper">Step 2 of 3</p>
        <h3>Size and finish</h3>
        <div className="field">
          <div className="sublabel">
            <span className="lbl">Inside dimensions (optional)</span>
            <div className="units" role="group" aria-label="Units">
              {(["in", "mm"] as const).map((u) => (
                <button key={u} type="button" aria-pressed={units === u} onClick={() => switchUnits(u)}>
                  {u}
                </button>
              ))}
            </div>
          </div>
          <div className="row">
            {(["l", "w", "h"] as const).map((k) => (
              <input
                key={k}
                id={`q-${k}`}
                inputMode="decimal"
                placeholder={{ l: "Length", w: "Width", h: "Height" }[k]}
                aria-label={{ l: "Length", w: "Width", h: "Height" }[k]}
                value={dims[k]}
                onChange={(e) => setDims((d) => ({ ...d, [k]: e.target.value }))}
              />
            ))}
          </div>
        </div>
        <div className="field">
          <span className="lbl">Finish</span>
          <Chips label="Finish" options={FINISHES} value={finish} onChange={setFinish} />
        </div>
      </div>

      <div className="pane" data-step="3" hidden={step !== 3}>
        <p className="stepper">Step 3 of 3</p>
        <h3>Where should we send your price?</h3>
        <div className="row2">
          <div className="field">
            <label htmlFor="q-name">Name</label>
            <input id="q-name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="field">
            <label htmlFor="q-country">Country</label>
            <select id="q-country" value={country} onChange={(e) => setCountry(e.target.value)}>
              {allCountries.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="field">
          <label htmlFor="q-email">Work email</label>
          <input id="q-email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="q-msg">Anything else? (optional)</label>
          <textarea id="q-msg" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Artwork ready, deadline, inserts…" />
        </div>
        <div className="hp" aria-hidden="true">
          <label htmlFor="q-hp">Company website</label>
          <input id="q-hp" name="company_website" tabIndex={-1} autoComplete="off" />
        </div>
        {error && <p className="err" role="alert">{error}</p>}
      </div>

      <div className="pane done" data-step="4" hidden={step !== 4} aria-live="polite">
        <h3>Thanks, your request is in.</h3>
        <p>A packaging specialist will email you a price and options shortly. Check your spam folder if nothing arrives.</p>
      </div>

      {step < 4 && (
        <div className="actions">
          {step > 1 ? (
            <button type="button" className="linkbtn" onClick={() => go(step - 1)}>
              ← Back
            </button>
          ) : (
            <span />
          )}
          <button type="submit" className="btn btn-plum" disabled={sending}>
            {step === 3 ? (sending ? "Sending…" : "Send my quote request") : "Continue →"}
          </button>
        </div>
      )}
    </form>
  );
}
