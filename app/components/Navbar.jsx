"use client";

import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#f2ecdc] w-full fixed top-0 left-0 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-green-900 font-bold text-lg">
            <a href="/">
              <Image src="/images/logo.svg" width={50} height={50} alt="logo" />
            </a>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="/a-propos" className="btn-half-round">
              <span>About</span>
            </a>
            <a href="/contact" className="btn-half-round">
              <span>Contact</span>
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-green-900">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="menu w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 5.5h15a1 1 0 110 2h-15a1 1 0 110-2zm0 4h15a1 1 0 110 2h-15a1 1 0 110-2zm0 4h15a1 1 0 110 2h-15a1 1 0 110-2z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/projets" className="block text-green-900">
            Projets
          </a>
          <a href="/a-propos" className="block text-green-900">
            À propos
          </a>
          <a href="/blogue" className="block text-green-900">
            Articles
          </a>
          <a href="/faq" className="block text-green-900">
            FAQ
          </a>
          <a href="/contact" className="block text-green-900">
            Contact
          </a>
          <a href="/en" className="block text-green-900">
            EN
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
