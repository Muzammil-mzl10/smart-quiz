/* eslint-disable @typescript-eslint/no-shadow */
const useS05ProductOverview = ({
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
    let totalFixDose = 0;
    const totalIngredients: Record<string, number> = {};
    const reasons: string[] = [];

    recommendations.forEach((rec: any) => {
      const doseMultiplier = computeTotalDose(rec.recommendedDose);

      if (!totalIngredients.ironBisglycinate) {
        totalIngredients.ironBisglycinate = 0;
      }
      const baseAmount = parseFloat(supplement.baseAmounts.ironBisglycinate);
      const ingredientAmount = computeIngredientAmount(
        baseAmount,
        doseMultiplier
      );
      totalIngredients.ironBisglycinate += ingredientAmount;

      if (rec.recommendationId !== "R58" && rec.recommendationId !== "R59") {
        totalDoseCount += doseMultiplier;
      } else {
        totalFixDose += doseMultiplier;
      }

      reasons.push(rec.reason);
    });

    // Calculate the new ironBisglycinate
    const newIronBisglycinate = Math.min(
      totalDoseCount * supplement.baseAmounts.ironBisglycinate + totalFixDose,
      28
    );

    // Calculate the new amounts for vitaminC and copperBisglycinate
    const vitaminC =
      (newIronBisglycinate * supplement.baseAmounts.vitaminC) /
      supplement.baseAmounts.ironBisglycinate;
    const copperBisglycinate =
      (newIronBisglycinate * supplement.baseAmounts.copperBisglycinate) /
      supplement.baseAmounts.ironBisglycinate;

    const adjustedAmount =
      (newIronBisglycinate + vitaminC + copperBisglycinate) * realWeightFactor;
    const calculatedAmount = adjustedAmount * 92 * 1.1;

    // Check for R62 recommendation
    const hasR62 = recommendations.some(
      (rec: any) => rec.recommendationId === "R62"
    );
    const finalAdjustedAmount = hasR62 ? 0 : adjustedAmount.toFixed(4);
    const finalCalculatedAmount = hasR62 ? 0 : calculatedAmount.toFixed(4);

    return {
      adjustedAmount: finalAdjustedAmount,
      calculatedAmount: finalCalculatedAmount,
      vitaminC: hasR62 ? 0 : parseFloat(vitaminC.toFixed(4)),
      copperBisglycinate: hasR62
        ? 0
        : parseFloat(copperBisglycinate.toFixed(4)),
      ironBisglycinate: hasR62 ? 0 : parseFloat(newIronBisglycinate.toFixed(4)),
      reasons,
    };
  };

  return calculateTotalAmounts(recommendations, supplement);
};

export default useS05ProductOverview;
