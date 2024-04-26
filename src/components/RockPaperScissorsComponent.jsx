// https://rapidapi.com/hulchenko/api/vadym-rock-paper-scissors-api/
// Rock Paper Scissors Component
// Work to generate images with the results and make it fun and visual

import axios from "axios";

const options = {
  method: "GET",
  url: "https://vadym-rock-paper-scissors-api.p.rapidapi.com/",
  params: { choice: "rock" },
  headers: {
    "X-RapidAPI-Key": "aeef6d6de3mshfec18a533464299p1bb9f9jsnba5e698e206b",
    "X-RapidAPI-Host": "vadym-rock-paper-scissors-api.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}

const RockPaperScissorsComponent = () => {
  return (
    <div className="h-screen text-center">
      <h1 className="font-bold mt-10">Rock Paper Scissors</h1>
      <div className="flex justify-center mt-10">
        <button className="btn rounded-xl bg-blue-600 text-white">Rock</button>
        <button className="btn rounded-xl bg-blue-600 text-white">Paper</button>
        <button className="btn rounded-xl bg-blue-600 text-white">
          Scissors
        </button>
      </div>
    </div>
  );
};

export default RockPaperScissorsComponent;
