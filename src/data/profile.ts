export interface Profile {
  name: string;
  headline: string;
  homepageSummary: string;
  affiliation?: string;
  shortBio: string;
  /** Spellings of the site owner's name as they appear in author lists. */
  authorNames: string[];
  links: { label: string; href: string }[];
  domain: string;
}

export function defineProfile(value: Profile): Profile {
  return value;
}

export const profile = defineProfile({
  name: "Ryan Yu",
  headline: "Computational Chemical Engineering Undergraduate · AI for Science",
  homepageSummary:
    "Interpretable protein representations, machine-learned potentials, and molecular simulation",
  affiliation: "California Institute of Technology",
  shortBio:
    "Caltech Chemical Engineering (Computational) undergraduate working across interpretable protein representations, machine-learned interatomic potentials, and molecular simulation.",
  authorNames: ["Ryan D. Yu", "Ryan Yu"],
  links: [
    { label: "Email", href: "mailto:rdyu@caltech.edu" },
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=ycuWxs4AAAAJ",
    },
    { label: "GitHub", href: "https://github.com/rdyu-cm" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ryan-yu-0bb27a23b",
    },
  ],
  domain: "https://rdyu-cm.github.io",
});
