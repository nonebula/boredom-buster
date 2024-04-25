import React, { useEffect, useState } from "react";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://ronreiter-meme-generator.p.rapidapi.com/fonts",
  headers: {
    "X-RapidAPI-Key": "aeef6d6de3mshfec18a533464299p1bb9f9jsnba5e698e206b",
    "X-RapidAPI-Host": "ronreiter-meme-generator.p.rapidapi.com",
  },
};

const MemeGetFont = () => {
  const [fetchData, setFetchData] = useState([]); // Initialize fetchData to an empty array

  const getFonts = async () => {
    try {
      const response = await axios.request(options);
      setFetchData(response.data); // Update fetchData state with fetched data
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFonts();
  }, []);

  return (
    <div>
      <h3>Select a Font:</h3>
      <select>
        {fetchData.map((fetchOption, index) => (
          <option key={index} value={fetchOption}>
            {fetchOption}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MemeGetFont;
