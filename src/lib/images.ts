/**
 * Product photos in public/images/packaging, one per packaging page.
 * Each has a large version (1000px) and a small one (-sm, 480px) for cards.
 * Pages without a photo fall back to the drawn icon.
 */
const withPhoto = new Set<string>([
  "apparel-boxes",
  "bakery-boxes",
  "bottle-boxes",
  "candle-boxes",
  "cardboard-boxes",
  "cbd-boxes",
  "cereal-boxes",
  "chocolate-boxes",
  "christmas-boxes",
  "cigarette-boxes",
  "coffee-packaging",
  "corrugated-boxes",
  "cosmetic-boxes",
  "cosmetic-jars",
  "display-boxes",
  "electronics-boxes",
  "favour-boxes",
  "food-boxes",
  "gable-boxes",
  "gift-boxes",
  "hang-tags",
  "hardware-boxes",
  "health-boxes",
  "hemp-boxes",
  "holiday-boxes",
  "jewellery-boxes",
  "kraft-boxes",
  "labels-and-stickers",
  "mailer-boxes",
  "mylar-bags",
  "paper-bags",
  "pharma-boxes",
  "pillow-boxes",
  "pizza-boxes",
  "poly-bags",
  "pre-roll-boxes",
  "product-boxes",
  "retail-boxes",
  "rigid-boxes",
  "round-boxes",
  "shipping-boxes",
  "soap-boxes",
  "sports-boxes",
  "spouted-pouches",
  "stationery-boxes",
  "tea-packaging",
  "tin-packaging",
  "tote-bags",
  "trays-and-sleeves",
  "tuck-boxes",
  "vape-boxes",
  "window-boxes",
]);

export type Photo = { src: string; srcSm: string };

export function packPhoto(slug: string): Photo | null {
  if (!withPhoto.has(slug)) return null;
  return { src: `/images/packaging/${slug}.webp`, srcSm: `/images/packaging/${slug}-sm.webp` };
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
