import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white py-4 w-screen">
      <nav className="flex items-center justify-evenly px-4">
        <a href="/" className="text-xl font-bold">
          Boredom Buster
        </a>
        <div className="flex">
          <ul className="flex mr-6">
            <li className="mr-6">
              <a href="#about">Home</a>
            </li>
            <li className="mr-6">
              <a href="#skills">Brain Teasers</a>
            </li>
            <li className="mr-6">
              <a href="#projects">Fun Facts & Randomness</a>
            </li>
            <li className="mr-6">
              <a href="#contact">Rock Paper Scissors</a>
            </li>
            <li className="mr-6">
              <a href="#contact">Would You Rather?</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
