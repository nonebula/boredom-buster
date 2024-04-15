
// https://rapidapi.com/zack00bowie/api/boredombuster

import React, { useState, useEffect } from "react";

import axios from "axios";
// const axios = require("axios");

const MainFeature = () => {
  //state stores activity data
  const [activity, setActivity] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://boredombuster.p.rapidapi.com/activity",
        params: { type: "education" },
        headers: {
          "X-RapidAPI-Key":
            "aeef6d6de3mshfec18a533464299p1bb9f9jsnba5e698e206b",
          "X-RapidAPI-Host": "boredombuster.p.rapidapi.com",
        },
      };
      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h3 className="text-6xl mt-10 font-bold">Looking for Something to Do?</h3>
      {/* <h4>{activity.activity}</h4> */}
      {/* <p>{activity.link}</p> */}
      <button className="btn bg-blue-400 text-white font-bold mt-8">
        Try Something Else
      </button>
    </div>
  );
};


