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
        <button className="btn rounded-xl bg-blue-600 text-white">
          Riddle
        </button>
      </div>
    </div>
  );
};

export default RiddleComponent;
