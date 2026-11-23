export type Block = { h?: string; p?: string[]; list?: string[] };
export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readMins: number;
  tag: string;
  /** Packaging styles to link at the end, by category slug. */
  related: string[];
  body: Block[];
};

export const posts: Post[] = [
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
