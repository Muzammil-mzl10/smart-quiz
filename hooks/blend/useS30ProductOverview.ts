/* eslint-disable @typescript-eslint/no-shadow */
import { useCallback } from "react";

const useS30ProductOverview = ({
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

        if (!totalIngredients.zincMethionine) {
          totalIngredients.zincMethionine = 0;
        }
        const baseAmount = parseFloat(supplement.baseAmounts.zincMethionine);
        const ingredientAmount = computeIngredientAmount(
          baseAmount,
          doseMultiplier
        );
        totalIngredients.zincMethionine += ingredientAmount;

        if (
          rec.recommendationId !== "R67" &&
          rec.recommendationId !== "R187" &&
          rec.recommendationId !== "R188"
        ) {
          totalDoseCount += doseMultiplier;
        } else {
          totalFixDose += doseMultiplier;
        }

        reasons.push(rec.reason);
      });

      // Calculate the new zincMethionine
      const newZincMethionine = Math.min(
        Math.min(totalDoseCount, 5) * supplement.baseAmounts.zincMethionine +
          totalFixDose,
        25
      );

      // Calculate the new amounts for copperBisglycinate
      const copperBisglycinate =
        (newZincMethionine * supplement.baseAmounts.copperBisglycinate) /
        supplement.baseAmounts.zincMethionine;

      const adjustedAmount =
        (newZincMethionine + copperBisglycinate) * realWeightFactor;
      const calculatedAmount = adjustedAmount * 92 * 1.1;

      return {
        adjustedAmount: adjustedAmount.toFixed(4),
        calculatedAmount: calculatedAmount.toFixed(4),
        copperBisglycinate: copperBisglycinate.toFixed(4),
        zincMethionine: newZincMethionine.toFixed(4),
        reasons,
      };
    },
    [computeIngredientAmount, computeTotalDose, realWeightFactor]
  );

  return calculateTotalAmounts(recommendations, supplement);
};

export default useS30ProductOverview;
