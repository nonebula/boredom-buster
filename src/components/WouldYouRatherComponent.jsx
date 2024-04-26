import React, { useState, useEffect } from "react";
import axios from "axios";

const WouldYouRatherComponent = () => {
  const [question, setQuestion] = useState("");

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
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-screen text-center">
      <h1 className="font-bold mt-10">Would You Rather...</h1>
      <p className="text-4xl mt-10 mb-10">{question}</p>
      <div className="gap-5">
        <button className="btn rounded-xl bg-purple-600 text-white">
          Option A
        </button>
        <button className="btn rounded-xl bg-purple-600 text-white">
          Option B
        </button>
      </div>
    </div>
  );
};

export default WouldYouRatherComponent;
