export type StyleCard = { name: string; blurb: string; img: string };
/** A style is either a card of its own or the slug of another Snug category (linked, with its photo). */
export type StyleEntry = StyleCard | string;
/** Guide paragraphs may hold links written as [text](/path) for internal linking. */
export type RichContent = {
  lede: string;
  styles: StyleEntry[];
  features: { title: string; text: string }[];
  guide: { h: string; p: string[] }[];
  faqs: { q: string; a: string }[];
};

export const s = (name: string, blurb: string, img: string): StyleCard => ({ name, blurb, img });
