/* eslint-disable @typescript-eslint/no-shadow */
import { useCallback } from "react";

import {
  calciumSupplementRecommendations,
  supplements,
  vitaminBSupplementRecommendations,
} from "@/data/data";
import useS06ProductOverview from "@/hooks/blend/useS06ProductOverview";
import useS08ProductOverview from "@/hooks/blend/useS08ProductOverview";

const useS04ProductOverview = ({
  recommendations,
  supplement,
  answersMap,
  computationData,
  profile,
  realWeightFactor,
}: any) => {
  const getRecommendations = useCallback(
    (recommendations: any[], supplementId: string) => {
      return recommendations
        .filter((rec: any) => rec.supplementId === supplementId)
        .filter((rec: any) =>
          rec.condition(answersMap, computationData, profile)
        );
    },
    [answersMap, computationData, profile]
  );

  const calciumRecommendations = getRecommendations(
    calciumSupplementRecommendations,
    "S06"
  );

  const vitaminBRecommendations = getRecommendations(
    vitaminBSupplementRecommendations,
    "S08"
  );

  const { magnesiumBisglycinate: magnesiumBisglycinate1 } =
    useS06ProductOverview({
      recommendations: calciumRecommendations,
      supplement: supplements.S06,
      answersMap,
      computationData,
      profile,
      realWeightFactor: supplements.S06.realWeightFactor,
    });

  const { magnesiumMalate, magnesiumBisglycinate: magnesiumBisglycinate2 } =
    useS08ProductOverview({
      recommendations: vitaminBRecommendations,
      supplement: supplements.S08,
      answersMap,
      computationData,
      profile,
      realWeightFactor: supplements.S08.realWeightFactor,
    });

  const otherMagnesiumTotal =
    parseFloat(magnesiumBisglycinate1) +
    parseFloat(magnesiumBisglycinate2) +
    parseFloat(magnesiumMalate);

  const computeIngredientAmount = useCallback(
    (baseAmount: number, doseMultiplier: number) => {
      return baseAmount * doseMultiplier;
    },
    []
  );

  const computeTotalDose = useCallback(
    (recommendedDoseFn: any) => {
      return recommendedDoseFn(answersMap, computationData, profile);
    },
    [answersMap, computationData, profile]
  );

  const calculateTotalAmounts = useCallback(
    (recommendations: any[], supplement: any) => {
      let totalDoseCount = 0;
      let totalFixDose = 0;
      const totalIngredients: Record<string, number> = {};
      const reasons: string[] = [];

      recommendations.forEach((rec: any) => {
        const doseMultiplier = computeTotalDose(rec.recommendedDose);

        if (!totalIngredients.magnesiumBisglycinate) {
          totalIngredients.magnesiumBisglycinate = 0;
        }
        const baseAmount = parseFloat(
          supplement.baseAmounts.magnesiumBisglycinate
        );
        const ingredientAmount = computeIngredientAmount(
          baseAmount,
          doseMultiplier
        );
        totalIngredients.magnesiumBisglycinate += ingredientAmount;

        if (
          rec.recommendationId === "R51-2" ||
          rec.recommendationId === "R186"
        ) {
          totalFixDose += doseMultiplier;
        } else {
          totalDoseCount += doseMultiplier;
        }

        reasons.push(rec.reason);
      });

      const newMagnesiumBisglycinate =
        Math.min(totalDoseCount, 4) *
          supplement.baseAmounts.magnesiumBisglycinate +
        totalFixDose;

      const magnesiumTaurate =
        (newMagnesiumBisglycinate * supplement.baseAmounts.magnesiumTaurate) /
        supplement.baseAmounts.magnesiumBisglycinate;
      const magnesiumMalate =
        (newMagnesiumBisglycinate * supplement.baseAmounts.magnesiumMalate) /
        supplement.baseAmounts.magnesiumBisglycinate;
      const vitaminB6 =
        (newMagnesiumBisglycinate * supplement.baseAmounts.vitaminB6) /
        supplement.baseAmounts.magnesiumBisglycinate;
      const lTaurine =
        (newMagnesiumBisglycinate * supplement.baseAmounts.lTaurine) /
        supplement.baseAmounts.magnesiumBisglycinate;

      const adjustedAmount =
        (newMagnesiumBisglycinate +
          magnesiumTaurate +
          magnesiumMalate +
          vitaminB6 +
          lTaurine) *
        realWeightFactor;
      const calculatedAmount = adjustedAmount * 92 * 1.1;

      const exceeds200mg =
        otherMagnesiumTotal +
          newMagnesiumBisglycinate +
          magnesiumMalate +
          magnesiumTaurate >
        200;

      return {
        adjustedAmount: exceeds200mg ? "0" : adjustedAmount.toFixed(4),
        calculatedAmount: exceeds200mg ? "0" : calculatedAmount.toFixed(4),
        magnesiumBisglycinate: newMagnesiumBisglycinate.toFixed(4),
        magnesiumTaurate: magnesiumTaurate.toFixed(4),
        magnesiumMalate: magnesiumMalate.toFixed(4),
        vitaminB6: vitaminB6.toFixed(4),
        lTaurine: lTaurine.toFixed(4),
        reasons,
      };
    },
    [
      computeIngredientAmount,
      computeTotalDose,
      otherMagnesiumTotal,
      realWeightFactor,
    ]
  );

  return calculateTotalAmounts(recommendations, supplement);
};

export default useS04ProductOverview;
