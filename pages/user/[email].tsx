import React, { useEffect, useState } from "react";
import BlendTab from "@/component/BlendTableItems";
import useComputation from "@/hooks/useComputation";
import { useParams } from "next/navigation";

const Blend = () => {
  const params = useParams();
  const [profileData, setProfileData] = useState(null) as any // Initialize as null
  const [name, setName] = useState("");

  const fetchUserProfileData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/quizes/fetchByEmail`,
        {
          method: "POST",
          body: JSON.stringify({
            quizEmail: params?.email,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setProfileData(data.data);
      setName(data.data?.name || "");
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  useEffect(() => {
    if (params?.email) {
      fetchUserProfileData();
    }
  }, [params]);

  // Use useComputation directly with profileData?.answers
  const { data, isLoading, error } = useComputation(profileData?.answers);

  if (isLoading) return <p>Loading...</p>; // Handle loading state
  if (error) return <p>Error loading data</p>; // Handle errors

  return (
    <div>
      {data?.answers && data?.computations ? (
        <BlendTab
          answers={data.answers}
          name={name}
          computations={data.computations}
        />
      ) : (
        <p>No Data Found</p>
      )}
    </div>
  );
};

export default Blend;
