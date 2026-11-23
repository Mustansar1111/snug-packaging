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
      { h: "Printing a pizza box", p: ["Most shops use one or two colors on kraft or white board, which keeps the price per box low. Add a menu or QR code inside the lid. Pair with [fries boxes](/packaging/fries-boxes) and [paper bags](/packaging/paper-bags) for sides."] },
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
    lede: "Cereal boxes have one of the biggest canvases on the supermarket shelf. We make food-grade cereal, granola and oat boxes in bold full color, sized for your bag-in-box, from 100 boxes, so smaller brands can compete with the big names.",
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
    features: [f("Natural kraft", "An honest, earthy look."), f("Recycled board", "Lower-impact options."), f("Simple print", "One or two colors keep costs down."), f("Range-ready", "One template for many products.")],
    guide: [
      { h: "Keeping it natural", p: ["Kraft with a one-color logo is affordable and on-brand. Read more on our [sustainability page](/sustainability) and see [CBD boxes](/packaging/cbd-boxes)."] },
    ],
    faqs: [q("Are hemp boxes recyclable?", "Yes."), q("Can you print on kraft?", "Yes."), q("Do you make pouches?", "Yes, see [mylar bags](/packaging/mylar-bags).")],
  },
  "pre-roll-boxes": {
    lede: "Pre-roll packaging has to look good, hold the product firmly and carry the right information. We make single and multi-pack pre-roll boxes with inserts and tube options, printed in full color with premium finishes, from 100 boxes.",
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
    lede: "Pharmacy packaging is read closely, often by someone who is unwell or in a hurry. We make medicine, OTC and supplement cartons in clean white board with crisp, high-contrast type, panels for dosage and batch codes, and room for a folded leaflet, from 100 boxes.",
    styles: ["health-boxes", "auto-lock-boxes", "medicine-boxes", "labels-and-stickers", "dispenser-boxes", "tuck-boxes"],
    features: [
      f("Type you can read at a glance", "We set product names, strengths and directions in sizes and contrasts that stay legible on a small carton, and check every panel against your approved text."),
      f("A home for the leaflet", "Boxes are sized around your folded patient leaflet as well as the bottle or blister, so nothing has to be crammed in at the packing line."),
      f("Batch, lot and expiry panels", "We leave an unvarnished panel where your team can stamp or label batch numbers and expiry dates after printing."),
      f("Bases that stay shut", "Auto-lock bottoms hold glass bottles and heavier packs securely, and tuck-end cartons keep light blister packs neat on the shelf."),
    ],
    guide: [
      { h: "Start with the approved text", p: ["Pharmaceutical artwork is usually signed off by a regulatory or QA person before it reaches us. Send that approved copy, and we lay it out exactly as written, with no changes to wording, symbols or order. If something won't fit, we tell you and suggest a larger panel rather than shrinking the type.", "Rules on what must appear differ between the US, UK, Australia and the EU, so we always work from your text rather than a template. Supplements and wellness products that don't carry medicine claims usually suit our [health boxes](/packaging/health-boxes) instead."] },
      { h: "Choosing the carton", p: ["Most medicine packs are folding cartons in white SBS board. A [tuck box](/packaging/tuck-boxes) suits blister strips and tubes, while an [auto-lock box](/packaging/auto-lock-boxes) is the better choice for glass bottles because the base locks itself shut. For counter sales, a [dispenser box](/packaging/dispenser-boxes) holds sachets or strips and lets customers take one at a time.", "If you want a matte look, choose a matte laminate or aqueous coat but leave the batch panel uncoated, so ink and labels stick."] },
      { h: "Keeping a range consistent", p: ["A pharmacy range often has several strengths of the same product. We keep the layout, colors and type identical across the range and change only the strength and color band, so staff and customers can tell them apart without mixing them up."] },
    ],
    faqs: [
      q("Can you print the regulatory text exactly as we send it?", "Yes. We place your approved wording exactly as supplied and send a flat proof for your QA team to check line by line before anything is printed."),
      q("Is there space for batch codes and expiry dates?", "Yes. We leave a clear, uncoated panel so you can inkjet, stamp or label batch and expiry details after the boxes are made."),
      q("Can the box hold a leaflet as well as the product?", "Yes. Send us the folded size of your leaflet and we size the carton around both."),
      q("Can you add Braille?", "It depends on the board and the market you sell in. Tell us what you need in the quote form and we'll confirm what's possible before you order."),
      q("What's the minimum order?", "100 boxes per design. Larger runs bring the price per box down, which helps when you stock several strengths."),
    ],
  },
  "health-boxes": {
    lede: "Wellness shoppers buy with their eyes first, then turn the box over to read the label. We make supplement, vitamin, protein and personal care boxes that look calm and trustworthy from the front and leave plenty of room for ingredients and directions on the back, from 100 boxes.",
    styles: ["pharma-boxes", "cbd-boxes", "auto-lock-boxes", "lotion-boxes", "mailer-boxes", "labels-and-stickers"],
    features: [
      f("Designs that feel clean", "Soft colors, plenty of white space and one clear message on the front, so your product looks credible next to the big names."),
      f("Room for the small print", "Ingredients, serving sizes and directions get their own panel at a readable size, instead of being squeezed around the logo."),
      f("Made for your container", "Bottle, tub, jar or pouch: we size the box around it, with an insert if it's glass or likely to move about."),
      f("Ready for subscriptions", "Printed mailers turn a monthly supplement drop or a wellness kit into something people look forward to opening."),
    ],
    guide: [
      { h: "What goes on the front, and what goes on the back", p: ["The front of a wellness box has one job: tell a shopper what this is and why it's for them, in about three seconds. Keep it to your brand, the product name, one key benefit and the count or size. Everything else (full ingredients, how to use it, warnings) belongs on the back or side panels.", "If your product makes health claims, check the rules where you sell. We print what you approve, and we're happy to flag any panel that looks too crowded to read."] },
      { h: "Supplements, powders and kits", p: ["Bottles of capsules usually go in a tuck or [auto-lock box](/packaging/auto-lock-boxes) in white SBS card. Protein and powder tubs are bigger and heavier, so a sturdier board or a printed sleeve works better. Wellness kits with several items look best in a [mailer box](/packaging/mailer-boxes) with a card insert holding each piece.", "For monthly deliveries, see our [subscription boxes page](/industries/subscription-boxes). For medicines and OTC products with regulated text, use [pharma boxes](/packaging/pharma-boxes)."] },
      { h: "Making a range look like a family", p: ["Most wellness brands sell several products. Keep the layout and type the same across the range and give each product its own accent color. It looks deliberate on a shelf, and it's cheaper to set up because one design is adapted rather than four built from scratch."] },
    ],
    faqs: [
      q("Can you fit supplement bottles and tubs?", "Yes. Send us the height and diameter of your container, or the container itself, and we size the box to fit snugly."),
      q("Will you print our ingredients and directions?", "Yes. We set them on their own panel at a readable size and send a flat proof so you can check every line."),
      q("Can you make kits with several products?", "Yes. A mailer or rigid box with a card insert holds each item in its own slot so nothing rattles in the post."),
      q("Do you offer eco-friendly options?", "Yes. Kraft board and recyclable card both work well, and we can skip plastic laminates if you want the box to go straight into recycling."),
      q("What's the minimum order?", "100 boxes per design."),
    ],
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
    lede: "Tools and fixings are heavy, have sharp edges and get thrown about in stockrooms. We make hardware boxes in corrugated board and heavy card that take the weight, with sizes, specs and barcodes printed where a customer or a warehouse picker can find them fast, from 100 boxes.",
    styles: ["corrugated-boxes", "auto-parts-boxes", "hang-tab-boxes", "retail-boxes", "shipping-boxes", "labels-and-stickers"],
    features: [
      f("Board chosen for the weight", "Screws, hinges and hand tools are heavy for their size. We pick a flute and board grade that won't split at the corners when the box is full."),
      f("Specs where people look", "Size, thread, material and quantity go on the end panel as well as the front, because that's what faces out on a warehouse shelf."),
      f("Hang tabs and windows", "For retail pegs, add a hang tab. A window lets buyers check the finish or size without opening the pack."),
      f("One design, many SKUs", "Print one box for the whole range and add a variant label for each size. It keeps setup costs down when you sell dozens of variants."),
    ],
    guide: [
      { h: "Corrugated or heavy card?", p: ["For small fixings sold in shops, a heavy folding carton or a [hang tab box](/packaging/hang-tab-boxes) is enough and looks sharper on the peg. Once a box holds more than a couple of pounds, or travels by courier, move to E or B flute [corrugated board](/packaging/corrugated-boxes). It costs a little more but stops crushed corners and returns.", "Tool kits and power tool accessories often use a printed corrugated box with a die-cut card insert, so every piece has a place and nothing rattles."] },
      { h: "Printing for the warehouse, not just the shelf", p: ["A good hardware box is easy to pick. Put the product code, size and barcode on at least one end panel so it can be read when boxes are stacked. Use large, plain type for sizes, and keep decorative design to the front.", "If you sell through big retailers, check their packaging requirements first. Many ask for a barcode in a set position and a minimum size, and we'll place it exactly as specified."] },
      { h: "Keeping costs down across a big range", p: ["Hardware ranges can have hundreds of sizes. Rather than printing a box for each one, print a single branded box and add a [label](/packaging/labels-and-stickers) for the size and code. You get one print run at a better price, and new sizes don't need new boxes."] },
    ],
    faqs: [
      q("Can the boxes carry heavy tools?", "Yes. Tell us the weight of a full box and we'll recommend the right corrugated grade. For very heavy items we suggest double-wall board."),
      q("Do you make hang tab boxes for retail pegs?", "Yes, in card or corrugated, with a standard or custom-shaped hang hole."),
      q("Can you print barcodes and specs?", "Yes. Send us your barcode files and spec text and we'll place them on the panels you choose."),
      q("Can I use one box design for many sizes?", "Yes. That's the most common setup: one printed box plus a variant label for each size."),
      q("What's the minimum order?", "100 boxes per design."),
    ],
  },
  "auto-parts-boxes": {
    lede: "Car parts are heavy, oily and awkwardly shaped, and the wrong one in the wrong box costs you a return. We make strong printed boxes for brake pads, filters, bulbs, sensors and spares, with clear part numbers and fitment details on the panels mechanics actually look at, from 100 boxes.",
    styles: ["corrugated-boxes", "hardware-boxes", "shipping-boxes", "labels-and-stickers", "retail-boxes", "auto-lock-boxes"],
    features: [
      f("Built for the trade counter", "Corrugated board survives distributors, couriers and busy workshops, and resists the knocks that make cheaper cartons split."),
      f("Part numbers that can't be missed", "Part number, fitment and quantity are printed large on the end panel, because that's what faces out on a parts shelf."),
      f("Fitted to the part", "Brake discs, wiper blades and filters are all different shapes. We size each box to the part and add an insert if it needs holding still."),
      f("Oil and moisture", "A protective coating helps the print hold up in garages where hands and benches are rarely clean."),
    ],
    guide: [
      { h: "What a mechanic needs to see", p: ["In a workshop, nobody reads the front of the box. They read the end panel: brand, part number, what it fits and how many are inside. Put those four things there in large, high-contrast type, and add a barcode if you sell through distributors.", "Keep marketing messages for the front and top, where they'll be seen in a retail store or when the customer opens the parcel."] },
      { h: "Choosing the box", p: ["Small parts like bulbs, fuses and sensors suit a heavy folding carton or an [auto-lock box](/packaging/auto-lock-boxes), which assembles fast and holds its base under weight. Pads, discs and pumps are heavy, so they need [corrugated board](/packaging/corrugated-boxes). Long parts like wiper blades and exhaust sections need a long, narrow box made to measure.", "If you sell online, check that the box can travel on its own. If not, plan for an outer [shipping box](/packaging/shipping-boxes)."] },
      { h: "One design across hundreds of part numbers", p: ["Parts catalogs are huge. The practical way to brand them is one printed box per size band, with a [label](/packaging/labels-and-stickers) carrying the part number and fitment. It's the same approach many tool brands use for [hardware boxes](/packaging/hardware-boxes), and it means you can add new parts without new print runs."] },
    ],
    faqs: [
      q("Can the boxes hold heavy parts like brake discs?", "Yes. We use corrugated board graded for the weight, and double-wall board for the heaviest parts."),
      q("Can you print part numbers and fitment details?", "Yes, directly on the box or on labels if you need one design to cover many parts."),
      q("Can you make long boxes for wiper blades or trim?", "Yes. Every box is made to your measurements, including long, narrow and odd shapes."),
      q("Will the print survive a workshop?", "A protective coating helps the print resist oil marks and handling. Tell us where the boxes will be used and we'll suggest the right finish."),
      q("What's the minimum order?", "100 boxes per design."),
    ],
  },
  "sports-boxes": {
    lede: "Sports packaging should feel as energetic as the kit inside. We make boxes for balls, gear, supplements and accessories, from three-ball sleeves to gift sets, printed in bold full color, from 100 boxes.",
    styles: ["retail-boxes", "display-boxes", "gift-boxes", "hang-tab-boxes", "health-boxes", "mailer-boxes"],
    features: [f("Bold print", "Bright, sporty designs."), f("Gift sets", "For clubs and events."), f("Retail-ready", "Displays and hang tabs."), f("Strong options", "For heavier gear.")],
    guide: [
      { h: "Clubs and events", p: ["Golf days and tournaments often use branded gift boxes. See [golf ball boxes](/packaging/golf-ball-boxes) and [tennis ball boxes](/packaging/tennis-ball-boxes)."] },
    ],
    faqs: [q("Do you make ball boxes?", "Yes."), q("Can you print club logos?", "Yes."), q("What's the minimum?", "100 boxes.")],
  },
  "stationery-boxes": {
    lede: "Stationery lovers notice everything: the weight of the lid, the feel of the board, how neatly the pens sit. We make boxes for pens, pencils, notebooks, planners, washi tape and gift sets, with fitted inserts and finishes that make opening them part of the pleasure, from 100 boxes.",
    styles: ["gift-boxes", "book-boxes", "trays-and-sleeves", "rigid-boxes", "playing-card-boxes", "labels-and-stickers"],
    features: [
      f("Inserts for every pen", "Card or foam inserts with a slot for each pen, pencil or refill, so a set looks complete the moment it's opened."),
      f("Sized to your notebook", "A5 notebooks, B6 planners, sticker sheets: we make the box to your exact size, so nothing slides about in the post."),
      f("Finishes you can feel", "Soft-touch lamination, foil logos and blind embossing suit stationery buyers, who tend to run a hand over the lid."),
      f("Small runs for small brands", "Start at 100 boxes, which suits limited editions, launches and seasonal planner drops."),
    ],
    guide: [
      { h: "Matching the box to the product", p: ["Single pens and pencil sets look best in a slim [two-piece or tray-and-sleeve box](/packaging/trays-and-sleeves) with an insert. Notebooks and planners suit a [book-style box](/packaging/book-boxes) that opens like a cover, or a simple printed mailer if they're going straight into the post. Mixed gift sets (notebook, pen and stickers) are where a [rigid box](/packaging/rigid-boxes) earns its cost.", "Card decks, sticker packs and small accessories can borrow the shape of [playing card boxes](/packaging/playing-card-boxes), which are compact and cheap to post."] },
      { h: "Launches and limited editions", p: ["Stationery brands often release designs in small drops. Keep a standard box for your core range and add a printed sleeve or sticker for each limited edition. You get the excitement of something new without paying for a full new box every time."] },
      { h: "Posting stationery safely", p: ["Notebooks scuff at the corners and pens can break in transit. Size the box tightly around the product, use an insert for anything loose, and send rigid boxes inside a plain outer. If the box is the shipper, choose E-flute corrugated and print the inside for a nice surprise on opening."] },
    ],
    faqs: [
      q("Do you make pen and pencil boxes with inserts?", "Yes. Tell us how many pens and their sizes and we'll design an insert with a slot for each."),
      q("Can you make boxes for planners and notebooks?", "Yes, sized to your exact notebook, as a book-style box, a two-piece box or a printed mailer."),
      q("Which finishes suit stationery?", "Soft-touch, foil and embossing are the most popular. A single foil logo on a matte box is a good balance of cost and feel."),
      q("Can I order a small run for a limited edition?", "Yes. Orders start at 100 boxes, and a printed sleeve over a standard box is a cheap way to do short drops."),
      q("What's the minimum order?", "100 boxes per design."),
    ],
  },
  "christmas-boxes": {
    lede: "For many brands, December is the month that makes the year, and the box is often what gets photographed and shared. We make Christmas gift boxes, hamper boxes, advent-style boxes and treat boxes printed with your festive designs, from 100 boxes. Plan early: print slots fill fast from October.",
    styles: ["holiday-boxes", "gift-boxes", "chocolate-boxes", "rigid-boxes", "wrapping-paper", "ribbon-boxes"],
    features: [
      f("Your festive design, not a stock one", "We print your own Christmas artwork, whether that's snowflakes in your brand colors or a full illustrated scene wrapping the box."),
      f("Hamper and gift set boxes", "Large boxes with inserts or dividers for food hampers, beauty gift sets and corporate gifts, sized to what you're packing."),
      f("Advent and countdown ideas", "Boxes with numbered compartments or drawers. Tell us what goes inside and we'll suggest a format that works at your quantity."),
      f("Ribbons and magnetic lids", "Ribbon ties, pull tabs and magnetic closures turn a box into a present, with no wrapping needed."),
    ],
    guide: [
      { h: "When to order for December", p: ["Production takes 10–12 business days after you approve your proof, and shipping time comes on top. To have boxes in hand for early December, ask for your quote by late October and approve your proof by early November. Leave extra time if you're adding inserts, foil or a new box shape.", "If you miss that window, a printed [sleeve](/packaging/trays-and-sleeves) over a box you already stock is the quickest way to dress up your range for the season."] },
      { h: "Designing a box people keep", p: ["The best Christmas boxes get reused long after the gift is opened. A sturdy [rigid box](/packaging/rigid-boxes) with a lift-off or magnetic lid, a soft-touch finish and a foil detail feels like a keepsake. Keep the festive design on the outside and your logo small and confident, so the box still works as storage in January.", "Deep greens, reds and golds are classic, but plenty of brands do well with a single brand color plus a touch of gold foil."] },
      { h: "Corporate and bulk gifting", p: ["Companies ordering client gifts usually want a box with their logo, a short message inside the lid and room for two or three items. Send us the items and the quantity, and we'll suggest an insert layout. For food gifts like chocolate and cookies, see [chocolate boxes](/packaging/chocolate-boxes). For other seasons, see [holiday boxes](/packaging/holiday-boxes)."] },
    ],
    faqs: [
      q("When should I order Christmas boxes?", "Ideally ask for a quote by late October and approve your proof by early November, so the boxes reach you in early December."),
      q("Do you make hamper boxes?", "Yes, in rigid board or strong corrugated, with dividers or inserts for each item."),
      q("Can you add a ribbon or a magnetic lid?", "Yes. Ribbon ties, pull ribbons and magnetic closures are all available."),
      q("Can you print a message inside the lid?", "Yes. Inside printing is a lovely place for a thank-you note or a seasonal greeting."),
      q("What's the minimum order?", "100 boxes per design, which suits a seasonal or limited-edition run."),
    ],
  },
  "holiday-boxes": {
    lede: "Valentine's Day, Easter, Mother's Day, Halloween, Diwali, Eid, Hanukkah: every holiday is a reason to give, and a reason for shoppers to choose you. We make limited-edition boxes for each occasion, printed with your seasonal design, in runs from 100, so you can try a new holiday without a warehouse full of leftovers.",
    styles: ["christmas-boxes", "gift-boxes", "chocolate-boxes", "favor-boxes", "trays-and-sleeves", "ribbon-boxes"],
    features: [
      f("Short runs for each occasion", "Order 100 to a few hundred boxes for a single holiday, so a seasonal design never outlives the season."),
      f("Sleeves that refresh any box", "Keep your everyday box and print a sleeve for each holiday. It's the cheapest way to look seasonal all year."),
      f("Gift-ready closures", "Ribbon ties, window lids and magnetic flaps make a box feel like a present without extra wrapping."),
      f("Treats and food gifts", "Food-safe board for chocolates, cookies and sweets, with inserts that stop them moving."),
    ],
    guide: [
      { h: "Plan the year, not just the next holiday", p: ["Seasonal sales come round on a fixed calendar, so plan your packaging the same way. Work back from each date: allow time to design, about a week to approve a proof, 10–12 business days of production and then shipping. Approving a proof six weeks before the holiday keeps you comfortable.", "Brands that sell every season often keep one core box and print a set of [sleeves](/packaging/trays-and-sleeves): pink for Valentine's, pastel for Easter, orange for Halloween. One setup, four looks."] },
      { h: "Matching the box to the holiday", p: ["Valentine's and Mother's Day lean towards keepsake boxes with ribbon or a soft-touch finish. Easter and Halloween suit fun, bright [favor boxes](/packaging/favor-boxes) and treat boxes in bulk. Diwali, Eid and Hanukkah gifting often means sweets and dried fruit, so food-safe [chocolate-style boxes](/packaging/chocolate-boxes) with dividers work well.", "December has its own page: see [Christmas boxes](/packaging/christmas-boxes)."] },
      { h: "Avoiding leftover stock", p: ["The risk with seasonal packaging is boxes left over once the day has passed. Order close to what you'll sell, keep dates and years off the design so leftovers can return next year, and use stickers or labels for anything that changes."] },
    ],
    faqs: [
      q("Can I order a small run for one holiday?", "Yes. Orders start at 100 boxes per design, which suits a single seasonal launch."),
      q("Which holidays do you make boxes for?", "Any holiday you sell for, including Valentine's Day, Easter, Mother's and Father's Day, Halloween, Diwali, Eid, Hanukkah and Lunar New Year."),
      q("Are the boxes food-safe?", "Yes, we can use food-safe board for chocolates and treats. Tell us what goes inside when you ask for a quote."),
      q("How far ahead should I order?", "Approving your proof about six weeks before the holiday gives comfortable time for production and delivery."),
      q("Can I reuse one box design across holidays?", "Yes. Print one everyday box and a seasonal sleeve or sticker for each occasion."),
    ],
  },
};
