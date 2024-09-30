/* eslint-disable @typescript-eslint/no-shadow */
const useS11ProductOverview = ({
  recommendations,
  supplement,
  answersMap,
  computationData,
  profile,
  realWeightFactor,
}: any) => {
  const computeIngredientAmount = (
    baseAmount: number,
    doseMultiplier: number
  ) => {
    return baseAmount * doseMultiplier;
  };

  const computeTotalDose = (recommendedDoseFn: any) => {
    return recommendedDoseFn(answersMap, computationData, profile);
  };

  const calculateTotalAmounts = (recommendations: any[], supplement: any) => {
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
        Math.min(totalDoseCount, 1.5)
      );

      totalAmount += totalIngredientAmount;
    });

    const adjustedAmount = totalAmount * realWeightFactor;
    const calculatedAmount = adjustedAmount * 92 * 1.1;

    const vitaminC =
      supplement.baseAmounts.vitaminC * Math.min(totalDoseCount, 1.5);

    return {
      adjustedAmount: adjustedAmount.toFixed(4),
      calculatedAmount: calculatedAmount.toFixed(4),
      vitaminC: parseFloat(vitaminC.toFixed(4)),
      zincGluconate: parseFloat(
        (
          supplement.baseAmounts.zincGluconate * Math.min(totalDoseCount, 1.5)
        ).toFixed(4)
      ),
      copperBisglycinate: parseFloat(
        (
          supplement.baseAmounts.copperBisglycinate *
          Math.min(totalDoseCount, 1.5)
        ).toFixed(4)
      ),
      quercetin: parseFloat(
        (
          supplement.baseAmounts.quercetin * Math.min(totalDoseCount, 1.5)
        ).toFixed(4)
      ),
      citrusFlavonoids: parseFloat(
        (
          supplement.baseAmounts.citrusFlavonoids *
          Math.min(totalDoseCount, 1.5)
        ).toFixed(4)
      ),
      reasons,
    };
  };

  return calculateTotalAmounts(recommendations, supplement);
};

export default useS11ProductOverview;
