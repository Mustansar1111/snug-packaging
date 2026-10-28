import { categories, featuredSlugs } from "@/data/categories";
import type { Category, CategoryGroup } from "@/data/types";

export const site = {
  name: "Musa Packaging",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://musapackaging.com",
  description:
    "Custom printed boxes, bags and labels from 100 units, for brands in the USA, UK, Australia and Europe. Free design help and a digital proof before we print.",
  // TODO: replace with Musa's own contact details before launch.
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@musapackaging.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "",
  moq: 100,
  turnaround: "10–12 business days",
};

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
  const sameIcon = categories.filter((c) => c.slug !== cat.slug && c.icon === cat.icon);
  const sameGroup = categories.filter((c) => c.slug !== cat.slug && c.group === cat.group && c.icon !== cat.icon);
  return [...sameIcon, ...sameGroup].slice(0, limit);
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
      a: "Yes. Every order is made to your inside dimensions, in inches or millimetres. If you're unsure, send us your product and we'll measure it for you.",
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
