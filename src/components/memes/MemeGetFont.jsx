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
  const [fetchData, setFetchData] = useState([]);
  const [selectedFont, setSelectedFont] = useState("");

  const getFonts = async () => {
    try {
      const response = await axios.request(options);
      setFetchData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFonts();
  }, []);

  const handleSelection = (event) => {
    const userSelectedFont = event.target.value;
    setSelectedFont(userSelectedFont);
    console.log(userSelectedFont);
  };

  return (
    <div className="flex flex-col items-center mb-10">
      <h3 className="text-xl mx-5 mt-5 mb-5 font-bold">Step 2: Select a Font</h3>
      <select className="bg-gray-400 rounded-xl text-center" onChange={handleSelection}>
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
