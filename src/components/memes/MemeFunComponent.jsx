// https://rapidapi.com/meme-generator-api-meme-generator-api-default/api/meme-generator/pricing
// Meme fun page component
// 1000 per month

import React from "react";
import axios from "axios";

const MemeFunComponent = async () => {
  const options = {
    method: "GET",
    url: "https://ronreiter-meme-generator.p.rapidapi.com/meme",
    params: {
      top: "Top Text",
      bottom: "Bottom Text",
      meme: "Condescending-Wonka",
      font_size: "50",
      font: "Impact",
    },
    headers: {
      "X-RapidAPI-Key": "aeef6d6de3mshfec18a533464299p1bb9f9jsnba5e698e206b",
      "X-RapidAPI-Host": "ronreiter-meme-generator.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export default MemeFunComponent;
