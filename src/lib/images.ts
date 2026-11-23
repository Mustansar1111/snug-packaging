/**
 * Product photos in public/images/packaging, one per packaging page.
 * Each has a large version (1000px) and a small one (-sm, 480px) for cards.
 * Pages without a photo fall back to the drawn icon.
 */
const withPhoto = new Set<string>([
  "apparel-boxes",
  "drawer-boxes",
  "stand-up-pouches",
  "bakery-boxes",
  "bath-bomb-boxes",
  "book-boxes",
  "bottle-boxes",
  "cake-boxes",
  "candle-boxes",
  "candy-boxes",
  "cardboard-boxes",
  "cbd-boxes",
  "cbd-gummies-boxes",
  "cbd-oil-boxes",
  "cereal-boxes",
  "chinese-takeout-boxes",
  "chocolate-boxes",
  "christmas-boxes",
  "cigarette-boxes",
  "coffee-packaging",
  "cookie-boxes",
  "corrugated-boxes",
  "cosmetic-boxes",
  "cosmetic-jars",
  "cream-boxes",
  "cupcake-boxes",
  "display-boxes",
  "donut-boxes",
  "e-liquid-boxes",
  "electronics-boxes",
  "eyelash-boxes",
  "eyeliner-boxes",
  "eyeshadow-boxes",
  "favor-boxes",
  "food-boxes",
  "fries-boxes",
  "gable-boxes",
  "gift-boxes",
  "golf-ball-boxes",
  "hang-tags",
  "hardware-boxes",
  "health-boxes",
  "hemp-boxes",
  "holiday-boxes",
  "invitation-boxes",
  "jewelry-boxes",
  "kraft-boxes",
  "labels-and-stickers",
  "lip-balm-boxes",
  "lip-gloss-boxes",
  "lotion-boxes",
  "macaron-boxes",
  "mailer-boxes",
  "makeup-boxes",
  "mascara-boxes",
  "medicine-boxes",
  "mylar-bags",
  "paper-bags",
  "perfume-boxes",
  "pharma-boxes",
  "pillow-boxes",
  "pizza-boxes",
  "poly-bags",
  "popcorn-boxes",
  "pre-roll-boxes",
  "product-boxes",
  "retail-boxes",
  "rigid-boxes",
  "round-boxes",
  "sandwich-boxes",
  "shipping-boxes",
  "shoe-boxes",
  "soap-boxes",
  "sports-boxes",
  "spouted-pouches",
  "stationery-boxes",
  "tea-packaging",
  "tie-boxes",
  "tin-packaging",
  "tote-bags",
  "trays-and-sleeves",
  "truffle-boxes",
  "tuck-boxes",
  "two-piece-boxes",
  "vape-boxes",
  "window-boxes",
  "magnetic-closure-boxes",
  "white-boxes",
  "ribbon-boxes",
  "luxury-boxes",
]);

export type Photo = { src: string; srcSm: string; srcSet: string };

export function packPhoto(slug: string): Photo | null {
  if (!withPhoto.has(slug)) return null;
  const src = `/images/packaging/${slug}.webp`;
  const srcSm = `/images/packaging/${slug}-sm.webp`;
  // Small files are 480 px wide; full files are at least 600 px, so the browser picks the full one
  // only for big or high-density screens.
  return { src, srcSm, srcSet: `${srcSm} 480w, ${src} 600w` };
}

/** Which packaging photo stands for each industry. */
const industryPhoto: Record<string, string> = {
  cosmetics: "cosmetic-boxes",
  "food-and-bakery": "bakery-boxes",
  apparel: "apparel-boxes",
  "cbd-and-candles": "candle-boxes",
  "subscription-boxes": "mailer-boxes",
  retail: "retail-boxes",
};

export const industryPhotoFor = (slug: string) => (industryPhoto[slug] ? packPhoto(industryPhoto[slug]) : null);
