export type Industry = {
  slug: string;
  name: string;
  title: string;
  intro: string;
  /** Packaging styles to show, by category slug. */
  styles: string[];
  /** Style picked in the quote form by default. */
  defaultStyle: string;
  needs: { h: string; p: string }[];
  faqs: { q: string; a: string }[];
};

export const industries: Industry[] = [
  {
    slug: "cosmetics",
    name: "Cosmetics & beauty",
    title: "Custom cosmetic packaging that looks good on the shelf.",
    intro: "Tuck boxes, rigid gift boxes and jars for skincare, makeup and haircare, printed in your brand colours from 100 units.",
    styles: ["cosmetic-boxes", "cosmetic-jars", "tuck-boxes", "rigid-boxes", "soap-boxes", "labels-and-stickers", "mailer-boxes", "gift-boxes"],
    defaultStyle: "Cosmetic Boxes",
    needs: [
      { h: "Shelf appeal", p: "Soft-touch lamination, foil and spot UV make a small box feel premium." },
      { h: "A snug fit", p: "Inserts hold bottles, droppers and jars still, so nothing rattles or leaks." },
      { h: "Room for the rules", p: "We leave space on the dieline for ingredients, barcodes and batch codes." },
    ],
    faqs: [
      { q: "Can you match my brand colour exactly?", a: "Yes. Give us your Pantone code and we print to it, or we match CMYK as closely as the board allows." },
      { q: "Can I order a few sizes in one order?", a: "Yes. Tell us each size and quantity in the quote form and we'll price them together." },
    ],
  },
  {
    slug: "food-and-bakery",
    name: "Food & bakery",
    title: "Food and bakery boxes made with food-safe board.",
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
    title: "Apparel boxes and mailers for an unboxing people share.",
    intro: "Printed mailers, rigid boxes, tissue-ready gift boxes, hang tags and bags for clothing and accessories brands.",
    styles: ["apparel-boxes", "mailer-boxes", "rigid-boxes", "hang-tags", "paper-bags", "tote-bags", "poly-bags", "jewellery-boxes"],
    defaultStyle: "Apparel Boxes",
    needs: [
      { h: "Print inside the box", p: "A printed inside lid is the first thing customers see when they open it." },
      { h: "Strong for the post", p: "Corrugated mailers survive courier trips and still look good on arrival." },
      { h: "A matching set", p: "Boxes, tags and bags printed together so the whole order looks like one brand." },
    ],
    faqs: [
      { q: "Can you print on the inside and outside?", a: "Yes. Send artwork for both sides and we print the inside and outside of the box." },
      { q: "Do you make hang tags and bags too?", a: "Yes. Add them to the same quote and we'll match the colours across everything." },
    ],
  },
  {
    slug: "cbd-and-candles",
    name: "CBD & candles",
    title: "Packaging for CBD, hemp and candle brands.",
    intro: "CBD and pre-roll boxes, mylar pouches and candle boxes with inserts, printed from 100 units.",
    styles: ["cbd-boxes", "hemp-boxes", "pre-roll-boxes", "mylar-bags", "candle-boxes", "tube-packaging", "labels-and-stickers", "rigid-boxes"],
    defaultStyle: "CBD Boxes",
    needs: [
      { h: "Space for labelling", p: "Room on the box for the information your market requires." },
      { h: "Inserts for glass", p: "Card inserts hold candle jars and tincture bottles in place." },
      { h: "Smell-proof pouches", p: "Mylar pouches with zip closures keep products fresh." },
    ],
    faqs: [
      { q: "Can you add child-resistant features?", a: "Ask us in the quote form. Tell us what your market requires and we'll tell you what we can make." },
      { q: "Can candle boxes hold a glass jar safely?", a: "Yes. We add a card insert sized to your jar so it can't move in transit." },
    ],
  },
  {
    slug: "subscription-boxes",
    name: "Subscription boxes",
    title: "Subscription boxes that make every delivery feel like a gift.",
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
    title: "Retail packaging that sells from the shelf.",
    intro: "Product boxes, display boxes, window boxes and tuck boxes for products sold in shops and online.",
    styles: ["retail-boxes", "product-boxes", "display-boxes", "tuck-boxes", "window-boxes", "pillow-boxes", "gable-boxes", "labels-and-stickers"],
    defaultStyle: "Retail Boxes",
    needs: [
      { h: "Stand out on the shelf", p: "Bright full-colour print with foil or spot UV draws the eye." },
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
