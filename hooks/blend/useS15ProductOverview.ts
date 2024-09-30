/* eslint-disable @typescript-eslint/no-shadow */
import { useCallback } from "react";

const useS15ProductOverview = ({
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
        folate: (
          supplement.baseAmounts.folate * Math.min(totalDoseCount, 1)
        ).toFixed(4),
        cholineBitartrate: (
          supplement.baseAmounts.cholineBitartrate * Math.min(totalDoseCount, 1)
        ).toFixed(4),
        iodine: (
          supplement.baseAmounts.iodine * Math.min(totalDoseCount, 1)
        ).toFixed(4),
        iron: (
          supplement.baseAmounts.iron * Math.min(totalDoseCount, 1)
        ).toFixed(4),
        calcium: (
          supplement.baseAmounts.calcium * Math.min(totalDoseCount, 1)
        ).toFixed(4),
        zinc: (
          supplement.baseAmounts.zinc * Math.min(totalDoseCount, 1)
        ).toFixed(4),
        copper: (
          supplement.baseAmounts.copper * Math.min(totalDoseCount, 1)
        ).toFixed(4),
        vitaminB1: (
          supplement.baseAmounts.vitaminB1 * Math.min(totalDoseCount, 1)
        ).toFixed(4),
        vitaminB2: (
          supplement.baseAmounts.vitaminB2 * Math.min(totalDoseCount, 1)
        ).toFixed(4),
        vitaminB3: (
          supplement.baseAmounts.vitaminB3 * Math.min(totalDoseCount, 1)
        ).toFixed(4),
        vitaminB5: (
          supplement.baseAmounts.vitaminB5 * Math.min(totalDoseCount, 1)
        ).toFixed(4),
        vitaminB6: (
          supplement.baseAmounts.vitaminB6 * Math.min(totalDoseCount, 1)
        ).toFixed(4),
        vitaminB8: (
          supplement.baseAmounts.vitaminB8 * Math.min(totalDoseCount, 1)
        ).toFixed(4),
        vitaminB12Methylcobalamin: (
          supplement.baseAmounts.vitaminB12Methylcobalamin *
          Math.min(totalDoseCount, 1)
        ).toFixed(4),
        reasons,
      };
    },
    [computeIngredientAmount, computeTotalDose, realWeightFactor]
  );

  return calculateTotalAmounts(recommendations, supplement);
};

export default useS15ProductOverview;
