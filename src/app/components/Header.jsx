"use client";
import Image from "next/image";
import NavLinks from "./NavLinks";
import React from "react";
import MobileNav from "./MobileNav";

export default function Header({ siteLogo }) {
  const [isOpen, setIsopen] = React.useState(false);
  return (
    <>
      <header className="flex items-center justify-between">
        <Image src={siteLogo} alt="site logo" />
        <NavLinks className="hidden md:flex " />
        <button className="md:hidden" onClick={() => setIsopen(!isOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu-icon lucide-menu stroke-darkCryanBlue w-6 h-6 "
          >
            <path
              d={isOpen ? "M6 6l12 12" : "M4 6h16"}
              className="transition-all duration-300 ease-in-out"
            />
            <path
              d="M4 12h16"
              className={`transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <path
              d={isOpen ? "M6 18l12-12" : "M4 18h16"}
              className="transition-all duration-300 ease-in-out"
            />
          </svg>
        </button>
      </header>
      {isOpen && <MobileNav />}
    </>
  );
}
