export interface AgeTestProvider {
  id: string;
  name: string;
  type: string;
  price: string;
  description: string;
  methodology: string;
  sinclairAffiliated: boolean;
  affiliateUrl: string;
}

export const ageTestProviders: AgeTestProvider[] = [
  {
    id: "tallyhealth",
    name: "Tally Health",
    type: "Epigenetic (DNA Methylation)",
    price: "$229/test or $149/test with subscription",
    description:
      "Founded by David Sinclair, Tally Health uses a cheek swab to measure DNA methylation patterns and calculate your biological age. Includes a daily supplement and personalized action plan.",
    methodology:
      "Uses a proprietary epigenetic clock based on DNA methylation analysis. Measures ~900 CpG sites. Results include a TallyAge score and rate-of-aging metric.",
    sinclairAffiliated: true,
    affiliateUrl: "#",
  },
  {
    id: "trudiagnostic",
    name: "TruDiagnostic (TruAge)",
    type: "Epigenetic (DNA Methylation)",
    price: "$229 (COMPLETE) / $499 (COMPLETE+)",
    description:
      "The most comprehensive consumer epigenetic test. TruAge COMPLETE measures biological age using multiple epigenetic clocks including DunedinPACE (rate of aging), immune cell composition, and telomere length estimation.",
    methodology:
      "Uses the Illumina EPIC array to measure 900,000+ CpG sites. Reports multiple validated clocks: Horvath, Hannum, PhenoAge, GrimAge, and DunedinPACE. The most scientifically rigorous consumer option.",
    sinclairAffiliated: false,
    affiliateUrl: "#",
  },
  {
    id: "glycanage",
    name: "GlycanAge",
    type: "Glycan-based",
    price: "$295/test",
    description:
      "GlycanAge measures your biological age through IgG glycosylation patterns — the sugar molecules attached to your antibodies. This reflects immune system aging and chronic inflammation levels.",
    methodology:
      "Analyzes glycan patterns on IgG antibodies from a dried blood spot. Glycan profiles shift with age and are responsive to lifestyle interventions (often within 3–6 months), making them good for tracking changes.",
    sinclairAffiliated: false,
    affiliateUrl: "#",
  },
  {
    id: "insidetracker",
    name: "InsideTracker",
    type: "Blood Biomarker Panel",
    price: "$249–$899 depending on panel",
    description:
      "Blood biomarker platform that measures up to 43 blood markers and calculates an InnerAge score. Sinclair is an advisor. Provides personalized nutrition, exercise, and supplement recommendations.",
    methodology:
      "Uses a standard blood draw to measure markers like glucose, hsCRP, ApoB, testosterone, cortisol, and more. The InnerAge algorithm weights these markers against population data to estimate biological age.",
    sinclairAffiliated: true,
    affiliateUrl: "#",
  },
];
