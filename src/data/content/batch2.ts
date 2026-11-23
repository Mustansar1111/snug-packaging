import type { RichContent } from "./types";

/** Batch 2: box styles and bags/print. Product pages that sit under a category are added to its styles list automatically. */
const f = (title: string, text: string) => ({ title, text });
const q = (q: string, a: string) => ({ q, a });

export const batch2: Record<string, RichContent> = {
  "corrugated-boxes": {
    lede: "Corrugated boxes do the heavy lifting in packaging. The fluted layer inside the board absorbs knocks and keeps its shape under weight, which is why it carries everything from glass jars to machine parts. We make single and double-wall corrugated boxes to your size and print them in one color or full color, from 100 boxes.",
    styles: ["shipping-boxes", "mailer-boxes", "cardboard-boxes", "pizza-boxes", "kraft-boxes", "electronics-boxes"],
    features: [f("Choose your flute", "E-flute for a slim, printable box; B or C-flute for cushioning; double wall for heavy loads."), f("Printed or plain", "Full color on white board, or a simple logo on brown kraft to keep costs low."), f("Made to fit", "Cut to your product so it can't slide and you pay less to ship air."), f("Recyclable", "Corrugated board is one of the most widely recycled materials in every market we ship to.")],
    guide: [
      { h: "Single wall or double wall?", p: ["Single-wall board covers most e-commerce orders up to around 15 kg. Choose double wall for heavy, fragile or high-value items, or when boxes are stacked on pallets.", "Not sure? Tell us the weight and how it travels, and we'll recommend a board in your quote. Our article on [mailer vs shipping boxes](/blog/mailer-box-vs-shipping-box) explains the trade-offs."] },
      { h: "Printing on corrugated", p: ["Brown kraft corrugated gives a natural look and suits one or two-color logos. For photos and bright colors, we print on white-lined board. If the inside matters for unboxing, ask about inside print on a [mailer box](/packaging/mailer-boxes)."] },
    ],
    faqs: [q("What's the difference between corrugated and cardboard?", "Cardboard often means thin, flat card; corrugated has a fluted layer for strength. See our [cardboard boxes](/packaging/cardboard-boxes) page for the lighter option."), q("Can you make heavy-duty boxes?", "Yes, in double-wall board for heavy or fragile products."), q("Can corrugated boxes be printed in full color?", "Yes, on white-lined board.")],
  },
  "cardboard-boxes": {
    lede: "Cardboard boxes are the everyday workhorse of packaging: light, affordable and easy to print. We make them in any size and style, from small product cartons to retail packs, in white or kraft board, with your logo and artwork on every side. Order from 100 boxes, made to your exact size.",
    styles: ["product-boxes", "tuck-boxes", "corrugated-boxes", "kraft-boxes", "retail-boxes", "white-boxes"],
    features: [f("Low cost per box", "A smart choice when you need lots of boxes on a sensible budget."), f("Any style", "Tuck end, auto-lock, sleeve, two-piece and more."), f("Ships flat", "Saves storage space until you're ready to pack."), f("Easy to brand", "Full color on white or a one-color logo on kraft.")],
    guide: [
      { h: "Picking the right thickness", p: ["Light products like cosmetics and accessories suit 14 to 18pt card. Heavier products, or anything posted, need [corrugated board](/packaging/corrugated-boxes). We'll suggest the right one when you send your product weight."] },
      { h: "Popular cardboard box styles", p: ["Most brands start with a [tuck box](/packaging/tuck-boxes). For heavier items, an [auto-lock bottom](/packaging/auto-lock-boxes) is stronger. For gifts, a [two-piece box](/packaging/two-piece-boxes) feels more premium."] },
    ],
    faqs: [q("What's the minimum order?", "100 boxes per design."), q("Can I get plain cardboard boxes?", "Yes, plain or with a simple logo."), q("Are cardboard boxes recyclable?", "Yes, in household recycling in all our markets.")],
  },
  "tuck-boxes": {
    lede: "The tuck end box is the most popular product carton in the world for good reason: it ships flat, folds in seconds and prints on every side. We make straight tuck, reverse tuck and auto-lock bottom cartons in SBS or kraft card, sized to your product, from 100 boxes.",
    styles: ["product-boxes", "retail-boxes", "cosmetic-boxes", "window-boxes", "hang-tab-boxes", "cardboard-boxes"],
    features: [f("Folds in seconds", "No glue or tape needed to close."), f("Three closures", "Straight tuck, reverse tuck or auto-lock bottom."), f("Six printable sides", "Room for branding, claims and details."), f("Add-ons", "Windows, hang tabs and inserts.")],
    guide: [
      { h: "Straight tuck vs reverse tuck", p: ["A straight tuck has both flaps on the same side, so the front panel looks clean. A reverse tuck has them on opposite sides, which is cheaper to make. Heavier products should use an [auto-lock bottom](/packaging/auto-lock-boxes)."] },
      { h: "Sizing a tuck box", p: ["Measure length, width and depth of the product and add a couple of millimeters. Our guide to [measuring for a custom box](/blog/how-to-measure-for-a-custom-box) walks you through it."] },
    ],
    faqs: [q("Do tuck boxes come flat?", "Yes, ready to fold."), q("Can tuck boxes have a window?", "Yes."), q("What card thickness is best?", "16–18pt for most retail products.")],
  },
  "pillow-boxes": {
    lede: "Pillow boxes have a soft curved shape that closes on its own, with no glue or tape. They're a favorite for small gifts, jewelry, favors and gift cards because they look special and cost little. We make them in white, kraft and colored card, printed with your design, from 100 boxes.",
    styles: ["favor-boxes", "gift-boxes", "jewelry-boxes", "window-boxes", "die-cut-boxes", "kraft-boxes"],
    features: [f("Closes itself", "Curved ends tuck in neatly."), f("Gift-ready", "A charming shape that feels like a present."), f("Window option", "Show the product inside."), f("Cheap to ship", "Ships flat and weighs little.")],
    guide: [
      { h: "What fits in a pillow box?", p: ["Pillow boxes suit flat or small items: jewelry, hair accessories, gift cards, soaps and sweets. For bulkier gifts, try a [favor box](/packaging/favor-boxes) or a [gable box](/packaging/gable-boxes)."] },
    ],
    faqs: [q("Do pillow boxes need glue?", "No, the curved ends close on their own."), q("Can you add a window?", "Yes."), q("Can I get kraft pillow boxes?", "Yes.")],
  },
  "gable-boxes": {
    lede: "Gable boxes have a handle built into the top, so customers can carry them like a little bag. They're perfect for bakery treats, takeaway, party favors and gifts. We make them in food-grade card or kraft, with optional windows, printed with your brand, from 100 boxes.",
    styles: ["bakery-boxes", "food-boxes", "favor-boxes", "cupcake-boxes", "window-boxes", "paper-bags"],
    features: [f("Built-in handle", "No separate bag needed."), f("Food-safe options", "Food-grade board and inks."), f("Windows", "Show the treat inside."), f("Fun for events", "Popular as favors and goodie boxes.")],
    guide: [
      { h: "Gable boxes for food", p: ["Bakeries use gable boxes for cupcakes, cookies and pastries; add an insert to hold each item. See [bakery boxes](/packaging/bakery-boxes) for more styles."] },
    ],
    faqs: [q("Are gable boxes food-safe?", "Yes, when made in food-grade board."), q("Can you add inserts?", "Yes, for cupcakes and pastries."), q("Do they come flat?", "Yes.")],
  },
  "window-boxes": {
    lede: "A window box lets shoppers see exactly what they're buying, which builds trust and sells. We cut windows in any shape, cover them with clear film if needed, and print the rest of the box with your branding. Great for food, cosmetics, toys and gifts, from 100 boxes.",
    styles: ["bakery-boxes", "toy-boxes", "die-cut-boxes", "cosmetic-boxes", "soap-boxes", "retail-boxes"],
    features: [f("Any shape window", "Circles, ovals, your logo or a custom outline."), f("Clear film", "Keeps dust out and food fresh."), f("Brand around it", "Print frames the product."), f("Works on most styles", "Tuck, gable, two-piece and more.")],
    guide: [
      { h: "Where to put the window", p: ["Place the window where the product looks best, and leave enough board around it for strength. Our designers check this on your free [3D mockup](/free-mockup). For more unusual shapes, see [die-cut boxes](/packaging/die-cut-boxes)."] },
      { h: "Film or no film?", p: ["Food and cosmetics usually need clear film to keep things clean. Non-food products like toys and candles can have an open window to save plastic."] },
    ],
    faqs: [q("Can the window be any shape?", "Yes, almost any shape."), q("Is the film recyclable?", "We can use compostable film on request."), q("Can a window box hold food?", "Yes, with food-grade board and film.")],
  },
  "round-boxes": {
    lede: "Round boxes feel luxurious the moment someone picks one up. We make rigid cylinder boxes with lift-off lids for candles, tea, flowers, hats and premium gifts, wrapped in printed paper with foil or embossing, from 100 boxes.",
    styles: ["tube-packaging", "candle-boxes", "gift-boxes", "rigid-boxes", "tea-packaging", "tin-packaging"],
    features: [f("Luxury shape", "Stands out among square boxes."), f("Lift-off lid", "A slow, satisfying reveal."), f("Premium finishes", "Foil, embossing and textured papers."), f("Reusable", "Customers keep round boxes for storage.")],
    guide: [
      { h: "Round box or tube?", p: ["Round boxes are short and wide, ideal for candles and flowers. [Tube packaging](/packaging/tube-packaging) is tall and slim, ideal for bottles, posters and cosmetics."] },
    ],
    faqs: [q("Can round boxes have inserts?", "Yes, for candles, jars and bottles."), q("Can you print the lid?", "Yes, lid and sides."), q("What sizes are available?", "Any diameter and height.")],
  },
  "tube-packaging": {
    lede: "Cardboard tubes are a striking alternative to boxes for anything long or round. We make printed tubes with lids for posters, bottles, cosmetics, tea, socks and gifts, in kraft or full color, with foil and soft-touch available, from 100 tubes.",
    styles: ["round-boxes", "bottle-boxes", "tea-packaging", "cosmetic-boxes", "tennis-ball-boxes", "kraft-boxes"],
    features: [f("Plastic-free", "A paper alternative to plastic tubes and tins."), f("Long and slim", "Fits bottles, posters and rolled items."), f("Full wrap print", "Your design runs right round the tube."), f("Push or lift lids", "Choose how it opens.")],
    guide: [
      { h: "What goes well in a tube?", p: ["Tubes suit wine and spirit bottles, posters and prints, lip balms, tea, socks and candles. For bottles that need more support, compare [bottle boxes](/packaging/bottle-boxes)."] },
    ],
    faqs: [q("Are cardboard tubes eco-friendly?", "Yes, they're paper-based and recyclable."), q("Can the tube hold a bottle?", "Yes, sized to your bottle."), q("Can you print kraft tubes?", "Yes.")],
  },
  "trays-and-sleeves": {
    lede: "A tray and sleeve box is simple and elegant: the product sits in a sturdy tray and a printed sleeve slides over it. It's one of the most satisfying ways to open a box, and one of the easiest to rebrand. We make them in folding card or rigid board, from 100 boxes.",
    styles: ["rigid-boxes", "macaron-boxes", "gift-boxes", "eyeshadow-boxes", "chocolate-boxes", "two-piece-boxes"],
    features: [f("Slide-open reveal", "A small moment of theater."), f("Easy to rebrand", "Change the sleeve, keep the tray."), f("Rigid or folding", "Luxury or budget."), f("Inserts", "Hold products in place.")],
    guide: [
      { h: "Seasonal sleeves", p: ["Many brands keep one plain tray and print new sleeves for Christmas, Valentine's and launches. That's an easy way to refresh without a new box. See [holiday boxes](/packaging/holiday-boxes) for ideas."] },
    ],
    faqs: [q("Can I order sleeves only?", "Yes, sleeves for your own trays or products."), q("Can the tray have an insert?", "Yes."), q("Rigid or folding?", "Both are available.")],
  },
  "product-boxes": {
    lede: "Whatever you sell, a product box made for it does three jobs: it protects the product, tells the customer what it is, and makes your brand look good on the shelf. We make product boxes in any size and style, printed on every side, from 100 boxes.",
    styles: ["tuck-boxes", "retail-boxes", "mailer-boxes", "rigid-boxes", "window-boxes", "display-boxes"],
    features: [f("Built around the product", "Cut to your size with inserts if needed."), f("Room for your story", "Benefits, ingredients and your brand on every side."), f("Any finish", "Matte, gloss, soft-touch, foil and spot UV."), f("Shelf and post", "Retail cartons or postable mailers.")],
    guide: [
      { h: "Where will the box be sold?", p: ["On a shelf, choose a [retail box](/packaging/retail-boxes) with a strong front panel. Online, a [mailer box](/packaging/mailer-boxes) protects in the post. For gifts and luxury, choose a [rigid box](/packaging/rigid-boxes)."] },
      { h: "Getting the artwork right", p: ["Send a logo and we'll do the layout for free. If you design yourself, our [artwork guide](/artwork-guide) covers bleed, safe areas and file types."] },
    ],
    faqs: [q("Can you make a box for any product?", "Yes, tell us the size and weight."), q("Do you help with design?", "Yes, free."), q("What's the minimum?", "100 boxes per design.")],
  },
  "retail-boxes": {
    lede: "Retail boxes need to win the few seconds a shopper spends looking at a shelf. We make shelf-ready cartons with bold front panels, windows and hang tabs, printed in full color with finishes that catch the light, from 100 boxes.",
    styles: ["product-boxes", "display-boxes", "tuck-boxes", "window-boxes", "cosmetic-boxes", "electronics-boxes"],
    features: [f("Shelf impact", "Bold front panels and premium finishes."), f("Information space", "Barcodes, claims and details on the sides."), f("Hang or stand", "Hang tabs and flat bases."), f("Display-ready", "Pair with counter displays.")],
    guide: [
      { h: "Designing for the shelf", p: ["Put your brand and the product name in the top third of the front panel; that's where eyes go first. Spot UV or foil on the logo adds shine under shop lights. Read about finishes in [packaging finishes explained](/blog/packaging-finishes-explained)."] },
      { h: "Selling at the till", p: ["Small products sell more from a [counter display box](/packaging/display-boxes). For pegboards, choose [hang tab boxes](/packaging/hang-tab-boxes). Our [retail industry page](/industries/retail) has more ideas."] },
    ],
    faqs: [q("Can you add a barcode?", "Yes, send us the barcode file."), q("Do you make shelf-ready displays?", "Yes."), q("Can retail boxes have a window?", "Yes.")],
  },
  "favor-boxes": {
    lede: "Favor boxes turn a small thank-you into something guests remember. We make little printed boxes for weddings, birthdays, baby showers and corporate events, in pillow, gable, cube and two-piece styles, with names, dates and logos, from 100 boxes.",
    styles: ["pillow-boxes", "gable-boxes", "macaron-boxes", "candy-boxes", "invitation-boxes", "ribbon-boxes"],
    features: [f("Personalized", "Names, dates and messages."), f("Lots of shapes", "Pillow, gable, cube and two-piece."), f("Sweet-ready", "Food-grade board for treats."), f("Small runs", "Perfect for one event.")],
    guide: [
      { h: "Matching your event", p: ["Match your favor boxes with [invitation boxes](/packaging/invitation-boxes) for a wedding that feels planned down to the last detail. For sweets, see [candy boxes](/packaging/candy-boxes) and [macaron boxes](/packaging/macaron-boxes)."] },
    ],
    faqs: [q("Can each box have a guest name?", "Ask us; we can print names or add name stickers."), q("Are favor boxes food-safe?", "Yes, with food-grade board."), q("What's the minimum?", "100 boxes.")],
  },
  "spouted-pouches": {
    lede: "Spouted pouches are a lighter, lower-waste alternative to bottles and jars for drinks, sauces, baby food and refills. We print them in full color on food-safe barrier film, with a spout and cap sized to your product, ready to fill.",
    styles: ["mylar-bags", "coffee-packaging", "food-boxes", "health-boxes", "labels-and-stickers", "display-boxes"],
    features: [f("Lighter than bottles", "Less weight, lower shipping costs."), f("Barrier film", "Keeps liquids fresh."), f("Stands up", "Gusseted base for shelves."), f("Full color", "Printed edge to edge.")],
    guide: [
      { h: "Pouch or bottle?", p: ["Pouches use less material and ship flat before filling. They're popular for refills, smoothies and baby food. For dry products, see [mylar bags](/packaging/mylar-bags)."] },
    ],
    faqs: [q("Are spouted pouches food-safe?", "Yes, made with food-grade film."), q("Can I choose the spout size?", "Yes."), q("Do you fill the pouches?", "No, we supply them empty and ready to fill.")],
  },
  "paper-bags": {
    lede: "A branded paper bag walks your logo down the high street after every sale. We make kraft and white paper bags with twisted, flat or rope handles, printed in one color or full color, for shops, events and takeaway, from 100 bags.",
    styles: ["tote-bags", "poly-bags", "kraft-boxes", "food-boxes", "chinese-takeout-boxes", "wrapping-paper"],
    features: [f("Walking advert", "Your brand on every street."), f("Handle choices", "Twisted, flat or rope."), f("Kraft or white", "Natural or bright."), f("Food-safe options", "For bakeries and takeaway.")],
    guide: [
      { h: "Choosing a handle", p: ["Twisted paper handles are strong and recyclable. Rope handles feel more premium for boutiques. Flat handles suit takeaway. Want something reusable? See [tote bags](/packaging/tote-bags)."] },
    ],
    faqs: [q("Are paper bags recyclable?", "Yes."), q("Can you print both sides?", "Yes."), q("What's the minimum?", "100 bags.")],
  },
  "tote-bags": {
    lede: "A good tote bag gets used for years, which makes it one of the longest-lasting adverts you can buy. We print reusable totes in cotton, canvas, jute and non-woven fabric with your logo or artwork, for shops, events and merchandise.",
    styles: ["paper-bags", "poly-bags", "apparel-boxes", "gift-boxes", "hang-tags", "labels-and-stickers"],
    features: [f("Long-lasting", "Reused for years."), f("Fabric choices", "Cotton, canvas, jute and non-woven."), f("Merch-ready", "Sell them or give them away."), f("Gussets and pockets", "Options for bigger loads.")],
    guide: [
      { h: "Totes as merchandise", p: ["Many brands sell totes as merch, then pair them with [hang tags](/packaging/hang-tags). For one-off carry-outs, a [paper bag](/packaging/paper-bags) costs less."] },
    ],
    faqs: [q("Which fabric is most durable?", "Heavy cotton canvas."), q("Can you print full color?", "Yes, depending on the fabric."), q("Do you make jute bags?", "Yes.")],
  },
  "poly-bags": {
    lede: "Poly mailer bags are the lightest way to post clothing and soft goods, which keeps postage costs down. We print them in full color with your branding, with a strong self-seal strip and an optional second strip for easy returns.",
    styles: ["mailer-boxes", "paper-bags", "apparel-boxes", "labels-and-stickers", "tote-bags", "shipping-boxes"],
    features: [f("Very light", "Lower postage on every order."), f("Tamper-evident seal", "Strong self-seal strip."), f("Returns strip", "Optional second seal for returns."), f("Full color", "Bold branding on the doorstep.")],
    guide: [
      { h: "Poly mailer or mailer box?", p: ["Poly mailers are cheaper to ship for soft items. Use a [mailer box](/packaging/mailer-boxes) when you want a better unboxing or the product needs protection. Our [apparel boxes](/packaging/apparel-boxes) page compares both."] },
    ],
    faqs: [q("Can I get recycled poly mailers?", "Ask us; recycled content options are available."), q("Is there a returns strip?", "Yes, optional."), q("What sizes are available?", "Any size, made to fit.")],
  },
  "hang-tags": {
    lede: "Hang tags give clothes and products a finished, professional look and carry your price, size and story. We print swing tags on thick card with string, safety pins or ribbon, with foil, embossing and rounded corners, from 100 tags.",
    styles: ["labels-and-stickers", "apparel-boxes", "tote-bags", "business-card-boxes", "wrapping-paper", "poly-bags"],
    features: [f("Thick card", "Feels premium in the hand."), f("Finishing touches", "Foil, embossing and rounded corners."), f("String included", "String, safety pins or ribbon."), f("Any shape", "Die-cut to your design.")],
    guide: [
      { h: "What to print on a hang tag", p: ["Front: your logo. Back: price, size, care and a short line about your brand. Pair with matching [labels and stickers](/packaging/labels-and-stickers) and an [apparel box](/packaging/apparel-boxes)."] },
    ],
    faqs: [q("Do tags come with string?", "Yes, string or pins included on request."), q("Can tags be die-cut?", "Yes."), q("Can you print both sides?", "Yes.")],
  },
  "tin-packaging": {
    lede: "Printed tins feel solid and premium, and customers keep them long after the product is gone. We make tins for tea, candles, mints, cosmetics and gifts, with hinged, slip or screw lids, printed with your design.",
    styles: ["candle-boxes", "tea-packaging", "round-boxes", "cosmetic-jars", "gift-boxes", "labels-and-stickers"],
    features: [f("Reusable", "Customers keep tins for years."), f("Airtight options", "Good for tea and mints."), f("Lid choices", "Hinged, slip or screw."), f("Print or label", "Direct print or a printed label.")],
    guide: [
      { h: "Printing or labeling a tin", p: ["Directly printed tins look the most premium. For smaller runs, a plain tin with a printed [label](/packaging/labels-and-stickers) is a smart start. Tins also pair well with a [candle box](/packaging/candle-boxes) outer."] },
    ],
    faqs: [q("Are tins food-safe?", "Yes, food-grade tins are available."), q("Can you print the lid only?", "Yes."), q("What lid styles are available?", "Hinged, slip and screw.")],
  },
  "wrapping-paper": {
    lede: "Branded wrapping and tissue paper turns an ordinary order into a gift. We print gift wrap and tissue with your logo or pattern, in sheets or rolls, so every package you send looks like it came from a boutique.",
    styles: ["gift-boxes", "mailer-boxes", "labels-and-stickers", "ribbon-boxes", "paper-bags", "hang-tags"],
    features: [f("Your pattern", "Logo repeats or custom artwork."), f("Tissue or wrap", "Light tissue or heavier gift wrap."), f("Sheets or rolls", "Whatever suits your packing."), f("Unboxing upgrade", "Low cost, big impact.")],
    guide: [
      { h: "Building a branded unboxing", p: ["Line a [mailer box](/packaging/mailer-boxes) with printed tissue and seal it with a [sticker](/packaging/labels-and-stickers). It's one of the cheapest ways to make orders feel special."] },
    ],
    faqs: [q("Can you print tissue paper?", "Yes, one or two colors."), q("Rolls or sheets?", "Both."), q("Is it recyclable?", "Yes, paper-based.")],
  },
  "cosmetic-jars": {
    lede: "Jars of cream, balm and butter are often heavy glass and easy to crack, so they need a box built around them. We make jar boxes with collars and inserts that hold the jar centered, finished to match your skincare line, from 100 boxes.",
    styles: ["cream-boxes", "lotion-boxes", "cosmetic-boxes", "candle-boxes", "tin-packaging", "labels-and-stickers"],
    features: [f("Jar collar insert", "Keeps the jar centered and safe."), f("Premium finishes", "Soft-touch, foil and emboss."), f("Square or round", "Cube cartons or round boxes."), f("Labels to match", "Lid and jar labels too.")],
    guide: [
      { h: "Protecting glass jars", p: ["A card collar insert stops the jar from touching the walls. For posting, use thin E-flute. See also [cream boxes](/packaging/cream-boxes) and our [cosmetics industry page](/industries/cosmetics)."] },
    ],
    faqs: [q("Do jar boxes include inserts?", "Yes."), q("Can you print jar labels?", "Yes, see [labels and stickers](/packaging/labels-and-stickers)."), q("Will glass jars survive the post?", "With an insert and a sturdy outer, yes.")],
  },
  "soap-boxes": {
    lede: "Soap is sold on scent and feel, so the box should let people see and smell it. We make soap boxes with cut-out windows, sleeves and kraft cartons for handmade and luxury soaps, bath bombs and bars, from 100 boxes.",
    styles: ["kraft-boxes", "window-boxes", "trays-and-sleeves", "lotion-boxes", "labels-and-stickers", "gift-boxes"],
    features: [f("Breathable cut-outs", "Let the scent through."), f("Sleeves", "A simple wrap around the bar."), f("Natural kraft", "Suits handmade soaps."), f("Gift sets", "Multi-bar boxes.")],
    guide: [
      { h: "Sleeve, window or full box?", p: ["A [sleeve](/packaging/trays-and-sleeves) is the cheapest and lets customers smell the soap. A window box protects more. A full box suits liquid soap and gift sets."] },
    ],
    faqs: [q("Can customers smell the soap through the box?", "Yes, with cut-outs or a sleeve."), q("Do you make kraft soap boxes?", "Yes."), q("Can you make gift sets?", "Yes, with inserts.")],
  },
  "jewelry-boxes": {
    lede: "Jewelry is precious, and the box is part of the gift. We make ring, earring, necklace and bracelet boxes in rigid board with velvet, foam or card inserts, finished with foil, soft-touch and embossing, from 100 boxes.",
    styles: ["rigid-boxes", "gift-boxes", "pillow-boxes", "two-piece-boxes", "ribbon-boxes", "tie-boxes"],
    features: [f("Velvet and foam inserts", "Hold each piece securely."), f("Ring, necklace, bracelet", "Box shapes for every piece."), f("Luxury finishes", "Foil, embossing and soft-touch."), f("Keepsake boxes", "Kept long after the gift.")],
    guide: [
      { h: "Choosing a jewelry box", p: ["Drawer and magnetic boxes feel premium; two-piece boxes are classic. For budget-friendly gift wrap, a [pillow box](/packaging/pillow-boxes) is lovely for bracelets and earrings."] },
    ],
    faqs: [q("Do jewelry boxes include inserts?", "Yes, velvet, foam or card."), q("Can you foil the logo?", "Yes."), q("What's the minimum?", "100 boxes.")],
  },
};
