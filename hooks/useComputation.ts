import { useQuery } from "@tanstack/react-query";

// Fetch the data based on answersData and perform calculations
const fetchComputationData = async (answersData: any) => {
  // Ensure answersData is an array or valid data structure
  if (!Array.isArray(answersData)) {
    throw new Error("Invalid answers data");
  }

  const { answers } = {
    answers: answersData,
  };

  const computeValues = () => {
    const dateOfBirth = new Date(
      answers.find((a: any) => a.questionId === "dateOfBirth").answer
    );
    console.log(dateOfBirth)
    const weight = parseFloat(
      answers
        .find((a: any) => a.questionId === "weight")
        .answer.replace(" kg", "")
    );
    const height = parseFloat(
      answers
        .find((a: any) => a.questionId === "height")
        .answer.replace(" cm", "")
    );
    const age = new Date().getFullYear() - dateOfBirth.getFullYear();

    const activityLevel = answers.find(
      (a: any) => a.questionId === "QX1"
    ).answer;
    const exerciseFrequency = answers.find(
      (a: any) => a.questionId === "Q11"
    ).answer;

    // Lookup the activity level and exercise frequency
    const QX1 =
      [
        "Inactief (voornamelijk zittend (kantoor) werk en weinig fysieke beweging)",
        "Licht actief (regelmatig lichte activiteiten zoals wandelen of huishoudelijk werk)",
        "Actief (Veel in beweging door hobbies, reizen of werk)",
        "Zeer actief (constant in beweging, bijvoorbeeld door een fysiek beroep)",
      ].indexOf(activityLevel) + 1;

    const Q11 =
      ["Zelden", "2-4 keer per week", "5+ keer per week"].indexOf(
        exerciseFrequency
      ) + 1;

    // Perform calculations
    const C01 = weight / (height / 100) ** 2; // BMI Index
    const C02 = 10 * weight + 6.25 * height - 5 * age + 5; // BMR - Men
    const C03 = 10 * weight + 6.25 * height - 5 * age - 161; // BMR - Women
    const C04 = 1.2 + 0.105 * (QX1 + Q11 - 2); // Activity Level
    const C05 = C02 * C04; // Total Energy Expenditure - Men
    const C06 = C03 * C04; // Total Energy Expenditure - Women
    const C07 = 0.25; // Max Increase
    const C08 = 4000; // MAX TEE
    const C09 = 2000; // Baseline TEE
    const C10 = 1.0 + (C07 * (C05 - C09)) / (C08 - C09); // Micronutrient Factor - Men
    const C11 = 1.0 + (C07 * (C06 - C09)) / (C08 - C09); // Micronutrient Factor - Women

    return { C01, C02, C03, C04, C05, C06, C10, C11 };
  };

  // Call computeValues and get the results
  const { C01, C02, C03, C04, C05, C06, C10, C11 } = computeValues();

  // Return the answers and computations
  return {
    answers: answersData,
    computations: { C01, C02, C03, C04, C05, C06, C10, C11 },
  };
};

// The useComputation hook using react-query
const useComputation = (answersData: any) => {
  return useQuery({
    queryKey: ["computation", answersData], // Track the query by the data
    queryFn: () => fetchComputationData(answersData), // Function to fetch data
    enabled: !!answersData, // Enable query only if answersData is available
  });
};

export default useComputation;
