/**
 * Extra depth for category pages: a longer intro, the box styles inside the category,
 * reasons to choose them, a short buyer's guide and category FAQs.
 * Written for Snug in Snug's own words. Never paste copy from OneClickPackaging:
 * the same text on two sites hurts both in Google.
 * A category without an entry here still gets the full page layout with general content.
 */
import type { RichContent } from "./content/types";
import { batch1 } from "./content/batch1";
import { batch2 } from "./content/batch2";
import { batch3 } from "./content/batch3";
import { productContent } from "./products";

export type { StyleEntry, StyleCard, RichContent } from "./content/types";


export const categoryContent: Record<string, RichContent> = {
  "cosmetic-boxes": {
    lede:
      "In beauty, the box is often the first thing a customer touches. We make cosmetic boxes that feel as good as the product inside, for makeup, skincare and fragrance brands of every size. Pick a style, send your size, and we print your artwork on the board and finish that suit your line, from 100 units.",
    // Product pages under cosmetic-boxes are added to this list automatically.
    styles: ["display-boxes", "cosmetic-jars"],
    features: [
      { title: "Made to your exact size", text: "Every box is cut to your product's inside dimensions, so nothing slides around and you don't pay for empty space." },
      { title: "Finishes that sell", text: "Soft-touch, foil, embossing and spot UV turn a plain carton into something people want to keep on the shelf." },
      { title: "Budget or luxury, your call", text: "Folding SBS cartons keep the cost per unit low; rigid boxes and magnetic lids lift a gift set or launch." },
      { title: "Small runs welcome", text: `Start from 100 boxes per design, so you can test a new shade or seasonal set without filling a warehouse.` },
    ],
    guide: [
      {
        h: "Which cosmetic box style should I choose?",
        p: [
          "For single products like lipstick, mascara or a serum bottle, a straight or reverse tuck end carton is the most popular choice. It is light, it folds flat for storage, and you can print every side.",
          "For gift sets, palettes and launches, a rigid box with a lid, drawer or magnetic flap feels far more premium. Add a card or foam insert so each product sits in its own cut-out.",
          "If you sell in shops, ask about a display box. It ships flat, folds into a counter-top tray and keeps your products together and facing the customer.",
        ],
      },
      {
        h: "Picking the right material",
        p: [
          "Most cosmetic cartons are printed on 16 to 18pt SBS card. It is smooth and bright white, so colors print sharp and fine type stays crisp.",
          "Kraft card suits natural and vegan brands that want a raw, earthy look. Rigid chipboard wrapped in printed paper is the go-to for luxury lines. For heavy glass, we can make the box in thin E-flute corrugated so it survives the post.",
        ],
      },
      {
        h: "Finishes that work well on beauty packaging",
        p: [
          "Soft-touch lamination gives a velvety feel that matches matte products. Gloss and spot UV add shine for shimmer and glow ranges.",
          "Gold, silver or rose-gold foil on a logo is a small cost that makes a big difference. Embossing or debossing adds texture that customers notice the moment they pick the box up.",
        ],
      },
      {
        h: "Getting your size right",
        p: [
          "Measure the product's length, width and height at the widest points, including the cap or pump, then add 2 to 3 mm on each side. Send us the numbers in inches, centimeters or millimeters and we check them before we make the dieline.",
          "Not sure? Tell us the product and its size, and we will suggest a box size and style in your quote.",
        ],
      },
    ],
    faqs: [
      { q: "Can I order a small number of cosmetic boxes?", a: "Yes. The minimum is 100 boxes per design, which suits new brands, samples and limited editions." },
      { q: "Do you make luxury cosmetic boxes?", a: "Yes. We make rigid boxes with magnetic lids, drawers and inserts, finished with foil, embossing and soft-touch." },
      { q: "Will the boxes protect glass bottles and jars?", a: "We add a card or foam insert sized to your product, and can use thin corrugated board for heavier items that ship by post." },
      { q: "Can you help with my box design?", a: "Yes, for free. Send your logo and brand colors and our designers lay out the artwork, then send a 3D mockup for you to approve." },
      { q: "Can you print inside the box?", a: "Yes. Printing inside the lid or base is a nice surprise for customers and is popular for skincare and makeup kits." },
    ],
  },
};

Object.assign(categoryContent, batch1, batch2, batch3, productContent);

export const getRichContent = (slug: string) => categoryContent[slug] ?? null;
