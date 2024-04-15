import React, { useState, useEffect } from "react";
const Hero = () => {
  const [joke, setJoke] = useState("");
  const [comment, setComment] = useState("");

  const getJoke = async () => {
    try {
      const response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
          "User-Agent": "YourLibraryOrWebsiteName (https://yourwebsite.com)",
        },
      });

      if (response.ok) {
        const jokeData = await response.json();
        const jokeText = jokeData.joke;
        setJoke(jokeText);
      } else {
        throw new Error("Failed to fetch joke");
      }
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
  };

  useEffect(() => {
    getJoke();
  }, []);

  useEffect(() => {
    const currentTime = new Date().getHours();
    if (currentTime >= 9 && currentTime <= 17) {
      setComment(`It's ${currentTime}:00, shouldn't you be working?`);
    } else {
      setComment(
        `It's ${currentTime}:00, at least you're here outside of office hours!`
      );
    }
  }, []);

  return (
    <section className="w-screen text-center">
      <div className="bg-blue-500 text-white py-4 px-6">
        <h1 className="text-4xl font-bold mb-8 mt-8">
          Welcome to the Boredom Buster
        </h1>
        <p className="text-lg pt-5 pb-5 italic">{joke}</p>
        <p className="text-lg pt-7 pb-7 font-bold animate-pulse">{comment}</p>
      </div>
    </section>
  );
};

export default Hero;
