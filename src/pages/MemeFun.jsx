import React from "react";
import MemeGetImagesComponent from "../components/memes/MemeGetImagesComponent";
import MemeGetFont from "../components/memes/MemeGetFont";
import MemeFunComponent from "../components/memes/MemeFunComponent";

const MemeFun = () => {
  return (
    <div>
      <h1>Meme Fun!</h1>
      <p>Here you can create your own memes!</p>

      <MemeGetImagesComponent />
      <MemeGetFont />

      <h3>Select the Font Size</h3>
      <select>
        <option>12</option>
        <option>16</option>
        <option>24</option>
        <option>32</option>
        <option>48</option>
        <option>64</option>
        <option>72</option>
      </select>
      <h3>Input text for the image(optional):</h3>
      <form>
        <input type="text" id="top-line" />
        <label htmlFor="top-line">type the top line here...</label>
        <input type="text" id="bottom-line" />
        <label htmlFor="bottom-line">type the bottom line here...</label>
      </form>

      <button onClick={MemeFunComponent}>Generate Meme</button>
    </div>
  );
};

export default MemeFun;
