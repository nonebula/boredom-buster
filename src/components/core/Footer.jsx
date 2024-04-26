import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <footer className="bg-gray-800 text-white py-4 mt-12 w-screen">
      <nav className="flex items-center justify-evenly px-4">
        <a href="/" className="text-xl font-bold">
          Boredom Buster
        </a>
        <div className="flex">
          <ul className="flex mr-6">
            <li className="mr-6">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="mr-6">
              <NavLink to="/riddles">Riddles</NavLink>
            </li>
            <li className="mr-6">
              <NavLink to="/memefun">Meme Fun</NavLink>
            </li>
            <li className="mr-6">
              <NavLink to="/rockpaperscissors">Rock Paper Scissors</NavLink>
            </li>
            <li className="mr-6">
              <NavLink to="/wouldyourather">Would You Rather</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
