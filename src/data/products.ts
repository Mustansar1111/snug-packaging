import type { Category, CategoryGroup, IconKey } from "./types";
import type { RichContent } from "./content/types";
import { productExtras } from "./content/productExtras";

/**
 * Product pages: specific boxes that sit under a broader category (their `parent`).
 * Each has its own intro, guide and FAQs written for Snug, and links back to its parent and siblings.
 */
type P = Omit<Category, "group" | "icon"> & { group: CategoryGroup; icon: IconKey; parent: string; rich: RichContent };

const f = (title: string, text: string) => ({ title, text });
const q = (q: string, a: string) => ({ q, a });

const products: P[] = [
  // ---------- Cosmetics ----------
  {
    slug: "lipstick-boxes", name: "Lipstick Boxes", parent: "cosmetic-boxes", group: "industries", icon: "tall",
    intro: "Slim lipstick cartons that hold the bullet upright and show off the shade, printed to match your brand.",
    uses: ["single lipsticks", "lip sets and duos", "limited-edition shades", "gift-with-purchase"],
    style: "reverse tuck end carton or rigid drawer for sets", material: "16–18pt SBS card", finish: "soft-touch, foil and spot UV",
    tip: "Print the shade name and a color swatch on the end panel so it can be read on a shelf or in a drawer.",
    rich: {
      lede: "A lipstick box is small, but customers look at it closely. We make slim cartons with a neat fit around the tube, so the bullet never rattles, and we print the shade, swatch and your logo on every side. Add foil for launches or a window to show the color, from 100 boxes.",
      styles: ["lip-gloss-boxes", "lip-balm-boxes", "makeup-boxes", "cosmetic-boxes", "display-boxes", "labels-and-stickers"],
      features: [f("Snug fit", "Cut to your tube size so the lipstick stays upright and safe."), f("Shade-ready", "A color block or window on the front shows the shade at a glance."), f("Premium touches", "Soft-touch and gold foil make a small box feel expensive."), f("Sets and duos", "Two or three-lipstick boxes with an insert make easy gift sets.")],
      guide: [
        { h: "Single carton or set box?", p: ["Single tuck cartons are the most cost-effective way to box each shade. For gift sets, a small [rigid box](/packaging/rigid-boxes) with an insert holds two to five lipsticks side by side. See the whole range on our [cosmetic boxes](/packaging/cosmetic-boxes) page."] },
        { h: "Shelf and counter display", p: ["Selling in salons or shops? A [display box](/packaging/display-boxes) holds a row of shades at the till, while each lipstick stays in its own carton."] },
      ],
      faqs: [q("Can every shade have a different design?", "Yes. Each design has a 100-box minimum, or keep one box design and add a shade label from our [labels range](/packaging/labels-and-stickers)."), q("Can you add a window?", "Yes, a small clear window shows the bullet or the cap.")],
    },
  },
  {
    slug: "lip-gloss-boxes", name: "Lip Gloss Boxes", parent: "cosmetic-boxes", group: "industries", icon: "tall",
    intro: "Tall, slim lip gloss cartons and window trays that keep tubes upright and let the color do the selling.",
    uses: ["lip gloss tubes", "lip oil and plumpers", "gloss sets", "subscription box add-ons"],
    style: "tall tuck end carton or window tray", material: "16–18pt SBS card", finish: "gloss, holographic or foil",
    tip: "Holographic and pearl finishes suit glossy products; matte suits nude and natural ranges.",
    rich: {
      lede: "Lip gloss sells on color and shine, so the box should show both. We make tall slim cartons, window boxes and multi-tube trays that hold each wand upright and print your brand in full color, from 100 boxes. Pick a holographic or pearl finish to make the box shine like the gloss.",
      styles: ["lipstick-boxes", "lip-balm-boxes", "makeup-boxes", "window-boxes", "cosmetic-boxes", "mailer-boxes"],
      features: [f("Tall and slim", "Cut to the height of your tube with a tuck that won't pop open."), f("Shine finishes", "Holographic, gloss and foil echo the product inside."), f("Sets that sell", "Three and four-tube trays are popular gift and bundle boxes."), f("Ship-ready", "Pack sets inside a printed mailer for online orders.")],
      guide: [
        { h: "Window or no window?", p: ["A window shows the exact shade, which helps in shops. Online, a fully printed box with the shade name works just as well. More ideas on our [window boxes](/packaging/window-boxes) page."] },
        { h: "Sending gloss sets by post", p: ["Glass and plastic tubes travel best in an insert. Put the set box inside a branded [mailer box](/packaging/mailer-boxes) so it arrives looking as good as it left."] },
      ],
      faqs: [q("Can you make a box for three or four glosses?", "Yes, with a card insert that holds each tube in place."), q("Can the box be holographic?", "Yes. Holographic board or foil is one of our most popular finishes for gloss.")],
    },
  },
  {
    slug: "lip-balm-boxes", name: "Lip Balm Boxes", parent: "cosmetic-boxes", group: "industries", icon: "tall",
    intro: "Small lip balm boxes for sticks, pots and tins, as singles, multipacks or gift sets.",
    uses: ["lip balm sticks", "balm pots and tins", "multipacks", "hotel and event giveaways"],
    style: "small tuck end, sleeve or hang-tab box", material: "16–18pt SBS or kraft card", finish: "matte, gloss or kraft with one-color print",
    tip: "Kraft boxes with a simple one-color print suit natural and beeswax balms.",
    rich: {
      lede: "Lip balm is an easy impulse buy, so the box needs to catch the eye in a second. We make small tuck boxes, sleeves and hang-tab cartons for sticks, pots and tins, printed in full color or a simple one-color logo on kraft. Order from 100 boxes and refresh designs for each flavor.",
      styles: ["lipstick-boxes", "kraft-boxes", "hang-tab-boxes", "labels-and-stickers", "display-boxes", "soap-boxes"],
      features: [f("Tiny but strong", "Small cartons in sturdy card that keep sticks from snapping."), f("Hang tabs", "Add a euro hook tab for pegboard displays."), f("Natural look", "Kraft board and earthy inks suit organic balms."), f("Flavor by flavor", "Low minimums make it easy to print a box for every flavor.")],
      guide: [
        { h: "Box, sleeve or label?", p: ["A small tuck box gives the most space for ingredients and branding. A sleeve is cheaper and shows the product. For pots and tins, a printed [label](/packaging/labels-and-stickers) on the lid may be all you need."] },
        { h: "Selling at the counter", p: ["Lip balms sell well next to the till. A [counter display box](/packaging/display-boxes) holds 12 to 24 sticks, and [hang-tab boxes](/packaging/hang-tab-boxes) work on hooks."] },
      ],
      faqs: [q("Do you make boxes for lip balm tins?", "Yes, square or round cartons and sleeves cut to the tin size."), q("Is kraft lip balm packaging available?", "Yes, brown or white kraft with one or two-color print.")],
    },
  },
  {
    slug: "mascara-boxes", name: "Mascara Boxes", parent: "cosmetic-boxes", group: "industries", icon: "tall",
    intro: "Tall, narrow mascara cartons with a tight fit, so the wand stays put from factory to make-up bag.",
    uses: ["mascara tubes", "brow gels", "lash serums", "mascara and liner sets"],
    style: "tall reverse tuck end carton", material: "16–18pt SBS card", finish: "gloss, foil or spot UV",
    tip: "Put key claims like 'lengthening' or 'waterproof' on the front panel, large enough to read from a shelf.",
    rich: {
      lede: "Mascara boxes are long and narrow, which makes every millimeter of the front panel count. We cut cartons to your tube size, add a tight tuck so they stay closed, and print claims, shade and logo crisply in full color. Add spot UV or foil to stand out on a crowded shelf, from 100 boxes.",
      styles: ["eyeliner-boxes", "eyelash-boxes", "eyeshadow-boxes", "makeup-boxes", "cosmetic-boxes", "display-boxes"],
      features: [f("Exact fit", "No wobble, no wasted space, less risk of a cracked cap."), f("Clear claims", "Large, sharp type for the words that sell."), f("Pairs and sets", "Mascara and liner duo boxes with an insert."), f("Shelf shine", "Spot UV and foil catch the eye under shop lights.")],
      guide: [
        { h: "Designing a narrow box", p: ["Keep the logo and main claim on the front, the shade and ingredients on the back, and the barcode on a side. Our [artwork guide](/artwork-guide) explains safe areas so nothing is cut off at the fold."] },
        { h: "Build an eye range", p: ["Matching [eyeliner](/packaging/eyeliner-boxes) and [eyelash boxes](/packaging/eyelash-boxes) make a range look planned and help customers buy more than one item."] },
      ],
      faqs: [q("Can you make a box for mascara and eyeliner together?", "Yes, a duo box with a two-slot insert."), q("What size should my mascara box be?", "Send us the tube length and widest point; we add a little clearance and make the dieline for you.")],
    },
  },
  {
    slug: "eyelash-boxes", name: "Eyelash Boxes", parent: "cosmetic-boxes", group: "industries", icon: "rigid",
    intro: "Magnetic, drawer and window lash boxes that frame the lashes and feel like a treat to open.",
    uses: ["strip lashes", "multi-pair lash books", "lash and glue kits", "salon retail"],
    style: "magnetic flap, drawer or window box", material: "rigid chipboard or 18pt SBS", finish: "holographic, foil, soft-touch or marble print",
    tip: "A clear window that shows the lash tray sells better than a picture of the lashes.",
    rich: {
      lede: "Lash brands live on Instagram, so the box needs to look good in a photo as well as in the hand. We make magnetic, drawer and window eyelash boxes that frame the lash tray, in rigid board or folding card, with foil, holographic or marble designs, from 100 boxes.",
      styles: ["mascara-boxes", "eyeliner-boxes", "makeup-boxes", "rigid-boxes", "window-boxes", "mailer-boxes"],
      features: [f("Made to be photographed", "Clean shapes and finishes that look great on camera."), f("Window to the lashes", "Customers see the style before they open the box."), f("Kits and books", "Multi-pair lash books and lash-plus-glue kits."), f("Reusable", "Rigid lash boxes become storage, which keeps your brand on the dressing table.")],
      guide: [
        { h: "Rigid or folding?", p: ["Rigid magnetic boxes feel luxurious and are reused; folding window boxes are lighter and cheaper to ship. Many brands use rigid boxes for hero styles and folding boxes for everyday lashes. Compare them on our [rigid boxes](/packaging/rigid-boxes) page."] },
        { h: "Shipping lash orders", p: ["Lash boxes are light, so a slim [mailer box](/packaging/mailer-boxes) or padded bag works well. Add a sticker seal and a thank-you card for a proper unboxing."] },
      ],
      faqs: [q("Do you make magnetic eyelash boxes?", "Yes, in rigid board with a magnetic flap and an insert for the tray."), q("Can I get holographic lash boxes?", "Yes, holographic and iridescent finishes are very popular for lashes.")],
    },
  },
  {
    slug: "eyeliner-boxes", name: "Eyeliner Boxes", parent: "cosmetic-boxes", group: "industries", icon: "tall",
    intro: "Long, slim cartons for pencil, pen and liquid liners, single or multipack.",
    uses: ["pencil liners", "liquid and pen liners", "brow pencils", "liner sets"],
    style: "long tuck end carton or sleeve", material: "16–18pt SBS card", finish: "matte, gloss or foil",
    tip: "Add a hang tab if you plan to sell on pegboard hooks.",
    rich: {
      lede: "Eyeliners are long and thin, which makes a well-made box surprisingly important. We cut slim cartons that stop pencils from snapping and pens from leaking onto the print, and add a hang tab or window when you need one. Full color print and premium finishes from 100 boxes.",
      styles: ["mascara-boxes", "eyeshadow-boxes", "eyelash-boxes", "hang-tab-boxes", "cosmetic-boxes", "display-boxes"],
      features: [f("Protects tips", "A snug carton stops pencils from snapping in transit."), f("Hook-ready", "Optional hang tabs for retail pegboards."), f("Multipacks", "Two and three-liner boxes for sets."), f("Clean branding", "Simple, bold designs work best on slim panels.")],
      guide: [
        { h: "Choosing a style", p: ["Reverse tuck cartons are the standard. For retail hooks, choose a [hang-tab box](/packaging/hang-tab-boxes). For eye kits, combine liners with [mascara](/packaging/mascara-boxes) or [eyeshadow](/packaging/eyeshadow-boxes) in one set box."] },
      ],
      faqs: [q("Can you fit two liners in one box?", "Yes, side by side with a small insert."), q("Do you make eyeliner boxes with a window?", "Yes, a slim window on the front panel.")],
    },
  },
  {
    slug: "eyeshadow-boxes", name: "Eyeshadow Boxes", parent: "cosmetic-boxes", group: "industries", icon: "rigid",
    intro: "Flat palette boxes, sleeves and single-pan cartons cut to your compact or palette.",
    uses: ["eyeshadow palettes", "single pans and compacts", "highlighters and blush", "palette gift sets"],
    style: "sleeve, two-piece or tuck carton", material: "16–18pt SBS or rigid board", finish: "foil, holographic and soft-touch",
    tip: "Print the shade layout on the back so customers can see every color before buying.",
    rich: {
      lede: "Eyeshadow palettes are flat and wide, and the box is a big canvas for your art. We make sleeves, two-piece boxes and tuck cartons cut to your palette or compact, printed edge to edge with foil, holographic or soft-touch finishes, from 100 boxes.",
      styles: ["makeup-boxes", "mascara-boxes", "eyeliner-boxes", "trays-and-sleeves", "rigid-boxes", "cosmetic-boxes"],
      features: [f("Wide canvas", "Big flat panels show artwork and shade names beautifully."), f("Sleeve option", "A printed sleeve over a plain tray keeps costs down."), f("Compact cartons", "Small square boxes for single highlighters and blushes."), f("Launch-ready finishes", "Foil and holographic for hero palettes.")],
      guide: [
        { h: "Sleeve or full box?", p: ["A [sleeve](/packaging/trays-and-sleeves) slides over the palette and is the most affordable option. A two-piece or [rigid box](/packaging/rigid-boxes) feels more premium and protects mirrors and pans better in the post."] },
      ],
      faqs: [q("Can you print the shade map on the box?", "Yes, on the back or inside the lid."), q("Do you make boxes for single compacts?", "Yes, small square tuck boxes cut to the compact.")],
    },
  },
  {
    slug: "perfume-boxes", name: "Perfume Boxes", parent: "cosmetic-boxes", group: "industries", icon: "rigid",
    intro: "Rigid and folding perfume and cologne boxes with inserts that keep the bottle safe and centered.",
    uses: ["perfume and cologne bottles", "travel sprays and samplers", "fragrance gift sets", "body mists"],
    style: "rigid two-piece, magnetic or tuck carton with insert", material: "rigid chipboard or 18–24pt SBS", finish: "foil, embossing, soft-touch and textured papers",
    tip: "A fitted insert stops the bottle from moving, which protects both the glass and the atomiser.",
    rich: {
      lede: "Fragrance is sold on feeling, and the box sets the mood before the first spray. We make rigid and folding perfume boxes with fitted inserts, textured papers, foil and embossing, for perfume, cologne, samplers and gift sets. Every box is made to your bottle, from 100 units.",
      styles: ["rigid-boxes", "gift-boxes", "lotion-boxes", "makeup-boxes", "cosmetic-boxes", "bottle-boxes"],
      features: [f("Bottle-shaped insert", "Card or foam cut to your bottle and cap."), f("Luxury feel", "Textured paper, foil and embossing for a high-end look."), f("Sampler sets", "Multi-vial boxes for discovery sets."), f("Gift-ready", "Magnetic lids and ribbons for gifting seasons.")],
      guide: [
        { h: "Rigid or folding perfume box?", p: ["Most luxury fragrances use a [rigid box](/packaging/rigid-boxes) or a heavy folding carton with an insert. Everyday body mists can use a simpler tuck box. Our [bottle boxes](/packaging/bottle-boxes) page covers taller bottles too."] },
        { h: "Finishes that suit fragrance", p: ["Soft-touch with a foil logo is a classic. Embossing the logo or a pattern adds texture people remember. See what each finish looks like on [materials and finishes](/materials-and-finishes)."] },
      ],
      faqs: [q("Do perfume boxes include an insert?", "Yes, we include a card insert as standard and can use foam for heavier bottles."), q("Can you make discovery set boxes?", "Yes, with slots for several sample vials.")],
    },
  },
  {
    slug: "lotion-boxes", name: "Lotion Boxes", parent: "cosmetic-boxes", group: "industries", icon: "tall",
    intro: "Tall cartons for lotions, serums and creams in pumps, droppers and tubes.",
    uses: ["body lotion bottles", "serums and droppers", "hand cream tubes", "skincare sets"],
    style: "tall tuck end carton", material: "16–18pt SBS card", finish: "matte, soft-touch or spot UV",
    tip: "Leave space on a side panel for ingredients and directions; skincare buyers read them.",
    rich: {
      lede: "Skincare customers read every word, so lotion boxes need room for ingredients, directions and your story. We make tall cartons for pumps, droppers and tubes, printed on all sides in full color with clean, calm finishes like soft-touch and matte, from 100 boxes.",
      styles: ["cream-boxes", "perfume-boxes", "bath-bomb-boxes", "cosmetic-jars", "soap-boxes", "cosmetic-boxes"],
      features: [f("Room to read", "Four printed sides for ingredients, claims and directions."), f("Pump-safe", "Cut tall enough for pumps and droppers, with a snug tuck."), f("Calm finishes", "Matte and soft-touch suit clean skincare brands."), f("Sets and duos", "Cleanser and moisturizer pairs in one box.")],
      guide: [
        { h: "Sizing for pumps and droppers", p: ["Measure the bottle with the pump or dropper fitted, at its tallest point. Our guide on [how to measure for a custom box](/blog/how-to-measure-for-a-custom-box) shows how. For jars, see [cream boxes](/packaging/cream-boxes)."] },
      ],
      faqs: [q("Can you fit a serum dropper bottle?", "Yes, we size the box to the full height including the dropper."), q("Can you print ingredients in small type?", "Yes, down to about 6pt, as long as the artwork is high resolution.")],
    },
  },
  {
    slug: "cream-boxes", name: "Cream Boxes", parent: "cosmetic-boxes", group: "industries", icon: "carton",
    intro: "Square cartons with inserts for face creams, balms and jars of every size.",
    uses: ["face cream jars", "night creams and masks", "body butters", "skincare gift sets"],
    style: "square tuck end carton with insert", material: "16–18pt SBS or rigid board", finish: "soft-touch, foil and embossing",
    tip: "Glass jars need an insert; plastic jars can usually go without.",
    rich: {
      lede: "A jar of face cream is often the most expensive thing on a dressing table, and the box should feel worth it. We make square cartons and rigid boxes with inserts that hold glass and plastic jars in place, finished with soft-touch, foil or embossing, from 100 boxes.",
      styles: ["cosmetic-jars", "lotion-boxes", "perfume-boxes", "rigid-boxes", "cosmetic-boxes", "gift-boxes"],
      features: [f("Insert included", "A card collar keeps the jar centered and away from the walls."), f("Premium feel", "Soft-touch and foil for luxury skincare."), f("Square and neat", "A cube carton stacks well on shelves."), f("Gift sets", "Two or three-jar sets in a rigid box.")],
      guide: [
        { h: "Jar boxes and jar labels", p: ["Pair a printed cream box with a matching lid [label](/packaging/labels-and-stickers) for a finished look. For a wider range of jars and pots, see [cosmetic jar packaging](/packaging/cosmetic-jars)."] },
      ],
      faqs: [q("Will the box fit a glass jar?", "Yes, sized to your jar with an insert to protect the glass."), q("Can you make luxury cream boxes?", "Yes, in rigid board with foil and embossing.")],
    },
  },
  {
    slug: "nail-polish-boxes", name: "Nail Polish Boxes", parent: "cosmetic-boxes", group: "industries", icon: "carton",
    intro: "Small cartons and multi-bottle sets for nail polish, top coats and nail care.",
    uses: ["single nail polish bottles", "polish sets", "nail care kits", "salon retail"],
    style: "small tuck carton or set box with insert", material: "16–18pt SBS card", finish: "gloss, foil or holographic",
    tip: "Show the color: a printed swatch or a window helps people choose.",
    rich: {
      lede: "Nail polish is all about color, and the box is where customers first see it. We make small cartons for single bottles and set boxes with inserts for three to six polishes, printed in bright full color with gloss or holographic finishes, from 100 boxes.",
      styles: ["makeup-boxes", "display-boxes", "window-boxes", "gift-boxes", "cosmetic-boxes", "labels-and-stickers"],
      features: [f("Color first", "A swatch or window on every box."), f("Sets with inserts", "Bottles sit upright in their own slots."), f("Salon displays", "Counter displays for best-selling shades."), f("Glossy finishes", "Gloss and holographic that match the polish.")],
      guide: [
        { h: "Single or set?", p: ["Singles sell at the counter; sets sell online and at holidays. A [window box](/packaging/window-boxes) shows the shades in a set without opening it."] },
      ],
      faqs: [q("Can you make a box for six polishes?", "Yes, with an insert that holds each bottle upright."), q("Can each color have its own box?", "Yes, each design has a 100-box minimum.")],
    },
  },
  {
    slug: "hair-extension-boxes", name: "Hair Extension Boxes", parent: "cosmetic-boxes", group: "industries", icon: "rigid",
    intro: "Long rigid, magnetic and window boxes for hair extensions, wigs and bundles.",
    uses: ["hair bundles and wefts", "clip-in extensions", "wigs", "hair care sets"],
    style: "long magnetic box or window box", material: "rigid chipboard or 18–24pt SBS", finish: "satin lining, foil and soft-touch",
    tip: "A satin or tissue lining keeps hair smooth and adds a luxury touch.",
    rich: {
      lede: "Hair extensions are a big purchase, and customers expect a box that feels as premium as the hair. We make long magnetic and window boxes with satin or tissue lining, foil logos and soft-touch finishes for bundles, clip-ins and wigs, from 100 boxes.",
      styles: ["rigid-boxes", "window-boxes", "lotion-boxes", "gift-boxes", "mailer-boxes", "labels-and-stickers"],
      features: [f("Long formats", "Sized to lay bundles and clip-ins flat."), f("Satin lining", "Keeps hair smooth and looks luxurious."), f("Window option", "Show the texture and color."), f("Reusable", "Customers keep rigid boxes to store their hair.")],
      guide: [
        { h: "Shipping extensions", p: ["Rigid boxes protect well but should travel inside a [mailer box](/packaging/mailer-boxes) or shipper. Add a texture and length [label](/packaging/labels-and-stickers) on the side for easy picking."] },
      ],
      faqs: [q("Do you make wig boxes?", "Yes, deeper rigid boxes with room for a wig and a stand."), q("Can the box have a satin lining?", "Yes, satin or printed tissue lining.")],
    },
  },
  {
    slug: "makeup-boxes", name: "Makeup Boxes", parent: "cosmetic-boxes", group: "industries", icon: "rigid",
    intro: "Makeup kit boxes, PR boxes and gift sets with inserts for every product.",
    uses: ["makeup kits", "influencer PR boxes", "holiday gift sets", "subscription boxes"],
    style: "rigid magnetic box, mailer or two-piece with insert", material: "rigid chipboard or E-flute corrugated", finish: "foil, soft-touch, inside print",
    tip: "Influencer PR boxes are filmed, so print the inside lid and make the insert look neat.",
    rich: {
      lede: "Makeup kits and PR boxes are where a beauty brand shows off. We make rigid magnetic boxes, printed mailers and two-piece boxes with shaped inserts for every product in the set, printed inside and out, from 100 boxes. Perfect for launches, influencer seeding and holiday gift sets.",
      styles: ["rigid-boxes", "mailer-boxes", "eyeshadow-boxes", "lipstick-boxes", "cosmetic-boxes", "gift-boxes"],
      features: [f("Shaped inserts", "Every product has its own cut-out."), f("Made for unboxing videos", "Inside print and a neat reveal."), f("Kits and sets", "From two-product duos to full kits."), f("Seasonal runs", "Low minimums for holiday editions.")],
      guide: [
        { h: "PR boxes that get posted", p: ["Influencers share boxes that are fun to open. A printed [mailer](/packaging/mailer-boxes) with a message inside the lid, a tidy insert and a personal card go a long way. For luxury launches, choose a [rigid box](/packaging/rigid-boxes)."] },
      ],
      faqs: [q("Can you make PR boxes for influencers?", "Yes, printed inside and out with custom inserts."), q("Can I order a small number?", "Yes, from 100 boxes per design.")],
    },
  },
  {
    slug: "bath-bomb-boxes", name: "Bath Bomb Boxes", parent: "soap-boxes", group: "industries", icon: "carton",
    intro: "Cube, window and multi-pack boxes for bath bombs, shower steamers and bath salts.",
    uses: ["single bath bombs", "bath bomb gift sets", "shower steamers", "bath salts"],
    style: "cube tuck box, window box or set box with insert", material: "16–18pt SBS or kraft card", finish: "matte, gloss or kraft",
    tip: "Shrink-wrap or a sealed bag inside the box keeps moisture out and the fizz in.",
    rich: {
      lede: "Bath bombs are colorful, fragrant and fragile, so the box needs to protect them and show them off. We make cube boxes, window boxes and gift sets with inserts for bath bombs, steamers and salts, in bright full color or natural kraft, from 100 boxes.",
      styles: ["soap-boxes", "cube-boxes", "window-boxes", "gift-boxes", "kraft-boxes", "lotion-boxes"],
      features: [f("Holds its shape", "A snug cube or insert stops the bomb from crumbling."), f("Window to the color", "Customers love to see the colors."), f("Gift sets", "Three to six bombs in one box."), f("Natural options", "Kraft and plastic-free choices.")],
      guide: [
        { h: "Keeping bath bombs dry", p: ["Moisture makes bath bombs fizz early. Wrap each one in film or a sealed sleeve, then box it. Plastic-free? Use a wax paper wrap and a snug [kraft box](/packaging/kraft-boxes)."] },
      ],
      faqs: [q("Can you make a box for one bath bomb?", "Yes, a small cube or round-window box."), q("Do you make bath bomb gift boxes?", "Yes, with inserts for three, four or six bombs.")],
    },
  },

  // ---------- CBD and vape ----------
  {
    slug: "cbd-oil-boxes", name: "CBD Oil Boxes", parent: "cbd-boxes", group: "industries", icon: "tall",
    intro: "Dropper bottle cartons for CBD oils and tinctures, with room for dosage and lab details.",
    uses: ["CBD and hemp oil tinctures", "dropper bottles", "oral sprays", "oil gift sets"],
    style: "tall tuck end carton with insert", material: "16–18pt SBS or kraft card", finish: "matte, soft-touch, foil",
    tip: "Leave space for a QR code that links to your lab results.",
    rich: {
      lede: "CBD customers want to trust what they buy, so your oil box has to look professional and carry the right information. We make tall dropper cartons with inserts, room for dosage and a QR code to lab results, printed in calm, clean designs, from 100 boxes.",
      styles: ["cbd-gummies-boxes", "cbd-boxes", "hemp-boxes", "lotion-boxes", "display-boxes", "labels-and-stickers"],
      features: [f("Dropper-safe", "Sized to the full bottle height with an insert."), f("Room for the details", "Dosage, ingredients and a QR code to lab reports."), f("Trustworthy look", "Clean, clinical or botanical designs."), f("Counter displays", "Display boxes for shops and pharmacies.")],
      guide: [
        { h: "What to print on a CBD oil box", p: ["Customers look for strength, size, ingredients, directions and a batch or lab link. Check the rules where you sell. Our [CBD boxes](/packaging/cbd-boxes) page and the [CBD and candles](/industries/cbd-and-candles) hub have more ideas."] },
      ],
      faqs: [q("Can you print a QR code for lab results?", "Yes, anywhere on the box."), q("Do you make child-resistant packaging?", "Ask us; it depends on the product and where you sell.")],
    },
  },
  {
    slug: "cbd-gummies-boxes", name: "CBD Gummies Boxes", parent: "cbd-boxes", group: "industries", icon: "carton",
    intro: "Tuck boxes and display packs for CBD gummies, edibles and chews.",
    uses: ["gummy jars and pouches", "edible multipacks", "sample packs", "retail displays"],
    style: "tuck end box or display box", material: "food-grade SBS card", finish: "gloss, matte or holographic",
    tip: "Gummies inside need a sealed bag or jar; the box is the branded outer.",
    rich: {
      lede: "Gummies are colorful and fun, and the packaging should be too, while still looking trustworthy. We make outer boxes for gummy jars and pouches, multipack cartons and counter displays, printed in bright food-safe inks, from 100 boxes.",
      styles: ["cbd-oil-boxes", "cbd-boxes", "mylar-bags", "candy-boxes", "display-boxes", "labels-and-stickers"],
      features: [f("Food-safe inks", "Suitable for edible products."), f("Bright and clear", "Fun colors with clear strength and serving info."), f("Pairs with pouches", "Box a resealable mylar pouch or a jar."), f("Display-ready", "Counter displays for shops.")],
      guide: [
        { h: "Box or pouch?", p: ["Many brands sell gummies in a resealable [mylar bag](/packaging/mylar-bags) and use a box for gift sets and retail. Both can share one design."] },
      ],
      faqs: [q("Are your inks food-safe?", "Yes, we use food-safe inks for edible products."), q("Can you make a display box for gummies?", "Yes, a counter display that holds individual packs.")],
    },
  },
  {
    slug: "e-liquid-boxes", name: "E-Liquid Boxes", parent: "vape-boxes", group: "industries", icon: "tall",
    intro: "Cartons for e-liquid bottles, vape cartridges and pods, with space for warnings.",
    uses: ["e-liquid bottles", "vape cartridges", "pods", "starter kits"],
    style: "tall tuck end carton or sleeve", material: "16–18pt SBS card", finish: "gloss, foil or holographic",
    tip: "Plan the warning area first, then design around it.",
    rich: {
      lede: "Vape and e-liquid packaging has to carry warnings and still look bold enough to stand out. We make cartons for bottles, cartridges and pods, with room planned for the required text, printed in full color with foil or holographic finishes, from 100 boxes.",
      styles: ["vape-boxes", "cbd-oil-boxes", "pre-roll-boxes", "display-boxes", "cigarette-boxes", "labels-and-stickers"],
      features: [f("Warnings planned in", "We size the box so warnings fit without crowding."), f("Bold shelf look", "Bright print, foil and holographic."), f("Cartridge inserts", "Slots that hold carts and pods."), f("Range consistency", "One template, many flavors.")],
      guide: [
        { h: "Planning your flavor range", p: ["Use one box shape and change the color per flavor. With 100-box minimums per design, it's easy to test new flavors. See all [vape boxes](/packaging/vape-boxes)."] },
      ],
      faqs: [q("Can you fit health warnings?", "Yes. Send the required text and we plan the layout around it."), q("Do you make cartridge boxes?", "Yes, with inserts for one or more carts.")],
    },
  },

  // ---------- Pharma ----------
  {
    slug: "medicine-boxes", name: "Medicine Boxes", parent: "pharma-boxes", group: "industries", icon: "carton",
    intro: "Clean, clear medicine and supplement cartons with room for dosage and leaflets.",
    uses: ["tablets and capsules", "supplement bottles", "creams and ointments", "first-aid kits"],
    style: "reverse tuck end or auto-lock bottom carton", material: "16–18pt SBS card", finish: "matte or gloss, Braille on request",
    tip: "Choose an auto-lock bottom for heavier bottles so the base doesn't open.",
    rich: {
      lede: "Medicine boxes need to be clear above all else: the name, strength and dosage must be easy to read. We make clean, sturdy cartons for tablets, bottles and creams, with space for leaflets and an auto-lock bottom for heavier items, from 100 boxes.",
      styles: ["pharma-boxes", "health-boxes", "auto-lock-boxes", "cbd-oil-boxes", "lotion-boxes", "labels-and-stickers"],
      features: [f("Clarity first", "Large, sharp type for names and dosage."), f("Leaflet space", "Sized to hold a folded patient leaflet."), f("Strong bases", "Auto-lock bottoms for bottles."), f("Batch areas", "Blank panels for batch and expiry printing.")],
      guide: [
        { h: "Regulated products", p: ["Rules for medicines vary by country. Send us your required text and we'll lay out the box to fit it. Supplements and wellness products sit on our [health boxes](/packaging/health-boxes) page."] },
      ],
      faqs: [q("Can you leave space for batch and expiry codes?", "Yes, a blank panel for your own printing or labels."), q("Do you make auto-lock bottom boxes?", "Yes, see [auto-lock boxes](/packaging/auto-lock-boxes).")],
    },
  },

  // ---------- Bakery and food ----------
  {
    slug: "cake-boxes", name: "Cake Boxes", parent: "bakery-boxes", group: "industries", icon: "window",
    intro: "Strong cake boxes with windows and inserts for whole cakes, slices and tiered cakes.",
    uses: ["whole cakes", "cake slices", "tiered and celebration cakes", "cheesecakes"],
    style: "lock-corner box with lid or window", material: "food-grade SBS or E-flute corrugated", finish: "food-safe inks, grease-resistant coating",
    tip: "Add 2–3 cm of height above the tallest decoration.",
    rich: {
      lede: "A cake box has one big job: get the cake home in one piece. We make strong food-grade cake boxes with windows, handles and cake boards for whole cakes, slices and tiered cakes, printed with your bakery's brand in food-safe inks, from 100 boxes.",
      styles: ["cupcake-boxes", "donut-boxes", "cookie-boxes", "macaron-boxes", "bakery-boxes", "window-boxes"],
      features: [f("Strong walls", "Corrugated options for heavy and tiered cakes."), f("Window lids", "Show the decoration without opening the box."), f("Food-safe", "Grease-resistant board and food-safe inks."), f("Easy to carry", "Handles and sturdy bases.")],
      guide: [
        { h: "Sizing a cake box", p: ["Measure the cake board, not just the cake, and leave space above the decoration. Our [measuring guide](/blog/how-to-measure-for-a-custom-box) helps. For smaller bakes, see [cupcake](/packaging/cupcake-boxes) and [cookie](/packaging/cookie-boxes) boxes."] },
      ],
      faqs: [q("Can cake boxes have a window?", "Yes, with a clear film window in the lid or sides."), q("Can you make boxes for tiered cakes?", "Yes, tall boxes in corrugated board with a front opening.")],
    },
  },
  {
    slug: "cupcake-boxes", name: "Cupcake Boxes", parent: "bakery-boxes", group: "industries", icon: "window",
    intro: "Cupcake boxes with inserts for 1, 2, 4, 6, 12 or 24, with or without a window.",
    uses: ["single cupcakes", "cupcake gift boxes", "party orders", "muffins"],
    style: "box with insert, window lid or handle", material: "food-grade SBS card", finish: "food-safe inks, gloss or matte",
    tip: "The insert is what keeps the frosting perfect: choose one with deep holes.",
    rich: {
      lede: "Cupcakes look their best when they arrive exactly as they left the counter. Our cupcake boxes have deep inserts that hold each cake still, with windows to show the frosting and handles for carrying. Singles to 24-packs, printed with your bakery's look, from 100 boxes.",
      styles: ["cake-boxes", "donut-boxes", "macaron-boxes", "cookie-boxes", "bakery-boxes", "gable-boxes"],
      features: [f("Deep inserts", "Each cupcake sits in its own hole."), f("Any count", "1, 2, 4, 6, 12 or 24 cupcakes."), f("Windows", "Show off the frosting."), f("Carry handles", "Gable-style handles for party orders.")],
      guide: [
        { h: "Choosing a count", p: ["Singles and twos sell as gifts; sixes and twelves sell for parties. Start with your best sellers. For carry-out, a [gable box](/packaging/gable-boxes) with an insert is easy to hold."] },
      ],
      faqs: [q("Do the boxes come with inserts?", "Yes, sized to your cupcake case."), q("Can you make a single cupcake box?", "Yes, with or without a window.")],
    },
  },
  {
    slug: "donut-boxes", name: "Donut Boxes", parent: "bakery-boxes", group: "industries", icon: "window",
    intro: "Flat donut boxes with windows for singles, half dozens and dozens.",
    uses: ["single donuts", "half-dozen and dozen boxes", "donut gift boxes", "bagels and pastries"],
    style: "flat lock-corner box with window", material: "food-grade SBS or kraft", finish: "food-safe inks, grease-resistant coating",
    tip: "A grease-resistant coating keeps glaze from soaking through.",
    rich: {
      lede: "A box of donuts is a treat to open, and the right box makes it even better. We make flat donut boxes with windows and grease-resistant coatings for singles, half dozens and dozens, printed with your shop's colors, from 100 boxes.",
      styles: ["cake-boxes", "cupcake-boxes", "cookie-boxes", "bakery-boxes", "window-boxes", "food-boxes"],
      features: [f("Grease-resistant", "Glaze and filling stay inside."), f("Window lids", "Show the toppings."), f("Dozen-ready", "Flat boxes sized for 1, 2, 6 or 12."), f("Stackable", "Flat lids stack in bags and cars.")],
      guide: [
        { h: "Donut box sizes", p: ["Measure one donut including toppings, then lay them out in rows. Our team works out the box size for you. See all [bakery boxes](/packaging/bakery-boxes) for more."] },
      ],
      faqs: [q("Are donut boxes grease-resistant?", "Yes, with a food-safe coating."), q("Can you make a dozen box?", "Yes, flat boxes for 12 donuts.")],
    },
  },
  {
    slug: "cookie-boxes", name: "Cookie Boxes", parent: "bakery-boxes", group: "industries", icon: "window",
    intro: "Cookie boxes, sleeves and gift tins-style boxes for bakeries and online cookie shops.",
    uses: ["cookie gift boxes", "cookie stacks", "biscuit assortments", "cookie subscription boxes"],
    style: "window box, two-piece or sleeve", material: "food-grade SBS or kraft", finish: "food-safe inks, kraft or gloss",
    tip: "Wrap cookies in glassine or a sealed bag first to keep them fresh.",
    rich: {
      lede: "Cookies are one of the most gifted bakes, and a good box turns a few cookies into a present. We make window boxes, two-piece gift boxes and slim sleeves for cookie stacks and assortments, in kraft or bright full color, from 100 boxes.",
      styles: ["cake-boxes", "cupcake-boxes", "macaron-boxes", "bakery-boxes", "kraft-boxes", "mailer-boxes"],
      features: [f("Gift-ready", "Two-piece boxes with ribbon."), f("Kraft or color", "Rustic kraft or bright branding."), f("Ships well", "Pack cookie boxes inside a mailer for posting."), f("Stack sleeves", "Long sleeves for stacked cookies.")],
      guide: [
        { h: "Posting cookies", p: ["Cookies travel well when they can't move. Use a tight-fitting box, wrap them first and send them inside a [mailer box](/packaging/mailer-boxes)."] },
      ],
      faqs: [q("Can you make kraft cookie boxes?", "Yes, with a window and one or two-color print."), q("Do you make cookie gift boxes?", "Yes, two-piece boxes with ribbon or a sleeve.")],
    },
  },
  {
    slug: "macaron-boxes", name: "Macaron Boxes", parent: "bakery-boxes", group: "industries", icon: "sleeve",
    intro: "Slim macaron boxes with trays and windows for 6, 12 or 24 macarons.",
    uses: ["macaron gift boxes", "wedding favors", "patisserie counters", "corporate gifts"],
    style: "tray and sleeve or window box with insert", material: "food-grade SBS or rigid board", finish: "soft-touch, foil and pastel print",
    tip: "A tray with grooves stops macarons from rolling and cracking.",
    rich: {
      lede: "Macarons are delicate and pretty, and their box should be both. We make slim tray-and-sleeve boxes and window boxes with grooved inserts that hold each macaron in a neat row, finished with pastel colors, foil and soft-touch, from 100 boxes.",
      styles: ["cookie-boxes", "cupcake-boxes", "favor-boxes", "trays-and-sleeves", "bakery-boxes", "gift-boxes"],
      features: [f("Grooved trays", "Every macaron in its place."), f("Window views", "Show the colors."), f("Favor sizes", "Two and four-macaron boxes for weddings."), f("Luxury finishes", "Foil and soft-touch for patisseries.")],
      guide: [
        { h: "Macarons as favors and gifts", p: ["Small two-macaron boxes make lovely [wedding favors](/packaging/favor-boxes). For gifting, a [tray and sleeve](/packaging/trays-and-sleeves) feels elegant and simple."] },
      ],
      faqs: [q("Do macaron boxes include a tray?", "Yes, a grooved insert sized to your macarons."), q("Can you make favor boxes for two macarons?", "Yes.")],
    },
  },
  {
    slug: "popcorn-boxes", name: "Popcorn Boxes", parent: "food-boxes", group: "industries", icon: "carton",
    intro: "Open-top and closed popcorn boxes for cinemas, events and snack brands.",
    uses: ["cinema and event popcorn", "gourmet popcorn gifts", "party favors", "snack brands"],
    style: "open-top tapered box or closed tuck carton", material: "food-grade SBS card", finish: "grease-resistant coating, gloss",
    tip: "Classic stripes are instantly recognizable; add your logo on the front panel.",
    rich: {
      lede: "Nothing says treat like a box of popcorn. We make open-top popcorn boxes for cinemas and events, and closed cartons and gift boxes for gourmet popcorn brands, in food-grade board with grease-resistant coating, from 100 boxes.",
      styles: ["food-boxes", "fries-boxes", "candy-boxes", "chinese-takeout-boxes", "favor-boxes", "mylar-bags"],
      features: [f("Grease-resistant", "Butter and oil stay inside."), f("Event-ready", "Stack and fill quickly."), f("Gourmet gifts", "Closed boxes and pouches for flavored popcorn."), f("Fun to brand", "Big panels for bold designs.")],
      guide: [
        { h: "Open box or sealed pack?", p: ["Fresh popcorn goes in open-top boxes. Packaged popcorn needs a sealed [mylar bag](/packaging/mylar-bags) inside a box to stay crunchy."] },
      ],
      faqs: [q("Are popcorn boxes food-safe?", "Yes, food-grade board and coating."), q("Can you make small favor sizes?", "Yes, mini popcorn boxes for parties.")],
    },
  },
  {
    slug: "chinese-takeout-boxes", name: "Chinese Takeout Boxes", parent: "food-boxes", group: "industries", icon: "carton",
    intro: "Folded takeout boxes for noodles, rice and street food, with or without handles.",
    uses: ["noodles and rice", "street food", "party favors", "gift boxes"],
    style: "folded takeout pail with wire or card handle", material: "food-grade SBS or kraft", finish: "grease-resistant coating",
    tip: "Choose a card handle if the boxes go in a microwave.",
    rich: {
      lede: "The folded takeout box is a design classic, and it works for much more than noodles. We make takeout pails in food-grade white or kraft board with grease-resistant coatings, for restaurants, street food stalls and even party favors, printed with your brand, from 100 boxes.",
      styles: ["food-boxes", "fries-boxes", "sandwich-boxes", "popcorn-boxes", "kraft-boxes", "paper-bags"],
      features: [f("Leak-resistant folds", "Folded from one piece with no glued seams at the bottom."), f("Grease-resistant", "Sauces stay inside."), f("Handle options", "Wire or card handles."), f("Not just food", "Popular for gifts and favors too.")],
      guide: [
        { h: "Sizes for your menu", p: ["Takeout boxes come in standard sizes from 8 to 32 oz. Tell us your portion and we'll match it. Carry orders in a branded [paper bag](/packaging/paper-bags)."] },
      ],
      faqs: [q("Are they microwave-safe?", "With a card handle and no foil, yes."), q("Do you make kraft takeout boxes?", "Yes.")],
    },
  },
  {
    slug: "sandwich-boxes", name: "Sandwich Boxes", parent: "food-boxes", group: "industries", icon: "window",
    intro: "Wedge-shaped sandwich boxes with windows for cafes, delis and meal deals.",
    uses: ["sandwiches and wraps", "deli counters", "meal deals", "catering"],
    style: "wedge box with film window", material: "food-grade kraft or SBS", finish: "food-safe inks, grease-resistant lining",
    tip: "A window lets customers see the filling, which sells.",
    rich: {
      lede: "A good sandwich box keeps the filling fresh and shows it off. We make wedge sandwich boxes with clear windows in kraft or white board, sized for single, double and triple-cut sandwiches, printed with your cafe's brand, from 100 boxes.",
      styles: ["food-boxes", "chinese-takeout-boxes", "fries-boxes", "kraft-boxes", "window-boxes", "labels-and-stickers"],
      features: [f("Show the filling", "Clear windows on the slope."), f("Kraft look", "Natural kraft suits cafes and delis."), f("Easy to seal", "Tuck closures or a sticker seal."), f("Label space", "Room for ingredients and allergens.")],
      guide: [
        { h: "Labeling sandwiches", p: ["Print your brand on the box and add ingredients with a [label](/packaging/labels-and-stickers), so one box works for every filling."] },
      ],
      faqs: [q("Do sandwich boxes have a window?", "Yes, a clear film window."), q("Can the box be kraft?", "Yes.")],
    },
  },
  {
    slug: "fries-boxes", name: "Fries Boxes", parent: "food-boxes", group: "industries", icon: "carton",
    intro: "Open scoop boxes for fries, chips and loaded sides, grease-resistant and on-brand.",
    uses: ["fries and chips", "loaded fries", "onion rings and sides", "street food"],
    style: "open scoop carton", material: "food-grade SBS", finish: "grease-resistant coating",
    tip: "A bold logo on the front panel shows up in every food photo.",
    rich: {
      lede: "Fries boxes get photographed more than almost any other food packaging. We make open scoop cartons in grease-resistant food-grade board, printed with bold designs that look great on a table and on Instagram, from 100 boxes.",
      styles: ["food-boxes", "popcorn-boxes", "chinese-takeout-boxes", "sandwich-boxes", "paper-bags", "labels-and-stickers"],
      features: [f("Grease-resistant", "No soggy corners."), f("Easy to fill", "Scoop shape speeds up service."), f("Bold branding", "Big front panel for your logo."), f("Sizes", "Small, regular and large.")],
      guide: [
        { h: "Building a takeaway range", p: ["Match your fries boxes with [takeout boxes](/packaging/chinese-takeout-boxes), [sandwich boxes](/packaging/sandwich-boxes) and a branded [paper bag](/packaging/paper-bags)."] },
      ],
      faqs: [q("Are fries boxes grease-resistant?", "Yes."), q("Can I order different sizes?", "Yes, each size is its own design with a 100-box minimum.")],
    },
  },
  {
    slug: "candy-boxes", name: "Candy Boxes", parent: "chocolate-boxes", group: "industries", icon: "carton",
    intro: "Sweet boxes, pick-and-mix boxes and candy gift boxes, bright and food-safe.",
    uses: ["pick-and-mix sweets", "candy gift boxes", "party favors", "confectionery brands"],
    style: "tuck box, window box or display carton", material: "food-grade SBS", finish: "gloss and bright full color",
    tip: "Bright colors and windows work best for sweets.",
    rich: {
      lede: "Candy packaging should feel like a treat before it's opened. We make bright candy boxes, pick-and-mix cartons, window boxes and display packs in food-grade board, printed in bold full color, from 100 boxes.",
      styles: ["chocolate-boxes", "truffle-boxes", "popcorn-boxes", "favor-boxes", "display-boxes", "mylar-bags"],
      features: [f("Food-safe", "Food-grade board and inks."), f("Window options", "Show the colors."), f("Displays", "Counter boxes for shops."), f("Favors", "Mini boxes for parties.")],
      guide: [
        { h: "Box or bag?", p: ["Loose sweets often sit in a sealed [mylar bag](/packaging/mylar-bags) inside the box. For gifts, pair with [chocolate boxes](/packaging/chocolate-boxes)."] },
      ],
      faqs: [q("Are the boxes food-safe?", "Yes."), q("Can you make small favor boxes?", "Yes.")],
    },
  },
  {
    slug: "truffle-boxes", name: "Truffle Boxes", parent: "chocolate-boxes", group: "industries", icon: "rigid",
    intro: "Luxury truffle and bonbon boxes with cavity inserts for 2 to 24 pieces.",
    uses: ["chocolate truffles", "bonbons", "chocolate gift boxes", "wedding and corporate gifts"],
    style: "rigid two-piece or drawer box with cavity insert", material: "rigid chipboard or SBS", finish: "foil, embossing and ribbon",
    tip: "Print a flavor key inside the lid so customers know what's what.",
    rich: {
      lede: "Truffles are small luxuries, and the box should feel like one. We make rigid and folding truffle boxes with cavity inserts for 2 to 24 pieces, finished with foil, embossing and ribbons, and a flavor key printed inside the lid, from 100 boxes.",
      styles: ["chocolate-boxes", "candy-boxes", "rigid-boxes", "gift-boxes", "favor-boxes", "christmas-boxes"],
      features: [f("Cavity inserts", "Every piece in its own cup."), f("Flavor key", "Printed inside the lid."), f("Luxury finishes", "Foil, embossing and ribbon."), f("Gift sizes", "From a two-piece favor to a 24-piece gift.")],
      guide: [
        { h: "Seasonal truffle boxes", p: ["Truffles sell most at Christmas and Valentine's. Low minimums mean you can print [Christmas](/packaging/christmas-boxes) and [holiday](/packaging/holiday-boxes) designs each year."] },
      ],
      faqs: [q("Do truffle boxes come with inserts?", "Yes, cavity inserts sized to your truffles."), q("Can you print a flavor key?", "Yes, inside the lid.")],
    },
  },

  // ---------- Retail, gifts and leisure ----------
  {
    slug: "book-boxes", name: "Book Boxes", parent: "rigid-boxes", group: "styles", icon: "rigid",
    intro: "Book-style boxes and slipcases for special editions, sets and premium products.",
    uses: ["special edition books", "book sets and slipcases", "presentation boxes", "photo albums"],
    style: "book-style rigid box with magnetic flap or slipcase", material: "rigid chipboard", finish: "cloth or paper wrap, foil and embossing",
    tip: "A magnetic book-style box opens like a cover and feels special.",
    rich: {
      lede: "Book boxes open like a book cover and give any product a sense of ceremony. We make slipcases for book sets and rigid book-style boxes with magnetic flaps for special editions, albums and presentation sets, wrapped in paper or cloth, from 100 boxes.",
      styles: ["rigid-boxes", "gift-boxes", "stationery-boxes", "invitation-boxes", "game-boxes", "two-piece-boxes"],
      features: [f("Opens like a book", "Magnetic flap that feels like a cover."), f("Slipcases", "For book sets and special editions."), f("Cloth or paper wrap", "Classic finishes for collectors."), f("Foil titles", "Foil and embossed spines and covers.")],
      guide: [
        { h: "Slipcase or book box?", p: ["A slipcase holds books on a shelf, spine out. A book-style [rigid box](/packaging/rigid-boxes) holds a set or product inside and opens like a cover."] },
      ],
      faqs: [q("Do you make slipcases?", "Yes, sized to your books."), q("Can it close with a magnet?", "Yes.")],
    },
  },
  {
    slug: "game-boxes", name: "Game Boxes", parent: "rigid-boxes", group: "styles", icon: "rigid",
    intro: "Board game and puzzle boxes with lift-off lids and inserts for every piece.",
    uses: ["board games", "puzzles", "card games", "kids' activity kits"],
    style: "two-piece rigid box with insert", material: "rigid chipboard", finish: "full color wrap, gloss or matte",
    tip: "Plan the insert so every piece has a place; players love a tidy box.",
    rich: {
      lede: "Board game boxes need to survive years of being opened, stacked and shoved on a shelf. We make two-piece rigid game and puzzle boxes with printed wraps and inserts for boards, cards and pieces, from 100 boxes, ideal for indie game makers and crowdfunded projects.",
      styles: ["playing-card-boxes", "toy-boxes", "two-piece-boxes", "rigid-boxes", "book-boxes", "mailer-boxes"],
      features: [f("Built to last", "Thick rigid board for repeated use."), f("Inserts", "Trays for cards, dice and tokens."), f("Edge-to-edge art", "Full wrap printing."), f("Small print runs", "Great for indie and crowdfunded games.")],
      guide: [
        { h: "Shipping games to backers", p: ["Ship game boxes inside a sturdy [mailer](/packaging/mailer-boxes) or [shipping box](/packaging/shipping-boxes) so the corners stay crisp."] },
      ],
      faqs: [q("Can you make puzzle boxes?", "Yes, two-piece boxes in any size."), q("Do you make game inserts?", "Yes, card trays sized to your components.")],
    },
  },
  {
    slug: "toy-boxes", name: "Toy Boxes", parent: "retail-boxes", group: "industries", icon: "window",
    intro: "Window boxes, hang-tab cartons and gift boxes for toys and children's products.",
    uses: ["toys and figures", "plush toys", "kids' kits", "baby gifts"],
    style: "window box, hang-tab carton or two-piece", material: "SBS or E-flute corrugated", finish: "bright gloss full color",
    tip: "A window lets kids see the toy, which often makes the sale.",
    rich: {
      lede: "Toy packaging is half the fun. We make bright window boxes that show the toy, hang-tab cartons for pegboards and sturdy gift boxes for bigger sets, printed in bold, child-friendly colors, from 100 boxes.",
      styles: ["game-boxes", "window-boxes", "hang-tab-boxes", "retail-boxes", "gift-boxes", "display-boxes"],
      features: [f("Window views", "Kids see what's inside."), f("Hook-ready", "Hang tabs for retail."), f("Sturdy", "Corrugated options for heavier toys."), f("Bright print", "Bold color and gloss.")],
      guide: [
        { h: "Retail-ready toy packaging", p: ["Shops want toys that hang or stack. Choose [hang-tab boxes](/packaging/hang-tab-boxes) for small toys and [window boxes](/packaging/window-boxes) for larger ones."] },
      ],
      faqs: [q("Can toy boxes have a window?", "Yes."), q("Do you make hang-tab toy boxes?", "Yes.")],
    },
  },
  {
    slug: "playing-card-boxes", name: "Playing Card Boxes", parent: "tuck-boxes", group: "styles", icon: "carton",
    intro: "Tuck boxes and rigid cases for playing cards, tarot decks and card games.",
    uses: ["playing card decks", "tarot and oracle cards", "card games", "flash cards"],
    style: "tuck box or rigid two-piece", material: "SBS card or rigid board", finish: "foil, embossing, gloss or matte",
    tip: "Tarot and oracle decks look stunning in a rigid box with a foil design.",
    rich: {
      lede: "A deck of cards lives in its box, so the box gets handled every time it's used. We make classic tuck boxes for playing cards and rigid two-piece cases for tarot, oracle and card games, finished with foil and embossing, from 100 boxes.",
      styles: ["game-boxes", "tuck-boxes", "rigid-boxes", "two-piece-boxes", "stationery-boxes", "business-card-boxes"],
      features: [f("Classic tuck", "The standard deck box, made to your card size."), f("Rigid cases", "For tarot and premium decks."), f("Foil and emboss", "Beautiful, tactile designs."), f("Any card size", "Poker, bridge, tarot and custom.")],
      guide: [
        { h: "Tarot and oracle decks", p: ["Deck creators often choose a [rigid two-piece box](/packaging/two-piece-boxes) with a guidebook space and foil artwork."] },
      ],
      faqs: [q("Can you make a box for tarot cards?", "Yes, tuck or rigid."), q("Do you print the cards?", "We make the boxes; tell us your card size.")],
    },
  },
  {
    slug: "invitation-boxes", name: "Invitation Boxes", parent: "gift-boxes", group: "industries", icon: "rigid",
    intro: "Luxury invitation boxes for weddings, launches and events that guests keep.",
    uses: ["wedding invitations", "event and launch invites", "save the dates", "VIP mailers"],
    style: "rigid two-piece or magnetic box", material: "rigid chipboard", finish: "foil, embossing, velvet or textured paper",
    tip: "A box invitation often doubles as a keepsake, so make it beautiful inside too.",
    rich: {
      lede: "A boxed invitation tells guests that something special is coming. We make rigid invitation boxes with lift-off or magnetic lids for weddings, launches and VIP events, finished with foil, embossing and textured papers, with space for cards and small gifts, from 100 boxes.",
      styles: ["gift-boxes", "favor-boxes", "rigid-boxes", "book-boxes", "business-card-boxes", "wrapping-paper"],
      features: [f("Keepsake quality", "Guests keep these for years."), f("Room for extras", "Cards, favors and small gifts."), f("Luxury finishes", "Foil, embossing and textured papers."), f("Short runs", "From 100 boxes for each event.")],
      guide: [
        { h: "Wedding stationery and favors", p: ["Match your invitation box with [favor boxes](/packaging/favor-boxes) for the big day for a consistent look."] },
      ],
      faqs: [q("Can you make wedding invitation boxes?", "Yes."), q("Can the box hold a small gift?", "Yes, with an insert.")],
    },
  },
  {
    slug: "business-card-boxes", name: "Business Card Boxes", parent: "stationery-boxes", group: "styles", icon: "carton",
    intro: "Two-piece and tuck boxes that keep business cards and flat items crisp.",
    uses: ["business cards", "loyalty cards", "gift cards", "postcards and notes"],
    style: "two-piece box or tuck carton", material: "SBS or rigid board", finish: "matte, foil or soft-touch",
    tip: "A branded card box makes a nice desk item for clients.",
    rich: {
      lede: "Business card boxes keep cards flat and clean, and a nice one sits on a client's desk for months. We make two-piece and tuck boxes for business cards, gift cards and postcards, with foil logos and soft-touch finishes, from 100 boxes.",
      styles: ["stationery-boxes", "playing-card-boxes", "invitation-boxes", "two-piece-boxes", "hang-tags", "labels-and-stickers"],
      features: [f("Keeps cards crisp", "Snug fit, no bent corners."), f("Desk-worthy", "Premium finishes for clients."), f("Gift cards", "Boxes for gift and loyalty cards."), f("Low minimums", "From 100 boxes.")],
      guide: [
        { h: "Branded print for small businesses", p: ["Pair card boxes with [hang tags](/packaging/hang-tags) and [stickers](/packaging/labels-and-stickers) to keep your brand consistent everywhere."] },
      ],
      faqs: [q("Do you print the business cards?", "We make the boxes; send your card size."), q("Can the lid have a foil logo?", "Yes.")],
    },
  },
  {
    slug: "tie-boxes", name: "Tie Boxes", parent: "apparel-boxes", group: "industries", icon: "rigid",
    intro: "Long rigid and window boxes for ties, bow ties and cufflink sets.",
    uses: ["neckties", "bow ties", "tie and cufflink sets", "groomsmen gifts"],
    style: "long two-piece or magnetic box", material: "rigid chipboard or SBS", finish: "foil, soft-touch and satin insert",
    tip: "A satin or card insert keeps the tie rolled or folded neatly.",
    rich: {
      lede: "A tie is a classic gift, and the box makes it feel like one. We make long rigid tie boxes, window boxes and bow tie boxes with inserts that keep everything neat, finished with foil and soft-touch, from 100 boxes. Popular for menswear brands and groomsmen gifts.",
      styles: ["apparel-boxes", "shoe-boxes", "gift-boxes", "rigid-boxes", "jewelry-boxes", "two-piece-boxes"],
      features: [f("Long formats", "Sized for folded or rolled ties."), f("Bow tie boxes", "Small square boxes with inserts."), f("Gift sets", "Tie, pocket square and cufflinks."), f("Premium finishes", "Foil and soft-touch.")],
      guide: [
        { h: "Menswear gifting", p: ["Pair tie boxes with [jewelry boxes](/packaging/jewelry-boxes) for cufflinks, or a larger [apparel box](/packaging/apparel-boxes) for shirt-and-tie sets."] },
      ],
      faqs: [q("Do you make bow tie boxes?", "Yes."), q("Can a tie box include cufflinks?", "Yes, with a two-part insert.")],
    },
  },
  {
    slug: "shoe-boxes", name: "Shoe Boxes", parent: "apparel-boxes", group: "industries", icon: "carton",
    intro: "Sturdy shoe boxes in corrugated or rigid board, printed with your brand.",
    uses: ["trainers and sneakers", "boots", "kids' shoes", "slippers and sandals"],
    style: "two-piece or mailer-style shoe box", material: "E-flute corrugated or rigid board", finish: "printed outside and inside",
    tip: "A mailer-style shoe box can ship on its own, which saves an outer box.",
    rich: {
      lede: "A great shoe box protects the pair, stacks well in a stockroom and gets kept for storage. We make shoe boxes in corrugated and rigid board, as two-piece or mailer-style boxes, printed inside and out, from 100 boxes.",
      styles: ["apparel-boxes", "tie-boxes", "mailer-boxes", "shipping-boxes", "corrugated-boxes", "two-piece-boxes"],
      features: [f("Strong and stackable", "Corrugated board for stockrooms."), f("Ship in the box", "Mailer styles can go in the post."), f("Inside print", "A pattern or message inside the lid."), f("Any size", "From kids' shoes to boots.")],
      guide: [
        { h: "Shipping shoes online", p: ["A mailer-style shoe box can ship by itself. For two-piece boxes, use a plain [shipping box](/packaging/shipping-boxes) outside."] },
      ],
      faqs: [q("Can shoe boxes be posted without an outer box?", "Mailer-style ones can."), q("Do you print inside?", "Yes.")],
    },
  },
  {
    slug: "mug-boxes", name: "Mug Boxes", parent: "gift-boxes", group: "industries", icon: "carton",
    intro: "Mug boxes with inserts that protect ceramics in shops and in the post.",
    uses: ["ceramic mugs", "travel mugs", "mug gift sets", "promotional mugs"],
    style: "tuck box or window box with insert", material: "SBS or E-flute corrugated", finish: "full color, gloss or matte",
    tip: "Use corrugated board if the mug ships by post.",
    rich: {
      lede: "Mugs are one of the most popular gifts, and one of the easiest to chip. We make mug boxes with inserts that hold the handle and body still, in SBS for shops or corrugated for posting, printed in full color, from 100 boxes.",
      styles: ["gift-boxes", "cube-boxes", "window-boxes", "coffee-packaging", "corrugated-boxes", "mailer-boxes"],
      features: [f("Handle-safe inserts", "Stop the mug from moving."), f("Postable", "Corrugated options for e-commerce."), f("Window", "Show the mug design."), f("Gift sets", "Mug and coffee sets.")],
      guide: [
        { h: "Mug and coffee gift sets", p: ["Pair a mug with a bag of coffee in one box. See our [coffee packaging](/packaging/coffee-packaging)."] },
      ],
      faqs: [q("Are mug boxes safe for posting?", "Choose corrugated board with an insert."), q("Can I have a window?", "Yes.")],
    },
  },
  {
    slug: "golf-ball-boxes", name: "Golf Ball Boxes", parent: "sports-boxes", group: "industries", icon: "carton",
    intro: "Sleeves, two-ball boxes and dozen boxes for golf balls and golf gifts.",
    uses: ["golf ball sleeves", "dozen boxes", "corporate golf gifts", "tournament prizes"],
    style: "sleeve box, two-piece gift box or dozen carton", material: "SBS or rigid board", finish: "foil, gloss or matte",
    tip: "Two-ball gift boxes with a tee slot are popular for corporate golf days.",
    rich: {
      lede: "Golf balls make popular corporate gifts and tournament prizes, and the box is where your brand gets noticed. We make three-ball sleeves, two-ball gift boxes with tee slots and dozen cartons, printed with your logo, from 100 boxes.",
      styles: ["sports-boxes", "tennis-ball-boxes", "gift-boxes", "rigid-boxes", "two-piece-boxes", "display-boxes"],
      features: [f("Gift boxes", "Two balls and tees in an insert."), f("Sleeves", "Classic three-ball sleeves."), f("Corporate branding", "Your logo for golf days."), f("Dozen cartons", "Retail-ready packs.")],
      guide: [
        { h: "Corporate golf days", p: ["Rigid two-ball boxes with foil logos make memorable gifts. See all [sports boxes](/packaging/sports-boxes)."] },
      ],
      faqs: [q("Can you include tee slots?", "Yes."), q("Do you print the balls?", "We make the boxes.")],
    },
  },
  {
    slug: "tennis-ball-boxes", name: "Tennis Ball Boxes", parent: "sports-boxes", group: "industries", icon: "tall",
    intro: "Tall cartons and tube-style boxes for tennis, padel and squash balls.",
    uses: ["tennis balls", "padel balls", "squash balls", "club and event gifts"],
    style: "tall tuck carton or tube", material: "SBS or kraft card", finish: "gloss and full color",
    tip: "A window strip shows the balls and their color.",
    rich: {
      lede: "Ball sports packaging should feel as energetic as the game. We make tall cartons and tube-style boxes for tennis, padel and squash balls, with optional window strips, printed in bold full color for clubs, shops and events, from 100 boxes.",
      styles: ["golf-ball-boxes", "sports-boxes", "tube-packaging", "display-boxes", "hang-tab-boxes", "gift-boxes"],
      features: [f("Tall and slim", "Holds three or four balls."), f("Window strips", "Show the balls."), f("Club branding", "Great for clubs and events."), f("Display options", "Counter displays for pro shops.")],
      guide: [
        { h: "Selling in pro shops", p: ["Pair ball boxes with a [display box](/packaging/display-boxes) at the counter. See more on [sports boxes](/packaging/sports-boxes)."] },
      ],
      faqs: [q("How many balls fit?", "Usually three or four; we size to you."), q("Can it have a window?", "Yes.")],
    },
  },

  // ---------- Box styles ----------
  {
    slug: "cube-boxes", name: "Cube Boxes", parent: "product-boxes", group: "styles", icon: "carton",
    intro: "Square cube boxes in folding card or rigid board for candles, mugs, gifts and more.",
    uses: ["candles and jars", "mugs", "small gifts", "bath bombs"],
    style: "cube tuck box or two-piece", material: "SBS, kraft or rigid board", finish: "full color, foil, soft-touch",
    tip: "Cubes are great for stacking in shop displays.",
    rich: {
      lede: "Cube boxes are simple, neat and endlessly useful. We make square boxes in folding card or rigid board for candles, mugs, bath bombs and small gifts, with all six sides printable, from 100 boxes.",
      styles: ["product-boxes", "candle-boxes", "mug-boxes", "bath-bomb-boxes", "two-piece-boxes", "gift-boxes"],
      features: [f("Six printable sides", "Every face is a canvas."), f("Stackable", "Great for shelves and displays."), f("Folding or rigid", "Budget or premium."), f("Inserts", "Hold jars and mugs in place.")],
      guide: [
        { h: "Cube or two-piece?", p: ["A tuck cube ships flat; a [two-piece box](/packaging/two-piece-boxes) feels more premium."] },
      ],
      faqs: [q("Any cube size?", "Yes, made to your size."), q("Can I get kraft cubes?", "Yes.")],
    },
  },
  {
    slug: "two-piece-boxes", name: "Two-Piece Boxes", parent: "rigid-boxes", group: "styles", icon: "rigid",
    intro: "Lid-and-base boxes in rigid or folding board, the classic gift and retail box.",
    uses: ["candles and gifts", "apparel", "chocolate and treats", "presentation sets"],
    style: "lift-off lid and base", material: "rigid chipboard or folding SBS", finish: "foil, soft-touch, wrap papers",
    tip: "A slightly shorter lid shows a band of the base color, a nice design detail.",
    rich: {
      lede: "The two-piece box is the classic gift box: a base and a lift-off lid that make opening slow and satisfying. We make them in rigid board or folding card, any size, with inserts and premium finishes, from 100 boxes.",
      styles: ["rigid-boxes", "gift-boxes", "cube-boxes", "candle-boxes", "apparel-boxes", "book-boxes"],
      features: [f("Classic reveal", "A lift-off lid feels special."), f("Rigid or folding", "Choose for budget or luxury."), f("Full or partial lid", "Design detail options."), f("Inserts", "Hold products in place.")],
      guide: [
        { h: "Full-depth or shallow lid?", p: ["A full-depth lid covers the base entirely; a shallow lid shows the base. Both work in [rigid board](/packaging/rigid-boxes)."] },
      ],
      faqs: [q("Do two-piece boxes come flat?", "Folding ones do; rigid ones arrive made up."), q("Can I add a ribbon?", "Yes.")],
    },
  },
  {
    slug: "auto-lock-boxes", name: "Auto-Lock Bottom Boxes", parent: "tuck-boxes", group: "styles", icon: "carton",
    intro: "Crash-lock bottom cartons that pop into shape and hold heavier products securely.",
    uses: ["bottles and jars", "supplements", "heavier retail products", "fast packing lines"],
    style: "auto-lock (crash-lock) bottom with tuck top", material: "18–24pt SBS or E-flute", finish: "full color, gloss or matte",
    tip: "Auto-lock bottoms save time when packing large orders.",
    rich: {
      lede: "Auto-lock bottom boxes pop open into shape with the base already locked, which makes packing faster and holds heavier products securely. We make them in SBS card or E-flute for bottles, jars and supplements, printed in full color, from 100 boxes.",
      styles: ["tuck-boxes", "medicine-boxes", "bottle-boxes", "health-boxes", "product-boxes", "cube-boxes"],
      features: [f("Fast to pack", "Base locks as you open it."), f("Strong base", "Holds heavier products."), f("Ships flat", "Saves storage space."), f("Any size", "Made to your product.")],
      guide: [
        { h: "Tuck end vs auto-lock", p: ["[Tuck end boxes](/packaging/tuck-boxes) are cheaper for light products; auto-lock bottoms suit bottles and heavier items."] },
      ],
      faqs: [q("Are auto-lock boxes stronger?", "Yes, the base holds more weight."), q("Do they ship flat?", "Yes.")],
    },
  },
  {
    slug: "die-cut-boxes", name: "Die-Cut Boxes", parent: "product-boxes", group: "styles", icon: "window",
    intro: "Boxes with custom shapes, windows and cut-outs that make your packaging one of a kind.",
    uses: ["shaped windows", "custom shapes", "kraft boxes with cut-outs", "retail packaging"],
    style: "any custom die-cut shape", material: "SBS, kraft or E-flute", finish: "full color or kraft",
    tip: "A cut-out shaped like your logo is a simple way to stand out.",
    rich: {
      lede: "Die-cut boxes break away from plain rectangles. We cut custom windows, handles and shapes into card, kraft and corrugated board, so your packaging looks like nobody else's, from 100 boxes.",
      styles: ["window-boxes", "product-boxes", "kraft-boxes", "gable-boxes", "pillow-boxes", "display-boxes"],
      features: [f("Any shape", "Windows, handles and outlines."), f("Logo cut-outs", "A unique brand detail."), f("Kraft or color", "Works on all boards."), f("Free dieline", "We design the cut for you.")],
      guide: [
        { h: "Designing a cut-out", p: ["Keep cut-outs away from folds and leave enough board around them for strength. Our designers check this on your free [3D mockup](/free-mockup)."] },
      ],
      faqs: [q("Can you cut any shape?", "Almost any; we check it on the dieline."), q("Is there a setup cost?", "Your quote includes everything.")],
    },
  },
  {
    slug: "hang-tab-boxes", name: "Hang Tab Boxes", parent: "retail-boxes", group: "styles", icon: "tag",
    intro: "Retail cartons with a built-in hang tab for pegboards and hooks.",
    uses: ["small retail products", "cosmetics and accessories", "tools and hardware", "toys"],
    style: "tuck carton with euro or round hang tab", material: "16–18pt SBS", finish: "full color, gloss",
    tip: "A euro slot is the most common shape for retail hooks.",
    rich: {
      lede: "Hang tab boxes let your product hang at eye level on a shop peg. We make tuck cartons with built-in euro or round hang tabs for cosmetics, accessories, tools and toys, printed in full color, from 100 boxes.",
      styles: ["retail-boxes", "toy-boxes", "eyeliner-boxes", "lip-balm-boxes", "hardware-boxes", "display-boxes"],
      features: [f("Eye-level display", "Hangs where shoppers look."), f("Built-in tab", "No extra header card."), f("Window option", "Show the product."), f("Any size", "Made to your product.")],
      guide: [
        { h: "Hooks or counter?", p: ["If a shop has pegboards, hang tabs win. If not, a [display box](/packaging/display-boxes) is the better choice."] },
      ],
      faqs: [q("What hang hole shapes are available?", "Euro slot, round or custom."), q("Can I have a window?", "Yes.")],
    },
  },
  {
    slug: "white-boxes", name: "White Boxes", parent: "product-boxes", group: "styles", icon: "carton",
    intro: "Clean white boxes, plain or with a simple logo, for a minimal premium look.",
    uses: ["minimal branding", "bakeries and gifts", "subscription boxes", "retail"],
    style: "tuck, mailer or two-piece", material: "white SBS or white corrugated", finish: "one-color logo, foil or blank",
    tip: "A single foil logo on white looks premium and costs little.",
    rich: {
      lede: "White boxes are a blank canvas that feels clean and modern. We make plain white tuck boxes, mailers and two-piece boxes, or add a single logo in ink or foil for an understated premium look, from 100 boxes.",
      styles: ["product-boxes", "mailer-boxes", "two-piece-boxes", "kraft-boxes", "bakery-boxes", "labels-and-stickers"],
      features: [f("Clean and modern", "Minimal looks that suit any brand."), f("Low cost", "One-color or foil logos."), f("Add a sticker", "Brand with a label instead of print."), f("Any style", "Tuck, mailer or two-piece.")],
      guide: [
        { h: "Branding a white box cheaply", p: ["A foil logo or a printed [sticker](/packaging/labels-and-stickers) turns a white box into a branded one at a low cost. Prefer a natural look? See [kraft boxes](/packaging/kraft-boxes)."] },
      ],
      faqs: [q("Can I order plain white boxes?", "Yes, with or without a logo."), q("Is foil available on white?", "Yes.")],
    },
  },
  {
    slug: "archive-boxes", name: "Archive Boxes", parent: "corrugated-boxes", group: "styles", icon: "mailer",
    intro: "Strong corrugated archive and storage boxes with lids and hand holes.",
    uses: ["document storage", "office moves", "stock storage", "branded storage"],
    style: "corrugated box with lift-off lid and hand holes", material: "B or C-flute corrugated", finish: "one or two-color print",
    tip: "Add a label panel on the end so contents are easy to find.",
    rich: {
      lede: "Archive boxes keep files, stock and keepsakes safe and easy to find. We make strong corrugated storage boxes with lids, hand holes and label panels, printed with your logo, from 100 boxes. Great for offices, warehouses and branded storage.",
      styles: ["corrugated-boxes", "shipping-boxes", "cardboard-boxes", "labels-and-stickers", "mailer-boxes", "kraft-boxes"],
      features: [f("Strong", "B or C-flute corrugated."), f("Hand holes", "Easy to lift and carry."), f("Label panel", "Clear contents at a glance."), f("Stackable", "Lids that sit flat.")],
      guide: [
        { h: "Choosing board strength", p: ["For paper files, B-flute is fine. For heavier stock, choose C-flute or double wall. See [corrugated boxes](/packaging/corrugated-boxes)."] },
      ],
      faqs: [q("Do archive boxes have lids?", "Yes, lift-off lids."), q("Can you print our logo?", "Yes.")],
    },
  },
  {
    slug: "cone-sleeves", name: "Cone Sleeves", parent: "food-boxes", group: "print", icon: "sleeve",
    intro: "Printed paper sleeves for ice cream cones, crepes and wraps.",
    uses: ["ice cream cones", "crepes", "wraps and burritos", "street food"],
    style: "printed conical paper sleeve", material: "food-grade paper or card", finish: "food-safe inks",
    tip: "A sleeve keeps hands clean and puts your logo in every photo.",
    rich: {
      lede: "Cone sleeves wrap ice creams, crepes and wraps so they're easy to hold, keep hands clean and carry your logo into every photo. We print food-safe sleeves in full color to fit your cones, from 100 sleeves.",
      styles: ["food-boxes", "fries-boxes", "popcorn-boxes", "paper-bags", "labels-and-stickers", "sandwich-boxes"],
      features: [f("Food-safe", "Food-grade paper and inks."), f("Clean hands", "Catches drips and crumbs."), f("Photo-friendly", "Your logo in every post."), f("Any cone size", "Made to fit.")],
      guide: [
        { h: "Street food branding", p: ["Match your sleeves with [fries boxes](/packaging/fries-boxes) and [paper bags](/packaging/paper-bags) for a consistent stall or truck look."] },
      ],
      faqs: [q("Are cone sleeves food-safe?", "Yes."), q("Can you make sleeves for crepes?", "Yes.")],
    },
  },
  {
    slug: "dispenser-boxes", name: "Dispenser Boxes", parent: "display-boxes", group: "styles", icon: "display",
    intro: "Boxes with a pull-out or tear-open opening for dispensing sachets, tissues and single items.",
    uses: ["sachets and stick packs", "tissues and wipes", "gloves", "tea bags and sweets"],
    style: "dispenser carton with perforated opening", material: "SBS or E-flute", finish: "full color",
    tip: "A perforated tear-open front keeps the box neat until first use.",
    rich: {
      lede: "Dispenser boxes let customers take one item at a time, which is perfect for sachets, tea bags, wipes, gloves and sweets. We make them with perforated or pull-out openings, printed in full color, from 100 boxes.",
      styles: ["display-boxes", "tea-packaging", "health-boxes", "candy-boxes", "medicine-boxes", "retail-boxes"],
      features: [f("One at a time", "Easy, tidy dispensing."), f("Tear-open front", "Perforated for first use."), f("Counter-ready", "Works as a display too."), f("Any size", "Made to your product.")],
      guide: [
        { h: "Dispenser or display?", p: ["A dispenser hands out one item; a [display box](/packaging/display-boxes) shows several products. Some designs do both."] },
      ],
      faqs: [q("Can the opening be perforated?", "Yes."), q("What products suit dispenser boxes?", "Sachets, tea, wipes, gloves and sweets.")],
    },
  },
  {
    slug: "ribbon-boxes", name: "Ribbon Boxes", parent: "gift-boxes", group: "styles", icon: "rigid",
    intro: "Magnetic and two-piece boxes finished with a ribbon tie or ribbon closure.",
    uses: ["gift boxes", "bridesmaid and wedding gifts", "luxury retail", "corporate gifts"],
    style: "magnetic or two-piece with ribbon", material: "rigid chipboard", finish: "ribbon, foil and soft-touch",
    tip: "Choose a ribbon color from your brand palette for a finished look.",
    rich: {
      lede: "A ribbon makes any box feel like a present. We make rigid magnetic and two-piece boxes with ribbon ties and closures in your brand colors, finished with foil and soft-touch, from 100 boxes.",
      styles: ["gift-boxes", "rigid-boxes", "two-piece-boxes", "favor-boxes", "invitation-boxes", "wrapping-paper"],
      features: [f("Ready to give", "No wrapping needed."), f("Brand colors", "Ribbon to match your palette."), f("Magnetic or lift-off", "Two classic styles."), f("Luxury finishes", "Foil and soft-touch.")],
      guide: [
        { h: "Wedding and event gifts", p: ["Ribbon boxes are popular for bridesmaid gifts and event favors. See [favor boxes](/packaging/favor-boxes) for smaller sizes."] },
      ],
      faqs: [q("Can I choose the ribbon color?", "Yes."), q("Is the ribbon attached?", "It can be attached or tied separately.")],
    },
  },
  // ---------- Added from the keyword audit (2026-11) ----------
  {
    slug: "magnetic-closure-boxes", name: "Magnetic Closure Boxes", parent: "rigid-boxes", group: "styles", icon: "rigid",
    intro: "Rigid gift boxes with a hidden magnet in the flap, so the lid shuts with a soft click every time.",
    uses: ["PR and influencer kits", "luxury gifts", "skincare and fragrance sets", "corporate gifts"],
    style: "one-piece rigid box with a magnetic flap lid", material: "1200–1500gsm greyboard wrapped in printed paper", finish: "soft-touch, foil, emboss and ribbon pulls",
    tip: "Ask for a ribbon pull on the inside of the flap. It makes the first opening easier and looks great on video.",
    rich: {
      lede: "Magnetic closure boxes are the ones people keep. A thin magnet sits inside the front flap, so the lid closes with a satisfying click and stays shut without tape or ribbon. We make them from thick greyboard wrapped in your printed paper, to your exact size, from 100 boxes. They also ship flat on request, which saves a lot on freight.",
      styles: ["rigid-boxes", "luxury-boxes", "drawer-boxes", "two-piece-boxes", "gift-boxes", "ribbon-boxes"],
      features: [f("That click", "A hidden magnet holds the lid closed and gives a neat, premium feel."), f("Built to keep", "Thick rigid board that customers reuse for years."), f("Collapsible option", "Folding magnetic boxes ship flat and pop up in seconds."), f("Inserts made to fit", "Card, foam or EVA inserts hold each item in place.")],
      guide: [
        { h: "Fixed or collapsible?", p: ["A fixed magnetic box arrives fully built. It feels the sturdiest, but it takes up space in shipping and storage. A collapsible one folds flat and clicks together with a few small magnets, so it can cut freight costs a lot on larger orders."] },
        { h: "Choosing the wrap and finish", p: ["Most brands pick a smooth printed paper with soft-touch lamination, then add foil or an embossed logo on the lid. Textured or linen papers look lovely with a simple one-color logo. Our [finishes guide](/blog/packaging-finishes-explained) shows what each one does."] },
        { h: "Shipping a magnetic box", p: ["Rigid boxes are strong but not made for courier networks on their own. For online orders, pack yours inside a plain or printed [mailer box](/packaging/mailer-boxes) so it arrives without dents."] },
      ],
      faqs: [q("Are magnetic boxes expensive?", "They cost more than folding cartons because they are built by hand from rigid board. A collapsible style and a simple wrap keep the price down, and your quote will show both options."), q("Can the magnet be felt through the box?", "No. It is hidden inside the flap and under the wrap paper, so the outside stays smooth."), q("Can you add a ribbon or a window?", "Yes, ribbon pulls, ribbon ties and small clear windows are all possible."), q("Do collapsible magnetic boxes stay strong?", "Yes. Once assembled they feel almost the same as a fixed box, and they can be flattened again for storage.")],
    },
  },
  {
    slug: "drawer-boxes", name: "Drawer Boxes", parent: "rigid-boxes", group: "styles", icon: "rigid",
    intro: "Sliding drawer boxes, also called sleeve and tray boxes, that open like a matchbox with a ribbon or thumb notch.",
    uses: ["jewelry and watches", "chocolates and candles", "gift sets", "stationery and cards"],
    style: "rigid or card tray sliding inside an outer sleeve", material: "rigid greyboard, or 18–24pt card for lighter items", finish: "foil, emboss, soft-touch and ribbon pulls",
    tip: "Print a short message on the tray floor. It is only seen once the drawer slides out, which makes it feel like a small surprise.",
    rich: {
      lede: "A drawer box slides open slowly, and that little moment is why brands love it. The tray sits inside a printed sleeve and pulls out with a ribbon tab or a thumb notch. We make sliding drawer boxes in rigid board for gifts and jewelry, or in lighter card for cheaper everyday products, cut to your size from 100 boxes.",
      styles: ["magnetic-closure-boxes", "luxury-boxes", "jewelry-boxes", "chocolate-boxes", "rigid-boxes", "trays-and-sleeves"],
      features: [f("A slow reveal", "The tray slides out, so the product is seen bit by bit."), f("Rigid or card", "Rigid board for luxury, folding card when price matters more."), f("Ribbon or notch", "A ribbon pull or a thumb cut-out to open it."), f("Stacked drawers", "Two, three or four drawers in one box for sets and samplers.")],
      guide: [
        { h: "Rigid drawer box or card sleeve and tray?", p: ["Rigid drawer boxes are thick, heavy and made to keep, which suits jewelry, watches and luxury gifts. A folding [tray and sleeve](/packaging/trays-and-sleeves) in printed card looks similar, costs much less and ships flat, so it works well for soap, chocolate and stationery."] },
        { h: "Making the drawer easy to open", p: ["A drawer that is too tight frustrates people, and one that is too loose falls out. We build in a small clearance and add a ribbon pull or a thumb notch, then check the fit on your proof before production."] },
        { h: "Multi-drawer boxes", p: ["Stacked drawers make great advent boxes, tasting sets and sampler kits. Each drawer can be printed differently, and the outside works as one big canvas for your brand."] },
      ],
      faqs: [q("What is the difference between a drawer box and a sleeve box?", "They are the same idea. Some people call it a sliding box, a matchbox style or a sleeve and tray box."), q("Can you print inside the drawer?", "Yes. Many brands print a pattern or a short note on the tray floor."), q("Can I add an insert for rings or necklaces?", "Yes, foam, velvet-wrapped or card inserts cut to your pieces."), q("Do drawer boxes ship flat?", "Card versions ship flat. Rigid ones arrive built, so they take more space.")],
    },
  },
  {
    slug: "luxury-boxes", name: "Luxury Boxes", parent: "rigid-boxes", group: "styles", icon: "rigid",
    intro: "Luxury packaging boxes in rigid board with foil, embossing and soft-touch, for products that need to feel special.",
    uses: ["fragrance and skincare", "jewelry and watches", "premium chocolate and spirits", "VIP and launch gifts"],
    style: "magnetic, drawer, two-piece or book-style rigid box", material: "1200–1500gsm greyboard wrapped in specialty or printed paper", finish: "hot foil, emboss, deboss, soft-touch and spot UV",
    tip: "Two finishes are usually enough. A soft-touch wrap with one foil logo often looks more expensive than five effects at once.",
    rich: {
      lede: "Luxury packaging is not about adding every finish at once. It's thick board, a clean design, a good fit and one or two details done really well. We make luxury boxes in magnetic, drawer, two-piece and book styles, wrapped in printed or specialty paper and finished with foil or embossing, to your exact size from 100 boxes.",
      styles: ["magnetic-closure-boxes", "drawer-boxes", "two-piece-boxes", "rigid-boxes", "perfume-boxes", "jewelry-boxes"],
      features: [f("Heavy rigid board", "1200–1500gsm greyboard that feels solid in the hand."), f("Specialty papers", "Soft-touch, linen, pearl or textured wraps."), f("Foil and emboss", "Gold, silver, rose gold or holographic foil, raised or pressed logos."), f("Fitted inserts", "Foam, velvet or card inserts so nothing moves.")],
      guide: [
        { h: "Which luxury box style?", p: ["[Magnetic closure boxes](/packaging/magnetic-closure-boxes) are the most popular for PR kits and gifts. [Drawer boxes](/packaging/drawer-boxes) suit jewelry and small sets. [Two-piece boxes](/packaging/two-piece-boxes) with a lift-off lid feel classic and work well for apparel and candles."] },
        { h: "Getting a premium look on a budget", p: ["Keep the print to one or two colors on a dark or textured paper, then add one foil detail. Doing less, but doing it carefully, usually reads as more expensive, and it keeps the cost per box down."] },
        { h: "Protecting the unboxing", p: ["Luxury boxes are made to be seen, so ship them inside a plain outer carton or a printed [mailer box](/packaging/mailer-boxes). Tissue paper and a sticker seal add a nice extra layer for very little."] },
      ],
      faqs: [q("What is the minimum order for luxury boxes?", "From 100 boxes per design. Bigger runs bring the price per box down a lot, because rigid boxes take hand work to set up."), q("How long do luxury boxes take?", "Production usually takes 10–12 business days after you approve the proof. Rigid boxes are wrapped by hand, so very large runs can take a little longer, and we confirm the date in your quote."), q("Can you match my brand color exactly?", "Yes. We can print with Pantone colors or source a wrap paper close to your shade, and we show it on the proof."), q("Can I see a sample first?", "We send a free digital proof and 3D mockup before anything is made. If you need more than that, ask us about samples in your quote.")],
    },
  },
  {
    slug: "folding-cartons", name: "Folding Cartons", parent: "product-boxes", group: "styles", icon: "carton",
    intro: "Printed folding cartons in SBS or kraft card, the everyday retail box for cosmetics, food, supplements and more.",
    uses: ["cosmetics and skincare", "supplements and vitamins", "food and confectionery", "small electronics and accessories"],
    style: "straight tuck, reverse tuck, auto-lock bottom or sleeve carton", material: "14–24pt SBS or kraft paperboard", finish: "matte, gloss, soft-touch, foil and spot UV",
    tip: "If the carton holds anything over about 1 lb (450 g), choose an auto-lock bottom so it can't drop through.",
    rich: {
      lede: "Folding cartons are the boxes you see on almost every shop shelf. They're made from one sheet of printed paperboard, ship flat, fold up in seconds and cost far less than rigid boxes. We print yours in full color on SBS or kraft card, cut to your size, in tuck end, auto-lock or sleeve styles from 100 cartons.",
      styles: ["tuck-boxes", "auto-lock-boxes", "product-boxes", "window-boxes", "hang-tab-boxes", "cosmetic-boxes"],
      features: [f("Low cost per box", "One sheet of card, printed and cut, so the price stays low."), f("Ships flat", "Saves space in freight and in your storeroom."), f("Many styles", "Straight tuck, reverse tuck, auto-lock and sleeves."), f("Shelf-ready print", "Bright full color with foil or spot UV if you want it.")],
      guide: [
        { h: "Which folding carton style?", p: ["A reverse tuck end is the most common and cheapest. A straight tuck end opens on one side, which looks tidier for gift products. An [auto-lock bottom](/packaging/auto-lock-boxes) pops into shape and holds heavier items. A sleeve slides over a tray or a product."] },
        { h: "SBS or kraft?", p: ["White SBS card gives the brightest color and the sharpest detail. Kraft card has a natural brown look that suits eco and food brands, but colors print darker on it. Our [materials guide](/materials-and-finishes) has examples of both."] },
        { h: "Adding a window or hang tab", p: ["A clear [window](/packaging/window-boxes) lets shoppers see the product without opening the box. A [hang tab](/packaging/hang-tab-boxes) lets the carton hang on a peg in retail displays."] },
      ],
      faqs: [q("What is a folding carton?", "A box made from one printed and die-cut sheet of paperboard that folds into shape. Most cosmetic, food and pharmacy boxes are folding cartons."), q("What thickness of card do I need?", "14–16pt for light items like cards and cosmetics, 18–24pt for heavier products. We suggest the right one in your quote."), q("Are folding cartons recyclable?", "Yes. Paperboard cartons go in paper recycling, as long as you avoid heavy plastic lamination."), q("Can each carton have a different design?", "Yes, each design starts at 100 cartons.")],
    },
  },
  {
    slug: "stand-up-pouches", name: "Stand-Up Pouches", parent: "mylar-bags", group: "bags", icon: "pouch",
    intro: "Printed stand-up pouches with a zip lock, for coffee, snacks, supplements, pet treats and bath products.",
    uses: ["coffee and tea", "snacks, candy and dried fruit", "supplements and protein powder", "pet treats and bath salts"],
    style: "doypack stand-up pouch with zip lock and tear notch", material: "food-safe multi-layer film, matte, gloss, kraft or clear", finish: "matte or gloss lamination, spot gloss, window and hang hole",
    tip: "Choose a matte finish with a spot gloss on your logo. It looks premium and hides fingerprints on the shelf.",
    rich: {
      lede: "Stand-up pouches stand on the shelf by themselves, reseal with a zip, and weigh far less than a jar or a tin. We print them in full color on food-safe film, with a zip lock, tear notch and the size and window you want, from 100 pouches. Popular for coffee, snacks, supplements and bath products.",
      styles: ["mylar-bags", "spouted-pouches", "coffee-packaging", "tea-packaging", "labels-and-stickers", "candy-boxes"],
      features: [f("Stands up on its own", "A gusseted base keeps it upright on the shelf."), f("Resealable", "A press-to-close zip keeps the contents fresh."), f("Food-safe film", "Barrier layers keep out air, moisture and light."), f("Light to ship", "Much lighter than jars and tins, so postage costs less.")],
      guide: [
        { h: "Clear, kraft or fully printed?", p: ["A clear window shows food at its best. Kraft-look film suits coffee, tea and natural products. A fully printed metallized pouch blocks light completely, which is what coffee, supplements and anything sensitive to light need."] },
        { h: "Extras worth adding", p: ["A one-way degassing valve is a must for freshly roasted coffee. A hang hole lets pouches hang on retail pegs. A tear notch above the zip makes the first opening easy. See [coffee packaging](/packaging/coffee-packaging) for more coffee-specific options."] },
        { h: "Pouch or box?", p: ["Pouches cost less to make and ship, but boxes stack better and give more space to print on. Some brands put a pouch inside a printed [folding carton](/packaging/folding-cartons) for a gift version."] },
      ],
      faqs: [q("Are your stand-up pouches food safe?", "Yes. The inner layer is food-safe film, suitable for dry foods, coffee, snacks and supplements."), q("Can you add a window?", "Yes, in any shape, as long as the product inside is not sensitive to light."), q("Do you make compostable or recyclable pouches?", "We can quote mono-material recyclable film and compostable kraft options. Tell us in the quote form."), q("What sizes are available?", "Any size. Tell us how much product goes in, by weight or volume, and we'll suggest the right pouch size.")],
    },
  },
  {
    slug: "tissue-paper", name: "Tissue Paper", parent: "wrapping-paper", group: "print", icon: "label",
    intro: "Custom printed tissue paper with your logo or pattern, to wrap orders and make the unboxing feel finished.",
    uses: ["clothing and apparel orders", "gift boxes and hampers", "candles and homeware", "subscription boxes"],
    style: "printed tissue sheets, repeat logo or full pattern", material: "17–28gsm acid-free tissue, white, kraft or colored", finish: "one or two-color print with soy-based inks",
    tip: "A small logo repeated across the sheet looks good whichever way the tissue is folded.",
    rich: {
      lede: "Custom tissue paper is one of the cheapest ways to make an order feel special. A box opens, and the first thing your customer sees is your logo wrapped around their order. We print tissue in one or two colors on white, kraft or colored sheets, with your logo repeated or as a full pattern, ready to use in mailers and gift boxes.",
      styles: ["wrapping-paper", "labels-and-stickers", "mailer-boxes", "apparel-boxes", "gift-boxes", "poly-bags"],
      features: [f("Big impact, small cost", "One of the cheapest upgrades to any order."), f("Your logo, repeated", "Pattern repeats that look right however the sheet is folded."), f("Eco inks", "Soy-based inks on acid-free, recyclable tissue."), f("Pairs with stickers", "Seal each wrap with a printed logo sticker.")],
      guide: [
        { h: "How to design tissue paper", p: ["Keep it simple. A small logo or icon repeated with plenty of space works better than a large logo that gets lost in the folds. One color on white or kraft is the most popular and the most affordable."] },
        { h: "Finish the unboxing", p: ["Wrap the product in tissue, close it with a logo [sticker](/packaging/labels-and-stickers), and pack it in a [mailer box](/packaging/mailer-boxes) printed on the inside. It's a simple set-up, and it's what people tend to share online."] },
        { h: "How much do I need?", p: ["One standard sheet (20 x 30 in, or 50 x 75 cm) wraps a folded T-shirt. Most small brands order a few hundred sheets with their first boxes, then reorder both together."] },
      ],
      faqs: [q("Is tissue cheaper in bigger runs?", "Yes, much cheaper per sheet. Tissue is often ordered with boxes, so ask for both in one quote and we'll price them together."), q("Can you print in my brand color?", "Yes, with Pantone-matched inks."), q("Is printed tissue paper recyclable?", "Yes. We print with soy-based inks on acid-free paper."), q("What sizes can you make?", "Standard 20 x 30 in (50 x 75 cm) sheets, or a custom size cut to fit your box.")],
    },
  },
];

export const productCategories: Category[] = products.map(({ rich: _rich, ...c }) => c);
export const productContent: Record<string, RichContent> = Object.fromEntries(
  products.map((p) => {
    const extra = productExtras[p.slug];
    return [p.slug, extra ? { ...p.rich, guide: [...p.rich.guide, ...extra.guide], faqs: [...p.rich.faqs, ...extra.faqs] } : p.rich];
  }),
);
