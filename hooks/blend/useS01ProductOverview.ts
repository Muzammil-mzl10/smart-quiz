/* eslint-disable @typescript-eslint/no-shadow */
import { useCallback } from "react";

const useS01ProductOverview = ({
  recommendations,
  supplement,
  answersMap,
  computationData,
  profile,
  realWeightFactor,
}: any) => {
  const computeIngredientAmount = useCallback(
    (ingredientFn: any, baseAmount: number, recommendedDoseFn: any) => {
      // Removed markersMap from argument list
      const dose = recommendedDoseFn(answersMap, computationData, profile);
      return ingredientFn(baseAmount, dose);
    },
    [answersMap, computationData, profile]
  );

  const computeTotalDose = useCallback(
    (recommendedDoseFn: any) => {
      // Removed markersMap from argument list
      return recommendedDoseFn(answersMap, computationData, profile);
    },
    [answersMap, computationData, profile]
  );

  const calculateAmounts = useCallback(
    (supplement: any, totalDoseCount: number) => {
      const totalBaseAmount = Object.keys(supplement.baseAmounts).reduce(
        (total, ingredient, index) => {
          const baseAmount = parseFloat(supplement.baseAmounts[ingredient]);
          const totalAmount = baseAmount + totalDoseCount;

          if (index === 0) {
            return total + Math.min(totalAmount, 75);
          }
          return total + totalAmount;
        },
        0
      );
      const adjustedAmount = (totalBaseAmount / 1000) * realWeightFactor;
      const calculatedAmount = (totalBaseAmount * 92 * 1.1) / 1000;

      return {
        adjustedAmount: adjustedAmount.toFixed(4),
        calculatedAmount: calculatedAmount.toFixed(4),
      };
    },
    [realWeightFactor]
  );

  const calculateTotalAmounts = useCallback(
    (recommendations: any[], supplement: any) => {
      let totalDoseCount = 0;
      const totalIngredients: Record<string, number> = {};
      const reasons: string[] = [];

      recommendations.forEach((rec: any) => {
        const totalDose = computeTotalDose(rec.recommendedDose);
        totalDoseCount += parseFloat(totalDose);
        reasons.push(rec.reason);
      });

      Object.keys(supplement.ingredients).forEach((ingredient, index) => {
        const baseAmount = parseFloat(supplement.baseAmounts[ingredient]);

        if (!totalIngredients[ingredient]) {
          totalIngredients[ingredient] = 0;
        }

        if (index === 0) {
          totalIngredients[ingredient] = Math.min(
            baseAmount + totalDoseCount,
            75
          );
        } else {
          totalIngredients[ingredient] += baseAmount + totalDoseCount;
        }
      });

      const { adjustedAmount, calculatedAmount } = calculateAmounts(
        supplement,
        totalDoseCount
      );

      // Check for R185 recommendation
      const hasR185 = recommendations.some(
        (rec: any) => rec.recommendationId === "R185"
      );
      const finalAdjustedAmount = hasR185
        ? 0
        : parseFloat(adjustedAmount).toFixed(4);
      const finalCalculatedAmount = hasR185
        ? 0
        : parseFloat(calculatedAmount).toFixed(4);

      return {
        adjustedAmount: finalAdjustedAmount,
        calculatedAmount: finalCalculatedAmount,
        vitaminD: hasR185 ? 0 : totalIngredients.vitaminD,
        vitaminK2: hasR185 ? 0 : totalIngredients.vitaminK2,
        reasons,
      };
    },
    [computeTotalDose, computeIngredientAmount, calculateAmounts]
  );

  return calculateTotalAmounts(recommendations, supplement);
};

export default useS01ProductOverview;
