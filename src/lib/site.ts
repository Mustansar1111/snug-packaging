import { categories, featuredSlugs } from "@/data/categories";
import type { Category, CategoryGroup } from "@/data/types";
import { quoteReply, quoteReplyDays, quoteReplyShort } from "./promise";

export const site = {
  name: "Snug Packaging",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://snugpackaging.com",
  description:
    "Custom boxes and packaging printed with your logo, from 100 units. Mailer, rigid and retail boxes for brands in the USA, UK, Australia and Europe.",
  legalName: "Snug Packaging",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "sales@snugpackaging.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+1 (786) 885-8250",
  // WhatsApp number in international format, digits only. Empty hides the WhatsApp links.
  whatsapp: (process.env.NEXT_PUBLIC_WHATSAPP ?? "17868858250").replace(/\D/g, ""),
  offices: [
    { country: "United Kingdom", code: "GB", street: "91 Grantham Road", city: "Bradford", region: "", postcode: "BD7 1RN" },
    { country: "United States", code: "US", street: "178 NY-59 Ste 301", city: "Airmont", region: "NY", postcode: "10952" },
  ],
  /**
   * Public profiles that confirm the business is real (Google Business Profile, Instagram, LinkedIn,
   * Trustpilot...). They go into the Organization schema as sameAs. Add each one once it exists.
   */
  profiles: (process.env.NEXT_PUBLIC_PROFILES ?? "").split(",").map((u) => u.trim()).filter(Boolean),
  /**
   * Instagram and Facebook page URLs, shown as icons in the header and footer and added to the
   * Organization schema. Paste the full profile URL here (or set the env vars on Netlify).
   */
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://www.instagram.com/snug.packaging/",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "https://www.facebook.com/Snug.Packaging/",
  },
  /** Link where customers can leave a review (Google review link or Trustpilot). Empty hides the button. */
  reviewUrl: process.env.NEXT_PUBLIC_REVIEW_URL ?? "",
  /**
   * The real person who writes or checks the guides (founder, designer...). Set NEXT_PUBLIC_AUTHOR_NAME
   * (and optionally NEXT_PUBLIC_AUTHOR_ROLE, NEXT_PUBLIC_AUTHOR_URL for a LinkedIn page) to credit them by
   * name on every guide. Until then guides are credited to the company, never to an invented name.
   */
  author: {
    name: process.env.NEXT_PUBLIC_AUTHOR_NAME ?? "",
    role: process.env.NEXT_PUBLIC_AUTHOR_ROLE ?? "",
    url: process.env.NEXT_PUBLIC_AUTHOR_URL ?? "",
  },
  moq: 100,
  turnaround: "10–12 business days",
  quoteReply,
  quoteReplyDays,
  quoteReplyShort,
};

/** Placeholder proof (logos, reviews, stories) shows only when this is on, so a launch can never show made-up proof by accident. */
export const showPlaceholders = process.env.NEXT_PUBLIC_SHOW_PLACEHOLDERS === "true";

export const industrySlugs = ["cosmetic-boxes", "candle-boxes", "apparel-boxes", "food-boxes", "coffee-packaging", "cbd-boxes", "jewelry-boxes", "bakery-boxes"];

export function industryCategories(): Category[] {
  return industrySlugs.map((s) => getCategory(s)).filter((c): c is Category => Boolean(c));
}

export const materials: { key: string; label: string; blurb: string; test: RegExp }[] = [
  { key: "corrugated", label: "Corrugated", blurb: "Fluted board that protects products in the post.", test: /corrugated|flute/i },
  { key: "rigid", label: "Rigid board", blurb: "Thick greyboard wrapped in printed paper, for a luxury feel.", test: /rigid|greyboard|chipboard/i },
  { key: "kraft", label: "Kraft", blurb: "Natural brown board with an eco look.", test: /kraft/i },
  { key: "card", label: "SBS card", blurb: "Smooth white card that prints sharp, bright color.", test: /SBS|cardstock|24pt card/i },
  { key: "film", label: "Film, paper & tin", blurb: "Pouches, bags, labels and tins.", test: /film|laminate|vinyl|tinplate|coated paper|uncoated/i },
];

export function materialCategories(key: string): Category[] {
  const m = materials.find((x) => x.key === key);
  return m ? categories.filter((c) => m.test.test(c.material)) : [];
}

export const groups: { key: CategoryGroup; label: string; blurb: string }[] = [
  { key: "styles", label: "Box styles", blurb: "Pick the shape first: mailers, rigid boxes, tuck boxes and more." },
  { key: "industries", label: "By industry", blurb: "Packaging made for what you sell, from cosmetics to coffee." },
  { key: "bags", label: "Bags & pouches", blurb: "Mylar pouches, paper bags, totes and mailer bags." },
  { key: "print", label: "Labels, tags & more", blurb: "Labels, hang tags, tins and gift wrap to finish the look." },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function featuredCategories(): Category[] {
  return featuredSlugs.map((s) => getCategory(s)).filter((c): c is Category => Boolean(c));
}

export function relatedCategories(cat: Category, limit = 4): Category[] {
  // Product pages link to their parent and then their siblings. Siblings are taken in turn starting
  // just after this page, so every product in a family gets linked from its neighbours, not only the
  // first few. Parent pages link to their own products.
  const parent = cat.parent ? categories.find((c) => c.slug === cat.parent) : undefined;
  const family = cat.parent ? categories.filter((c) => c.parent === cat.parent) : [];
  const at = family.findIndex((c) => c.slug === cat.slug);
  const siblings = [...family.slice(at + 1), ...family.slice(0, at)];
  const children = categories.filter((c) => c.parent === cat.slug);
  const sameIcon = categories.filter((c) => c.slug !== cat.slug && c.icon === cat.icon);
  const sameGroup = categories.filter((c) => c.slug !== cat.slug && c.group === cat.group && c.icon !== cat.icon);
  return [...new Set([...(parent ? [parent] : []), ...siblings, ...children, ...sameIcon, ...sameGroup])].slice(0, limit);
}

export function joinList(items: string[]): string {
  if (items.length < 2) return items.join("");
  return `${items.slice(0, -1).join(", ")} and ${items.at(-1)}`;
}

export function categoryFaqs(cat: Category) {
  const lower = lowerName(cat.name);
  return [
    {
      q: `What is the minimum order for ${lower}?`,
      a: `You can order ${lower} from ${site.moq} units. Larger runs bring the price per unit down, and your quote shows the options.`,
    },
    {
      q: `What are your ${lower} made from?`,
      a: `We usually recommend ${cat.material}, made as a ${cat.style}. If your product needs something different, tell us in the quote form and we'll suggest the right board.`,
    },
    {
      q: `Which finishes can I choose?`,
      a: `Popular choices for ${lower} are ${cat.finish}. We also offer embossing, debossing, window cut-outs, custom inserts and printing on the inside.`,
    },
    {
      q: "Can you make them to my exact size?",
      a: "Yes. Every order is made to your inside dimensions, in inches, centimeters or millimeters. If you're unsure, send us your product and we'll measure it for you.",
    },
  ];
}

export const generalFaqs = [
  { q: "What is the minimum order?", a: `You can order from ${site.moq} units for most styles. Larger quantities lower the price per unit.` },
  { q: "How long does production take?", a: `Production takes ${site.turnaround} after you approve your proof. Delivery time depends on where you are.` },
  { q: "Can you help with my artwork?", a: "Yes. Our design team sets up your artwork on the dieline for free and sends a 3D mockup before anything is printed." },
  { q: "Do you ship to the UK, Australia and Europe?", a: "Yes. We deliver to the USA, UK, Australia and across Europe, and your quote includes delivery to your address." },
  { q: "Why don't you show prices?", a: "Every order is made to your size, material, finish and quantity, so a fixed price list would never match. A quote is free and gives you an exact figure." },
];

export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;
export const whatsappHref = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
export const officeLines = (o: (typeof site.offices)[number]) =>
  [o.street, o.region ? `${o.city}, ${o.region} ${o.postcode}` : `${o.city} ${o.postcode}`, o.country];

/**
 * Build a meta description that fits Google's ~160 character snippet without cutting a word in half.
 * Starts with the page's own summary, then adds the longest closing line that still fits.
 * A summary that is too long on its own is trimmed at the last full word and closed with a period.
 */
export function metaDescription(summary: string, endings: string[] = [], max = 158): string {
  const base = summary.trim();
  if (base.length > max) {
    const cut = base.slice(0, max - 1);
    return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:–-]+$/, "")}.`;
  }
  const ending = endings.find((e) => base.length + 1 + e.length <= max);
  return ending ? `${base} ${ending}` : base;
}

/** Where we deliver, in the form schema.org expects (ISO country codes, plus Europe as a place). */
export const areaServed = [
  { "@type": "Country", name: "US" },
  { "@type": "Country", name: "GB" },
  { "@type": "Country", name: "AU" },
  { "@type": "Place", name: "Europe" },
];

/** Lowercase a name for use mid-sentence, but keep proper nouns and acronyms ("Christmas", "CBD") as they should be. */
export function lowerName(name: string): string {
  return name
    .toLowerCase()
    .replace(/\b(christmas|easter|valentine|halloween|diwali|eid|hanukkah)\b/g, (w) => w[0].toUpperCase() + w.slice(1))
    .replace(/\b(cbd|uk|usa|us|diy)\b/g, (w) => w.toUpperCase());
}

/**
 * Open Graph tags for a page. A page that sets its own openGraph replaces the layout's, so this always
 * returns the full set (site name, type, locale and the page URL, matching its canonical).
 */
export function og(path: string, { locale = "en_US", defaultImage = false }: { locale?: string; defaultImage?: boolean } = {}) {
  return {
    siteName: site.name,
    type: "website" as const,
    locale,
    url: path,
    // Pages without their own opengraph-image file lose the site-wide card once they set openGraph,
    // so they ask for it here. Pages with their own card must leave this off, or it would replace theirs.
    ...(defaultImage ? { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Snug Packaging: custom boxes from 100 units" }] } : {}),
  };
}

/**
 * hreflang links between the country pages. Every country page (and the home page, as x-default)
 * carries the same set, so Google can send UK searchers to /uk, Australians to /australia, and so on.
 */
export const regionLanguages: Record<string, string> = {
  "en-US": "/us",
  "en-GB": "/uk",
  "en-AU": "/australia",
  "en-NZ": "/australia",
  "en-IE": "/europe",
  "en-DE": "/europe",
  "en-FR": "/europe",
  "en-NL": "/europe",
  "en-BE": "/europe",
  "en-ES": "/europe",
  "en-IT": "/europe",
  "en-SE": "/europe",
  "en-DK": "/europe",
  "x-default": "/",
};
