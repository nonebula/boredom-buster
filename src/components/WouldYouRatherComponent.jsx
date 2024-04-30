import React, { useState, useEffect } from "react";
import axios from "axios";

const WouldYouRatherComponent = () => {
  const [question, setQuestion] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://would-you-rather.p.rapidapi.com/wyr/random",
        headers: {
          "X-RapidAPI-Key":
            "aeef6d6de3mshfec18a533464299p1bb9f9jsnba5e698e206b",
          "X-RapidAPI-Host": "would-you-rather.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setQuestion(response.data[0].question);
        setError(null);
      } catch (error) {
        setError("API is overloaded. Please try again later."); // Set error message
      }
    };

    fetchData();
  }, []);

  const staticQuestions = [
    "Would you rather always be 10 minutes late or always be 20 minutes early?",
    "Would you rather lose all of your money and valuables or all of the pictures you have ever taken?",
    "Would you rather be able to see 10 minutes into your own future or 10 minutes into the future of anyone but yourself?",
    "Would you rather have all traffic lights you approach be green or never have to stand in line again?",
    "Would you rather know the history of every object you touched or be able to talk to animals?",
  ];

  return (
    <div className="h-screen text-center">
      <h1 className="font-bold mt-10">Would You Rather...</h1>
      {error ? (
        <div>
          <p className="mt-10 mb-20 font-bold text-red-500">{error}</p>
          <p className="italic mb-5">Here are some questions for you:</p>
          <ul className="mb-10">
            {staticQuestions.map((question, index) => (
              <li key={index} className="mb-10">
                {question}
              </li>
            ))}
          </ul>
          <p className="text-green-500 font-bold">
            Please try again in an hour.
          </p>
        </div>
      ) : (
        <>
          <p className="text-4xl mt-10 mb-10">{question}</p>
          <div className="gap-5">
            <button className="btn rounded-xl bg-blue-600 text-white">
              Option A
            </button>
            <button className="btn rounded-xl bg-blue-600 text-white">
              Option B
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default WouldYouRatherComponent;
