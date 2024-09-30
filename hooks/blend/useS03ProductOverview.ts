/* eslint-disable @typescript-eslint/no-shadow */
import { useCallback } from "react";

import {
  antioxidantBlendSupplementRecommendations,
  immuneSupportSupplementRecommendations,
  ironSupplementRecommendations,
  supplements,
} from "@/data/data";
import useS05ProductOverview from "@/hooks/blend/useS05ProductOverview";
import useS11ProductOverview from "@/hooks/blend/useS11ProductOverview";
import useS31ProductOverview from "@/hooks/blend/useS31ProductOverview";

const useS03ProductOverview = ({
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

  const ironRecommendations = getRecommendations(
    ironSupplementRecommendations,
    "S05"
  );

  const immuneSupportRecommendations = getRecommendations(
    immuneSupportSupplementRecommendations,
    "S11"
  );

  const antioxidantBlendRecommendations = getRecommendations(
    antioxidantBlendSupplementRecommendations,
    "S31"
  );

  const { vitaminC: vitaminC1 } = useS05ProductOverview({
    recommendations: ironRecommendations,
    supplement: supplements.S05,
    answersMap,
    computationData,
    profile,
    realWeightFactor: supplements.S05.realWeightFactor,
  });

  const { vitaminC: vitaminC2 } = useS11ProductOverview({
    recommendations: immuneSupportRecommendations,
    supplement: supplements.S11,
    answersMap,
    computationData,
    profile,
    realWeightFactor: supplements.S11.realWeightFactor,
  });

  const { vitaminC: vitaminC3 } = useS31ProductOverview({
    recommendations: antioxidantBlendRecommendations,
    supplement: supplements.S31,
    answersMap,
    computationData,
    profile,
    realWeightFactor: supplements.S31.realWeightFactor,
  });

  const otherVitaminCTotal = vitaminC1 + vitaminC2 + vitaminC3;

  const calculateTotalAmounts = useCallback(
    (recommendations: any[], supplement: any) => {
      let totalDoseCount = 0;
      let totalFixDose = 0;
      const totalIngredients: Record<string, number> = {};
      const reasons: string[] = [];

      recommendations.forEach((rec: any) => {
        const doseMultiplier = rec.recommendedDose(
          answersMap,
          computationData,
          profile
        );

        Object.keys(supplement.ingredients).forEach((ingredient) => {
          const baseAmount = parseFloat(supplement.baseAmounts[ingredient]);
          const ingredientAmount = baseAmount * doseMultiplier;

          if (!totalIngredients[ingredient]) {
            totalIngredients[ingredient] = 0;
          }
          totalIngredients[ingredient] += ingredientAmount;
        });

        if (
          rec.recommendationId !== "R51-2" &&
          rec.recommendationId !== "R186"
        ) {
          totalDoseCount += doseMultiplier;
        } else {
          totalFixDose += doseMultiplier;
        }

        reasons.push(rec.reason);
      });

      let totalAmount = 0;
      Object.keys(supplement.ingredients).forEach((ingredient) => {
        const baseAmount = parseFloat(supplement.baseAmounts[ingredient]);
        const totalIngredientAmount =
          baseAmount * Math.min(totalDoseCount, 1.5);

        totalAmount += totalIngredientAmount;
      });

      const adjustedAmount = (
        (totalAmount + totalFixDose) *
        realWeightFactor
      ).toFixed(4);
      const calculatedAmount = (
        (totalAmount + totalFixDose) *
        realWeightFactor *
        92 *
        1.1
      ).toFixed(4);

      const exceeds500mg =
        otherVitaminCTotal + parseFloat(adjustedAmount) > 500;

      return {
        adjustedAmount: exceeds500mg ? "0" : adjustedAmount,
        calculatedAmount: exceeds500mg ? "0" : calculatedAmount,
        vitaminC: exceeds500mg
          ? "0"
          : supplement.baseAmounts.vitaminC * Math.min(totalDoseCount, 1.5),
        reasons,
      };
    },
    [answersMap, computationData, profile, realWeightFactor, otherVitaminCTotal]
  );

  return calculateTotalAmounts(recommendations, supplement);
};

export default useS03ProductOverview;
