"""Builds src/data/categories.ts from the OneClickPackaging category export.

source-categories.json was exported from the OneClickPackaging theme (category slugs and the
spec "profiles": what each box is for, material, finish). Snug reuses those facts but writes its
own names, slugs and copy, so the two sites never share text.

Run: python3 scripts/build-categories.py
"""
import json
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = json.loads((ROOT / "scripts" / "source-categories.json").read_text())

# Snug slug, name, group, icon, one-line intro written for Snug.
# Groups: styles, industries, bags, print. Order inside each group = display order.
SNUG = {
    "mailer-boxes": ("mailer-boxes", "Mailer Boxes", "styles", "mailer", "Tough corrugated mailers printed inside and out, made for the moment a customer lifts the lid."),
    "shipping-boxes": ("shipping-boxes", "Shipping Boxes", "styles", "mailer", "Branded shipping boxes that protect orders in transit and still look good on the doorstep."),
    "custom-corrugated-boxes": ("corrugated-boxes", "Corrugated Boxes", "styles", "carton", "Strong single or double-wall corrugated boxes for heavy, fragile or bulk orders."),
    "rigid-boxes": ("rigid-boxes", "Rigid Boxes", "styles", "rigid", "Wrapped greyboard boxes with lift-off, magnetic or drawer lids for products that deserve a reveal."),
    "kraft-boxes": ("kraft-boxes", "Kraft Boxes", "styles", "kraft", "Natural brown kraft boxes that feel honest, recycle easily and print beautifully in one or two colours."),
    "cardboard-boxes": ("cardboard-boxes", "Cardboard Boxes", "styles", "carton", "Everyday printed cardboard boxes in any size, from small cartons to retail packs."),
    "tuck-boxes": ("tuck-boxes", "Tuck Boxes", "styles", "tall", "Classic tuck end cartons that ship flat, fold in seconds and suit almost any small product."),
    "pillow-boxes": ("pillow-boxes", "Pillow Boxes", "styles", "pillow", "Curved pillow boxes that close without glue, perfect for small gifts, favours and accessories."),
    "gable-boxes": ("gable-boxes", "Gable Boxes", "styles", "gable", "Gable boxes with a built-in handle, easy to carry for treats, gifts and takeaway."),
    "display-boxes": ("display-boxes", "Display Boxes", "styles", "display", "Counter-top display boxes that turn a shelf or till point into a mini shop for your brand."),
    "window-packaging-boxes": ("window-boxes", "Window Boxes", "styles", "window", "Boxes with a die-cut window so shoppers can see the product before they buy."),
    "round-boxes": ("round-boxes", "Round Boxes", "styles", "tube", "Cylinder boxes with a lid for candles, tea, hats, flowers and luxury gifts."),
    "tube-packaging": ("tube-packaging", "Tube Packaging", "styles", "tube", "Printed cardboard tubes for posters, bottles, cosmetics and anything long and slim."),
    "trays-sleeves": ("trays-and-sleeves", "Trays & Sleeves", "styles", "sleeve", "A sturdy tray with a printed slide-on sleeve, a simple way to make a box feel special."),
    "product-boxes": ("product-boxes", "Product Boxes", "styles", "tall", "Printed product boxes in any size and style, built around exactly what goes inside."),
    "retail-boxes": ("retail-boxes", "Retail Boxes", "styles", "tall", "Shelf-ready retail boxes that grab attention in store and carry all your product info."),
    "gift-boxes": ("gift-boxes", "Gift Boxes", "styles", "rigid", "Magnetic, two-piece and window gift boxes that make any present feel premium."),
    "favor-boxes": ("favour-boxes", "Favour Boxes", "styles", "pillow", "Small printed favour boxes for weddings, parties and corporate events."),

    "cosmetic-boxes": ("cosmetic-boxes", "Cosmetic Boxes", "industries", "tall", "Beauty packaging for skincare, makeup and serums, with foil, emboss and soft-touch finishes."),
    "cosmetic-jars": ("cosmetic-jars", "Cosmetic Jar Boxes", "industries", "jar", "Boxes and inserts made to fit cream jars, balms and pots so they arrive perfect."),
    "soap-boxes": ("soap-boxes", "Soap Boxes", "industries", "kraft", "Soap and bath bomb boxes with cut-outs and sleeves that show off the product and its scent."),
    "candle-boxes": ("candle-boxes", "Candle Boxes", "industries", "rigid", "Candle boxes with inserts that protect glass jars and look lovely on a shelf."),
    "jewelry-boxes": ("jewellery-boxes", "Jewellery Boxes", "industries", "rigid", "Ring, necklace and bracelet boxes with velvet or foam inserts and a luxury finish."),
    "apparel-boxes": ("apparel-boxes", "Apparel Boxes", "industries", "mailer", "Clothing boxes for tees, swimwear, socks and accessories that ship well and gift better."),
    "food-boxes": ("food-boxes", "Food Boxes", "industries", "gable", "Food-safe, grease-resistant boxes for restaurants, takeaway and packaged snacks."),
    "bakery-boxes": ("bakery-boxes", "Bakery Boxes", "industries", "window", "Cake, cupcake, cookie and pastry boxes, with or without a window to show the bake."),
    "pizza-boxes": ("pizza-boxes", "Pizza Boxes", "industries", "mailer", "Printed corrugated pizza boxes that keep the heat in and put your logo on every delivery."),
    "chocolate-boxes": ("chocolate-boxes", "Chocolate Boxes", "industries", "rigid", "Chocolate bar sleeves, truffle boxes and gift sets with food-safe inserts."),
    "cereal-boxes": ("cereal-boxes", "Cereal Boxes", "industries", "tall", "Food-grade cereal and granola boxes printed in bold colour for the supermarket shelf."),
    "coffee-packaging": ("coffee-packaging", "Coffee Packaging", "industries", "pouch", "Coffee bags and boxes that keep beans fresh and put your roastery front and centre."),
    "tea-packaging": ("tea-packaging", "Tea Packaging", "industries", "tall", "Tea boxes, caddies and pouches for loose leaf and tea bags, printed with your brand."),
    "bottle-boxes": ("bottle-boxes", "Bottle Boxes", "industries", "tall", "Bottle boxes with inserts for wine, spirits, oils and drinks, so nothing rattles or breaks."),
    "cbd-boxes": ("cbd-boxes", "CBD Boxes", "industries", "tall", "CBD oil, gummy and cream boxes with space for the compliance information you need."),
    "hemp-boxes": ("hemp-boxes", "Hemp Boxes", "industries", "kraft", "Printed boxes for hemp products, often in natural kraft to match an earthy brand."),
    "pre-roll-boxes": ("pre-roll-boxes", "Pre-Roll Boxes", "industries", "tall", "Single and multi-pack pre-roll boxes with inserts and child-resistant options."),
    "vape-boxes": ("vape-boxes", "Vape Boxes", "industries", "tall", "Cartridge and device boxes with inserts that hold hardware firmly in place."),
    "cigarette-boxes": ("cigarette-boxes", "Cigarette Boxes", "industries", "tall", "Flip-top and slide cigarette, e-cig and lighter boxes in sturdy printed card."),
    "custom-pharma-boxes": ("pharma-boxes", "Pharma Boxes", "industries", "tall", "Clean, clear medicine and supplement boxes with room for dosage and batch details."),
    "health-boxes": ("health-boxes", "Health & Wellness Boxes", "industries", "tall", "Packaging for supplements, wellness and personal care products that builds trust."),
    "electronic-boxes": ("electronics-boxes", "Electronics Boxes", "industries", "rigid", "Protective boxes with foam or card inserts for gadgets, chargers and accessories."),
    "hardware-boxes": ("hardware-boxes", "Hardware Boxes", "industries", "carton", "Heavy-duty boxes for tools, fixings and parts, printed with clear product details."),
    "auto-part-boxes": ("auto-parts-boxes", "Auto Parts Boxes", "industries", "carton", "Strong printed boxes for brake pads, filters and spares that survive rough handling."),
    "sports-boxes": ("sports-boxes", "Sports Boxes", "industries", "mailer", "Boxes for balls, gear and accessories that look as good as the kit inside."),
    "stationary-boxes": ("stationery-boxes", "Stationery Boxes", "industries", "sleeve", "Boxes for pens, pencils, notebooks and planners, ideal for gift sets and retail."),
    "christmas-boxes": ("christmas-boxes", "Christmas Boxes", "industries", "rigid", "Festive boxes for gifts, hampers and treats. Order early to beat the holiday rush."),
    "holiday-boxes": ("holiday-boxes", "Holiday Boxes", "industries", "rigid", "Seasonal packaging for Valentine's, Easter, Halloween and every gifting moment."),

    "custom-mylar-bags": ("mylar-bags", "Mylar Bags", "bags", "pouch", "Resealable, smell-proof mylar pouches printed in full colour for food, coffee and more."),
    "spouted-pouches": ("spouted-pouches", "Spouted Pouches", "bags", "pouch", "Flexible pouches with a spout for drinks, sauces, baby food and liquid refills."),
    "custom-paper-bags": ("paper-bags", "Paper Bags", "bags", "tote", "Printed kraft and white paper bags with handles for shops, events and takeaway."),
    "custom-tote-bags": ("tote-bags", "Tote Bags", "bags", "tote", "Reusable printed tote bags that keep your brand out and about long after the sale."),
    "custom-poly-bags": ("poly-bags", "Poly Mailer Bags", "bags", "pouch", "Lightweight printed poly mailers for clothing and soft goods that cut postage costs."),

    "labels-stickers": ("labels-and-stickers", "Labels & Stickers", "print", "label", "Vinyl, paper, kraft and holographic labels and stickers in any shape or size."),
    "hang-tags": ("hang-tags", "Hang Tags", "print", "tag", "Printed swing tags for clothing and products, with string, foil and rounded corners."),
    "custom-tin-packaging": ("tin-packaging", "Tin Packaging", "print", "tube", "Printed metal tins for tea, candles, mints and cosmetics that customers keep and reuse."),
    "wrapping-paper": ("wrapping-paper", "Wrapping Paper", "print", "label", "Branded gift wrap and tissue paper printed with your logo or pattern."),
}

# Specs for categories the source had no specific profile for (it fell back to a generic one).
EXTRA = {
    "auto-part-boxes": dict(uses=["brake pads and filters", "spark plugs and sensors", "spare and replacement parts", "workshop and retail stock"], style="tuck end or crash-lock bottom box", material="E or B flute corrugated or 24pt card", finish="matte or gloss with clear product labelling", tip="Use a crash-lock bottom for heavier parts; it holds weight far better than a tuck end."),
    "bottle-boxes": dict(uses=["wine and spirits", "olive oil and sauces", "beer and soft drinks", "perfume and essential oils"], style="tall tuck end, rigid or window box with a neck insert", material="18–24pt SBS card or E-flute corrugated", finish="matte, soft-touch or foil", tip="Add a card insert that grips the neck; it stops the bottle moving and is cheaper than foam."),
    "cardboard-boxes": dict(uses=["retail products", "e-commerce orders", "gift and promo packs", "samples and kits"], style="tuck end, sleeve, pillow or mailer box", material="14–24pt SBS or kraft card", finish="matte or gloss lamination", tip=None),
    "custom-corrugated-boxes": dict(uses=["e-commerce shipping", "heavy and bulk orders", "fragile items", "moving and storage"], style="regular slotted carton or mailer box", material="single or double-wall B, C or E flute corrugated", finish="flexo or full-colour print, inside or out", tip="Choose E-flute for neat printed mailers and B or C flute when the box carries real weight."),
    "electronic-boxes": dict(uses=["phones and accessories", "chargers and cables", "headphones and speakers", "smart home devices"], style="rigid two-piece or tuck end box with an insert", material="rigid greyboard or 18–24pt SBS card", finish="matte, soft-touch, spot UV", tip="A die-cut card insert holds a device as well as foam and keeps the box fully recyclable."),
    "hardware-boxes": dict(uses=["tools and tool sets", "screws and fixings", "locks and handles", "spare parts"], style="crash-lock bottom or tuck end box", material="24pt card or E-flute corrugated", finish="gloss or matte with clear product details", tip=None),
    "health-boxes": dict(uses=["vitamins and supplements", "personal care products", "wellness kits", "first aid items"], style="tuck end or sleeve box", material="16–18pt SBS card", finish="matte or gloss, foil logo", tip=None),
    "holiday-boxes": dict(uses=["seasonal gifts", "corporate gifting", "treats and hampers", "limited-edition products"], style="rigid, magnetic, pillow or window box", material="rigid greyboard, SBS or kraft card", finish="foil, spot UV, gloss or soft-touch", tip="Order holiday packaging at least six weeks before you need it to allow for proofing and delivery."),
    "product-boxes": dict(uses=["retail products", "e-commerce orders", "gift and promo packs", "product launches"], style="tuck end, mailer or two-piece box", material="16–18pt SBS, kraft or corrugated board", finish="matte or gloss, foil and spot UV", tip="Send us one sample of the product or its exact size; it is the fastest way to a box that fits on the first proof."),
    "retail-boxes": dict(uses=["shelf and peg products", "cosmetics and personal care", "toys and accessories", "food and drink"], style="tuck end, window or hanger-tab box", material="16–24pt SBS card", finish="gloss, matte, spot UV, foil", tip="Add a hanger tab if the product might hang on a peg wall; it costs little and opens more stores."),
    "rigid-boxes": dict(uses=["luxury and gift products", "jewellery and watches", "electronics", "PR and launch kits"], style="two-piece, magnetic closure or drawer box", material="1200–1500gsm greyboard wrapped in printed paper", finish="soft-touch, foil, emboss, ribbon pull", tip="Magnetic closures feel the most premium; a two-piece lid is the most cost-effective rigid box."),
    "round-boxes": dict(uses=["candles", "tea and coffee", "hats and flowers", "luxury gifts"], style="cylinder with lift-off lid", material="rigid paperboard tube wrapped in printed paper", finish="matte, gloss, foil", tip=None),
    "spouted-pouches": dict(uses=["juices and smoothies", "sauces and condiments", "baby food", "liquid refills"], style="stand-up pouch with spout and cap", material="food-safe multi-layer laminate", finish="gloss or matte, full-colour print", tip=None),
    "stationary-boxes": dict(uses=["pens and pencils", "notebooks and planners", "art supplies", "gift sets"], style="tuck end, sleeve or two-piece box", material="16–18pt SBS or rigid board", finish="matte, soft-touch, foil", tip=None),
    "tea-packaging": dict(uses=["loose leaf tea", "tea bags", "gift sets", "sample packs"], style="tuck end box, caddy or stand-up pouch", material="16–18pt SBS card or food-safe pouch film", finish="matte, foil, emboss", tip="Use an inner foil bag or pouch inside a printed box to keep loose tea fresh for longer."),
    "custom-tin-packaging": dict(uses=["tea and coffee", "candles", "mints and sweets", "balms and cosmetics"], style="round or rectangular tin with lid", material="tinplate steel", finish="printed or embossed lid", tip=None),
    "trays-sleeves": dict(uses=["chocolates and sweets", "soaps and cosmetics", "stationery sets", "gift products"], style="tray with a printed slide-on sleeve", material="16–24pt SBS or kraft card", finish="matte, gloss, foil on the sleeve", tip="Print only the sleeve and keep the tray plain; it looks premium and keeps the cost down."),
    "tube-packaging": dict(uses=["posters and prints", "bottles and spirits", "cosmetics", "tea and food"], style="cardboard tube with lid", material="spiral-wound paperboard", finish="printed wrap, foil, matte or gloss", tip=None),
    "tuck-boxes": dict(uses=["cosmetics", "supplements", "small retail products", "samples"], style="straight or reverse tuck end box", material="14–18pt SBS or kraft card", finish="matte or gloss, spot UV", tip="Reverse tuck end is the cheapest style to produce; straight tuck end looks neater from the front."),
    "window-packaging-boxes": dict(uses=["bakery and food", "toys", "cosmetics", "gifts"], style="tuck end or gable box with a die-cut window", material="16–18pt SBS or kraft card with a clear film window", finish="matte or gloss", tip=None),
    "wrapping-paper": dict(uses=["gift wrapping", "retail wrapping", "subscription boxes", "events"], style="printed sheets or rolls", material="uncoated, coated or kraft paper", finish="full-colour or one-colour print", tip=None),
}

FEATURED = ["mailer-boxes", "rigid-boxes", "cosmetic-boxes", "mylar-bags", "kraft-boxes", "display-boxes", "food-boxes", "labels-and-stickers"]


def ts(value):
    return json.dumps(value, ensure_ascii=False)


rows = []
for src in SRC:
    key = src["slug"]
    if key not in SNUG:
        continue
    slug, name, group, icon, intro = SNUG[key]
    prof = src["profile"]
    if src["rule"] is None:
        e = EXTRA[key]
        spec = dict(uses=e["uses"], style=e["style"], material=e["material"], finish=e["finish"], tip=e["tip"])
    else:
        spec = dict(uses=prof["for"], style=prof["style"], material=prof["material"], finish=prof["finish"], tip=prof["tip"])
    rows.append(dict(slug=slug, name=name, group=group, icon=icon, intro=intro, **spec))

order = {k: i for i, k in enumerate(SNUG)}
src_key = {SNUG[k][0]: k for k in SNUG}
rows.sort(key=lambda r: order[src_key[r["slug"]]])

lines = [
    "// Generated by scripts/build-categories.py. Edit that script, not this file.",
    'import type { Category } from "./types";',
    "",
    "export const categories: Category[] = [",
]
for r in rows:
    lines.append("  {")
    for k in ["slug", "name", "group", "icon", "intro", "uses", "style", "material", "finish", "tip"]:
        lines.append(f"    {k}: {ts(r[k])},")
    lines.append("  },")
lines += ["];", "", f"export const featuredSlugs = {ts(FEATURED)};", ""]
(ROOT / "src" / "data" / "categories.ts").write_text("\n".join(lines))
print(f"wrote {len(rows)} categories")
