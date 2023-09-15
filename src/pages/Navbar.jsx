"use client";
import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div id="navbar">
      <nav className="bg-white p-4 fixed top-0 left-0 right-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <a className="text-black text-2xl font-semibold" href="#home">
            <img
              src="/images/AJ_LOGO_BLACK.png"
              alt="Your Portfolio Logo"
              className="h-16 w-auto"
            />
          </a>
          <div className={`lg:hidden ${isMenuOpen ? 'hidden' : ''}`}>
            {/* Hamburger menu icon */}
            <button
              onClick={toggleMenu}
              className="text-black text-2xl hover:text-gray-700"
            >
              ☰
            </button>
          </div>
          <div
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } lg:flex lg:items-center`}
          >
            <a
              className="text-black hover:underline font-bold text-lg px-4 py-2 block lg:inline-block"
              href="#portfolio"
              onClick={closeMenu}
            >
              Portfolio
            </a>
            <a
              className="text-black hover:underline font-bold text-lg px-4 py-2 block lg:inline-block"
              href="#about"
              onClick={closeMenu}
            >
              About
            </a>
            <a
              className="text-black hover:underline font-bold text-lg px-4 py-2 block lg:inline-block"
              href="#contact"
              onClick={closeMenu}
            >
              Contact
            </a>
            <a
              className="text-black hover:underline font-bold text-lg px-4 py-2 block lg:inline-block"
              href="#resume"
              onClick={closeMenu}
            >
              Resume
            </a>
            <a
              className="text-black hover:underline font-bold text-lg px-4 py-2 block lg:inline-block"
              href="https://www.linkedin.com/in/ajay-kumar-josyula-505227b2"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Linkedin
            </a>
            <a
              className="text-black hover:underline font-bold text-lg px-4 py-2 block lg:inline-block"
              href="https://github.com/ajaykumartech"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
