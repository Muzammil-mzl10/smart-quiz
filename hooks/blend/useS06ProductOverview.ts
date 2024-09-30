/* eslint-disable @typescript-eslint/no-shadow */
const useS06ProductOverview = ({
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

      if (!totalIngredients.CalciumCarbonate) {
        totalIngredients.CalciumCarbonate = 0;
      }
      const baseAmount = parseFloat(supplement.baseAmounts.CalciumCarbonate);
      const ingredientAmount = computeIngredientAmount(
        baseAmount,
        doseMultiplier
      );
      totalIngredients.CalciumCarbonate += ingredientAmount;

      if (rec.recommendationId !== "R194") {
        totalDoseCount += doseMultiplier;
      } else {
        totalFixDose += doseMultiplier;
      }

      reasons.push(rec.reason);
    });

    // Calculate the new CalciumCarbonate
    const newCalciumCarbonate = Math.min(
      Math.min(totalDoseCount, 2) * supplement.baseAmounts.calciumCarbonate +
        totalFixDose
    );

    // Calculate the new amounts for BoronGlycinate, MagnesiumBisglycinate, and ManganeseBisglycinate
    const boronGlycinate =
      (newCalciumCarbonate * supplement.baseAmounts.boronGlycinate) /
      supplement.baseAmounts.calciumCarbonate;
    const magnesiumBisglycinate =
      (newCalciumCarbonate * supplement.baseAmounts.magnesiumBisglycinate) /
      supplement.baseAmounts.calciumCarbonate;
    const manganeseBisglycinate =
      (newCalciumCarbonate * supplement.baseAmounts.manganeseBisglycinate) /
      supplement.baseAmounts.calciumCarbonate;

    const adjustedAmount =
      (newCalciumCarbonate +
        boronGlycinate +
        magnesiumBisglycinate +
        manganeseBisglycinate) *
      realWeightFactor;
    const calculatedAmount = adjustedAmount * 92 * 1.1;

    return {
      adjustedAmount: adjustedAmount.toFixed(4),
      calculatedAmount: calculatedAmount.toFixed(4),
      calciumCarbonate: newCalciumCarbonate.toFixed(4),
      boronGlycinate: boronGlycinate.toFixed(4),
      magnesiumBisglycinate: magnesiumBisglycinate.toFixed(4),
      manganeseBisglycinate: manganeseBisglycinate.toFixed(4),
      reasons,
    };
  };

  return calculateTotalAmounts(recommendations, supplement);
};

export default useS06ProductOverview;
