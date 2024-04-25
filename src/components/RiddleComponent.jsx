// https://rapidapi.com/apininjas/api/riddles-by-api-ninjas
// Generate the riddles on brain teaser page.

import axios from "axios";

const Riddle = async () => {
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
};

export default Riddle;
