/**
 * Landing pages written for specific searches buyers make
 * ("custom boxes with logo", "packaging for small business", "wholesale custom boxes").
 */
export type Landing = {
  slug: string;
  crumb: string;
  title: string;
  description: string;
  h1: string;
  lede: string;
  sections: { h: string; p: string[]; list?: string[] }[];
  stylesTitle: string;
  styles: string[];
  quoteTitle: string;
  faqs: { q: string; a: string }[];
};

export const landings: Landing[] = [
  {
    slug: "custom-boxes-with-logo",
    crumb: "Custom boxes with logo",
    title: "Custom Boxes with Logo, from 100 Units",
    description: "Custom boxes printed with your logo, made to your exact size from 100 units. Free design help and a 3D proof before you pay. Delivered to the US, UK, AU, EU.",
    h1: "Custom boxes with your logo, made to fit.",
    lede: "Send us your logo and your product size. We'll put them together on the right box, show you a free 3D mockup, and print from just 100 boxes.",
    sections: [
      {
        h: "What you get",
        p: [
          "A logo box sounds simple, and it should be. You tell us what goes inside and roughly how many you need. We suggest a style and a board, set your logo up on the dieline, and send you a proof to check. Nothing is printed until you say yes.",
        ],
        list: [
          "Your box made to your product's inside size, in inches, centimeters or millimeters",
          "Your logo printed on the outside, the inside, or both",
          "Free design help if your logo file isn't print-ready yet",
          "A digital proof and 3D mockup before you pay",
          "Production in 10–12 business days after you approve the proof",
        ],
      },
      {
        h: "Which box should my logo go on?",
        p: [
          "If you ship orders by post, start with [mailer boxes](/packaging/mailer-boxes). They're strong, fold together without tape and look great with a logo on the lid and a pattern inside.",
          "If your product sits on a shelf, a [folding carton](/packaging/folding-cartons) or [product box](/packaging/product-boxes) gives you six sides to print on and costs less per box. For gifts and launches, a [magnetic closure box](/packaging/magnetic-closure-boxes) is the one people keep.",
        ],
      },
      {
        h: "Making a logo look good on a box",
        p: [
          "Send a vector file if you have one (AI, EPS, SVG or a PDF from your designer). A high-resolution PNG works too, and our designers can redraw simple logos for free.",
          "A one-color logo on kraft board is the cheapest way to look branded. Full color, foil or an embossed logo add a premium touch. Our [artwork guide](/artwork-guide) covers file types, bleed and safe areas.",
        ],
      },
      {
        h: "Low minimums, honest quotes",
        p: [
          "Most suppliers want 500 or 1,000 boxes. You can start with 100, see how customers react, and reorder in bigger runs once you know what works. We don't publish a price list because size, board, print and quantity all change the price, but a quote is free and usually reaches you within 24 hours on weekdays.",
        ],
      },
    ],
    stylesTitle: "Boxes our customers put their logo on most",
    styles: ["mailer-boxes", "product-boxes", "folding-cartons", "magnetic-closure-boxes", "kraft-boxes", "shipping-boxes", "rigid-boxes", "labels-and-stickers"],
    quoteTitle: "Get a price for your logo boxes.",
    faqs: [
      { q: "Can I order custom boxes with my logo in small quantities?", a: "Yes. Most styles start at 100 boxes, so you can test a design before ordering more." },
      { q: "What file should I send for my logo?", a: "A vector file (AI, EPS, SVG or PDF) is best. If you only have a PNG or JPG, send it anyway and our designers will tell you whether it will print sharply." },
      { q: "Can you print my logo inside the box?", a: "Yes. Inside printing is popular on mailer boxes because it's the first thing people see when they open the lid." },
      { q: "How much do custom logo boxes cost?", a: "It depends on the size, board, print and quantity. Fill in the quote form and we'll email you exact prices for a few quantities so you can compare." },
      { q: "Do I need a designer?", a: "No. Send your logo and any colors or ideas you have, and our team will lay it out on the box for free." },
    ],
  },
  {
    slug: "small-business-packaging",
    crumb: "Small business packaging",
    title: "Custom Packaging for Small Business",
    description: "Custom packaging for small businesses: printed boxes from 100 units, free design help and a free 3D proof. Made for Etsy, Shopify and independent brands.",
    h1: "Custom packaging for small businesses.",
    lede: "Branded boxes used to be for big companies with big orders. We print from 100 units, help with the design for free, and quote quickly, so a small brand can look like a big one.",
    sections: [
      {
        h: "Why small brands use custom boxes",
        p: [
          "When you sell online, the box is the first thing a customer actually touches. A plain brown box says \"delivery\". A printed one says \"I bought something from a brand I like\", and that's the one people photograph, share and remember when they order again.",
          "You don't need to spend a fortune to get there. A one-color logo on a kraft [mailer box](/packaging/mailer-boxes), a logo [sticker](/packaging/labels-and-stickers) and some [tissue paper](/packaging/tissue-paper) already make a big difference.",
        ],
      },
      {
        h: "How we keep it small-business friendly",
        p: ["We set things up for people who don't have a packaging department."],
        list: [
          "Order from 100 units, so you're not stuck with thousands of boxes",
          "Free design help, even if all you have is a logo",
          "A free 3D mockup so you can see the box before you spend anything",
          "Sizes in inches, centimeters or millimeters, whichever you use",
          "Quotes by email, with no sales call needed",
        ],
      },
      {
        h: "Where to start on a small budget",
        p: [
          "Pick one box that most of your orders fit in, rather than five different sizes. Print one or two colors instead of full color, and put the money into printing the inside of the lid, which is what customers see first.",
          "Selling on Etsy, Shopify or Amazon? Mailers work for most products. Cosmetics and candles look better in a [folding carton](/packaging/folding-cartons) inside a mailer. Food and coffee brands often start with printed [stand-up pouches](/packaging/stand-up-pouches).",
        ],
      },
      {
        h: "Growing with you",
        p: [
          "When orders pick up, the price per box drops as quantities rise. Your dieline and artwork stay on file, so reordering is quick, and you can add new sizes or seasonal designs without starting again.",
        ],
      },
    ],
    stylesTitle: "Popular with small brands",
    styles: ["mailer-boxes", "kraft-boxes", "folding-cartons", "stand-up-pouches", "labels-and-stickers", "tissue-paper", "cosmetic-boxes", "candle-boxes"],
    quoteTitle: "Tell us about your brand and we'll quote.",
    faqs: [
      { q: "What is the smallest order I can place?", a: "100 units for most styles. Some items, like tissue paper, are better value in larger runs, and your quote will show the options." },
      { q: "Is custom packaging worth it for a small business?", a: "For most online brands, yes. A branded box is one of the few things every customer sees, and it helps repeat orders and social shares. Start simple and upgrade later." },
      { q: "Can I order different designs in one order?", a: "Yes. Each design starts at 100 units, and we can quote them together." },
      { q: "Do you help with packaging design?", a: "Yes, for free. Send your logo, colors and any ideas, and we'll set up the artwork and send a 3D mockup." },
      { q: "Do you ship to the UK, Australia and Europe?", a: "Yes. We deliver to the USA, UK, Australia and across Europe, and your quote includes delivery." },
    ],
  },
  {
    slug: "wholesale-custom-boxes",
    crumb: "Wholesale custom boxes",
    title: "Wholesale Custom Boxes in Bulk",
    description: "Wholesale custom boxes for bulk orders of 1,000+. Lower prices per box, consistent print across reorders, and delivery to the USA, UK, Australia and Europe.",
    h1: "Wholesale custom boxes for bulk orders.",
    lede: "Ordering thousands of boxes? Bigger runs bring the price per box down a lot. We print bulk custom packaging with the same care as a first order, and keep your setup on file for fast reorders.",
    sections: [
      {
        h: "Who orders wholesale",
        p: [
          "Growing e-commerce brands moving from a few hundred boxes to a few thousand, retail brands launching into stores, subscription boxes shipping every month, and agencies ordering for clients. If you know you'll need 1,000 boxes or more, ask for wholesale pricing in your quote.",
        ],
      },
      {
        h: "What changes at higher volumes",
        p: ["Large runs are printed on bigger presses, which brings real savings and a few extra options."],
        list: [
          "A lower price per box, with breaks at 1,000, 2,500, 5,000 and 10,000+ units",
          "Offset or Pantone printing for exact brand colors that match across reorders",
          "More board, insert and finish options, including custom inserts and specialty papers",
          "Split deliveries to more than one warehouse, if you need them",
        ],
      },
      {
        h: "Keeping reorders consistent",
        p: [
          "We keep your dieline, artwork and color references on file. On a reorder we match them to the approved proof, so your boxes look the same from one batch to the next.",
        ],
      },
      {
        h: "Popular wholesale styles",
        p: [
          "[Shipping boxes](/packaging/shipping-boxes) and [mailer boxes](/packaging/mailer-boxes) for e-commerce, [folding cartons](/packaging/folding-cartons) for retail shelves, and [stand-up pouches](/packaging/stand-up-pouches) for food and supplements make up most bulk orders. Read [mailer box vs shipping box](/blog/mailer-box-vs-shipping-box) if you're not sure which one you need.",
        ],
      },
    ],
    stylesTitle: "Most ordered in bulk",
    styles: ["shipping-boxes", "mailer-boxes", "folding-cartons", "corrugated-boxes", "product-boxes", "stand-up-pouches", "display-boxes", "labels-and-stickers"],
    quoteTitle: "Ask for wholesale pricing.",
    faqs: [
      { q: "What counts as a wholesale order?", a: "Usually 1,000 boxes or more per design, but tell us your numbers and we'll quote the best price for your quantity." },
      { q: "How much cheaper are bulk boxes?", a: "The price per box drops noticeably at each step up in quantity. Your quote will show several quantities side by side so you can compare." },
      { q: "How long do large orders take?", a: "Most bulk orders take 10–12 business days to produce after you approve the proof, plus delivery. Very large runs may take longer, and we'll confirm the date in your quote." },
      { q: "Can you deliver to more than one address?", a: "Yes. Tell us the addresses and quantities and we'll include split delivery in your quote." },
      { q: "Can I get a sample before a big order?", a: "Every order comes with a free digital proof and 3D mockup to approve before printing. If you need more than that for a large order, ask us about samples in your quote." },
    ],
  },
];

export const getLanding = (slug: string) => landings.find((l) => l.slug === slug)!;
