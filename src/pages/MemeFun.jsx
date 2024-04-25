import React from "react";
import MemeGetImagesComponent from "../components/memes/MemeGetImagesComponent";
import MemeGetFont from "../components/memes/MemeGetFont";

const MemeFun = () => {
  return (
    <div>
      <h1>Meme Fun!</h1>
      <p>Here you can create your own memes!</p>

      <MemeGetImagesComponent />
      <MemeGetFont />
      {/* <MemeFunComponent /> */}

      <h3>Input text for the image(optional):</h3>
      <form>
        <input type="text" id="top-line">
          type the top line here...
        </input>
        <input type="text" id="bottom-line">
          type the bottom line here...
        </input>
      </form>
    </div>
  );
};

export default MemeFun;
