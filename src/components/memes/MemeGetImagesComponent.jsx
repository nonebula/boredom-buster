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
  const [selectedImage, setSelectedImage] = useState("");

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

  const handleSelection = (event) => {
    const userSelectedImage = event.target.value;
    setSelectedImage(userSelectedImage);
    console.log(userSelectedImage);
  };

  return (
    <div className="flex flex-col items-center mb-10">
      <h3 className="font-bold text-xl text-center">Step 1: Select an Image</h3>
      <select className="text-center bg-slate-400 rounded-lg text-black mt-5" onChange={handleSelection}>
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
