import React, { useState } from 'react';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4 fixed top-0 left-0 w-screen h-auto z-10">
      <div className="flex justify-between items-center">
        <div className="text-white font-semibold">
          <button
            className="block sm:hidden text-white text-2xl focus:outline-none"
            onClick={toggleDropdown}
          >
            ☰
          </button>
          <ul className={`sm:flex ${isOpen ? "block" : "hidden"} sm:block space-y-4 sm:space-y-0 sm:space-x-8 mt-4 sm:mt-0`}>
            <li className="relative group">
              <a href="#home" className="text-white hover:text-gray-200">Home</a>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transform transition-transform origin-left"></span>
            </li>
            <li className="relative group">
              <a href="#about" className="text-white hover:text-gray-200">About</a>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transform transition-transform origin-left"></span>
            </li>
            <li className="relative group">
              <a href="#schedule" className="text-white hover:text-gray-200">Schedule</a>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transform transition-transform origin-left"></span>
            </li>
            <li className="relative group">
              <a href="#tracks" className="text-white hover:text-gray-200">Tracks</a>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transform transition-transform origin-left"></span>
            </li>
            <li className="relative group">
              <a href="#sponsors" className="text-white hover:text-gray-200">Sponsors</a>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transform transition-transform origin-left"></span>
            </li>
            <li className="relative group">
              <a href="#faq" className="text-white hover:text-gray-200">FAQ</a>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transform transition-transform origin-left"></span>
            </li>
            <li className="relative group">
              <a href="https://linktr.ee/hackrice14" target="_blank" rel="noreferrer" className="text-white">Apply</a>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transform transition-transform origin-left"></span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;