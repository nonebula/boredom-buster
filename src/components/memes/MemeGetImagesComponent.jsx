import React, { useEffect, useState } from "react";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://ronreiter-meme-generator.p.rapidapi.com/images",
  headers: {
    "X-RapidAPI-Key": "aeef6d6de3mshfec18a533464299p1bb9f9jsnba5e698e206b",
    "X-RapidAPI-Host": "ronreiter-meme-generator.p.rapidapi.com",
  },
};

const MemeGetImagesComponent = () => {
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        setFetchData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h3>Select an Image:</h3>
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

export default MemeGetImagesComponent;
