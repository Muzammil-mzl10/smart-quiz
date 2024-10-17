/* eslint-disable @typescript-eslint/no-shadow */
import { useCallback } from "react";

const useS32ProductOverview = ({
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
        console.log(doseMultiplier)
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

        if (
          rec.recommendationId === "R30" ||
          rec.recommendationId === "R191" ||
          rec.recommendationId === "R192"
        ) {
          totalFixDose += doseMultiplier;
        } else {
          totalDoseCount += doseMultiplier;
        }

        reasons.push(rec.reason);
      });

      let totalAmount = 0;
      Object.keys(supplement.ingredients).forEach((ingredient) => {
        const baseAmount = parseFloat(supplement.baseAmounts[ingredient]);
        const totalIngredientAmount = computeIngredientAmount(
          baseAmount,
          Math.min(totalDoseCount, 2.5)
        );

        totalAmount += totalIngredientAmount;
      });

      const adjustedAmount = (
        (totalAmount + totalFixDose / 1000) *
        realWeightFactor
      ).toFixed(4);
      const calculatedAmount = (
        (totalAmount + totalFixDose / 1000) *
        realWeightFactor *
        92 *
        1.1
      ).toFixed(4);

      return {
        adjustedAmount,
        calculatedAmount,
        folicAcid: totalFixDose / 1000 || 0,
        reasons,
      };
    },
    [computeIngredientAmount, computeTotalDose, realWeightFactor]
  );

  return calculateTotalAmounts(recommendations, supplement);
};

export default useS32ProductOverview;
