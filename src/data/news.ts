import type { DatePrecision } from "../lib/dates";

export interface NewsItem {
  date: Date;
  datePrecision: DatePrecision;
  text: string;
  href?: string;
}

export const news: NewsItem[] = [
  {
    date: new Date("2026-06-01T00:00:00.000Z"),
    datePrecision: "month",
    text: "Joined the Rotskoff Lab at Stanford to work on interpretable features in protein models.",
  },
  {
    date: new Date("2026-01-01T00:00:00.000Z"),
    datePrecision: "year",
    text: "“The Mechanism for Ligand Activation of the Smoothened G Protein-Coupled Receptor” published in PNAS.",
    href: "https://doi.org/10.1073/pnas.2604658123",
  },
  {
    date: new Date("2024-12-01T00:00:00.000Z"),
    datePrecision: "month",
    text: "Joined the Fong Lab at Caltech working on machine learning potentials for electrochemical nitrate reduction.",
  },
];
