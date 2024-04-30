import React, { useState } from "react";
import axios from "axios";

const RockPaperScissorsComponent = () => {
  const [result, setResult] = useState(null);

  const handleChoice = async (choice) => {
    try {
      const options = {
        method: "GET",
        url: "https://vadym-rock-paper-scissors-api.p.rapidapi.com/",
        params: { choice: choice },
        headers: {
          "X-RapidAPI-Key":
            "aeef6d6de3mshfec18a533464299p1bb9f9jsnba5e698e206b",
          "X-RapidAPI-Host": "vadym-rock-paper-scissors-api.p.rapidapi.com",
        },
      };

      const response = await axios.request(options);
      setResult(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-screen text-center">
      <h1 className="font-bold mt-10 mb-20">Rock Paper Scissors</h1>
      <p className="text-xl font-semibold mb-10 p-10">
        On this page, you can play a simple and quick rock, paper, scissors game
        with a randomised computer opponent. Put your warrior skills to the test
        as you face off against the most fearful RPS opponent of all time!
      </p>
      <p className="text-xl font-semibold">Choose your weapon:</p>
      <div className="flex justify-evenly mt-10">
        <button
          className="btn rounded-xl bg-blue-600 text-white w-40"
          onClick={() => handleChoice("rock")}
        >
          Rock
        </button>
        {/* add rock image */}
        <button
          className="btn rounded-xl bg-blue-600 text-white w-40"
          onClick={() => handleChoice("paper")}
        >
          Paper
        </button>
        {/* add paper image */}
        <button
          className="btn rounded-xl bg-blue-600 text-white w-40"
          onClick={() => handleChoice("scissors")}
        >
          Scissors
        </button>
        {/* add scissors image */}
      </div>
      {result && (
        <div className="mt-28">
          <h2 className="text-xl font-semibold">Result:</h2>
          <div className="flex flex-col">
            <p className="mt-10 mb-10">User: {result.user.name}</p>
            <p className="mt-10 mb-10">AI: {result.ai.name}</p>
            <p className="mt-10 mb-10">Result: {result.result}</p>
          </div>
          {/* conditional rendering of rocks, papers, scissors, win/lose/draw animation */}
        </div>
      )}
    </div>
  );
};

export default RockPaperScissorsComponent;
