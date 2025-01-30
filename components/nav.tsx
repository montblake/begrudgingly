"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import Tooltip from "@mui/material/Tooltip";
import ProductionLinks from "./production_links";

const navLinks = [
  {
    href: "/",
    label: "Home",
    desktopLabel: "Home",
  },
  {
    href: "/premise",
    label: "Premise",
    desktopLabel: (
      <>
        <span className="hidden lg:inline">The</span> Premise
      </>
    ),
  },
  {
    href: "/production",
    label: "Production",
    desktopLabel: (
      <>
        <span className="hidden lg:inline">The</span> Production
      </>
    ),
  },
  {
    href: "/performer",
    label: "Performer",
    desktopLabel: (
      <>
        <span className="hidden lg:inline">The</span> Performer
      </>
    ),
  },
  {
    href: "/booking",
    label: "Booking",
    desktopLabel: "Booking",
  },
  {
    href: "/contact",
    label: "Contact",
    desktopLabel: "Contact",
  },
];

export default function Nav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductionLinksOpen, setIsProductionLinksOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const toggleProductionLinks = () => {
  //   setIsProductionLinksOpen(!isProductionLinksOpen);
  // };

  useEffect(() => {
    if (pathname.includes("/production")) {
      setIsProductionLinksOpen(true);
    } else {
      setIsProductionLinksOpen(false);
    }
  }, [pathname]);

  return (
    <>
      <div className="w-full h-fit z-50 flex flex-col justify-center items-center">
        <nav className="text-xs sm:text-sm md:text-base  w-full flex justify-between py-4 px-4 sm:px-12 lg:px-16 bg-neutral-800 border-b border-neutral-700">
          <ul className="flex space-x-6 items-center justify-center mr-8">
            <li>
              <Tooltip title="Home" arrow>
                <a href="/" className="text-neutral-200 flex items-center">
                  <Image
                    src="/cdb_logo.png"
                    alt="Home"
                    width={200}
                    height={32}
                    className="h-5 w-auto relative z-100 -top-[1px] hover:scale-95 transition-all duration-300 opacity-90 mix-blend-screen"
                  />
                </a>
              </Tooltip>
            </li>
          </ul>
          <ul className="hidden md:flex space-x-2 lg:space-x-4 items-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-xs lg:text-sm  ${
                    pathname === link.href
                      ? "font-bold text-neutral-200"
                      : "text-neutral-400 hover:text-neutral-300 active:underline"
                  }`}
                >
                  {link.desktopLabel}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="md:hidden text-neutral-200 relative z-50"
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
        {isProductionLinksOpen && <ProductionLinks />}
        {/* 
        <div className="w-full h-8 bg-gradient-to-b from-neutral-950 to-transparent" /> */}
      </div>

      {/* Overlay Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-neutral-950 bg-opacity-50 z-50">
          <div className="fixed right-0 top-0 h-full w-96 bg-neutral-200 p-4">
            <button
              onClick={toggleMenu}
              className="absolute top-2 right-2 text-neutral-600"
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
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`block uppercase text-neutral-600 hover:underline ${
                      pathname === link.href ? "font-bold text-neutral-900" : ""
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <hr className="w-full border-neutral-600 my-24" />
            <div className="w-full h-full flex flex-col justify-start items-start gap-4 text-neutral-600">
              <div className="flex flex-col justify-start items-start gap-0 font-bold">
                <h1>Charles Dickens Begrudingly</h1>
                <h2>
                  Performs <span className="italic">A Christmas Carol</span>{" "}
                  Again
                </h2>
              </div>
              <p>
                Created and performed by <br />
                <span className="">Blake Montgomery</span>
              </p>
              <hr className="w-full border-neutral-600 my-24" />
              <p>
                This is a{" "}
                <a
                  href="https://www.thisisaclownshow.com"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  clownshow
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
