import React, { useEffect, useState } from "react";
import BlendTab from "@/component/BlendTableItems";
import useComputation from "@/hooks/useComputation";
import { useRouter } from "next/router"; // Use router for query parameters

const Blend = () => {
  const router = useRouter();
  const { email, uniqueID } = router.query; // Access query params
  const [profileData, setProfileData] = useState<any | null>(null);
  const [name, setName] = useState("");
  const [isLinkExpired, setIsLinkExpired] = useState(false);

  const fetchUserProfileData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/quizes/fetchByEmail`,
        {
          method: "POST",
          body: JSON.stringify({
            quizEmail: email,
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
      console.log("Error fetching profile data:", error);
    }
  };

  useEffect(() => {
    if (email && uniqueID) {
      const storedUniqueID = localStorage.getItem("quizResults");
      console.log(storedUniqueID);

      // Check if the email and the uniqueID match
      if (storedUniqueID && uniqueID === storedUniqueID) {
        fetchUserProfileData();
        setIsLinkExpired(false);
      } else {
        setIsLinkExpired(true);
      }
    }
  }, [email, uniqueID]);

  // Use useComputation directly with profileData?.answers
  const { data, isLoading, error } = useComputation(profileData?.answers);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div>
      {isLinkExpired ? (
        <div>
          <h2>Expired Link</h2>
          <p>
            The link you followed is expired or invalid. Please check your email
            for a valid link.
          </p>
        </div>
      ) : data?.answers && data?.computations ? (
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
