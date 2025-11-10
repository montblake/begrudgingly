"use client";

import { Mail } from "lucide-react";
import HeaderOverlayMenu from "./header_overlay";
import { useState } from "react";

interface NavLink {
  href: string;
  title: string;
  description: string;
  subLinks: NavLink[];
}

export default function HeaderHamburger({
  navLinks,
  pathname,
}: {
  navLinks: NavLink[];
  pathname: string;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="flex flex-row items-center justify-center gap-2 md:hidden">
      <button className="text-neutral-200 relative z-50" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <a
        href="http://eepurl.com/i2jCO2"
        target="_blank"
        rel="noopener noreferrer"
        className=""
      >
        <div className="w-8 h-8 rounded-full flex flex-col items-center justify-center gap-1 bg-gradient-to-b from-amber-400/80 via-amber-500/80 to-amber-600/80 border-2 border-black hover:scale-105 transition-all duration-300 active:border-neutral-300 text-neutral-950 active:text-neutral-300">
          <Mail size={12} className="" />
        </div>
      </a>
      <HeaderOverlayMenu
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        navLinks={navLinks}
        pathname={pathname}
      />
    </div>
  );
}
