/* eslint-disable react/no-array-index-key */
/* eslint-disable react-hooks/rules-of-hooks */

"use client";

import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import AdditionalInfo from "./AdditionalInfo";
import { Check, MoveRight, X } from "lucide-react";
import Energy from "../public/quizpage/__Energie.png";
import EyeHealth from "../public/quizpage/__Eye Health.png";
import HairHealth from "../public/quizpage/__Hair Health.png";
import HeartHealth from "../public/quizpage/__Heart Health.png";
import LiveHealth from "../public/quizpage/__Liver Health.png";
import SleepIcon from "../public/quizpage/__Slaap.png";
import ImmuneSystem from "../public/quizpage/__Immune System.png";
import Libido from "../public/quizpage/__Libido.png";
import SkinHealth from "../public/quizpage/__Huidgezondheid.png";
import IronHealth from "../public/quizpage/__IJzerwaarden.png";
import BrainFocus from "../public/quizpage/__Geheugen en focus.png";
import MuscleStrength from "../public/quizpage/__Spierkracht.png";
import BoneStrength from "../public/quizpage/__Botgezondheid.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import {
  antioxidantBlendSupplementRecommendations,
  antiStressSupplementRecommendations,
  athleteBlendSupplementRecommendations,
  calciumSupplementRecommendations,
  detoxSupplementRecommendations,
  energyHerbsSupplementRecommendations,
  folicAcidSupplementRecommendations,
  hairSkinNailSupplementRecommendations,
  immuneSupportSupplementRecommendations,
  ironSupplementRecommendations,
  magnesiumSupplementRecommendations,
  moodBoosterSupplementRecommendations,
  nutrientIDMapping,
  omega3SupplementRecommendations,
  pmsBlendSupplementRecommendations,
  prenatalSupplementRecommendations,
  rdiMapping,
  readableNutrientNames,
  supplements,
  veganSupplementRecommendations,
  vitaminASupplementRecommendations,
  vitaminB12SupplementRecommendations,
  vitaminBSupplementRecommendations,
  vitaminCSupplementRecommendations,
  vitaminDSupplementRecommendations,
  weightManagementSupplementRecommendations,
  zincSupplementRecommendations,
} from "@/data/data";

import useS01ProductOverview from "@/hooks/blend/useS01ProductOverview";
import useS02ProductOverview from "@/hooks/blend/useS02ProductOverview";
import useS03ProductOverview from "@/hooks/blend/useS03ProductOverview";
import useS04ProductOverview from "@/hooks/blend/useS04ProductOverview";
import useS05ProductOverview from "@/hooks/blend/useS05ProductOverview";
import useS06ProductOverview from "@/hooks/blend/useS06ProductOverview";
import useS07ProductOverview from "@/hooks/blend/useS07ProductOverview";
import useS08ProductOverview from "@/hooks/blend/useS08ProductOverview";
import useS09ProductOverview from "@/hooks/blend/useS09ProductOverview";
import useS10ProductOverview from "@/hooks/blend/useS10ProductOverview";
import useS11ProductOverview from "@/hooks/blend/useS11ProductOverview";
import useS12ProductOverview from "@/hooks/blend/useS12ProductOverview";
import useS13ProductOverview from "@/hooks/blend/useS13ProductOverview";
import useS15ProductOverview from "@/hooks/blend/useS15ProductOverview";
import useS16ProductOverview from "@/hooks/blend/useS16ProductOverview";
import useS17ProductOverview from "@/hooks/blend/useS17ProductOverview";
import useS18ProductOverview from "@/hooks/blend/useS18ProductOverview";
import useS20ProductOverview from "@/hooks/blend/useS20ProductOverview";
import useS24ProductOverview from "@/hooks/blend/useS24ProductOverview";
import useS26ProductOverview from "@/hooks/blend/useS26ProductOverview";
import useS30ProductOverview from "@/hooks/blend/useS30ProductOverview";
import useS31ProductOverview from "@/hooks/blend/useS31ProductOverview";
import useS32ProductOverview from "@/hooks/blend/useS32ProductOverview";
import useS33ProductOverview from "@/hooks/blend/useS33ProductOverview";
// import useProductOverviewStore from "@/hooks/useProductOverviewStore";
import dynamic from "next/dynamic";
import PricingSelect from "./PricingSelect";
const Scrollbars = dynamic(() => import("react-custom-scrollbars"), {
  ssr: false,
});

const accumulateProperties = (dataArr: any[]) => {
  // console.log(dataArr);
  const result = dataArr.reduce(
    (acc: any, curr: any) => {
      // console.log(acc);
      // console.log(curr);
      // Iterate over keys in the current data object
      Object.keys(curr.data).forEach((key) => {
        // Skip unnecessary properties
        // console.log(key);
        if (
          key === "adjustedAmount" ||
          key === "calculatedAmount" ||
          key === "reasons"
        ) {
          return;
        }

        // Initialize property in the accumulator if not already present
        if (!acc[key]) {
          acc[key] = {
            value: 0,
            reasons: [],
          };
        }

        // Accumulate numeric values, safely converting to float
        const parsedValue = parseFloat(curr.data[key]);
        acc[key].value += !isNaN(parsedValue) ? parsedValue : 0;

        // Combine reasons without duplicating them
        if (curr.reasons && Array.isArray(curr.reasons)) {
          acc[key].reasons = [
            ...new Set([...acc[key].reasons, ...curr.reasons]),
          ];
        }
      });

      return acc;
    },
    {} // Initialize with an empty object
  );

  return result;
};

const conversionDataset = [
  { original: "Vitamine A (bètacaroteen)", converted: "Vitamine A" },
  { original: "Vitamine D3", converted: "Vitamine D3" },
  { original: "Vitamine E (D-alfa tocoferol)", converted: "Vitamine E" },
  { original: "Vitamine K2 (MK-7)", converted: "Vitamine K" },
  { original: "Vitamine C (Magnesium-L-Ascorbaat)", converted: "Vitamine C" },
  { original: "Vitamine B1 (Benfotiamine)", converted: "Vitamine B1" },
  { original: "Vitamine B2 (Riboflavine-5-fosfaat)", converted: "Vitamine B2" },
  { original: "Vitamine B3 (nicotinamide)", converted: "Vitamine B3" },
  {
    original: "Vitamine B5 (calcium-D-pantothenaat)",
    converted: "Vitamine B5",
  },
  { original: "Vitamine B6 (pyridoxaal-5-fosfaat)", converted: "Vitamine B6" },
  { original: "Biotine (vitamine B8)", converted: "Biotine" },
  { original: "Foliumzuur (5-MTHF)", converted: "Foliumzuur" },
  { original: "Vitamine B12 (methylcobalamine)", converted: "Vitamine B12" },
  { original: "Vitamine B12 (adenosylcobalamine)", converted: "Vitamine B12" },
  { original: "Magnesium (bisglycinaat)", converted: "Magnesium" },
  { original: "Magnesium (tauraat)", converted: "Magnesium" },
  { original: "Magnesium (malaat)", converted: "Magnesium" },
  { original: "IJzer (bisglycinaat)", converted: "IJzer" },
  { original: "Calcium (citraat)", converted: "Calcium" },
  { original: "Zink (methionine)", converted: "Zink" },
  { original: "Zink (gluconaat)", converted: "Zink" },
  { original: "Koper (bisglycinaat)", converted: "Koper" },
  { original: "Jodium (kaliumjodide)", converted: "Jodium" },
  { original: "Boron (boriumglycinaat)", converted: "Borium" },
  { original: "Mangaan (bisglycinaat)", converted: "Mangaan" },
  { original: "Kalium (citraat)", converted: "Kalium" },
  { original: "Chroom (picolinaat)", converted: "Chroom" },
  { original: "Selenium (L-selenomethionine)", converted: "Selenium" },
  { original: "Silicium (dioxide)", converted: "Silicium" },
  { original: "Choline (bitartraat)", converted: "Choline" },
  {
    original: "Ashwagandha-extract (min. 5% withanoliden)",
    converted: "Ashwagandha",
  },
  {
    original: "Rhodiola-extract (min. 3% rosavine, 1% salidroside)",
    converted: "Rhodiola",
  },
  {
    original: "Panax ginseng (min. 15% ginsenosiden)",
    converted: "Panax ginseng",
  },
  {
    original: "Groene thee-extract (min. 98% polyfenolen)",
    converted: "Groene thee",
  },
  {
    original: "Olijfbladextract (min. 20% Oleuropeïne)",
    converted: "Olijfblad",
  },
  {
    original: "Vitex agnus castus-extract (Monnikspeper)",
    converted: "Vitex agnus castus",
  },
  {
    original: "Mariadistelextract (min. 80% silymarine)",
    converted: "Mariadistel",
  },
  {
    original: "L-carnitine (L-carnitine-L-tartraat)",
    converted: "L-Carnitine",
  },
  { original: "Luteïne (uit goudsbloem)", converted: "Luteïne" },
  {
    original: "Astaxanthine (uit de alg Haematococcus pluvialis)",
    converted: "Astaxanthine",
  },
  { original: "Quercetine (dihydraat)", converted: "Quercetine" },
  {
    original: "Citrus bioflavonoïden (min. 60% hesperdine)	",
    converted: "Citrus bioflavonoïden",
  },
  { original: "Taurine", converted: "Taurine" },
  { original: "S-Acetyl-L-Glutathion", converted: "S-Acetyl-L-Glutathion" },
  { original: "Saffraan extract (20:1)", converted: "Saffraan" },
  { original: "Alfa-liponzuur", converted: "Alfa-liponzuur" },
  {
    original: "Berberine HCl extract (Berberis aristata)",
    converted: "Berberine",
  },
  { original: "Zwarte peperextract (95% piperine)", converted: "Zwarte peper" },
  { original: "Hyaluronzuur", converted: "Hyaluronzuur" },
  { original: "Bergamot extract 20:1", converted: "Bergamot" },
  { original: "N-Acetyl-L-Cysteïne", converted: "N-Acetyl-L-Cysteïne" },
  { original: "Keratine", converted: "Keratine" },
  { original: "Ubiquinol (bio-actieve Q10-vorm)", converted: "Coenzyme Q10" },
  { original: "Donq Quai", converted: "Donq Quai" },
  { original: "L-Theanine (uit groene thee-extract)", converted: "L-Theanine" },
  { original: "L-arginine", converted: "L-arginine" },
];

const categoryData = {
  Energie: [
    "Calcium (citraat)",
    "IJzer (bisglycinaat)",
    "Jodium (kaliumjodide)",
    "Koper (bisglycinaat)",
    "Magnesium (bisglycinaat)",
    "Mangaan (bisglycinaat)",
    "Vitamine B3 (nicotinamide)",
    "Vitamine B5 (calcium-D-pantothenaat)",
    "Vitamine B2 (Riboflavine-5-fosfaat)",
    "Vitamine B1 (Benfotiamine)",
    "Vitamine B12 (methylcobalamine)",
    "Vitamine B6 (pyridoxaal-5-fosfaat)",
    "Vitamine C (Magnesium-L-Ascorbaat)",
    "Groene thee-extract (min. 98% polyfenolen)",
    "L-Theanine (uit groene thee-extract)",
    "Vitamine B12 (adenosylcobalamine)",
    "Magnesium (tauraat)",
    "Magnesium (malaat)",
  ],
  Bloed: [
    "Foliumzuur (5-MTHF)",
    "IJzer (bisglycinaat)",
    "Vitamine B2 (Riboflavine-5-fosfaat)",
    "Vitamine B12 (methylcobalamine)",
    "Vitamine B6 (pyridoxaal-5-fosfaat)",
    "Vitamine B12 (adenosylcobalamine)",
  ],
  Immuunsysteem: [
    "IJzer (bisglycinaat)",
    "Koper (bisglycinaat)",
    "Selenium (L-selenomethionine)",
    "Vitamine A (bètacaroteen)",
    "Vitamine B12 (methylcobalamine)",
    "Vitamine C (Magnesium-L-Ascorbaat)",
    "Vitamine D3",
    "Zink (methionine)",
    "Panax ginseng (min. 15% ginsenosiden)",
    "Donq Quai",
    "Groene thee-extract (min. 98% polyfenolen)",
    "Vitamine E (D-alfa tocoferol)",
    "Vitamine B12 (adenosylcobalamine)",
  ],
  Botten: [
    "Calcium (citraat)",
    "Magnesium (bisglycinaat)",
    "Mangaan (bisglycinaat)",
    "Vitamine D3",
    "Vitamine K2 (MK-7)",
    "Zink (methionine)",
    "Magnesium (tauraat)",
    "Magnesium (malaat)",
  ],
  Ogen: ["Vitamine A (bètacaroteen)", "Vitamine B2 (Riboflavine-5-fosfaat)"],
  Spieren: [
    "Kalium (citraat)",
    "Calcium (citraat)",
    "Magnesium (bisglycinaat)",
    "Vitamine D3",
    "Magnesium (tauraat)",
    "Magnesium (malaat)",
  ],
  Lever: [
    "Choline (bitartraat)",
    "Berberine HCl extract (Berberis aristata)",
    "Mariadistelextract (min. 80% silymarine)",
  ],
  Huid: [
    "Biotine (vitamine B8)",
    "Koper (bisglycinaat)",
    "Silicium (dioxide)",
    "Jodium (kaliumjodide)",
    "Vitamine B3 (nicotinamide)",
    "Vitamine A (bètacaroteen)",
    "Vitamine C (Magnesium-L-Ascorbaat)",
    "Keratine",
    "Hyaluronzuur",
  ],
  Haar: [
    "Zink (methionine)",
    "Biotine (vitamine B8)",
    "Selenium (L-selenomethionine)",
    "Keratine",
    "Hyaluronzuur",
  ],
  "Slaap & Stress": [
    "Rhodiola-extract (min. 3% rosavine, 1% salidroside)",
    "Vitex agnus castus-extract (Monnikspeper)",
    "Groene thee-extract (min. 98% polyfenolen)",
    "Vitamine B5 (calcium-D-pantothenaat)",
    "Foliumzuur (5-MTHF)",
  ],
  Hart: [
    "Olijfbladextract (min. 20% Oleuropeïne)",
    "L-Theanine (uit groene thee-extract)",
  ],
  "Focus en Geheugen": [
    "Biotine (vitamine B8)",
    "Foliumzuur (5-MTHF)",
    "Vitamine B3 (nicotinamide)",
    "Vitamine B1 (Benfotiamine)",
    "Vitamine B6 (pyridoxaal-5-fosfaat)",
    "Ashwagandha-extract (min. 5% withanoliden)",
  ],
  Libido: [
    "Panax ginseng (min. 15% ginsenosiden)",
    "Ashwagandha-extract (min. 5% withanoliden)",
  ],
} as any;

const reviews = [
  {
    name: "Timo",
    image: "./Timo Y.png",
    stars: 5,
    review:
      "Ik heb nu minder last van brain fog en kan me makkelijker concentreren. Daarnaast heb ik het gevoel dat ik sneller herstel na het sporten. Ik ben erg tevreden over mijn keuze en deze overstap",
  },
  {
    name: "Natalia",
    image: "./Natalia.png",
    stars: 5,
    review:
      "Ik ben ontzettend blij met Smartblend. Ik voel nu al verschil in mijn energieniveau. Sinds ik de voedingssuplementen slik voel ik me veel energieker en vitaler. De moeite waard om uit te proberen.",
  },
  {
    name: "Kuno",
    image: "./Kuno.png",
    stars: 5,
    review:
      "Ik ben nu twee weken bezig met het slikken van de op maat gemaakte pillen, naar mij idee werken ze echt top! Meer focus op mijn bedrijf en minder snel afgeleid! Zou het zo iedereen aanraden.",
  },
];

const categoryIcons = {
  Energie: Energy.src,
  Bloed: HeartHealth.src, // need to be changed
  Immuunsysteem: ImmuneSystem.src,
  Botten: BoneStrength.src,
  Ogen: EyeHealth.src,
  Spieren: MuscleStrength.src,
  Lever: LiveHealth.src,
  Huid: SkinHealth.src,
  Haar: HairHealth.src,
  "Slaap & Stress": SleepIcon.src,
  Hart: HeartHealth.src,
  "Focus en Geheugen": BrainFocus.src,
  Libido: Libido.src,
} as any;

const BlendTab = ({ answers, computations, name }: any) => {
  // const { selectedProducts } = useProductOverviewStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const profile = {
    gender: answers.find((a: any) => a.questionId === "gender")?.answer,
    age:
      new Date().getFullYear() -
      new Date(
        answers.find((a: any) => a.questionId === "dateOfBirth")?.answer
      ).getFullYear(),
  };

  const answersMap = answers.reduce((acc: any, curr: any) => {
    acc[curr.questionId] = curr.answer;
    return acc;
  }, {});

  // Remove markers and any condition logic related to markers
  const getRecommendations = (recommendations: any[], supplementId: string) => {
    return recommendations
      .filter((rec: any) => rec.supplementId === supplementId)
      .filter((rec: any) => {
        return rec.condition(answersMap, computations, profile);
      });
  };

  // Ensure that `computations` is passed correctly
  const computeDose = (rec: any, answers: any) => {
    if (typeof rec.recommendedDose === "function") {
      return rec.recommendedDose(answers, computations); // Pass computations explicitly here
    }
    return null;
  };
  const vitaminDRecommendations = getRecommendations(
    vitaminDSupplementRecommendations,
    "S01"
  );
  // console.log(vitaminDRecommendations);

  const omega3Recommendations = getRecommendations(
    omega3SupplementRecommendations,
    "S02"
  );

  const vitaminCRecommendations = getRecommendations(
    vitaminCSupplementRecommendations,
    "S03"
  );

  const magnesiumRecommendations = getRecommendations(
    magnesiumSupplementRecommendations,
    "S04"
  );

  const ironRecommendations = getRecommendations(
    ironSupplementRecommendations,
    "S05"
  );

  const calciumRecommendations = getRecommendations(
    calciumSupplementRecommendations,
    "S06"
  );

  const vitaminARecommendations = getRecommendations(
    vitaminASupplementRecommendations,
    "S07"
  );

  const vitaminBRecommendations = getRecommendations(
    vitaminBSupplementRecommendations,
    "S08"
  );

  const antiStressRecommendations = getRecommendations(
    antiStressSupplementRecommendations,
    "S09"
  );

  const veganRecommendations = getRecommendations(
    veganSupplementRecommendations,
    "S10"
  );

  const immuneSupportRecommendations = getRecommendations(
    immuneSupportSupplementRecommendations,
    "S11"
  );

  const detoxRecommendations = getRecommendations(
    detoxSupplementRecommendations,
    "S12"
  );

  const moodBoosterRecommendations = getRecommendations(
    moodBoosterSupplementRecommendations,
    "S13"
  );

  const prenatalRecommendations = getRecommendations(
    prenatalSupplementRecommendations,
    "S15"
  );

  const weightManagementRecommendations = getRecommendations(
    weightManagementSupplementRecommendations,
    "S16"
  );

  const hairSkinNailRecommendations = getRecommendations(
    hairSkinNailSupplementRecommendations,
    "S17"
  );

  const athleteBlendRecommendations = getRecommendations(
    athleteBlendSupplementRecommendations,
    "S20"
  );

  const vitaminB12Recommendations = getRecommendations(
    vitaminB12SupplementRecommendations,
    "S24"
  );

  const pmsBlendRecommendations = getRecommendations(
    pmsBlendSupplementRecommendations,
    "S26"
  );

  const zincRecommendations = getRecommendations(
    zincSupplementRecommendations,
    "S30"
  );

  const antioxidantBlendRecommendations = getRecommendations(
    antioxidantBlendSupplementRecommendations,
    "S31"
  );

  const folicAcidRecommendations = getRecommendations(
    folicAcidSupplementRecommendations,
    "S32"
  );

  const energyHerbsRecommendations = getRecommendations(
    energyHerbsSupplementRecommendations,
    "S33"
  );

  const S01Return = useS01ProductOverview({
    recommendations: vitaminDRecommendations,
    supplement: supplements.S01,
    answersMap,
    computationData: computations,
    profile,
    realWeightFactor: supplements.S01.realWeightFactor,
  });
  // console.log(S01Return);

  const S02Return = useS02ProductOverview({
    recommendations: omega3Recommendations,
    supplement: supplements.S02,
    answersMap,
    computationData: computations,
    profile,
    realWeightFactor: supplements.S02.realWeightFactor,
  });

  const S03Return = useS03ProductOverview({
    recommendations: vitaminCRecommendations,
    supplement: supplements.S03,
    answersMap,
    computationData: computations,
    profile,
    realWeightFactor: supplements.S03.realWeightFactor,
  });
  // console.log(S03Return);

  const S04Return = useS04ProductOverview({
    recommendations: magnesiumRecommendations,
    supplement: supplements.S04,
    answersMap,
    computationData: computations,
    profile,
    realWeightFactor: supplements.S04.realWeightFactor,
  });

  const S05Return = useS05ProductOverview({
    recommendations: ironRecommendations,
    supplement: supplements.S05,
    answersMap,
    computationData: computations,
    profile,
    realWeightFactor: supplements.S05.realWeightFactor,
  });

  const S06Return = useS06ProductOverview({
    recommendations: calciumRecommendations,
    supplement: supplements.S06,
    answersMap,
    computationData: computations,
    profile,
    realWeightFactor: supplements.S06.realWeightFactor,
  });

  const S07Return = useS07ProductOverview({
    recommendations: vitaminARecommendations,
    supplement: supplements.S07,
    answersMap,
    computationData: computations,
    profile,
    realWeightFactor: supplements.S07.realWeightFactor,
  });

  const S08Return = useS08ProductOverview({
    recommendations: vitaminBRecommendations,
    supplement: supplements.S08,
    answersMap,
    computationData: computations,
    profile,
    realWeightFactor: supplements.S08.realWeightFactor,
  });

  const S09Return = useS09ProductOverview({
    recommendations: antiStressRecommendations,
    supplement: supplements.S09,
    answersMap,
    computationData: computations,
    profile,
    realWeightFactor: supplements.S09.realWeightFactor,
  });

  const S10Return = useS10ProductOverview({
    recommendations: veganRecommendations,
    supplement: supplements.S10,
    answersMap,
    computationData: computations,
    profile,
    realWeightFactor: supplements.S10.realWeightFactor,
  });

  const S11Return = useS11ProductOverview({
    recommendations: immuneSupportRecommendations,
    supplement: supplements.S11,
    answersMap,
    computationData: computations,
    profile,
    realWeightFactor: supplements.S11.realWeightFactor,
  });

  const S12Return = useS12ProductOverview({
    recommendations: detoxRecommendations,
    supplement: supplements.S12,
    answersMap,
    computationData: computations,
    profile,
    realWeightFactor: supplements.S12.realWeightFactor,
  });

  const S13Return = useS13ProductOverview({
    recommendations: moodBoosterRecommendations,
    supplement: supplements.S13,
    answersMap,
    computationData: computations,
    profile,
    realWeightFactor: supplements.S13.realWeightFactor,
  });

  const S15Return = useS15ProductOverview({
    recommendations: prenatalRecommendations,
    supplement: supplements.S15,
    answersMap,
    computationData: computations,
    profile,
    realWeightFactor: supplements.S15.realWeightFactor,
  });

  const S16Return = useS16ProductOverview({
    recommendations: weightManagementRecommendations,
    supplement: supplements.S16,
    answersMap,
    computationData: computations,
    profile,
    realWeightFactor: supplements.S16.realWeightFactor,
  });

  const S17Return = useS17ProductOverview({
    recommendations: hairSkinNailRecommendations,
    supplement: supplements.S17,
    answersMap,
    computationData: computations,
    profile,
    realWeightFactor: supplements.S17.realWeightFactor,
  });

  const S20Return = useS20ProductOverview({
    recommendations: athleteBlendRecommendations,
    supplement: supplements.S20,
    answersMap,
    computationData: computations,
    profile,
    realWeightFactor: supplements.S20.realWeightFactor,
  });

  const S24Return = useS24ProductOverview({
    recommendations: vitaminB12Recommendations,
    supplement: supplements.S24,
    answersMap,
    computationData: computations,
    profile,
    realWeightFactor: supplements.S24.realWeightFactor,
  });

  const S26Return = useS26ProductOverview({
    recommendations: pmsBlendRecommendations,
    supplement: supplements.S26,
    answersMap,
    computationData: computations,
    profile,
    realWeightFactor: supplements.S26.realWeightFactor,
  });

  const S30Return = useS30ProductOverview({
    recommendations: zincRecommendations,
    supplement: supplements.S30,
    answersMap,
    computationData: computations,
    profile,
    realWeightFactor: supplements.S30.realWeightFactor,
  });

  const S31Return = useS31ProductOverview({
    recommendations: antioxidantBlendRecommendations,
    supplement: supplements.S31,
    answersMap,
    computationData: computations,
    profile,
    realWeightFactor: supplements.S31.realWeightFactor,
  });

  const S32Return = useS32ProductOverview({
    recommendations: folicAcidRecommendations,
    supplement: supplements.S32,
    answersMap,
    computationData: computations,
    profile,
    realWeightFactor: supplements.S32.realWeightFactor,
  });

  console.log(S32Return);

  const S33Return = useS33ProductOverview({
    recommendations: energyHerbsRecommendations,
    supplement: supplements.S33,
    answersMap,
    computationData: computations,
    profile,
    realWeightFactor: supplements.S33.realWeightFactor,
  });

  const images = [
    "./quizpage/__Timo’s Formule.png",
    "./quizpage/Emma_s Formule.png",
    "./quizpage/__Julia’s Formule.png",
  ];

  const blendData = [
    { productCode: "S01", data: S01Return, reasons: S01Return.reasons },
    // { productCode: "S02", data: S02Return, reasons: S02Return.reasons },
    { productCode: "S24", data: S24Return, reasons: S24Return.reasons },
    { productCode: "S05", data: S05Return, reasons: S05Return.reasons },
    { productCode: "S07", data: S07Return, reasons: S07Return.reasons },
    { productCode: "S30", data: S30Return, reasons: S30Return.reasons },
    { productCode: "S32", data: S32Return, reasons: S32Return.reasons },
    { productCode: "S08", data: S08Return, reasons: S08Return.reasons },
    { productCode: "S15", data: S15Return, reasons: S15Return.reasons },
    { productCode: "S11", data: S11Return, reasons: S11Return.reasons },
    { productCode: "S33", data: S33Return, reasons: S33Return.reasons },
    { productCode: "S17", data: S17Return, reasons: S17Return.reasons },
    { productCode: "S20", data: S20Return, reasons: S20Return.reasons },
    { productCode: "S09", data: S09Return, reasons: S09Return.reasons },
    { productCode: "S26", data: S26Return, reasons: S26Return.reasons },
    { productCode: "S12", data: S12Return, reasons: S12Return.reasons },
    { productCode: "S16", data: S16Return, reasons: S16Return.reasons },
    { productCode: "S13", data: S13Return, reasons: S13Return.reasons },
    { productCode: "S31", data: S31Return, reasons: S31Return.reasons },
    { productCode: "S10", data: S10Return, reasons: S10Return.reasons },
    { productCode: "S04", data: S04Return, reasons: S04Return.reasons },
    { productCode: "S03", data: S03Return, reasons: S03Return.reasons },
    { productCode: "S06", data: S06Return, reasons: S06Return.reasons },
  ];

  // console.log(selectedProducts)
  // const filteredBlendData = blendData
  //   .filter((item) => selectedProducts.includes(item.productCode))
  //   .map((item) => item.data);

  // console.log(blendData);
  const onlyTriggeredBlends = blendData.filter((u) => {
    if (u.data.calculatedAmount !== "0.0000") {
      return u;
    } else {
      // console.log(u);
      return null;
    }
  });
  // console.log(onlyTriggeredBlends);

  let totalDose = 0;
  const priorityList = [] as any;

  onlyTriggeredBlends.forEach((data) => {
    const currentDose = parseFloat(String(data.data.adjustedAmount));

    if (totalDose + currentDose <= 3000) {
      // Add the full dose if it doesn't exceed the limit
      totalDose += currentDose;
      priorityList.push({
        ...data,
        data: {
          ...data.data,
          adjustedAmount: String(currentDose), // Using bracket notation to update adjustedAmount
        },
      });
    } else {
      // If adding the full dose exceeds the limit, adjust to reach 3000mg
      const remainingDose = 3000 - totalDose;
      if (remainingDose > 0) {
        totalDose = 3000;
        priorityList.push({
          ...data,
          data: {
            ...data.data,
            adjustedAmount: String(remainingDose.toFixed(4)), // Adjusted to fit the remaining dose
          },
        });
      }
    }
  });

  // console.log(priorityList);

  const accumulatedData = accumulateProperties(priorityList);
  // console.log(accumulatedData);
  const calculateRI: any = (value: any, rdi: any) =>
    rdi ? ((value / rdi) * 100).toFixed(2) : "**";

  const mcgToMgMapping: any = {
    vitaminD: 0.001, // 1 mcg = 0.001 mg
    vitaminK2: 0.001, // 1 mcg = 0.001 mg
  };

  const accumulatedValues = Object.keys(accumulatedData).reduce(
    (acc: any, key: any) => {
      const value = accumulatedData[key]?.value; // Access the 'value' field properly

      if (value) {
        acc[key] = value;
      } else {
        acc[key] = null;
      }

      return acc;
    },
    {}
  );
  // console.log(accumulatedValues)

  let tableData = Object.keys(accumulatedValues).map((key) => {
    let value = parseFloat(accumulatedData[key].value);

    if (mcgToMgMapping[key]) {
      value *= mcgToMgMapping[key];
    }

    const readableName = readableNutrientNames[key] || key;
    const rdiValue = rdiMapping[key] || "**";
    const riPercentage =
      rdiValue !== "**" ? `${calculateRI(value, rdiValue)}%` : "**";
    const nutrientID = nutrientIDMapping[key] || "**";
    const reasons = accumulatedData[key].reasons || [];

    return {
      nutrientID,
      readableName,
      value: value.toFixed(4),
      riPercentage,
      reasons,
    };
  });
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const openModal = (item: any) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };
  const formatQuantity = (quantity: any) => {
    return parseFloat(quantity)
      .toFixed(3)
      .replace(/\.?0+$/, "");
  };

  tableData = tableData.filter((u) => u.value !== "0.0000");
  console.log(tableData);
  console.log(selectedItem);

  const conversionMap = new Map(
    conversionDataset.map((entry) => [
      entry.original.trim(),
      entry.converted.trim(),
    ])
  );

  return (
    <div className="w-full relative h-auto">
      <div className="from-[#DDF3F7] to-[#6EC8ED] bg-gradient-to-b h-[65vh]">
        <div className="flex md:flex-row ml-0 md:-ml-44 flex-col w-auto mb-5 pt-0 md:pt-5 items-start justify-evenly">
          <div className="w-[100vw] md:w-[50vw] mt-14 flex space-y-5 justify-center items-center flex-col text-center">
            <div className="md:text-3xl text-xl w-[80vw] md:w-[30vw] font-bold">
              {name}, je persoonlijke supplement is berekend!
            </div>
            <div className="md:text-lg text-sm w-[80vw] md:w-[30vw]">
              1 tot 5 dagelijkse capsules met precies de stoffen die jouw
              lichaam nodig heeft.
            </div>
            <a
              className="flex z-10 mt-5 md:mt-10 justify-center items-center w-72 border-white border-2  rounded-3xl bg-gradient-to-r from-malibu-300 to-froly-400 px-4 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gradient-to-r hover:from-froly-400 hover:to-malibu-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-malibu-300"
              onClick={(e) => {
                e.preventDefault();

                // Check if the screen width is greater than 768px
                if (window.innerWidth > 768) {
                  const target = document.getElementById("purchase");
                  if (target) {
                    const offset = -100; // Adjust this value for higher scroll
                    const yPosition =
                      target.getBoundingClientRect().top +
                      window.scrollY +
                      offset;
                    window.scrollTo({
                      top: yPosition,
                      behavior: "smooth",
                    });
                  }
                } else {
                  const target = document.getElementById("purchase");
                  if (target) {
                    const yPosition =
                      target.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({
                      top: yPosition,
                      behavior: "smooth",
                    });
                  }
                }
              }}
            >
              Bestel Nu
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-move-right ml-2 h-4"
              >
                <path d="M18 8L22 12L18 16"></path>
                <path d="M2 12H22"></path>
              </svg>
            </a>
            <div className="relative overflow-x-hidden">
              <img
                src="./mockup-packaging (resized).png"
                style={{ marginTop: "-117px" }}
                className=" md:w-[34rem] w-[100vw] md:scale-x-100 scale-x-125 h-[30rem] md:h-[34rem]"
              />
              <div
                style={{ justifyContent: "flex-start", display: "flex" }}
                className="z-10 w-20 md:w-28  truncate items-start justify-start text-xs md:text-[1rem] top-[67%] md:top-[68.5%] left-[36%] md:left-[38.5%] text-white absolute"
              >
                {name}
              </div>
            </div>
          </div>

          <div className="w-[100vw] ml-0 md:-ml-72  md:mt-0 -mt-16 md:w-[35vw]">
            {tableData.length > 0 && (
              <div className="mt-4 flex w-full flex-col items-center gap-3 rounded-lg">
                <div className="w-full max-w-2xl rounded-3xl bg-gradient-to-b from-white to-[#78c1f3] p-2">
                  <div className="flex flex-col justify-center items-center w-full">
                    <div className="text-xl mt-5 font-bold">
                      Jouw Unieke Smartblend
                    </div>
                    <div className="font-normal text-sm px-6 text-center mt-2 mb-0">
                      Hieronder zie je jouw persoonlijke aanbeveling. Druk op
                      een ingrediënt om meer te weten te komen over de stof en
                      waarom deze onderdeel uit maakt van jouw persoonlijke
                      formule.
                    </div>
                  </div>
                  <div className="mx-auto relative mt-16 w-full rounded-2xl bg-white p-1">
                    <div className="absolute font-semibold bg-white px-3 left-0 py-2 rounded-t-lg text-blue-300 -top-7 ">
                      <span className="">
                        Bevat {tableData && tableData.length} voedingsstoffen
                      </span>
                    </div>
                    <Scrollbars
                      className="size-full"
                      style={{ height: 480, width: "100%" }}
                    >
                      <table className="size-full">
                        <thead className="sticky z-10 top-0 bg-white">
                          <tr className="">
                            <th className="border-b border-gray-300 px-1 !w-24 md:w-auto md:px-2 py-2 text-left text-xs lg:text-sm">
                              Actief ingrediënt
                            </th>
                            <th className="border-b border-gray-300 px-0 md:px-0 text-center w-full py-2 text-xs lg:text-sm">
                              Gezondheidsdoel
                            </th>
                            <th className="border-b border-gray-300 px-4 md:px-8 py-2  text-left text-xs lg:text-sm">
                              Per dosering
                            </th>
                            <th className="border-b border-gray-300 px-4 md:px-8 py-2 text-left text-xs lg:text-sm">
                              RI%
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {tableData &&
                            tableData.map((item: any, idx: any) => {
                              // Normalize the nutrient name
                              const trimmedReadableName =
                                item.readableName.trim();
                              console.log(trimmedReadableName);
                              // Convert the name if needed
                              const convertedName =
                                conversionMap.get(trimmedReadableName) ||
                                trimmedReadableName;

                              // Match categories based on exact inclusion in categoryData
                              const matchedCategories = Object.keys(
                                categoryData
                              ).filter((category) =>
                                categoryData[category].includes(
                                  trimmedReadableName
                                )
                              );

                              return (
                                <tr
                                  key={idx}
                                  onClick={() => openModal(item)} // Handle row click to open modal
                                  className="cursor-pointer hover:bg-malibu-50"
                                >
                                  {/* Nutrient Name */}
                                  <td className="border-b border-gray-300 px-1 md:px-4 py-2 text-xs lg:text-sm">
                                    {convertedName}
                                  </td>

                                  {/* Health Goals (Matched Categories with Icons) */}
                                  <td className="w-full border-b border-gray-300 text-left py-2 text-xs lg:text-sm">
                                    <div
                                      className={`flex justify-end space-x-1 w-[75%] md:w-1/2 text-right ml-3 md:ml-12`}
                                    >
                                      {matchedCategories.length > 0
                                        ? matchedCategories.map((category) => (
                                            <div
                                              key={category}
                                              className="relative group w-6 inline-block"
                                            >
                                              {/* Display Icon */}
                                              <img
                                                src={categoryIcons[category]}
                                                alt={category}
                                                className="w-6 h-6 mx-1"
                                              />
                                              {/* Tooltip for Category */}
                                              <span className="absolute z-50 left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block whitespace-nowrap bg-gray-800 text-white text-xs px-2 py-1 rounded-md shadow-md">
                                                {category}
                                              </span>
                                            </div>
                                          ))
                                        : null}
                                    </div>
                                  </td>

                                  {/* Quantity */}
                                  <td className="w-36 border-b border-gray-300 px-2 md:px-8 py-2 text-xs lg:text-sm">
                                    {formatQuantity(item.value)} mg
                                  </td>

                                  {/* RI Percentage */}
                                  <td className="w-28 border-b border-gray-300 px-4 md:px-8 py-2 text-xs lg:text-sm">
                                    {item.riPercentage}
                                  </td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </table>
                    </Scrollbars>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex md:flex-row flex-col w-full h-[40rem] md:h-48 px-6 md:px-[10%] items-center bg-[#F3FCFB] justify-center md:justify-around">
          <div className="text-center py-5 flex flex-col justify-center items-center">
            <img src="/3.svg" className="h-12 w-12 mb-2" />
            <div className="text-lg">Behaal je doelen</div>
            <div className="w-full md:w-80 text-lg opacity-50">
              met een supplement wat speciaal op jouw is afgesteld.
            </div>
          </div>
          <div className="text-center py-5 flex flex-col justify-center items-center">
            <img src="/2.svg" className="h-12 w-12 mb-2" />
            <div className="text-lg w-80">
              Krijg precies de juiste hoeveelheid
              <br />
              <span className="text-lg md:w-80 w-full ml-0 md:ml-2 opacity-50">
                van elke stof. Niet teveel, niet te weinig.
              </span>
              {/* <span className="opacity-50">welke</span> */}
            </div>
          </div>
          <div className="text-center py-5 flex flex-col justify-center items-center">
            <img src="/1.svg" className="h-12 w-12 mb-2" />
            <div className="text-lg">
              Stop met het verspillen
              <span className="opacity-50"> </span>
            </div>
            <div className="text-lg w-full md:w-64 opacity-50">
              van je geld aan de verkeerde supplementen die niks opleveren.
            </div>
          </div>
        </div>

        <div
          id="purchase"
          className="w-full mt-5 mb-10 flex justify-center items-center"
        >
          <div className="w-[100vw] flex justify-center items-center">
            <div className="relative flex justify-center items-center w-[95vw] md:w-[67vw] rounded-3xl max-h-auto md:max-h-screen bg-gradient-to-b from-malibu-100 to-malibu-200 p-6 shadow-lg lg:max-h-[720px]">
              <div className="flex size-full w-[95vw] md:w-[60vw] justify-center">
                <div className="flex w-full flex-col items-center justify-center overflow-y-auto lg:flex-row">
                  <div className="w-full flex-col items-center justify-center flex">
                    <div className="relative mx-auto max-w-[240px]">
                      <Image
                        src="/assets/images/packaging.png"
                        alt="packaging"
                        width={1789}
                        height={3129}
                        className="w-full max-w-[240px] object-cover pt-4"
                      />
                      <div
                        style={{
                          justifyContent: "flex-start",
                          display: "flex",
                        }}
                        className="absolute w-28 truncate bottom-[51px] left-[30px] text-white"
                      >
                        {name}
                      </div>
                    </div>

                    <ul className="mt-4 list-none">
                      <li className="mb-2 flex items-center">
                        <Check className="mr-2 size-4" />
                        <span>Volledig op maat gemaakt</span>
                      </li>
                      <li className="mb-2 flex items-center">
                        <Check className="mr-2 size-4" />
                        <span>Wetenschappelijk onderbouwd</span>
                      </li>
                      <li className="mb-2 flex items-center">
                        <Check className="mr-2 size-4" />
                        <span>Alleen de beste ingrediënten</span>
                      </li>
                      <li className="mb-2 flex items-start md:items-center">
                        <Check className="mr-2 md:mt-0 mt-1 size-5 md:size-4" />
                        <span>
                          Verandert met jou, je levensstijl en het seizoen mee
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div
                    id="Payment"
                    className="flex w-full items-center justify-center"
                  >
                    <PricingSelect />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex shadow-lg shadow-gray-300 justify-center items-center my-10 bg-[#F3FCFB]">
          <div className="flex md:flex-row rounded-3xl flex-col py-10 items-center w-[95vw] md:w-[67vw]">
            <div className="w-full md:w-1/2 mx-1 md:mx-5 flex flex-col justify-start items-start">
              <div className="text-xl md:text-3xl w-full text-gray-600 font-bold">
                Het meest persoonlijke supplement wat je kunt kopen
              </div>
              <div className="text-sm md:text-xl mt-3 md:mt-5 tracking-wider text-black font-semilight">
                Je formule is 100% afgestemd op jouw behoeften, gebaseerd op de
                resultaten van de vitaminetest.
              </div>
              <div className="flex flex-col justify-start items-start mt-5 space-y-2">
                <div className="flex border border-blue-400 p-2 rounded-lg w-full cursor-pointer justify-start items-start md:items-center space-x-3 md:space-x-5">
                  <img
                    src="./Precieze doseringen.png"
                    className="md:w-12 w-6 h-6 md:h-12 md:mt-0 mt-2"
                  />
                  <div>
                    Precieze doseringen die volledig zijn afgestemd op jouw
                    persoonlijke situatie.
                  </div>
                </div>
                <div className="flex border border-blue-400 p-2 rounded-lg w-full cursor-pointer justify-start items-start md:items-center space-x-3 md:space-x-5">
                  <img
                    src="./Focust zich op jouw unieke doelen.png"
                    className="md:w-12 w-6 h-6 md:h-12 md:mt-0 mt-2"
                  />
                  <div>
                    Focus zich op jouw unieke doelen, of dat nu meer energie,
                    een sterker immuunsysteem, een gezondere huid, of iets
                    anders is.
                  </div>
                </div>
                <div className="flex border border-blue-400 p-2 rounded-lg w-full cursor-pointer justify-start items-start md:items-center space-x-3 md:space-x-5">
                  <img
                    src="./Complete oplossing.png"
                    className="md:w-12 w-6 h-6 md:h-12 md:mt-0 mt-2"
                  />
                  <div>
                    Een complete oplossing met alle vitamines, mineralen,
                    aminozuren, fytonutriënten en kruiden die jouw lichaam nodig
                    heeft.
                  </div>
                </div>
                <div className="flex border border-blue-400 p-2 rounded-lg w-full cursor-pointer justify-start items-start md:items-center space-x-3 md:space-x-5">
                  <img
                    src="./Gebaseerd op een wetenschappelijk.png"
                    className="md:w-12 w-6 h-6 md:h-12 md:mt-0 mt-2"
                  />
                  <div>
                    Gebaseerd op een wetenschappelijk onderbouwd algoritme.
                  </div>
                </div>
                <div className="flex border border-blue-400 p-2 rounded-lg w-full cursor-pointer justify-start items-start md:items-center space-x-3 md:space-x-5">
                  <img
                    src="./Een formule die met jou.png"
                    className="md:w-12 w-6 h-6 md:h-12 md:mt-0 mt-2"
                  />
                  <div>
                    Een formule die met jou, je levensstijl en het seizoen mee
                    verandert.
                  </div>
                </div>
                <div className="flex border border-blue-400 p-2 rounded-lg w-full cursor-pointer justify-start items-start md:items-center space-x-3 md:space-x-5">
                  <img
                    src="./Elke voedingstof uit jouw.png"
                    className="md:w-12 w-6 h-6 md:h-12 md:mt-0 mt-2"
                  />
                  <div>
                    Elke voedingsstof uit jouw aanbeveling is zorgvuldig
                    geselecteerd voor optimale opname en werking.
                  </div>
                </div>
                <div className="flex border border-blue-400 p-2 rounded-lg w-full cursor-pointer justify-start items-start md:items-center space-x-3 md:space-x-5">
                  <img
                    src="./Een echt uniek product.png"
                    className="md:w-12 w-6 h-6 md:h-12 md:mt-0 mt-1"
                  />
                  <div>
                    Een écht uniek product: geen enkele formule is hetzelfde.
                  </div>
                </div>
              </div>

              <a
                onClick={(e) => {
                  e.preventDefault();

                  // Check if the screen width is greater than 768px
                  if (window.innerWidth > 768) {
                    const target = document.getElementById("purchase");
                    if (target) {
                      const offset = -100; // Adjust this value for higher scroll
                      const yPosition =
                        target.getBoundingClientRect().top +
                        window.scrollY +
                        offset;
                      window.scrollTo({
                        top: yPosition,
                        behavior: "smooth",
                      });
                    }
                  } else {
                    const target = document.getElementById("purchase");
                    if (target) {
                      const yPosition =
                        target.getBoundingClientRect().top + window.scrollY;
                      window.scrollTo({
                        top: yPosition,
                        behavior: "smooth",
                      });
                    }
                  }
                }}
                className="flex z-10 mt-5 md:mt-10 md:mb-0 mb-10 justify-center items-center w-full border-white border-2  rounded-3xl bg-gradient-to-r from-malibu-300 to-froly-400 px-4 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gradient-to-r hover:from-froly-400 hover:to-malibu-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-malibu-300"
              >
                Bestel jouw Formule
              </a>
            </div>
            <div className="w-1/2 h-full hidden md:flex flex-col space-y-5 justify-center items-center">
              <img
                src="./quizpage/Revised Rectangular_Back-3 copy 3.png"
                className="w-[80%] h-[20%]"
                alt="formula"
              />
              <img
                src="./quizpage/Revised Rectangular_Back-3 copy 5.png"
                className="w-[80%] h-[20%]"
                alt="formula"
              />
              <img
                src="./quizpage/Revised Rectangular_Back-3 copy 6.png"
                className="w-[80%] h-[20%]"
                alt="formula"
              />
            </div>
            <div className="md:hidden block w-full">
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                className="w-full"
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      className="w-full h-auto rounded-none" // Ensure no rounding
                      alt={`Slide ${index + 1}`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center py-10">
          <div className="text-center text-2xl md:text-5xl font-bold">
            Waarom kiezen voor Smartblend?
          </div>
          <div className="flex justify-center md:justify-around items-center mt-5 md:mt-10 space-x-0 md:space-x-10">
            <img
              src="../../coverimage.png"
              className="w-[30vw] hidden md:block shadow-lg shadow-gray-400 rounded-3xl"
            />
            <div className="flex space-y-8 md:space-y-10 w-[95vw] md:w-[35vw] flex-col justify-start items-start">
              <div className="flex p-2 border space-x-2 hover:scale-105 ease-in duration-500 cursor-pointer shadow-sm shadow-blue-400 rounded-lg border-blue-50 justify-center items-center">
                <img
                  src="../../Checkmarkicon-smartblendblue.png"
                  className="w-10 h-10"
                />
                <div className="flex flex-col md:ml-0 !ml-5 justify-start items-start">
                  <div className="font-bold">
                    Behaal je doelen met een persoonlijk supplement
                  </div>
                  <div className="font-light">
                    Ons wetenschappelijk onderbouwde algoritme, ontwikkeld in
                    samenwerking met experts, zorgt ervoor dat je supplement
                    optimaal aansluit bij jouw situatie en doelen.
                  </div>
                </div>
              </div>
              <div className="flex p-2 border space-x-2 hover:scale-105 ease-in duration-500 cursor-pointer shadow-sm shadow-blue-400 rounded-lg border-blue-50 justify-center items-center">
                <img
                  src="../../Checkmarkicon-smartblendblue.png"
                  className="w-10 h-10"
                />
                <div className="flex flex-col md:ml-0 !ml-5 justify-start items-start">
                  <div className="font-bold">
                    Haal het maximale uit je supplementen routine
                  </div>
                  <div className="font-light">
                    Voor €2,42/dag krijg je een volledig gepersonaliseerd
                    supplement. Dit lijkt misschien duur, maar is vaak
                    voordeliger dan alles los kopen.
                  </div>
                </div>
              </div>
              <div className="flex p-2 border space-x-2 hover:scale-105 ease-in duration-500 cursor-pointer shadow-sm shadow-blue-400 rounded-lg border-blue-50 justify-center items-center">
                <img
                  src="../../Checkmarkicon-smartblendblue.png"
                  className="w-10 h-10"
                />
                <div className="flex flex-col md:ml-0 !ml-5 justify-start items-start">
                  <div className="font-bold">
                    Neem alleen wat jouw lichaam echt nodig heeft
                  </div>
                  <div className="font-light">
                    Standaard vitamines bevatten tot 40% aan overbodige stoffen.
                    Bij Smartblend krijg je alleen de stoffen die voor jou van
                    waarde zijn. Geen verspilling, geen risico's, alleen
                    resultaat.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F3FCFB] flex justify-center items-center w-full mt-10">
          <div className="w-full flex mx-5 md:mx-20 flex-col justify-center items-center py-5">
            <div className="text-2xl flex space-x-2 md:space-x-5 justify-center items-center font-bold text-green-500">
              <img
                src="./quizpage/Trustpilot stars no bg.png"
                className="w-44 md:w-44 rounded-lg"
              />
              <img
                src="./quizpage/Trustpilot logo no bg.png"
                className="w-44 md:w-44 h-auto md:h-44 bg-transparent rounded-lg"
              />
            </div>
            <div className="text-2xl md:text-4xl font-bold md:mt-0 -mt-8">
              Wat onze klanten zeggen
            </div>
            <div className="text-sm md:mx-0 mx-4 md:text-xl text-center font-semibold ">
              Lees hieronder hoe anderen mensen de supplementen ervaren{" "}
            </div>
            <div className="hidden lg:flex md:flex-row flex-col justify-center space-y-5 md:space-y-0 space-x-0  md:space-x-10 mt-10 items-center">
              <div className="flex flex-col justify-center items-center text-center">
                <img
                  src="./Timo Y.png"
                  className="w-24 h-24 bg-blue-400 rounded-full"
                />
                <div className="text-lg flex font-bold rounded-full">
                  <img
                    src="./quizpage/Icons - No BG.png"
                    className="w-24 h-24 -mt-5"
                  />
                </div>
                <div className="font-bold text-xl">Timo</div>
                <div className="w-[25rem] ">
                  Ik heb nu minder last van brain fog en kan me makkelijker
                  concentreren. Daarnaast heb ik het gevoel dat ik sneller
                  herstel na het sporten. Ik ben erg tevreden over mijn keuze en
                  deze overstap
                </div>
              </div>
              <div className="flex flex-col justify-center items-center text-center">
                <img
                  src="./Natalia.png"
                  className="w-24 h-24 bg-blue-400 rounded-full"
                />
                <div className="text-lg flex font-bold rounded-full">
                  <img
                    src="./quizpage/Icons - No BG.png"
                    className="w-24 h-24 -mt-5"
                  />
                </div>
                <div className="font-bold text-xl">Natalia</div>
                <div className="w-[25rem]">
                  Ik ben ontzettend blij met Smartblend. Ik voel nu al verschil
                  in mijn energieniveau. Sinds ik de voedingssuplementen slik
                  voel ik me veel energieker en vitaler. De moeite waard om uit
                  te proberen.
                </div>
              </div>
              <div className="flex flex-col justify-center items-center text-center">
                <img
                  src="./Kuno.png"
                  className="w-24 h-24 bg-blue-400 rounded-full"
                />
                <div className="text-lg flex font-bold rounded-full">
                  <img
                    src="./quizpage/Icons - No BG.png"
                    className="w-24 h-24 -mt-5"
                  />
                </div>
                <div className="font-bold text-xl">Kuno</div>
                <div className="w-[25rem]">
                  Ik ben nu twee weken bezig met het slikken van de op maat
                  gemaakte pillen, naar mij idee werken ze echt top! Meer focus
                  op mijn bedrijf en minder snel afgeleid! Zou het zo iedereen
                  aanraden.
                </div>
              </div>
            </div>
            <div className="w-full flex lg:hidden flex-col justify-center items-center mt-10">
              {/* Swiper Carousel */}
              <Swiper
                modules={[Pagination, Autoplay]} // Ensure Pagination and Autoplay
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop={true}
                className="w-full md:w-3/4 min-h-[400px] py-10"
              >
                {reviews.map((review, index) => (
                  <SwiperSlide
                    key={index}
                    className="flex flex-col justify-center items-center text-center"
                  >
                    <img
                      src={review.image}
                      className="w-24 h-24 bg-blue-400 rounded-full"
                      alt={review.name}
                    />
                    <div className="text-lg flex font-bold">
                      <img
                        src="./quizpage/Icons - No BG.png"
                        className="w-32 h-32 -my-8"
                        alt="star"
                      />
                    </div>
                    <div className="font-bold text-xl">{review.name}</div>
                    <div className="w-[90%] mt-2">{review.review}</div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <div className="bg-[#F3FCFB] flex justify-center items-center py-10">
          <a
            className="flex justify-center items-center w-72 border-white border-2  rounded-3xl bg-gradient-to-r from-malibu-300 to-froly-400 px-4 py-3 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-gradient-to-r hover:from-froly-400 hover:to-malibu-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-malibu-300"
            href="#"
            onClick={(e) => {
              e.preventDefault();

              // Check if the screen width is greater than 768px
              if (window.innerWidth > 768) {
                const target = document.getElementById("purchase");
                if (target) {
                  const offset = -100; // Adjust this value for higher scroll
                  const yPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY +
                    offset;
                  window.scrollTo({
                    top: yPosition,
                    behavior: "smooth",
                  });
                }
              } else {
                const target = document.getElementById("purchase");
                if (target) {
                  const yPosition =
                    target.getBoundingClientRect().top + window.scrollY;
                  window.scrollTo({
                    top: yPosition,
                    behavior: "smooth",
                  });
                }
              }
            }}
          >
            Bestel Nu
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-move-right ml-2 h-4"
            >
              <path d="M18 8L22 12L18 16"></path>
              <path d="M2 12H22"></path>
            </svg>
          </a>
        </div>
        {/* <div className="w-full flex flex-col justify-center mt-16 items-center">
          <div className="font-bold text-xl ">
            Nog niet volledig overtuigd? Maak een account aan en ontvang
            tijdelijk gratis professioneel advies!
          </div>
          <div className="flex px-8 mt-5 items-center justify-center rounded-3xl bg-gradient-to-r from-malibu-300 to-froly-400 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gradient-to-r hover:from-froly-400 hover:to-malibu-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-malibu-300">
            Maak een Account
          </div>
          <div className="mt-5 mb-44 flex flex-col space-y-5 justify-start items-start">
            <div className="flex justify-center items-start md:items-center space-x-2">
              <img src="./tickMarker2.png" className="w-6 h-6" />
              <div>
                Ontvang toelichting op je supplement en persoonlijke levenstijl
                tips
              </div>
            </div>
            <div className="flex justify-center items-start md:items-center space-x-2">
              <img src="./tickMarker2.png" className="w-6 h-6" />
              <div>
                Geheel vrijblijvend, op basis van de door jouw ingevulde
                vragenlijst
              </div>
            </div>
            <div className="flex justify-center items-start md:items-center space-x-2">
              <img src="./tickMarker2.png" className="w-6 h-6" />
              <div>Op werkdagen binnen 48 uur zichtbaar in je dashboard</div>
            </div>
          </div>
        </div> */}
      </div>
      {isModalOpen && selectedItem && (
        <Modal
          ariaHideApp={false}
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Element Details Modal"
          className="modal max-h-screen w-full max-w-3xl overflow-auto"
          overlayClassName="modal-overlay"
        >
          <button
            type="button"
            onClick={closeModal}
            className="absolute left-4 top-4 flex size-6 cursor-pointer items-center justify-center rounded-full border-none bg-[#78c1f3] text-white hover:bg-[#f37783]"
          >
            <X className="size-4" />
          </button>
          <div className="py-8 pl-4">
            <h2 className="pb-4 text-xl font-bold text-shuttle-gray-600">
              {selectedItem.readableName}
            </h2>
            <Scrollbars
              className="size-full"
              style={{ height: 540, width: "100%" }}
            >
              <div className="pr-4">
                <AdditionalInfo id={selectedItem.nutrientID} />

                <h3 className="mt-4 text-base font-bold text-shuttle-gray-600">
                  {selectedItem.readableName.split(" ").slice(0, 2).join(" ")}
                </h3>

                <div className="overflow-x-auto">
                  <table className="mt-2 min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-shuttle-gray-600">
                          element
                        </th>
                        <th className="bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-shuttle-gray-600">
                          quantity
                        </th>
                        <th className="bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-shuttle-gray-600">
                          nrv
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      <tr>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-shuttle-gray-600">
                          {selectedItem.readableName}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-shuttle-gray-600">
                          {formatQuantity(selectedItem.value)} mg
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-shuttle-gray-600">
                          {selectedItem.riPercentage}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {selectedItem.reasons && (
                  <div>
                    <h3 className="mt-4 text-base font-bold text-shuttle-gray-600">
                      Waarom zit dit in jouw Smartblend?
                    </h3>
                    <ul className="list-disc pl-5 text-sm text-shuttle-gray-600">
                      {selectedItem.reasons.map(
                        (reason: string, index: number) => (
                          <li key={index}>{reason}</li>
                        )
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </Scrollbars>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default BlendTab;
