import React, { useState } from "react";

const MemeCaptions = () => {
  const [topCaption, setTopCaption] = useState("");
  const [bottomCaption, setBottomCaption] = useState("");

  const handleTopCaption = (event) => {
    const handleTopCaption = (event) => {
      const userTopCaption = event.target.value;
      setTopCaption(userTopCaption);
      console.log(userTopCaption);
      MemeFunComponent(userTopCaption);
    };
  };

  const handleBottomCaption = (event) => {
    const userBottomCaption = event.target.value;
    setBottomCaption(userBottomCaption);
    console.log(userBottomCaption);
    MemeFunComponent(userBottomCaption);
  };

  return (
    <div className="flex flex-col items-center mb-10">
      <h3 className="font-bold text-xl mt-5 mb-5">
        Step 4: Input text for the image(optional):
      </h3>

      {/* Make sure to match the form label (htmlFor to input id for easy matchup) */}

      <form className="rounded-xl border flex flex-col gap-5">
        <input
          type="text"
          id="top-line"
          placeholder="Top Caption"
          onInput={handleTopCaption}
        />{" "}
        <input
          type="text"
          id="bottom-line"
          placeholder="Bottom Caption"
          onInput={handleBottomCaption}
        />
      </form>
    </div>
  );
};

export default MemeCaptions;
