"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

/** Dropdown menus. Kept as plain lists here so the header doesn't pull the whole catalogue into the browser. */
const menus: Record<string, { href: string; label: string }[]> = {
  "/packaging": [
    { href: "/packaging/mailer-boxes", label: "Mailer boxes" },
    { href: "/packaging/shipping-boxes", label: "Shipping boxes" },
    { href: "/packaging/rigid-boxes", label: "Rigid boxes" },
    { href: "/packaging/magnetic-closure-boxes", label: "Magnetic closure boxes" },
    { href: "/packaging/folding-cartons", label: "Folding cartons" },
    { href: "/packaging/kraft-boxes", label: "Kraft boxes" },
    { href: "/packaging/stand-up-pouches", label: "Stand-up pouches" },
    { href: "/packaging/labels-and-stickers", label: "Labels & stickers" },
    { href: "/custom-boxes-with-logo", label: "Custom boxes with logo" },
    { href: "/packaging", label: "All packaging →" },
  ],
  "/industries": [
    { href: "/industries/cosmetics", label: "Cosmetics & beauty" },
    { href: "/industries/food-and-bakery", label: "Food & bakery" },
    { href: "/industries/apparel", label: "Apparel & fashion" },
    { href: "/industries/cbd-and-candles", label: "CBD & candles" },
    { href: "/industries/subscription-boxes", label: "Subscription boxes" },
    { href: "/industries/retail", label: "Retail" },
    { href: "/small-business-packaging", label: "Small business" },
    { href: "/wholesale-custom-boxes", label: "Wholesale" },
  ],
};

const links = [
  { href: "/packaging", label: "Packaging" },
  { href: "/industries", label: "Industries" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/free-mockup", label: "Free mockup" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export function Header({ phone }: { phone?: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const current = (href: string) => (pathname === href || pathname.startsWith(`${href}/`) ? "page" : undefined);

  return (
    <header className="site-head band">
      <div className="wrap">
        <Link className="logo" href="/" aria-label="Snug Packaging home">
          <b>snug</b>
          <span>packaging</span>
        </Link>
        <nav className="nav" aria-label="Main">
          {links.map((l) =>
            menus[l.href] ? (
              <div className="nav-item" key={l.href}>
                <Link href={l.href} aria-current={current(l.href)} aria-haspopup="true">
                  {l.label} <span aria-hidden="true">▾</span>
                </Link>
                <div className="nav-menu">
                  {menus[l.href].map((m) => (
                    <Link key={m.href} href={m.href}>
                      {m.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={l.href} href={l.href} aria-current={current(l.href)}>
                {l.label}
              </Link>
            ),
          )}
        </nav>
        {phone && (
          <a className="head-phone" href={`tel:${phone.replace(/[^\d+]/g, "")}`}>
            {phone}
          </a>
        )}
        <Link className="btn btn-apricot head-cta" href="/quote">
          Get a quote
        </Link>
        <button className="menu-btn" type="button" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen((o) => !o)}>
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" className="wrap mobile-nav" aria-label="Mobile">
          {[...links, { href: "/quote", label: "Get a quote" }].map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
