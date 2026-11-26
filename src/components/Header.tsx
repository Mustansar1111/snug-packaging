"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { SocialIcons, type SocialLinks } from "./Social";

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

export function Header({ phone, email, social = {} }: { phone?: string; email?: string; social?: SocialLinks }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  // Touch screens have no hover, so the first tap on "Packaging" or "Industries" opens its dropdown
  // and a second tap goes to the page.
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!openMenu) return;
    const close = (e: PointerEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, [openMenu]);
  // Blur too: the menu also opens on :focus-within, and the header stays mounted across page changes.
  const closeMenu = () => {
    setOpenMenu(null);
    (document.activeElement as HTMLElement | null)?.blur();
  };
  const onMenuTap = (href: string) => (e: React.MouseEvent) => {
    if (openMenu === href || window.matchMedia("(hover: hover)").matches) {
      closeMenu();
      return;
    }
    e.preventDefault();
    setOpenMenu(href);
  };
  const current = (href: string) => (pathname === href || pathname.startsWith(`${href}/`) ? "page" : undefined);

  return (
    <header className="site-head band">
      <div className="head-top">
        <div className="wrap">
          <span className="head-contact">
            {email && (
              <a href={`mailto:${email}`}>
                <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
                </svg>
                {email}
              </a>
            )}
            {phone && (
              <a className="head-tel" href={`tel:${phone.replace(/[^\d+]/g, "")}`}>
                <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
                </svg>
                {phone}
              </a>
            )}
          </span>
          <SocialIcons links={social} className="social head-social" />
        </div>
      </div>
      <div className="wrap">
        <Link className="logo" href="/" aria-label="Snug Packaging home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/snug-logo.svg" alt="Snug Packaging" width={1332} height={402} />
        </Link>
        <nav className="nav" aria-label="Main" ref={navRef}>
          {links.map((l) =>
            menus[l.href] ? (
              <div className={openMenu === l.href ? "nav-item is-open" : "nav-item"} key={l.href}>
                <Link
                  href={l.href}
                  aria-current={current(l.href)}
                  aria-haspopup="true"
                  aria-expanded={openMenu === l.href}
                  onClick={onMenuTap(l.href)}
                >
                  {l.label} <span aria-hidden="true">▾</span>
                </Link>
                <div className="nav-menu">
                  {menus[l.href].map((m) => (
                    <Link key={m.href} href={m.href} onClick={closeMenu}>
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
