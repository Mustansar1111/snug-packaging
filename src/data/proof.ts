/**
 * Social proof for the site. Everything here marked `placeholder: true` is an EXAMPLE, not a real customer.
 * Replace each entry with a real one (and set placeholder to false) before launch.
 * Placeholders only render when NEXT_PUBLIC_SHOW_PLACEHOLDERS=true, so they never reach the live site by accident.
 */

export type Logo = { name: string; placeholder: boolean };
export type Review = { quote: string; name: string; company: string; country: string; placeholder: boolean };
export type Story = {
  brand: string;
  industry: string;
  country: string;
  problem: string;
  box: string;
  result: string;
  quote: string;
  slug: string;
  placeholder: boolean;
};

export const logos: Logo[] = [
  { name: "Your client", placeholder: true },
  { name: "Brand two", placeholder: true },
  { name: "Brand three", placeholder: true },
  { name: "Brand four", placeholder: true },
  { name: "Brand five", placeholder: true },
  { name: "Brand six", placeholder: true },
];

export const reviews: Review[] = [
  {
    quote: "Example review. Replace with a real customer's words about the proof, the print quality or the delivery.",
    name: "Customer name",
    company: "Company",
    country: "USA",
    placeholder: true,
  },
  {
    quote: "Example review. A short quote works best: one or two sentences about what the customer liked.",
    name: "Customer name",
    company: "Company",
    country: "UK",
    placeholder: true,
  },
  {
    quote: "Example review. Ask permission before you use a customer's name and company.",
    name: "Customer name",
    company: "Company",
    country: "Australia",
    placeholder: true,
  },
];

export const stories: Story[] = [
  {
    brand: "Example skincare brand",
    industry: "Cosmetics",
    country: "USA",
    problem: "What the brand needed, in one sentence.",
    box: "Soft-touch tuck boxes with gold foil",
    result: "What changed after the new boxes, ideally with a number.",
    quote: "A short quote from the founder goes here.",
    slug: "cosmetic-boxes",
    placeholder: true,
  },
  {
    brand: "Example coffee roaster",
    industry: "Coffee",
    country: "UK",
    problem: "What the brand needed, in one sentence.",
    box: "Kraft mylar pouches with a matte label",
    result: "What changed after the new packaging, ideally with a number.",
    quote: "A short quote from the founder goes here.",
    slug: "coffee-packaging",
    placeholder: true,
  },
  {
    brand: "Example clothing label",
    industry: "Apparel",
    country: "Australia",
    problem: "What the brand needed, in one sentence.",
    box: "Printed mailer boxes with inside print",
    result: "What changed after the new boxes, ideally with a number.",
    quote: "A short quote from the founder goes here.",
    slug: "mailer-boxes",
    placeholder: true,
  },
];
