export type EvidenceLevel = "Strong" | "Moderate" | "Emerging";
export type Tier = "Essentials" | "Advanced";
export type Category = "supplements" | "food" | "devices";

export interface Study {
  title: string;
  journal: string;
  year: number;
  pubmedId?: string;
  summary: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: Category;
  tier: Tier;
  subcategory?: string;
  evidenceLevel: EvidenceLevel;
  tagline: string;
  description: string;
  mechanism: string;
  dosage: string;
  safety: string;
  skepticsCorner: string;
  studies: Study[];
  affiliateLinks: { brand: string; url: string }[];
  sinclairAffiliated?: boolean;
}

export const products: Product[] = [
  // === ESSENTIALS SUPPLEMENTS ===
  {
    id: "nmn",
    name: "NMN (Nicotinamide Mononucleotide)",
    slug: "nmn",
    category: "supplements",
    tier: "Essentials",
    evidenceLevel: "Moderate",
    tagline: "NAD+ precursor for cellular energy and repair",
    description:
      "NMN is a direct precursor to NAD+, a coenzyme critical for energy metabolism, DNA repair, and sirtuin activation. NAD+ levels decline significantly with age, and restoring them is a central thesis of modern longevity science.",
    mechanism:
      "NMN is converted to NAD+ via the enzyme NMNAT. NAD+ fuels mitochondrial oxidative phosphorylation (ATP production) and activates sirtuins — proteins involved in DNA repair, gene silencing, and metabolic regulation.",
    dosage:
      "Most human studies use 250–1000 mg/day orally. The MIB-626 trial used 1000 mg/day. Higher doses have not shown proportionally greater benefits.",
    safety:
      "Generally well-tolerated in human trials up to 1200 mg/day. No serious adverse effects reported. Long-term safety data (>1 year) is still limited. May interact with medications metabolized by the liver.",
    skepticsCorner:
      "While animal data is impressive, human trials are still small and short-term. The largest RCT (MIB-626) showed NAD+ increases but mixed results on functional outcomes. We don't yet know if raising NAD+ in humans produces the dramatic effects seen in mice. Sinclair's personal advocacy, while compelling, comes with a financial conflict of interest.",
    studies: [
      {
        title: "Effect of oral NMN on NAD+ metabolism in healthy middle-aged and older adults",
        journal: "Nature Aging",
        year: 2022,
        pubmedId: "37118425",
        summary: "12-week RCT showing NMN increased blood NAD+ levels in middle-aged adults.",
      },
      {
        title: "MIB-626, an oral NMN formulation, increases NAD+ in healthy volunteers",
        journal: "Journal of Clinical Endocrinology & Metabolism",
        year: 2023,
        pubmedId: "36477339",
        summary: "Double-blind RCT demonstrating dose-dependent NAD+ elevation with NMN supplementation.",
      },
    ],
    affiliateLinks: [
      { brand: "Tally Health", url: "#" },
      { brand: "ProHealth Longevity", url: "#" },
      { brand: "Renue By Science", url: "#" },
    ],
    sinclairAffiliated: true,
  },
  {
    id: "omega3",
    name: "Omega-3 Fatty Acids (EPA/DHA)",
    slug: "omega-3",
    category: "supplements",
    tier: "Essentials",
    evidenceLevel: "Strong",
    tagline: "Anti-inflammatory essential fats for heart, brain, and cellular aging",
    description:
      "Omega-3 fatty acids — particularly EPA and DHA — are among the most well-studied supplements for aging. They reduce systemic inflammation, support cardiovascular health, and have been linked to longer telomeres.",
    mechanism:
      "EPA and DHA incorporate into cell membranes, modulating inflammatory signaling (reducing pro-inflammatory cytokines like IL-6 and TNF-alpha). They also influence gene expression via PPAR receptors and support mitochondrial membrane fluidity.",
    dosage:
      "Most studies use 1–4g combined EPA/DHA daily. The VITAL trial used 840mg (460mg EPA + 380mg DHA). Higher EPA doses (2g+) show stronger anti-inflammatory effects.",
    safety:
      "Very safe at recommended doses. May increase bleeding risk at very high doses (>3g/day) — relevant for those on blood thinners. Fish burps are common but harmless. Choose products tested for heavy metals.",
    skepticsCorner:
      "The VITAL trial showed no reduction in major cardiovascular events in the general population, challenging earlier observational data. Benefits may be strongest in people with low baseline omega-3 intake or high inflammation. The telomere data is observational, not causal.",
    studies: [
      {
        title: "Association of marine omega-3 fatty acid levels with telomeric aging in patients with coronary heart disease",
        journal: "JAMA",
        year: 2010,
        pubmedId: "20085953",
        summary: "Higher omega-3 blood levels associated with slower telomere shortening over 5 years.",
      },
      {
        title: "VITAL Research Group: Marine omega-3 fatty acids and prevention of cardiovascular disease and cancer",
        journal: "New England Journal of Medicine",
        year: 2019,
        pubmedId: "30415637",
        summary: "Large RCT (25,871 participants) showing reduced heart attack risk but no overall cardiovascular mortality benefit.",
      },
    ],
    affiliateLinks: [
      { brand: "Nordic Naturals", url: "#" },
      { brand: "Carlson Labs", url: "#" },
    ],
  },
  {
    id: "vitamind",
    name: "Vitamin D3 + K2",
    slug: "vitamin-d3-k2",
    category: "supplements",
    tier: "Essentials",
    evidenceLevel: "Strong",
    tagline: "The sunshine vitamin — foundational for immune function and bone health",
    description:
      "Vitamin D deficiency accelerates multiple aging biomarkers. D3 supplementation is one of the most broadly supported interventions, especially for those over 40 or living in northern latitudes. K2 ensures calcium goes to bones, not arteries.",
    mechanism:
      "Vitamin D3 binds to the VDR receptor in nearly every cell type, modulating ~1,000 genes involved in immune function, inflammation, and cell differentiation. K2 activates Matrix GLA Protein (MGP) which inhibits arterial calcification.",
    dosage:
      "1,000–5,000 IU/day D3 is common. Optimal blood level: 40–60 ng/mL (test via blood draw). K2 as MK-7: 100–200 mcg/day.",
    safety:
      "Very safe at recommended doses. Toxicity rare below 10,000 IU/day. Always test blood levels before mega-dosing. K2 is important to pair with D3 to prevent calcium misallocation.",
    skepticsCorner:
      "While deficiency clearly harms health, whether supplementing above sufficiency provides additional longevity benefits is less clear. The VITAL trial showed no cancer mortality reduction from D3 supplementation. Test your levels before supplementing.",
    studies: [
      {
        title: "Vitamin D supplementation and total mortality: a meta-analysis of randomized controlled trials",
        journal: "Archives of Internal Medicine",
        year: 2007,
        pubmedId: "17846391",
        summary: "Meta-analysis of 18 RCTs showing modest reduction in all-cause mortality with D3 supplementation.",
      },
      {
        title: "Vitamin K2 supplementation and arterial stiffness in postmenopausal women",
        journal: "Thrombosis and Haemostasis",
        year: 2015,
        pubmedId: "25694037",
        summary: "3-year RCT showing MK-7 supplementation improved arterial stiffness, especially in women with high baseline stiffness.",
      },
    ],
    affiliateLinks: [
      { brand: "Thorne D3/K2", url: "#" },
      { brand: "Life Extension", url: "#" },
    ],
  },
  {
    id: "creatine",
    name: "Creatine Monohydrate",
    slug: "creatine",
    category: "supplements",
    tier: "Essentials",
    evidenceLevel: "Strong",
    tagline: "ATP recycling for muscle, brain, and cellular energy",
    description:
      "Creatine is one of the most studied supplements in history. Beyond athletic performance, it supports muscle preservation in aging, cognitive function, and directly participates in cellular ATP recycling — making it relevant to the mitochondrial energy thesis of aging.",
    mechanism:
      "Creatine donates a phosphate group to ADP, rapidly regenerating ATP without requiring mitochondrial oxidative phosphorylation. This is especially important in high-energy-demand tissues like muscle and brain. It also has antioxidant properties.",
    dosage:
      "3–5g/day of creatine monohydrate. No loading phase necessary. Consistent daily intake is more important than timing.",
    safety:
      "Extremely safe. Decades of research with no serious adverse effects. Does not cause kidney damage in healthy individuals (a persistent myth). May cause minor water retention initially.",
    skepticsCorner:
      "Creatine is genuinely one of the best-evidenced supplements available. The main caveat for longevity is that most studies focus on athletic performance rather than aging-specific outcomes. Cognitive benefits are most pronounced in vegetarians and the elderly.",
    studies: [
      {
        title: "Effects of creatine supplementation on cognitive function in older adults: a meta-analysis",
        journal: "Experimental Gerontology",
        year: 2018,
        pubmedId: "29704637",
        summary: "Meta-analysis showing creatine improves short-term memory and reasoning in older adults.",
      },
      {
        title: "Creatine supplementation and aging musculoskeletal health",
        journal: "Journal of Clinical Medicine",
        year: 2021,
        pubmedId: "34768411",
        summary: "Review of evidence supporting creatine for preserving muscle mass and function in aging populations.",
      },
    ],
    affiliateLinks: [
      { brand: "Thorne Creatine", url: "#" },
      { brand: "Creapure", url: "#" },
    ],
  },
  {
    id: "coq10",
    name: "CoQ10 / Ubiquinol",
    slug: "coq10",
    category: "supplements",
    tier: "Essentials",
    evidenceLevel: "Moderate",
    tagline: "Mitochondrial electron carrier for cellular energy production",
    description:
      "CoQ10 is a critical component of the mitochondrial electron transport chain, directly involved in ATP production. Levels decline with age and with statin use. Ubiquinol is the reduced (active) form with better bioavailability.",
    mechanism:
      "CoQ10 shuttles electrons between Complex I/II and Complex III in the mitochondrial inner membrane. This is essential for oxidative phosphorylation — the primary ATP-generating pathway. It also acts as a lipid-soluble antioxidant.",
    dosage:
      "100–300mg/day of ubiquinol (or 200–600mg of ubiquinone). Take with fat for absorption. Statin users may need higher doses.",
    safety:
      "Very safe. Mild GI effects occasionally. No significant drug interactions except potential reduction in warfarin effectiveness at high doses.",
    skepticsCorner:
      "While CoQ10's biochemistry is well-established, evidence that supplementation meaningfully slows aging in healthy people (not just statin users or those with deficiency) is limited. The Q-SYMBIO heart failure trial was positive but small.",
    studies: [
      {
        title: "Q-SYMBIO: Coenzyme Q10 as adjunctive treatment of chronic heart failure",
        journal: "JACC: Heart Failure",
        year: 2014,
        pubmedId: "25282031",
        summary: "RCT showing CoQ10 reduced major cardiovascular events in heart failure patients over 2 years.",
      },
      {
        title: "Plasma coenzyme Q10 levels and all-cause mortality in the general population",
        journal: "Molecular Nutrition & Food Research",
        year: 2020,
        pubmedId: "31960586",
        summary: "Observational study linking higher plasma CoQ10 levels with reduced all-cause mortality.",
      },
    ],
    affiliateLinks: [
      { brand: "Jarrow Ubiquinol", url: "#" },
      { brand: "Life Extension Super Ubiquinol", url: "#" },
    ],
  },
  {
    id: "magnesium",
    name: "Magnesium (Glycinate / Threonate)",
    slug: "magnesium",
    category: "supplements",
    tier: "Essentials",
    evidenceLevel: "Strong",
    tagline: "Essential mineral for 300+ enzymatic reactions including sleep and nerve function",
    description:
      "Magnesium is involved in over 300 enzymatic reactions and most adults are deficient. Glycinate form is gentle and well-absorbed; threonate (Magtein) crosses the blood-brain barrier for cognitive support.",
    mechanism:
      "Magnesium is a cofactor for ATP synthesis (Mg-ATP is the biologically active form), DNA repair enzymes, and GABA receptor activation (promoting sleep). Threonate specifically increases brain magnesium levels.",
    dosage:
      "200–400mg elemental magnesium daily. Glycinate for general use and sleep; threonate (2g Magtein) for cognitive focus. Can combine forms.",
    safety:
      "Very safe. Excess is excreted renally in healthy individuals. High doses of some forms (oxide, citrate) cause loose stools. Avoid in severe renal impairment.",
    skepticsCorner:
      "Magnesium supplementation is most beneficial for those who are deficient — which is admittedly common (~50% of US adults). For those with adequate dietary intake, supplementation may offer diminishing returns. The cognitive claims for threonate are based on limited human data.",
    studies: [
      {
        title: "Suboptimal magnesium status in the United States: are the health consequences underestimated?",
        journal: "Nutrition Reviews",
        year: 2012,
        pubmedId: "22364157",
        summary: "Review establishing widespread magnesium inadequacy and its association with chronic disease.",
      },
      {
        title: "Enhancement of learning and memory by elevating brain magnesium",
        journal: "Neuron",
        year: 2010,
        pubmedId: "20152124",
        summary: "Magnesium threonate increased brain magnesium and improved learning/memory in animal models (foundational study for Magtein).",
      },
    ],
    affiliateLinks: [
      { brand: "Thorne Magnesium Bisglycinate", url: "#" },
      { brand: "Life Extension Neuro-Mag", url: "#" },
    ],
  },
  {
    id: "collagen",
    name: "Collagen Peptides",
    slug: "collagen",
    category: "supplements",
    tier: "Essentials",
    evidenceLevel: "Moderate",
    tagline: "Bioactive peptides for skin elasticity and joint health",
    description:
      "Hydrolyzed collagen peptides provide amino acids (glycine, proline, hydroxyproline) that serve as building blocks for skin, cartilage, and connective tissue. Collagen production declines ~1% per year after age 25.",
    mechanism:
      "Collagen peptides are absorbed as di- and tripeptides that accumulate in dermal tissue. They stimulate fibroblasts to produce new collagen and hyaluronic acid, and activate chondrocytes in cartilage.",
    dosage:
      "5–15g/day of hydrolyzed collagen peptides. Type I/III for skin; Type II for joints. Studies typically use 2.5–10g daily.",
    safety:
      "Very safe. Derived from animal sources (bovine, marine, chicken). Not suitable for vegans. Rare allergic reactions in those with fish/shellfish allergies (marine collagen).",
    skepticsCorner:
      "RCTs showing skin benefits exist but are generally small and often industry-funded. Your body breaks collagen down into amino acids — it doesn't just route them to your skin. The benefits may partly come from simply providing glycine, which many diets lack.",
    studies: [
      {
        title: "Oral collagen supplementation: a systematic review of dermatological applications",
        journal: "Journal of Drugs in Dermatology",
        year: 2019,
        pubmedId: "30681787",
        summary: "Systematic review of 11 studies showing collagen supplementation improves skin elasticity and hydration.",
      },
    ],
    affiliateLinks: [
      { brand: "Vital Proteins", url: "#" },
      { brand: "Sports Research", url: "#" },
    ],
  },

  // === ADVANCED SUPPLEMENTS ===
  {
    id: "urolithinA",
    name: "Urolithin A (Mitopure)",
    slug: "urolithin-a",
    category: "supplements",
    tier: "Advanced",
    evidenceLevel: "Moderate",
    tagline: "Mitophagy activator for mitochondrial renewal",
    description:
      "Urolithin A triggers mitophagy — the selective recycling of damaged mitochondria. It's naturally produced from gut bacteria metabolizing ellagitannins (found in pomegranates), but most people don't produce enough. Timeline's Mitopure is a direct supplement form.",
    mechanism:
      "Urolithin A activates PINK1/Parkin-mediated mitophagy, clearing dysfunctional mitochondria and stimulating biogenesis of new ones. This improves cellular energy capacity and reduces oxidative stress from damaged mitochondria.",
    dosage:
      "500–1000mg/day (based on published Amazentis/Timeline trials). The clinical studies used their proprietary Mitopure form.",
    safety:
      "Well-tolerated in published trials up to 2000mg. FDA GRAS status. No significant adverse effects reported.",
    skepticsCorner:
      "The published RCTs are mostly funded by Amazentis (the company that makes Mitopure), which is a conflict of interest. While the mechanism is compelling and the data is real, independent replication is needed. Also, regular pomegranate consumption may provide similar benefits for those who naturally produce urolithin A.",
    studies: [
      {
        title: "Urolithin A improves muscle strength, exercise performance, and biomarkers of mitochondrial health in middle-aged adults",
        journal: "Cell Reports Medicine",
        year: 2022,
        pubmedId: "35584623",
        summary: "4-month RCT showing Mitopure improved muscle endurance and plasma biomarkers of mitochondrial function.",
      },
    ],
    affiliateLinks: [
      { brand: "Timeline Mitopure", url: "#" },
    ],
  },
  {
    id: "spermidine",
    name: "Spermidine",
    slug: "spermidine",
    category: "supplements",
    tier: "Advanced",
    evidenceLevel: "Emerging",
    tagline: "Natural polyamine that induces autophagy — cellular self-cleaning",
    description:
      "Spermidine is a naturally occurring polyamine found in wheat germ, soybeans, and aged cheese. It's one of the few compounds shown to extend lifespan in multiple model organisms, and it works by inducing autophagy — the cell's recycling program.",
    mechanism:
      "Spermidine inhibits the acetyltransferase EP300, triggering autophagy. It also promotes mitophagy, reduces inflammation, and supports cardiovascular function. Found naturally in every human cell, levels decline with age.",
    dosage:
      "1–6mg/day from wheat germ extract (most supplements). The Bruneck study population consumed ~80 micromol/day from diet. Optimal supplemental dose is still being established.",
    safety:
      "Very safe — it's a natural dietary component. Wheat germ-derived products may not be suitable for those with celiac disease or wheat allergies.",
    skepticsCorner:
      "Human evidence is primarily observational (the Bruneck cohort study). The one published human RCT on memory showed positive but modest effects. Most of the impressive lifespan data comes from yeast, flies, and mice. We need more and larger human trials.",
    studies: [
      {
        title: "Higher spermidine intake is linked to lower mortality: a prospective population-based study",
        journal: "American Journal of Clinical Nutrition",
        year: 2018,
        pubmedId: "30032227",
        summary: "20-year prospective study (829 participants) showing higher dietary spermidine intake associated with reduced mortality.",
      },
      {
        title: "The effect of spermidine on memory performance in older adults at risk for dementia",
        journal: "Cortex",
        year: 2018,
        pubmedId: "29169050",
        summary: "Small RCT showing spermidine supplementation modestly improved memory in older adults with subjective cognitive decline.",
      },
    ],
    affiliateLinks: [
      { brand: "spermidineLIFE", url: "#" },
      { brand: "Oxford Healthspan", url: "#" },
    ],
  },
  {
    id: "fisetin",
    name: "Fisetin",
    slug: "fisetin",
    category: "supplements",
    tier: "Advanced",
    evidenceLevel: "Emerging",
    tagline: "Senolytic flavonoid that may clear aged 'zombie' cells",
    description:
      "Fisetin is a plant flavonoid (concentrated in strawberries) identified by Mayo Clinic researchers as the most potent natural senolytic — a compound that selectively kills senescent cells. These 'zombie cells' accumulate with age and secrete inflammatory factors.",
    mechanism:
      "Fisetin inhibits pro-survival pathways (PI3K/Akt, mTOR) in senescent cells, triggering apoptosis while sparing healthy cells. It also has anti-inflammatory and antioxidant properties. Some protocols use intermittent high-dose 'senolytic pulses.'",
    dosage:
      "Senolytic protocol: 20mg/kg for 2 consecutive days per month (per mouse data, human dose ~1400mg for a 70kg person). Daily low-dose: 100–500mg. Optimal human dosing is NOT yet established.",
    safety:
      "Generally safe at low doses as a dietary flavonoid. High-dose senolytic protocols have limited human safety data. The Mayo Clinic AFFIRM trial is evaluating safety in humans. Caution with blood thinners.",
    skepticsCorner:
      "This is perhaps the most exciting but also most preliminary product on our list. The senolytic data comes primarily from mouse studies. The AFFIRM-LITE human trial at Mayo Clinic is ongoing but results aren't published yet. Taking high-dose fisetin based on mouse data is a genuine gamble. We include it because the mechanism is compelling, but the evidence bar is barely met.",
    studies: [
      {
        title: "Fisetin is a senotherapeutic that extends health and lifespan",
        journal: "EBioMedicine",
        year: 2018,
        pubmedId: "30279143",
        summary: "Landmark mouse study from Mayo Clinic showing fisetin reduced senescent cell burden and extended lifespan even when given late in life.",
      },
    ],
    affiliateLinks: [
      { brand: "Doctor's Best Fisetin", url: "#" },
      { brand: "Swanson Fisetin", url: "#" },
    ],
  },
  {
    id: "pqq",
    name: "PQQ (Pyrroloquinoline Quinone)",
    slug: "pqq",
    category: "supplements",
    tier: "Advanced",
    evidenceLevel: "Emerging",
    tagline: "Mitochondrial biogenesis activator — grow new mitochondria",
    description:
      "PQQ stimulates the creation of new mitochondria (mitochondrial biogenesis) via PGC-1alpha activation. It also acts as a powerful antioxidant — up to 5,000 redox cycles compared to 4 for vitamin C.",
    mechanism:
      "PQQ activates the CREB and PGC-1alpha signaling cascade, the master regulator of mitochondrial biogenesis. It also protects existing mitochondria from oxidative damage and supports nerve growth factor (NGF) synthesis.",
    dosage:
      "10–20mg/day. Often combined with CoQ10 for synergistic mitochondrial support. Studies use 10–20mg daily.",
    safety:
      "Safe at recommended doses. FDA GRAS status. Very high doses in animal studies caused kidney toxicity, but at levels far exceeding supplement doses.",
    skepticsCorner:
      "The mitochondrial biogenesis claim is mostly based on cell culture and animal studies. Human trials are few and small. One published human study showed improved sleep quality and reduced fatigue, but the effect sizes were modest. The '5,000 redox cycles' claim, while biochemically accurate, doesn't necessarily translate to superior antioxidant activity in the human body.",
    studies: [
      {
        title: "Effect of dietary pyrroloquinoline quinone disodium salt on cognitive function in healthy volunteers",
        journal: "Journal of the American College of Nutrition",
        year: 2015,
        summary: "Small human trial showing PQQ improved cognitive function and reduced inflammatory markers.",
      },
    ],
    affiliateLinks: [
      { brand: "Life Extension PQQ", url: "#" },
      { brand: "Jarrow PQQ", url: "#" },
    ],
  },

  {
    id: "alphalipoic",
    name: "Alpha-Lipoic Acid (ALA)",
    slug: "alpha-lipoic-acid",
    category: "supplements",
    tier: "Advanced",
    evidenceLevel: "Moderate",
    tagline: "Universal antioxidant and mitochondrial cofactor",
    description:
      "Alpha-lipoic acid is both water- and fat-soluble, giving it access to every compartment of the cell. It's a cofactor for mitochondrial enzymes (pyruvate dehydrogenase, alpha-ketoglutarate dehydrogenase) and regenerates other antioxidants including vitamins C and E, and glutathione.",
    mechanism:
      "ALA serves as a cofactor in the mitochondrial pyruvate dehydrogenase complex, directly supporting energy metabolism. It also chelates heavy metals, activates AMPK (an energy-sensing enzyme), and upregulates endogenous antioxidant defenses via Nrf2.",
    dosage:
      "300–600mg/day of R-alpha-lipoic acid (the bioactive form). The R-form is preferred over racemic ALA. Take on an empty stomach for best absorption.",
    safety:
      "Generally safe. May lower blood sugar — monitor if diabetic or on glucose-lowering medications. High doses (>1200mg) can cause nausea and GI discomfort. May interfere with thyroid hormone levels.",
    skepticsCorner:
      "ALA has solid biochemistry and moderate human data for diabetic neuropathy and blood sugar management. However, anti-aging-specific evidence is limited. Most longevity claims extrapolate from its role as an antioxidant, and the 'antioxidant supplementation extends lifespan' hypothesis has been largely debunked by clinical trials. Its value may be most clear for people with metabolic dysfunction.",
    studies: [
      {
        title: "Alpha-lipoic acid as a dietary supplement: molecular mechanisms and therapeutic potential",
        journal: "Biochimica et Biophysica Acta",
        year: 2009,
        pubmedId: "19664690",
        summary: "Comprehensive review of ALA's mechanisms including mitochondrial cofactor role, antioxidant recycling, and AMPK activation.",
      },
      {
        title: "Treatment of diabetic polyneuropathy with alpha-lipoic acid (NATHAN 1 trial)",
        journal: "Diabetes Care",
        year: 2011,
        pubmedId: "21868780",
        summary: "4-year RCT showing ALA improved neuropathic symptoms in diabetic patients, though the primary composite endpoint was not met.",
      },
    ],
    affiliateLinks: [
      { brand: "Thorne R-Lipoic Acid", url: "#" },
      { brand: "Doctor's Best Alpha-Lipoic Acid", url: "#" },
    ],
  },

  // === FOOD ADD-ONS ===
  {
    id: "evoo",
    name: "High-Polyphenol Extra Virgin Olive Oil",
    slug: "olive-oil",
    category: "food",
    tier: "Essentials",
    evidenceLevel: "Strong",
    tagline: "The cornerstone of Mediterranean diet longevity",
    description:
      "High-quality EVOO is rich in oleocanthal, hydroxytyrosol, and oleuropein — polyphenols with powerful anti-inflammatory and antioxidant effects. The PREDIMED trial established olive oil as one of the most evidence-backed dietary interventions for aging.",
    mechanism:
      "Oleocanthal inhibits COX-1 and COX-2 (similar mechanism to ibuprofen). Hydroxytyrosol activates Nrf2 antioxidant pathways and supports mitochondrial function. The monounsaturated fat base (oleic acid) improves cell membrane fluidity.",
    dosage:
      "2–4 tablespoons daily (the PREDIMED trial used ~50mL/day). Choose oils with polyphenol count >300mg/kg. Look for harvest date and dark bottles.",
    safety:
      "Extremely safe. Calorie-dense (~120 cal/tbsp) — account for in overall diet. Some people experience mild GI effects at high doses.",
    skepticsCorner:
      "The evidence here is actually quite strong — PREDIMED is a landmark trial. The main caveats are: (1) it's hard to isolate olive oil's effects from the overall Mediterranean diet, and (2) quality matters enormously — cheap 'EVOO' may be adulterated or low in polyphenols.",
    studies: [
      {
        title: "PREDIMED: Primary prevention of cardiovascular disease with a Mediterranean diet supplemented with extra-virgin olive oil",
        journal: "New England Journal of Medicine",
        year: 2018,
        pubmedId: "29897866",
        summary: "Major RCT (7,447 participants) showing Mediterranean diet + EVOO reduced cardiovascular events by ~30%.",
      },
    ],
    affiliateLinks: [
      { brand: "Gaea Fresh EVOO", url: "#" },
      { brand: "Cobram Estate", url: "#" },
    ],
  },
  {
    id: "sulforaphane",
    name: "Sulforaphane (Broccoli Sprout Extract)",
    slug: "sulforaphane",
    category: "food",
    tier: "Advanced",
    evidenceLevel: "Moderate",
    tagline: "Nrf2 activator for cellular defense and detoxification",
    description:
      "Sulforaphane is an isothiocyanate found in cruciferous vegetables — most concentrated in broccoli sprouts (100x more than mature broccoli). It's the most potent natural activator of the Nrf2 pathway, the master regulator of cellular antioxidant defense.",
    mechanism:
      "Sulforaphane activates Nrf2, which translocates to the nucleus and upregulates ~200 cytoprotective genes including glutathione synthesis, phase II detox enzymes, and anti-inflammatory pathways. It also inhibits NF-kB inflammation signaling.",
    dosage:
      "Supplements: 10–40mg sulforaphane/day (or equivalent glucoraphanin + myrosinase). Whole food: 100g broccoli sprouts daily. Myrosinase enzyme is needed for conversion — some supplements include it.",
    safety:
      "Safe as a dietary component. High-dose supplements may cause GI discomfort. Theoretically could interact with thyroid function at very high doses (cruciferous vegetable concern), but clinical significance is minimal.",
    skepticsCorner:
      "Sulforaphane's mechanism (Nrf2 activation) is well-validated, but most anti-aging claims extrapolate from cell culture and animal studies. Human trials exist for blood sugar regulation and detoxification, but aging-specific outcomes are understudied. Growing your own broccoli sprouts is far cheaper than supplements.",
    studies: [
      {
        title: "Sulforaphane reduces hepatic glucose production and improves glucose control in patients with type 2 diabetes",
        journal: "Science Translational Medicine",
        year: 2017,
        pubmedId: "28615356",
        summary: "Human RCT showing sulforaphane-rich broccoli sprout extract improved fasting glucose in obese type 2 diabetes patients.",
      },
    ],
    affiliateLinks: [
      { brand: "Avmacol", url: "#" },
      { brand: "BrocElite", url: "#" },
    ],
  },

  {
    id: "greentea",
    name: "Green Tea Extract / EGCG",
    slug: "green-tea-egcg",
    category: "food",
    tier: "Essentials",
    evidenceLevel: "Moderate",
    tagline: "Polyphenol-rich antioxidant for metabolic and cardiovascular health",
    description:
      "Green tea catechins — particularly EGCG (epigallocatechin gallate) — are among the most studied plant compounds for health and longevity. Populations with high green tea consumption consistently show lower rates of cardiovascular disease and certain cancers.",
    mechanism:
      "EGCG activates AMPK (cellular energy sensor), inhibits mTOR (promoting autophagy), and has potent antioxidant activity. It also modulates inflammatory pathways (NF-kB), supports fat oxidation, and may enhance mitochondrial function through PGC-1alpha activation.",
    dosage:
      "Green tea: 3–5 cups/day (the amount in most observational studies). EGCG supplements: 200–500mg/day. Take with food to reduce potential liver stress from concentrated extracts.",
    safety:
      "Green tea beverage is very safe. Concentrated EGCG supplements have rare but documented cases of liver toxicity at high doses (>800mg/day). Take with food, avoid on empty stomach. Caffeine content varies.",
    skepticsCorner:
      "Most of the impressive longevity data comes from observational studies in East Asian populations — confounded by overall diet, lifestyle, and genetics. RCTs of green tea extract show modest metabolic benefits but haven't demonstrated lifespan extension. The liver toxicity risk with high-dose supplements is real and underappreciated. Drinking actual green tea may be safer and comparably effective to supplements.",
    studies: [
      {
        title: "Green tea consumption and mortality due to cardiovascular disease, cancer, and all causes in Japan",
        journal: "JAMA",
        year: 2006,
        pubmedId: "16968850",
        summary: "Large prospective study (40,530 adults) showing green tea consumption associated with reduced cardiovascular and all-cause mortality.",
      },
      {
        title: "Effects of green tea catechins on body weight, body composition, and inflammation in overweight adults",
        journal: "Journal of the American College of Nutrition",
        year: 2010,
        pubmedId: "21041810",
        summary: "RCT showing green tea catechin supplementation modestly reduced body weight and improved metabolic markers.",
      },
    ],
    affiliateLinks: [
      { brand: "Matcha (ceremonial grade)", url: "#" },
      { brand: "NOW EGCg Green Tea Extract", url: "#" },
    ],
  },
  {
    id: "astaxanthin",
    name: "Astaxanthin",
    slug: "astaxanthin",
    category: "food",
    tier: "Advanced",
    evidenceLevel: "Moderate",
    tagline: "Carotenoid powerhouse for skin photoprotection and inflammation",
    description:
      "Astaxanthin is a carotenoid pigment produced by microalgae (Haematococcus pluvialis) — it's what makes salmon and flamingos pink. It has antioxidant potency reportedly 6,000x greater than vitamin C in certain assays, and uniquely spans the cell membrane, protecting both the lipid and aqueous layers.",
    mechanism:
      "Astaxanthin's unique molecular structure allows it to span the cell membrane bilayer, quenching free radicals on both the inside and outside of the membrane. It inhibits NF-kB, reduces UV-induced DNA damage, and may protect mitochondrial membranes from oxidative damage.",
    dosage:
      "4–12mg/day. Most studies use 4–8mg. Take with a fat-containing meal for absorption. Look for natural astaxanthin from Haematococcus pluvialis (not synthetic).",
    safety:
      "Very safe at recommended doses. FDA GRAS status. May cause mild orange skin tint at very high doses. No significant drug interactions known.",
    skepticsCorner:
      "The '6,000x vitamin C' claim comes from a single in vitro assay (singlet oxygen quenching) that doesn't reflect real-world antioxidant activity in the body. Human studies show genuine benefits for skin (UV protection, elasticity) and inflammation, but they're generally small. Anti-aging claims beyond skin are mostly mechanistic extrapolation. It's a reasonable supplement, but the marketing often dramatically overstates the evidence.",
    studies: [
      {
        title: "Cosmetic benefits of astaxanthin on human subjects",
        journal: "Acta Biochimica Polonica",
        year: 2012,
        pubmedId: "22849829",
        summary: "RCT showing astaxanthin supplementation (6mg/day for 8 weeks) improved skin wrinkle depth, elasticity, and moisture in women.",
      },
      {
        title: "Astaxanthin supplementation reduces DNA damage and oxidative stress in young healthy adults",
        journal: "Nutrition & Metabolism",
        year: 2011,
        pubmedId: "21385419",
        summary: "RCT showing 8 weeks of astaxanthin reduced markers of DNA damage and boosted immune response.",
      },
    ],
    affiliateLinks: [
      { brand: "BioAstin Hawaiian Astaxanthin", url: "#" },
      { brand: "Sports Research Astaxanthin", url: "#" },
    ],
  },

  // === DEVICES ===
  {
    id: "redlight",
    name: "Red/Near-Infrared Light Therapy (Photobiomodulation)",
    slug: "red-light-therapy",
    category: "devices",
    tier: "Essentials",
    evidenceLevel: "Moderate",
    tagline: "Light-based mitochondrial activation for skin, recovery, and inflammation",
    description:
      "Photobiomodulation uses specific wavelengths of red (630–670nm) and near-infrared (810–850nm) light to stimulate mitochondrial function. It's the best-evidenced device category for anti-aging, with applications in skin rejuvenation, wound healing, and inflammation reduction.",
    mechanism:
      "Red/NIR photons are absorbed by cytochrome c oxidase (Complex IV) in the mitochondrial electron transport chain. This dissociates inhibitory nitric oxide, increases electron flow, and boosts ATP production. It also triggers beneficial reactive oxygen species signaling that activates Nrf2 and NF-kB pathways.",
    dosage:
      "Typical protocols: 10–20 minutes per session, 3–5x/week. Irradiance matters: 30–100 mW/cm² at the skin surface. Distance from panel: 6–18 inches depending on device power.",
    safety:
      "Very safe — FDA Class II devices. No UV exposure. Eye protection recommended for direct facial treatment. No serious adverse effects in published literature. Not recommended over active cancers (theoretical concern about stimulating cell growth).",
    skepticsCorner:
      "Evidence is moderate but fragmented — many small studies across different wavelengths, intensities, and conditions. The field lacks standardization. Many consumer devices are underpowered compared to clinical-grade equipment used in studies. The mechanism (cytochrome c oxidase) is well-established, but translating that to meaningful anti-aging outcomes in healthy people is still being worked out.",
    studies: [
      {
        title: "A controlled trial to determine the efficacy of red and near-infrared light treatment in patient satisfaction, reduction of fine lines, wrinkles, skin roughness, and intradermal collagen density increase",
        journal: "Photomedicine and Laser Surgery",
        year: 2014,
        pubmedId: "24286286",
        summary: "RCT showing red/NIR LED treatment significantly improved skin complexion, collagen density, and reduced wrinkles.",
      },
      {
        title: "Mechanisms and applications of the anti-inflammatory effects of photobiomodulation",
        journal: "AIMS Biophysics",
        year: 2017,
        summary: "Comprehensive review of PBM's anti-inflammatory mechanisms, covering NF-kB modulation and cytokine reduction.",
      },
    ],
    affiliateLinks: [
      { brand: "Joovv", url: "#" },
      { brand: "Mito Red Light", url: "#" },
      { brand: "Platinum LED BioMax", url: "#" },
    ],
  },
  {
    id: "pemf",
    name: "PEMF (Pulsed Electromagnetic Field) Therapy",
    slug: "pemf",
    category: "devices",
    tier: "Advanced",
    subcategory: "bioelectric",
    evidenceLevel: "Emerging",
    tagline: "Electromagnetic pulses for bone healing, pain relief, and cellular stimulation",
    description:
      "PEMF devices generate low-frequency electromagnetic fields that penetrate tissue and influence cellular behavior. FDA-cleared for bone healing (since 1979) and treatment-resistant depression (rTMS). Anti-aging applications are theorized but less established.",
    mechanism:
      "PEMF induces electrical currents in tissue that open voltage-gated calcium channels (VGCC), increasing intracellular calcium signaling. This triggers downstream effects including nitric oxide production, improved microcirculation, and modulation of inflammatory pathways. The link to mitochondrial function is indirect — improved blood flow and calcium signaling may support ATP production.",
    dosage:
      "Varies dramatically by device and condition. Low-intensity devices (FlexPulse): 1–100 Hz, 10–30 min sessions. High-intensity (BEMER): specific proprietary waveforms. No standardized 'anti-aging' protocol exists.",
    safety:
      "FDA-cleared devices have good safety profiles. Contraindicated with implanted electronic devices (pacemakers), during pregnancy, and over active cancers. Seizure risk with high-intensity transcranial devices.",
    skepticsCorner:
      "PEMF is where the gap between mechanism and marketing is widest on our list. FDA clearance for bone healing is legitimate, but anti-aging claims are largely extrapolated. Most studies are small, not blinded, and use different devices/parameters making comparison impossible. The connection to 'cell voltage' and 'mitochondrial charging' in marketing materials dramatically oversimplifies the actual science. We include PEMF because the basic physics is real, but we urge extreme skepticism toward specific anti-aging product claims.",
    studies: [
      {
        title: "Pulsed electromagnetic fields for the treatment of bone fractures",
        journal: "International Orthopaedics",
        year: 2012,
        pubmedId: "22588693",
        summary: "Systematic review confirming PEMF efficacy for non-union bone fractures, the FDA-approved indication.",
      },
      {
        title: "Effects of pulsed electromagnetic fields on interleukin-1 beta and postoperative pain after total knee arthroplasty",
        journal: "Journal of Clinical Medicine",
        year: 2020,
        pubmedId: "31935811",
        summary: "RCT showing PEMF reduced inflammatory markers and pain after knee surgery.",
      },
    ],
    affiliateLinks: [
      { brand: "FlexPulse", url: "#" },
      { brand: "BEMER", url: "#" },
    ],
  },
  {
    id: "microcurrent",
    name: "Microcurrent Facial Devices",
    slug: "microcurrent",
    category: "devices",
    tier: "Advanced",
    subcategory: "bioelectric",
    evidenceLevel: "Emerging",
    tagline: "Low-level electrical stimulation for facial muscle tone and skin",
    description:
      "Microcurrent devices deliver very low-level electrical current (typically below 1 milliamp) to facial muscles and skin. They claim to tone facial muscles, increase ATP production, and stimulate collagen synthesis. NuFace and ZIIP are the leading consumer brands.",
    mechanism:
      "Microcurrent mimics the body's natural bioelectrical currents. At the cellular level, it may increase ATP production (the Cheng 1982 study showed 500% increase in vitro at specific current levels), enhance amino acid transport, and promote protein synthesis. In practice, it causes involuntary muscle contraction ('facial exercise').",
    dosage:
      "5–20 minute sessions, 5x/week initially then 2–3x/week for maintenance. Must be used with a conductive gel. Consistency is key — benefits diminish when use stops.",
    safety:
      "Very safe at the low current levels used. Avoid if you have a pacemaker, epilepsy, or active skin infections. Not recommended during pregnancy. May cause mild redness or tingling.",
    skepticsCorner:
      "The often-cited '500% ATP increase' comes from a single 1982 in vitro study (Cheng et al.) that has not been robustly replicated in human tissue. Most clinical evidence for microcurrent facial devices is from small, often industry-funded studies. The temporary lifting effect is real but largely mechanical (muscle contraction), not regenerative. These devices are more skincare than anti-aging science.",
    studies: [
      {
        title: "The effects of microcurrent on facial wrinkles and muscle tone",
        journal: "Dermatologic Surgery",
        year: 2021,
        summary: "Small controlled study showing microcurrent treatment improved nasolabial fold depth and jawline definition over 60 days.",
      },
    ],
    affiliateLinks: [
      { brand: "NuFace Trinity+", url: "#" },
      { brand: "ZIIP GX", url: "#" },
    ],
  },
  {
    id: "coldexposure",
    name: "Cold Exposure / Cold Plunge",
    slug: "cold-exposure",
    category: "devices",
    tier: "Advanced",
    evidenceLevel: "Moderate",
    tagline: "Cold stress for brown fat activation, inflammation reduction, and hormesis",
    description:
      "Deliberate cold exposure activates brown adipose tissue, triggers norepinephrine release, and engages hormetic stress pathways. Cold plunge tubs and cryotherapy chambers are the most common devices. The practice has deep roots in Nordic and Japanese traditions.",
    mechanism:
      "Cold activates brown adipose tissue (BAT), which burns glucose and fat to produce heat via UCP1 (uncoupling protein 1) — essentially mitochondria running in reverse to generate heat instead of ATP. Cold also triggers a 2–3x increase in norepinephrine, improving mood, focus, and inflammation markers.",
    dosage:
      "Evidence-based protocols: 11 minutes total cold exposure per week (Huberman meta-analysis review). Water temperature: 38–59°F (3–15°C). Can be split into 2–4 sessions. Start with 30 seconds and build up.",
    safety:
      "Cold shock response can be dangerous in uncontrolled settings (open water). Cardiac stress in those with heart conditions. Start gradual. Never cold plunge alone. Hyperventilation risk. Contraindicated: Raynaud's disease, uncontrolled hypertension.",
    skepticsCorner:
      "Cold exposure has real, measurable acute effects (norepinephrine, brown fat activation). However, long-term anti-aging benefits are extrapolated from these acute responses. We don't have RCTs showing cold exposure extends lifespan or reverses aging biomarkers. Much of the current hype comes from social media rather than clinical evidence. The mood and energy benefits are real and may be the most honest selling point.",
    studies: [
      {
        title: "Human physiological responses to immersion into water of different temperatures",
        journal: "European Journal of Applied Physiology",
        year: 2000,
        pubmedId: "10751106",
        summary: "Showed 530% increase in norepinephrine with cold water immersion at 57°F, with dose-dependent response to temperature.",
      },
      {
        title: "Brown adipose tissue activity controls triglyceride clearance",
        journal: "Nature Medicine",
        year: 2015,
        pubmedId: "25774602",
        summary: "Demonstrated cold-activated BAT significantly increases metabolic activity and triglyceride clearance.",
      },
    ],
    affiliateLinks: [
      { brand: "Plunge", url: "#" },
      { brand: "Ice Barrel", url: "#" },
    ],
  },
];

export const essentialsProducts = products.filter((p) => p.tier === "Essentials");
export const advancedProducts = products.filter((p) => p.tier === "Advanced");
export const supplementProducts = products.filter((p) => p.category === "supplements");
export const foodProducts = products.filter((p) => p.category === "food");
export const deviceProducts = products.filter((p) => p.category === "devices");
export const bioelectricProducts = products.filter((p) => p.subcategory === "bioelectric");
