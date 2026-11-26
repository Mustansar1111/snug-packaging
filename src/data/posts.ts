export type Block = { h?: string; p?: string[]; list?: string[]; /** A sample text shown as a quoted box, after p. */ quote?: string };
export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  /** Date of the last real edit to the guide (defaults to date). */
  updated?: string;
  readMins: number;
  tag: string;
  /** Packaging styles to link at the end, by category slug. */
  related: string[];
  body: Block[];
  /** Writer shown in the byline; falls back to the site author or the team. */
  author?: string;
  /** Hero image shown under the title. src is the original file; webp versions sit beside it. */
  image?: { src: string; webp: string; webpSm: string; width: number; height: number; alt: string; title: string; caption: string; description: string };
  /** Questions shown at the end of the guide, with FAQPage schema. */
  faq?: { q: string; a: string }[];
  /** Closing call to action shown after the FAQ. */
  outro?: Block;
};

export const posts: Post[] = [
  {
    slug: "how-to-order-custom-packaging-first-product-run",
    title: "How to Order Custom Packaging for Your First Product Run",
    description: "To order custom packaging for your first run, measure your product, choose a box for how you sell it, compare two quote quantities, then check the dieline and proof.",
    date: "2026-11-26",
    readMins: 6,
    tag: "Ordering",
    author: "James",
    related: ["product-boxes", "mailer-boxes", "rigid-boxes"],
    image: {
      src: "/images/blog/first-custom-packaging-order-snug-packaging.png",
      webp: "/images/blog/first-custom-packaging-order-snug-packaging.webp",
      webpSm: "/images/blog/first-custom-packaging-order-snug-packaging-sm.webp",
      width: 1672,
      height: 941,
      alt: "Skincare jar displayed with a yellow folding carton, a kraft mailer with a fitted insert, a lavender drawer box, and a plum rigid gift box.",
      title: "Your First Custom Packaging Order | Snug Packaging",
      caption: "Four box styles for a first product run, from folding cartons for retail to kraft mailers for shipping and rigid boxes for gift sets.",
      description: "A Snug Packaging blog hero showing four custom packaging options beside a frosted skincare jar. The Snug Packaging logo and the headline \u201cYour First Custom Packaging Order\u201d appear on a deep plum background.",
    },
    body: [
      { p: ["To order custom packaging for your first product run, measure your finished product, choose a box based on how you sell it, and request quotes for two quantities you could realistically use. Once you\u2019ve agreed on the box size and style, place your artwork on the supplier\u2019s dieline and check the proof before approving production.", "Imagine you\u2019re launching a face cream in a glass jar. You have 150 jars ready, a logo you like and a launch date on the calendar. You still need to decide what goes on the retail shelf and what will protect the jar when someone orders it online.", "Here\u2019s how to make those decisions and turn them into a packaging brief your supplier can quote."] },
      { h: "Start With the Product You\u2019ll Actually Sell", p: ["Measure the product with the lid, label and any accessories in place. For a glass jar, take the widest measurement, even if that\u2019s across the lid, and measure the full height with the lid tightened.", "Say your jar measures 2 inches across and 2.5 inches tall, or about 51 mm in diameter and 64 mm high. Send those figures as the product dimensions. Your supplier can use them to work out the box\u2019s internal dimensions, with room for any insert and enough clearance to remove the jar comfortably.", "If the product comes with a spatula or instruction card, show where you want it to sit and include its measurements too. For other product shapes, see [how to measure your product for a custom box](/blog/how-to-measure-for-a-custom-box)."] },
      { h: "Choose a Box Based on How Customers Will Receive It", p: ["The same jar can need different packaging depending on where the customer opens it."], list: ["On a retail shelf. A printed folding carton gives the jar a compact presentation, with panels for your branding and product information.", "After an online delivery. A corrugated mailer or shipping box gives you room for an insert or cushioning. If the jar already has a retail carton, measure the packed carton before sizing the outer box.", "Inside a gift set. A rigid gift box with a fitted insert can hold the jar and accessories in position so the customer can see the full set when they lift the lid."] },
      { p: ["If you sell the same product in stores and online, you could use one retail carton and add an outer shipping box to online orders. Our [mailer box vs shipping box guide](/blog/mailer-box-vs-shipping-box) explains how to choose that outer box."] },
      { h: "Ask for Two Quotes Using the Same Box Specification", p: ["If you have 150 jars ready, ask for prices at 150 and 250 boxes, subject to the supplier\u2019s minimum order quantity. Keep the box size, material, print, finish and delivery destination the same across both quotes. That shows you what the additional 100 boxes actually cost.", "Compare the total delivered cost and the price per box. A larger run may bring the unit price down, but you\u2019ll still need somewhere to store the extra boxes and a plan to use them. If the next batch could have a taller lid or updated artwork, the smaller run may make better use of your budget.", "If you\u2019re comparing quotes from different suppliers, check which ones include inserts, finishes and delivery. See [what changes the price of custom boxes](/blog/how-much-do-custom-boxes-cost) for a breakdown."] },
      { h: "Put Your Artwork on the Box Dieline", p: ["Once you\u2019ve agreed on the structure and size, ask for the dieline for that exact box. A dieline is a flat template that shows where the material will be cut, folded and glued.", "For the skincare carton, decide which panel faces the customer first. Check that the product name sits where you want it, the lid text reads the right way when opened, and small text has enough space around folds. If your background color runs to a cut edge, follow the supplier\u2019s bleed instructions.", "Our [first-time buyer\u2019s guide to dielines](/blog/what-is-a-dieline) explains what the different lines on the template mean."] },
      { h: "Check the Proof and Test the Fit", p: ["Read the digital proof panel by panel. Check the product name, variant, spelling, logo version and artwork orientation. Look at the top and bottom flaps as well as the front. A panel can look right on a flat screen and read upside down once the carton is folded.", "If you\u2019re packaging glass or using a fitted insert, ask about a physical sample. Put the actual filled jar inside, close the box and take the jar out the way a customer would. If you\u2019re shipping it, check the complete pack with its outer box, insert and cushioning before approving the production run."] },
      { h: "What Should You Send for a Custom Packaging Quote?", p: ["Include a product photo, dimensions, the quantities you want priced, how customers will receive the product, your delivery country and ZIP code or postcode, and the date you need the boxes. Attach your logo or artwork if it\u2019s ready.", "Here\u2019s a brief you can adapt for your own order."], quote: "We\u2019re launching a face cream in a glass jar measuring 2 inches in diameter and 2.5 inches tall, including the lid. We\u2019d like a printed folding carton for retail and an outer shipping option for online orders. Please quote 150 and 250 units using the same print specifications. Our delivery location is [country and ZIP code or postcode], and we need the packaging by [date]. We\u2019ve attached a product photo and our current artwork." },
    ],
    faq: [
      { q: "Can I request a quote before my artwork is ready?", a: "Yes. Send your product dimensions, quantity and a description of the print you have in mind. If you\u2019re considering extras such as foil or inside printing, mention them so they can be factored into the estimate." },
      { q: "Can I use the same box for retail and shipping?", a: "It depends on the product and the box. For a glass skincare jar, you might use a folding carton for retail presentation and then pack it in a corrugated outer box for delivery. Check the fit and protection of the complete pack before ordering." },
      { q: "How many custom boxes should I order for a launch?", a: "Start with the number of products you expect to pack, plus any boxes you need for samples, photography or replacements. Then ask for a second quote at the next quantity you could realistically use. Compare the unit price savings with the extra upfront cost." },
      { q: "What\u2019s the difference between a digital proof and a physical sample?", a: "A digital proof lets you review the artwork, wording and panel layout. A physical sample lets you check how the box folds, how the product fits and how it feels to open." },
      { q: "What is the minimum order quantity for custom boxes?", a: "The minimum order quantity, or MOQ, can vary by box style, material and printing method. If you\u2019re planning a small launch, share the quantity you actually need and ask which options are available for that run size." },
      { q: "How long does it take to get custom packaging?", a: "Ask for an estimated delivery date that accounts for artwork approval, production and shipping. If you need a physical sample, allow time to receive it, check the fit and make any changes before approving the full run. Give your supplier the date you need the boxes in hand." },
      { q: "Should I give my supplier the inside or outside box dimensions?", a: "Use inside dimensions to describe the space your product needs. Use outside dimensions when checking shelf space, fitting boxes into a larger shipping carton or comparing carrier size limits. If you only know the product measurements, send those and mention any insert or accessories. [See how to measure your product for a custom box](/blog/how-to-measure-for-a-custom-box)." },
      { q: "Can I print my logo on a small run of custom boxes?", a: "Ask your supplier which printing options are available at your quantity. Share your logo file and tell them where you want it to appear. If it needs to match a specific brand color, mention it when requesting the quote. [Read our guide to CMYK vs Pantone](/blog/cmyk-vs-pantone)." },
      { q: "When should I add an insert to my custom box?", a: "An insert helps when a product needs to stay in position, when separate pieces could knock against each other, or when you want items presented in a specific order. For example, an insert can hold a skincare jar in place while keeping its spatula beside it. Check that customers can lift both items out easily." },
      { q: "Can I use the same box for several product variants?", a: "Yes, if each variant fits securely and the box has a clear way to show which product is inside. For example, a skincare brand using the same jar for three creams could order one branded carton and use a separate label for each formula. Measure every variant before committing to one box size." },
      { q: "What should I budget for besides the price per box?", a: "Ask whether the quote includes inserts, samples, setup or tooling, special finishes and delivery. For an international order, ask who pays any applicable duties and taxes. Compare the total delivered cost for the same box specification so you can see what you\u2019ll actually spend." },
      { q: "Can I see how my logo will look on the box before ordering?", a: "Yes. A mockup can help you review logo placement, panel layout and the overall look. If you also need to check how the product fits or how the finish feels, ask about a physical sample. [Request a free packaging mockup](/free-mockup)." },
    ],
    outro: { h: "Ready to Order Your First Custom Boxes?", p: ["Send Snug Packaging a photo of your product, its measurements and the quantities you\u2019re considering. If you\u2019re still deciding between a retail carton, a mailer and a gift box, tell us where your customers will first open it. We can help you choose a style and price your first run. [Get a custom packaging quote](/quote)."] },
  },
  {
    slug: "how-much-do-custom-boxes-cost",
    title: "How much do custom boxes cost? What changes the price",
    description: "Custom box prices depend on six things: quantity, size, board, print, finish and delivery. Here's how each one moves the price, and how to save.",
    date: "2026-11-23",
    readMins: 5,
    tag: "Ordering",
    related: ["mailer-boxes", "folding-cartons", "kraft-boxes"],
    body: [
      { p: ["It's the first thing everyone asks, and the honest answer is: it depends. Not in a vague way, though. Six things decide the price of a custom box, and once you know them, you can steer the cost where you want it."] },
      { h: "1. Quantity", p: ["Every order has setup work: the dieline, the printing plates or files, and getting the machines ready. On 100 boxes, that setup is shared by 100 boxes. On 1,000, it's shared by 1,000. That's why the price per box drops a lot as quantity goes up.", "If you're testing a new product, start small. If you know the box works, ordering a bigger run is usually the single biggest saving."] },
      { h: "2. Size", p: ["A bigger box uses more board, and more board costs more. It also costs more to ship, both to you and from you to your customer. Measuring your product properly and choosing a box that fits snugly saves money twice. Our guide to [measuring for a custom box](/blog/how-to-measure-for-a-custom-box) shows how."] },
      { h: "3. Board and style", list: ["Folding cartons in SBS or kraft card are the cheapest per box.", "Corrugated mailer and shipping boxes cost a little more, but they're built for the post.", "Rigid boxes (magnetic, drawer, two-piece) cost the most because they're wrapped by hand.", "Collapsible rigid boxes cost more to make but less to ship, because they travel flat."] },
      { h: "4. Print", p: ["One color on kraft is the cheapest way to look branded. Full color on the outside costs more, and printing the inside as well adds a bit again. Large areas of solid dark color use more ink and can show scuffs, so they're worth a second thought on mailers."] },
      { h: "5. Finishes", p: ["Foil, embossing, spot UV and soft-touch all add cost, because each one is an extra step. One well-chosen finish, like a foil logo on a matte box, usually gives the premium look you're after without the cost of three. Our [finishes guide](/blog/packaging-finishes-explained) explains what each does."] },
      { h: "6. Delivery", p: ["Boxes ship flat, but they're still heavy and bulky in large numbers. Delivery depends on where you are, how many boxes you order and how quickly you need them. Your Snug quote includes delivery, so there's no surprise at the end."] },
      { h: "How to get the best price", list: ["Use one box size for most of your orders instead of several.", "Choose kraft with one or two colors if your budget is tight.", "Put your money into the inside of the lid. It's the first thing people see.", "Ask for prices at two or three quantities, so you can see where the savings kick in."] },
      { p: ["We don't publish a price list because every box is made to order, but a quote is free and quick. Fill in the [quote form](/quote) and we'll email you prices for a few quantities, usually within 24 hours on weekdays."] },
    ],
  },
  {
    slug: "mailer-box-sizes",
    title: "Mailer box sizes: how to pick the right one",
    description: "Common mailer box sizes for clothing, cosmetics, candles and subscription boxes, plus how to choose a size that protects your product and saves on postage.",
    date: "2026-11-23",
    readMins: 4,
    tag: "Choosing a box",
    related: ["mailer-boxes", "shipping-boxes", "apparel-boxes"],
    body: [
      { p: ["There's no single \"standard\" mailer box size. The right one is the smallest box your product fits in comfortably, with room for any tissue or insert. Still, some sizes come up again and again, and they're a useful starting point."] },
      { h: "Sizes people often start with", p: ["These are inside sizes (length × width × height). Use them as a guide, then measure your own product."], list: ["Small cosmetics, jewelry, candles: around 6 × 4 × 2 in (150 × 100 × 50 mm)", "A folded T-shirt or a few beauty products: around 9 × 6 × 3 in (230 × 150 × 75 mm)", "Subscription boxes and gift sets: around 10 × 8 × 4 in (255 × 205 × 100 mm)", "Hoodies, shoes, larger sets: around 12 × 9 × 4 in (305 × 230 × 100 mm)", "Bulky clothing and homeware: around 14 × 10 × 4 in (355 × 255 × 100 mm)"] },
      { h: "Why the right size matters", p: ["Couriers like UPS and FedEx charge by dimensional weight, which means a big, light box can cost as much to ship as a small, heavy one. In the UK, a slim mailer that stays within Royal Mail's Large Letter limit (353 × 250 × 25 mm) is much cheaper to post than a parcel.", "A box that fits also protects better. If the product can slide around, it gets damaged. If it's squeezed, the box bulges and looks cheap."] },
      { h: "Measure what goes inside, all of it", p: ["Measure your product the way it will be packed, folded clothes, stacked items, inserts and tissue included. Then add a few millimeters on each side. Our [measuring guide](/blog/how-to-measure-for-a-custom-box) walks through it step by step."] },
      { h: "Can't decide between two sizes?", p: ["Pick the one that fits most of your orders. Many brands use one main mailer for 80% of orders and a [shipping box](/packaging/shipping-boxes) for the rest. Or tell us your products in the [quote form](/quote) and we'll suggest a size."] },
    ],
  },
  {
    slug: "kraft-vs-white-boxes",
    title: "Kraft vs white boxes: which should you choose?",
    description: "Kraft and white boxes look, print and cost differently. Here's how to choose the right one for your brand, your budget and your printing.",
    date: "2026-11-23",
    readMins: 4,
    tag: "Materials",
    related: ["kraft-boxes", "white-boxes", "mailer-boxes"],
    body: [
      { p: ["Brown or white is often the first real decision in a packaging order. Both are paper-based and both can be printed, but they give very different results."] },
      { h: "Kraft boxes", p: ["Kraft board is brown because it's less bleached. It has a natural, handmade look that suits eco, food, coffee, candle and craft brands, and it hides scuffs well in the post.", "The catch is color. Ink on brown board prints darker and less bright, a bit like drawing with a marker on a paper bag. Black, white and deep colors look great on kraft. Bright pinks and blues look muted."] },
      { h: "White boxes", p: ["White board, inside and out, gives bright, accurate color and sharp detail. It suits beauty, fashion, tech and any brand with vivid colors or photos.", "White shows marks more easily, so a matte or gloss lamination is worth adding on mailers that travel through the post."] },
      { h: "Quick way to decide", list: ["Natural, earthy or minimal brand: kraft.", "Bright colors, photos or gradients: white.", "Tight budget and a simple logo: kraft with one color.", "Want both? White inside, kraft outside, or kraft with a white ink base under bright colors."] },
      { h: "Is kraft more eco-friendly?", p: ["Both are paper and both can go in paper recycling where it's collected. Kraft uses less bleaching, which many brands like. What matters more is skipping plastic lamination and sizing the box properly. Our [eco-friendly packaging](/sustainability) page explains the options honestly."] },
    ],
  },
  {
    slug: "what-is-a-dieline",
    title: "What is a dieline? A simple guide for first-time box buyers",
    description: "A dieline is the flat template of your box. Here's what the lines mean, what bleed and safe areas are, and how to place your artwork so nothing gets cut off.",
    date: "2026-11-23",
    readMins: 4,
    tag: "Artwork",
    related: ["product-boxes", "tuck-boxes", "mailer-boxes"],
    body: [
      { p: ["If you've never ordered custom packaging before, the word \"dieline\" comes up quickly. It sounds technical, but it's simple: it's your box, unfolded and laid flat."] },
      { h: "What the lines mean", list: ["Cut lines (usually solid): where the board is cut.", "Fold or crease lines (usually dashed): where the box folds.", "Bleed: artwork that runs about 1/8 in (3 mm) past the cut line, so there's no white edge if the cut is slightly off.", "Safe area: a margin inside the cut line where important text and logos should stay."] },
      { h: "Why it matters", p: ["Your artwork is printed flat and then folded. If a logo sits across a fold, it bends. If text sits too close to a cut, it can be trimmed off. The dieline shows exactly where each panel ends up once the box is built."] },
      { h: "Do I need to make my own?", p: ["No. Once you send us your size and style, we make the dieline for you. If you have a designer, they place your artwork on it. If not, our team does it for free and sends a 3D mockup so you can see the folded box before anything is printed."] },
      { h: "Tips for a clean result", list: ["Work in CMYK, or give us Pantone codes for brand colors. See [CMYK vs Pantone](/blog/cmyk-vs-pantone).", "Use vector files for logos and text.", "Keep images at 300 dpi at the printed size.", "Check which way each panel faces, so nothing ends up upside down."] },
      { p: ["Our [artwork guide](/artwork-guide) covers file types and settings in more detail."] },
    ],
  },
  {
    slug: "mailer-box-vs-shipping-box",
    title: "Mailer box vs shipping box: which one do you need?",
    description: "Mailer boxes and shipping boxes are both corrugated, but they open differently, look different and suit different products. Here's how to choose.",
    date: "2026-11-19",
    readMins: 4,
    tag: "Choosing a box",
    related: ["mailer-boxes", "shipping-boxes", "corrugated-boxes"],
    body: [
      { p: ["Both boxes are made from corrugated board and both survive the post. The difference is how they open, how they look, and what the customer feels when the parcel arrives."] },
      { h: "Mailer boxes", p: ["A mailer box is a one-piece box with a hinged lid that tucks in at the front, like a pizza box with sides. It opens from the top, so the whole inside is revealed at once.", "Mailers are usually E-flute corrugated: thin enough to print sharply and fold neatly, strong enough for clothes, cosmetics, books and subscription boxes."] },
      { h: "Shipping boxes", p: ["A shipping box (often called a regular slotted carton) has four flaps on top and four on the bottom, closed with tape. It's the classic brown cardboard box.", "Shipping boxes are usually B-flute or double-wall corrugated, so they are stronger and better for heavy or fragile items, or for packing several products together."] },
      { h: "How to choose", list: ["Choose a mailer if the unboxing matters: gifts, subscriptions, fashion and beauty.", "Choose a shipping box for heavy items, bulk orders, or when the box goes inside another box.", "Under about 10 lb (4.5 kg), a printed mailer is usually strong enough.", "Want both? Ship a printed mailer inside a plain shipping box for extra protection."] },
      { h: "Printing", p: ["Both styles can be printed in full color outside and inside. Mailers print a little sharper because E-flute is smoother. Plain kraft with a one-color logo is the lowest-cost option for either."] },
    ],
  },
  {
    slug: "how-to-measure-for-a-custom-box",
    title: "How to measure your product for a custom box",
    description: "Get the size right the first time. How to measure length, width and height, how much room to leave, and why inside dimensions matter.",
    date: "2026-11-19",
    readMins: 3,
    tag: "Ordering",
    related: ["product-boxes", "mailer-boxes", "tuck-boxes"],
    body: [
      { p: ["A box that fits snugly looks better, protects the product and costs less to ship. Here's how to measure so your first proof fits."] },
      { h: "Always give inside dimensions", p: ["Box sizes are quoted as inside length × width × height. That's the space your product sits in. The outside is a little bigger because of the board thickness."] },
      { h: "Which side is which", list: ["Length: the longer side of the opening.", "Width: the shorter side of the opening.", "Height (or depth): from the opening to the bottom.", "For a tuck box, the opening is the end that tucks closed, so the height is usually the longest side."] },
      { h: "How much room to leave", list: ["Rigid products (jars, bottles, boxed items): add 1/16 to 1/8 in (2–3 mm) on each side.", "Soft products (clothing, textiles): measure them folded, then add about 1/4 in (5 mm).", "With an insert or tissue: add the insert's thickness to every side it touches.", "Several items together: arrange them as they'll be packed, then measure the group."] },
      { h: "Use the unit you know", p: ["Our quote form takes inches, centimeters or millimeters, and switches between them without rounding errors. If you're unsure, send us one product and we'll measure it for you."] },
    ],
  },
  {
    slug: "cmyk-vs-pantone",
    title: "CMYK vs Pantone: getting your brand color right on a box",
    description: "Why your logo can print a different color from your screen, and when to choose CMYK or a Pantone spot color for your packaging.",
    date: "2026-11-19",
    readMins: 4,
    tag: "Artwork",
    related: ["cosmetic-boxes", "retail-boxes", "labels-and-stickers"],
    body: [
      { p: ["Screens show color with light (RGB). Printers make color with ink. That's why a bright on-screen color can look duller on a box, and why choosing the right print method matters."] },
      { h: "CMYK", p: ["CMYK prints every color by mixing four inks: cyan, magenta, yellow and black. It's ideal for photos, gradients and designs with many colors, and it's the standard for full-color packaging.", "The catch: some colors, like very bright oranges, greens and blues, can't be reached by mixing four inks."] },
      { h: "Pantone (spot color)", p: ["A Pantone color is a pre-mixed ink made to an exact recipe. It prints the same shade every time, which is why brands use it for logos.", "If your brand guide lists a Pantone code, give it to us and we'll print to it."] },
      { h: "Which should you choose?", list: ["Photos or many colors: CMYK.", "One or two brand colors that must match every time: Pantone.", "Both: CMYK for the design plus a Pantone for the logo.", "On kraft board, colors print darker because the board is brown. Ask for a white ink base if you need bright color on kraft."] },
      { h: "Check before you print", p: ["Your digital proof shows the layout, but no screen shows exact print color. If the color is critical, tell us in your quote and we'll talk through the options before printing."] },
    ],
  },
  {
    slug: "packaging-finishes-explained",
    title: "Soft-touch, foil, spot UV: packaging finishes explained",
    description: "What each packaging finish looks and feels like, what it suits, and how to combine them without overdoing it.",
    date: "2026-11-19",
    readMins: 4,
    tag: "Finishes",
    related: ["rigid-boxes", "cosmetic-boxes", "gift-boxes"],
    body: [
      { p: ["The finish is the last thing applied to your box and the first thing a customer feels. Here's what each one does."] },
      { h: "Laminates: the base layer", list: ["Matte: soft, no glare, calm and modern.", "Gloss: shiny, makes colors pop, resists scuffs.", "Soft-touch: a velvet feel that makes small boxes feel premium. Shows fingerprints a little on dark colors."] },
      { h: "Effects: the highlights", list: ["Foil stamping: gold, silver, rose gold or holographic metal, pressed onto the board. Best on logos and fine lines.", "Spot UV: a raised clear gloss on chosen areas, usually over matte. Catches the light as the box moves.", "Embossing and debossing: the board is pressed up or down so the logo can be felt. Works without ink, too.", "Window: a cut-out, often covered with clear film, so customers can see the product."] },
      { h: "How to combine them", p: ["Pick one base laminate and one or two effects. Matte or soft-touch with foil on the logo is the classic premium look. Matte with spot UV is subtle and modern. More than that tends to look busy and adds cost."] },
      { h: "See it before you order", p: ["Not sure which finish suits your brand? Ask for a free 3D mockup and we'll show your box with the finishes you're considering."] },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

/**
 * Which guides help a buyer of each kind of packaging. A guide scores highest where it already lists
 * the page as a related style, then where its topic fits the page's board or group. The cost and
 * measuring guides suit every box, so they fill any gaps.
 */
const guideFit: Record<string, (c: GuideTarget) => boolean> = {
  "mailer-box-sizes": (c) => /corrugated|flute/i.test(c.material) || /mailer|subscription|apparel|shipping/.test(c.slug),
  "mailer-box-vs-shipping-box": (c) => /corrugated|flute/i.test(c.material),
  "kraft-vs-white-boxes": (c) => /kraft|SBS|white/i.test(c.material) || /kraft|white|eco|soap|candle/.test(c.slug),
  "what-is-a-dieline": (c) => /SBS|card|tuck|auto-lock|die-cut/i.test(`${c.material} ${c.style}`),
  "cmyk-vs-pantone": (c) => c.group === "print" || /cosmetic|retail|display|lip|makeup|perfume|label|logo/.test(c.slug),
  "packaging-finishes-explained": (c) => /rigid|greyboard/i.test(c.material) || /luxury|gift|jewelry|perfume|magnetic|drawer/.test(c.slug),
};
const everyBox = ["how-to-measure-for-a-custom-box", "how-much-do-custom-boxes-cost"];

export type GuideTarget = { slug: string; parent?: string; material: string; style: string; group: string };

export function guidesFor(c: GuideTarget, limit = 3): Post[] {
  const score = (p: Post) =>
    (p.related.includes(c.slug) ? 4 : 0) +
    (c.parent && p.related.includes(c.parent) ? 2 : 0) +
    (guideFit[p.slug]?.(c) ? 2 : 0) +
    (everyBox.includes(p.slug) ? 1 : 0);
  return [...posts]
    .map((p, i) => ({ p, s: score(p), i }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s || a.i - b.i)
    .slice(0, limit)
    .map((x) => x.p);
}
