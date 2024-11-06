/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */

"use client";

import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

import Logo from "@/public/smartblend-logo.png";
import { Switch } from "@headlessui/react";
import Cookies from "js-cookie";
import { Blend, MessageCircleQuestion } from "lucide-react";
import { useEffect, useState } from "react";
import DatePicker from "react-date-picker";
import { Controller, useForm } from "react-hook-form";
import { Direction, getTrackBackground, Range } from "react-range";
import { toast } from "react-toastify";

import { cn } from "../component/cn";

import { questions } from "../component/questionaire";
import UniqueSmartBlend from "../component/UniqueSmartblend";
import useComputation from "@/hooks/useComputation";
import BlendTab from "@/component/BlendTableItems";

const LifestyleQuestionnaire = () => {
  const [quizResults, setQuizResults] = useState(true);
  const [startQuiz, setStartQuiz] = useState(false);
  const [introSection, setIntroSection] = useState(true);
  const [processedAnswers, setProcessedAnswers] = useState<any>(null); // Use this to store processed data
  const { register, handleSubmit, control, watch, setValue, getValues, reset } =
    useForm({
      defaultValues: {
        name: "", // Added the name field here
        gender: null,
        dateOfBirth: null,
        weight: "",
        height: "",
        heightFeet: "",
        heightInches: "",
        email: "",
        Q07: null,
        Q08: null,
        Q09: null,
        Q10: null,
        QX1: null,
        Q11: null,
        Q12: [],
        Q13: [],
        QX2: null,
        Q14: null,
        Q15: null,
        Q16: null,
        Q17: null,
        Q18: [],
        Q19: null,
        Q20: null,
        Q21: [],
        Q22: null,
        Q23: [],
        Q24: null,
        Q25: null,
        Q26: null,
        Q27: null,
        Q28: null,
        Q29: null,
        Q30: null,
        Q31: [],
        Q32: null,
        QX3: null,
        Q33: null,
        Q34: [1],
        Q35: [1],
        Q36: [1],
        Q37: null,
        Q38: null,
        Q39: null,
        Q40: [1],
        Q41: null,
        Q42: null,
        Q43: null,
        Q44: null,
        Q45: null,
        Q46: [],
        Q47: [],
        Q48: [],
        Q49: null,
        Q50: null,
        Q51: null,
        Q52: null,
        Q53: [],
        Q54: [],
        Q55: [],
        Q56: "",
        Q57: "",
        Q58: "",
      },
    });

  const selectedQ42 = watch("Q42");
  const selectedQ49 = watch("Q49");
  const selectedGender = watch("gender");
  const selectedSupplements = watch("Q31") || [];
  const [currentStep, setCurrentStep] = useState(0);
  const [weightUnit, setWeightUnit] = useState(false); // false for kg, true for lbs
  const [heightUnit, setHeightUnit] = useState(false); // false for cm, true for ft/in
  const [rangeValues, setRangeValues] = useState<any>({
    Q34: [1],
    Q35: [1],
    Q36: [1],
    Q40: [1],
  });
  const [formData, setFormData] = useState<any>(getValues());

  useEffect(() => {
    const values = getValues();
    setFormData(values);
  }, [currentStep, getValues, selectedQ49]);

  useEffect(() => {
    reset(formData);
  }, [formData, reset]);

  const renderQuestions = () => {
    let allQuestions: any = [...questions];

    if (selectedGender !== "Vrouw") {
      allQuestions = allQuestions.filter(
        (question: any) =>
          question.id !== "Q45" &&
          question.id !== "Q49" &&
          question.id !== "Q50" &&
          question.id !== "Q51" &&
          question.id !== "Q52"
      );
    }

    if (selectedQ49 === "Ja") {
      allQuestions = allQuestions.filter(
        (question: any) => question.id !== "Q50"
      );
    }

    if (selectedQ42 === "Nee") {
      allQuestions = allQuestions.filter(
        (question: any) =>
          question.id !== "Q53" &&
          question.id !== "Q54" &&
          question.id !== "Q55"
      );
    }

    return allQuestions;
  };

  const validateCurrentStep = () => {
    const allQuestions = renderQuestions();
    const currentQuestion = allQuestions[currentStep - 5]; // Adjusted for name step

    if (currentStep === 0) {
      return !!watch("name"); // Validating name
    }
    if (currentStep === 1) {
      return !!watch("gender");
    }
    if (currentStep === 2) {
      return !!watch("dateOfBirth");
    }
    if (currentStep === 3) {
      return !!watch("weight");
    }
    if (currentStep === 4) {
      if (heightUnit) {
        return !!watch("heightFeet") && !!watch("heightInches");
      }
      return !!watch("height");
    }
    if (currentQuestion) {
      if (currentQuestion.type === "single-select") {
        return !!watch(currentQuestion.id);
      }
      if (currentQuestion.type === "multi-select") {
        return watch(currentQuestion.id).length > 0;
      }
      if (currentQuestion.type === "range") {
        return rangeValues[currentQuestion.id]?.length > 0;
      }
      if (currentQuestion.type === "textarea") {
        return !!watch(currentQuestion.id);
      }
    }
    return false;
  };

  const {
    data: computationData,
    isLoading,
    error,
  } = useComputation(processedAnswers);
  console.log(processedAnswers);
  console.log(computationData);

  const onSubmit = async (data: any) => {
    try {
      const updatedData = { ...data };

      // Process form data
      if (weightUnit) {
        updatedData.weight = `${(data.weight / 2.20462).toFixed(2)} kg`;
      } else {
        updatedData.weight = `${data.weight} kg`;
      }

      if (heightUnit) {
        const totalInches =
          parseInt(data.heightFeet, 10) * 12 + parseInt(data.heightInches, 10);
        updatedData.height = `${(totalInches * 2.54).toFixed(2)} cm`;
      } else {
        updatedData.height = `${data.height} cm`;
      }

      // Prepare formatted data
      const formattedData = {
        name: getValues().name,
        quizEmail: updatedData.email,
        answers: Object.keys(updatedData)
          .filter((key) => key !== "name" && key !== "email")
          .map((key) => ({
            questionId: key,
            answer: updatedData[key],
          })),
      };

      // Submit the quiz to the server
      const token = Cookies.get("authToken"); // Get the token from cookies
      const headers = {
        "Content-Type": "application/json",
      } as any;

      // Only add the Authorization header if the token is defined
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/quizes`,
        {
          method: "POST",
          headers: headers,
          body: JSON.stringify(formattedData),
        }
      );
      console.log("response: ", res);
      if (res.ok) {
        // If submission is successful, save the form data to state and trigger the computation
        setProcessedAnswers(formattedData.answers);
        setQuizResults(false);
        toast.success("Submission successful!");
        console.log("success");
      } else {
        const errorData = await res.json();
        console.error("Submission error:", errorData);
        toast.error("Submission failed! Please try again.");
        console.log("failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Submission failed! Please try again.");
    }
  };

  // Handle the computation results once available
  useEffect(() => {
    if (computationData) {
      console.log("Computation Data:", computationData);
    }
  }, [computationData]);

  const goToNextStep = () => {
    const allQuestions = renderQuestions();
    if (currentStep < allQuestions.length + 4) {
      setFormData(getValues());
      setCurrentStep((prev) => prev + 1);
    }
  };

  const goToPrevStep = () => {
    setFormData(getValues());
    setCurrentStep((prev) => prev - 1);
  };

  const handleSingleSelect = (questionId: any, value: any) => {
    setValue(questionId, value);
    goToNextStep();
  };

  // const renderDependentQuestions = () => {
  //   return selectedSupplements.map((supplement: any) => {
  //     const question = dependentQuestions[supplement];
  //     if (!question) return null;
  //     return (
  //       <div key={question.id} className="space-y-4">
  //         <label className="block text-sm font-medium text-shuttle-gray-700">
  //           {question.question}
  //         </label>
  //         {question.type === "numeric" && (
  //           <input
  //             type="number"
  //             step="1"
  //             {...register(question.id)}
  //             className="block w-full rounded-md border-shuttle-gray-300 shadow-sm focus:border-malibu-500 focus:ring-malibu-500 sm:text-sm"
  //             placeholder={`Hoeveelheid in ${question.unit}`}
  //           />
  //         )}
  //         {question.type === "textarea" && (
  //           <textarea
  //             {...register(question.id)}
  //             className="block w-full rounded-md border-shuttle-gray-300 shadow-sm focus:border-malibu-500 focus:ring-malibu-500 sm:text-sm"
  //             placeholder="Laat het ons weten"
  //           />
  //         )}
  //       </div>
  //     );
  //   });
  // };

  const renderRangeQuestion = (question: any) => {
    return (
      <div className="flex w-full justify-center space-y-4">
        <div className="mt-8 flex max-w-sm items-center px-4">
          <div className="relative flex flex-col items-center">
            <Range
              values={rangeValues[question.id] || [1]}
              step={1}
              min={1}
              max={4}
              direction={Direction.Up}
              onChange={(values: any) => {
                setRangeValues((prev: any) => ({
                  ...prev,
                  [question.id]: values,
                }));
                setValue(question.id, values[0]);
              }}
              renderTrack={({ props, children }: any) => (
                <div
                  onMouseDown={props.onMouseDown}
                  onTouchStart={props.onTouchStart}
                  style={{
                    ...props.style,
                    flexGrow: 1,
                    width: "36px",
                    display: "flex",
                    height: "200px",
                  }}
                >
                  <div
                    ref={props.ref}
                    style={{
                      width: "8px",
                      height: "100%",
                      borderRadius: "8px",
                      background: getTrackBackground({
                        values: rangeValues[question.id] || [1],
                        colors: ["#f37783", "#ccc"],
                        min: 1,
                        max: 4,
                        direction: Direction.Up,
                      }),
                      alignSelf: "center",
                    }}
                  >
                    {children}
                  </div>
                </div>
              )}
              renderThumb={({ props, children }: any) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "24px",
                    width: "24px",
                    borderRadius: "12px",
                    backgroundColor: "#FFF",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0px 2px 6px #AAA",
                  }}
                >
                  {children}
                </div>
              )}
            />
          </div>
          <div className="ml-4 flex h-[200px] flex-col justify-between text-xs">
            {question.options
              .slice()
              .reverse()
              .map((option: any, index: any) => (
                <span key={index}>{option}</span>
              ))}
          </div>
        </div>
      </div>
    );
  };

  const renderQuestion = (question: any) => {
    if (question.type === "single-select") {
      return question.options.map((option: any, index: any) => (
        <label
          key={index}
          htmlFor={`${question.id}-${index}`}
          className="flex cursor-pointer items-center gap-2 rounded-lg border bg-white p-4 hover:bg-froly-50"
        >
          <input
            id={`${question.id}-${index}`}
            type="radio"
            value={option}
            {...register(question.id)}
            onChange={() => handleSingleSelect(question.id, option)}
            className="size-4 border-shuttle-gray-300 text-malibu-300 focus:ring-malibu-300"
          />
          <span className="text-sm font-medium text-shuttle-gray-900">
            {option}
          </span>
        </label>
      ));
    }

    if (question.type === "multi-select") {
      return question.options.map((option: any, index: any) => (
        <label
          key={index}
          htmlFor={`${question.id}-${index}`}
          className="flex cursor-pointer items-center gap-2 rounded-lg border bg-white p-4 hover:bg-froly-50"
        >
          <input
            id={`${question.id}-${index}`}
            type="checkbox"
            value={option}
            {...register(question.id)}
            className="size-4 rounded border-shuttle-gray-300 text-malibu-300 focus:ring-malibu-300"
          />
          <span className="text-sm font-medium text-shuttle-gray-900">
            {option}
          </span>
        </label>
      ));
    }

    if (question.type === "range") {
      return <div className="col-span-2">{renderRangeQuestion(question)}</div>;
    }

    if (question.type === "textarea") {
      return (
        <div className="col-span-2">
          <textarea
            {...register(question.id)}
            rows={5}
            className="block w-full rounded-md border-shuttle-gray-300 shadow-sm focus:border-malibu-300 focus:ring-malibu-300 sm:text-sm"
            placeholder="Laat het ons weten"
          />
        </div>
      );
    }

    return null;
  };

  const renderStep = () => {
    const allQuestions = renderQuestions();

    switch (currentStep) {
      case 0:
        return (
          <div className="flex min-h-96 flex-col space-y-4">
            <label className="mt-12 block text-center text-xl font-medium text-shuttle-gray-600">
              Wat is je naam?
            </label>
            <input
              {...register("name")} // Name input field
              type="text"
              placeholder="Vul je naam in"
              className="mx-auto block w-full max-w-52 rounded-3xl border-0 px-4 py-3 shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-malibu-300 sm:text-sm sm:leading-6"
            />

            <div className="mt-auto flex grow flex-col items-center justify-end text-shuttle-gray-600">
              <div className="flex items-center justify-items-center gap-2 pt-8 text-sm font-semibold">
                <MessageCircleQuestion /> Waarom we dit vragen?
              </div>
              <p className="mx-auto mt-2 max-w-xl px-3 text-center text-sm">
                We komen graag je naam te weten om zo de test en uitslag te
                personaliseren.
              </p>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="flex min-h-96 flex-col space-y-4">
            <label className="mt-12 block text-center text-xl font-medium text-shuttle-gray-600">
              Wat is je biologische geslacht?
            </label>
            <div className="mt-2 flex items-center justify-center space-x-4">
              <label
                className={`flex cursor-pointer flex-col items-center ${
                  selectedGender === "Man"
                    ? "rounded-lg border-4 border-malibu-300"
                    : "border-4 border-transparent"
                }`}
              >
                <input
                  type="radio"
                  value="Man"
                  {...register("gender")}
                  className="hidden"
                />
                <img
                  src="/assets/images/man.webp"
                  alt="Man"
                  className="size-32 rounded-md border-2 border-gray-300"
                />
                <span className="mt-2 text-sm">Man</span>
              </label>
              <label
                className={`flex cursor-pointer flex-col items-center ${
                  selectedGender === "Vrouw"
                    ? "rounded-lg border-4 border-froly-400"
                    : "border-4 border-transparent"
                }`}
              >
                <input
                  type="radio"
                  value="Vrouw"
                  {...register("gender")}
                  className="hidden"
                />
                <img
                  src="/assets/images/vrouw.webp"
                  alt="Vrouw"
                  className="size-32 rounded-md border-2 border-gray-300"
                />
                <span className="mt-2 text-sm">Vrouw</span>
              </label>
            </div>

            <div className="mt-auto flex grow flex-col items-center justify-end text-shuttle-gray-600">
              <div className="flex items-center justify-items-center gap-2 pt-8 text-sm font-semibold">
                <MessageCircleQuestion /> Waarom we dit vragen?
              </div>
              <p className="mx-auto mt-2 max-w-xl px-3 text-center text-sm">
                Mannen en vrouwen hebben biologisch gezien verschillende
                vitamines en mineralen nodig.
              </p>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex min-h-96 flex-col space-y-4">
            <label className="mt-12 block text-center text-xl font-medium text-shuttle-gray-600">
              Hoe oud ben je?
            </label>
            <div className="mt-2 flex justify-center">
              <div className="relative inline-flex justify-center">
                <Controller
                  control={control}
                  name="dateOfBirth"
                  render={({ field }: any) => (
                    <DatePicker
                      value={field.value}
                      onChange={(date: any) => field.onChange(date)}
                      className="block w-full rounded-3xl border-0 px-4 py-3 shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-malibu-300 sm:text-sm sm:leading-6"
                      format="dd/MM/yyyy"
                      monthPlaceholder="MM"
                      dayPlaceholder="DD"
                      yearPlaceholder="YYYY"
                    />
                  )}
                />
              </div>
            </div>

            <div className="mt-auto flex grow flex-col items-center justify-end text-shuttle-gray-600">
              <div className="flex items-center justify-items-center gap-2 pt-8 text-sm font-semibold">
                <MessageCircleQuestion /> Waarom we dit vragen?
              </div>
              <p className="mx-auto mt-2 max-w-xl px-3 text-center text-sm">
                Het is belangrijk om te weten in welke levensfase jij je
                bevindt.
              </p>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex min-h-96 flex-col space-y-4">
            <label className="mt-12 block text-center text-xl font-medium text-shuttle-gray-600">
              Wat is je gewicht? ({weightUnit ? "lbs" : "kg"})
            </label>
            <input
              {...register("weight")}
              type="number"
              placeholder={weightUnit ? "Pounds" : "Kilogram"}
              className="mx-auto block w-full max-w-52 rounded-3xl border-0 px-4 py-3 shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-malibu-300 sm:text-sm sm:leading-6"
            />
            <div className="mt-2 flex justify-center">
              <Switch
                checked={weightUnit}
                onChange={setWeightUnit}
                className={cn(
                  weightUnit ? "bg-malibu-300" : "bg-malibu-300",
                  "relative inline-flex h-8 w-[6.75rem] flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-malibu-300 focus:ring-offset-2"
                )}
              >
                <span className="sr-only">Toggle Weight Unit</span>
                <span className="absolute inset-y-0 left-0 flex w-full items-center justify-between px-2 text-xs font-medium text-white">
                  <span className="inline-block w-full text-center">kg</span>
                  <span className="inline-block w-full text-center">lbs</span>
                </span>
                <span
                  className={cn(
                    weightUnit ? "translate-x-14" : "translate-x-0",
                    "pointer-events-none relative inline-block h-7 w-12 transform bg-white shadow ring-0 transition duration-200 ease-in-out rounded-full"
                  )}
                />
              </Switch>
            </div>

            <div className="mt-auto flex grow flex-col items-center justify-end text-shuttle-gray-600">
              <div className="flex items-center justify-items-center gap-2 pt-8 text-sm font-semibold">
                <MessageCircleQuestion /> Waarom we dit vragen?
              </div>
              <p className="mx-auto mt-2 max-w-xl px-3 text-center text-sm">
                Je gewicht, in combinatie met je lengte, wordt gebruikt om je
                BMI te berekenen en je voedingsbehoeften te bepalen.
              </p>
            </div>
          </div>
        );
      case allQuestions.length + 5 - 1:
        return (
          <div className="flex min-h-96 flex-col space-y-4">
            <label className="mt-12 block text-center text-xl font-medium text-shuttle-gray-600">
              Wat is je e-mailadres?
            </label>
            <input
              {...register("email")} // Registering the email field
              type="email" // Email input type
              placeholder="Vul je e-mailadres in" // Placeholder for the email
              className="mx-auto block w-full max-w-64 rounded-3xl border-0 px-4 py-3 shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-malibu-300 sm:text-sm sm:leading-6"
              autoComplete="off" // Disabling autofill
            />

            <div className="mt-auto flex grow flex-col items-center justify-end text-shuttle-gray-600">
              <div className="flex items-center justify-items-center gap-2 pt-8 text-sm font-semibold">
                <MessageCircleQuestion /> Waarom we dit vragen?
              </div>
              <p className="mx-auto mt-2 max-w-xl px-3 text-center text-sm">
                We gebruiken je email om je testuitslag op te slaan voor later.
              </p>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="flex min-h-96 flex-col space-y-4">
            <label className="mt-12 block text-center text-xl font-medium text-shuttle-gray-600">
              Wat is je lengte? ({heightUnit ? "ft/in" : "cm"})
            </label>
            {heightUnit ? (
              <div className="mt-2 space-y-4">
                <div className="flex items-center justify-center space-x-4">
                  <input
                    {...register("heightFeet")}
                    type="number"
                    placeholder="Feet"
                    className="block w-1/2 max-w-52 rounded-3xl border-0 px-4 py-3 shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-malibu-300 sm:text-sm sm:leading-6"
                  />
                  <input
                    {...register("heightInches")}
                    type="number"
                    placeholder="Inches"
                    className="block w-1/2 max-w-52 rounded-3xl border-0 px-4 py-3 shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-malibu-300 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="mt-2 flex justify-center">
                  <Switch
                    checked={heightUnit}
                    onChange={setHeightUnit}
                    className={cn(
                      heightUnit ? "bg-malibu-300" : "bg-malibu-300",
                      "relative inline-flex h-8 w-[6.75rem] flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-malibu-300 focus:ring-offset-2"
                    )}
                  >
                    <span className="sr-only">Toggle Height Unit</span>
                    <span className="absolute inset-y-0 left-0 flex w-full items-center justify-between px-2 text-xs font-medium text-white">
                      <span className="inline-block w-full text-center">
                        cm
                      </span>
                      <span className="inline-block w-full text-center">
                        ft/in
                      </span>
                    </span>
                    <span
                      className={cn(
                        heightUnit ? "translate-x-14" : "translate-x-0",
                        "pointer-events-none relative inline-block h-7 w-12 transform bg-white shadow ring-0 transition duration-200 ease-in-out rounded-full"
                      )}
                    />
                  </Switch>
                </div>
              </div>
            ) : (
              <div className="mt-2 space-y-4">
                <input
                  {...register("height")}
                  type="number"
                  placeholder="Centimeter"
                  className="mx-auto block w-full max-w-52 rounded-3xl border-0 px-4 py-3 shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-malibu-300 sm:text-sm sm:leading-6"
                />
                <div className="mt-2 flex justify-center">
                  <Switch
                    checked={heightUnit}
                    onChange={setHeightUnit}
                    className={cn(
                      heightUnit ? "bg-malibu-300" : "bg-malibu-300",
                      "relative inline-flex h-8 w-[6.75rem] flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-malibu-300 focus:ring-offset-2"
                    )}
                  >
                    <span className="sr-only">Toggle Height Unit</span>
                    <span className="absolute inset-y-0 left-0 flex w-full items-center justify-between px-2 text-xs font-medium text-white">
                      <span className="inline-block w-full text-center">
                        cm
                      </span>
                      <span className="inline-block w-full text-center">
                        ft/in
                      </span>
                    </span>
                    <span
                      className={cn(
                        heightUnit ? "translate-x-14" : "translate-x-0",
                        "pointer-events-none relative inline-block h-7 w-12 transform bg-white shadow ring-0 transition duration-200 ease-in-out rounded-full"
                      )}
                    />
                  </Switch>
                </div>
              </div>
            )}

            <div className="mt-auto flex grow flex-col items-center justify-end text-shuttle-gray-600">
              <div className="flex items-center justify-items-center gap-2 pt-8 text-sm font-semibold">
                <MessageCircleQuestion /> Waarom we dit vragen?
              </div>
              <p className="mx-auto mt-2 max-w-xl px-3 text-center text-sm">
                Je lengte helpt ons je BMI te berekenen, wat belangrijk is om je
                voedingsbehoeften te bepalen.
              </p>
            </div>
          </div>
        );
      default:
        return (
          <div className="flex min-h-96 flex-col space-y-4">
            <label className="mt-12 block text-center text-xl font-medium text-shuttle-gray-600">
              {allQuestions[currentStep - 5]?.question} {/* Adjusted index */}
            </label>
            <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {renderQuestion(allQuestions[currentStep - 5])}{" "}
              {/* Adjusted index */}
            </div>
            {/* {allQuestions[currentStep - 5]?.id === "Q31" &&
              renderDependentQuestions()} */}

            <div className="mt-auto flex grow flex-col items-center justify-end text-shuttle-gray-600">
              <div className="flex items-center justify-items-center gap-2 pt-8 text-sm font-semibold">
                <MessageCircleQuestion /> Waarom we dit vragen?
              </div>
              <p className="mx-auto mt-2 max-w-xl px-3 text-center text-sm">
                {allQuestions[currentStep - 5]?.why}
              </p>
            </div>
          </div>
        );
    }
  };

  const allQuestions = renderQuestions();
  const progressPercentage =
    ((currentStep + 1) / (allQuestions.length + 5)) * 100; // Adjusted step count

  return (
    <div
      className={
        startQuiz
          ? "flex items-center justify-center overflow-hidden"
          : " flex items-center justify-center"
      }
    >
      {startQuiz ? (
        <div className="h-[100vh] w-[100vw] md:space-x-5 block md:flex">
          <div className="w-1/2">
            <img
              src="https://go-checkout.bioniq.com/images/pills-1.webp"
              className="w-full h-[100vh] object-cover"
            />
          </div>
          <div className="w-1/2 flex justify-start items-center relative">
            <img src="https://go-checkout.bioniq.com/assets/logo-92293984.svg" className="absolute top-5 left-0" />
            <div className="flex flex-col justify-start">
              <div className="font-bold text-4xl tracking-wider">
                Go For Health
              </div>
              <div className="mt-5 font-semibold w-[40vw] text-lg">
                To help us understand what vitamins and microelements you may be
                deficient in, please answer the following questions.
              </div>
              <div className="mt-5 font-semibold w-[40vw] text-lg">
                We will input your responses into our patented, world-leading
                algorithm, an AI-driven "supercomputer," that utilizes our 10
                years of scientific data to formulate your personalized
                recommendations.
              </div>
              <button onClick={()=> setStartQuiz(false)} className="bg-[#098FE0] p-4 text-xl font-normal text-white rounded-lg w-44 mt-10">
                Begin
              </button>
            </div>
          </div>
        </div>
      ) : quizResults ? (
        introSection ? (
          <div className="w-full max-w-4xl">
            <div className="rounded-lg bg-white lg:px-2 lg:py-3 lg:shadow">
              <div className="relative min-h-screen md:min-h-[500px] min-w-[300px] overflow-hidden rounded border-shuttle-gray-100 bg-lightbg lg:border lg:border-dashed lg:p-2">
                <div
                  onClick={() => setIntroSection(false)}
                  className="mb-6 text-center px-5 md:px-16 flex flex-col justify-center items-center"
                >
                  <img
                    src={Logo.src}
                    className="w-auto max-w-[100%] md:h-8 h-5 mt-5 md:mt-10"
                    height={120}
                    width={736}
                    alt="smart blend"
                  />
                  <h1 className="mt-5 md:mt-16 text-lg md:text-2xl font-bold">
                    Investeer 5 minuten in je gezondheid en kom achter jouw
                    persoonlijke vitaminebehoefte!
                  </h1>
                  <p className="mt-10">
                    We stellen je vragen over je levensfase, dieet, levenstijl
                    en je gezondheidsdoelen om er achter te komen waar jij baat
                    bij kan hebben.
                  </p>
                  <p className="mt-5">
                    Nadat je alles hebt ingevuld, voeren we al jouw antwoorden
                    in ons gevanceerde algoritme, getraind op duizenden
                    wetenschappelijke onderzoeken, om een volledig op maat
                    gemaakt supplement te berekenen.
                  </p>
                  <a
                    className="flex w-full justify-center rounded-3xl bg-gradient-to-r from-malibu-300 to-froly-400 px-4 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gradient-to-r hover:from-froly-400 hover:to-malibu-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-malibu-300 mt-10"
                    href="#"
                  >
                    Start de vitaminetest
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-move-right ml-2 h-4"
                    >
                      <path d="M18 8L22 12L18 16"></path>
                      <path d="M2 12H22"></path>
                    </svg>
                  </a>

                  {/* <button
                    onClick={() => setIntroSection(false)}
                    className="bg-[#78C1F3] hover:scale-110 ease-in duration-500 text-white py-4 px-8 rounded-3xl font-bold text-xl mt-10"
                  >
                    Start de vitaminetest
                  </button> */}
                </div>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-lg"></div>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-4xl">
            <div className="rounded-lg bg-white lg:px-2 lg:py-3 lg:shadow">
              <div className="relative min-h-[500px] min-w-[300px] overflow-hidden rounded border-shuttle-gray-100 bg-lightbg lg:border lg:border-dashed lg:p-2">
                <div className="mb-6 text-center">
                  <h1 className="mt-4 text-2xl font-bold">
                    Levensstijl Vragenlijst
                  </h1>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-lg">
                  <div className="mb-4 overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-malibu-300 to-froly-400"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                  <div className="mb-6 text-center text-sm font-medium text-shuttle-gray-600">
                    Vraag {currentStep + 1} van {allQuestions.length + 5}{" "}
                    {/* Adjusted question count */}
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {renderStep()}
                    <div className="mx-auto mt-6 flex max-w-lg justify-between gap-4">
                      {currentStep > 0 && (
                        <button
                          type="button"
                          onClick={goToPrevStep}
                          className="mx-auto flex w-1/2 justify-center rounded-3xl bg-gradient-to-r from-gray-300 to-gray-400 px-4 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300"
                        >
                          Vorige
                        </button>
                      )}
                      {currentStep < allQuestions.length + 4 ? (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            goToNextStep();
                          }}
                          key="next"
                          type="button"
                          disabled={!validateCurrentStep()}
                          className={cn(
                            "mx-auto flex w-1/2 justify-center rounded-3xl bg-gradient-to-r from-malibu-300 to-froly-400 px-4 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gradient-to-r hover:from-froly-400 hover:to-malibu-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-malibu-300",
                            !validateCurrentStep() &&
                              "opacity-50 cursor-not-allowed"
                          )}
                        >
                          Volgende
                        </button>
                      ) : (
                        <button
                          key="submit"
                          type="submit"
                          className="mx-auto flex w-1/2 justify-center rounded-3xl bg-gradient-to-r from-malibu-300 to-froly-400 px-4 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gradient-to-r hover:from-froly-400 hover:to-malibu-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-malibu-300"
                        >
                          Versturen
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )
      ) : (
        computationData &&
        processedAnswers && (
          
            <BlendTab
              name={getValues().name}
              answers={processedAnswers}
              computations={computationData.computations}
              // answersData={processedAnswers}
            />
          
        )
      )}
    </div>
  );
};

export default LifestyleQuestionnaire;
