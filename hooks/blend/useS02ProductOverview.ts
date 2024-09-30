/* eslint-disable @typescript-eslint/no-shadow */
import { useCallback } from "react";

const useS02ProductOverview = ({
  recommendations,
  supplement,
  answersMap,
  computationData,
  profile,
}: any) => {
  const computeIngredientAmount = useCallback(
    (ingredientFn: any, baseAmount: number, recommendedDoseFn: any) => {
      // Removed markersMap from argument list
      const dose = recommendedDoseFn(answersMap, computationData, profile);
      return ingredientFn(baseAmount, dose);
    },
    [answersMap, computationData, profile]
  );

  const calculateTotalAmounts = useCallback(
    (recommendations: any[], supplement: any) => {
      const totalIngredients: Record<string, number> = {};
      const reasons: string[] = [];

      recommendations.forEach((rec: any) => {
        Object.keys(supplement.ingredients).forEach((ingredient) => {
          const ingredientFn = supplement.ingredients[ingredient];
          const baseAmount = parseFloat(supplement.baseAmounts[ingredient]);
          const ingredientAmount = computeIngredientAmount(
            ingredientFn,
            baseAmount,
            rec.recommendedDose
          );

          if (!totalIngredients[ingredient]) {
            totalIngredients[ingredient] = 0;
          }
          totalIngredients[ingredient] += ingredientAmount;
        });

        reasons.push(rec.reason);
      });

      return {
        adjustedAmount: 0,
        calculatedAmount: 0,
        omega3: totalIngredients.omega3 || 0,
        EPA: totalIngredients.EPA || 0,
        DHA: totalIngredients.DHA || 0,
        vitaminE: totalIngredients.vitaminE || 0,
        reasons,
      };
    },
    [computeIngredientAmount]
  );

  return calculateTotalAmounts(recommendations, supplement);
};

export default useS02ProductOverview;
