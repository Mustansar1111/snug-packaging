import { Tabs } from "./Tabs";
import { CountUp } from "./CountUp";
import { site } from "@/lib/site";

/** Four quick facts under the hero. Numbers count up as they scroll in. */
export function CategoryStats() {
  const stats = [
    { n: String(site.moq), label: "minimum order per design" },
    { n: "10–12", label: "business days to produce" },
    { n: "$0", label: "design help and 3D mockup" },
    { n: "4", label: "markets: USA, UK, Australia, Europe" },
  ];
  return (
    <section className="cstats band" aria-label="Key facts">
      <div className="wrap">
        <ul data-reveal-group>
          {stats.map((s) => (
            <li key={s.label}>
              <CountUp value={s.n} />
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const options = {
  material: {
    label: "Material",
    intro: "The board decides how the box feels and how much it protects.",
    items: [
      ["SBS card", "Smooth white card that prints bright, sharp color."],
      ["Kraft card", "Natural brown board for an earthy, eco look."],
      ["Corrugated (E, B or F flute)", "Fluted board that protects products in the post."],
      ["Rigid chipboard", "Thick board wrapped in printed paper for premium boxes."],
      ["Mylar and poly film", "Flexible film for pouches, bags and sachets."],
    ],
  },
  printing: {
    label: "Printing",
    intro: "Full color as standard, with exact brand colors when you need them.",
    items: [
      ["CMYK full color", "Photos, gradients and artwork on every side."],
      ["Pantone (PMS) matching", "Your exact brand color, matched by ink."],
      ["Inside printing", "A message or pattern inside the lid or base."],
      ["One-color on kraft", "A simple logo print that keeps costs down."],
    ],
  },
  finishes: {
    label: "Finishes",
    intro: "A finishing touch is often what makes people keep the box.",
    items: [
      ["Matte or gloss lamination", "Protects the print and sets the look."],
      ["Soft-touch", "A velvety feel that says premium."],
      ["Spot UV", "Raised gloss on a logo or pattern."],
      ["Foil stamping", "Gold, silver, rose gold or holographic."],
      ["Embossing and debossing", "Texture you can feel with your fingers."],
    ],
  },
  addons: {
    label: "Add-ons",
    intro: "Small extras that make unboxing better.",
    items: [
      ["Windows", "A clear cut-out so customers see the product."],
      ["Inserts", "Card or foam cut to hold each item in place."],
      ["Sleeves, ribbons and handles", "For gift sets and carry-out boxes."],
      ["Labels and stickers", "To seal the box or add batch details."],
      ["Thank-you cards and tags", "A personal note in every order."],
    ],
  },
} as const;

/** Material, printing, finish and add-on choices, in tabs. Same for every category. */
export function CustomizeTabs({ name }: { name: string }) {
  return (
    <section className="block band" id="customize">
      <div className="wrap">
        <div className="head">
          <div>
            <p className="eyebrow">Make it yours</p>
            <h2>Customize your {name}</h2>
          </div>
          <p>Choose the board, print and finish. Not sure? Tell us your product and budget and we&apos;ll recommend a mix.</p>
        </div>
        <Tabs
          label="Customize by"
          tabs={Object.entries(options).map(([key, o]) => ({
            key: `opt-${key}`,
            label: o.label,
            panel: (
              <div className="opt-panel">
                <p className="opt-intro">{o.intro}</p>
                <ul className="opt-list">
                  {o.items.map(([t, d]) => (
                    <li key={t}>
                      <b>{t}</b>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
                <a className="btn btn-plum" href="#quote">
                  Get a quote <span aria-hidden="true">→</span>
                </a>
              </div>
            ),
          }))}
        />
      </div>
    </section>
  );
}

/** Six reasons to order from Snug. */
export function WhyOrder({ name }: { name: string }) {
  const items = [
    ["Free design help", "Our designers lay out your artwork at no cost, even if you only have a logo."],
    ["Fair pricing", "The price per box drops as your quantity goes up. Your quote shows the options."],
    ["Proof before print", "You approve a 3D mockup and a digital proof before anything is printed."],
    ["Low minimums", `Order from ${site.moq} boxes per design, perfect for launches and tests.`],
    ["Quick production", `Production takes ${site.turnaround} once you approve the proof.`],
    ["Delivered to you", "Shipped flat-packed to your door in the USA, UK, Australia or Europe."],
  ];
  return (
    <section className="block band why-order on-dark">
      <div className="wrap">
        <div className="head">
          <div>
            <p className="eyebrow">Why Snug</p>
            <h2>Why brands order their {name} from us</h2>
          </div>
          <p>One team looks after you from quote to delivery, and nothing is printed until you&apos;re happy with the proof.</p>
        </div>
        <ul className="why-grid" data-reveal-group>
          {items.map(([t, d]) => (
            <li key={t}>
              <h3>{t}</h3>
              <p>{d}</p>
            </li>
          ))}
        </ul>
        <a className="btn btn-apricot" href="#quote">
          Get my quote <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
