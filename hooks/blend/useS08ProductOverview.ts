/* eslint-disable @typescript-eslint/no-shadow */
const useS08ProductOverview = ({
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
        Math.min(totalDoseCount, 2)
      );

      totalAmount += totalIngredientAmount;
    });

    const adjustedAmount = totalAmount * realWeightFactor;
    const calculatedAmount = adjustedAmount * 92 * 1.1;

    const magnesiumMalate =
      supplement.baseAmounts.magnesiumMalate * Math.min(totalDoseCount, 2);
    const magnesiumBisglycinate =
      supplement.baseAmounts.magnesiumBisglycinate *
      Math.min(totalDoseCount, 2);
     console.log(supplement.baseAmounts.folicAcid * Math.min(totalDoseCount, 2))
    return {
      adjustedAmount: adjustedAmount.toFixed(4),
      calculatedAmount: calculatedAmount.toFixed(4),
      magnesiumMalate: magnesiumMalate.toFixed(4),
      magnesiumBisglycinate: magnesiumBisglycinate.toFixed(4),

      ironBisglycinate: (
        supplement.baseAmounts.ironBisglycinate * Math.min(totalDoseCount, 2)
      ).toFixed(4),
      cholineBitartrate: (
        supplement.baseAmounts.cholineBitartrate * Math.min(totalDoseCount, 2)
      ).toFixed(4),
      vitaminB1: (
        supplement.baseAmounts.vitaminB1 * Math.min(totalDoseCount, 2)
      ).toFixed(4),
      vitaminB2: (
        supplement.baseAmounts.vitaminB2 * Math.min(totalDoseCount, 2)
      ).toFixed(4),
      vitaminB3: (
        supplement.baseAmounts.vitaminB3 * Math.min(totalDoseCount, 2)
      ).toFixed(4),
      vitaminB5: (
        supplement.baseAmounts.vitaminB5 * Math.min(totalDoseCount, 2)
      ).toFixed(4),
      vitaminB6: (
        supplement.baseAmounts.vitaminB6 * Math.min(totalDoseCount, 2)
      ).toFixed(4),
      vitaminB8: (
        supplement.baseAmounts.vitaminB8 * Math.min(totalDoseCount, 2)
      ).toFixed(4),
      folicAcid: (
        supplement.baseAmounts.folicAcid * Math.min(totalDoseCount, 2)
      ).toFixed(4),
      vitaminB12Methylcobalamin: (
        supplement.baseAmounts.vitaminB12Methylcobalamin *
        Math.min(totalDoseCount, 2)
      ).toFixed(4),
      potassiumCitrate: (
        supplement.baseAmounts.potassiumCitrate * Math.min(totalDoseCount, 2)
      ).toFixed(4),
      reasons,
    };
  };

  return calculateTotalAmounts(recommendations, supplement);
};

export default useS08ProductOverview;
