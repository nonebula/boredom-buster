import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="flex items-center justify-between px-4">
      <a href="/" className="text-xl font-bold">Boredom Buster</a>
        <div className="flex items-center justify-between px-4">
          <ul className="flex items-center justify-between px-4">
            <li>
              <a href="#about">Home</a>
            </li>
            <li>
              <a href="#skills">Brain Teasers</a>
            </li>
            <li>
              <a href="#projects">Fun Facts & Randomness</a>
            </li>
            <li>
              <a href="#contact">Rock Paper Scissors</a>
            </li>
            <li>
              <a href="#contact">Would You Rather?</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
