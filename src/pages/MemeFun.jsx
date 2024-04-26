import React from "react";
import MemeGetImagesComponent from "../components/memes/MemeGetImagesComponent";
import MemeGetFont from "../components/memes/MemeGetFont";
import MemeFunComponent from "../components/memes/MemeFunComponent";
import MemeCaptions from "../components/memes/MemeCaptions";
import MemeGetFontSize from "../components/memes/MemeGetFontSize";

const MemeFun = () => {
  return (
    <div className="flex flex-col items-center mb-10 mt-10">
      <h1>Meme Fun!</h1>
      <p>Here you can create your own memes!</p>

      <MemeGetImagesComponent />
      <MemeGetFont />
      <MemeGetFontSize />
      <MemeCaptions />

      <button
        className="btn rounded-xl bg-purple-600 text-white"
        onClick={MemeFunComponent}
      >
        Generate Meme
      </button>
    </div>
  );
};

export default MemeFun;
