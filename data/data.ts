/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable unused-imports/no-unused-vars */

export const supplements: any = {
  S01: {
    name: "Vitamin D",
    ingredients: {
      vitaminD: (base: number, additional: number) =>
        `${Math.min(base + additional, 75)}`, // Ensure max 75mcg for Vitamin D
      vitaminK2: (base: number, additional: number) => `${base + additional}`, // No cap for Vitamin K2
    },
    baseAmounts: {
      vitaminD: 25, // base amount of Vitamin D in mcg
      vitaminK2: 50, // base amount of Vitamin K2 in mcg
    },
    note: "Flexible dosing",
    realWeightFactor: 1,
  },
  S02: {
    name: "Omega 3",
    ingredients: {
      omega3: (base: number, additional: number) => `${base * additional}`,
      EPA: (base: number, additional: number) => `${base * additional}`,
      DHA: (base: number, additional: number) => `${base * additional}`,
      vitaminE: (base: number, additional: number) => `${base * additional}`,
    },
    baseAmounts: {
      omega3: 275, // base amount of Omega 3 in mg
      EPA: 75, // base amount of EPA in mg
      DHA: 150, // base amount of DHA in mg
      vitaminE: 5, // base amount of Vitamin E (D-Alpha-Tocopherol) in mg
    },
    note: "From algae oil",
    realWeightFactor: null, // Not applicable
  },
  S03: {
    name: "Vitamin C",
    ingredients: {
      vitaminC: (base: number, additional: number) => `${base + additional}`, // Vitamin C in mg
    },
    baseAmounts: {
      vitaminC: 300, // base amount of Vitamin C (Magnesium-L-Ascorbate) in mg
    },
    note: "",
    realWeightFactor: 1,
  },
  S04: {
    name: "Magnesium",
    ingredients: {
      magnesiumBisglycinate: (base: number, additional: number) =>
        `${base * additional}`,
      magnesiumTaurate: (base: number, additional: number) =>
        `${base * additional}`,
      magnesiumMalate: (base: number, additional: number) =>
        `${base * additional}`,
      vitaminB6: (base: number, additional: number) => `${base * additional}`,
      lTaurine: (base: number, additional: number) => `${base * additional}`,
    },
    baseAmounts: {
      magnesiumBisglycinate: 20, // 14.1% elemental magnesium
      magnesiumTaurate: 15, // 8.9% elemental magnesium
      magnesiumMalate: 15, // 15% elemental magnesium
      vitaminB6: 0.3, // in mg
      lTaurine: 25, // in mg
    },
    note: "",
    realWeightFactor: 5.785,
  },
  S05: {
    name: "Iron",
    ingredients: {
      ironBisglycinate: (base: number, additional: number) =>
        `${base * additional}`,
      vitaminC: (base: number, additional: number) => `${base * additional}`,
      copperBisglycinate: (base: number, additional: number) =>
        `${base * additional}`,
    },
    baseAmounts: {
      ironBisglycinate: 7, // in mg
      vitaminC: 25, // in mg
      copperBisglycinate: 0.125, // in mg
    },
    note: "",
    realWeightFactor: 1.9,
  },
  S06: {
    name: "Bone Health",
    ingredients: {
      calciumCarbonate: (base: number, multiplier: number) =>
        `${base * multiplier}`,
      boronGlycinate: (base: number, multiplier: number) =>
        `${base * multiplier}`,
      magnesiumBisglycinate: (base: number, multiplier: number) =>
        `${base * multiplier}`,
      manganeseBisglycinate: (base: number, multiplier: number) =>
        `${base * multiplier}`,
    },
    baseAmounts: {
      calciumCarbonate: 100, // in mg
      boronGlycinate: 1, // in mg
      magnesiumBisglycinate: 47, // in mg
      manganeseBisglycinate: 1.33, // in mg
    },
    note: "",
    realWeightFactor: 4,
  },
  S07: {
    name: "Eye Health",
    ingredients: {
      betaCarotene: (base: number, multiplier: number) =>
        `${base * multiplier}`,
      lutein: (base: number, multiplier: number) => `${base * multiplier}`,
      astaxanthin: (base: number, multiplier: number) => `${base * multiplier}`,
    },
    baseAmounts: {
      betaCarotene: 10, // in mg
      lutein: 15, // in mg
      astaxanthin: 4, // in mg
    },
    note: "Astaxanthine, Vitamin A, Luteine",
    realWeightFactor: 1,
  },
  S08: {
    name: "Energy Assistant",
    ingredients: {
      magnesiumMalate: (base: number, multiplier: number) =>
        `${base * multiplier}`,
      magnesiumBisglycinate: (base: number, multiplier: number) =>
        `${base * multiplier}`,
      ironBisglycinate: (base: number, multiplier: number) =>
        `${base * multiplier}`,
      cholineBitartrate: (base: number, multiplier: number) =>
        `${base * multiplier}`,
      vitaminB1: (base: number, multiplier: number) => `${base * multiplier}`,
      vitaminB2: (base: number, multiplier: number) => `${base * multiplier}`,
      vitaminB3: (base: number, multiplier: number) => `${base * multiplier}`,
      vitaminB5: (base: number, multiplier: number) => `${base * multiplier}`,
      vitaminB6: (base: number, multiplier: number) => `${base * multiplier}`,
      vitaminB8: (base: number, multiplier: number) => `${base * multiplier}`,
      folicAcid: (base: number, multiplier: number) => `${base * multiplier}`,
      vitaminB12Methylcobalamin: (base: number, multiplier: number) =>
        `${base * multiplier}`,
      potassiumCitrate: (base: number, multiplier: number) =>
        `${base * multiplier}`,
    },
    baseAmounts: {
      magnesiumMalate: 50, // 15% elemental magnesium
      magnesiumBisglycinate: 50, // 14.1% elemental magnesium
      ironBisglycinate: 10, // 20% elemental iron
      cholineBitartrate: 50, // in mg
      vitaminB1: 10, // Benfotiamine in mg
      vitaminB2: 10, // Riboflavin in mg
      vitaminB3: 20, // Niacinamide in mg
      vitaminB5: 10, // Calcium-d-pantothenate in mg
      vitaminB6: 2, // P-5-P in mg
      vitaminB8: 0.05, // Biotin in mg
      folicAcid: 0.2, // 5-MTHF in mg
      vitaminB12Methylcobalamin: 0.1, // Methylcobalamin in mg
      potassiumCitrate: 40, // in mg
    },
    note: "",
    realWeightFactor: 3.71,
  },
  S09: {
    name: "Anti-Stress",
    ingredients: {
      ashwagandha: (base: number, multiplier: number) => `${base * multiplier}`,
      rhodiolaRosea: (base: number, multiplier: number) =>
        `${base * multiplier}`,
    },
    baseAmounts: {
      ashwagandha: 150, // in mg
      rhodiolaRosea: 150, // in mg
    },
    note: "",
    realWeightFactor: 1,
  },
  S10: {
    name: "Vegan/Vegetarian",
    ingredients: {
      lCarnitine: (base: number, multiplier: number) => `${base * multiplier}`,
      lArginine: (base: number, multiplier: number) => `${base * multiplier}`,
      cholineBitartrate: (base: number, multiplier: number) =>
        `${base * multiplier}`,
      iodine: (base: number, multiplier: number) => `${base * multiplier}`,
    },
    baseAmounts: {
      lCarnitine: 400, // in mg
      lArginine: 300, // in mg
      cholineBitartrate: 200, // in mg
      iodine: 0.075, // in mg
    },
    note: "",
    realWeightFactor: 1,
  },
  S11: {
    name: "Immune Support",
    ingredients: {
      vitaminC: (base: number, multiplier: number) => `${base * multiplier}`,
      zincGluconate: (base: number, multiplier: number) =>
        `${base * multiplier}`,
      copperBisglycinate: (base: number, multiplier: number) =>
        `${base * multiplier}`,
      quercetin: (base: number, multiplier: number) => `${base * multiplier}`,
      citrusFlavonoids: (base: number, multiplier: number) =>
        `${base * multiplier}`,
    },
    baseAmounts: {
      vitaminC: 200, // in mg
      zincGluconate: 10, // in mg
      copperBisglycinate: 1, // in mg
      quercetin: 200, // in mg
      citrusFlavonoids: 50, // in mg
    },
    note: "",
    realWeightFactor: 1.15,
  },
  S12: {
    name: "Detox",
    ingredients: {
      milkThistle: (base: number, multiplier: number) => `${base * multiplier}`,
      sAcetylLGlutathione: (base: number, multiplier: number) =>
        `${base * multiplier}`,
    },
    baseAmounts: {
      milkThistle: 300, // in mg
      sAcetylLGlutathione: 100, // in mg
    },
    note: "",
    realWeightFactor: 1,
  },
  S13: {
    name: "Mood Booster",
    ingredients: {
      lTheanine: (base: number, multiplier: number) => `${base * multiplier}`,
      rhodiolaRosea: (base: number, multiplier: number) =>
        `${base * multiplier}`,
    },
    baseAmounts: {
      lTheanine: 200, // in mg
      rhodiolaRosea: 200, // in mg
    },
    note: "",
    realWeightFactor: 1,
  },
  S15: {
    name: "Prenatal",
    ingredients: {
      folate: (base: number, multiplier: number) => `${base * multiplier}`,
      cholineBitartrate: (base: number, multiplier: number) =>
        `${base * multiplier}`,
      iodine: (base: number, multiplier: number) => `${base * multiplier}`,
      iron: (base: number, multiplier: number) => `${base * multiplier}`,
      calcium: (base: number, multiplier: number) => `${base * multiplier}`,
      zinc: (base: number, multiplier: number) => `${base * multiplier}`,
      copper: (base: number, multiplier: number) => `${base * multiplier}`,
      vitaminB1: (base: number, multiplier: number) => `${base * multiplier}`,
      vitaminB2: (base: number, multiplier: number) => `${base * multiplier}`,
      vitaminB3: (base: number, multiplier: number) => `${base * multiplier}`,
      vitaminB5: (base: number, multiplier: number) => `${base * multiplier}`,
      vitaminB6: (base: number, multiplier: number) => `${base * multiplier}`,
      vitaminB8: (base: number, multiplier: number) => `${base * multiplier}`,
      vitaminB12Methylcobalamin: (base: number, multiplier: number) =>
        `${base * multiplier}`,
    },
    baseAmounts: {
      folate: 0.4, // in mg
      cholineBitartrate: 100, // in mg
      iodine: 0.15, // in mg
      iron: 9, // in mg
      calcium: 100, // in mg
      zinc: 10, // in mg
      copper: 0.5, // in mg
      vitaminB1: 1.1, // in mg
      vitaminB2: 1.4, // in mg
      vitaminB3: 17, // in mg
      vitaminB5: 5, // in mg
      vitaminB6: 1.8, // in mg
      vitaminB8: 0.05, // in mg
      vitaminB12Methylcobalamin: 0.01, // in mg
    },
    note: "",
    realWeightFactor: 2,
  },
  S16: {
    name: "Weight Management - Blood Glucose",
    ingredients: {
      chromiumPicolinate: (base: number, multiplier: number) =>
        `${base * multiplier}`,
      alphaLipoicAcid: (base: number, multiplier: number) =>
        `${base * multiplier}`,
      greenTeaExtract: (base: number, multiplier: number) =>
        `${base * multiplier}`,
      berberine: (base: number, multiplier: number) => `${base * multiplier}`,
      bioperine: (base: number, multiplier: number) => `${base * multiplier}`,
    },
    baseAmounts: {
      chromiumPicolinate: 0.2, // in mg
      alphaLipoicAcid: 75, // in mg
      greenTeaExtract: 200, // in mg
      berberine: 200, // in mg
      bioperine: 5, // in mg
    },
    note: "",
    realWeightFactor: 1,
  },
  S17: {
    name: "Hair & Nail & Skin Boost",
    ingredients: {
      vitaminB8: (base: number, multiplier: number) => `${base * multiplier}`,
      hyaluronicAcid: (base: number, multiplier: number) =>
        `${base * multiplier}`,
      nAcetylcysteine: (base: number, multiplier: number) =>
        `${base * multiplier}`,
      keratin: (base: number, multiplier: number) => `${base * multiplier}`,
      siliconDioxide: (base: number, multiplier: number) =>
        `${base * multiplier}`,
    },
    baseAmounts: {
      vitaminB8: 2.5, // in mg
      hyaluronicAcid: 150, // in mg
      nAcetylcysteine: 100, // in mg
      keratin: 125, // in mg
      siliconDioxide: 70, // in mg
    },
    note: "",
    realWeightFactor: 1,
  },
  S18: {
    name: "Cholesterol Balance",
    ingredients: {
      bergamot: (base: number, multiplier: number) => `${base * multiplier}`,
      oliveLeafExtract: (base: number, multiplier: number) =>
        `${base * multiplier}`,
    },
    baseAmounts: {
      bergamot: 200, // in mg
      oliveLeafExtract: 22, // in mg
    },
    note: "",
    realWeightFactor: 1,
  },
  S20: {
    name: "CoQ10/Athlete Blend",
    ingredients: {
      coenzymeQ10: (base: number, multiplier: number) => `${base * multiplier}`,
    },
    baseAmounts: {
      coenzymeQ10: 200, // in mg
    },
    note: "",
    realWeightFactor: 1,
  },
  S24: {
    name: "B-12",
    ingredients: {
      vitaminB12Methylcobalamin: (base: number, multiplier: number) =>
        `${base * multiplier}`,
      vitaminB12Adenosylcobalamin: (base: number, multiplier: number) =>
        `${base * multiplier}`,
    },
    baseAmounts: {
      vitaminB12Methylcobalamin: 0.05, // in mg
      vitaminB12Adenosylcobalamin: 0.05, // in mg
    },
    note: "",
    realWeightFactor: 1,
  },
  S26: {
    name: "PMS Blend",
    ingredients: {
      vitexAgnusCastus: (base: number, multiplier: number) =>
        `${base * multiplier}`,
      dongQuai: (base: number, multiplier: number) => `${base * multiplier}`,
      vitaminB6: (base: number, multiplier: number) => `${base * multiplier}`,
    },
    baseAmounts: {
      vitexAgnusCastus: 200, // in mg
      dongQuai: 150, // in mg
      vitaminB6: 5, // in mg
    },
    note: "",
    realWeightFactor: 1,
  },
  S30: {
    name: "Zinc",
    ingredients: {
      zincMethionine: (base: number, multiplier: number) =>
        `${base * multiplier}`,
      copperBisglycinate: (base: number, multiplier: number) =>
        `${base * multiplier}`,
    },
    baseAmounts: {
      zincMethionine: 5, // in mg
      copperBisglycinate: 0.25, // in mg
    },
    note: "",
    realWeightFactor: 4.91,
  },
  S31: {
    name: "Antioxidant Blend",
    ingredients: {
      betaCarotene: (base: number, multiplier: number) =>
        `${base * multiplier}`,
      vitaminC: (base: number, multiplier: number) => `${base * multiplier}`,
      vitaminE: (base: number, multiplier: number) => `${base * multiplier}`,
      selenium: (base: number, multiplier: number) => `${base * multiplier}`,
    },
    baseAmounts: {
      betaCarotene: 3.75, // in mg
      vitaminC: 300, // in mg
      vitaminE: 75, // in mg
      selenium: 0.056, // in mg
    },
    note: "",
    realWeightFactor: 1.02,
  },
  S32: {
    name: "Folic Acid",
    ingredients: {
      folicAcid: (base: number, multiplier: number) => `${base * multiplier}`,
    },
    baseAmounts: {
      folicAcid: 0.4, // in mg
    },
    note: "Folic Acid (5-MTHF): 0.4mg",
    realWeightFactor: 1,
  },
  S33: {
    name: "Energy Herbs",
    ingredients: {
      rhodiolaRosea: (base: number, multiplier: number) =>
        `${base * multiplier}`,
      panaxGinseng: (base: number, multiplier: number) =>
        `${base * multiplier}`,
    },
    baseAmounts: {
      rhodiolaRosea: 200, // in mg
      panaxGinseng: 200, // in mg
    },
    note: "",
    realWeightFactor: 1,
  },
};

export const rdiMapping: any = {
  betaCarotene: 9.6, // Vitamin A
  vitaminD: 0.005, // Vitamin D3 (5mcg converted to mg)
  vitaminE: 12, // Vitamin E
  vitaminK2: 0.075, // Vitamin K2 (75mcg converted to mg)
  vitaminC: 80, // Vitamin C
  vitaminB1: 1.1, // Vitamin B1
  vitaminB2: 1.4, // Vitamin B2
  vitaminB3: 16, // Vitamin B3
  vitaminB5: 6, // Vitamin B5
  vitaminB6: 1.4, // Vitamin B6
  vitaminB8: 0.05, // Vitamin B8 (50mcg converted to mg)
  folicAcid: 0.2, // Vitamin B11 (Folic Acid, 200mcg converted to mg)
  vitaminB12Methylcobalamin: 0.0025, // Vitamin B12 (2.5mcg converted to mg)
  vitaminB12Adenosylcobalamin: 0.0025, // Vitamin B12 (adenosylcobalamine, 2.5mcg converted to mg)
  magnesiumBisglycinate: 375, // Magnesium
  magnesiumTaurate: 375, // Magnesium (Magnesiumtauraat)
  magnesiumMalate: 375, // Magnesium (Magnesiummalaat)
  ironBisglycinate: 14, // Iron
  calciumCarbonate: 800, // Calcium
  zincMethionine: 10, // Zinc
  zincGluconate: 10, // Zinc (zinkgluconaat)
  copperBisglycinate: 1, // Copper
  iodine: 0.15, // Iodine (150mcg converted to mg)
  manganeseBisglycinate: 2, // Manganese
  potassiumCitrate: 2000, // Potassium
  chromiumPicolinate: 0.04, // Chromium (40mcg converted to mg)
  selenium: 0.055, // Selenium (55mcg converted to mg)
  // The following do not have established RDI values
  boronGlycinate: "**", // Boron
  siliconDioxide: "**", // Silicon
  cholineBitartrate: "**", // Choline
  ashwagandha: "**", // Ashwagandha
  rhodiolaRosea: "**", // Rhodiola Rosea
  panaxGinseng: "**", // Panax Ginseng Extract
  greenTeaExtract: "**", // Green Tea Extract
  oliveLeafExtract: "**", // Olive Leaf Extract
  milkThistle: "**", // Milk Thistle
  lTaurine: "**", // L-carnitine
  lutein: "**", // Luteïne
  astaxanthin: "**", // Astaxanthine
  quercetin: "**", // Quercetin
  citrusFlavonoids: "**", // Citrus Flavonoids
  sAcetylLGlutathione: "**", // S-Acetyl-L-Glutathione
  saffron: "**", // Saffron
  alphaLipoicAcid: "**", // Alpha Lipoic Acid
  berberine: "**", // Berberine
  bioperine: "**", // Bioperine Peperine
  hyaluronicAcid: "**", // Hyaluronic Acid
  bergamot: "**", // Bergamot
  nAcetylcysteine: "**", // N-Acetylcysteine
  keratin: "**", // Keratin
  coenzymeQ10: "**", // Coenzyme Q10
  omega3: "**", // Omega-3 is not listed, placeholder
  lTheanine: "**",
};

export const nutrientIDMapping: any = {
  vitaminD: "N02",
  vitaminK2: "N04",
  omega3: "N26",
  EPA: "N26",
  DHA: "N26",
  vitaminE: "N03",
  vitaminC: "N05",
  magnesiumBisglycinate: "N14",
  magnesiumTaurate: "N14-2",
  magnesiumMalate: "N14-3",
  vitaminB6: "N10",
  lTaurine: "N40",
  copperBisglycinate: "N18",
  ironBisglycinate: "N15",
  calciumCarbonate: "N16",
  boronGlycinate: "N20",
  manganeseBisglycinate: "N21",
  betaCarotene: "N01",
  lutein: "N36",
  astaxanthin: "N37",
  cholineBitartrate: "N27",
  vitaminB1: "N06",
  vitaminB2: "N07",
  vitaminB3: "N08",
  vitaminB5: "N09",
  vitaminB8: "N11",
  folicAcid: "N12",
  potassiumCitrate: "N22",
  ashwagandha: "N28",
  rhodiolaRosea: "N29",
  zincGluconate: "N17-2",
  quercetin: "N38",
  citrusFlavonoids: "N39",
  milkThistle: "N34",
  sAcetylLGlutathione: "N41",
  chromiumPicolinate: "N23",
  alphaLipoicAcid: "N43",
  greenTeaExtract: "N31",
  berberine: "N44",
  bioperine: "N45",
  hyaluronicAcid: "N46",
  nAcetylcysteine: "N48",
  keratin: "N49",
  siliconDioxide: "N25",
  bergamot: "N47",
  oliveLeafExtract: "N32",
  coenzymeQ10: "N50",
  vitaminB12Adenosylcobalamin: "N13-2",
  vitaminB12Methylcobalamin: "N13",
  zincMethionine: "N17",
  selenium: "N24",
  panaxGinseng: "N30",
  lCarnitine: "N35",
  lArginine: "N53",
  iodine: "N19",
  iron: "N15",
  calcium: "N16",
  zinc: "N17",
  copper: "N18",
  folate: "N12",
  vitexAgnusCastus: "N33",
  dongQuai: "N51",
  lTheanine: "N52",
};

// Readable nutrient names mapping
export const readableNutrientNames: any = {
  vitaminD: "Vitamine D3",
  vitaminK2: "Vitamine K2 (MK-7)",
  vitaminE: "Vitamine E (D-alfa tocoferol)",
  vitaminC: "Vitamine C (Magnesium-L-Ascorbaat)",
  magnesiumBisglycinate: "Magnesium (bisglycinaat)",
  magnesiumTaurate: "Magnesium (tauraat)",
  magnesiumMalate: "Magnesium (malaat)",
  vitaminB6: "Vitamine B6 (pyridoxaal-5-fosfaat)",
  lTaurine: "Taurine",
  copperBisglycinate: "Koper (bisglycinaat)",
  ironBisglycinate: "IJzer (bisglycinaat)",
  calciumCarbonate: "Calcium (citraat)",
  boronGlycinate: "Boron (boriumglycinaat)",
  manganeseBisglycinate: "Mangaan (bisglycinaat)",
  betaCarotene: "Vitamine A (bètacaroteen)",
  lutein: "Luteïne (uit goudsbloem)",
  astaxanthin: "Astaxanthine (uit de alg Haematococcus pluvialis)",
  cholineBitartrate: "Choline (bitartraat)",
  vitaminB1: "Vitamine B1 (Benfotiamine)",
  vitaminB2: "Vitamine B2 (Riboflavine-5-fosfaat)",
  vitaminB3: "Vitamine B3 (nicotinamide)",
  vitaminB5: "Vitamine B5 (calcium-D-pantothenaat)",
  vitaminB8: "Biotine (vitamine B8)",
  folicAcid: "Foliumzuur (5-MTHF)",
  potassiumCitrate: "Kalium (citraat)",
  ashwagandha: "Ashwagandha-extract (min. 5% withanoliden)",
  rhodiolaRosea: "Rhodiola-extract (min. 3% rosavine, 1% salidroside)",
  zincGluconate: "Zink (gluconaat)",
  quercetin: "Quercetine (dihydraat)",
  citrusFlavonoids: "Citrus bioflavonoïden (min. 60% hesperdine)",
  milkThistle: "Mariadistelextract (min. 80% silymarine)",
  sAcetylLGlutathione: "S-Acetyl-L-Glutathion",
  chromiumPicolinate: "Chroom (picolinaat)",
  alphaLipoicAcid: "Alfa-liponzuur",
  greenTeaExtract: "Groene thee-extract (min. 98% polyfenolen)",
  berberine: "Berberine HCl extract (Berberis aristata)",
  bioperine: "Zwarte peperextract (95% piperine)",
  hyaluronicAcid: "Hyaluronzuur",
  nAcetylcysteine: "N-Acetyl-L-Cysteïne",
  keratin: "Keratine",
  siliconDioxide: "Silicium (dioxide)",
  bergamot: "Bergamot extract 20:1",
  oliveLeafExtract: "Olijfbladextract (Olea europaea) (min. 20% Oleuropeïne)",
  coenzymeQ10: "Ubiquinol (bio-actieve Q10-vorm)",
  vitaminB12Adenosylcobalamin: "Vitamine B12 (adenosylcobalamine)",
  vitaminB12Methylcobalamin: "Vitamine B12 (methylcobalamine)",
  zincMethionine: "Zink (methionine)",
  selenium: "Selenium (L-selenomethionine)",
  panaxGinseng: "Panax ginseng-extract (min. 15% ginsenosiden)",
  lCarnitine: "L-carnitine (L-carnitine-L-tartraat)",
  lArginine: "L-arginine",
  iodine: "Jodium (kaliumjodide)",
  iron: "IJzer (bisglycinaat)",
  calcium: "Calcium (citraat)",
  zinc: "Zink (zinkmethionine)",
  copper: "Koper (bisglycinaat)",
  folate: "Foliumzuur (5-MTHF)",
  vitexAgnusCastus: "Vitex agnus castus-extract (Monnikspeper)",
  dongQuai: "Donq Quai",
  lTheanine: "L-Theanine (uit groene thee-extract)",
};

export const vitaminDSupplementRecommendations: any = [
  {
    recommendationId: "R104",
    computationId: "C01",
    supplementId: "S01",
    condition: (
      _answers: any,

      computations: any,
      _profile: any
    ) => computations.C01 > 30,
    recommendedDose: (_answers: any, _computations: any, _profile: any) => {
      return 10; // Plus 10mcg
    },
    reason:
      "Gezien je lichaamsgewicht hebben we extra vitamine D toegevoegd aan je supplement.",
  },
  {
    recommendationId: "R105",
    questionnaireId: "Q50",
    supplementId: "S01",
    condition: (answers: any, _computations: any, _profile: any) =>
      answers.Q50 === "Ja",
    recommendedDose: (_answers: any, _computations: any, _profile: any) => {
      return 10; // Plus 10mcg
    },
    reason:
      "Extra vitamine D is toegevoegd, passend bij je situatie na de overgang.",
  },
  {
    recommendationId: "R106",
    questionnaireId: ["Q02", "Q03"],
    supplementId: "S01",
    condition: (_answers: any, _computations: any, profile: any) =>
      profile.gender === "Man" && profile.age > 70,
    recommendedDose: (_answers: any, _computations: any, _profile: any) => {
      return 10; // Plus 10mcg
    },
    reason: "Extra vitamine D is toegevoegd vanwege je leeftijd",
  },
  {
    recommendationId: "R107",
    questionnaireId: "Q45",
    supplementId: "S01",
    condition: (answers: any, _computations: any, _profile: any) =>
      answers.Q45 === "Ja",
    recommendedDose: (_answers: any, _computations: any, _profile: any) => {
      return 10; // Plus 10mcg
    },
    reason: "Extra vitamine D is toegevoegd vanwege je zwangerschap.",
  },

  {
    recommendationId: "RQ-1",
    questionnaireId: "Q33",
    supplementId: "S01",
    condition: (answers: any, _computations: any, _profile: any) =>
      answers.Q33 === "Medium tot olijfkleurig",
    recommendedDose: (_answers: any, _computations: any, _profile: any) => {
      return 30; // Plus 30mcg
    },
    reason: "Extra vitamine D is toegevoegd op basis van je huidtype.",
  },
  {
    recommendationId: "RQ-2",
    questionnaireId: ["Q34", "Q35"],
    supplementId: "S01",
    condition: (answers: any, _computations: any, _profile: any) =>
      answers.Q33 === "Bruin tot donker", // Option 4
    recommendedDose: (_answers: any, _computations: any, _profile: any) => {
      return 45; // Plus 45mcg
    },
    reason:
      "Extra vitamine D is toegevoegd op basis van je huidtype en zonblootstelling.",
  },
  {
    recommendationId: "RQ-3",
    questionnaireId: ["Q34", "Q35"],
    supplementId: "S01",
    condition: (answers: any, _computations: any, _profile: any) =>
      answers.Q34 >= 1 &&
      answers.Q34 <= 4 &&
      answers.Q35 >= 1 &&
      answers.Q35 <= 4,
    recommendedDose: (_answers: any, _computations: any, _profile: any) => {
      const sunExposure =
        8 - parseFloat(_answers.Q34) - parseFloat(_answers.Q35);
      return sunExposure * 7.5; // Calculated dose based on sun exposure
    },
    reason:
      "Je vitamine D-dosis is berekend op basis van je recente en verwachte zonblootstelling.",
  },
];

export const omega3SupplementRecommendations: any = [
  {
    recommendationId: "R74",
    questionnaireId: "Q26",
    supplementId: "S02",
    condition: (answers: any) => {
      const options = [
        "Nooit",
        "Eenmaal per week",
        "Twee keer of vaker per week",
      ];
      const optionIndex = options.indexOf(answers.Q26) + 1; // Adjusted index to start at 1
      return optionIndex >= 1 && optionIndex <= 3;
    },
    recommendedDose: (answers: any) => {
      const options = [
        "Nooit",
        "Eenmaal per week",
        "Twee keer of vaker per week",
      ];
      const optionIndex = options.indexOf(answers.Q26) + 1; // Adjusted index to start at 1
      const dose = 3 - optionIndex;
      return dose * dose; // Multiply by itself
    },
    reason:
      "Omega 3 is toegevoegd aan je supplement op basis van je huidige dieet.",
  },
  {
    recommendationId: "R75",
    questionnaireId: "Q03",
    supplementId: "S02",
    condition: (
      _answers: any,

      _computations: any,
      profile: any
    ) => profile.age > 65,
    recommendedDose: () => 2,
    reason:
      "Extra Omega 3 is toegevoegd, passend bij de ondersteuning van hartgezondheid naarmate je ouder wordt.",
  },
  {
    recommendationId: "R76",
    questionnaireId: "Q45",
    supplementId: "S02",
    condition: (answers: any) => answers.Q45 === "Ja",
    recommendedDose: () => 1,
    reason: "Extra Omega 3 is toegevoegd vanwege je zwangerschap.",
  },
  {
    recommendationId: "R77",
    questionnaireId: "Q46",
    supplementId: "S02",
    condition: (answers: any) => answers.Q46.includes("Hartgezondheid"),
    recommendedDose: () => 1,
    reason:
      "Extra Omega 3 is toegevoegd omdat je aangaf dat je stemming beter kan.",
  },
  {
    recommendationId: "R78",
    questionnaireId: "Q10",
    supplementId: "S02",
    condition: (answers: any) => answers.Q10 === "Soms stemmingswisselingen",
    recommendedDose: () => 1,
    reason:
      "Omega 3 is toegevoegd ter ondersteuning van je stemming, aangezien je aangaf dat je stemming beter kan.",
  },
  {
    recommendationId: "R79",
    questionnaireId: "Q10",
    supplementId: "S02",
    condition: (answers: any) => answers.Q10 === "Vaak verdrietig",
    recommendedDose: () => 2,
    reason:
      "Omega 3 is toegevoegd ter ondersteuning van je stemming, aangezien je aangaf dat je stemming beter kan. ",
  },
  {
    recommendationId: "R80",
    questionnaireId: "Q13",
    supplementId: "S02",
    condition: (answers: any) => answers.Q13.includes("Herstel optimaliseren"),
    recommendedDose: () => 1,
    reason:
      "Omega 3 kan helpen bij het verminderen van ontsteking en spierpijn.",
  },

  {
    recommendationId: "R86",
    questionnaireId: "Q53",
    supplementId: "S02",
    condition: (answers: any) => answers.Q53.includes("Droog haar"),
    recommendedDose: () => 1,
    reason:
      "Omdat je problemen aangaf met droge hoofdhuid en haar, is Omega 3 toegevoegd.",
  },
  {
    recommendationId: "R87",
    questionnaireId: "Q55",
    supplementId: "S02",
    condition: (answers: any) =>
      answers.Q55.includes("Vroegtijdige veroudering, rimpels"),
    recommendedDose: () => 1,
    reason:
      "Omega 3 kan beschermen tegen UV-schade en bijdragen aan de gezondheid van de huid.",
  },
  {
    recommendationId: "R88",
    questionnaireId: "Q32",
    supplementId: "S02",
    condition: (answers: any) =>
      answers.Q32 === "Meer dan 10 sigaretten per dag",
    recommendedDose: () => 1,
    reason:
      "Vanwege je rookgewoonte, waardoor omega 3 niveaus in de hersenen afnemen, is omega 3 toegevoegd om dit te compenseren.",
  },
  {
    recommendationId: "R89",
    questionnaireId: "Q41",
    supplementId: "S02",
    condition: (answers: any) => answers.Q41 === "Gewrichtsblessure",
    recommendedDose: () => 1,
    reason:
      "Omega 3 is toegevoegd omdat je hebt aangegeven hulp te willen bij je gewrichtsblessure.",
  },
  {
    recommendationId: "R90",
    questionnaireId: "Q41",
    supplementId: "S02",
    condition: (answers: any) => answers.Q41 === "Peesblessure",
    recommendedDose: () => 1,
    reason:
      "Omega 3 is toegevoegd omdat je hebt aangegeven hulp te willen bij je peesblessure.",
  },
  {
    recommendationId: "R179",
    questionnaireId: "Q47",
    supplementId: "S02",
    condition: (answers: any) => answers.Q47.includes("Allergisch voor algen"),
    recommendedDose: () => 0, // No supplementation
    reason: "No supplementation is recommended based on your answers.",
  },
];

export const vitaminCSupplementRecommendations: any = [
  {
    recommendationId: "R33",
    questionnaireId: ["Q16", "Q18"],
    supplementId: "S03",
    condition: (answers: any, _computations: any, _profile: any) => {
      const fruitChoices = [
        "Zelden",
        "1-3 keer per week",
        "4-6 keer per week",
        "Elke dag",
      ]; // Options for Q16
      const veggieChoices = [
        "Groene bladgroenten",
        "Paprika's",
        "Kruisbloemige groenten zoals broccoli of bloemkool",
      ]; // Options for Q18

      const fruitConsumptionIndex = answers.Q16
        ? fruitChoices.indexOf(answers.Q16) + 1
        : 0;
      const veggieConsumptionCount = answers.Q18
        ? answers.Q18.filter((option: string) => veggieChoices.includes(option))
            .length
        : 0;

      return (8 - fruitConsumptionIndex - veggieConsumptionCount) * 0.0625 > 0;
    },
    recommendedDose: (answers: any, computations: any, _profile: any) => {
      const fruitChoices = [
        "Zelden",
        "1-3 keer per week",
        "4-6 keer per week",
        "Elke dag",
      ]; // Options for Q16
      const veggieChoices = [
        "Groene bladgroenten",
        "Paprika's",
        "Kruisbloemige groenten zoals broccoli of bloemkool",
      ]; // Options for Q18

      const fruitConsumptionIndex = answers.Q16
        ? fruitChoices.indexOf(answers.Q16) + 1
        : 0;
      const veggieConsumptionCount = answers.Q18
        ? answers.Q18.filter((option: string) => veggieChoices.includes(option))
            .length
        : 0;

      const multiplier =
        answers.gender === "Man" ? computations.C10 : computations.C11;

      return (
        (8 - fruitConsumptionIndex - veggieConsumptionCount) *
        0.0625 *
        multiplier
      );
    },
    reason: "Vitamine C is toegevoegd ter aanvulling op je dieet.",
  },
  {
    recommendationId: "R100",
    questionnaireId: "QX3",
    supplementId: "S03",
    condition: (answers: any) => answers.QX3 === "Regelmatig",
    recommendedDose: (_answers: any, _computations: any, _profile: any) => 0.25, // Removed multiplication by 300
    reason:
      "Omdat je af en toe drugs gebruikt, wat vitamine C niveaus kan uitputten, is extra vitamine C toegevoegd.",
  },
  {
    recommendationId: "R102",
    questionnaireId: "QX3",
    supplementId: "S03",
    condition: (answers: any) => answers.QX3 === "Vrij vaak",
    recommendedDose: (_answers: any, _computations: any, _profile: any) => 0.4, // Removed multiplication by 300
    reason:
      "Omdat je af en toe drugs gebruikt, wat vitamine C niveaus kan uitputten, is extra vitamine C toegevoegd.",
  },
  {
    recommendationId: "R125",
    questionnaireId: "Q41",
    supplementId: "S03",
    condition: (answers: any) => answers.Q41 === "Spierblessure",
    recommendedDose: (_answers: any, _computations: any, _profile: any) => 1, // Removed multiplication by 300
    reason:
      "Vitamine C is toegevoegd omdat je hulp zocht bij je spierblessure.",
  },
  {
    recommendationId: "R130",
    questionnaireId: "Q41",
    supplementId: "S03",
    condition: (answers: any) => answers.Q41 === "Peesblessure",
    recommendedDose: (_answers: any, _computations: any, _profile: any) => 1, // Removed multiplication by 300
    reason: "Vitamine C is toegevoegd omdat je hulp zocht bij je peesblessure.",
  },
];

export const magnesiumSupplementRecommendations: any = [
  {
    recommendationId: "R23-1",
    questionnaireId: "Q13",
    supplementId: "S04",
    condition: (answers: any) => answers.Q13.includes("Spiergroei"),
    recommendedDose: () => 1,
    reason:
      "Je hebt aangegeven dat het opbouwen van meer spiermassa een van je sportdoelen is.",
  },
  {
    recommendationId: "R25",
    questionnaireId: "Q14",
    supplementId: "S04",
    condition: (answers: any) => answers.Q14 === "Carnivoor",
    recommendedDose: (answers: any, computations: any) => {
      const multiplier =
        answers.gender === "Man" ? computations.C10 : computations.C11;

      return multiplier;
    },
    reason:
      "Op een carnivore dieet krijg je waarschijnlijk niet genoeg magnesium binnen.",
  },
  {
    recommendationId: "R50",
    questionnaireId: ["Q18", "Q21", "Q26"],
    supplementId: "S04",
    condition: (answers: any) => {
      const Q21Value = answers.Q21 ? answers.Q21.length : 0;
      const Q18Value = answers.Q18.includes("Groene bladgroenten") ? 1 : 0;
      const Q26Value = answers.Q26 === "Twee keer of vaker per week" ? 0.5 : 0;
      return (7.5 - Q21Value - Q18Value - Q26Value) * 0.133 > 0;
    },
    recommendedDose: (answers: any, computations: any) => {
      const Q21Value = answers.Q21 ? answers.Q21.length : 0;
      const Q18Value = answers.Q18.includes("Groene bladgroenten") ? 1 : 0;
      const Q26Value = answers.Q26 === "Twee keer of vaker per week" ? 0.5 : 0;
      // console.log(computations);
      const multiplier =
        answers.gender === "Man" ? computations.C10 : computations.C11;
      const doseMultiplier =
        (7.5 - Q21Value - Q18Value - Q26Value) * 0.133 * multiplier;
      return doseMultiplier;
    },
    reason:
      "De hoeveelheid magnesium in je supplement is aangepast op basis van je dieet. Vitamine B6 verbetert de opname van magnesium.",
  },
  {
    recommendationId: "R53",
    questionnaireId: "Q13",
    supplementId: "S04",
    condition: (answers: any) => answers.Q13.includes("Algehele gezondheid"),
    recommendedDose: () => 0.5,
    reason: "Ondersteunt je doel om je algehele gezondheid te verbeteren.",
  },
  {
    recommendationId: "R54",
    questionnaireId: ["Q13", "Q12"],
    supplementId: "S04",
    condition: (answers: any) =>
      answers.Q13.includes("Herstel optimaliseren") &&
      answers.Q12.includes("Gewichtheffen"),
    recommendedDose: () => 1,
    reason:
      "Je hebt aangegeven dat het optimaliseren van herstel een van je sportdoelen is.",
  },
  {
    recommendationId: "R55",
    questionnaireId: "Q13",
    supplementId: "S04",
    condition: (answers: any) => answers.Q13.includes("Kramp verminderen"),
    recommendedDose: (answers: any, computations: any) => {
      const multiplier =
        answers.gender === "Man" ? computations.C10 : computations.C11;
      return multiplier;
    },
    reason: "Je hebt aangegeven regelmatig last te hebben van kramp.",
  },
  {
    recommendationId: "R56",
    questionnaireId: ["Q13", "Q12"],
    supplementId: "S04",
    condition: (answers: any) =>
      answers.Q13.includes("Herstel optimaliseren") &&
      answers.Q12.includes("Duursporten"),
    recommendedDose: () => 0.5,
    reason:
      "Je doet aan duursport en hebt aangegeven dat het optimalsieren van herstel een van je sportdoelen is.",
  },
  {
    recommendationId: "R162-2",
    questionnaireId: "Q52",
    supplementId: "S04",
    condition: (answers: any, _computations: any, profile: any) =>
      profile.gender === "Vrouw" && answers.Q52 == "Redelijk",
    recommendedDose: () => 0.75,
    reason: "Je hebt aangegeven PMS symptomen te ervaren.",
  },
  {
    recommendationId: "R163-2",
    questionnaireId: "Q52",
    supplementId: "S04",
    condition: (answers: any, _computations: any, profile: any) =>
      profile.gender === "Vrouw" && answers.Q52 == "Ernstig",
    recommendedDose: () => 1,
    reason: "Je hebt aangegeven ernstige PMS symptomen te ervaren.",
  },
  {
    recommendationId: "R126",
    questionnaireId: "Q41",
    supplementId: "S04",
    condition: (answers: any) => answers.Q41.includes("Spierblessure"),
    recommendedDose: () => 1,
    reason: "Je hebt aangegeven hulp te willen bij je spierblessure.",
  },
];

export const ironSupplementRecommendations: any = [
  {
    recommendationId: "R57",
    questionnaireId: ["Q18", "Q21", "Q22", "Q23", "Q24", "Q26", "Q29", "Q49"],
    supplementId: "S05",
    condition: (answers: any) => {
      const Q18Value =
        (answers.Q18?.includes("Groene bladgroenten") ? 1 : 0) +
        (answers.Q18?.includes(
          "Kruisbloemige groenten zoals broccoli of bloemkool"
        )
          ? 1
          : 0);
      const Q21Value =
        (answers.Q21?.includes("Bonen") ? 0.5 : 0) +
        (answers.Q21?.includes("Noten") ? 0.5 : 0) +
        (answers.Q21?.includes("Zaden") ? 0.5 : 0);
      const Q22Value =
        ["Nooit", "1-2 keer", "3-4 keer", "5 keer of meer"].indexOf(
          answers.Q22
        ) + 1;
      const Q23Value =
        (answers.Q23?.includes("Rundvlees") ? 1 : 0) +
        (answers.Q23?.includes("Orgaanvlees") ? 1 : 0);
      const Q24Value =
        ["Nooit", "1-2 keer", "3-4 keer", "5 keer of meer"].indexOf(
          answers.Q24
        ) + 1;
      const Q26Value = answers.Q26 === "Twee keer of vaker per week" ? 1 : 0;
      const Q29Value =
        ["Geen", "1-3", "4-8", "8 of meer"].indexOf(answers.Q29) >= 2 ? 1 : 0;
      const Q49Value = answers.Q49 === "Nee" ? 4 : 0;

      const totalScore =
        15.5 -
        Q18Value -
        Q21Value -
        Q22Value -
        Q24Value -
        Q23Value -
        Q26Value -
        Q29Value -
        Q49Value;

      return totalScore * 0.1 > 0;
    },
    recommendedDose: (answers: any, computations: any) => {
      const Q18Value =
        (answers.Q18?.includes("Groene bladgroenten") ? 1 : 0) +
        (answers.Q18?.includes(
          "Kruisbloemige groenten zoals broccoli of bloemkool"
        )
          ? 1
          : 0);
      const Q21Value =
        (answers.Q21?.includes("Bonen") ? 0.5 : 0) +
        (answers.Q21?.includes("Noten") ? 0.5 : 0) +
        (answers.Q21?.includes("Zaden") ? 0.5 : 0);
      const Q22Value =
        ["Nooit", "1-2 keer", "3-4 keer", "5 keer of meer"].indexOf(
          answers.Q22
        ) + 1;
      const Q23Value =
        (answers.Q23?.includes("Rundvlees") ? 1 : 0) +
        (answers.Q23?.includes("Orgaanvlees") ? 1 : 0);
      const Q24Value =
        ["Nooit", "1-2 keer", "3-4 keer", "5 keer of meer"].indexOf(
          answers.Q24
        ) + 1;
      const Q26Value = answers.Q26 === "Twee keer of vaker per week" ? 1 : 0;
      const Q29Value =
        ["Geen", "1-3", "4-8", "8 of meer"].indexOf(answers.Q29) >= 2 ? 1 : 0;
      const Q49Value = answers.Q49 === "Nee" ? 4 : 0;

      const totalScore =
        15.5 -
        Q18Value -
        Q21Value -
        Q22Value -
        Q24Value -
        Q23Value -
        Q26Value -
        Q29Value -
        Q49Value;

      const multiplier =
        answers.gender === "Man" ? computations.C10 : computations.C11;
      return totalScore * 0.1 * multiplier;
    },
    reason: "Je dieet lijkt niet genoeg ijzer te bevatten.",
  },
  {
    recommendationId: "R63",
    questionnaireId: "Q51",
    supplementId: "S05",
    condition: (answers: any) => answers.Q51 === "Zwaar",
    recommendedDose: () => 1,
    reason:
      "Een kleine extra dosis ijzer is toegevoegd vanwege extra ijzerverlies door hevig bloedverlies.",
  },
  {
    recommendationId: "R64",
    questionnaireId: "Q51",
    supplementId: "S05",
    condition: (answers: any) => answers.Q51 === "Zeer zwaar",
    recommendedDose: () => 1.5,
    reason:
      "Een redelijk kleine extra dosis ijzer is toegevoegd vanwege extra ijzerverlies door hevig bloedverlies.",
  },
];

export const calciumSupplementRecommendations: any = [
  {
    recommendationId: "R41",
    questionnaireId: ["Q18", "Q20"],
    supplementId: "S06",
    condition: (answers: any) => {
      const Q20Value =
        ["Zelden", "Eenmaal", "Twee keer of meer"].indexOf(answers.Q20) + 1;
      const Q18Value = answers.Q18?.includes("Groene bladgroenten") ? 1 : 0;

      const totalScore = 4 - Q20Value - Q18Value;

      return totalScore * 0.25 > 0;
    },
    recommendedDose: (answers: any, computations: any) => {
      const Q20Value =
        ["Zelden", "Eenmaal", "Twee keer of meer"].indexOf(answers.Q20) + 1;
      const Q18Value = answers.Q18?.includes("Groene bladgroenten") ? 1 : 0;

      const totalScore = 4 - Q20Value - Q18Value;
      const multiplier =
        answers.gender === "Man" ? computations.C10 : computations.C11;
      return totalScore * 0.25 * multiplier;
    },
    reason:
      "Calcium is toegevoegd op basis van je huidige diet. Het is belangrijk op calcium in de juiste verhouding met magnesium en boron te suppleren, dus hier is rekening mee gehouden.",
  },
  {
    recommendationId: "R45",
    questionnaireId: "Q03",
    supplementId: "S06",
    condition: (_answers: any, _computations: any, profile: any) =>
      profile.age > 70,
    recommendedDose: (_answers: any, _computations: any) => {
      return 0.66;
    },
    reason: "Vanwege je leeftijd is extra calcium toegevoegd.",
  },
  {
    recommendationId: "R46",
    questionnaireId: ["Q11", "Q12"],
    supplementId: "S06",
    condition: (answers: any) =>
      answers.Q12.includes("Gewichtheffen") &&
      answers.Q11 === "5+ keer per week",
    recommendedDose: (_answers: any, _computations: any) => {
      return 0.5;
    },
    reason: "Door je krachttraining heb je een verhoogde behoefte aan calcium.",
  },
  {
    recommendationId: "R47",
    questionnaireId: ["Q11", "Q12"],
    supplementId: "S06",
    condition: (answers: any) =>
      answers.Q12.includes("Gewichtheffen") &&
      answers.Q11 === "2-4 keer per week",
    recommendedDose: (_answers: any, _computations: any) => {
      return 0.25;
    },
    reason:
      "Je doet aan krachtsport en hebt aangegeven dat het optimalsieren van herstel een van je sportdoelen is.",
  },
  {
    recommendationId: "R48",
    questionnaireId: ["Q13", "Q12"],
    supplementId: "S06",
    condition: (answers: any) =>
      answers.Q13.includes("Herstel optimaliseren") &&
      answers.Q12.includes("Gewichtheffen"),
    recommendedDose: (_answers: any, _computations: any) => {
      return 0.5;
    },
    reason:
      "Voor optimale herstel is calcium cruciaal voor atleten die aan krachtsport doen.",
  },
  {
    recommendationId: "R49",
    questionnaireId: ["Q13", "Q12"],
    supplementId: "S06",
    condition: (answers: any) =>
      answers.Q13.includes("Herstel optimaliseren") &&
      answers.Q12.includes("Duursporten"),
    recommendedDose: (_answers: any, _computations: any) => {
      return 0.25;
    },
    reason:
      "Je doet aan duursport en hebt aangegeven dat het optimalsieren van herstel een van je sportdoelen is.",
  },
  {
    recommendationId: "R124",
    questionnaireId: "Q41",
    supplementId: "S06",
    condition: (answers: any) => answers.Q41.includes("Botblessure"),
    recommendedDose: (_answers: any, computations: any) => {
      const standardDose = 1000; // Assuming 1000mg as the standard dose for Calcium
      return (standardDose * computations.C10) / computations.C11;
    },
    reason: "Je hebt aangegeven hulp te willen bij je botblessure.",
  },
  {
    recommendationId: "R139",
    questionnaireId: "Q54",
    supplementId: "S06",
    condition: (answers: any) => answers.Q54.includes("Broze of zwakke nagels"),
    recommendedDose: (answers: any, computations: any) => {
      const multiplier =
        answers.gender === "Man" ? computations.C10 : computations.C11;
      return 0.8 * multiplier;
    },
    reason:
      "Je hebt aangegeven last te hebben van zwakke nagels, een mogelijk teken van calciumtekort.",
  },
  {
    recommendationId: "R159",
    questionnaireId: "Q46",
    supplementId: "S06",
    condition: (answers: any) => answers.Q46.includes("Botgezondheid"),
    recommendedDose: (answers: any, computations: any) => {
      const multiplier =
        answers.gender === "Man" ? computations.C10 : computations.C11;
      return multiplier;
    },
    reason:
      "Je hebt aangegeven dat verbetering van je botgezondheid een van je gezondheidsdoelen is.",
  },
];

export const vitaminASupplementRecommendations: any = [
  {
    recommendationId: "R115",
    questionnaireId: ["Q18", "Q20", "Q23", "Q26", "Q29"],
    supplementId: "S07",
    condition: (answers: any) => {
      const Q18Value =
        (answers.Q18?.includes("Wortel- en knolgewassen") ? 2 : 0) +
        (answers.Q18?.includes("Groene bladgroenten") ? 2 : 0);
      const Q20Value =
        ["Zelden", "Eenmaal", "Twee keer of meer"].indexOf(answers.Q20) + 1;
      const Q23Value = answers.Q23?.includes("Orgaanvlees") ? 3 : 0;
      const Q26Value = answers.Q26 === "Twee keer of vaker per week" ? 2 : 0;
      const Q29Value =
        answers.Q29 === "4-8" ? 1 : answers.Q29 === "8 of meer" ? 2 : 0;

      const totalScore =
        8.6 - Q18Value - 0.2 * Q20Value - Q23Value - Q26Value - Q29Value;

      return totalScore * 0.12 > 0;
    },
    recommendedDose: (answers: any, _computations: any) => {
      const Q18Value =
        (answers.Q18?.includes("Wortel- en knolgewassen") ? 2 : 0) +
        (answers.Q18?.includes("Groene bladgroenten") ? 2 : 0);
      const Q20Value =
        ["Zelden", "Eenmaal", "Twee keer of meer"].indexOf(answers.Q20) + 1;
      const Q23Value = answers.Q23?.includes("Orgaanvlees") ? 3 : 0;
      const Q26Value = answers.Q26 === "Twee keer of vaker per week" ? 2 : 0;
      const Q29Value =
        answers.Q29 === "4-8" ? 1 : answers.Q29 === "8 of meer" ? 2 : 0;

      const totalScore =
        8.6 - Q18Value - 0.2 * Q20Value - Q23Value - Q26Value - Q29Value;

      return totalScore * 0.12;
    },
    reason:
      "Vitamine A (en andere carotenoïden) zijn toegevoegd op basis van je dieet.",
  },
  {
    recommendationId: "R116",
    questionnaireId: "Q36",
    supplementId: "S07",
    condition: (answers: any) => answers.Q36 === 4,
    recommendedDose: (_answers: any, _computations: any) => {
      return 1;
    },
    reason:
      "Je hebt aangegeven veel tijd achter schermen door te brengen, wat je ooggezondheid kan beïnvloeden.",
  },
  {
    recommendationId: "R117",
    questionnaireId: "Q37",
    supplementId: "S07",
    condition: (answers: any) => answers.Q37 === "Ja",
    recommendedDose: (_answers: any, _computations: any) => {
      return 1;
    },
    reason:
      "Je hebt aangegeven last te hebben van droge, rode of geïrriteerde ogen.",
  },
  {
    recommendationId: "R118",
    questionnaireId: "Q38",
    supplementId: "S07",
    condition: (answers: any) => answers.Q38 === "Ja",
    recommendedDose: (_answers: any, _computations: any) => {
      return 1;
    },
    reason:
      "Je hebt aangegeven moeite te hebben met zien in het donker, wat kan wijzen op een tekort aan vitamine A. ",
  },
];

export const vitaminBSupplementRecommendations: any = [
  {
    recommendationId: "R01",
    questionnaireId: "Q07",
    supplementId: "S08",
    condition: (answers: any) => answers.Q07 === "Altijd moe.",
    recommendedDose: (answers: any, computations: any) => {
      const multiplier =
        answers.gender === "Man" ? computations.C10 : computations.C11;
      return 0.7 * multiplier;
    },
    reason: "Je hebt aangegeven constant moe te zijn.",
  },
  {
    recommendationId: "R02",
    questionnaireId: "Q07",
    supplementId: "S08",
    condition: (answers: any) => answers.Q07 === "Kan beter.",
    recommendedDose: (answers: any, computations: any) => {
      const multiplier =
        answers.gender === "Man" ? computations.C10 : computations.C11;
      return 0.3 * multiplier;
    },
    reason: "Je hebt vermeld dat je energieniveau verbetert zou kunnen worden",
  },
  {
    recommendationId: "R03",
    questionnaireId: "Q08",
    supplementId: "S08",
    condition: (answers: any) => answers.Q08 === "'s ochtends",
    recommendedDose: (answers: any, computations: any) => {
      const multiplier =
        answers.gender === "Man" ? computations.C10 : computations.C11;
      return 0.5 * multiplier;
    },
    reason: "Je ervaart energiedips in de ochtend.",
  },
  {
    recommendationId: "R04",
    questionnaireId: "Q08",
    supplementId: "S08",
    condition: (answers: any) => answers.Q08 === "'s middags",
    recommendedDose: (answers: any, computations: any) => {
      const multiplier =
        answers.gender === "Man" ? computations.C10 : computations.C11;
      return 0.5 * multiplier;
    },
    reason: "Je ervaart energiedips in de middag.",
  },
  {
    recommendationId: "R06",
    questionnaireId: ["Q11", "Q12"],
    supplementId: "S08",
    condition: (answers: any) =>
      (answers.Q12.includes("Gewichtheffen") ||
        answers.Q12.includes("Hoge intensiteit") ||
        answers.Q12.includes("Duursporten")) &&
      answers.Q11 === "5+ keer per week",
    recommendedDose: (answers: any, computations: any) => {
      const multiplier =
        answers.gender === "Man" ? computations.C10 : computations.C11;
      return 0.4 * multiplier;
    },
    reason:
      "Door je activiteitsniveau en sportdoelen heb je een verhoogde behoefte aan bepaalde voedingsstoffen.",
  },
  {
    recommendationId: "R07",
    questionnaireId: ["Q11", "Q12"],
    supplementId: "S08",
    condition: (answers: any) =>
      (answers.Q12.includes("Gewichtheffen") ||
        answers.Q12.includes("Hoge intensiteit") ||
        answers.Q12.includes("Duursporten")) &&
      answers.Q11 === "2-4 keer per week",
    recommendedDose: (answers: any, computations: any) => {
      const multiplier =
        answers.gender === "Man" ? computations.C10 : computations.C11;
      return 0.2 * multiplier;
    },
    reason:
      "Door je activiteitsniveau en sportdoelen heb je een verhoogde behoefte aan bepaalde voedingsstoffen.",
  },
  {
    recommendationId: "R12",
    questionnaireId: "Q13",
    supplementId: "S08",
    condition: (answers: any) => answers.Q13.includes("Algehele gezondheid"),
    recommendedDose: (answers: any, computations: any) => {
      const multiplier =
        answers.gender === "Man" ? computations.C10 : computations.C11;
      return 0.1 * multiplier;
    },
    reason:
      "Door je activiteitsniveau en sportdoelen heb je een verhoogde behoefte aan bepaalde voedingsstoffen.",
  },
  {
    recommendationId: "R28",
    questionnaireId: ["Q15", "Q17", "Q19"],
    supplementId: "S08",
    condition: (answers: any, computations: any) => {
      const Q15Value =
        ["Minder dan één", "Eén", "Twee", "Meer dan twee"].indexOf(
          answers.Q15
        ) + 1;
      const Q17Value =
        [
          "< 100 gram",
          "100-200 gram",
          "200-300 gram",
          "300-400 gram",
          "> 400 gram",
        ].indexOf(answers.Q17) + 1;
      const Q19Value =
        [
          "Gekookt",
          "Gebakken/Geroosterd",
          "Roergebakken",
          "Rauw",
          "Gestoomd",
        ].indexOf(answers.Q19) + 1;
      const multiplier =
        answers.gender === "Man" ? computations.C10 : computations.C11;
      const totalScore =
        (10 - Q15Value - Q17Value - 0.5 * Q19Value) * 0.1 * 0.5 * multiplier;

      return totalScore > 0;
    },
    recommendedDose: (answers: any, computations: any) => {
      const Q15Value =
        ["Minder dan één", "Eén", "Twee", "Meer dan twee"].indexOf(
          answers.Q15
        ) + 1;
      const Q17Value =
        [
          "< 100 gram",
          "100-200 gram",
          "200-300 gram",
          "300-400 gram",
          "> 400 gram",
        ].indexOf(answers.Q17) + 1;
      const Q19Value =
        [
          "Gekookt",
          "Gebakken/Geroosterd",
          "Roergebakken",
          "Rauw",
          "Gestoomd",
        ].indexOf(answers.Q19) + 1;
      const multiplier =
        answers.gender === "Man" ? computations.C10 : computations.C11;
      const totalScore =
        (10 - Q15Value - Q17Value - 0.5 * Q19Value) * 0.1 * multiplier;

      return totalScore;
    },
    reason:
      "Aanvulling aan de hand van je dieet, wat mogelijk niet voldoende van deze voedingstof bevat.",
  },
  {
    recommendationId: "R92",
    questionnaireId: "Q27",
    supplementId: "S08",
    condition: (answers: any) =>
      answers.Q27 ===
      "Meer dan 12 glazen per week of regelmatig meer dan 6 glazen op een dag",
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 0.4;
    },
    reason:
      "Door de hoeveelheid alcohol die je drinkt, heb je een verhoogde behoefte aan bepaalde voedingsstoffen.",
  },
  {
    recommendationId: "R95",
    questionnaireId: "Q32",
    supplementId: "S08",
    condition: (answers: any) => answers.Q32 === "Dagelijks",
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 0.3;
    },
    reason:
      "Roken vermindert de niveaus van bepaalde voedingsstoffen in je lichaam.",
  },
  {
    recommendationId: "R97",
    questionnaireId: "Q32",
    supplementId: "S08",
    condition: (answers: any) =>
      answers.Q32 === "Meer dan 10 sigaretten per dag",
    recommendedDose: (_answers: any, _computations: any) => {
      return 0.4;
    },
    reason:
      "Roken vermindert de niveaus van bepaalde voedingsstoffen in je lichaam.",
  },
  {
    recommendationId: "R99",
    questionnaireId: "QX3",
    supplementId: "S08",
    condition: (answers: any) => answers.QX3 === "Af en toe",
    recommendedDose: (answers: any, computations: any) => {
      const multiplier =
        answers.gender === "Man" ? computations.C10 : computations.C11;
      return 0.2 * multiplier;
    },
    reason:
      "Je hebt aangegeven regelmatig drugs te gebruiken, wat de niveaus van bepaalde voedingsstoffen in je lichaam uitputten.",
  },
  {
    recommendationId: "R101",
    questionnaireId: "QX3",
    supplementId: "S08",
    condition: (answers: any) => answers.QX3 === "Vrij vaak",
    recommendedDose: (answers: any, computations: any) => {
      const multiplier =
        answers.gender === "Man" ? computations.C10 : computations.C11;
      return 0.2 * multiplier;
    },
    reason:
      "Je hebt aangegeven regelmatig drugs te gebruiken, wat de niveaus van bepaalde voedingsstoffen in je lichaam uitputten.",
  },
  {
    recommendationId: "R149",
    questionnaireId: "Q43",
    supplementId: "S08",
    condition: (answers: any) => answers.Q43 === "Ja",
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 0.3;
    },
    reason:
      "Je hebt aangegeven in de afgelopen drie maanden antibiotica te hebben gebruikt, wat invloed heeft op de behoefte en opname van bepaalde voedingsstoffen.",
  },
  {
    recommendationId: "R155",
    questionnaireId: ["Q46", "Q07"],
    supplementId: "S08",
    condition: (answers: any) =>
      answers.Q46.includes("Energie") &&
      (answers.Q07 === "Geweldig!" || answers.Q07 === "Goed."),
    recommendedDose: (answers: any, computations: any) => {
      const multiplier =
        answers.gender === "Man" ? computations.C10 : computations.C11;
      return 0.5 * multiplier;
    },
    reason:
      "Je hebt aangegeven dat het verbeteren van je energie een van je gezondheidsdoelen is.",
  },
  {
    recommendationId: "R195",
    questionnaireId: "Q45",
    supplementId: "S08",
    condition: (answers: any) => answers.Q45 === "Ja",
    recommendedDose: () => 0, // No supplementation
    reason: "No supplementation is recommended based on your answers.",
  },
];

export const antiStressSupplementRecommendations: any = [
  {
    recommendationId: "R13",
    questionnaireId: "Q09",
    supplementId: "S09",
    condition: (answers: any) => answers.Q09 === "Constant gestrest",
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 1;
    },
    reason: "Je hebt aangegeven constant stress te ervaren.",
  },
  {
    recommendationId: "R14",
    questionnaireId: "Q09",
    supplementId: "S09",
    condition: (answers: any) => answers.Q09 === "Regelmatig gestrest",
    recommendedDose: (_answers: any, _computations: any) => {
      return 0.5;
    },
    reason: "Je hebt aangegeven regelmatig stress te ervaren.",
  },
  {
    recommendationId: "R157",
    questionnaireId: "Q46",
    supplementId: "S09",
    condition: (answers: any) => answers.Q46 === "Stressreductie",
    recommendedDose: (_answers: any, _computations: any) => {
      return 1;
    },
    reason:
      "Je hebt aangegeven dat stressvermindering een van je gezondheidsdoelen is.",
  },
];

export const veganSupplementRecommendations: any = [
  {
    recommendationId: "R24-1",
    questionnaireId: "Q14",
    supplementId: "S10",
    condition: (answers: any) => answers.Q14 === "Veganistisch",
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 1;
    },
    reason:
      "Als veganist krijg je mogelijk niet voldoende jodium, carnitine of choline binnen.",
  },
  {
    recommendationId: "R27-1",
    questionnaireId: ["Q14", "Q20", "Q24", "Q29"],
    supplementId: "S10",
    condition: (answers: any) =>
      answers.Q14 === "Vegetarisch" &&
      answers.Q20 === "Zelden" &&
      ["1-2 keer", "3-4 keer"].includes(answers.Q24) &&
      ["Geen", "1-3"].includes(answers.Q29),
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 1;
    },
    reason:
      "Je hebt aangegeven vegetariër te zijn en geen vleesvervangers te consumeren.",
  },
  {
    recommendationId: "R178",
    questionnaireId: "Q47",
    supplementId: "S10",
    condition: (answers: any) => answers.Q47.includes("Allergisch voor jodium"),
    recommendedDose: () => 0, // no dose
    reason: "No supplementation is recommended due to an iodine allergy.",
  },
];

export const immuneSupportSupplementRecommendations: any = [
  {
    recommendationId: "R103",
    questionnaireId: "Q03",
    supplementId: "S11",
    condition: (
      _answers: any,

      _computations: any,
      profile: any
    ) => profile.age > 65,
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 1;
    },
    reason:
      "Naarmate je ouder wordt, ben je vatbaarder voor ziektes. Deze stoffen ondersteunen je immuunsysteem.",
  },
  {
    recommendationId: "R119",
    questionnaireId: "Q40",
    supplementId: "S11",
    condition: (answers: any) => answers.Q40 === 4,
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 1;
    },
    reason: "Je hebt aangegeven vaak ziek te zijn.",
  },
  {
    recommendationId: "R120",
    questionnaireId: "Q40",
    supplementId: "S11",
    condition: (answers: any) => answers.Q40 === 3,
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 0.5;
    },
    reason: "Je hebt gemeld regelmatig ziek te zijn.",
  },
  {
    recommendationId: "R128",
    questionnaireId: "Q41",
    supplementId: "S11",
    condition: (answers: any) => answers.Q41 === "Gewrichtsblessure",
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 1;
    },
    reason: "Je hebt aangegeven hulp te willen bij je gewrichtsblessure.",
  },
  {
    recommendationId: "R151",
    questionnaireId: "Q44",
    supplementId: "S11",
    condition: (answers: any) => answers.Q44 === "Ja",
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 1;
    },
    reason:
      "Je hebt een geschiedenis van allergieën zoals hooikoorts, eczeem, enz. aangegeven.",
  },
  {
    recommendationId: "R154",
    questionnaireId: "Q46",
    supplementId: "S11",
    condition: (answers: any) => answers.Q46.includes("Hartgezondheid"),
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 1;
    },
    reason:
      "Je hebt aangegeven dat hartgezondheid een van je gezondheidsdoelen is.",
  },
];

export const detoxSupplementRecommendations: any = [
  {
    recommendationId: "R91",
    questionnaireId: "Q27",
    supplementId: "S12",
    condition: (answers: any) =>
      answers.Q27 ===
      "Meer dan 12 glazen per week of regelmatig meer dan 6 glazen op een dag",
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 1;
    },
    reason:
      "Je hebt aangegeven veel alcohol te drinken, dit is belastend voor de lever. ",
  },
  {
    recommendationId: "R158",
    questionnaireId: "Q46",
    supplementId: "S12",
    condition: (answers: any) => answers.Q46.includes("Detox/Levergezondheid"),
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 1;
    },
    reason:
      "Je hebt aangegeven dat detoxen of levergezondheid een van je gezondheidsdoelen is.",
  },
];

export const moodBoosterSupplementRecommendations: any = [
  {
    recommendationId: "R16",
    questionnaireId: "Q10",
    supplementId: "S13",
    condition: (answers: any) => answers.Q10 === "Vaak verdrietig",
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 1;
    },
    reason:
      "Je hebt aangegeven vaak verdrietig te zijn, wat wijst op mogelijke verbeteringen rondom je gemoedstoestand. ",
  },
  {
    recommendationId: "R17",
    questionnaireId: "Q10",
    supplementId: "S13",
    condition: (answers: any) => answers.Q10 === "Soms stemmingswisselingen",
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 0.5;
    },
    reason: "Je hebt aangegeven af en toe stemmingswisselingen te ervaren.",
  },
  {
    recommendationId: "R162",
    questionnaireId: "Q52",
    supplementId: "S13",
    condition: (answers: any) => answers.Q52 === "Redelijk",
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 0.75;
    },
    reason: "Je hebt aangegeven matige symptomen van PMS te ervaren.",
  },
  {
    recommendationId: "R164",
    questionnaireId: "Q52",
    supplementId: "S13",
    condition: (answers: any) => answers.Q52 === "Ernstig",
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 1;
    },
    reason: "Je hebt aangegeven ernstige symptomen van PMS te ervaren.",
  },
];

export const prenatalSupplementRecommendations: any = [
  {
    recommendationId: "R152",
    questionnaireId: "Q45",
    supplementId: "S15",
    condition: (answers: any) => answers.Q45 === "Ja",
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 1;
    },
    reason:
      "Je hebt aangegeven zwanger te zijn, borstvoeding te geven of binnen drie maanden kinderen te willen. Deze dosering is gebaseerd op alle voedingsstoffen die jij en je baby nodig hebben, in veilige hoeveelheden.",
  },
];

export const weightManagementSupplementRecommendations: any = [
  {
    recommendationId: "R05",
    questionnaireId: "Q08",
    supplementId: "S16",
    condition: (answers: any) => answers.Q08 === "Na maaltijden",
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 1;
    },
    reason: "Je ervaart energiedips na de maaltijden.",
  },
  {
    recommendationId: "R22",
    questionnaireId: "Q13",
    supplementId: "S16",
    condition: (answers: any) => answers.Q13.includes("Gewichtsverlies"),
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 1;
    },
    reason:
      "Je hebt aangegeven dat gewicht verliezen een van je gezondheidsdoelen is. ",
  },
  {
    recommendationId: "R160",
    questionnaireId: "Q46",
    supplementId: "S16",
    condition: (answers: any) => answers.Q46.includes("Gewichtsvermindering"),
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 1;
    },
    reason:
      "Je hebt aangegeven als doel te hebben om af te vallen of je figuur te verbeteren.",
  },
];

export const hairSkinNailSupplementRecommendations: any = [
  {
    recommendationId: "R131",
    questionnaireId: "Q53",
    supplementId: "S17",
    condition: (answers: any) =>
      answers.Q53.includes("Begint dunner te worden of haaruitval"),
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 1;
    },
    reason:
      "Je hebt aangegeven dat je last hebt van dunner wordend haar of toegenomen haaruitval.",
  },
  {
    recommendationId: "R134",
    questionnaireId: "Q53",
    supplementId: "S17",
    condition: (answers: any) => answers.Q53.includes("Groeit langzaam"),
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 1;
    },
    reason: "Je hebt aangegeven dat je haar langzaam groeit.",
  },
  {
    recommendationId: "R135",
    questionnaireId: "Q53",
    supplementId: "S17",
    condition: (answers: any) =>
      answers.Q53.includes("Begint dunner te worden of haaruitval") &&
      answers.Q53.includes("Groeit langzaam"),
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 1;
    },
    reason:
      "Je hebt gemeld dat je last hebt van zowel dunner wordend haar of toegenomen haaruitval als langzame haargroei.",
  },
  {
    recommendationId: "R137",
    questionnaireId: "Q53",
    supplementId: "S17",
    condition: (answers: any) =>
      answers.Q53.includes("Beschadigd haar, gespleten punten"),
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 0.5;
    },
    reason:
      "Je hebt aangegeven dat je beschadigd haar of gespleten haarpunten hebt.",
  },
  {
    recommendationId: "R138",
    questionnaireId: "Q54",
    supplementId: "S17",
    condition: (answers: any) => answers.Q54.includes("Broze of zwakke nagels"),
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 0.5;
    },
    reason:
      "Je hebt gemeld dat je zwakke of gemakkelijk breekbare nagels hebt.",
  },
  {
    recommendationId: "R140",
    questionnaireId: "Q54",
    supplementId: "S17",
    condition: (answers: any) => answers.Q54.includes("Langzame groei"),
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 0.5;
    },
    reason: "Je hebt aangegeven dat je nagels langzaam groeien.",
  },
  {
    recommendationId: "R144",
    questionnaireId: ["Q54", "Q03"],
    supplementId: "S17",
    condition: (
      answers: any,

      _computations: any,
      profile: any
    ) => answers.Q54.includes("Grote ribbels") && profile.age < 35,
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 0.5;
    },
    reason:
      "Je hebt gemeld dat je nagelribbels hebt en bent jonger dan 35 jaar.",
  },
  {
    recommendationId: "R147",
    questionnaireId: "Q55",
    supplementId: "S17",
    condition: (answers: any) =>
      answers.Q55.includes("Verlies van elasticiteit"),
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 0.5;
    },
    reason: "Je hebt verlies van huidelasticiteit gemeld.",
  },
  {
    recommendationId: "R148",
    questionnaireId: "Q55",
    supplementId: "S17",
    condition: (answers: any) =>
      answers.Q55.includes("Vroegtijdige veroudering, rimpels"),
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 0.5;
    },
    reason:
      "Je hebt aangegeven vroegtijdige veroudering of rimpels op je huid te ervaren.",
  },
  {
    recommendationId: "R156",
    questionnaireId: ["Q46", "Q55"],
    supplementId: "S17",
    condition: (answers: any) =>
      answers.Q46.includes("Huid-, haar- of nagelgezondheid") &&
      answers.Q55.includes("Geen van deze"),
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 1;
    },
    reason:
      "Je hebt aangegeven dat het verbeteren van de gezondheid van huid, haar of nagels een van je doelen is. ",
  },
];

export const athleteBlendSupplementRecommendations: any = [
  {
    recommendationId: "R18",
    questionnaireId: ["Q03", "Q13"],
    supplementId: "S20",
    condition: (
      answers: any,

      _computations: any,
      profile: any
    ) => answers.Q13.includes("Spiergroei") && profile.age > 40,
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 1;
    },
    reason:
      "Door het ouder worden neemt je natuurlijke productie van CoQ10 af.",
  },
  {
    recommendationId: "R20",
    questionnaireId: ["Q12", "Q13"],
    supplementId: "S20",
    condition: (answers: any) =>
      answers.Q13.includes("Prestaties verbeteren") &&
      answers.Q12.includes("Duursporten"),
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 1;
    },
    reason:
      "Je hebt aangegeven je prestaties te willen verbeteren en een duursporter te zijn.",
  },
  {
    recommendationId: "R177",
    questionnaireId: "Q48",
    supplementId: "S20",
    condition: (answers: any) => answers.Q48.includes("Statines"),
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 0.5;
    },
    reason:
      "Statines kunnen de CoQ10-niveaus in het lichaam verlagen, wat invloed kan hebben op energieproductie en spierfunctie.",
  },
];

export const vitaminB12SupplementRecommendations: any = [
  {
    recommendationId: "R24-2",
    questionnaireId: "Q14",
    supplementId: "S24",
    condition: (answers: any) => answers.Q14 === "Veganistisch",
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 0.1;
    },
    reason:
      "Als veganist kun je moeite hebben om voldoende B12 uit je dieet op te nemen.",
  },
  {
    recommendationId: "R27-2",
    questionnaireId: ["Q14", "Q20", "Q24", "Q29"],
    supplementId: "S24",
    condition: (answers: any) =>
      answers.Q14 === "Vegetarisch" &&
      answers.Q20 === "Zelden" &&
      (answers.Q24 === "Nooit" || answers.Q24 === "1-2 keer") &&
      (answers.Q29 === "Geen" || answers.Q29 === "1-3"),
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 0.1;
    },
    reason:
      "Het is opgemerkt dat je vegetariër bent en geen andere bronnen van B12 consumeert.",
  },
  {
    recommendationId: "R69",
    questionnaireId: ["Q20", "Q22", "Q23", "Q24", "Q25", "Q29"],
    supplementId: "S24",
    condition: (answers: any) => {
      const Q23Points =
        answers.Q23.includes("Rundvlees") && answers.Q23.includes("Orgaanvlees")
          ? 7
          : answers.Q23.includes("Orgaanvlees")
          ? 5
          : answers.Q23.includes("Rundvlees")
          ? 2
          : 0;

      const score =
        20 -
        (answers.Q20
          ? ["Zelden", "Eenmaal", "Twee keer of meer"].indexOf(answers.Q20) + 1
          : 0) -
        (answers.Q22
          ? ["Nooit", "1-2 keer", "3-4 keer", "5 keer of meer"].indexOf(
              answers.Q22
            ) + 1
          : 0) -
        Q23Points -
        (answers.Q24
          ? ["Nooit", "1-2 keer", "3-4 keer", "5 keer of meer"].indexOf(
              answers.Q24
            ) + 1
          : 0) -
        (answers.Q25
          ? ["Nooit", "Eenmaal", "Tweemaal", "Drie keer of meer"].indexOf(
              answers.Q25
            ) + 1
          : 0) -
        (answers.Q29
          ? ["Geen", "1-3", "4-8", "8 of meer"].indexOf(answers.Q29) + 1
          : 0);

      return score > 0;
    },
    recommendedDose: (answers: any, _computations: any) => {
      const Q23Points =
        answers.Q23.includes("Rundvlees") && answers.Q23.includes("Orgaanvlees")
          ? 7
          : answers.Q23.includes("Orgaanvlees")
          ? 5
          : answers.Q23.includes("Rundvlees")
          ? 2
          : 0;

      const score =
        (20 -
          (answers.Q20
            ? ["Zelden", "Eenmaal", "Twee keer of meer"].indexOf(answers.Q20) +
              1
            : 0) -
          (answers.Q22
            ? ["Nooit", "1-2 keer", "3-4 keer", "5 keer of meer"].indexOf(
                answers.Q22
              ) + 1
            : 0) -
          Q23Points -
          (answers.Q24
            ? ["Nooit", "1-2 keer", "3-4 keer", "5 keer of meer"].indexOf(
                answers.Q24
              ) + 1
            : 0) -
          (answers.Q25
            ? ["Nooit", "Eenmaal", "Tweemaal", "Drie keer of meer"].indexOf(
                answers.Q25
              ) + 1
            : 0) -
          (answers.Q29
            ? ["Geen", "1-3", "4-8", "8 of meer"].indexOf(answers.Q29) + 1
            : 0)) *
        0.05;

      return score;
    },
    reason:
      "Aanvulling op basis van je dieet wat niet voldoende B12 lijkt te bevatten.",
  },
  {
    recommendationId: "R73",
    questionnaireId: "Q03",
    supplementId: "S24",
    condition: (
      _answers: any,

      _computations: any,
      profile: any
    ) => profile.age > 65,
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 0.5;
    },
    reason:
      "Hoe ouder je bent, hoe moeilijker het is voor je lichaam om B12 op te nemen.",
  },
];

export const pmsBlendSupplementRecommendations: any = [
  {
    recommendationId: "R161",
    questionnaireId: "Q52",
    supplementId: "S26",
    condition: (answers: any) => answers.Q52 === "Redelijk",
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 0.75;
    },
    reason: "Je hebt aangegeven matige PMS symptomen te ervaren.",
  },
  {
    recommendationId: "R163",
    questionnaireId: "Q52",
    supplementId: "S26",
    condition: (answers: any) => answers.Q52 === "Ernstig",
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 1;
    },
    reason: "Je hebt aangegeven hefyige PMS symptomen te ervaren.",
  },
];

export const zincSupplementRecommendations: any = [
  {
    recommendationId: "R23-2",
    questionnaireId: "Q13",
    supplementId: "S30",
    condition: (answers: any) => answers.Q13.includes("Spiergroei"),
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 1;
    },
    reason:
      "Je hebt aangegeven dat spieropbouw een van je sportieve doelen is.",
  },
  {
    recommendationId: "R65",
    questionnaireId: ["Q11", "Q12"],
    supplementId: "S30",
    condition: (answers: any) =>
      answers.Q12.includes("Gewichtheffen") &&
      answers.Q11 === "5+ keer per week",
    recommendedDose: (answers: any, computations: any) => {
      const multiplier =
        answers.gender === "Man" ? computations.C10 : computations.C11;
      return 1.6 * multiplier;
    },
    reason:
      "De hoeveelheid zink in je supplement is verhoogd omdat je regelmatig aan gewichtheffen doet. Zink helpt bij de opbouw van eiwitten in je lichaam.",
  },
  {
    recommendationId: "R66",
    questionnaireId: ["Q11", "Q12"],
    supplementId: "S30",
    condition: (answers: any) =>
      answers.Q12.includes("Gewichtheffen") &&
      answers.Q11 === "2-4 keer per week",
    recommendedDose: (answers: any, computations: any) => {
      const multiplier =
        answers.gender === "Man" ? computations.C10 : computations.C11;
      return 0.8 * multiplier;
    },
    reason:
      "De hoeveelheid zink in je supplement is verhoogd omdat je af en toe gewichten heft. Zink ondersteunt de eiwitsynthese in je lichaam.",
  },
  {
    recommendationId: "R93",
    questionnaireId: "Q27",
    supplementId: "S30",
    condition: (answers: any) =>
      answers.Q27 ===
      "Meer dan 12 glazen per week of regelmatig meer dan 6 glazen op een dag",
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 1;
    },
    reason:
      "Door de hoeveelheid alcohol die je drinkt, heb je waarschijnlijk een verhoogde behoefte aan bepaalde voedingsstoffen.",
  },
  {
    recommendationId: "R127",
    questionnaireId: "Q41",
    supplementId: "S30",
    condition: (answers: any) => answers.Q41 === "Spierblessure",
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 1;
    },
    reason: "Je hebt aangegeven hulp te willen bij je spierblessure.",
  },
  {
    recommendationId: "R129",
    questionnaireId: "Q41",
    supplementId: "S30",
    condition: (answers: any) => answers.Q41 === "Peesblessure",
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 1;
    },
    reason: "Je hebt aangegeven hulp te willen bij je peesblessure.",
  },
  {
    recommendationId: "R133",
    questionnaireId: "Q53",
    supplementId: "S30",
    condition: (answers: any) =>
      answers.Q53.includes("Begint dunner te worden of haaruitval"),
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 1;
    },
    reason:
      "Je hebt gemeld dat je last hebt van dunner wordend haar of toegenomen haaruitval.",
  },
  {
    recommendationId: "R141",
    questionnaireId: "Q54",
    supplementId: "S30",
    condition: (answers: any) =>
      answers.Q54.includes("Broze of zwakke nagels") ||
      answers.Q54.includes("Langzame groei"),
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 1;
    },
    reason: "Je hebt aangegeven zwakke of langzaam groeiende nagels te hebben.",
  },
  {
    recommendationId: "R143",
    questionnaireId: "Q54",
    supplementId: "S30",
    condition: (answers: any) => answers.Q54.includes("Witte vlekjes"),
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 2;
    },
    reason:
      "Je hebt gemeld witte vlekjes op je nagels te hebben, wat een teken kan zijn van een zinktekort.",
  },
  {
    recommendationId: "R145",
    questionnaireId: "Q55",
    supplementId: "S30",
    condition: (answers: any) => answers.Q55.includes("Acne"),
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 3;
    },
    reason: "Je hebt aangegeven last te hebben van puistjes of vlekjes.",
  },
  {
    recommendationId: "R150",
    questionnaireId: "Q43",
    supplementId: "S30",
    condition: (answers: any) => answers.Q43 === "Ja",
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 1;
    },
    reason:
      "Je hebt aangegeven dat je de afgelopen drie maanden antibiotica hebt gebruikt, wat invloed heeft op de behoefte en opname van bepaalde voedingsstoffen.",
  },
];

export const antioxidantBlendSupplementRecommendations: any = [
  {
    recommendationId: "R26",
    questionnaireId: "Q14",
    supplementId: "S31",
    condition: (answers: any) => answers.Q14 === "Carnivoor",
    recommendedDose: (answers: any, computations: any) => {
      const multiplier =
        answers.gender === "Man" ? computations.C10 : computations.C11;
      return 0.3 * multiplier;
    },
    reason:
      "Op een carnivore dieet krijg je waarschijnlijk niet genoeg van deze voedingsstoffen binnen.",
  },
  {
    recommendationId: "R29",
    questionnaireId: ["Q15", "Q17", "Q19"],
    supplementId: "S31",
    condition: (answers: any) => {
      const score =
        10 -
        (answers.Q15
          ? ["Minder dan één", "Eén", "Twee", "Meer dan twee"].indexOf(
              answers.Q15
            ) + 1
          : 0) -
        (answers.Q17
          ? [
              "< 100 gram",
              "100-200 gram",
              "200-300 gram",
              "300-400 gram",
              "> 400 gram",
            ].indexOf(answers.Q17) + 1
          : 0) -
        (answers.Q19
          ? ([
              "Gekookt",
              "Gebakken/Geroosterd",
              "Roergebakken",
              "Rauw",
              "Gestoomd",
            ].indexOf(answers.Q19) +
              1) *
            0.5
          : 0);
      return score * 0.1 > 0;
    },
    recommendedDose: (answers: any, computations: any) => {
      const multiplier =
        answers.gender === "Man" ? computations.C10 : computations.C11;
      const score =
        10 -
        (answers.Q15
          ? ["Minder dan één", "Eén", "Twee", "Meer dan twee"].indexOf(
              answers.Q15
            ) + 1
          : 0) -
        (answers.Q17
          ? [
              "< 100 gram",
              "100-200 gram",
              "200-300 gram",
              "300-400 gram",
              "> 400 gram",
            ].indexOf(answers.Q17) + 1
          : 0) -
        (answers.Q19
          ? ([
              "Gekookt",
              "Gebakken/Geroosterd",
              "Roergebakken",
              "Rauw",
              "Gestoomd",
            ].indexOf(answers.Q19) +
              1) *
            0.5
          : 0);

      return score * 0.1 * 0.3 * multiplier;
    },
    reason:
      "Aanvulling op je dieet, aangezien deze niet veel antioxidanten lijkt te bevatten.",
  },
  {
    recommendationId: "R34",
    questionnaireId: ["Q11", "Q12"],
    supplementId: "S31",
    condition: (answers: any) =>
      (answers.Q12.includes("Hoge intensiteit") ||
        answers.Q12.includes("Duursporten")) &&
      answers.Q11 === "5+ keer per week",
    recommendedDose: (answers: any, computations: any) => {
      const multiplier =
        answers.gender === "Man" ? computations.C10 : computations.C11;
      return 0.5 * multiplier;
    },
    reason:
      "Antioxidanten helpen lichaamscellen te beschermen tegen oxidatieve stress door lichaamsbeweging. De dosering is afgestemd op je trainingsfrequentie.",
  },
  {
    recommendationId: "R35",
    questionnaireId: ["Q11", "Q12"],
    supplementId: "S31",
    condition: (answers: any) =>
      (answers.Q12.includes("Hoge intensiteit") ||
        answers.Q12.includes("Duursporten")) &&
      answers.Q11 === "2-4 keer per week",
    recommendedDose: (answers: any, computations: any) => {
      const multiplier =
        answers.gender === "Man" ? computations.C10 : computations.C11;
      return 0.25 * multiplier;
    },
    reason:
      "Antioxidanten helpen lichaamscellen te beschermen tegen oxidatieve stress door lichaamsbeweging. De dosering is afgestemd op je trainingsfrequentie.",
  },
  {
    recommendationId: "R38",
    questionnaireId: ["Q13", "Q12"],
    supplementId: "S31",
    condition: (answers: any) =>
      answers.Q13.includes("Herstel optimaliseren") &&
      (answers.Q12.includes("Hoge intensiteit") ||
        answers.Q12.includes("Duursporten")),
    recommendedDose: (answers: any, computations: any) => {
      const multiplier =
        answers.gender === "Man" ? computations.C10 : computations.C11;
      return 0.5 * multiplier;
    },
    reason:
      "Voor optimaal herstel is het bestrijden van oxidatieve stress en ondersteuning van spierherstel belangrijk.",
  },
  {
    recommendationId: "R94",
    questionnaireId: "Q27",
    supplementId: "S31",
    condition: (answers: any) =>
      answers.Q27 ===
      "Meer dan 12 glazen per week of regelmatig meer dan 6 glazen op een dag",
    recommendedDose: (_answers: any, _computations: any) => {
      return 0.3;
    },
    reason:
      "Door de hoeveelheid alcohol die je drinkt, heb je waarschijnlijk een verhoogde behoefte aan bepaalde voedingsstoffen.",
  },
  {
    recommendationId: "R96",
    questionnaireId: "Q32",
    supplementId: "S31",
    condition: (answers: any) => answers.Q32 === "Dagelijks",
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 0.3;
    },
    reason:
      "Antioxidanten kunnen helpen om te beschermen tegen de oxidatieve schade door roken.",
  },
  {
    recommendationId: "R98",
    questionnaireId: "Q32",
    supplementId: "S31",
    condition: (answers: any) =>
      answers.Q32 === "Meer dan 10 sigaretten per dag",
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 0.5;
    },
    reason:
      "Antioxidanten kunnen helpen om te beschermen tegen de oxidatieve schade door roken.",
  },
  {
    recommendationId: "R136",
    questionnaireId: "Q53",
    supplementId: "S31",
    condition: (answers: any) => answers.Q53.includes("Droog haar"),
    recommendedDose: (answers: any, computations: any) => {
      const multiplier =
        answers.gender === "Man" ? computations.C10 : computations.C11;
      return 0.5 * multiplier;
    },
    reason: "Je hebt gemeld dat je droog haar hebt.",
  },
  {
    recommendationId: "R142",
    questionnaireId: "Q54",
    supplementId: "S31",
    condition: (answers: any) => answers.Q54.includes("Langzame groei"),
    recommendedDose: (answers: any, computations: any) => {
      const multiplier =
        answers.gender === "Man" ? computations.C10 : computations.C11;
      return 0.5 * multiplier;
    },
    reason: "Je hebt gemeld dat je nagels langzaam groeien.",
  },
  {
    recommendationId: "R146",
    questionnaireId: "Q55",
    supplementId: "S31",
    condition: (answers: any) => {
      return [
        "Acne",
        "Verlies van elasticiteit",
        "Hyperpigmentatie, donkere vlekken",
      ].some((option) => answers.Q55.includes(option));
    },
    recommendedDose: (_answers: any, _computations: any) => {
      return 0.5;
    },
    reason:
      "Je hebt aangegeven last te hebben van puistjes, verlies van huidelasticiteit, hyperpigmentatie en/of vroegtijdige huidveroudering.",
  },
  {
    recommendationId: "R153",
    questionnaireId: "Q45",
    supplementId: "S31",
    condition: (answers: any) => answers.Q45 === "Ja",
    recommendedDose: (_answers: any, _computations: any) => {
      return 0.5;
    },
    reason:
      "Je hebt aangegeven zwanger te zijn, borstvoeding te geven, of binnen drie maanden kinderen te willen. Je doseringen zijn gebaseerd op alle voedingsstoffen die jij en je baby nodig hebben, in veilige hoeveelheden.",
  },
];

export const folicAcidSupplementRecommendations: any = [
  {
    recommendationId: "R196",
    questionnaireId: "Q03",
    supplementId: "S32",
    condition: (_answers: any, _computations: any, profile: any) =>
      profile.age > 65,
    recommendedDose: (_answers: any, _computations: any) => {
      return 1;
    },
    reason:
      "As you get older, it becomes more difficult to absorb enough folic acid.",
  },
  {
    recommendationId: "R197",
    questionnaireId: "Q46",
    supplementId: "S32",
    condition: (answers: any) => answers.Q46.includes("Hartgezondheid"),
    recommendedDose: (_answers: any, _computations: any) => {
      return 1;
    },
    reason: "You have indicated that heart health is one of your health goals.",
  },
];

export const energyHerbsSupplementRecommendations: any = [
  {
    recommendationId: "R19",
    questionnaireId: ["Q13", "Q12"],
    supplementId: "S33",
    condition: (answers: any) =>
      answers.Q13.includes("Prestaties verbeteren") &&
      answers.Q12.includes("Gewichtheffen"),
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 1;
    },
    reason:
      "Je hebt aangegeven dat je aan krachtsport doet en graag je prestaties zou willen verbeteren.",
  },
  {
    recommendationId: "R21",
    questionnaireId: ["Q13", "Q12"],
    supplementId: "S33",
    condition: (answers: any) =>
      answers.Q13.includes("Prestaties verbeteren") &&
      answers.Q12.includes("Duursporten"),
    recommendedDose: (
      _answers: any,

      _computations: any
    ) => {
      return 1;
    },
    reason:
      "Je hebt aangegeven dat je aan duursport doet en graag je prestaties zou willen verbeteren.",
  },
];
