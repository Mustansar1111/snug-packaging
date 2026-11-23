/**
 * Region landing pages. Each one is written for buyers in that market:
 * the US page uses US spelling, the UK, Australia and Europe pages use UK spelling.
 */
export type Region = {
  slug: string;
  code: string;
  name: string;
  /** How buyers there talk about size (shown on the home page). */
  units: string;
  /** Default the quote form to millimetres. */
  mm: boolean;
  currency: string;
  /** Countries offered in the quote form for this region. */
  countries: string[];
  /** Browser tab and Google title. */
  seoTitle: string;
  description: string;
  headline: string;
  intro: string;
  sections: { h: string; p: string[] }[];
  popular: string[];
  faqs: { q: string; a: string }[];
};

export const regions: Region[] = [
  {
    slug: "us",
    code: "US",
    name: "United States",
    units: "inches",
    mm: false,
    currency: "USD",
    countries: ["United States"],
    seoTitle: "Custom Boxes USA, Low Minimum",
    description: "Custom boxes and printed packaging for US brands, from 100 units. Quoted in dollars, sized in inches, and delivered to all 50 states.",
    headline: "Custom boxes and packaging for US brands",
    intro: "Printed mailer, product and gift boxes for American brands, quoted in dollars with sizes in inches. Start from 100 boxes and get a free 3D mockup before you order.",
    sections: [
      {
        h: "Built for how US brands sell",
        p: [
          "Most of the US brands we work with sell online through Shopify, Etsy or Amazon, so the box has to survive UPS, FedEx and USPS and still look good on the porch. That's why [mailer boxes](/packaging/mailer-boxes) in E-flute corrugated are our best seller here.",
          "If you sell through Amazon FBA, tell us in your quote. Amazon has its own rules for box strength, size and labels, and we'll make sure your box suits them.",
        ],
      },
      {
        h: "Right-size your box, save on postage",
        p: [
          "UPS and FedEx charge by dimensional weight, so a box that's an inch too big on every side can cost you more on every order. Because every Snug box is made to your product's inside size in inches, there's less empty space, less filler and a smaller shipping bill. Our guide to [measuring for a custom box](/blog/how-to-measure-for-a-custom-box) shows how.",
        ],
      },
      {
        h: "Delivery across the US",
        p: [
          "We deliver to all 50 states, and your quote includes delivery to your door or warehouse. Production takes 10–12 business days after you approve your proof, and we confirm the delivery date in your quote. Need boxes split between two warehouses? Just ask.",
        ],
      },
    ],
    popular: ["mailer-boxes", "shipping-boxes", "folding-cartons", "magnetic-closure-boxes", "cosmetic-boxes", "candle-boxes", "stand-up-pouches", "labels-and-stickers"],
    faqs: [
      { q: "Do you ship custom boxes anywhere in the US?", a: "Yes, to all 50 states. Your quote includes delivery to your address." },
      { q: "Can I order custom boxes in small quantities in the US?", a: "Yes. Most styles start at 100 boxes, so you can test a design before ordering more." },
      { q: "Do you make boxes for Amazon FBA?", a: "Yes. Tell us you're shipping to FBA and we'll suggest a board and size that suit Amazon's packaging rules." },
      { q: "Can I give my sizes in inches?", a: "Yes. The quote form takes inches, centimeters or millimeters, and your proof shows the size in inches." },
    ],
  },
  {
    slug: "uk",
    code: "UK",
    name: "United Kingdom",
    units: "millimetres or inches",
    mm: true,
    currency: "GBP",
    countries: ["United Kingdom"],
    seoTitle: "Custom Boxes UK from 100 Units",
    description: "Custom printed boxes and packaging for UK brands, from 100 units. Quoted in pounds, sized in millimetres, delivered across England, Scotland, Wales and NI.",
    headline: "Custom boxes and packaging for UK brands",
    intro: "Printed mailer boxes, cartons and gift boxes for British brands, quoted in pounds with sizes in millimetres. Start from 100 boxes, with a free 3D mockup before you order.",
    sections: [
      {
        h: "Boxes that fit Royal Mail",
        p: [
          "A lot of UK brands want their orders to go as a Large Letter, which keeps postage low. Royal Mail's Large Letter limit is 353 x 250 x 25 mm and 750 g, and we can make slim [mailer boxes](/packaging/mailer-boxes) that sit just inside it. Tell us in your quote and we'll size the box to suit, including the board thickness.",
          "For bigger orders, a sturdier [shipping box](/packaging/shipping-boxes) in E or B-flute corrugated travels well with Royal Mail, Evri, DPD and the other couriers.",
        ],
      },
      {
        h: "Paper-based packaging, with the UK rules in mind",
        p: [
          "The UK Plastic Packaging Tax and the new packaging Extended Producer Responsibility (EPR) rules have pushed many brands towards paper and card. Kraft and corrugated boxes, paper tape and card inserts keep things simple. Our [eco-friendly packaging](/sustainability) page explains the options honestly, without claims we can't back up.",
        ],
      },
      {
        h: "Delivery across the UK",
        p: [
          "We deliver to England, Scotland, Wales and Northern Ireland, and your quote includes delivery to your door. Production takes 10–12 business days after you approve your proof. We also have a UK office in Bradford if you'd like to talk to someone locally.",
        ],
      },
    ],
    popular: ["mailer-boxes", "shipping-boxes", "kraft-boxes", "folding-cartons", "magnetic-closure-boxes", "candle-boxes", "tissue-paper", "labels-and-stickers"],
    faqs: [
      { q: "Do you deliver custom boxes across the UK?", a: "Yes, to England, Scotland, Wales and Northern Ireland. Delivery is included in your quote." },
      { q: "Can you make a box that fits Royal Mail Large Letter?", a: "Yes. Tell us your product size and we'll make a slim mailer that stays within 353 x 250 x 25 mm, as long as your product fits." },
      { q: "Can I get my quote in pounds?", a: "Yes. Choose United Kingdom in the quote form and we'll price your order in GBP." },
      { q: "Do you have a UK office?", a: "Yes, in Bradford, West Yorkshire. You can also reach us by email, phone or WhatsApp." },
    ],
  },
  {
    slug: "australia",
    code: "AU",
    name: "Australia",
    units: "millimetres",
    mm: true,
    currency: "AUD",
    countries: ["Australia", "New Zealand"],
    seoTitle: "Custom Packaging Australia",
    description: "Custom boxes and printed packaging for Australian and NZ brands, from 100 units. Quoted in Australian dollars, sized in millimetres, delivered to every state.",
    headline: "Custom boxes and packaging for Australian brands",
    intro: "Printed mailer boxes, cartons and pouches for Australian and New Zealand brands, quoted in Australian dollars with sizes in millimetres. Start from 100 boxes.",
    sections: [
      {
        h: "Made for Australian online brands",
        p: [
          "Australia's online shops ship long distances, often through Australia Post or Sendle, so boxes need to be tough and light at the same time. E-flute [mailer boxes](/packaging/mailer-boxes) are the most popular choice: strong enough for the trip from Perth to Cairns, and light enough to keep postage down.",
          "Food, coffee and supplement brands often go with printed [stand-up pouches](/packaging/stand-up-pouches), which cost much less to post than jars or tins.",
        ],
      },
      {
        h: "Recyclable packaging for Australian targets",
        p: [
          "Australia's National Packaging Targets push brands to use packaging that's reusable, recyclable or compostable. Plain kraft and corrugated board, paper tape and card inserts make that easy. See our [eco-friendly packaging](/sustainability) page for the options and what each one really does.",
        ],
      },
      {
        h: "Delivery to every state, and New Zealand",
        p: [
          "We deliver to every Australian state and territory and to New Zealand, and your quote includes delivery to your door. Production takes 10–12 business days after you approve your proof, and we confirm the delivery date in your quote.",
        ],
      },
    ],
    popular: ["mailer-boxes", "kraft-boxes", "stand-up-pouches", "coffee-packaging", "cosmetic-boxes", "folding-cartons", "candle-boxes", "labels-and-stickers"],
    faqs: [
      { q: "Do you deliver custom packaging across Australia?", a: "Yes, to every state and territory, and to New Zealand. Delivery is included in your quote." },
      { q: "Can I get my quote in Australian dollars?", a: "Yes. Choose Australia in the quote form and we'll price your order in AUD." },
      { q: "Can I give my sizes in millimetres?", a: "Yes. The form takes millimetres, centimetres or inches, and your proof shows the size in millimetres." },
      { q: "Do you make recyclable packaging?", a: "Yes. Kraft and corrugated boxes without plastic lamination can go in kerbside paper recycling." },
    ],
  },
  {
    slug: "europe",
    code: "EU",
    name: "Europe",
    units: "millimetres",
    mm: true,
    currency: "EUR",
    countries: ["Germany", "France", "Netherlands", "Ireland", "Spain", "Italy", "Belgium", "Sweden", "Denmark", "Other EU country"],
    seoTitle: "Custom Packaging Europe, Low MOQ",
    description: "Custom boxes and printed packaging for European brands, from 100 units. Quoted in euros, sized in millimetres, with multi-language print and EU delivery.",
    headline: "Custom boxes and packaging for European brands",
    intro: "Printed mailer boxes, cartons and gift boxes for brands across the EU, quoted in euros with sizes in millimetres. Start from 100 boxes, with a free 3D mockup before you order.",
    sections: [
      {
        h: "One box, several languages",
        p: [
          "Selling in more than one EU country? Your box can carry text in several languages, or you can keep the outside language-free and add a small [label](/packaging/labels-and-stickers) for each market. Both are cheaper than printing a separate box for every country, and our designers will help you lay it out so it doesn't look crowded.",
        ],
      },
      {
        h: "Ready for the EU packaging rules",
        p: [
          "The EU's new Packaging and Packaging Waste Regulation (PPWR) is pushing brands towards less empty space and more recyclable materials. Boxes made to your exact size and printed on paper-based board help with both. Our [eco-friendly packaging](/sustainability) page explains the choices in plain words.",
        ],
      },
      {
        h: "Delivery across Europe",
        p: [
          "We deliver to Germany, France, the Netherlands, Ireland, Spain, Italy, Belgium, Sweden, Denmark and the rest of the EU, and your quote includes delivery to your door. Production takes 10–12 business days after you approve your proof. If you need delivery with import duties already paid, ask in the quote form and we'll confirm what's possible for your order.",
        ],
      },
    ],
    popular: ["mailer-boxes", "folding-cartons", "kraft-boxes", "cosmetic-boxes", "magnetic-closure-boxes", "stand-up-pouches", "coffee-packaging", "labels-and-stickers"],
    faqs: [
      { q: "Do you deliver custom boxes across the EU?", a: "Yes. We deliver to every EU country, and your quote includes delivery to your address." },
      { q: "Can I get my quote in euros?", a: "Yes. Choose your country in the quote form and we'll price your order in EUR." },
      { q: "Can you print my box in several languages?", a: "Yes. We can fit more than one language on the box, or print market-specific labels to go with one box design." },
      { q: "What is the minimum order?", a: "100 units for most styles, so you can test a new market without a big stock commitment." },
    ],
  },
];

export const allCountries = [...regions.flatMap((r) => r.countries), "Other"];
