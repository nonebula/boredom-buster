// https://rapidapi.com/apininjas/api/riddles-by-api-ninjas
// Generate the riddles on brain teaser page.

import React from "react";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://riddles-by-api-ninjas.p.rapidapi.com/v1/riddles",
  headers: {
    "X-RapidAPI-Key": "aeef6d6de3mshfec18a533464299p1bb9f9jsnba5e698e206b",
    "X-RapidAPI-Host": "riddles-by-api-ninjas.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}

const RiddleComponent = () => {
  return (
    <div className="h-screen text-center">
      <h1 className="font-bold mt-10">Riddles</h1>
      <div className="flex justify-center mt-10">
        <div className="w-1/2">
          <h1 className="text-2xl font-bold">Riddle</h1>
          <p className="text-xl">What has keys but can't open locks?</p>
          <input
            type="text"
            className="border-2 border-blue-600 w-1/2 rounded-xl p-2 mt-5"
          />
          <button className="btn rounded-xl bg-blue-600 text-white">
            New Riddle
          </button>
        </div>
      </div>
    </div>
  );
};

export default RiddleComponent;
