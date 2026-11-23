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
  // Product pages link to their parent and siblings first; parents link to their own products.
  const family = categories.filter(
    (c) => c.slug !== cat.slug && (c.slug === cat.parent || (cat.parent && c.parent === cat.parent) || c.parent === cat.slug),
  );
  const sameIcon = categories.filter((c) => c.slug !== cat.slug && c.icon === cat.icon);
  const sameGroup = categories.filter((c) => c.slug !== cat.slug && c.group === cat.group && c.icon !== cat.icon);
  return [...new Set([...family, ...sameIcon, ...sameGroup])].slice(0, limit);
}

export function joinList(items: string[]): string {
  if (items.length < 2) return items.join("");
  return `${items.slice(0, -1).join(", ")} and ${items.at(-1)}`;
}

export function categoryFaqs(cat: Category) {
  const lower = cat.name.toLowerCase();
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
