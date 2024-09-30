/* eslint-disable @typescript-eslint/no-shadow */
import { useCallback } from "react";

const useS10ProductOverview = ({
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
      const totalIngredients: Record<string, number> = {};
      const reasons: string[] = [];

      recommendations.forEach((rec: any) => {
        const doseMultiplier = computeTotalDose(rec.recommendedDose);

        Object.keys(supplement.ingredients).forEach((ingredient) => {
          const baseAmount = parseFloat(supplement.baseAmounts[ingredient]);
          const ingredientAmount = computeIngredientAmount(
            baseAmount,
            doseMultiplier
          );

          if (!totalIngredients[ingredient]) {
            totalIngredients[ingredient] = 0;
          }
          totalIngredients[ingredient] += ingredientAmount;
        });

        totalDoseCount += doseMultiplier;

        reasons.push(rec.reason);
      });

      let totalAmount = 0;
      Object.keys(supplement.ingredients).forEach((ingredient) => {
        const baseAmount = parseFloat(supplement.baseAmounts[ingredient]);
        const totalIngredientAmount = computeIngredientAmount(
          baseAmount,
          Math.min(totalDoseCount, 1)
        );

        totalAmount += totalIngredientAmount;
      });

      const adjustedAmount = (totalAmount * realWeightFactor).toFixed(4);
      const calculatedAmount = (
        totalAmount *
        realWeightFactor *
        92 *
        1.1
      ).toFixed(4);

      // Check for R178 recommendation
      const hasR178 = recommendations.some(
        (rec: any) => rec.recommendationId === "R178"
      );
      const finalAdjustedAmount = hasR178
        ? 0
        : parseFloat(adjustedAmount).toFixed(4);
      const finalCalculatedAmount = hasR178
        ? 0
        : parseFloat(calculatedAmount).toFixed(4);

      return {
        adjustedAmount: finalAdjustedAmount,
        calculatedAmount: finalCalculatedAmount,
        lCarnitine: hasR178
          ? 0
          : supplement.baseAmounts.lCarnitine * Math.min(totalDoseCount, 1),
        lArginine: hasR178
          ? 0
          : supplement.baseAmounts.lArginine * Math.min(totalDoseCount, 1),
        cholineBitartrate: hasR178
          ? 0
          : supplement.baseAmounts.cholineBitartrate *
            Math.min(totalDoseCount, 1),
        iodine: hasR178
          ? 0
          : supplement.baseAmounts.iodine * Math.min(totalDoseCount, 1),
        reasons,
      };
    },
    [computeIngredientAmount, computeTotalDose, realWeightFactor]
  );

  return calculateTotalAmounts(recommendations, supplement);
};

export default useS10ProductOverview;
