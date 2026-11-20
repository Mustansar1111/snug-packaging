import type { RichContent } from "./types";

/** Batch 3: industry pages. Product pages that sit under a category are added to its styles list automatically. */
const f = (title: string, text: string) => ({ title, text });
const q = (q: string, a: string) => ({ q, a });

export const batch3: Record<string, RichContent> = {
  "apparel-boxes": {
    lede: "For clothing brands, the box is part of the outfit. We make apparel boxes for tees, swimwear, socks, hoodies and accessories, as postable mailers, two-piece gift boxes and slim shirt boxes, printed inside and out, from 100 boxes.",
    styles: ["mailer-boxes", "poly-bags", "hang-tags", "wrapping-paper", "two-piece-boxes", "labels-and-stickers"],
    features: [f("Postable mailers", "Strong enough to ship on their own."), f("Gift-worthy", "Two-piece and magnetic boxes."), f("Inside print", "A message when the lid opens."), f("Brand kit", "Tags, tissue and stickers to match.")],
    guide: [
      { h: "Box or poly mailer?", p: ["A [poly mailer](/packaging/poly-bags) is cheapest to post. A printed [mailer box](/packaging/mailer-boxes) makes the unboxing memorable and is better for premium pieces. Many brands use boxes for first orders and gifts, and poly for repeat orders."] },
      { h: "The finishing touches", p: ["Wrap clothes in [branded tissue](/packaging/wrapping-paper), add a [hang tag](/packaging/hang-tags) and seal with a sticker. Our [apparel industry page](/industries/apparel) has more ideas."] },
    ],
    faqs: [q("Can apparel boxes be posted?", "Yes, mailer styles can."), q("Do you print inside?", "Yes."), q("Can I get matching tissue and tags?", "Yes.")],
  },
  "bakery-boxes": {
    lede: "Good bakes deserve boxes that keep them looking perfect all the way home. We make food-grade bakery boxes for cakes, cupcakes, cookies, donuts and pastries, with windows, inserts and handles, printed with your bakery's brand, from 100 boxes.",
    styles: ["gable-boxes", "window-boxes", "food-boxes", "kraft-boxes", "paper-bags", "labels-and-stickers"],
    features: [f("Food-safe", "Food-grade board and inks."), f("Grease-resistant", "Coatings that keep butter in."), f("Windows", "Show off the bake."), f("Inserts", "Hold cupcakes and pastries still.")],
    guide: [
      { h: "Matching box to bake", p: ["Whole cakes need height and a strong base; cupcakes need inserts; cookies and donuts need flat boxes. Each product page above explains the sizes. Our [food and bakery page](/industries/food-and-bakery) covers the whole range."] },
      { h: "Branding on a budget", p: ["A white or kraft box with a printed [sticker seal](/packaging/labels-and-stickers) is a low-cost way to brand every order. Upgrade to full print as you grow."] },
    ],
    faqs: [q("Are bakery boxes food-safe?", "Yes."), q("Can you add a window?", "Yes."), q("What's the minimum?", "100 boxes per design.")],
  },
  "pizza-boxes": {
    lede: "Your pizza box is the first thing customers see at the door. We make corrugated pizza boxes that hold their shape, keep the heat in and let steam out, printed with your logo and menu, from 100 boxes.",
    styles: ["food-boxes", "corrugated-boxes", "chinese-takeout-boxes", "fries-boxes", "paper-bags", "labels-and-stickers"],
    features: [f("Keeps heat in", "Strong corrugated walls."), f("Vents", "Let steam escape so the base stays crisp."), f("Printed lid", "Your brand on every delivery."), f("Any size", "From personal to family size.")],
    guide: [
      { h: "Printing a pizza box", p: ["Most shops use one or two colours on kraft or white board, which keeps the price per box low. Add a menu or QR code inside the lid. Pair with [fries boxes](/packaging/fries-boxes) and [paper bags](/packaging/paper-bags) for sides."] },
    ],
    faqs: [q("Are pizza boxes food-safe?", "Yes."), q("Can you print inside the lid?", "Yes."), q("What sizes are available?", "Any size, made to order.")],
  },
  "chocolate-boxes": {
    lede: "Chocolate is a gift more often than not, and the box should feel like one. We make chocolate bar wraps and sleeves, truffle boxes with cavity inserts and luxury gift sets, in food-safe board with foil and embossing, from 100 boxes.",
    styles: ["gift-boxes", "rigid-boxes", "trays-and-sleeves", "christmas-boxes", "holiday-boxes", "food-boxes"],
    features: [f("Food-safe inserts", "Cavity trays for each piece."), f("Bar sleeves", "Slim wraps for chocolate bars."), f("Luxury finishes", "Foil, emboss and ribbon."), f("Seasonal editions", "Low minimums for holidays.")],
    guide: [
      { h: "Bars, truffles or gift sets", p: ["Bars suit a printed sleeve over foil. Truffles need a cavity insert in a [truffle box](/packaging/truffle-boxes). Mixed gift sets suit a [rigid box](/packaging/rigid-boxes)."] },
      { h: "Selling at Christmas and Valentine's", p: ["Chocolate sales peak around holidays. Plan [Christmas boxes](/packaging/christmas-boxes) early to beat the rush."] },
    ],
    faqs: [q("Are chocolate boxes food-safe?", "Yes."), q("Do you make bar wrappers?", "We make sleeves and boxes for bars."), q("Can you add a ribbon?", "Yes.")],
  },
  "cereal-boxes": {
    lede: "Cereal boxes have one of the biggest canvases on the supermarket shelf. We make food-grade cereal, granola and oat boxes in bold full colour, sized for your bag-in-box, from 100 boxes, so smaller brands can compete with the big names.",
    styles: ["food-boxes", "retail-boxes", "kraft-boxes", "mylar-bags", "display-boxes", "tuck-boxes"],
    features: [f("Big shelf presence", "Large front panel for bold design."), f("Food-safe", "Food-grade board and inks."), f("Bag-in-box sizing", "Made to fit your inner bag."), f("Small runs", "Great for new brands.")],
    guide: [
      { h: "Box or pouch?", p: ["Boxes stand tall on the shelf; a [mylar pouch](/packaging/mylar-bags) uses less material and suits granola and muesli. Some brands use both."] },
    ],
    faqs: [q("Do you supply the inner bag?", "We make the box; ask us about pouches."), q("Is the box food-safe?", "Yes."), q("Can you print kraft cereal boxes?", "Yes.")],
  },
  "coffee-packaging": {
    lede: "Coffee is about freshness and story, and your packaging needs to deliver both. We make coffee bags with degassing valves, gift boxes and subscription mailers, printed with your roastery's brand, from 100 units.",
    styles: ["mylar-bags", "tea-packaging", "mailer-boxes", "gift-boxes", "labels-and-stickers", "mug-boxes"],
    features: [f("Degassing valves", "Keep beans fresh and bags flat."), f("Resealable zips", "Fresh after opening."), f("Subscription mailers", "Letterbox-friendly boxes."), f("Gift sets", "Coffee and mug boxes.")],
    guide: [
      { h: "Bags for every roast", p: ["Many roasters use one printed bag and a [label](/packaging/labels-and-stickers) for each origin. That keeps minimums low and lets you change blends often."] },
      { h: "Coffee subscriptions", p: ["A slim [mailer box](/packaging/mailer-boxes) that fits through a letterbox is ideal for subscriptions. Our [subscription boxes page](/industries/subscription-boxes) has more ideas."] },
    ],
    faqs: [q("Do coffee bags have a valve?", "Yes, a one-way degassing valve."), q("Can I label different roasts?", "Yes."), q("Do you make gift boxes?", "Yes.")],
  },
  "tea-packaging": {
    lede: "Tea drinkers love a ritual, and good packaging is part of it. We make tea boxes, caddies, tubes and pouches for loose leaf and tea bags, printed with your brand and finished to look beautiful on a kitchen shelf, from 100 units.",
    styles: ["coffee-packaging", "tin-packaging", "tube-packaging", "mylar-bags", "dispenser-boxes", "gift-boxes"],
    features: [f("Fresh and dry", "Lined pouches and tins keep tea fresh."), f("Dispenser boxes", "Easy tea bag access."), f("Tubes and caddies", "Beautiful on a shelf."), f("Gift sets", "Sampler boxes with inserts.")],
    guide: [
      { h: "Loose leaf or tea bags?", p: ["Loose leaf suits [tins](/packaging/tin-packaging), [tubes](/packaging/tube-packaging) and resealable pouches. Tea bags suit [dispenser boxes](/packaging/dispenser-boxes) and tuck cartons."] },
    ],
    faqs: [q("Can you make tea sampler boxes?", "Yes, with inserts."), q("Are pouches resealable?", "Yes."), q("Do you make tea tins?", "Yes.")],
  },
  "bottle-boxes": {
    lede: "Bottles are heavy and breakable, so the box has to work hard. We make bottle boxes with inserts for wine, spirits, oils, sauces and drinks, in folding card, rigid board or corrugated for shipping, from 100 boxes.",
    styles: ["tube-packaging", "gift-boxes", "rigid-boxes", "corrugated-boxes", "perfume-boxes", "auto-lock-boxes"],
    features: [f("Bottle inserts", "Neck and base supports."), f("Gift-ready", "Rigid and magnetic boxes."), f("Post-safe", "Corrugated options for shipping."), f("Multi-bottle", "Two, three and six-packs.")],
    guide: [
      { h: "Gift box or shipper?", p: ["A [rigid box](/packaging/rigid-boxes) makes a bottle a gift. For posting, use [corrugated](/packaging/corrugated-boxes) with an insert. A [tube](/packaging/tube-packaging) is a stylish middle ground."] },
    ],
    faqs: [q("Can you fit a wine bottle?", "Yes."), q("Do you make multi-bottle boxes?", "Yes."), q("Are bottle boxes post-safe?", "Corrugated ones are.")],
  },
  "cbd-boxes": {
    lede: "CBD customers want a brand they can trust, and packaging is often the first sign of it. We make boxes for CBD oils, gummies, creams and capsules, with room for dosage, ingredients and a lab-results QR code, from 100 boxes.",
    styles: ["hemp-boxes", "pre-roll-boxes", "display-boxes", "kraft-boxes", "labels-and-stickers", "health-boxes"],
    features: [f("Room for compliance", "Space planned for the details you need."), f("Trustworthy design", "Clean, calm layouts."), f("Inserts", "Hold droppers and jars securely."), f("Display options", "Counter boxes for shops.")],
    guide: [
      { h: "What to print", p: ["Strength, size, ingredients, directions and a batch or lab-results link. Rules differ by country and state, so check what applies. Our [CBD and candles page](/industries/cbd-and-candles) has more."] },
      { h: "Natural or clinical?", p: ["Earthy brands lean on [kraft](/packaging/kraft-boxes) and [hemp boxes](/packaging/hemp-boxes); clinical brands use white board and clean type."] },
    ],
    faqs: [q("Can you print a QR code?", "Yes."), q("Do you make CBD display boxes?", "Yes."), q("What's the minimum?", "100 boxes.")],
  },
  "hemp-boxes": {
    lede: "Hemp brands are usually proud of being natural, and their packaging should say so. We make kraft and recycled-board boxes for hemp oils, creams, seeds and textiles, printed with earthy inks and simple, honest designs, from 100 boxes.",
    styles: ["cbd-boxes", "kraft-boxes", "pre-roll-boxes", "soap-boxes", "labels-and-stickers", "mylar-bags"],
    features: [f("Natural kraft", "An honest, earthy look."), f("Recycled board", "Lower-impact options."), f("Simple print", "One or two colours keep costs down."), f("Range-ready", "One template for many products.")],
    guide: [
      { h: "Keeping it natural", p: ["Kraft with a one-colour logo is affordable and on-brand. Read more on our [sustainability page](/sustainability) and see [CBD boxes](/packaging/cbd-boxes)."] },
    ],
    faqs: [q("Are hemp boxes recyclable?", "Yes."), q("Can you print on kraft?", "Yes."), q("Do you make pouches?", "Yes, see [mylar bags](/packaging/mylar-bags).")],
  },
  "pre-roll-boxes": {
    lede: "Pre-roll packaging has to look good, hold the product firmly and carry the right information. We make single and multi-pack pre-roll boxes with inserts and tube options, printed in full colour with premium finishes, from 100 boxes.",
    styles: ["cbd-boxes", "hemp-boxes", "vape-boxes", "tube-packaging", "display-boxes", "cigarette-boxes"],
    features: [f("Inserts", "Hold each pre-roll still."), f("Single or multi-pack", "One to ten per box."), f("Premium finishes", "Foil and holographic."), f("Information space", "Room for required text.")],
    guide: [
      { h: "Local rules", p: ["Requirements differ by market. Send us your required text and we'll plan the layout. Ask us about child-resistant options for your market."] },
    ],
    faqs: [q("Do you make multi-pack boxes?", "Yes."), q("Can you add inserts?", "Yes."), q("Is child-resistant packaging available?", "Ask us; it depends on the format.")],
  },
  "vape-boxes": {
    lede: "Vape hardware is small and expensive, so the box must hold it firmly and look the part. We make cartridge, pod and device boxes with fitted inserts, room for warnings, and bold finishes like foil and holographic, from 100 boxes.",
    styles: ["cigarette-boxes", "pre-roll-boxes", "electronics-boxes", "display-boxes", "cbd-boxes", "labels-and-stickers"],
    features: [f("Fitted inserts", "Hardware stays in place."), f("Warnings planned in", "Space for required text."), f("Bold finishes", "Foil and holographic."), f("Displays", "Counter boxes for shops.")],
    guide: [
      { h: "Device boxes vs liquid boxes", p: ["Devices need an insert like [electronics boxes](/packaging/electronics-boxes); liquids need a tall carton like [e-liquid boxes](/packaging/e-liquid-boxes)."] },
    ],
    faqs: [q("Can you fit warning labels?", "Yes."), q("Do you make cartridge boxes?", "Yes."), q("What's the minimum?", "100 boxes.")],
  },
  "cigarette-boxes": {
    lede: "We make flip-top, slide and tuck boxes for cigarettes, e-cigarettes, cigars and lighters in sturdy printed card, sized to your product and with space for the warnings your market requires, from 100 boxes.",
    styles: ["vape-boxes", "pre-roll-boxes", "tuck-boxes", "display-boxes", "e-liquid-boxes", "rigid-boxes"],
    features: [f("Flip-top and slide", "Classic formats."), f("Sturdy card", "Holds its shape in a pocket."), f("Warning space", "Planned into the layout."), f("Premium finishes", "Foil and embossing.")],
    guide: [
      { h: "Planning the layout", p: ["Health warnings often cover a large share of the box. Send the required text first and we'll design around it. See also [vape boxes](/packaging/vape-boxes)."] },
    ],
    faqs: [q("Do you make flip-top boxes?", "Yes."), q("Can you make cigar boxes?", "Yes, in card or rigid board."), q("Can you add warnings?", "Yes.")],
  },
  "pharma-boxes": {
    lede: "Pharmaceutical packaging has to be clear, accurate and tidy. We make medicine and supplement cartons with room for dosage, leaflets and batch codes, in clean white board with crisp, readable type, from 100 boxes.",
    styles: ["health-boxes", "auto-lock-boxes", "cbd-boxes", "labels-and-stickers", "dispenser-boxes", "tuck-boxes"],
    features: [f("Readable type", "Clear names and dosage."), f("Leaflet space", "Fits a folded insert."), f("Batch panels", "Space for codes and expiry."), f("Strong bases", "Auto-lock for bottles.")],
    guide: [
      { h: "Regulated text", p: ["Rules vary by country. Send your approved text and we'll lay it out exactly. Supplements and wellness products are on [health boxes](/packaging/health-boxes)."] },
    ],
    faqs: [q("Can you add Braille?", "Ask us; it depends on the board and market."), q("Is there space for batch codes?", "Yes."), q("What's the minimum?", "100 boxes.")],
  },
  "health-boxes": {
    lede: "Wellness customers want products that look trustworthy and feel good to use. We make boxes for supplements, vitamins, protein, personal care and wellness kits, with clean designs and room for ingredients and directions, from 100 boxes.",
    styles: ["pharma-boxes", "cbd-boxes", "auto-lock-boxes", "lotion-boxes", "mailer-boxes", "labels-and-stickers"],
    features: [f("Clean design", "Calm, trustworthy layouts."), f("Room to read", "Ingredients and directions."), f("Bottle-ready", "Auto-lock bases."), f("Subscription-ready", "Mailers for monthly kits.")],
    guide: [
      { h: "Supplement subscriptions", p: ["A branded [mailer box](/packaging/mailer-boxes) makes monthly wellness kits feel personal. See our [subscription boxes page](/industries/subscription-boxes)."] },
    ],
    faqs: [q("Can you fit supplement bottles?", "Yes."), q("Do you print ingredients?", "Yes."), q("Can you make wellness kits?", "Yes, with inserts.")],
  },
  "electronics-boxes": {
    lede: "Electronics need protection and a premium feel. We make gadget, charger and accessory boxes with foam or card inserts, rigid lids and sleek finishes, so your product feels as good to unbox as it is to use, from 100 boxes.",
    styles: ["rigid-boxes", "retail-boxes", "corrugated-boxes", "vape-boxes", "mailer-boxes", "hang-tab-boxes"],
    features: [f("Foam or card inserts", "Every part in its place."), f("Premium unboxing", "Rigid boxes and sleeves."), f("Retail-ready", "Hang tabs and windows."), f("Post-safe", "Corrugated outers.")],
    guide: [
      { h: "Unboxing like the big brands", p: ["A [rigid box](/packaging/rigid-boxes) with a lift-off lid and a fitted insert gives a polished feel. For small accessories, a [hang tab box](/packaging/hang-tab-boxes) suits retail."] },
    ],
    faqs: [q("Do you make foam inserts?", "Yes."), q("Can boxes be posted?", "With a corrugated outer, yes."), q("What's the minimum?", "100 boxes.")],
  },
  "hardware-boxes": {
    lede: "Tools and fixings are heavy and get handled roughly. We make strong hardware boxes in corrugated and heavy card, with clear product details, hang tabs and windows, from 100 boxes.",
    styles: ["corrugated-boxes", "auto-parts-boxes", "hang-tab-boxes", "retail-boxes", "shipping-boxes", "labels-and-stickers"],
    features: [f("Heavy-duty", "Corrugated board for weight."), f("Clear details", "Sizes and specs at a glance."), f("Retail options", "Hang tabs and windows."), f("Labels", "Variant labels for sizes.")],
    guide: [
      { h: "One box, many sizes", p: ["Print one box design and add a [label](/packaging/labels-and-stickers) for each size or variant. It keeps costs down across a big range."] },
    ],
    faqs: [q("Can boxes carry heavy tools?", "Yes, in corrugated board."), q("Do you make hang tab boxes?", "Yes."), q("Can you print specs?", "Yes.")],
  },
  "auto-parts-boxes": {
    lede: "Auto parts are heavy, oily and often oddly shaped. We make strong printed boxes for brake pads, filters, bulbs and spares, in corrugated board with clear part numbers and fitment details, from 100 boxes.",
    styles: ["corrugated-boxes", "hardware-boxes", "shipping-boxes", "labels-and-stickers", "retail-boxes", "auto-lock-boxes"],
    features: [f("Strong board", "Survives warehouses and couriers."), f("Part details", "Numbers and fitment clearly printed."), f("Labels", "Variant labels for part numbers."), f("Any shape", "Made to the part.")],
    guide: [
      { h: "Printing part numbers", p: ["Print your brand on the box and add part numbers with [labels](/packaging/labels-and-stickers), so one design covers many parts. See [hardware boxes](/packaging/hardware-boxes) too."] },
    ],
    faqs: [q("Can boxes hold heavy parts?", "Yes."), q("Can you print part numbers?", "Yes, or use labels."), q("What's the minimum?", "100 boxes.")],
  },
  "sports-boxes": {
    lede: "Sports packaging should feel as energetic as the kit inside. We make boxes for balls, gear, supplements and accessories, from three-ball sleeves to gift sets, printed in bold full colour, from 100 boxes.",
    styles: ["retail-boxes", "display-boxes", "gift-boxes", "hang-tab-boxes", "health-boxes", "mailer-boxes"],
    features: [f("Bold print", "Bright, sporty designs."), f("Gift sets", "For clubs and events."), f("Retail-ready", "Displays and hang tabs."), f("Strong options", "For heavier gear.")],
    guide: [
      { h: "Clubs and events", p: ["Golf days and tournaments often use branded gift boxes. See [golf ball boxes](/packaging/golf-ball-boxes) and [tennis ball boxes](/packaging/tennis-ball-boxes)."] },
    ],
    faqs: [q("Do you make ball boxes?", "Yes."), q("Can you print club logos?", "Yes."), q("What's the minimum?", "100 boxes.")],
  },
  "stationery-boxes": {
    lede: "Stationery lovers notice the details. We make boxes for pens, pencils, notebooks, planners and stationery gift sets, with inserts and finishes that make them as satisfying to open as to use, from 100 boxes.",
    styles: ["gift-boxes", "book-boxes", "trays-and-sleeves", "rigid-boxes", "playing-card-boxes", "labels-and-stickers"],
    features: [f("Pen inserts", "Hold each pen or pencil."), f("Gift sets", "Notebook and pen boxes."), f("Premium finishes", "Foil and soft-touch."), f("Small runs", "Great for small brands.")],
    guide: [
      { h: "Gift sets", p: ["A [tray and sleeve](/packaging/trays-and-sleeves) or [book-style box](/packaging/book-boxes) makes a lovely stationery gift."] },
    ],
    faqs: [q("Do you make pen boxes?", "Yes."), q("Can you make planner boxes?", "Yes."), q("What's the minimum?", "100 boxes.")],
  },
  "christmas-boxes": {
    lede: "Christmas is the busiest gifting season of the year, and the box sets the tone. We make festive gift boxes, hamper boxes, advent calendars and treat boxes, printed with your seasonal designs. Order early, as factory slots fill fast from October.",
    styles: ["holiday-boxes", "gift-boxes", "chocolate-boxes", "rigid-boxes", "wrapping-paper", "ribbon-boxes"],
    features: [f("Festive designs", "Your seasonal artwork."), f("Hampers", "Large boxes for gift sets."), f("Advent calendars", "Ask us about formats."), f("Short runs", "From 100 boxes.")],
    guide: [
      { h: "When to order", p: ["Production takes 10–12 business days after proof approval, plus shipping. For December delivery, get your quote in by early November. See also [holiday boxes](/packaging/holiday-boxes)."] },
    ],
    faqs: [q("When should I order?", "Ideally by early November."), q("Do you make hamper boxes?", "Yes."), q("Can you add ribbon?", "Yes.")],
  },
  "holiday-boxes": {
    lede: "Every holiday is a chance to sell more, and special packaging helps. We make seasonal boxes for Valentine's, Easter, Mother's Day, Halloween and more, printed with limited-edition designs, from 100 boxes.",
    styles: ["christmas-boxes", "gift-boxes", "chocolate-boxes", "favour-boxes", "trays-and-sleeves", "ribbon-boxes"],
    features: [f("Limited editions", "Low minimums for seasonal runs."), f("Sleeves", "Rebrand a standard box."), f("Gift-ready", "Ribbon and magnetic lids."), f("Treat boxes", "Food-safe options.")],
    guide: [
      { h: "Seasonal sleeves", p: ["Keep one box and print a seasonal [sleeve](/packaging/trays-and-sleeves) for each holiday. It's the cheapest way to refresh."] },
    ],
    faqs: [q("Can I order a small run?", "Yes, from 100."), q("Do you make Valentine's boxes?", "Yes."), q("Food-safe?", "Yes, on request.")],
  },
};
