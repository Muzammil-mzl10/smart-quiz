/* eslint-disable react/no-array-index-key */
/* eslint-disable react-hooks/rules-of-hooks */

"use client";

import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import AdditionalInfo from "./AdditionalInfo";
import { Check, MoveRight, X } from "lucide-react";
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
              href="#Payment"
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
            <div className="relative">
              <img
                src="/mockup-packaging.png"
                style={{ marginTop: "-117px" }}
                className=" md:w-[34rem] w-[25rem] h-[30rem] md:h-[34rem]"
              />
              <div
                style={{ justifyContent: "flex-start", display: "flex" }}
                className="z-10 w-28 truncate items-start justify-start text-xs md:text-[1rem] top-[67%] md:top-[68.5%] left-[38.5%] text-white absolute"
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
                      Je persoonlijke aanbeveling is gebaseerd op je dieet,
                      levenstijl, gezondheidsdoelen en ons unieke algoritme wat
                      gebaseerd is op duizenden wetenschappelijk onderzoeken.
                      Druk op een ingredient om meer te weten te komen over de
                      stof en waarom deze onderdeel uitmaakt van jouw
                      persoonlijke supplementformule.
                    </div>
                  </div>
                  <div className="mx-auto mt-4 w-full rounded-2xl bg-white p-1">
                    <Scrollbars
                      className="size-full"
                      style={{ height: 480, width: "100%" }}
                    >
                      <table className="size-full">
                        <thead className="sticky top-0 bg-white">
                          <tr>
                            <th className="border-b border-gray-300 px-4 py-2 text-left text-xs lg:text-sm">
                              Actief ingrediënt
                            </th>
                            <th className="border-b border-gray-300 px-4 py-2 text-left text-xs lg:text-sm">
                              Per dosering
                            </th>
                            <th className="border-b border-gray-300 px-4 py-2 text-left text-xs lg:text-sm">
                              RI%
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {tableData &&
                            tableData.map((item: any, idx: any) => (
                              <tr
                                key={idx}
                                onClick={() => openModal(item)}
                                className="cursor-pointer hover:bg-malibu-50"
                              >
                                <td className="border-b border-gray-300 px-4 py-2 text-xs lg:text-sm">
                                  {item.readableName}
                                </td>
                                <td className="w-36 border-b border-gray-300 px-4 py-2 text-xs lg:text-sm">
                                  {formatQuantity(item.value)} mg
                                </td>
                                <td className="w-28 border-b border-gray-300 px-4 py-2 text-xs lg:text-sm">
                                  {item.riPercentage}
                                </td>
                              </tr>
                            ))}
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
            <div className="text-lg">
              Stop met gokken <span className="opacity-50">welke</span>
            </div>
            <div className="w-80 text-lg opacity-50">
              standaardsupplementen te nemen; geen enkele is specifiek afgestemd
              op jouw behoeften.
            </div>
          </div>
          <div className="text-center py-5 flex flex-col justify-center items-center">
            <img src="/2.svg" className="h-12 w-12 mb-2" />
            <div className="text-lg w-80">
              Maak weloverwogen
              <br />
              gezondheidskeuzes
              <span className="text-lg w-80 ml-2 opacity-50">
                op basis van je eigen bloedwaarden.
              </span>
              {/* <span className="opacity-50">welke</span> */}
            </div>
          </div>
          <div className="text-center py-5 flex flex-col justify-center items-center">
            <img src="/1.svg" className="h-12 w-12 mb-2" />
            <div className="text-lg">
              Voorkom nare bijwerkingen{" "}
              <span className="opacity-50">door het</span>
            </div>
            <div className="text-lg w-64 opacity-50">
              over doseren van standaardsupplementen.
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center py-10">
          <div className="text-center text-5xl font-bold">
            Waarom Smartblend?
          </div>
          <div className="flex justify-center md:justify-around items-center mt-10 space-x-0 md:space-x-10">
            <img
              src="./coverimage.png"
              className="w-[30vw] hidden md:block shadow-lg shadow-gray-400 rounded-3xl"
            />
            <div className="flex space-y-10 w-[80vw] md:w-[35vw] flex-col justify-start items-start">
              <div className="flex p-2 border space-x-2 hover:scale-105 ease-in duration-500 cursor-pointer shadow-sm shadow-blue-400 rounded-lg border-blue-50 justify-center items-center">
                <img
                  src="./Checkmarkicon-smartblendblue.png"
                  className="w-10 h-10"
                />
                <div className="flex flex-col justify-start items-start">
                  <div className="font-bold">Echt Gepersonaliseerd</div>
                  <div className="font-light">
                    Het enige supplement dat 100% is aangepast aan jouw
                    behoeften. Krijg wat je nodig hebt, niet meer, niet minder.
                  </div>
                </div>
              </div>
              <div className="flex p-2 border space-x-2 hover:scale-105 ease-in duration-500 cursor-pointer shadow-sm shadow-blue-400 rounded-lg border-blue-50 justify-center items-center">
                <img
                  src="./Checkmarkicon-smartblendblue.png"
                  className="w-10 h-10"
                />
                <div className="flex flex-col justify-start items-start">
                  <div className="font-bold">Wetenschappelijk Onderbouwd</div>
                  <div className="font-light">
                    Ons algoritme is ontwikkeld op basis van de bevindingen uit
                    meer dan 1500 wetenschappelijke publicaties.
                  </div>
                </div>
              </div>
              <div className="flex p-2 border space-x-2 hover:scale-105 ease-in duration-500 cursor-pointer shadow-sm shadow-blue-400 rounded-lg border-blue-50 justify-center items-center">
                <img
                  src="./Checkmarkicon-smartblendblue.png"
                  className="w-10 h-10"
                />
                <div className="flex flex-col justify-start items-start">
                  <div className="font-bold">
                    Tot 50 Verschillende Voedingsstoffen in Jouw Formule
                  </div>
                  <div className="font-light">
                    Zeg vaarwel tegen al die verschillende potjes. Wij
                    combineren alles wat je nodig hebt in één persoonlijk
                    supplement.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full pb-10 flex justify-center items-center">
          <div className="w-[90vw] flex justify-center items-center">
            <div className="relative w-[80vw] md:w-[68vw] rounded-3xl flex max-h-screen bg-gradient-to-b from-malibu-100 to-malibu-200 p-6 shadow-lg lg:max-h-[720px]">
              <div className="flex size-full justify-center">
                <div className="flex w-full flex-col items-center justify-center overflow-y-auto lg:flex-row">
                  <div className="hidden w-full flex-col items-center justify-center lg:flex">
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
                        className="absolute w-28 truncate bottom-[53px] left-[33px] text-white"
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
                        <span>Zorgvuldig gedoseerd</span>
                      </li>
                      <li className="mb-2 flex items-center">
                        <Check className="mr-2 size-4" />
                        <span>Alleen de beste ingrediënten</span>
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
        {/* <div className="w-full flex flex-col justify-center mt-16 items-center">
          <div className="font-bold text-xl ">
            Nog niet volledig overtuigd? Maak een account aan en ontvang
            tijdelijk gratis professioneel advies!
          </div>
          <div className="flex px-8 mt-5 items-center justify-center rounded-3xl bg-gradient-to-r from-malibu-300 to-froly-400 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gradient-to-r hover:from-froly-400 hover:to-malibu-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-malibu-300">
            Maak een Account
          </div>
          <div className="mt-5 mb-44 flex flex-col space-y-5 justify-start items-start">
            <div className="flex justify-center items-center space-x-2">
              <img src="./tickMarker2.png" className="w-6 h-6" />
              <div>
                Ontvang toelichting op je supplement en persoonlijke levenstijl
                tips
              </div>
            </div>
            <div className="flex justify-center items-center space-x-2">
              <img src="./tickMarker2.png" className="w-6 h-6" />
              <div>
                Geheel vrijblijvend, op basis van de door jouw ingevulde
                vragenlijst
              </div>
            </div>
            <div className="flex justify-center items-center space-x-2">
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
          className="modal absolute h-[25vh] shadow-lg shadow-white rounded-lg w-[50vw] left-[25%] top-64 z-10 bg-blue-400 overflow-hidden"
          overlayClassName="modal-overlay"
        >
          <button
            type="button"
            onClick={closeModal}
            className="absolute right-4 top-4 flex z-10 size-6 cursor-pointer items-center justify-center rounded-full border-none bg-[#78c1f3] text-white hover:bg-[#f37783]"
          >
            <X className="size-4" />
          </button>
          <div className="py-4 pl-4">
            <h2 className="pb-8 mb-5 text-xl absolute font-bold text-black">
              {selectedItem.readableName}
            </h2>
            <Scrollbars
              className="size-full"
              style={{ height: 500, width: "100%" }}
            >
              <div className="pr-4 pt-5">
                <AdditionalInfo id={selectedItem.id} />

                <h3 className="mt-4 text-base font-bold text-black">
                  Ingredients Title
                </h3>

                <div className="overflow-x-auto rounded-lg">
                  <table className="mt-2  min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-shuttle-gray-600">
                          element
                        </th>
                        <th className="bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-shuttle-gray-600">
                          quantity
                        </th>
                        <th className="bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-shuttle-gray-600">
                          R1%
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      <tr>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-shuttle-gray-600">
                          {selectedItem.nutrientID}
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

                {selectedItem.recommendations && (
                  <div>
                    <h3 className="mt-4 text-base font-bold text-shuttle-gray-600">
                      Waarom zit dit in jouw Smartblend?
                    </h3>
                    <ul className="list-disc pl-5 text-sm text-shuttle-gray-600">
                      {selectedItem.recommendations
                        .split("\n")
                        .map((reason: string, index: number) => (
                          <li key={index}>{reason}</li>
                        ))}
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
