import React, { useState, useEffect } from "react";
import axios from "axios";

const RiddleComponent = () => {
  const [riddle, setRiddle] = useState("");
  const [error, setError] = useState(null);

  // Function to fetch a new riddle
  const fetchNewRiddle = async () => {
    try {
      const options = {
        method: "GET",
        url: "https://riddles-by-api-ninjas.p.rapidapi.com/v1/riddles",
        headers: {
          "X-RapidAPI-Key":
            "aeef6d6de3mshfec18a533464299p1bb9f9jsnba5e698e206b",
          "X-RapidAPI-Host": "riddles-by-api-ninjas.p.rapidapi.com",
        },
      };

      const response = await axios.request(options);
      setRiddle(response.data.riddles[0].question); // Assuming the response structure has the riddle question
      setError(null); // Reset error if fetching is successful
    } catch (error) {
      setError("API is overloaded. Please try again later."); // Set error message
    }
  };

  // Fetch initial riddle on component mount
  useEffect(() => {
    fetchNewRiddle();
  }, []);

  // Static riddles to display when API is overloaded
  const staticRiddles = [
    "What has a head, a tail, is brown, and has no legs? A penny.",
    "What has to be broken before you can use it? An egg.",
    "I’m tall when I’m young, and I’m short when I’m old. What am I? A candle.",
    "What month of the year has 28 days? All of them.",
    "What is always in front of you but can’t be seen? The future.",
  ];

  return (
    <div className="h-screen text-center">
      <h1 className="font-bold mt-10">Riddles</h1>
      <div className="flex justify-center mt-10">
        <div className="w-1/2">
          {error ? (
            <div>
              <p className="mt-5 mb-20 font-bold text-red-500">{error}</p>
              <p className="italic mb-5">
                Here are some riddles for you in the meantime:
              </p>
              <ul className="mb-10">
                {staticRiddles.map((riddle, index) => (
                  <li key={index} className="mb-10">
                    {riddle}
                  </li>
                ))}
              </ul>
              <p className="text-green-500 font-bold">
                Please try again in an hour.
              </p>
            </div>
          ) : (
            <>
              <h1 className="text-2xl font-bold">Riddle</h1>
              <p className="text-xl">{riddle}</p>
              <button
                className="btn rounded-xl bg-blue-600 text-white"
                onClick={fetchNewRiddle}
              >
                New Riddle
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RiddleComponent;
