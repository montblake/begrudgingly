"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";

export default function Nav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center items-center border-b border-gray-400">
        <nav className="text-xs sm:text-sm md:text-base bg-gray-200 w-full flex justify-between py-2 px-12 lg:px-16">
          <ul className="flex space-x-6 items-center justify-center mr-8">
            <li>
              <Tooltip title="Home" arrow>
                <a href="/" className="text-gray-600 flex items-center">
                  <Image
                    src="/cdb_logo.png"
                    alt="Home"
                    width={200}
                    height={32}
                    className="h-5 w-auto mix-blend-multiply relative -top-[2px] hover:scale-105 transition-all duration-300"
                  />
                </a>
              </Tooltip>
            </li>
          </ul>
          <ul className="hidden md:flex space-x-6 items-center">
            <li>
              <a
                href="/artist"
                className={`text-gray-600 hover:underline ${
                  pathname === "/artist" ? "font-bold text-gray-900" : ""
                }`}
              >
                Meet Artist
              </a>
            </li>
            <li>
              <a
                href="/performances"
                className={`text-gray-600 hover:underline ${
                  pathname === "/performances" ? "font-bold text-gray-900" : ""
                }`}
              >
                Performances
              </a>
            </li>
          </ul>
          <button
            className="md:hidden text-gray-600 relative z-50"
            onClick={toggleMenu}
          >
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
        </nav>
      </div>

      {/* Overlay Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed right-0 top-0 h-full w-64 bg-gray-200 p-4">
            <button
              onClick={toggleMenu}
              className="absolute top-2 right-2 text-gray-600"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="mt-8 space-y-4">
              <li>
                <a
                  href="/"
                  className={`block text-gray-600 hover:underline ${
                    pathname === "/" ? "font-bold text-gray-900" : ""
                  }`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/artist"
                  className={`block text-gray-600 hover:underline ${
                    pathname === "/artist" ? "font-bold text-gray-900" : ""
                  }`}
                >
                  Meet Artist
                </a>
              </li>
              <li>
                <a
                  href="/performances"
                  className={`block text-gray-600 hover:underline ${
                    pathname === "/performances"
                      ? "font-bold text-gray-900"
                      : ""
                  }`}
                >
                  Choose Performances
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
