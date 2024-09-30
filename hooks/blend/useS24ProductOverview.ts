/* eslint-disable @typescript-eslint/no-shadow */
import { useCallback } from "react";

const useS24ProductOverview = ({
  recommendations,
  supplement,
  answersMap,
  computationData,
  profile,
  realWeightFactor,
}: any) => {
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

        if (!totalIngredients.vitaminB12Methylcobalamin) {
          totalIngredients.vitaminB12Methylcobalamin = 0;
        }
        const baseAmount = parseFloat(
          supplement.baseAmounts.vitaminB12Methylcobalamin
        );
        const ingredientAmount = computeIngredientAmount(
          baseAmount,
          doseMultiplier
        );
        totalIngredients.vitaminB12Methylcobalamin += ingredientAmount;

        if (
          rec.recommendationId === "R71" ||
          rec.recommendationId === "R72" ||
          rec.recommendationId === "R189" ||
          rec.recommendationId === "R190"
        ) {
          totalFixDose += doseMultiplier;
        } else {
          totalDoseCount += doseMultiplier;
        }

        reasons.push(rec.reason);
      });

      // Calculate the new vitaminB12Methylcobalamin
      const newVitaminB12Methylcobalamin =
        Math.min(totalDoseCount, 20) *
          supplement.baseAmounts.vitaminB12Methylcobalamin +
        totalFixDose / 1000;

      // Calculate the new amounts for vitaminB12Adenosylcobalamin
      const vitaminB12Adenosylcobalamin =
        (newVitaminB12Methylcobalamin *
          supplement.baseAmounts.vitaminB12Adenosylcobalamin) /
        supplement.baseAmounts.vitaminB12Methylcobalamin;

      const adjustedAmount = Math.min(
        (newVitaminB12Methylcobalamin + vitaminB12Adenosylcobalamin) *
          realWeightFactor,
        2
      );
      const calculatedAmount = adjustedAmount * 92 * 1.1;

      return {
        adjustedAmount: parseFloat(adjustedAmount.toFixed(4)),
        calculatedAmount: calculatedAmount.toFixed(4),
        vitaminB12Adenosylcobalamin: vitaminB12Adenosylcobalamin.toFixed(4),
        vitaminB12Methylcobalamin: newVitaminB12Methylcobalamin.toFixed(4),
        reasons,
      };
    },
    [computeIngredientAmount, computeTotalDose, realWeightFactor]
  );

  return calculateTotalAmounts(recommendations, supplement);
};

export default useS24ProductOverview;
