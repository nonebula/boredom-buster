import React, { useState } from "react";

const MemeGetFontSize = () => {
  const [fontSize, setFontSize] = useState(12);

  const handleSelection = (event) => {
    const selectedFontSize = parseInt(event.target.value);
    setFontSize(selectedFontSize);
    console.log(selectedFontSize);
  };

  return (
    <div className="flex flex-col items-center mb-10">
      <h3 className="text-center text-xl font-bold mt-5">Step 3: Select the Font Size</h3>
      <select className="border rounded-xl w-full text-center bg-gray-400" onChange={handleSelection}>
        <option>12</option>
        <option>16</option>
        <option>24</option>
        <option>32</option>
        <option>48</option>
        <option>64</option>
        <option>72</option>
      </select>
    </div>
  );
};

export default MemeGetFontSize;
