"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/packaging", label: "Packaging" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/samples", label: "Free samples" },
  { href: "/shipping", label: "Shipping" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const current = (href: string) => (pathname === href || pathname.startsWith(`${href}/`) ? "page" : undefined);

  return (
    <header className="site-head band">
      <div className="wrap">
        <Link className="logo" href="/" aria-label="Musa Packaging home">
          <b>musa</b>
          <span>packaging</span>
        </Link>
        <nav className="nav" aria-label="Main">
          {links.map((l) => (
            <Link key={l.href} href={l.href} aria-current={current(l.href)}>
              {l.label}
            </Link>
          ))}
        </nav>
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
