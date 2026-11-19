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
      { h: "Printing", p: ["Both styles can be printed in full colour outside and inside. Mailers print a little sharper because E-flute is smoother. Plain kraft with a one-colour logo is the lowest-cost option for either."] },
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
      { h: "Use the unit you know", p: ["Our quote form takes inches, centimetres or millimetres, and switches between them without rounding errors. If you're unsure, send us one product and we'll measure it for you."] },
    ],
  },
  {
    slug: "cmyk-vs-pantone",
    title: "CMYK vs Pantone: getting your brand colour right on a box",
    description: "Why your logo can print a different colour from your screen, and when to choose CMYK or a Pantone spot colour for your packaging.",
    date: "2026-11-19",
    readMins: 4,
    tag: "Artwork",
    related: ["cosmetic-boxes", "retail-boxes", "labels-and-stickers"],
    body: [
      { p: ["Screens show colour with light (RGB). Printers make colour with ink. That's why a bright on-screen colour can look duller on a box, and why choosing the right print method matters."] },
      { h: "CMYK", p: ["CMYK prints every colour by mixing four inks: cyan, magenta, yellow and black. It's ideal for photos, gradients and designs with many colours, and it's the standard for full-colour packaging.", "The catch: some colours, like very bright oranges, greens and blues, can't be reached by mixing four inks."] },
      { h: "Pantone (spot colour)", p: ["A Pantone colour is a pre-mixed ink made to an exact recipe. It prints the same shade every time, which is why brands use it for logos.", "If your brand guide lists a Pantone code, give it to us and we'll print to it."] },
      { h: "Which should you choose?", list: ["Photos or many colours: CMYK.", "One or two brand colours that must match every time: Pantone.", "Both: CMYK for the design plus a Pantone for the logo.", "On kraft board, colours print darker because the board is brown. Ask for a white ink base if you need bright colour on kraft."] },
      { h: "Check before you print", p: ["Your digital proof shows the layout, but no screen shows exact print colour. If the colour is critical, tell us in your quote and we'll talk through the options before printing."] },
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
      { h: "Laminates: the base layer", list: ["Matte: soft, no glare, calm and modern.", "Gloss: shiny, makes colours pop, resists scuffs.", "Soft-touch: a velvet feel that makes small boxes feel premium. Shows fingerprints a little on dark colours."] },
      { h: "Effects: the highlights", list: ["Foil stamping: gold, silver, rose gold or holographic metal, pressed onto the board. Best on logos and fine lines.", "Spot UV: a raised clear gloss on chosen areas, usually over matte. Catches the light as the box moves.", "Embossing and debossing: the board is pressed up or down so the logo can be felt. Works without ink, too.", "Window: a cut-out, often covered with clear film, so customers can see the product."] },
      { h: "How to combine them", p: ["Pick one base laminate and one or two effects. Matte or soft-touch with foil on the logo is the classic premium look. Matte with spot UV is subtle and modern. More than that tends to look busy and adds cost."] },
      { h: "See it before you order", p: ["Not sure which finish suits your brand? Ask for a free 3D mockup and we'll show your box with the finishes you're considering."] },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
