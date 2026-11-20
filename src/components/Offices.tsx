import { officeLines, site, telHref, whatsappHref } from "@/lib/site";

/** Office addresses and contact links, used in the footer and on the contact page. */
export function Offices({ variant = "footer" }: { variant?: "footer" | "cards" }) {
  if (variant === "footer") {
    return (
      <>
        {site.offices.map((o) => (
          <address key={o.code} className="foot-addr">
            <b>{o.country}</b>
            {officeLines(o).slice(0, 2).map((l) => (
              <span key={l}>{l}</span>
            ))}
          </address>
        ))}
      </>
    );
  }
  return (
    <div className="offices" data-reveal-group>
      {site.offices.map((o) => (
        <address key={o.code} className="office">
          <p className="eyebrow">{o.country}</p>
          {officeLines(o).map((l) => (
            <span key={l}>{l}</span>
          ))}
        </address>
      ))}
      <div className="office">
        <p className="eyebrow">Talk to us</p>
        <a href={`mailto:${site.email}`}>{site.email}</a>
        {site.phone && <a href={telHref(site.phone)}>{site.phone}</a>}
        {site.whatsapp && (
          <a href={whatsappHref("Hi Snug Packaging, I'd like a quote for custom packaging.")} rel="noopener">
            WhatsApp {site.phone}
          </a>
        )}
      </div>
    </div>
  );
}

/** Floating WhatsApp button, shown on every page. */
export function WhatsAppButton() {
  if (!site.whatsapp) return null;
  return (
    <a
      className="wa-float"
      href={whatsappHref("Hi Snug Packaging, I'd like a quote for custom packaging.")}
      rel="noopener"
      aria-label="Chat with us on WhatsApp"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" width="28" height="28">
        <path
          fill="currentColor"
          d="M16 3C9 3 3.3 8.6 3.3 15.6c0 2.4.7 4.7 1.9 6.7L3 29l6.9-2.2c1.9 1 4 1.6 6.1 1.6 7 0 12.7-5.7 12.7-12.7S23 3 16 3zm0 23.2c-1.9 0-3.8-.5-5.4-1.5l-.4-.2-4.1 1.3 1.3-4-.3-.4a10.4 10.4 0 0 1-1.6-5.6C5.5 9.8 10.2 5.2 16 5.2s10.5 4.7 10.5 10.5S21.8 26.2 16 26.2zm5.8-7.8c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7 0a8.6 8.6 0 0 1-4.3-3.7c-.3-.6.3-.5.9-1.7.1-.2 0-.4 0-.6l-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.1-1.2 2.8 1.2 3.2 1.4 3.5c.2.2 2.4 3.6 5.8 5 2.1.9 3 1 4 .8.7-.1 1.9-.8 2.2-1.5s.3-1.4.2-1.5c0-.1-.3-.2-.6-.4z"
        />
      </svg>
    </a>
  );
}
