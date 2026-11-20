export type CategoryGroup = "styles" | "industries" | "bags" | "print";

export type IconKey =
  | "mailer"
  | "carton"
  | "rigid"
  | "kraft"
  | "tall"
  | "pillow"
  | "gable"
  | "display"
  | "window"
  | "tube"
  | "sleeve"
  | "jar"
  | "pouch"
  | "tote"
  | "label"
  | "tag";

export type Category = {
  slug: string;
  name: string;
  group: CategoryGroup;
  icon: IconKey;
  /** One-line intro written for Snug (never copied from OneClickPackaging). */
  intro: string;
  /** What people pack in it. */
  uses: string[];
  style: string;
  material: string;
  finish: string;
  tip: string | null;
};
