import React from "react";
import testdata from "../test.json"; // Assuming test.json is valid and imported
import BlendTab from "@/component/BlendTableItems";
import useComputation from "@/hooks/useComputation";

const Blend = () => {
  const { data, isLoading, error } = useComputation(testdata) as any
   console.log(error)
  if (isLoading) return <p>Loading...</p>; // Handle loading state
  if (error) return <p>Error loading data</p>; // Handle errors
  console.log(testdata);
  const { answers, computations } = data  
  console.log(computations)
  const name = "Muzammil"
  return (
    <div>
      {answers && computations ? (
        <BlendTab answers={answers} name={name} computations={computations} />
      ) : (
        <p>No Data Found</p>
      )}
    </div>
  );
};

export default Blend;
