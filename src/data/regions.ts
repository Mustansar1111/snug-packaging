export type Region = {
  slug: string;
  code: string;
  name: string;
  /** How buyers there talk about size. */
  units: string;
  currency: string;
  /** Countries offered in the quote form for this region. */
  countries: string[];
  headline: string;
  intro: string;
};

export const regions: Region[] = [
  {
    slug: "us",
    code: "US",
    name: "United States",
    units: "inches",
    currency: "USD",
    countries: ["United States"],
    headline: "Custom packaging for US brands",
    intro: "Printed boxes, bags and labels delivered anywhere in the United States, quoted in dollars with sizes in inches.",
  },
  {
    slug: "uk",
    code: "UK",
    name: "United Kingdom",
    units: "millimetres or inches",
    currency: "GBP",
    countries: ["United Kingdom"],
    headline: "Custom packaging for UK brands",
    intro: "Printed boxes, bags and labels delivered across England, Scotland, Wales and Northern Ireland, quoted in pounds.",
  },
  {
    slug: "australia",
    code: "AU",
    name: "Australia",
    units: "millimetres",
    currency: "AUD",
    countries: ["Australia", "New Zealand"],
    headline: "Custom packaging for Australian brands",
    intro: "Printed boxes, bags and labels delivered to every Australian state, quoted in Australian dollars with sizes in millimetres.",
  },
  {
    slug: "europe",
    code: "EU",
    name: "Europe",
    units: "millimetres",
    currency: "EUR",
    countries: ["Germany", "France", "Netherlands", "Ireland", "Spain", "Italy", "Belgium", "Sweden", "Denmark", "Other EU country"],
    headline: "Custom packaging for European brands",
    intro: "Printed boxes, bags and labels delivered across the European Union, quoted in euros with sizes in millimetres.",
  },
];

export const allCountries = [...regions.flatMap((r) => r.countries), "Other"];
