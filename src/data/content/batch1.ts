import type { RichContent } from "./types";

/** Batch 1: the busiest categories. Links point to related Snug pages to build topic clusters. */
export const batch1: Record<string, RichContent> = {
  "mailer-boxes": {
    lede:
      "A mailer box is the first piece of your brand most online customers hold. Ours are made from tough corrugated board, fold together without tape and print on the outside and inside, so the unboxing feels planned from the first fold. Send your size and we make them to fit, from 100 boxes.",
    styles: ["shipping-boxes", "corrugated-boxes", "kraft-boxes", "product-boxes", "gift-boxes", "apparel-boxes", "trays-and-sleeves", "labels-and-stickers"],
    features: [
      { title: "Strong enough for the post", text: "E-flute is thin and crisp for lighter products; B-flute adds cushioning for heavier or fragile ones." },
      { title: "Printed inside too", text: "A pattern or a thank-you message inside the lid turns a delivery into a moment people film and share." },
      { title: "No tape needed", text: "Roll-end tuck front mailers lock closed with dust flaps, so they look tidy and are quick to pack." },
      { title: "Sized to your product", text: "A snug fit means less void fill, lower postage and fewer items moving around in transit." },
    ],
    guide: [
      {
        h: "Mailer box or shipping box?",
        p: [
          "A mailer box is printed, folds into a neat tray with a hinged lid and is meant to be seen. A plain [shipping box](/packaging/shipping-boxes) is about protection first. If you want both, many brands send a printed mailer inside a plain outer carton. Our [mailer vs shipping box guide](/blog/mailer-box-vs-shipping-box) goes through the pros and cons.",
        ],
      },
      {
        h: "Choosing the board",
        p: [
          "Most mailers are E-flute corrugated with a white or [kraft](/packaging/kraft-boxes) outer layer. White takes bright color beautifully; kraft gives a natural look and hides scuffs. For heavy items like candles or glass, ask for B-flute or a double wall, or read more about [corrugated boxes](/packaging/corrugated-boxes).",
        ],
      },
      {
        h: "Make the inside count",
        p: [
          "Inside printing costs a little more and is often the part customers remember. Add a card [insert or tray](/packaging/trays-and-sleeves) to hold products in place, a branded sticker to seal the box from our [labels and stickers](/packaging/labels-and-stickers) range, and a thank-you card.",
        ],
      },
      {
        h: "Measuring for a mailer",
        p: [
          "Measure the inside space you need, not the outside of the box. Add a few millimeters for tissue or an insert. Our step-by-step guide on [how to measure for a custom box](/blog/how-to-measure-for-a-custom-box) shows exactly where to put the tape measure.",
        ],
      },
    ],
    faqs: [
      { q: "Are your mailer boxes strong enough to post without an outer box?", a: "Yes, for most products. E-flute mailers travel well on their own; for heavy or fragile items we suggest B-flute or an outer shipper." },
      { q: "Can you print inside the mailer box?", a: "Yes. We can print a full design, a pattern or a short message on the inside of the lid and base." },
      { q: "Do mailer boxes ship flat?", a: "Yes. They arrive flat-packed to save storage space and fold together in seconds without tape." },
      { q: "Are mailer boxes recyclable?", a: "Yes. Corrugated board is widely recycled at the kerbside in the USA, UK, Australia and Europe." },
    ],
  },

  "rigid-boxes": {
    lede:
      "Rigid boxes are the heavyweights of packaging: thick greyboard wrapped in printed or textured paper, with lids that lift off slowly or snap shut on a magnet. They are made for launches, gift sets and anything you want to feel special in the hand. We make them to your size from 100 boxes.",
    styles: ["gift-boxes", "jewelry-boxes", "cosmetic-boxes", "trays-and-sleeves", "round-boxes", "chocolate-boxes", "christmas-boxes", "apparel-boxes"],
    features: [
      { title: "A box people keep", text: "Rigid boxes rarely go in the bin. They get reused for keepsakes, which keeps your brand in the home." },
      { title: "Lids that feel good", text: "Two-piece, magnetic flap, drawer or book-style: choose the opening that suits the product." },
      { title: "Inserts for every item", text: "Foam, card or velvet-lined inserts hold each product in its own shaped cut-out." },
      { title: "Luxury finishes", text: "Foil, embossing, soft-touch and speciality papers all work beautifully on rigid board." },
    ],
    guide: [
      {
        h: "Which rigid box style?",
        p: [
          "A two-piece lid and base is the classic choice for apparel and [gift boxes](/packaging/gift-boxes). Magnetic flap boxes suit [cosmetics](/packaging/cosmetic-boxes) and tech, because the lid closes with a satisfying click. Drawer boxes slide open and are popular for [jewelry](/packaging/jewelry-boxes) and small sets.",
        ],
      },
      {
        h: "Wrap paper and finishes",
        p: [
          "The outside of a rigid box is a wrap of printed paper, so you can choose matte, gloss, soft-touch or a textured art paper. Gold or silver foil and embossing work especially well here. Our [finishes guide](/blog/packaging-finishes-explained) and the [materials and finishes](/materials-and-finishes) page show what each looks like.",
        ],
      },
      {
        h: "Do rigid boxes ship well?",
        p: [
          "Rigid boxes are strong but are not made to go through the post on their own. Pack them inside a plain [shipping box](/packaging/shipping-boxes) or a printed [mailer](/packaging/mailer-boxes). They are delivered to you fully made up, so plan a little more storage space than for flat-packed boxes.",
        ],
      },
    ],
    faqs: [
      { q: "What is the minimum order for rigid boxes?", a: "100 boxes per design, which is low for rigid packaging and ideal for launches and limited editions." },
      { q: "Do rigid boxes come flat?", a: "Most arrive made up, because the board is too thick to fold. Some magnetic styles can be made collapsible to save space." },
      { q: "Can I have a ribbon or magnetic closure?", a: "Yes. Ribbon pulls, magnetic flaps and ribbon ties are all available." },
      { q: "Can rigid boxes be recycled?", a: "Yes, the board and paper wrap recycle with household paper once any foam insert is removed. Card inserts recycle too." },
    ],
  },

  "kraft-boxes": {
    lede:
      "Kraft boxes have an honest, natural look that customers connect with eco-minded brands. The brown board shows through the print, so simple one or two-color designs look intentional and stylish. We make kraft boxes in tuck, mailer, two-piece and window styles, sized to your product, from 100 units.",
    styles: ["mailer-boxes", "tuck-boxes", "window-boxes", "pillow-boxes", "gable-boxes", "food-boxes", "soap-boxes", "hang-tags"],
    features: [
      { title: "Natural look", text: "The brown board gives an earthy, handmade feel that suits organic, vegan and craft brands." },
      { title: "Easy to recycle", text: "Kraft board goes in the paper recycling. Choose no lamination to keep it fully plastic-free." },
      { title: "Low-cost print", text: "One or two colors on kraft look great and keep the price per box down." },
      { title: "White kraft too", text: "Want brighter colors? White kraft has the same feel with a lighter base for full color print." },
    ],
    guide: [
      {
        h: "How print looks on kraft",
        p: [
          "Ink on brown board looks a little darker and more muted than on white, because the brown shows through. Dark colors and black work best. If you need bright brand colors, ask for a white ink underlay or white kraft. Read our [CMYK vs Pantone guide](/blog/cmyk-vs-pantone) for color tips.",
        ],
      },
      {
        h: "Popular kraft styles",
        p: [
          "Small brands love kraft [tuck boxes](/packaging/tuck-boxes) for soaps and cosmetics, kraft [mailer boxes](/packaging/mailer-boxes) for subscription orders, and [gable boxes](/packaging/gable-boxes) for food and gifts. A [window](/packaging/window-boxes) lets the product show through.",
        ],
      },
      {
        h: "Is kraft packaging sustainable?",
        p: [
          "Kraft board is made from wood pulp, often with recycled content, and recycles easily. Skip plastic lamination and windows to keep it fully recyclable. See our [sustainability](/sustainability) page for what we can and can't claim.",
        ],
      },
    ],
    faqs: [
      { q: "Can you print full color on kraft?", a: "Yes, but colors look darker on brown board. For bright full color we suggest white kraft or a white underlay." },
      { q: "Are kraft boxes food-safe?", a: "Yes, with food-safe board and inks. Tell us the product so we can choose the right grade." },
      { q: "Are kraft boxes strong?", a: "Kraft paperboard suits light products; for heavier items we make kraft boxes in corrugated board." },
      { q: "What is the minimum order?", a: "100 boxes per design." },
    ],
  },

  "mylar-bags": {
    lede:
      "Mylar bags keep food, coffee, supplements and snacks fresh by blocking air, light and moisture. Ours are printed in full color, close with a zip lock and can stand up on a shelf. Choose a shiny, matte, kraft or holographic look, add a window or a hang hole, and order from 100 bags.",
    styles: ["spouted-pouches", "coffee-packaging", "tea-packaging", "poly-bags", "labels-and-stickers", "paper-bags", "food-boxes", "cbd-boxes"],
    features: [
      { title: "Keeps products fresh", text: "Layered film blocks air, light and moisture, so contents last longer on the shelf." },
      { title: "Resealable", text: "Press-to-close zips and tear notches make the bag easy to open and close again." },
      { title: "Stands up on a shelf", text: "A gusset in the base lets the pouch stand upright like a box, front facing out." },
      { title: "Smell-proof options", text: "Heat-sealed, smell-resistant pouches for coffee, herbs and strong-smelling products." },
    ],
    guide: [
      {
        h: "Stand-up pouch or flat bag?",
        p: [
          "Stand-up pouches hold more and display well on shelves. Flat bags are cheaper and perfect for samples, single servings and products sold on hooks. Need a pourable liquid? Look at [spouted pouches](/packaging/spouted-pouches) instead.",
        ],
      },
      {
        h: "Finishes and windows",
        p: [
          "A matte finish looks modern and hides fingerprints; gloss makes colors pop; holographic film catches the light. A clear window shows the product, but lets in light, so skip it for coffee and light-sensitive goods. Our [coffee packaging](/packaging/coffee-packaging) page has more on valves and freshness.",
        ],
      },
      {
        h: "Labels or fully printed bags?",
        p: [
          "If you have many flavors in small amounts, plain bags with printed [labels and stickers](/packaging/labels-and-stickers) can be cheaper. Fully printed bags look more polished and work out better as your volumes grow.",
        ],
      },
    ],
    faqs: [
      { q: "Are mylar bags food-safe?", a: "Yes. The inner layer is food-grade, and the bags are suitable for dry foods, snacks, coffee and supplements." },
      { q: "Can I add a window or hang hole?", a: "Yes, clear windows, euro hang holes and tear notches are all available." },
      { q: "Are mylar bags smell-proof?", a: "When heat-sealed, they are highly smell-resistant, which is why they are popular for coffee and herbs." },
      { q: "What sizes can I order?", a: "Any size. Tell us the weight or volume you fill and we will suggest the right pouch size." },
    ],
  },

  "display-boxes": {
    lede:
      "A display box is a small shop on a counter. It ships flat inside a shipper, folds out in seconds and holds your products upright, facing the customer, right where they pay. Add a printed header that tells your story, and order from 100 units.",
    styles: ["retail-boxes", "cosmetic-boxes", "candle-boxes", "cbd-boxes", "chocolate-boxes", "health-boxes", "labels-and-stickers", "tuck-boxes"],
    features: [
      { title: "Sells at the till", text: "Impulse buys happen at the counter. A display box puts your product exactly there." },
      { title: "Ships and displays", text: "Many designs double as the shipping case: open the lid, tear the perforation, and it's ready." },
      { title: "Header card", text: "A tall printed header gives you room for a logo, a message and a price." },
      { title: "Built to hold weight", text: "SBS for light items; E-flute corrugated for bottles, jars and heavier products." },
    ],
    guide: [
      {
        h: "Measuring for a display box",
        p: [
          "Measure one product, then decide how many go in a row and how many rows. We work out the tray size from there and angle the front so every item stays visible. Not sure? Send us the product and we will suggest a layout with your free [3D mockup](/free-mockup).",
        ],
      },
      {
        h: "Retailer-friendly design",
        p: [
          "Shops prefer displays that are small, stable and easy to restock. Keep the footprint tight, put the brand on the header and the front lip, and print a reorder code on the side. Pair your display with matching [retail boxes](/packaging/retail-boxes) or [tuck boxes](/packaging/tuck-boxes) for the individual products.",
        ],
      },
    ],
    faqs: [
      { q: "Do display boxes come flat?", a: "Yes. They ship flat and fold into shape without glue or tape." },
      { q: "How many products can a display box hold?", a: "As many as you need. Tell us the product size and how many you want in each display." },
      { q: "Can the display also be the shipping box?", a: "Yes. Tear-away lids and perforated fronts let one box ship and then display the products." },
      { q: "Which industries use display boxes?", a: "Cosmetics, confectionery, CBD, candles, supplements and accessories are the most common." },
    ],
  },

  "food-boxes": {
    lede:
      "Food packaging has to do three jobs at once: keep food safe, stop grease from soaking through and make your brand look delicious. We make food boxes from food-grade board with food-safe inks for takeaways, bakeries, snack brands and meal kits, sized to your menu, from 100 units.",
    styles: ["bakery-boxes", "pizza-boxes", "chocolate-boxes", "cereal-boxes", "gable-boxes", "window-boxes", "coffee-packaging", "mylar-bags"],
    features: [
      { title: "Food-safe materials", text: "Food-grade SBS, kraft and corrugated board with inks suitable for food contact." },
      { title: "Grease-resistant", text: "Coatings stop oil and sauce from soaking through, so the box stays clean and strong." },
      { title: "Made for carrying", text: "Handles, locking lids and clamshells keep food secure from the counter to the table." },
      { title: "Your menu, your size", text: "Fries, burgers, sandwiches, noodles, salads and snacks: every box cut to fit." },
    ],
    guide: [
      {
        h: "Picking a food box style",
        p: [
          "Clamshells and trays suit burgers and hot food. [Gable boxes](/packaging/gable-boxes) with handles are great for meals and treats to carry. [Window boxes](/packaging/window-boxes) show off cakes and pastries. For shelf-stable snacks, look at [cereal-style cartons](/packaging/cereal-boxes) or resealable [mylar bags](/packaging/mylar-bags).",
        ],
      },
      {
        h: "Food safety basics",
        p: [
          "Tell us what the food is, whether it is hot, cold, oily or wet, and whether it touches the board directly. We will recommend board, coating and inks to suit. For direct contact with greasy food, we use a grease-resistant liner or coating.",
        ],
      },
      {
        h: "Branding that travels",
        p: [
          "Takeaway boxes leave your shop and get seen on streets, desks and social feeds. A bold logo and a QR code to your menu turn every order into an advert. Bakeries can find ideas on the [bakery boxes](/packaging/bakery-boxes) page and in our [food and bakery](/industries/food-and-bakery) hub.",
        ],
      },
    ],
    faqs: [
      { q: "Are your food boxes food-safe?", a: "Yes. We use food-grade board and inks, with grease-resistant coatings for oily foods." },
      { q: "Can food boxes hold hot food?", a: "Yes. Tell us the temperature and we will choose a suitable board and coating." },
      { q: "Do you make takeaway boxes with handles?", a: "Yes, gable boxes and carry-out boxes with built-in handles are popular for meals and treats." },
      { q: "Can I order small runs for a new menu?", a: "Yes, from 100 boxes per design." },
    ],
  },

  "labels-and-stickers": {
    lede:
      "Labels and stickers are the quickest way to brand plain packaging, seal a box or add product details. We print them on paper, vinyl, clear, kraft and holographic stock, in any shape, on sheets or rolls. They are perfect for jars, bottles, bags and boxes, and a smart way to brand on a small budget.",
    styles: ["hang-tags", "mylar-bags", "mailer-boxes", "candle-boxes", "cosmetic-jars", "bottle-boxes", "paper-bags", "kraft-boxes"],
    features: [
      { title: "Any shape", text: "Circles, squares, ovals or a die-cut shape that follows your logo." },
      { title: "Rolls or sheets", text: "Rolls for fast hand or machine application; sheets for small batches and giveaways." },
      { title: "Tough finishes", text: "Gloss or matte lamination protects against water, oil and scuffs." },
      { title: "Brand on a budget", text: "Label plain jars, bags and boxes instead of printing every pack." },
    ],
    guide: [
      {
        h: "Choosing a label material",
        p: [
          "Paper labels are the most affordable and great for dry products. White or clear vinyl stands up to water and oil, so it suits [cosmetic jars](/packaging/cosmetic-jars), bottles and bath products. Kraft labels pair well with [kraft boxes](/packaging/kraft-boxes), and holographic labels add a premium flash.",
        ],
      },
      {
        h: "Labels vs printed packaging",
        p: [
          "Labels let you use one plain box or [mylar bag](/packaging/mylar-bags) for many flavors or scents, which keeps stock simple. Once one product sells in volume, fully printed packaging usually looks better and works out cheaper per unit.",
        ],
      },
      {
        h: "Artwork tips",
        p: [
          "Keep important text at least 2 mm inside the edge, use high-resolution artwork and check small type is readable. Our [artwork guide](/artwork-guide) covers bleed, safe areas and file types.",
        ],
      },
    ],
    faqs: [
      { q: "Are your labels waterproof?", a: "Vinyl labels with lamination are water and oil-resistant, ideal for bathrooms, kitchens and fridges." },
      { q: "Can I get labels on a roll?", a: "Yes. Rolls are best for applying many labels quickly by hand or with a machine." },
      { q: "Can you cut labels to a custom shape?", a: "Yes, any shape. We cut to a die line that follows your design." },
      { q: "What is the minimum order?", a: "100 labels per design." },
    ],
  },

  "candle-boxes": {
    lede:
      "A candle box needs to protect glass, keep the scent in and look lovely on a shelf or as a gift. We make candle boxes with fitted inserts so jars don't move, in tuck, two-piece, window and rigid styles, printed with soft-touch, foil or embossed details, from 100 units.",
    styles: ["rigid-boxes", "gift-boxes", "window-boxes", "kraft-boxes", "display-boxes", "labels-and-stickers", "mailer-boxes", "christmas-boxes"],
    features: [
      { title: "Inserts that protect glass", text: "A card insert holds the jar in the middle of the box, away from the walls." },
      { title: "Shelf appeal", text: "Soft-touch, foil and embossing make a candle box feel as luxurious as the scent." },
      { title: "Gift-ready", text: "Rigid boxes, ribbons and inside printing turn a candle into a ready-made present." },
      { title: "Taper and pillar sizes", text: "Long boxes for taper candles, tall boxes for pillars, tins and multi-wick jars." },
    ],
    guide: [
      {
        h: "Protecting candles in transit",
        p: [
          "Glass jars need an insert and a strong outer. For online orders, pack your printed candle box inside a [mailer box](/packaging/mailer-boxes) or use corrugated board for the candle box itself. Measure the jar with the lid on and add space for the insert.",
        ],
      },
      {
        h: "Designing for the shelf",
        p: [
          "Candles are often bought as gifts, so the box matters as much as the scent. Print the scent notes and burn time on the side, add a [window](/packaging/window-boxes) to show the vessel, or choose a [rigid box](/packaging/rigid-boxes) for premium lines.",
        ],
      },
      {
        h: "Seasonal and gift sets",
        p: [
          "Limited editions for the holidays sell well. Our low minimum makes it easy to print a short run of [Christmas boxes](/packaging/christmas-boxes) or a set box for two or three candles. See more ideas in the [CBD and candles](/industries/cbd-and-candles) hub.",
        ],
      },
    ],
    faqs: [
      { q: "Do candle boxes come with inserts?", a: "Yes, we add a card insert sized to your jar, tin or pillar so it doesn't move." },
      { q: "Can you make boxes for taper candles?", a: "Yes, long narrow boxes and sleeves for single tapers or sets." },
      { q: "Will the box hold the scent in?", a: "A well-fitted tuck or two-piece box helps; for strong scents, we can add a sealed sleeve or sticker seal." },
      { q: "Can I order a small run for a new scent?", a: "Yes, from 100 boxes per design." },
    ],
  },

  "shipping-boxes": {
    lede:
      "Shipping boxes do the hard work: protecting orders through sorting centers, vans and doorsteps. We make them in sturdy corrugated board, printed with your logo so even the outer box says who it's from. Choose a mailer style, a regular slotted carton or a self-locking box, sized to your products, from 100 units.",
    styles: ["mailer-boxes", "corrugated-boxes", "cardboard-boxes", "kraft-boxes", "poly-bags", "labels-and-stickers", "electronics-boxes", "hardware-boxes"],
    features: [
      { title: "Protection first", text: "Single or double-wall corrugated board absorbs knocks and stacks well." },
      { title: "Branded outside", text: "Even a one-color logo makes your parcel stand out on the doorstep." },
      { title: "Right-sized", text: "Boxes cut to your products save on void fill and on dimensional-weight postage." },
      { title: "Quick to pack", text: "Self-locking and tuck styles fold together fast, with less tape." },
    ],
    guide: [
      {
        h: "How to size a shipping box",
        p: [
          "Measure your product, or the inner box it ships in, and allow a little space for padding on each side. Too big means wasted postage; too small risks damage. Our [measuring guide](/blog/how-to-measure-for-a-custom-box) explains inside versus outside dimensions.",
        ],
      },
      {
        h: "Which board strength?",
        p: [
          "E-flute is fine for light items like clothing. B-flute and C-flute cushion heavier products. Double-wall board is best for heavy or fragile goods. Find out more on the [corrugated boxes](/packaging/corrugated-boxes) page.",
        ],
      },
      {
        h: "Branding a shipper",
        p: [
          "If the box is mostly about protection, a simple logo in one color on [kraft](/packaging/kraft-boxes) keeps costs down. If customers open it directly, consider a fully printed [mailer box](/packaging/mailer-boxes) instead. For soft goods, branded [poly mailers](/packaging/poly-bags) are lighter still.",
        ],
      },
    ],
    faqs: [
      { q: "What is the difference between a mailer and a shipping box?", a: "A mailer is a printed, folding presentation box; a shipping box is focused on protection. Many brands use both." },
      { q: "Can shipping boxes be printed?", a: "Yes, from a one-color logo to full color inside and out." },
      { q: "Can you make double-wall boxes?", a: "Yes, for heavy or fragile products." },
      { q: "What is the minimum order?", a: "100 boxes per design." },
    ],
  },

  "gift-boxes": {
    lede:
      "A good gift box makes the present feel chosen with care before it is even opened. We make gift boxes with lift-off lids, magnetic flaps, ribbons and windows, in rigid board or folding card, printed to match your brand or the season. Perfect for retail, corporate gifts and hampers, from 100 boxes.",
    styles: ["rigid-boxes", "favor-boxes", "christmas-boxes", "holiday-boxes", "chocolate-boxes", "jewelry-boxes", "round-boxes", "wrapping-paper"],
    features: [
      { title: "A real sense of occasion", text: "Lift-off lids, magnetic closures and ribbon pulls slow the reveal down." },
      { title: "Corporate gifting", text: "Branded gift boxes for clients and staff, with inserts for each item." },
      { title: "Seasonal designs", text: "Short runs make it easy to refresh the design for Christmas, Eid, Diwali or Valentine's." },
      { title: "Finishes that sparkle", text: "Foil, embossing and soft-touch make the box feel as special as what's inside." },
    ],
    guide: [
      {
        h: "Rigid or folding gift box?",
        p: [
          "[Rigid boxes](/packaging/rigid-boxes) feel the most luxurious and are reused for years. Folding card gift boxes ship flat, cost less and still look great with foil or a ribbon. Small [favor boxes](/packaging/favor-boxes) suit weddings and events.",
        ],
      },
      {
        h: "Plan for the season",
        p: [
          "Holiday orders peak from October. Order your [Christmas boxes](/packaging/christmas-boxes) or other [holiday boxes](/packaging/holiday-boxes) six to eight weeks ahead so artwork, proof, production and delivery all fit before the rush.",
        ],
      },
      {
        h: "Finishing touches",
        p: [
          "Line the box with printed tissue, add a thank-you card and wrap it in branded [wrapping paper](/packaging/wrapping-paper). For food gifts, see our [chocolate boxes](/packaging/chocolate-boxes) with inserts for each piece.",
        ],
      },
    ],
    faqs: [
      { q: "Can gift boxes have a ribbon?", a: "Yes, ribbon ties, ribbon pulls and ribbon closures are all available in many colors." },
      { q: "Do you make corporate gift boxes?", a: "Yes, with your logo and inserts for each item in the set." },
      { q: "Do gift boxes ship flat?", a: "Folding gift boxes ship flat; rigid gift boxes usually arrive made up." },
      { q: "What is the minimum order?", a: "100 boxes per design." },
    ],
  },
};
