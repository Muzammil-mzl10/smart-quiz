/* eslint-disable @typescript-eslint/no-shadow */
import { useCallback } from "react";

const useS17ProductOverview = ({
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

      return {
        adjustedAmount,
        calculatedAmount,
        vitaminB8: (
          supplement.baseAmounts.vitaminB8 * Math.min(totalDoseCount, 1)
        ).toFixed(4),
        hyaluronicAcid: (
          supplement.baseAmounts.hyaluronicAcid * Math.min(totalDoseCount, 1)
        ).toFixed(4),
        nAcetylcysteine: (
          supplement.baseAmounts.nAcetylcysteine * Math.min(totalDoseCount, 1)
        ).toFixed(4),
        keratin: (
          supplement.baseAmounts.keratin * Math.min(totalDoseCount, 1)
        ).toFixed(4),
        siliconDioxide: (
          supplement.baseAmounts.siliconDioxide * Math.min(totalDoseCount, 1)
        ).toFixed(4),
        reasons,
      };
    },
    [computeIngredientAmount, computeTotalDose, realWeightFactor]
  );

  return calculateTotalAmounts(recommendations, supplement);
};

export default useS17ProductOverview;
