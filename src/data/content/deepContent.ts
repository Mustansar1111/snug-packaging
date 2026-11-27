/**
 * Long-form, page-specific copy for product pages that Google crawled but did not index.
 * Each entry replaces the shared template blocks on its page (the generic "at a glance" paragraph,
 * the customize tabs and the generic FAQs) with writing that only that page has:
 * a short quotable answer, who the packaging is for, typical sizes, materials, finishes, inserts
 * and questions buyers actually ask.
 *
 * Rules for this file:
 * - Write for a person first. Short sentences, plain words, US spelling.
 * - Never invent proof: no certifications, statistics, customer names or awards.
 * - Sizes are typical starting points, not a price list. Every box is still made to the customer's size.
 * - Links use [text](/path) and must point to pages that exist.
 */

export type DeepSection = { q: string; a: string[] };
export type SizeRow = { use: string; size: number[] };

export type DeepContent = {
  /** Page title before " | Snug Packaging". Keep it under about 43 characters. */
  title: string;
  /** Meta description, 120 to 158 characters. */
  description: string;
  /** The direct answer shown first, written so a search or AI engine can quote it on its own. */
  answer: { q: string; a: string };
  /** Who buys this packaging and why, in two or three short paragraphs. */
  who: string[];
  /** Typical inside sizes in inches. The page converts them to centimeters. */
  sizes: { cols: string; rows: SizeRow[]; note: string };
  /** Material, finish and insert questions, each answered in a few sentences. */
  sections: DeepSection[];
  faqs: { q: string; a: string }[];
  /** Industry hubs (slugs under /industries) and guides (slugs under /blog) to link to. */
  industries: string[];
  posts: string[];
};

export const deepContent: Record<string, DeepContent> = {
  "mailer-boxes": {
    title: "Custom Mailer Boxes, Printed Inside & Out",
    description:
      "Custom printed mailer boxes in E or B flute corrugated, made to your size from 100 units. Inside print, inserts and a free 3D proof before you pay.",
    answer: {
      q: "What is a mailer box?",
      a: "A mailer box is a folding corrugated box with a hinged lid and locking front tab, built to be posted on its own. It folds together without tape, arrives flat and is usually printed on the outside and inside, which is why online brands use it for orders, subscriptions and PR kits.",
    },
    who: [
      "Most mailer box buyers sell online. If your product leaves a warehouse and lands on a doorstep, the mailer is the first thing your customer sees and touches, so it does the job of a shop window.",
      "Subscription brands use them because one box size can hold a changing mix of products each month. Beauty and fashion brands use them for influencer and PR kits, where the reveal is filmed. Small makers like them because a hundred printed mailers is a realistic first order.",
    ],
    sizes: {
      cols: "L × W × H",
      note: "These are common starting points. We make every mailer to your product's inside size.",
      rows: [
        { use: "Jewelry, candles, small accessories", size: [6, 4, 2] },
        { use: "Folded T-shirt or a skincare set", size: [9, 6, 3] },
        { use: "Subscription box, 3 to 5 items", size: [10, 8, 4] },
        { use: "Hoodie, shoes or a gift hamper", size: [12, 9, 4] },
      ],
    },
    sections: [
      {
        q: "Which board is best for a mailer box: E-flute or B-flute?",
        a: [
          "E-flute is about 1.5 mm thick. It folds crisply, prints sharply and suits most products under a couple of pounds, such as clothing, cosmetics and books.",
          "B-flute is about 3 mm thick and cushions better. Choose it for glass, candles, ceramics or anything heavy. You can have either with a white outer layer for bright color or a [kraft](/packaging/kraft-boxes) outer layer for a natural look.",
        ],
      },
      {
        q: "Should I print the inside of my mailer?",
        a: [
          "If your customers film or photograph the unboxing, yes. Inside print is the part people see when the lid comes up, and a simple pattern or a one-line thank-you is enough. If budget is tight, print the outside in one color and spend the money on the inside instead.",
        ],
      },
      {
        q: "Do mailer boxes need an insert?",
        a: [
          "Only if things can move. A card insert with cut-outs holds bottles, jars and sets in place, and a simple divider keeps two items apart. Clothing usually needs nothing more than tissue. Tell us what goes inside and we'll suggest the cheapest way to keep it still. Our [trays and sleeves](/packaging/trays-and-sleeves) page shows other ways to hold products.",
        ],
      },
    ],
    faqs: [
      { q: "Can a mailer box go through the post without an outer carton?", a: "Yes. Mailers are designed to travel on their own. For very heavy or fragile items we suggest B-flute or a plain outer shipper." },
      { q: "What is the difference between a mailer box and a shipping box?", a: "A mailer has a hinged lid and is printed to impress. A [shipping box](/packaging/shipping-boxes) is a plain slotted carton that is taped shut and built for protection. Our [mailer vs shipping box guide](/blog/mailer-box-vs-shipping-box) compares both." },
      { q: "How do I choose the right mailer size?", a: "Measure your product, then add room for tissue or an insert. Our [mailer box sizes guide](/blog/mailer-box-sizes) walks through it with examples." },
      { q: "Can I order different sizes in one order?", a: "Yes. Each size is its own design with a 100-box minimum, and you can quote several sizes together." },
    ],
    industries: ["subscription-boxes", "apparel", "cosmetics"],
    posts: ["mailer-box-sizes", "mailer-box-vs-shipping-box", "how-to-measure-for-a-custom-box"],
  },

  "gable-boxes": {
    title: "Custom Gable Boxes with Handles",
    description:
      "Custom gable boxes with a built-in carry handle, in food-grade card or kraft. For bakeries, takeout, party favors and gifts, from 100 boxes.",
    answer: {
      q: "What is a gable box?",
      a: "A gable box is a folding carton with a peaked top that forms its own carry handle, so it holds like a small bag. It is made from one piece of card, ships flat and is used for bakery treats, takeout meals, party favors and small gifts.",
    },
    who: [
      "Bakeries and cafes reach for gable boxes when a customer needs to carry a few items home without a separate bag. Kids' meal brands, food trucks and caterers use them for boxed meals because the handle makes them easy to hand over.",
      "Outside food, they are a party favor favorite. Wedding planners, event companies and gift shops use small gable boxes for sweets, candles and little thank-you gifts.",
    ],
    sizes: {
      cols: "L × W × H (base)",
      note: "Height is the body of the box. The handle adds roughly 2 to 3 inches on top.",
      rows: [
        { use: "Party favor or a few sweets", size: [3, 2, 3] },
        { use: "Two cupcakes or cookies", size: [6, 3, 4] },
        { use: "Kids' meal or sandwich and sides", size: [6, 4, 5] },
        { use: "Pastries or a small gift set", size: [9, 5, 5] },
      ],
    },
    sections: [
      {
        q: "What material are gable boxes made from?",
        a: [
          "Most are 16 to 18pt food-grade SBS card, which is smooth, white and prints bright color. Brown kraft card gives a rustic, eco look and hides grease marks well. For heavier loads, such as a full meal or bottled drinks, we can make the box in thin corrugated board so the handle doesn't tear.",
        ],
      },
      {
        q: "Can a gable box have a window?",
        a: [
          "Yes. A die-cut window with clear film on the front lets people see cupcakes, cookies or favors without opening the box. Keep the window away from the handle folds so the box stays strong.",
        ],
      },
      {
        q: "How do I stop cupcakes moving in a gable box?",
        a: [
          "Add a card insert with round holes, one per cupcake. It drops into the base and keeps the frosting off the walls. For cookies and pastries, a simple flat liner or a square of greaseproof paper is usually enough. See our [cupcake boxes](/packaging/cupcake-boxes) for more ideas.",
        ],
      },
    ],
    faqs: [
      { q: "Are gable boxes food-safe?", a: "Yes, when made from food-grade board. Tell us if the food touches the box directly and whether it is oily, and we'll add a grease-resistant coating if needed." },
      { q: "Do gable boxes need glue or tape?", a: "No. Most gable boxes lock together with folds and tabs, and the handle clicks shut at the top." },
      { q: "Can I print my logo on both sides of the handle?", a: "Yes. The two handle panels and all four sides of the body can carry print." },
      { q: "Are gable boxes good for wedding favors?", a: "Yes. Small kraft or white gable boxes with a name or date in foil are a popular favor. See [favor boxes](/packaging/favor-boxes) for other styles." },
    ],
    industries: ["food-and-bakery", "retail"],
    posts: ["kraft-vs-white-boxes", "how-to-measure-for-a-custom-box"],
  },

  "dispenser-boxes": {
    title: "Custom Dispenser Boxes, Tear-Open Fronts",
    description:
      "Custom printed dispenser boxes with a perforated or pull-out opening for sachets, tea bags, gloves, wipes and sweets. Made to your size from 100 boxes.",
    answer: {
      q: "What is a dispenser box?",
      a: "A dispenser box is a carton with a perforated panel or slot that opens so items can be taken out one at a time. It keeps the rest of the stock tidy inside, and the printed front works as a small display on a counter, shelf or desk.",
    },
    who: [
      "Dispenser boxes suit anything sold or handed out in singles: tea bags, sugar and coffee sticks, sample sachets, disposable gloves, wipes, face masks and individually wrapped sweets.",
      "Retailers like them because they sit at the till and sell without staff. Clinics, salons and offices use them because people can help themselves without opening a new pack. Brands that give out samples at events use them to keep a booth neat.",
    ],
    sizes: {
      cols: "L × W × H",
      note: "Size the box around how your items stack, not just how many there are. We check the fit before production.",
      rows: [
        { use: "Sample sachets or stick packs", size: [5, 3, 3] },
        { use: "20 to 25 tea bags", size: [6, 3, 3] },
        { use: "Wrapped sweets or snack bars", size: [8, 5, 3] },
        { use: "Box of 100 disposable gloves", size: [9.5, 5, 3.5] },
      ],
    },
    sections: [
      {
        q: "Which opening works best: perforated, slot or flip-top?",
        a: [
          "A perforated tear-away panel is the most common. The box stays sealed until first use, then the panel tears off to reveal a neat opening. A cut slot suits flat items like wipes or tissues. A flip-top lid can be closed again, which helps when the contents need to stay clean or dry.",
        ],
      },
      {
        q: "What board should a dispenser box use?",
        a: [
          "For light items such as tea bags and sachets, 16 to 18pt SBS card is plenty and prints sharply. For heavier or frequently handled boxes, such as gloves or snack bars on a busy counter, E-flute corrugated keeps the opening from tearing too far.",
        ],
      },
      {
        q: "Can a dispenser box double as a counter display?",
        a: [
          "Yes. Many brands print the inside of the opening and the top flap so the box looks finished once it is open. If you need a tray that shows several products at once, a [display box](/packaging/display-boxes) is the better choice.",
        ],
      },
    ],
    faqs: [
      { q: "Can the box be shipped full and opened on site?", a: "Yes. The perforations hold firm in transit and only tear when someone pushes the panel in." },
      { q: "Can I get a dispenser box with a window?", a: "Yes. A small window shows how many items are left, which is handy for shops restocking shelves." },
      { q: "Do you make dispenser boxes for food items?", a: "Yes, in food-grade board. Wrapped items like tea bags and sweets are the most common." },
      { q: "Will the perforation tear on its own?", a: "We set the cut so it opens with a firm push, not by accident. If your boxes will be handled roughly, tell us and we'll make it stronger." },
    ],
    industries: ["retail", "food-and-bakery"],
    posts: ["how-to-measure-for-a-custom-box", "what-is-a-dieline"],
  },

  "popcorn-boxes": {
    title: "Custom Popcorn Boxes for Events & Brands",
    description:
      "Custom popcorn boxes in grease-resistant food-grade board: open-top boxes for cinemas and events, closed cartons for gourmet brands. From 100 boxes.",
    answer: {
      q: "What are popcorn boxes made of?",
      a: "Popcorn boxes are made from food-grade card with a grease-resistant coating, so butter and caramel don't soak through. Open-top tapered boxes are for serving fresh popcorn, while closed cartons, often with a sealed bag inside, are for packaged gourmet popcorn that needs to stay crisp.",
    },
    who: [
      "Cinemas, theaters, fairgrounds and stadium vendors use open-top boxes because they are fast to fill and easy to hold. Event and party planners order small branded ones for movie nights, birthdays and weddings.",
      "Gourmet popcorn brands are a different buyer. They sell flavored popcorn in shops and online, and they need a closed box that protects the product and tells their story on the shelf.",
    ],
    sizes: {
      cols: "W × D × H (top)",
      note: "Open-top boxes taper toward the base. These are the top opening and height.",
      rows: [
        { use: "Party or wedding favor", size: [3, 2, 5] },
        { use: "Kids' or small serving", size: [3.5, 2.5, 6] },
        { use: "Regular cinema serving", size: [4, 3, 7] },
        { use: "Large sharing box", size: [5, 3.5, 8] },
      ],
    },
    sections: [
      {
        q: "Open-top or closed popcorn box?",
        a: [
          "Choose open-top if popcorn is popped and served on the spot. Choose a closed tuck carton if it is packed in advance. Popcorn goes stale quickly in open air, so packaged popcorn should sit in a sealed [stand-up pouch](/packaging/stand-up-pouches) or [mylar bag](/packaging/mylar-bags), with the printed box around it.",
        ],
      },
      {
        q: "Do popcorn boxes need a grease-resistant coating?",
        a: [
          "Yes, for buttered, caramel or cheese popcorn. Without it, oil spots show through the print within minutes. Plain air-popped popcorn in a sealed bag can go in an uncoated box.",
        ],
      },
      {
        q: "What finishes suit popcorn boxes?",
        a: [
          "Classic red-and-white stripes are instantly recognized, and they can carry your logo in a panel. Gloss makes bright colors pop under cinema lights. Gourmet brands often prefer matte or kraft for a more grown-up look.",
        ],
      },
    ],
    faqs: [
      { q: "Can popcorn boxes be stacked before use?", a: "Yes. Open-top boxes ship flat and fold up in seconds, so you can store hundreds in a small space." },
      { q: "Can I print a different design for each event?", a: "Yes. Each design has a 100-box minimum, which suits one-off events and launches." },
      { q: "Are kraft popcorn boxes available?", a: "Yes. Brown kraft with a one-color logo suits farmers' markets and natural snack brands." },
      { q: "Do you make popcorn gift boxes?", a: "Yes. A two-piece or window box can hold several bags of flavored popcorn as a gift set. See [gift boxes](/packaging/gift-boxes)." },
    ],
    industries: ["food-and-bakery", "retail"],
    posts: ["kraft-vs-white-boxes", "how-much-do-custom-boxes-cost"],
  },

  "cube-boxes": {
    title: "Custom Cube Boxes, Square Gift Boxes",
    description:
      "Custom square cube boxes in folding card, kraft or rigid board for candles, mugs, bath bombs and gifts. All six sides printable, from 100 boxes.",
    answer: {
      q: "What is a cube box?",
      a: "A cube box is a square box with equal or near-equal length, width and height. It can be a folding tuck carton that ships flat, a two-piece box with a lift-off lid, or a rigid box for premium gifts. Its four matching sides mean the design looks right from any angle on a shelf.",
    },
    who: [
      "Cube boxes fit products that are about as wide as they are tall: candles, jars, mugs, bath bombs, small plants, baubles and perfume. Candle makers and home fragrance brands are among the most frequent buyers.",
      "Gift shops and event companies use small cubes for favors and corporate gifts, and retailers like them because they stack into neat, stable towers in a window or on a counter.",
    ],
    sizes: {
      cols: "L × W × H",
      note: "Cubes don't have to be perfect. A box a little taller than it is wide is often a better fit.",
      rows: [
        { use: "Favor, ring or single truffle", size: [2, 2, 2] },
        { use: "Bath bomb or small candle tin", size: [3, 3, 3] },
        { use: "8 to 10 oz jar candle", size: [4, 4, 4] },
        { use: "Gift set or large candle", size: [6, 6, 6] },
      ],
    },
    sections: [
      {
        q: "Folding cube or rigid cube?",
        a: [
          "A folding cube in SBS or kraft card is the most cost-effective. It ships flat and folds in seconds. A rigid cube is made from thick chipboard wrapped in printed paper. It arrives made up, takes more storage space and costs more, but it feels like a keepsake. A [two-piece box](/packaging/two-piece-boxes) sits in between.",
        ],
      },
      {
        q: "How do I keep a jar or candle centered in a cube box?",
        a: [
          "Use a card collar or a die-cut insert with a round hole. It holds the jar in the middle so it can't knock the walls, and it costs much less than foam. For posting glass, choose E-flute board or put the cube inside a [mailer box](/packaging/mailer-boxes).",
        ],
      },
      {
        q: "What finishes work on a cube box?",
        a: [
          "Because every side is the same size, patterns that wrap around all four faces look great. Soft-touch with a foil logo on the lid is a classic for candles and perfume. Kraft with one-color print suits handmade and natural brands.",
        ],
      },
    ],
    faqs: [
      { q: "Can every side of the cube be printed differently?", a: "Yes. Each panel can carry its own design, including the top and base." },
      { q: "Can a cube box have a window?", a: "Yes, on any side. A window on the front is popular for bath bombs and candles." },
      { q: "Are cube boxes good for shipping?", a: "Folding card cubes are for shelves. For posting, choose a corrugated cube or ship the cube inside a mailer." },
      { q: "Do you make cube boxes for candles?", a: "Yes. See [candle boxes](/packaging/candle-boxes) for inserts, finishes and sizes that suit jar candles." },
    ],
    industries: ["cbd-and-candles", "retail"],
    posts: ["how-to-measure-for-a-custom-box", "packaging-finishes-explained"],
  },

  "mug-boxes": {
    title: "Custom Mug Boxes with Inserts",
    description:
      "Custom mug boxes with handle-safe inserts, in SBS card for shops or corrugated for posting. For ceramic, travel and promo mugs, from 100 boxes.",
    answer: {
      q: "How do you package a mug so it doesn't break?",
      a: "Pack each mug in a box sized closely to its body and handle, with a card insert that stops it moving. For shops, a printed card tuck box is enough. For posting, use E-flute corrugated board and keep at least a small gap between the mug and the walls so knocks don't reach the ceramic.",
    },
    who: [
      "Mug boxes are ordered by print-on-demand sellers, potters and ceramic studios, coffee roasters building gift sets, and companies giving out promotional mugs at events.",
      "Gift shops and museum stores often want a window so the design sells itself. Online sellers care more about protection and an easy, tape-free box that packs quickly.",
    ],
    sizes: {
      cols: "L × W × H",
      note: "Length includes the handle. Measure your own mug at its widest point before you order.",
      rows: [
        { use: "Espresso cup", size: [3.5, 2.75, 3] },
        { use: "Standard 11 oz mug", size: [4.75, 3.5, 4] },
        { use: "Large 15 oz mug", size: [5.25, 3.75, 4.75] },
        { use: "Travel mug or tumbler", size: [3.5, 3.5, 7.5] },
      ],
    },
    sections: [
      {
        q: "SBS card or corrugated for mug boxes?",
        a: [
          "SBS card prints beautifully and suits mugs that sit on a shelf and leave in a shopping bag. Corrugated board is thicker and absorbs knocks, so it suits mugs sent by courier. If you sell both in store and online, some brands use a card box for display and post it inside a plain outer carton.",
        ],
      },
      {
        q: "What kind of insert does a mug need?",
        a: [
          "A simple card insert with a slot for the handle stops the mug turning, which is when most chips happen. For two mugs in one box, a divider keeps them from touching. For mug and coffee gift sets, a two-part insert holds the mug and a pouch of [coffee](/packaging/coffee-packaging) side by side.",
        ],
      },
      {
        q: "Should my mug box have a window?",
        a: [
          "If the mug's design is the reason people buy it, yes. A window on the front or a cut-out shaped like the mug shows the print without opening the box. If the mug is plain, a fully printed box with a photo of the mug works just as well.",
        ],
      },
    ],
    faqs: [
      { q: "Can you make boxes for sets of two or four mugs?", a: "Yes, with dividers so the mugs don't touch." },
      { q: "Can the box handle a mug gift with coffee or tea?", a: "Yes. Send us the mug and pouch sizes and we'll design a two-part insert." },
      { q: "Do you make mug boxes for print-on-demand sellers?", a: "Yes. Order a plain-colored box with your logo, so one design works for every mug you sell." },
      { q: "Can mug boxes be made in kraft?", a: "Yes. Brown or white kraft with one-color print is a popular choice for handmade pottery." },
    ],
    industries: ["retail", "subscription-boxes"],
    posts: ["how-to-measure-for-a-custom-box", "mailer-box-vs-shipping-box"],
  },

  "apparel-boxes": {
    title: "Custom Apparel Boxes & Clothing Packaging",
    description:
      "Custom apparel boxes for T-shirts, hoodies, swimwear and accessories: printed mailers, shirt boxes and two-piece gift boxes, made to size from 100 units.",
    answer: {
      q: "What box do clothing brands use for shipping?",
      a: "Most clothing brands ship in a printed corrugated mailer box for a premium unboxing, or a poly mailer bag when cost and weight matter most. Shirt boxes and two-piece rigid boxes are used for gifts, store purchases and higher-priced pieces.",
    },
    who: [
      "Apparel boxes are ordered by streetwear labels, activewear and swimwear brands, children's clothing makers, sock and underwear brands, and boutiques that gift-wrap in store.",
      "A brand with a drop model often wants a mailer that customers keep and post online. A boutique wants a slim shirt box that fits a shopping bag. A luxury label wants a rigid box with tissue and a sticker seal. All three are apparel boxes, and they look very different.",
    ],
    sizes: {
      cols: "L × W × H",
      note: "Fold the garment the way you'll pack it, then measure. Bulky knits need extra height.",
      rows: [
        { use: "Socks, underwear or a scarf", size: [7, 5, 2] },
        { use: "Folded T-shirt or swimwear", size: [10, 8, 2] },
        { use: "Slim shirt or blouse box", size: [14, 9, 2] },
        { use: "Hoodie, sweater or jeans", size: [12, 10, 4] },
      ],
    },
    sections: [
      {
        q: "Mailer box, shirt box or rigid box?",
        a: [
          "A [mailer box](/packaging/mailer-boxes) is the all-rounder: it protects in the post and gives a good reveal. A shirt box is a thin two-piece card box for in-store gifts and doesn't travel well on its own. A [rigid box](/packaging/rigid-boxes) with a magnetic or lift-off lid is for premium pieces and gift sets.",
        ],
      },
      {
        q: "What finishes suit clothing packaging?",
        a: [
          "Matte lamination and soft-touch suit minimal, high-end brands. Bold full-color print inside and out suits streetwear and kids' brands. Many labels keep the outside simple and put a pattern or message inside the lid, where it shows up in unboxing photos.",
        ],
      },
      {
        q: "What goes inside an apparel box?",
        a: [
          "Usually [branded tissue paper](/packaging/tissue-paper), a sticker to seal it, a [hang tag](/packaging/hang-tags) on the garment and a care or thank-you card. A card insert is only needed for accessories, like a belt or sunglasses, that could slide around.",
        ],
      },
    ],
    faqs: [
      { q: "Are poly mailers or boxes better for clothing?", a: "Poly mailers are lighter and cheaper to post. Boxes protect better and feel more premium. Many brands use boxes for first orders and gifts and [poly bags](/packaging/poly-bags) for repeat orders." },
      { q: "Can I print inside and outside the box?", a: "Yes. We can print both sides of the board in one order." },
      { q: "Do apparel boxes come flat?", a: "Yes. Mailers and folding shirt boxes ship flat and fold up by hand. Rigid boxes arrive made up." },
      { q: "Can you match tags, bags and boxes?", a: "Yes. Add [hang tags](/packaging/hang-tags) and [paper bags](/packaging/paper-bags) to the same quote and we'll match the colors." },
    ],
    industries: ["apparel", "subscription-boxes", "retail"],
    posts: ["mailer-box-vs-shipping-box", "mailer-box-sizes", "kraft-vs-white-boxes"],
  },

  "stationery-boxes": {
    title: "Custom Stationery Boxes for Pens & Notebooks",
    description:
      "Custom stationery boxes for pens, pencils, notebooks, planners and gift sets, with fitted inserts and premium finishes. Made to size from 100 boxes.",
    answer: {
      q: "What are stationery boxes used for?",
      a: "Stationery boxes package pens, pencils, notebooks, planners, washi tape, sticky notes and desk gift sets. They range from slim tuck boxes for a single pen to rigid boxes with fitted inserts for gift sets, and are sold in shops, online and as corporate gifts.",
    },
    who: [
      "Stationery boxes are ordered by independent planner and notebook brands, pen and art supply makers, gift shops, and companies building branded desk sets for staff and clients.",
      "Stationery buyers tend to be design-led, so the box is judged as closely as the product. A neat fit, a good board weight and a clean print matter more here than in almost any other category.",
    ],
    sizes: {
      cols: "L × W × H",
      note: "A5 is about 5.8 × 8.3 in and A6 is about 4.1 × 5.8 in. Add room for the cover and any insert.",
      rows: [
        { use: "Single pen", size: [6.5, 1.5, 1] },
        { use: "Pencil or marker set", size: [8, 4, 1] },
        { use: "Washi tape or sticky note set", size: [5, 5, 1.5] },
        { use: "A5 notebook or planner", size: [9, 6.5, 1.25] },
      ],
    },
    sections: [
      {
        q: "Which box style suits stationery best?",
        a: [
          "Pens and pencil sets suit a slim [two-piece box](/packaging/two-piece-boxes) or a [tray and sleeve](/packaging/trays-and-sleeves). Notebooks and planners suit a [book box](/packaging/book-boxes) that opens like a cover. Mixed gift sets suit a rigid box with a fitted insert, and stationery subscriptions suit a printed mailer.",
        ],
      },
      {
        q: "What inserts are used for pens and stationery sets?",
        a: [
          "Card inserts with slots hold pens and pencils in a row. Foam or flocked inserts feel more premium for fountain pens. For notebooks, a raised card platform lifts the book so it is easy to take out. We design the insert from your product sizes, so send each item's measurements.",
        ],
      },
      {
        q: "Which finishes do stationery brands choose?",
        a: [
          "Uncoated or textured paper feels close to the product and takes debossing well. Soft-touch with a small foil logo is popular for planners. Bright full color suits kids' and art supply ranges.",
        ],
      },
    ],
    faqs: [
      { q: "Can you make a box for one pen?", a: "Yes. Slim pen boxes with a slot insert are a common gift and promo item." },
      { q: "Do you make corporate stationery gift boxes?", a: "Yes. A rigid box with a fitted insert and your logo in foil makes a smart desk set." },
      { q: "Can notebooks be boxed in kraft?", a: "Yes. Kraft suits recycled paper notebooks and minimal brands." },
      { q: "Can I add a sleeve for limited editions?", a: "Yes. Keep a standard box and print a new sleeve for each drop." },
    ],
    industries: ["retail", "subscription-boxes"],
    posts: ["packaging-finishes-explained", "how-to-measure-for-a-custom-box"],
  },

  "food-boxes": {
    title: "Custom Food Boxes & Takeout Packaging",
    description:
      "Custom food boxes in food-grade, grease-resistant board: clamshells, trays, takeout and snack cartons for restaurants and food brands, from 100 units.",
    answer: {
      q: "What makes a food box food-safe?",
      a: "A food-safe box uses food-grade board and inks suited to food contact, plus a grease-resistant coating or liner when the food is oily or wet. The right choice depends on whether the food is hot or cold, how long it stays in the box and whether it touches the board directly.",
    },
    who: [
      "Restaurants, takeaways, food trucks and ghost kitchens order food boxes for burgers, wraps, noodles, salads and sides. Caterers order them for boxed lunches and event meals.",
      "Packaged food brands are the other half. Snack, cereal and confectionery makers need retail cartons that protect a sealed bag inside and carry ingredients, nutrition panels and a barcode. Our [food and bakery hub](/industries/food-and-bakery) covers both.",
    ],
    sizes: {
      cols: "L × W × H",
      note: "Takeout sizes vary with portions. Send us your current box or the food's size and we'll match it.",
      rows: [
        { use: "Burger clamshell", size: [5, 5, 3.5] },
        { use: "Salad or noodle box", size: [7, 5, 3] },
        { use: "Meal tray with lid", size: [9, 6, 3] },
        { use: "Retail snack carton", size: [6, 2, 8] },
      ],
    },
    sections: [
      {
        q: "Which board is best for hot and greasy food?",
        a: [
          "Food-grade SBS or kraft with a grease-resistant coating handles burgers, fries and fried chicken. For heavy, saucy or steamy meals, thin E-flute corrugated stays rigid longer and insulates better. Add small vents to stop steam making the food soggy.",
        ],
      },
      {
        q: "Kraft or white for food packaging?",
        a: [
          "Kraft hides grease marks and suits burger joints, street food and natural brands. White card shows bright colors and photos, which suits snack brands and dessert shops. Our [kraft vs white boxes guide](/blog/kraft-vs-white-boxes) explains the trade-offs.",
        ],
      },
      {
        q: "What should be printed on retail food packaging?",
        a: [
          "Usually the product name, net weight, ingredients, allergens, nutrition information, best-before area, barcode and your business address. Labeling rules differ in the USA, UK, Australia and the EU, so check what applies where you sell. We print the wording you supply.",
        ],
      },
    ],
    faqs: [
      { q: "Can food boxes have foil or metallic print?", a: "Yes for retail cartons. For boxes that might be reheated, we leave foil and metallic inks off, so tell us how the food will be used." },
      { q: "Do you make leak-resistant boxes for sauces?", a: "We use coatings that resist grease and moisture for a meal's normal lifespan. For liquids, use a sealed tub inside the box." },
      { q: "Can I order a full takeout range?", a: "Yes. Fries, sandwich, noodle and clamshell boxes can share one design. See [fries boxes](/packaging/fries-boxes) and [sandwich boxes](/packaging/sandwich-boxes)." },
      { q: "Can you print a QR code to my menu?", a: "Yes. A QR code on the lid is a simple way to bring repeat orders." },
    ],
    industries: ["food-and-bakery", "retail"],
    posts: ["kraft-vs-white-boxes", "how-much-do-custom-boxes-cost"],
  },

  "fries-boxes": {
    title: "Custom Fries Boxes, Grease-Resistant",
    description:
      "Custom printed fries boxes and scoops in grease-resistant food-grade board, for burger bars, chip shops and street food. Several sizes, from 100 boxes.",
    answer: {
      q: "What are fries boxes made from?",
      a: "Fries boxes are made from food-grade card, usually SBS or kraft, with a grease-resistant coating so oil doesn't soak through. The classic scoop shape is open at the top with a taller back panel, which makes it quick to fill and easy to eat from.",
    },
    who: [
      "Burger restaurants, chip shops, food trucks, stadium kiosks and fried chicken shops order fries boxes. So do loaded-fries brands, where the box is part of the presentation and shows up in every photo.",
      "Event caterers and festival vendors use them too, often with a bold design that people recognize from across a field.",
    ],
    sizes: {
      cols: "W × D × H (top)",
      note: "Scoops are wider at the top than at the base. Most shops order two or three sizes.",
      rows: [
        { use: "Kids or small portion", size: [3.5, 1.5, 4.5] },
        { use: "Regular portion", size: [4, 2, 5] },
        { use: "Large portion", size: [4.5, 2.5, 5.5] },
        { use: "Loaded fries tray", size: [6, 4, 2] },
      ],
    },
    sections: [
      {
        q: "Scoop, cone or tray: which fries box should I choose?",
        a: [
          "The scoop is the classic for plain fries. A shallow tray suits loaded fries with toppings and sauce, because people need room to dig in with a fork. A paper [cone sleeve](/packaging/cone-sleeves) is cheaper and suits street food. Many shops use a scoop for sides and a tray for loaded dishes.",
        ],
      },
      {
        q: "How do I stop fries going soggy?",
        a: [
          "Use an open-top box so steam can escape, and ask for a grease-resistant coating. Kraft board hides oil better than white. For delivery, a vented clamshell keeps fries warmer without trapping too much steam.",
        ],
      },
      {
        q: "What design works on a fries box?",
        a: [
          "Keep it bold and simple. The front panel is small and seen from a distance, so a large logo and one or two colors work better than detail. Print the same design on every size so customers spot your brand in a photo.",
        ],
      },
    ],
    faqs: [
      { q: "Are fries boxes food-safe?", a: "Yes, when made from food-grade board with a grease-resistant coating." },
      { q: "Can I get matching burger and sandwich boxes?", a: "Yes. See [food boxes](/packaging/food-boxes) and [sandwich boxes](/packaging/sandwich-boxes) for the rest of the range." },
      { q: "Do fries boxes ship flat?", a: "Yes. They arrive flat and pop into shape with one fold." },
      { q: "Can I print on the inside?", a: "Yes, though most shops keep the inside plain because it is covered by food." },
    ],
    industries: ["food-and-bakery"],
    posts: ["kraft-vs-white-boxes", "cmyk-vs-pantone"],
  },

  "cbd-boxes": {
    title: "Custom CBD Boxes for Oils & Gummies",
    description:
      "Custom CBD boxes for tinctures, gummies, creams and capsules, with inserts and room for dosage, batch and lab-result QR codes. From 100 boxes.",
    answer: {
      q: "What do CBD boxes need to include?",
      a: "CBD boxes usually show the product name, CBD strength per serving and per pack, size, ingredients, directions, warnings, a batch number and a QR code linking to lab results. The exact rules depend on the country or state where you sell, so check them before you finalize the artwork.",
    },
    who: [
      "CBD boxes are ordered by tincture and oil brands, gummy and edible makers, topical and skincare brands using CBD, and pet CBD companies. Wellness shops and pharmacies that stock several CBD lines also ask for display boxes.",
      "Because many shoppers are cautious about CBD, the box has a job beyond protection: it has to look trustworthy. Clean layout, clear dosage and an easy route to lab results go a long way.",
    ],
    sizes: {
      cols: "L × W × H",
      note: "Measure bottles with the dropper or cap fitted. Jars are measured at the lid.",
      rows: [
        { use: "15 ml or 30 ml dropper bottle", size: [1.5, 1.5, 4.5] },
        { use: "Gummy jar", size: [3, 3, 4] },
        { use: "Cream or balm jar", size: [2.75, 2.75, 2.5] },
        { use: "Capsule bottle", size: [2.25, 2.25, 4.25] },
      ],
    },
    sections: [
      {
        q: "Do CBD boxes need to be child-resistant?",
        a: [
          "It depends on the product and the market. Some places require child-resistant packaging for certain CBD products, often at the container level rather than the outer box. Check your local rules, and tell us what you need in your quote. We'll tell you honestly what we can make.",
        ],
      },
      {
        q: "Which material suits CBD packaging?",
        a: [
          "Most CBD cartons are 16 to 18pt SBS card, which gives clean white panels for dosage tables and small type. Brands with an earthy look choose [kraft](/packaging/kraft-boxes) or [hemp-style boxes](/packaging/hemp-boxes). Premium gift sets go in rigid boxes with a fitted insert.",
        ],
      },
      {
        q: "How do you protect glass tincture bottles?",
        a: [
          "A card insert or collar holds the bottle upright and away from the walls. A reverse tuck carton with a tight fit is enough for shelves. For postal orders, ship the cartons inside a [mailer box](/packaging/mailer-boxes), or ask about an E-flute carton.",
        ],
      },
    ],
    faqs: [
      { q: "Can you print lab-result QR codes?", a: "Yes. Send the QR code or the link and we'll place it where it scans easily." },
      { q: "Can each strength have its own design?", a: "Yes. Each design has a 100-box minimum, or keep one box and use a strength [label](/packaging/labels-and-stickers)." },
      { q: "Do you make boxes for CBD gummies?", a: "Yes. See [CBD gummies boxes](/packaging/cbd-gummies-boxes) for jar and pouch options." },
      { q: "Can you make smell-proof CBD packaging?", a: "Boxes aren't smell-proof. For that, use heat-sealed [mylar bags](/packaging/mylar-bags) inside the box." },
    ],
    industries: ["cbd-and-candles", "retail"],
    posts: ["what-is-a-dieline", "cmyk-vs-pantone"],
  },

  "bottle-boxes": {
    title: "Custom Bottle Boxes for Wine, Spirits & Oils",
    description:
      "Custom bottle boxes with fitted inserts for wine, spirits, oils, sauces and drinks: folding cartons, rigid gift boxes and corrugated shippers, from 100.",
    answer: {
      q: "What is the best box for shipping a glass bottle?",
      a: "For shipping, use a corrugated box with an insert that holds the bottle by the neck and base so it can't touch the walls. For shelves and gifts, a folding carton or rigid box with a card insert is enough. Many brands ship the gift box inside a plain corrugated outer.",
    },
    who: [
      "Bottle boxes are ordered by wineries, distillers and craft brewers, olive oil and hot sauce makers, cold-pressed juice brands, and anyone selling a bottle as a gift.",
      "Spirits and wine buyers often want a premium gift box for the holidays. Food brands want a protective, informative carton for retail. Online sellers want something that survives a courier.",
    ],
    sizes: {
      cols: "L × W × H",
      note: "Bottle shapes vary a lot. Measure height to the top of the cap and width at the widest point.",
      rows: [
        { use: "50 ml miniature", size: [1.75, 1.75, 4.75] },
        { use: "Hot sauce or 250 ml oil", size: [2.25, 2.25, 7.5] },
        { use: "700 ml spirits bottle", size: [3.75, 3.75, 11.5] },
        { use: "750 ml wine bottle", size: [3.5, 3.5, 13] },
      ],
    },
    sections: [
      {
        q: "Folding carton, rigid box or tube?",
        a: [
          "A folding carton in SBS card is the most affordable and suits sauces, oils and miniatures. A [rigid box](/packaging/rigid-boxes) with a magnetic or hinged lid turns a bottle of spirits into a gift. A [paper tube](/packaging/tube-packaging) is a stylish middle ground for wine and gin.",
        ],
      },
      {
        q: "What insert does a bottle box need?",
        a: [
          "A neck-and-base insert in card or corrugated is the most common. It holds the bottle still at the top and bottom. For gift sets with glasses, a die-cut insert gives each item its own space. Foam looks premium but costs more and is harder to recycle.",
        ],
      },
      {
        q: "Which finishes suit bottle boxes?",
        a: [
          "Textured papers, deep colors and foil suit spirits and wine. Embossing a crest or logo adds a touch customers feel. Food brands often prefer clean matte print with clear ingredient panels.",
        ],
      },
    ],
    faqs: [
      { q: "Can you make two- and three-bottle boxes?", a: "Yes, with dividers so the bottles don't touch." },
      { q: "Do you make wine gift boxes with glasses?", a: "Yes. Send the bottle and glass sizes and we'll design the insert." },
      { q: "Can bottle boxes have handles?", a: "Yes. A carry handle is common for wine and beer gift packs." },
      { q: "Do you print alcohol warnings?", a: "We print the wording you provide. Check the labeling rules for each country you sell in." },
    ],
    industries: ["food-and-bakery", "retail"],
    posts: ["mailer-box-vs-shipping-box", "packaging-finishes-explained"],
  },

  "chocolate-boxes": {
    title: "Custom Chocolate Boxes & Bar Wrappers",
    description:
      "Custom chocolate boxes in food-safe board: bar sleeves, truffle boxes with cavity inserts and luxury gift sets with foil and embossing. From 100 units.",
    answer: {
      q: "What packaging do chocolate makers use?",
      a: "Chocolate bars are usually wrapped in foil or a sealed inner wrapper, then put in a printed sleeve or tuck carton. Truffles and bonbons go in boxes with a cavity insert that holds each piece apart. Gift sets use rigid boxes with lids, drawers or magnetic closures.",
    },
    who: [
      "Chocolate boxes are ordered by bean-to-bar makers, chocolatiers, bakeries with a confectionery range, and gift companies building hampers. Corporate buyers order branded chocolate boxes for client gifts at Christmas.",
      "Chocolate is a gift more often than not, so the box is judged like wrapping paper. People expect a satisfying lid, a neat insert and a finish that feels special.",
    ],
    sizes: {
      cols: "L × W × H",
      note: "Cavity inserts are made for your pieces. Send the size and shape of each truffle.",
      rows: [
        { use: "Standard bar sleeve, about 100 g", size: [6.25, 3, 0.5] },
        { use: "4-piece truffle box", size: [3.5, 3.5, 1.25] },
        { use: "9-piece truffle box", size: [5, 5, 1.25] },
        { use: "16-piece gift box", size: [7, 7, 1.25] },
      ],
    },
    sections: [
      {
        q: "Is chocolate packaging food-safe?",
        a: [
          "We make chocolate boxes in food-grade board. Bars are normally sealed in foil or film first, so the board doesn't touch the chocolate. For truffles that sit directly in the insert, tell us and we'll recommend a food-contact-safe tray or paper cups.",
        ],
      },
      {
        q: "Which finishes suit chocolate boxes?",
        a: [
          "Gold or copper foil, embossing and soft-touch are classics for premium chocolate. Uncoated textured paper suits craft makers. For seasonal ranges, many brands keep one box and change a printed sleeve for Christmas, Easter and Valentine's Day.",
        ],
      },
      {
        q: "How do I keep chocolate from melting in transit?",
        a: [
          "Packaging alone can't keep chocolate cool. In warm weather, ship quickly and use an insulated liner and cold packs inside the outer carton. The printed box goes inside that. Plan ahead for summer and for [holiday](/packaging/christmas-boxes) peaks.",
        ],
      },
    ],
    faqs: [
      { q: "Can you make a box with a window to show truffles?", a: "Yes. A clear window on the lid shows the selection without opening the box." },
      { q: "Do you make chocolate bar wrappers?", a: "We make printed sleeves and cartons that go over a foil-wrapped bar." },
      { q: "Can I order boxes for a single holiday?", a: "Yes, from 100 boxes per design. Order early, as holiday demand is high." },
      { q: "Do you make truffle boxes?", a: "Yes. See [truffle boxes](/packaging/truffle-boxes) for cavity inserts and sizes." },
    ],
    industries: ["food-and-bakery"],
    posts: ["packaging-finishes-explained", "how-to-order-custom-packaging-first-product-run"],
  },

  "lip-gloss-boxes": {
    title: "Custom Lip Gloss Boxes, Tall & Slim",
    description:
      "Custom lip gloss boxes cut to your tube size: tall tuck cartons, window boxes and 3 or 4-tube sets in holographic, gloss or foil. From 100 boxes.",
    answer: {
      q: "What is a lip gloss box?",
      a: "A lip gloss box is a tall, slim carton cut to fit a gloss tube and its wand, usually made from 16 to 18pt SBS card. It keeps the tube upright, protects the applicator and carries the shade name, ingredients and barcode. Multi-tube boxes with inserts are used for gloss sets.",
    },
    who: [
      "Lip gloss boxes are popular with indie beauty brands, because gloss is a common first product and the boxes are cheap to print per shade. Influencer and creator brands use them for launches and PR kits.",
      "Established makeup lines use them for limited editions and gift sets, where a holographic or foil finish helps a new shade stand out.",
    ],
    sizes: {
      cols: "L × W × H",
      note: "Tubes range widely in height. Measure with the cap on.",
      rows: [
        { use: "Mini or sample tube", size: [0.75, 0.75, 3.25] },
        { use: "Standard gloss tube", size: [1, 1, 4.5] },
        { use: "3-tube gift set", size: [3.5, 1.25, 4.75] },
        { use: "4-tube gift set", size: [4.5, 1.25, 4.75] },
      ],
    },
    sections: [
      {
        q: "Which finish is best for lip gloss packaging?",
        a: [
          "Holographic board and pearl finishes echo the shine of the product and are popular with younger brands. Gloss lamination makes colors pop. Matte or soft-touch suits nude, natural and clean-beauty ranges. A foil logo is a small extra that lifts any of them.",
        ],
      },
      {
        q: "Do lip gloss boxes need an insert?",
        a: [
          "Single cartons don't, if they are cut tightly to the tube. Sets do: a card insert with a slot for each tube stops them knocking together and keeps the arrangement neat when the lid comes off.",
        ],
      },
      {
        q: "What should go on a lip gloss box?",
        a: [
          "Front: logo and shade name. Back and sides: ingredients, net volume, batch code and barcode. A small color swatch on the end panel helps shoppers pick the right shade from a drawer. Our [artwork guide](/artwork-guide) shows where to keep type safe from folds.",
        ],
      },
    ],
    faqs: [
      { q: "Can every shade have its own box design?", a: "Yes. Each design has a 100-box minimum, or keep one design and add a shade sticker." },
      { q: "Can you add a window to show the color?", a: "Yes. A slim window on the front shows the gloss without opening the box." },
      { q: "Do you make boxes for lip oils too?", a: "Yes. Lip oil bottles are often wider, so send the size and we'll adjust the carton." },
      { q: "Can gloss sets be posted?", a: "Yes. Pack the set box inside a printed [mailer box](/packaging/mailer-boxes) for online orders." },
    ],
    industries: ["cosmetics", "subscription-boxes"],
    posts: ["packaging-finishes-explained", "cmyk-vs-pantone"],
  },

  "bath-bomb-boxes": {
    title: "Custom Bath Bomb Boxes & Gift Sets",
    description:
      "Custom bath bomb boxes: single cubes, window boxes and 3 to 6-bomb gift sets with round inserts, in bright full color or natural kraft. From 100 boxes.",
    answer: {
      q: "How do you package bath bombs?",
      a: "Wrap each bath bomb in shrink film or a sealed bag to keep moisture out, then place it in a snug cube box or a box with a round cut-out insert. The tight fit stops it chipping. For gift sets, a window box with an insert holds three to six bath bombs apart.",
    },
    who: [
      "Bath bomb boxes are ordered by handmade soap and bath brands, spa and wellness shops, and gift companies. Many start selling at markets and on Etsy, then need branded boxes once they move into shops.",
      "Bath bombs are a classic holiday and party gift, so sets and seasonal designs are a big part of most orders.",
    ],
    sizes: {
      cols: "L × W × H",
      note: "Most bath bombs are 2.5 to 3 inches across. Measure yours after wrapping.",
      rows: [
        { use: "Single 2.5 to 3 in bath bomb", size: [3, 3, 3] },
        { use: "Shower steamer pack of 3", size: [5, 2, 2] },
        { use: "4-bomb gift set", size: [6.25, 6.25, 3] },
        { use: "6-bomb gift set", size: [9.25, 6.25, 3] },
      ],
    },
    sections: [
      {
        q: "Kraft or printed card for bath bomb boxes?",
        a: [
          "Kraft suits natural, vegan and handmade brands and pairs well with a one-color logo. Bright full-color SBS card suits fun, colorful ranges and kids' bath products. Both work. Choose the one that matches how your products look.",
        ],
      },
      {
        q: "Will a bath bomb stain the box?",
        a: [
          "Oils and colorants can mark uncoated card. Wrapping the bath bomb before it goes in the box solves this. If you sell unwrapped bombs, choose a coated board with gloss or matte lamination.",
        ],
      },
      {
        q: "Which insert holds bath bombs best?",
        a: [
          "A flat card insert with round holes cradles each bomb. It's cheaper than foam and fully recyclable with the box. For a single bomb, a tight cube box with no insert is enough. See [cube boxes](/packaging/cube-boxes) for sizes.",
        ],
      },
    ],
    faqs: [
      { q: "Can bath bomb boxes have a window?", a: "Yes. A round or square window shows the color, which helps them sell in shops." },
      { q: "Do you make boxes for shower steamers and bath salts?", a: "Yes. Send us the product size and we'll suggest a style." },
      { q: "Can I add a hang tab for retail?", a: "Yes. A [hang tab](/packaging/hang-tab-boxes) lets single boxes hang on pegs." },
      { q: "Are bath bomb boxes plastic-free?", a: "The box can be. Choose no window film, and wrap the bomb in paper rather than shrink film." },
    ],
    industries: ["cosmetics", "retail"],
    posts: ["kraft-vs-white-boxes", "how-to-order-custom-packaging-first-product-run"],
  },

  "cosmetic-jars": {
    title: "Custom Cosmetic Jar Boxes with Collars",
    description:
      "Custom boxes for cosmetic jars: cream, balm and body butter cartons with collar inserts that hold glass jars centered. Soft-touch and foil, from 100 boxes.",
    answer: {
      q: "How do you box a cosmetic jar?",
      a: "A cosmetic jar is boxed in a square carton, usually 16 to 18pt SBS card, sized to the jar's widest point and height. A card collar or die-cut insert holds the jar in the center so it can't knock the walls, which is what protects heavy glass jars in shops and in the post.",
    },
    who: [
      "Jar boxes are ordered by skincare brands selling face creams, eye creams and masks, body care brands with butters and scrubs, and natural brands with balms and salves.",
      "Glass jars feel premium but are heavy for their size, so these brands usually care about two things: a box that feels as good as the jar, and an insert that keeps it safe.",
    ],
    sizes: {
      cols: "L × W × H",
      note: "Measure the jar at its widest point, usually the lid.",
      rows: [
        { use: "15 ml eye cream jar", size: [2, 2, 1.75] },
        { use: "30 ml face cream jar", size: [2.5, 2.5, 2] },
        { use: "50 ml face cream jar", size: [2.75, 2.75, 2.25] },
        { use: "200 ml body butter jar", size: [3.75, 3.75, 3] },
      ],
    },
    sections: [
      {
        q: "What insert works best for glass jars?",
        a: [
          "A card collar is the most popular. It wraps around the jar inside the box and holds it centered. A die-cut platform with a round hole lifts the jar for presentation. Foam is the most protective but costs more and isn't curbside recyclable.",
        ],
      },
      {
        q: "Which finishes suit skincare jar boxes?",
        a: [
          "Skincare often sells on calm, clean design. Soft-touch with a single foil logo, or uncoated board with a debossed mark, are both popular. Gloss suits brighter body care ranges. See [packaging finishes explained](/blog/packaging-finishes-explained) for how each feels.",
        ],
      },
      {
        q: "Can jar boxes be posted?",
        a: [
          "Card boxes with a collar travel fine inside a [mailer box](/packaging/mailer-boxes). If the jar box is the shipper, choose thin E-flute so the glass is cushioned.",
        ],
      },
    ],
    faqs: [
      { q: "Can you make boxes for plastic jars too?", a: "Yes. Plastic jars are lighter, so a simple tuck box without an insert is often enough." },
      { q: "Can I print inside the box?", a: "Yes. A pattern or short note inside the lid is a nice touch for skincare." },
      { q: "Do you make jar gift sets?", a: "Yes. A rigid box with a fitted insert can hold a cream with a serum or cleanser." },
      { q: "What is the difference between jar boxes and cream boxes?", a: "They overlap. Our [cream boxes](/packaging/cream-boxes) page covers creams in tubes and pumps too." },
    ],
    industries: ["cosmetics"],
    posts: ["packaging-finishes-explained", "how-to-measure-for-a-custom-box"],
  },

  "nail-polish-boxes": {
    title: "Custom Nail Polish Boxes & Sets",
    description:
      "Custom nail polish boxes for single bottles and 3 to 6-bottle sets with upright inserts, in gloss, foil or holographic finishes. From 100 boxes.",
    answer: {
      q: "What size is a nail polish box?",
      a: "Most single nail polish boxes are about 1.5 inches square and 3 to 3.5 inches tall, cut to fit a standard 10 to 15 ml bottle with its cap. Sets of three to six bottles use a wider box with a card insert that holds each bottle upright in its own slot.",
    },
    who: [
      "Nail polish boxes are ordered by indie lacquer brands, nail care and treatment brands, salons that sell their own range, and press-on nail brands bundling polish with kits.",
      "Polish is collected by shade, so these brands often run many small designs, one per color or collection, and change them every season.",
    ],
    sizes: {
      cols: "L × W × H",
      note: "Bottles vary in shape. Measure with the cap on and at the widest point.",
      rows: [
        { use: "Mini 5 ml bottle", size: [1, 1, 2.25] },
        { use: "Standard 10 to 15 ml bottle", size: [1.5, 1.5, 3.25] },
        { use: "3-bottle set", size: [4.5, 1.5, 3.25] },
        { use: "6-bottle set", size: [4.5, 3, 3.25] },
      ],
    },
    sections: [
      {
        q: "How do I show the shade on a nail polish box?",
        a: [
          "Print a color swatch and the shade name on the front, or add a small window so the real color shows. Holographic and glitter shades are hard to print accurately, so a window is often the better choice for those.",
        ],
      },
      {
        q: "Which finishes suit nail polish packaging?",
        a: [
          "Gloss lamination matches a glossy lacquer. Holographic foil suits chrome and glitter collections. Matte with spot UV works for minimal, salon-style brands.",
        ],
      },
      {
        q: "Do nail polish sets need an insert?",
        a: [
          "Yes. Glass bottles knock together without one. A card insert with a slot for each bottle keeps them upright and spaced. For kits with files and tools, we add slots for those too.",
        ],
      },
    ],
    faqs: [
      { q: "Can I print a different box for every shade?", a: "Yes. Each design has a 100-box minimum. For many shades, one box and a shade [label](/packaging/labels-and-stickers) can cost less." },
      { q: "Can nail polish boxes hang on retail pegs?", a: "Yes. Add a [hang tab](/packaging/hang-tab-boxes) to the top." },
      { q: "Do you make salon counter displays?", a: "Yes. A [display box](/packaging/display-boxes) holds a row of bottles at the till." },
      { q: "Can boxes be made for press-on nail kits?", a: "Yes. Send the size of each item and we'll design the insert." },
    ],
    industries: ["cosmetics", "retail"],
    posts: ["cmyk-vs-pantone", "packaging-finishes-explained"],
  },

  "poly-bags": {
    title: "Custom Poly Mailer Bags with Logo",
    description:
      "Custom printed poly mailer bags with a strong self-seal strip and optional returns strip. Light, cheap to post and made for clothing and soft goods.",
    answer: {
      q: "What is a poly mailer?",
      a: "A poly mailer is a lightweight, water-resistant plastic envelope with a self-seal adhesive strip, used to post clothing and soft goods. It weighs far less than a box, which lowers postage, and it can be printed in full color with your logo. A second strip lets customers reuse it for returns.",
    },
    who: [
      "Poly mailers are ordered by fashion and activewear brands, print-on-demand sellers, sock and underwear brands, and anyone posting soft items that don't need crush protection.",
      "Many brands use both. A printed [mailer box](/packaging/mailer-boxes) for first orders and gifts, and a branded poly mailer for repeat orders, where speed and postage cost matter more.",
    ],
    sizes: {
      cols: "W × H",
      note: "Sizes are flat, before sealing. Bulky items need a size up or a gusseted bag.",
      rows: [
        { use: "Socks, accessories or a scarf", size: [6, 9] },
        { use: "T-shirt or leggings", size: [10, 13] },
        { use: "Hoodie or jeans", size: [12, 15.5] },
        { use: "Jacket or two to three items", size: [14.5, 19] },
      ],
    },
    sections: [
      {
        q: "How thick should a poly mailer be?",
        a: [
          "Thickness is measured in mils (or microns). Thinner film around 2 mil suits light tees and accessories. Thicker film, 2.5 to 3 mil, resists tears and punctures better for heavier or sharp-edged items. If a bag might snag in transit, go thicker.",
        ],
      },
      {
        q: "Are poly mailers recyclable?",
        a: [
          "Most poly mailers are made from LDPE film, which can be recycled at store drop-off points in many areas but usually not in curbside bins. Rules vary by country and city, so a short 'how to recycle' line on the bag helps customers. Ask about recycled-content film in your quote.",
        ],
      },
      {
        q: "What extras can a poly mailer have?",
        a: [
          "A second adhesive strip for returns, a tear strip for easy opening, opaque film so contents can't be seen, and a printed inside. A clear pocket for a packing slip is also available.",
        ],
      },
    ],
    faqs: [
      { q: "Can poly mailers be printed on both sides?", a: "Yes, front and back, in full color or a single brand color." },
      { q: "Are poly mailers waterproof?", a: "They are water-resistant and keep rain off clothing in transit." },
      { q: "Can poly mailers be used for fragile items?", a: "No. Use a [mailer box](/packaging/mailer-boxes) or a padded mailer for anything that can break." },
      { q: "What color film can I choose?", a: "White, black and colored film are common. Print can go on any of them." },
    ],
    industries: ["apparel", "subscription-boxes"],
    posts: ["mailer-box-vs-shipping-box", "how-much-do-custom-boxes-cost"],
  },

  "mylar-bags": {
    title: "Custom Mylar Bags, Resealable & Printed",
    description:
      "Custom printed mylar bags and stand-up pouches with zip locks, tear notches and optional windows, for coffee, snacks, supplements and more. From 100 bags.",
    answer: {
      q: "What is a mylar bag?",
      a: "A mylar bag is a pouch made from layered film that includes a metallized or foil barrier, which blocks air, light and moisture. It is heat-sealed after filling, can have a zip lock to reopen and close, and is used to keep coffee, snacks, supplements, tea and dried foods fresh.",
    },
    who: [
      "Mylar bags are ordered by coffee roasters, snack and jerky brands, supplement and protein powder brands, tea companies, pet treat makers and bath salt brands. Anything dry that goes stale or absorbs moisture is a good fit.",
      "Small brands like them because a printed pouch can replace a box and a label in one step, and it stands on a shelf with the front facing out.",
    ],
    sizes: {
      cols: "W × H × gusset",
      note: "Fill weight depends on how dense your product is. Ground coffee fills a pouch differently from popcorn, so tell us what goes inside.",
      rows: [
        { use: "Sample or single serving (flat)", size: [3, 4, 0] },
        { use: "Small snack or tea pouch", size: [4, 6, 2] },
        { use: "About 8 oz or 250 g of coffee", size: [6, 9, 3.5] },
        { use: "About 1 lb or 500 g of coffee", size: [7.5, 11.5, 4] },
      ],
    },
    sections: [
      {
        q: "Are mylar bags food-safe?",
        a: [
          "Yes. The inside layer that touches the product is food-grade film. They are widely used for dry foods, snacks, coffee and supplements. For liquids, look at [spouted pouches](/packaging/spouted-pouches) instead.",
        ],
      },
      {
        q: "Matte, gloss or holographic mylar?",
        a: [
          "Matte looks modern, hides fingerprints and suits coffee and premium food. Gloss makes colors bright and suits snacks and sweets. Holographic film catches the light and suits bold, playful brands. Kraft-paper laminated pouches give a natural, paper look with the same barrier inside.",
        ],
      },
      {
        q: "Should a mylar bag have a window?",
        a: [
          "A window shows the product, which helps for snacks and treats. It also lets light in, so skip it for coffee, tea and anything light-sensitive. Our [coffee packaging](/packaging/coffee-packaging) page explains degassing valves for fresh-roasted beans.",
        ],
      },
    ],
    faqs: [
      { q: "Are mylar bags recyclable?", a: "Most are multi-layer laminates and are not accepted in curbside recycling. Ask about mono-material options in your quote if this matters to your brand." },
      { q: "Can I add a hang hole?", a: "Yes. A round or euro-style hang hole lets the pouch hang on retail pegs." },
      { q: "Do you fill or seal the bags?", a: "We supply the printed bags. You fill them and heat-seal the top with a simple impulse sealer." },
      { q: "Can I use labels instead of full print?", a: "Yes. Plain pouches with printed [labels](/packaging/labels-and-stickers) can be cheaper for many flavors in small amounts." },
    ],
    industries: ["food-and-bakery", "cbd-and-candles"],
    posts: ["how-to-order-custom-packaging-first-product-run", "how-much-do-custom-boxes-cost"],
  },

  "lip-balm-boxes": {
    title: "Custom Lip Balm Boxes for Sticks & Tins",
    description:
      "Custom lip balm boxes for sticks, pots and tins: small tuck cartons, sleeves and hang-tab boxes in full color or kraft. Order per flavor, from 100 boxes.",
    answer: {
      q: "Do lip balms need a box?",
      a: "Not always. A labeled stick or tin can sell on its own, but a small printed box gives room for ingredients and branding, protects the stick from snapping and helps it stand out at a counter. Boxes are most useful for retail, gift sets and premium balms.",
    },
    who: [
      "Lip balm boxes are ordered by natural and beeswax balm makers, skincare brands adding a lip product, hotels and event companies giving balms away, and promotional product companies.",
      "Because balms are cheap and sold by flavor, buyers usually want a low-cost box they can print in several designs, or a single box design with a flavor sticker.",
    ],
    sizes: {
      cols: "L × W × H",
      note: "A standard 0.15 oz stick is about 0.6 inches wide and 2.6 to 2.8 inches tall.",
      rows: [
        { use: "Single 0.15 oz stick", size: [0.75, 0.75, 3] },
        { use: "3-stick multipack", size: [2.25, 0.75, 3] },
        { use: "Round tin, about 2 in", size: [2.25, 2.25, 0.75] },
        { use: "Small balm pot", size: [1.75, 1.75, 1.25] },
      ],
    },
    sections: [
      {
        q: "Box, sleeve or hang tab?",
        a: [
          "A tuck box gives the most room for print and protects the stick. A sleeve is cheaper and shows part of the product. A [hang-tab box](/packaging/hang-tab-boxes) lets balms hang on pegs in pharmacies and gift shops. For tins, a printed [label](/packaging/labels-and-stickers) on the lid is sometimes all you need.",
        ],
      },
      {
        q: "Which material suits lip balm packaging?",
        a: [
          "Kraft card with a one-color logo suits natural, organic and beeswax balms. White SBS card prints bright color for flavored and kids' balms. Both are easy to recycle with paper.",
        ],
      },
      {
        q: "How do I fit ingredients on such a small box?",
        a: [
          "Put the logo and flavor on the front, ingredients on the back and the barcode on a side. Keep type at a readable size, and use a slightly taller box if you need more space. Our [artwork guide](/artwork-guide) shows the safe areas.",
        ],
      },
    ],
    faqs: [
      { q: "Can I order boxes for several flavors?", a: "Yes. Each design has a 100-box minimum." },
      { q: "Do you make lip balm display boxes?", a: "Yes. A counter [display box](/packaging/display-boxes) can hold a row of balms by the till." },
      { q: "Can lip balm boxes be plastic-free?", a: "Yes. Card or kraft without window film is fully paper-based." },
      { q: "Do you make boxes for lip scrubs?", a: "Yes. Scrubs usually come in small jars, so see [cosmetic jar boxes](/packaging/cosmetic-jars)." },
    ],
    industries: ["cosmetics", "retail"],
    posts: ["kraft-vs-white-boxes", "how-to-order-custom-packaging-first-product-run"],
  },

  "trays-and-sleeves": {
    title: "Custom Tray and Sleeve Boxes",
    description:
      "Custom tray and sleeve boxes in folding card or rigid board: a sturdy tray with a printed sleeve that slides on. Easy to rebrand, from 100 boxes.",
    answer: {
      q: "What is a tray and sleeve box?",
      a: "A tray and sleeve box has two parts: a tray that holds the product and a printed sleeve that slides over it. The customer pushes the tray out to open it, like a matchbox. It feels premium, and you can change the sleeve for new products or seasons while keeping the same tray.",
    },
    who: [
      "Tray and sleeve boxes are ordered by chocolate and confectionery brands, stationery and pen makers, soap and skincare brands, tech accessory brands and companies making gift sets.",
      "They suit brands that release limited editions often. A stock of plain trays and a short run of new sleeves is cheaper than a whole new box every season.",
    ],
    sizes: {
      cols: "L × W × H",
      note: "The sleeve is sized to the tray. We set the fit so it slides easily but doesn't fall off.",
      rows: [
        { use: "Soap bar or chocolate bar", size: [4, 3, 1.25] },
        { use: "Small gift or jewelry", size: [4, 4, 1.5] },
        { use: "Pen or watch strap set", size: [7, 3, 1] },
        { use: "Gift set or tech accessory", size: [9, 6, 2] },
      ],
    },
    sections: [
      {
        q: "Folding card or rigid tray and sleeve?",
        a: [
          "Folding card trays ship flat and keep the cost per unit down. They suit soap, chocolate and stationery. Rigid trays arrive made up and feel much more solid. They suit premium gifts, tech and jewelry. You can also mix them: a rigid tray with a card sleeve.",
        ],
      },
      {
        q: "Can the tray have an insert?",
        a: [
          "Yes. A die-cut card insert can hold several items in place, such as a set of pens or three soaps. A ribbon pull under the product makes it easy to lift out.",
        ],
      },
      {
        q: "What finishes suit the sleeve?",
        a: [
          "The sleeve is where the branding goes. Foil, spot UV and embossing look great on it. A die-cut window in the sleeve shows the product or a printed tray underneath. The tray itself is often a single solid color.",
        ],
      },
    ],
    faqs: [
      { q: "Can I order sleeves separately?", a: "Yes. Many brands order new sleeves for each season or launch and reuse the same tray design." },
      { q: "Do tray and sleeve boxes need glue?", a: "Folding trays lock with tabs. Rigid trays arrive made up and glued, ready to fill." },
      { q: "Are tray and sleeve boxes good for posting?", a: "They travel well inside a [mailer box](/packaging/mailer-boxes) or outer carton." },
      { q: "Can the sleeve be kraft?", a: "Yes. A kraft sleeve over a colored tray is a simple, striking look." },
    ],
    industries: ["retail", "food-and-bakery"],
    posts: ["packaging-finishes-explained", "what-is-a-dieline"],
  },

  "ribbon-boxes": {
    title: "Custom Ribbon Gift Boxes",
    description:
      "Custom rigid gift boxes with ribbon ties or built-in ribbon closures, in magnetic or two-piece styles with foil and soft-touch. From 100 boxes.",
    answer: {
      q: "What is a ribbon box?",
      a: "A ribbon box is a rigid gift box, usually magnetic or two-piece, finished with a ribbon. The ribbon can be built in as a closure that ties the lid shut, or wrapped around the box as a bow. It makes the box ready to give with no extra wrapping.",
    },
    who: [
      "Ribbon boxes are ordered for wedding and bridesmaid gifts, corporate and client gifts, luxury retail purchases, jewelry and watches, and premium candle and fragrance sets.",
      "They are also popular with gift-box businesses that build curated hampers, because the ribbon gives every box a finished look without wrapping each one by hand.",
    ],
    sizes: {
      cols: "L × W × H",
      note: "Rigid boxes arrive made up, so check you have storage space for your quantity.",
      rows: [
        { use: "Jewelry or small keepsake", size: [4, 4, 2] },
        { use: "Candle or perfume gift", size: [6, 6, 4] },
        { use: "Bridesmaid proposal box", size: [10, 8, 3] },
        { use: "Corporate gift set", size: [12, 9, 4] },
      ],
    },
    sections: [
      {
        q: "Built-in ribbon or tied ribbon?",
        a: [
          "A built-in ribbon is fixed under the lid or through slots. It ties the box shut quickly and looks the same every time. A tied ribbon is wrapped around the closed box by hand, which takes longer but suits bespoke gifts. Magnetic boxes often use a ribbon pull to lift the lid instead.",
        ],
      },
      {
        q: "Which ribbon should I choose?",
        a: [
          "Satin looks classic and soft. Grosgrain is ribbed, sturdier and holds a bow well. Printed ribbon can carry your logo. Match it to your brand palette, or choose a contrast color so the box stands out on a table.",
        ],
      },
      {
        q: "What insert goes in a ribbon box?",
        a: [
          "Gift boxes usually hold a die-cut card or foam insert for the products, or crinkle paper for a hamper look. Tell us what goes in and we'll suggest an insert. See [gift boxes](/packaging/gift-boxes) and [magnetic closure boxes](/packaging/magnetic-closure-boxes) for related styles.",
        ],
      },
    ],
    faqs: [
      { q: "Can I choose any ribbon color?", a: "Yes. Send a Pantone reference or describe the color and we'll match it as closely as we can." },
      { q: "Can the ribbon carry my logo?", a: "Yes. Ask for a printed ribbon in your quote." },
      { q: "Are ribbon boxes suitable for wedding favors?", a: "Yes, in small sizes. See [favor boxes](/packaging/favor-boxes) for more ideas." },
      { q: "Do ribbon boxes ship flat?", a: "Most rigid ribbon boxes arrive made up. Ask about collapsible rigid boxes if storage is tight." },
    ],
    industries: ["retail", "cosmetics"],
    posts: ["packaging-finishes-explained", "how-much-do-custom-boxes-cost"],
  },
};

export const getDeepContent = (slug: string) => deepContent[slug] ?? null;
