export type Industry = {
  slug: string;
  name: string;
  title: string;
  /** Browser tab and Google title. */
  seo: string;
  intro: string;
  /** Packaging styles to show, by category slug. */
  styles: string[];
  /** Style picked in the quote form by default. */
  defaultStyle: string;
  needs: { h: string; p: string }[];
  faqs: { q: string; a: string }[];
  /** Optional meta description. Falls back to the intro. */
  description?: string;
  /** Optional short answer shown under the hero, written to be quotable on its own. */
  answer?: { q: string; a: string };
  /** Optional long-form guide: question headings with short answers. Links use [text](/path). */
  guide?: { q: string; a: string[] }[];
  /** Optional blog guides to feature, by post slug. */
  posts?: string[];
};

export const industries: Industry[] = [
  {
    slug: "cosmetics",
    name: "Cosmetics & beauty",
    title: "Custom cosmetic packaging that looks good on the shelf.",
    seo: "Custom Cosmetic Boxes & Beauty Packaging",
    intro: "Tuck boxes, rigid gift boxes and jars for skincare, makeup and haircare, printed in your brand colors from 100 units.",
    styles: ["cosmetic-boxes", "cosmetic-jars", "tuck-boxes", "rigid-boxes", "soap-boxes", "labels-and-stickers", "mailer-boxes", "gift-boxes"],
    defaultStyle: "Cosmetic Boxes",
    needs: [
      { h: "Shelf appeal", p: "Soft-touch lamination, foil and spot UV make a small box feel premium." },
      { h: "A snug fit", p: "Inserts hold bottles, droppers and jars still, so nothing rattles or leaks." },
      { h: "Room for the rules", p: "We leave space on the dieline for ingredients, barcodes and batch codes." },
    ],
    faqs: [
      { q: "Can you match my brand color exactly?", a: "Yes. Give us your Pantone code and we print to it, or we match CMYK as closely as the board allows." },
      { q: "Can I order a few sizes in one order?", a: "Yes. Tell us each size and quantity in the quote form and we'll price them together." },
    ],
  },
  {
    slug: "food-and-bakery",
    name: "Food & bakery",
    title: "Custom food and bakery boxes, made with food-safe board.",
    seo: "Custom Food & Bakery Boxes, Food-Safe",
    intro: "Bakery, pizza, chocolate and takeaway boxes, plus coffee and tea pouches, printed with your branding.",
    styles: ["bakery-boxes", "food-boxes", "pizza-boxes", "chocolate-boxes", "cereal-boxes", "coffee-packaging", "tea-packaging", "window-boxes"],
    defaultStyle: "Bakery Boxes",
    needs: [
      { h: "Food-safe materials", p: "Food-grade board and linings for products that touch the packaging." },
      { h: "Show the product", p: "Window cut-outs let customers see cakes, cookies and chocolates inside." },
      { h: "Grease and moisture", p: "Coatings and liners keep oil and steam from soaking through." },
    ],
    faqs: [
      { q: "Is your board safe for direct food contact?", a: "We offer food-grade board for products that touch the box. Tell us what you're packing and we'll recommend the right one." },
      { q: "Can you add a window?", a: "Yes. We can cut a window in any shape and cover it with clear film." },
    ],
  },
  {
    slug: "apparel",
    name: "Apparel & fashion",
    title: "Custom apparel boxes and mailers people love to unbox.",
    seo: "Custom Apparel Boxes & Clothing Packaging",
    intro: "Printed mailers, rigid boxes, tissue-ready gift boxes, hang tags and bags for clothing and accessories brands.",
    styles: ["apparel-boxes", "mailer-boxes", "rigid-boxes", "hang-tags", "paper-bags", "tote-bags", "poly-bags", "jewelry-boxes"],
    defaultStyle: "Apparel Boxes",
    needs: [
      { h: "Print inside the box", p: "A printed inside lid is the first thing customers see when they open it." },
      { h: "Strong for the post", p: "Corrugated mailers survive courier trips and still look good on arrival." },
      { h: "A matching set", p: "Boxes, tags and bags printed together so the whole order looks like one brand." },
    ],
    faqs: [
      { q: "Can you print on the inside and outside?", a: "Yes. Send artwork for both sides and we print the inside and outside of the box." },
      { q: "Do you make hang tags and bags too?", a: "Yes. Add them to the same quote and we'll match the colors across everything." },
    ],
  },
  {
    slug: "cbd-and-candles",
    name: "CBD & candles",
    title: "Custom CBD, hemp and candle boxes.",
    seo: "Custom CBD Boxes & Candle Packaging",
    description:
      "Custom CBD boxes, mylar pouches and candle boxes with inserts for glass, printed with room for dosage, batch and warning text. From 100 units.",
    intro: "CBD and pre-roll boxes, mylar pouches and candle boxes with inserts, printed from 100 units.",
    answer: {
      q: "Why are CBD and candle packaging grouped together?",
      a: "CBD products and candles have the same three packaging problems: heavy glass that needs an insert, a lot of required text on a small box, and shoppers who judge quality by the packaging. Many wellness and home fragrance brands also sell both, so one supplier and one design system keeps the range consistent.",
    },
    styles: ["cbd-boxes", "hemp-boxes", "pre-roll-boxes", "mylar-bags", "candle-boxes", "tube-packaging", "labels-and-stickers", "rigid-boxes"],
    defaultStyle: "CBD Boxes",
    needs: [
      { h: "Space for labeling", p: "Room on the box for the information your market requires." },
      { h: "Inserts for glass", p: "Card inserts hold candle jars and tincture bottles in place." },
      { h: "Smell-proof pouches", p: "Mylar pouches with zip closures keep products fresh." },
    ],
    guide: [
      {
        q: "What should a CBD box include?",
        a: [
          "Most CBD cartons carry the product name, CBD strength per serving and per pack, ingredients, directions, warnings, a batch number and a QR code to lab results. Rules change between countries and states, so confirm what applies to you before artwork is final. We print the wording you supply and leave room for it on the dieline.",
          "For tinctures and oils, see [CBD oil boxes](/packaging/cbd-oil-boxes). For gummies and edibles, see [CBD gummies boxes](/packaging/cbd-gummies-boxes).",
        ],
      },
      {
        q: "How do you keep a candle jar safe in a box?",
        a: [
          "Size the box closely to the jar and add a card collar or die-cut insert so the glass can't touch the walls. For posting, use E-flute corrugated or ship the candle box inside a [mailer box](/packaging/mailer-boxes). Our [candle boxes](/packaging/candle-boxes) page covers lids, tins and wax melts.",
        ],
      },
      {
        q: "Box or pouch for CBD flower, gummies and pre-rolls?",
        a: [
          "Pouches are lighter and, when heat-sealed, hold in smell and keep out moisture. A printed [mylar bag](/packaging/mylar-bags) works on its own or inside a carton. Boxes give more space for branding and stack better on a shelf. [Pre-roll boxes](/packaging/pre-roll-boxes) and [tubes](/packaging/tube-packaging) suit single pre-rolls and small packs.",
        ],
      },
      {
        q: "Which finishes suit CBD and candle brands?",
        a: [
          "Earthy brands lean on [kraft](/packaging/kraft-boxes) and [hemp-style boxes](/packaging/hemp-boxes) with one or two inks. Clinical CBD brands use clean white board and simple type. Luxury candles suit soft-touch, foil and a [rigid box](/packaging/rigid-boxes). Our [finishes guide](/blog/packaging-finishes-explained) explains each one.",
        ],
      },
    ],
    faqs: [
      { q: "Can you add child-resistant features?", a: "Ask us in the quote form. Tell us what your market requires and we'll tell you what we can make." },
      { q: "Can candle boxes hold a glass jar safely?", a: "Yes. We add a card insert sized to your jar so it can't move in transit." },
      { q: "Can I print a lab-results QR code on CBD boxes?", a: "Yes. Send the code or link and we'll place it where it scans easily." },
      { q: "Are mylar bags smell-proof?", a: "When heat-sealed, mylar is highly smell-resistant. Boxes on their own are not." },
      { q: "Do you make boxes for candle tins and wax melts?", a: "Yes. Send the size of the tin or clamshell and we'll suggest a box or sleeve." },
      { q: "Can one order include CBD boxes and candle boxes?", a: "Yes. Each design has its own 100-unit minimum, and you can quote them together." },
    ],
    posts: ["packaging-finishes-explained", "kraft-vs-white-boxes", "what-is-a-dieline"],
  },
  {
    slug: "subscription-boxes",
    name: "Subscription boxes",
    title: "Custom subscription boxes that feel like a gift every month.",
    seo: "Custom Subscription Boxes with Your Logo",
    intro: "Printed mailer boxes, inserts and stickers for monthly boxes, built to protect the contents and look great on camera.",
    styles: ["mailer-boxes", "shipping-boxes", "corrugated-boxes", "trays-and-sleeves", "labels-and-stickers", "gift-boxes", "rigid-boxes", "poly-bags"],
    defaultStyle: "Mailer Boxes",
    needs: [
      { h: "Survives the post", p: "E-flute and B-flute corrugated mailers protect products in courier networks." },
      { h: "A reveal moment", p: "Inside print, inserts and sleeves turn opening the box into part of the product." },
      { h: "Seasonal designs", p: "Change the sleeve or sticker each month while the main box stays the same." },
    ],
    faqs: [
      { q: "Can I change the design every month?", a: "Yes. Many brands keep one printed box and change a sleeve, sticker or insert card each month." },
      { q: "Will the box fit through a letterbox?", a: "Tell us the size limit for your market and we'll design the box to fit it." },
    ],
  },
  {
    slug: "retail",
    name: "Retail",
    title: "Custom retail packaging that sells from the shelf.",
    seo: "Custom Retail Packaging & Product Boxes",
    intro: "Product boxes, display boxes, window boxes and tuck boxes for products sold in shops and online.",
    styles: ["retail-boxes", "product-boxes", "display-boxes", "tuck-boxes", "window-boxes", "pillow-boxes", "gable-boxes", "labels-and-stickers"],
    defaultStyle: "Retail Boxes",
    needs: [
      { h: "Stand out on the shelf", p: "Bright full-color print with foil or spot UV draws the eye." },
      { h: "Counter displays", p: "Display boxes turn a shipping carton into a ready-made stand at the till." },
      { h: "Barcodes that scan", p: "We check barcode size and placement on your proof." },
    ],
    faqs: [
      { q: "Can you make a display box for the counter?", a: "Yes. Display boxes ship flat and fold into a stand with a printed header." },
      { q: "Can you add a hang hole?", a: "Yes. We can add a hang tab so the box hangs on retail pegs." },
    ],
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
