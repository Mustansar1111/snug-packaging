/**
 * Extra guide sections and FAQs for product pages that started out short,
 * so each page answers its own buyers' questions instead of leaning on shared template text.
 * Merged into each product's rich content in products.ts.
 */
type Extra = { guide: { h: string; p: string[] }[]; faqs: { q: string; a: string }[] };

export const productExtras: Record<string, Extra> = {
  // ---------- Cosmetics ----------
  "eyeliner-boxes": {
    guide: [
      { h: "Pencil, pen or liquid liner?", p: ["Pencils need a carton that stops the tip snapping, so we keep the inside width tight. Liquid and pen liners are heavier at the cap end, and a reverse tuck with a dust flap holds them better than a sleeve. Tell us which type you sell and we'll set the dieline to match."] },
      { h: "Fitting everything on a narrow panel", p: ["A liner box can be under 2 cm wide, so the front should carry just your logo and the shade. Ingredients, barcode and batch codes sit on the back and sides. Our [artwork guide](/artwork-guide) shows the safe areas so nothing lands on a fold."] },
    ],
    faqs: [
      { q: "Can you make a box for a set of three liners?", a: "Yes. A flat box with a card insert holds three or four liners side by side, which makes an easy gift set." },
      { q: "What is the smallest liner box you can make?", a: "Send us the length and widest point of your liner, cap included. We can make very slim cartons, and we'll tell you if a size is too small to fold cleanly." },
    ],
  },
  "eyeshadow-boxes": {
    guide: [
      { h: "Palettes need a flat, firm box", p: ["Pressed powder cracks if it's dropped or bent, so palettes travel best in a flat rigid box or a thick card sleeve with a snug tray. A [magnetic closure box](/packaging/magnetic-closure-boxes) makes a palette feel like a gift, while a printed sleeve keeps single pans affordable."] },
      { h: "Show the shades on the outside", p: ["People want to see the colors before they buy. Print a shade map on the back, or add a small window over the pans. Foil or holographic details on the lid work well for limited editions."] },
    ],
    faqs: [
      { q: "Do you make boxes for single eyeshadow pans?", a: "Yes, small tuck cartons or sleeves cut to the pan size, cheap enough to print for every shade." },
      { q: "Can the palette box include a mirror?", a: "We make the outer box. If your palette has a built-in mirror, we'll size the box around it, so include the full dimensions in your quote." },
    ],
  },
  "lotion-boxes": {
    guide: [
      { h: "Bottle, pump or tube?", p: ["Pump bottles are tall and top-heavy, so they need a tight fit at the shoulder or a card insert around the neck. Tubes sit better in a slim tuck box. Send us your container size and we'll suggest the shape and board."] },
      { h: "Room for the label details", p: ["Lotions usually carry ingredients, directions and a batch code. A taller carton gives more room on the side panels, so the front can stay clean. We print the wording you supply, so check the labeling rules in each country you sell in."] },
    ],
    faqs: [
      { q: "Can lotion boxes be made from kraft?", a: "Yes. Kraft suits natural and organic body care, and it prints well in one or two colors." },
      { q: "Do you make gift sets with lotion and other products?", a: "Yes. A two-piece or magnetic box with a card insert can hold a lotion with a body wash, soap or candle." },
    ],
  },
  "cream-boxes": {
    guide: [
      { h: "Keep the jar still", p: ["Glass cream jars are heavy for their size and rattle in a box that's too big. A card collar insert holds the jar in the center and costs far less than foam. For premium creams, a rigid box with a fitted insert feels more special."] },
      { h: "Finishes that suit skincare", p: ["Clean, simple design sells skincare. Soft-touch with a single foil logo is a classic, and a debossed logo on uncoated card has a quiet, natural feel. See [cosmetic jar boxes](/packaging/cosmetic-jars) for more jar options."] },
    ],
    faqs: [
      { q: "What board do you recommend for cream boxes?", a: "16–18pt SBS card for most creams. For heavy glass jars or gift sets, a rigid box or a corrugated insert is safer." },
      { q: "Can you print inside the cream box?", a: "Yes. A short note or a pattern inside the lid is a nice touch that costs little extra." },
    ],
  },
  "nail-polish-boxes": {
    guide: [
      { h: "Single bottles and sets", p: ["Single nail polish cartons are small and cheap to print for every shade. Sets of three to six bottles usually go in a flat box with a card insert, which makes a ready-made gift for the holidays."] },
      { h: "Showing the shade", p: ["A small window on the front lets people see the real color. If you'd rather keep the box fully printed, add a printed swatch and the shade name to the front panel."] },
    ],
    faqs: [
      { q: "Can nail polish boxes have a hang tab?", a: "Yes. A hang tab lets the box hang on retail pegs next to other beauty products." },
      { q: "Do you make boxes for nail kits with tools?", a: "Yes. Tell us what goes in the kit and we'll design an insert with a slot for each item." },
    ],
  },
  "hair-extension-boxes": {
    guide: [
      { h: "Rigid boxes for a premium feel", p: ["Hair extensions sell at a premium, so the box needs to look the part. Most brands choose a [magnetic closure box](/packaging/magnetic-closure-boxes) or a [drawer box](/packaging/drawer-boxes) with a satin or card insert that holds the bundle flat."] },
      { h: "Labels for lengths and textures", p: ["If you sell many lengths and textures, keep one box design and add a small printed [label](/packaging/labels-and-stickers) for each. You get a consistent look without paying for a separate box per product."] },
    ],
    faqs: [
      { q: "Can you add a window to show the hair?", a: "Yes. A clear window on the lid shows the color and texture without opening the box." },
      { q: "Do you make boxes for wigs?", a: "Yes. Wig boxes are larger and often need a stand or insert. Send us the size and we'll quote." },
    ],
  },
  "makeup-boxes": {
    guide: [
      { h: "Kits, PR boxes and subscriptions", p: ["Makeup boxes often hold several products at once, for PR kits, influencer mailers or monthly subscriptions. A printed [mailer box](/packaging/mailer-boxes) with a custom insert keeps everything in place in the post, and inside print looks great on camera."] },
      { h: "Inserts that fit every product", p: ["Send us the size of each item and we'll design a card or foam insert with a cut-out for each one. Card is cheaper and recyclable; foam feels more premium and protects glass."] },
    ],
    faqs: [
      { q: "Can you make a box for a full makeup kit?", a: "Yes. Tell us what goes in it and we'll design the box and insert together." },
      { q: "What is the best box for makeup PR packages?", a: "A printed mailer or a magnetic box with an insert. Both look great on video and travel well." },
    ],
  },
  "bath-bomb-boxes": {
    guide: [
      { h: "Protecting fragile bath bombs", p: ["Bath bombs crumble when they knock together. A small cube box, or a box with a round cut-out insert, keeps each one still. Shrink-wrap the bomb first so it stays dry and doesn't stain the box."] },
      { h: "Gift sets and displays", p: ["Three, four or six-bomb gift sets in a window box sell well around the holidays. For shops, a [display box](/packaging/display-boxes) by the till holds singles in bright colors."] },
    ],
    faqs: [
      { q: "Will bath bombs stain the box?", a: "Oils and colors can mark uncoated card. Wrap the bath bomb first or choose a coated board, and the box stays clean." },
      { q: "Can I order round boxes for bath bombs?", a: "Yes. See our [round boxes](/packaging/round-boxes), or choose a cube box with a round insert, which costs less." },
    ],
  },
  "cbd-oil-boxes": {
    guide: [
      { h: "A secure fit for dropper bottles", p: ["Glass dropper bottles need a snug carton or a neck insert so they don't rattle or crack. We size the box to your bottle, dropper cap included, and add an insert for sets."] },
      { h: "Space for the details", p: ["CBD packaging usually carries the strength, ingredients, a batch code or a QR code to lab results, and any warnings your market requires. We leave room on the side and back panels. You supply the wording, so check the rules where you sell."] },
    ],
    faqs: [
      { q: "Can you print a QR code for lab results?", a: "Yes. Send us the link and we'll place the code where it scans easily." },
      { q: "What bottle sizes do you make boxes for?", a: "Any size. 10 ml, 15 ml and 30 ml droppers are common, but every box is cut to your exact bottle." },
    ],
  },
  "cbd-gummies-boxes": {
    guide: [
      { h: "Jars, pouches or boxes?", p: ["Gummies are sold in jars, pouches and boxes. A printed carton around a jar gives more space for branding, while a resealable [stand-up pouch](/packaging/stand-up-pouches) is lighter and cheaper to ship. Some brands use both: a pouch inside a printed box for retail."] },
      { h: "Clear information on the box", p: ["Put the strength per gummy and the count on the front, where people look first. Ingredients, allergens and warnings go on the back. Keep the design friendly but clear, and check the rules in each market."] },
    ],
    faqs: [
      { q: "Do you make child-resistant packaging?", a: "Child-resistant closures are usually part of the jar or pouch, not the printed box. Tell us what you need and we'll advise on what's possible." },
      { q: "Can gummy boxes have a window?", a: "Yes, as long as the gummies are in a sealed jar or pouch inside." },
    ],
  },
  "e-liquid-boxes": {
    guide: [
      { h: "Sized to the bottle", p: ["E-liquid bottles range from 10 ml to 100 ml shortfills. We cut each carton to your bottle so it doesn't move, which also protects the nozzle."] },
      { h: "Room for warnings", p: ["Most markets require health warnings and nicotine information on e-liquid packaging, sometimes covering a set share of a panel. We leave the space you need; the exact wording and size rules are yours to confirm for each market."] },
    ],
    faqs: [
      { q: "Can each flavor have its own design?", a: "Yes. Each design starts at 100 boxes, or keep one box and print flavor labels to save money." },
      { q: "Do you make multipack e-liquid boxes?", a: "Yes, with an insert that holds three, four or more bottles." },
    ],
  },
  "medicine-boxes": {
    guide: [
      { h: "Clear, readable print", p: ["Medicine boxes need small text that stays sharp: dosage, ingredients, batch and expiry. We print on smooth white SBS card, which gives the cleanest small type, and leave a plain area if you add batch and expiry codes later."] },
      { h: "Tamper-evident options", p: ["A tamper-evident seal or tear strip shows customers the box hasn't been opened. Tell us in your quote and we'll suggest the right closure for your carton."] },
    ],
    faqs: [
      { q: "Can you print Braille on medicine boxes?", a: "Ask in your quote. Braille embossing needs special tooling, and we'll confirm whether it's possible for your order." },
      { q: "Who is responsible for the regulatory text?", a: "You supply the approved wording and we print it exactly as given. We'll flag anything that looks too small to read." },
    ],
  },
  // ---------- Food and bakery ----------
  "cake-boxes": {
    guide: [
      { h: "Tall and tiered cakes", p: ["Tiered and celebration cakes need extra height and a stronger base. For anything over two tiers we suggest E-flute corrugated with a separate cake board and a lift-off lid, so the cake slides in from the side instead of being lowered in from the top."] },
      { h: "Window or plain lid?", p: ["A window lid shows off the decoration at the counter. A plain printed lid gives more space for your logo and works better for gifts. See [window boxes](/packaging/window-boxes) for more options."] },
    ],
    faqs: [
      { q: "Can cake boxes come with a cake board?", a: "Yes. We can supply matching printed or plain boards cut to the inside size of the box." },
      { q: "Do cake boxes ship flat?", a: "Yes. They arrive flat and fold up in seconds, so they take little space in a busy bakery." },
    ],
  },
  "cupcake-boxes": {
    guide: [
      { h: "Inserts for 1, 2, 4, 6 or 12", p: ["The insert is what makes a cupcake box work. Each cupcake sits in its own cut-out, so the frosting never touches the lid or its neighbor. Tell us how many you sell together and how tall the frosting is."] },
      { h: "A box that gets carried around", p: ["Cupcake boxes travel to offices, parties and birthdays, so they get seen. A bold logo on the lid and your website or Instagram handle on the side turn every box into a small advert for your bakery."] },
    ],
    faqs: [
      { q: "Can I get cupcake boxes with a window?", a: "Yes. A window lid shows the frosting without opening the box." },
      { q: "Are the inserts food safe?", a: "Yes, they're made from food-grade card." },
    ],
  },
  "donut-boxes": {
    guide: [
      { h: "Half dozen, dozen or singles", p: ["Most shops need two or three sizes: a single or double for walk-ins, plus a half dozen and a dozen for sharing. Grease-resistant board stops glaze and oil soaking through, so the box still looks clean when it's opened at the office."] },
      { h: "Make the lid count", p: ["A donut box lid is a big flat space. Use it for a bold logo or a pattern people recognize from across the room, or add a window and let the toppings do the selling."] },
    ],
    faqs: [
      { q: "Will glaze stick to the box?", a: "We use grease-resistant food-grade board. For very sticky toppings, add a sheet of greaseproof paper inside." },
      { q: "Can you make a box for mini donuts?", a: "Yes. Tell us the size and count and we'll design an insert or a shallow tray box." },
    ],
  },
  "cookie-boxes": {
    guide: [
      { h: "Stacked, flat or in a sleeve", p: ["Cookies can stand on edge in a long box, lie flat in a tray, or slide into a printed sleeve. Stacked cookies stay fresher in a sealed bag inside the box; decorated cookies look best laid flat under a window."] },
      { h: "Cookie gift boxes", p: ["For gifting, a [tray and sleeve](/packaging/trays-and-sleeves) or a two-piece box with tissue inside feels special without the cost of a rigid box. A foil sticker seal is a nice holiday touch."] },
    ],
    faqs: [
      { q: "Can cookies go straight into the box?", a: "Yes, the board is food grade. For oily or very fresh cookies, a greaseproof liner keeps the box clean." },
      { q: "Do you make boxes for decorated sugar cookies?", a: "Yes. Flat window boxes with an insert keep the icing from scraping on the lid." },
    ],
  },
  "macaron-boxes": {
    guide: [
      { h: "Rows and trays", p: ["Macarons are fragile, so they travel in a tray with a row or a cut-out for each one. Popular sizes hold 2, 6, 12 or 24. A window or a clear tray shows the colors, which is a big part of why people buy them."] },
      { h: "Luxury macaron gifts", p: ["For weddings and corporate gifts, a [drawer box](/packaging/drawer-boxes) with a ribbon pull makes a lovely reveal. Small two-macaron boxes are a popular wedding favor too."] },
    ],
    faqs: [
      { q: "What size macaron box do I need?", a: "Tell us the diameter of your macarons and how many go in each box, and we'll size the tray to match." },
      { q: "Do macaron boxes keep them fresh?", a: "The box protects them. For freshness, keep them chilled and sealed as you normally would." },
    ],
  },
  "popcorn-boxes": {
    guide: [
      { h: "Cinemas, events and gifts", p: ["Open-top popcorn boxes are quick to fill at cinemas, fairs and events. For gourmet popcorn sold in shops, a closed box or a printed [stand-up pouch](/packaging/stand-up-pouches) keeps it crisp for longer."] },
      { h: "Grease and butter", p: ["Butter and caramel can mark ordinary card. We use a grease-resistant coating on food-grade board, so the print stays clean until the last handful."] },
    ],
    faqs: [
      { q: "Can popcorn boxes be printed all the way around?", a: "Yes, with classic stripes or your own branding on every side." },
      { q: "Do you make small popcorn boxes for weddings and parties?", a: "Yes. Favor-size boxes are popular for weddings, birthdays and movie nights." },
    ],
  },
  "chinese-takeout-boxes": {
    guide: [
      { h: "Not just for noodles", p: ["The folded takeout pail holds noodles and rice, but it's also used for salads, sweets, party favors and small gifts. The folded top closes without tape and can open out into a bowl."] },
      { h: "Grease and moisture", p: ["For hot, saucy food, ask for a coated food-grade board that resists grease and moisture. For dry items and gifts, plain kraft looks great and costs less."] },
    ],
    faqs: [
      { q: "Do takeout boxes come with a wire handle?", a: "They can be made with or without one. Tell us which you need in the quote form." },
      { q: "Are takeout boxes microwave safe?", a: "Boxes without a metal handle are usually fine for short reheating. Check with us for your board and coating." },
    ],
  },
  "sandwich-boxes": {
    guide: [
      { h: "Wedge or rectangle?", p: ["Triangle wedge packs suit cut sandwiches in cafes and shops. A rectangular box with a window works better for wraps, baguettes and subs. Both can carry your branding and allergen details."] },
      { h: "Standing out in the fridge", p: ["In a fridge full of sandwiches, a strong brand color and a big name on the front help people find yours. Keep ingredients and allergens easy to read on the side or back."] },
    ],
    faqs: [
      { q: "Can sandwich boxes have a window?", a: "Yes. A clear window shows the filling, which helps sales in display fridges." },
      { q: "Are the boxes fine in the fridge?", a: "Yes. The board is food grade and holds up well to chilled storage." },
    ],
  },
  "fries-boxes": {
    guide: [
      { h: "Scoops, cones and trays", p: ["The open scoop is the classic: quick to fill and easy to eat from. For loaded fries with toppings, a tray or a lidded box works better. Street food stalls often use paper [cone sleeves](/packaging/cone-sleeves) instead."] },
      { h: "Size your range", p: ["Most shops need two or three sizes so portions look consistent. Print the same design on each, and customers quickly learn to spot your brand."] },
    ],
    faqs: [
      { q: "Will fries boxes go soggy?", a: "We use grease-resistant food-grade board that holds its shape while people eat." },
      { q: "Can I get kraft fries boxes?", a: "Yes. Brown kraft suits burger joints and street food brands." },
    ],
  },
  "candy-boxes": {
    guide: [
      { h: "Pick-and-mix, bars and gifts", p: ["Candy comes in all shapes, so the box varies too: a window box for pick-and-mix, a slim carton for bars, or a gift box with dividers for an assortment. Tell us what you sell and we'll suggest the best fit."] },
      { h: "Seasonal designs", p: ["Candy sells around the holidays. Low minimums mean you can print a design for Halloween, Christmas or Valentine's Day without a big stock commitment."] },
    ],
    faqs: [
      { q: "Is the board safe for unwrapped candy?", a: "Yes, it's food grade. For sticky, unwrapped candy, a liner bag inside is a good idea." },
      { q: "Can candy boxes hang on retail pegs?", a: "Yes, we can add a hang tab." },
    ],
  },
  "truffle-boxes": {
    guide: [
      { h: "A place for each truffle", p: ["Truffles look best when each one has its own spot. A card or clear insert with round cut-outs keeps them apart, and glassine cups add a classic chocolatier touch."] },
      { h: "A luxury feel", p: ["Truffles are often bought as gifts, so a rigid [luxury box](/packaging/luxury-boxes) with foil, or a [drawer box](/packaging/drawer-boxes) with a ribbon pull, matches the price of what's inside."] },
    ],
    faqs: [
      { q: "How many truffles can a box hold?", a: "Any number. Popular sizes are 4, 9, 16 and 25." },
      { q: "Can I add a flavor card?", a: "Yes. A printed card inside the lid shows which truffle is which." },
    ],
  },
  "cone-sleeves": {
    guide: [
      { h: "For ice cream cones", p: ["Cone sleeves wrap ice cream cones, catch drips and give people something clean to hold. Printed with your brand, every cone walking down the street carries your logo."] },
      { h: "Paper food cones", p: ["Open paper cones are used for fries, churros, popcorn and street food. They're quick to fill and easy to eat from on the move. Pair them with [fries boxes](/packaging/fries-boxes) for a consistent look."] },
    ],
    faqs: [
      { q: "What sizes do cone sleeves come in?", a: "They're made to fit your cones. Send us the cone size and we'll set up the dieline." },
      { q: "Are cone sleeves food safe?", a: "Yes, we print them on food-grade paper and board." },
    ],
  },
  // ---------- Gifts, retail and hobby ----------
  "book-boxes": {
    guide: [
      { h: "Book-style boxes vs boxes for books", p: ["A book-style box opens like a hardback, with a hinged cover and often a magnetic closure. It's used for luxury gifts, jewelry and special editions. A box for books, on the other hand, is usually a sturdy [mailer](/packaging/mailer-boxes) or slipcase that protects corners in the post."] },
      { h: "Slipcases and box sets", p: ["Publishers and authors use printed slipcases to hold a series together on a shelf. Tell us the size of each book and how many go in the set, and we'll make the case to fit with a little room to slide them out."] },
    ],
    faqs: [
      { q: "Can you make a box for a book box set?", a: "Yes, as a rigid slipcase or a two-piece box with a printed wrap." },
      { q: "Do you make mailer boxes for posting books?", a: "Yes. A corrugated mailer with a snug fit protects the corners, which is where books usually get damaged." },
    ],
  },
  "game-boxes": {
    guide: [
      { h: "Board games and card games", p: ["Board games usually come in a two-piece rigid box with a lift-off lid, which is strong enough to stack on a shelf for years. Card games and small party games suit a tuck box or a small two-piece box. Tell us what's inside and we'll suggest the right size."] },
      { h: "Inserts to keep the pieces in order", p: ["A card insert with wells for cards, dice, tokens and the board stops everything sliding around and makes setting up the game easier. We design inserts around your components."] },
    ],
    faqs: [
      { q: "Can you make boxes for a Kickstarter game?", a: "Yes. Low minimums suit prototypes and first runs, and we can quote larger numbers once your campaign funds." },
      { q: "Do you print the game board too?", a: "We focus on boxes and packaging. Tell us what you need and we'll let you know what we can include." },
    ],
  },
  "toy-boxes": {
    guide: [
      { h: "Window boxes sell toys", p: ["Parents and kids want to see the toy, so window boxes are the most popular choice in shops. A clear window on the front, with a card insert holding the toy in place, works for dolls, cars and figures."] },
      { h: "Safety information", p: ["Toy packaging often carries age warnings and safety marks required in the markets where it's sold. We leave space on the box for them. The wording and marks are yours to supply."] },
    ],
    faqs: [
      { q: "Can toy boxes hang on store hooks?", a: "Yes, with a hang tab at the top." },
      { q: "Can you make boxes for plush toys?", a: "Yes. Plush toys suit window boxes, gable boxes with a handle, or simple printed mailers for online orders." },
    ],
  },
  "playing-card-boxes": {
    guide: [
      { h: "Standard tuck or premium case", p: ["Most decks go in a tuck box made from 16–18pt card, cut to fit the deck closely. For collector decks, a rigid two-piece box or a box with foil, embossing and a printed inside feels worth keeping."] },
      { h: "Tarot, oracle and game cards", p: ["Tarot and oracle decks are bigger than standard playing cards and often come with a guidebook, so the box needs extra depth. Send us the card size and the book thickness."] },
    ],
    faqs: [
      { q: "Can you make a box for tarot cards?", a: "Yes, sized for the deck and the guidebook, in a tuck box, a two-piece box or a magnetic box." },
      { q: "Do you print the cards?", a: "We focus on the packaging. Tell us what you need in your quote and we'll let you know what we can help with." },
    ],
  },
  "invitation-boxes": {
    guide: [
      { h: "Weddings and events", p: ["Boxed invitations are popular for weddings, launches and corporate events because they make the invite feel like a gift. A rigid box with the couple's names in foil on the lid, and the invitation inside on a card insert, is a classic."] },
      { h: "Posting a boxed invitation", p: ["Boxed invitations are heavier and thicker than envelopes, so they usually need a padded envelope or a slim outer [mailer box](/packaging/mailer-boxes). Plan this early so postage doesn't come as a surprise."] },
    ],
    faqs: [
      { q: "Can each invitation box have the guest's name?", a: "Ask us in your quote. Printing a different name on each box is possible on some print methods, and we'll confirm the options." },
      { q: "Can I put small gifts in the invitation box?", a: "Yes. Add a card insert with space for a small gift, sweets or a save-the-date magnet." },
    ],
  },
  "business-card-boxes": {
    guide: [
      { h: "A box that makes cards feel special", p: ["Business cards usually arrive in plain white boxes. A printed box with your logo on the lid turns them into something you're proud to hand over, and it's a nice detail for client gifts and welcome kits."] },
      { h: "Sizes and quantities", p: ["Standard boxes hold around 250 or 500 cards. If your cards are thick or a non-standard size, tell us the card size and thickness and we'll fit the box to them."] },
    ],
    faqs: [
      { q: "Do you print the business cards too?", a: "We focus on the boxes. Tell us what you need in the quote form." },
      { q: "Can business card boxes be made with a slide-out drawer?", a: "Yes. A small [drawer box](/packaging/drawer-boxes) is a stylish option for premium cards." },
    ],
  },
  "tie-boxes": {
    guide: [
      { h: "Flat box or rolled tie box", p: ["Ties are either folded flat in a long slim box or rolled in a square box. Flat boxes suit retail and gift sets; rolled ties look neat in a square box with a window or a magnetic lid."] },
      { h: "Gift sets", p: ["Ties are often sold with cufflinks, a tie clip or a pocket square. A box with a card or foam insert holds each piece in place and makes an easy ready-to-give gift."] },
    ],
    faqs: [
      { q: "Can tie boxes have a window?", a: "Yes. A window shows the pattern and fabric." },
      { q: "Do you make bow tie boxes?", a: "Yes, in small square or rectangular sizes, often with a magnetic lid." },
    ],
  },
  "shoe-boxes": {
    guide: [
      { h: "Strong enough to ship", p: ["Shoe boxes are stacked in stockrooms and often shipped as-is, so they need strong board. E-flute corrugated works for most shoes; a rigid two-piece box suits luxury footwear and sneaker collectors."] },
      { h: "Print the size label area", p: ["Leave a clear panel on the end for the size, color and barcode label, so staff can find the right pair quickly. The rest of the box can carry your brand."] },
    ],
    faqs: [
      { q: "Can you make shoe boxes with a lift-off lid?", a: "Yes, as a two-piece box, or a one-piece box with a hinged lid." },
      { q: "Can shoe boxes be printed inside?", a: "Yes. A printed inside lid is a popular touch for sneaker brands." },
    ],
  },
  "mug-boxes": {
    guide: [
      { h: "Shops or post?", p: ["For shops, a printed SBS tuck box with a window shows the design and keeps costs down. For online orders, mugs need a corrugated box and an insert that holds the handle and body still, or they'll chip in transit."] },
      { h: "Mug and coffee gift sets", p: ["A mug with a bag of coffee or tea makes a popular gift. A box with a two-part insert holds both. See [coffee packaging](/packaging/coffee-packaging) for the pouch."] },
    ],
    faqs: [
      { q: "Are mug boxes safe for posting?", a: "Choose corrugated board with an insert and they travel well." },
      { q: "Can I have a window to show the mug design?", a: "Yes, a die-cut window on the front or side." },
    ],
  },
  "golf-ball-boxes": {
    guide: [
      { h: "Sleeves of three and dozens", p: ["Golf balls are usually sold in sleeves of three and boxes of twelve. A printed sleeve box with a tuck end is the standard, and a dozen box holds four sleeves. Both are easy to brand for clubs, events and corporate gifts."] },
      { h: "Corporate and event gifts", p: ["Branded golf balls are a popular corporate gift. A small rigid box with a foam insert for three balls and a tee makes a gift that looks considered."] },
    ],
    faqs: [
      { q: "Do you supply the golf balls?", a: "We make the packaging only." },
      { q: "Can you make a box for a single golf ball?", a: "Yes, a small cube box or a rigid box with an insert." },
    ],
  },
  "tennis-ball-boxes": {
    guide: [
      { h: "Tubes and boxes", p: ["Tennis balls usually come in sealed tubes. A printed box can hold one or more tubes for retail or gifting, or hold loose balls for training sets and promotions."] },
      { h: "Clubs and events", p: ["Clubs and tournaments use branded ball boxes as merchandise and prizes. Low minimums mean you can print a design for a single event."] },
    ],
    faqs: [
      { q: "Do you supply tennis balls?", a: "No, we make the packaging only." },
      { q: "Can you make a box for padel balls?", a: "Yes. Send us the size and we'll make the box to fit." },
    ],
  },
  // ---------- Box styles ----------
  "cube-boxes": {
    guide: [
      { h: "Where cube boxes work best", p: ["Cube boxes suit products that are as wide as they are tall: candles, mugs, jars, bath bombs and small gifts. With four equal sides, you can print a design that works from any angle on a shelf."] },
      { h: "Tuck, two-piece or rigid", p: ["A tuck end cube is the cheapest. A two-piece cube with a lift-off lid feels more like a gift, and a rigid cube is the most premium. Inserts can hold a jar or candle in the center."] },
    ],
    faqs: [
      { q: "What size cube boxes can you make?", a: "Any size, from small favor boxes to large gift cubes." },
      { q: "Can cube boxes have a window?", a: "Yes, on any side." },
    ],
  },
  "two-piece-boxes": {
    guide: [
      { h: "Lift-off lid, full or partial", p: ["A two-piece box has a separate base and lid. A full-depth lid covers the whole base, while a shoulder or partial lid shows a band of the base underneath for a more tailored look."] },
      { h: "Uses", p: ["Two-piece rigid boxes are used for apparel, shoes, candles, gift sets and luxury products. They feel classic and make a quiet, slow unboxing. Add tissue and a sticker seal for an extra touch."] },
    ],
    faqs: [
      { q: "Are two-piece boxes rigid?", a: "They can be rigid board for luxury, or folding card when cost matters more." },
      { q: "Can the lid and base be different colors?", a: "Yes. A contrasting base is a popular design choice." },
    ],
  },
  "auto-lock-boxes": {
    guide: [
      { h: "Why choose an auto-lock bottom?", p: ["An auto-lock (crash-lock) bottom pops into shape when you open the flat box, and the base locks itself. It's faster to pack and holds heavier products, such as bottles and jars, better than a standard tuck bottom."] },
      { h: "Pair with a tuck top", p: ["Most auto-lock boxes have a tuck flap at the top for easy opening. They're a type of [folding carton](/packaging/folding-cartons), so they ship flat and keep costs low."] },
    ],
    faqs: [
      { q: "How much weight can an auto-lock box hold?", a: "It depends on the board and size. Tell us the product weight and we'll suggest a board that suits it." },
      { q: "Do auto-lock boxes cost more?", a: "A little more than a standard tuck box, but they're quicker to pack, which often saves time on bigger orders." },
    ],
  },
  "die-cut-boxes": {
    guide: [
      { h: "Custom shapes and cut-outs", p: ["A die-cut box is cut to a custom shape, or has a window, handle or cut-out pattern. Because every box is cut with a die anyway, a custom shape often costs less than people expect."] },
      { h: "Keep it practical", p: ["Very complex shapes can be harder to fold or pack. We'll check your idea on a dieline and suggest small changes that keep the look but make the box easier to assemble."] },
    ],
    faqs: [
      { q: "Is there a setup cost for a custom die?", a: "Your quote includes everything needed to make your box. We'll show the full price before you approve." },
      { q: "Can I send my own dieline?", a: "Yes. Or send your product size and we'll make one for you." },
    ],
  },
  "hang-tab-boxes": {
    guide: [
      { h: "For pegboard and hook displays", p: ["Hang tab boxes have an extra panel with a hole at the top, so they can hang on retail pegs. They're used for cosmetics, accessories, phone parts, hardware and small toys."] },
      { h: "Euro slot or round hole", p: ["A euro slot (sombrero hole) is the most common shape and fits most retail hooks. A round hole works on simple pegs. The tab can be part of the box or an extra panel glued on top."] },
    ],
    faqs: [
      { q: "Can a box have a hang tab and a window?", a: "Yes. Many retail boxes have both." },
      { q: "Will the tab tear under the product weight?", a: "We use board that suits your product weight. Tell us how heavy it is in your quote." },
    ],
  },
  "white-boxes": {
    guide: [
      { h: "Plain white or printed", p: ["White boxes are clean and modern. Leave them plain and add a printed [label](/packaging/labels-and-stickers) for a low-cost branded look, or print one color on white for a minimal design that looks expensive."] },
      { h: "Which board?", p: ["White SBS card suits retail and cosmetic boxes. White corrugated is used for mailers and shipping boxes when you want a bright outside instead of brown kraft."] },
    ],
    faqs: [
      { q: "Can I order plain white boxes without printing?", a: "Yes, made to your size. Many brands add a logo sticker." },
      { q: "Do white boxes show marks easily?", a: "Coated white board resists marks better than uncoated, and a matte lamination helps too." },
    ],
  },
  "archive-boxes": {
    guide: [
      { h: "Storage that lasts", p: ["Archive boxes hold files, documents and stock for years, so they're made from strong corrugated board, often with hand holes and a lift-off or hinged lid. They stack well on shelves."] },
      { h: "Branded storage", p: ["Printed archive boxes are used by offices, schools and retailers who want neat, branded storage, or as large gift and keepsake boxes."] },
    ],
    faqs: [
      { q: "Can archive boxes have hand holes?", a: "Yes, on the sides." },
      { q: "Do archive boxes ship flat?", a: "Yes. They fold up quickly when needed." },
    ],
  },
  "dispenser-boxes": {
    guide: [
      { h: "Tear-open dispensers", p: ["Dispenser boxes have a perforated panel that tears open to let customers take one item at a time. They're used for tea bags, gloves, sachets, snacks and samples on counters."] },
      { h: "Counter-ready branding", p: ["Because they sit on counters and shelves for weeks, the outside works as an advert. Print the front panel as a display, and the dispenser opening shows what's inside."] },
    ],
    faqs: [
      { q: "Can dispenser boxes be refilled?", a: "Usually they're single-use, but a lidded dispenser can be refilled." },
      { q: "Do you make dispenser boxes for tea bags?", a: "Yes. See [tea packaging](/packaging/tea-packaging) for more ideas." },
    ],
  },
  "ribbon-boxes": {
    guide: [
      { h: "Ribbon ties and ribbon closures", p: ["A ribbon can be tied around a box like a present, or built into the box as a closure that holds the lid shut. Built-in ribbons are quicker to pack and look neat every time."] },
      { h: "Picking the ribbon", p: ["Satin ribbon looks classic, grosgrain feels sturdier, and printed ribbon can carry your logo. Match the ribbon color to your brand, or pick a contrasting color that makes the box stand out."] },
    ],
    faqs: [
      { q: "Can the ribbon be printed with my logo?", a: "Yes. Ask for a printed ribbon in your quote." },
      { q: "Is the ribbon attached to the box?", a: "It can be glued in as a closure or supplied separately for you to tie." },
    ],
  },
};
