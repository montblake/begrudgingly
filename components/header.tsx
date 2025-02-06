"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import HeaderLogo from "./header_logo";
import HeaderNavLinks from "./header_links";
import HeaderOverlayMenu from "./header_overlay";
import HeaderHamburger from "./header_hamburger";

interface NavLink {
  href: string;
  title: string;
  description: string;
  subLinks: NavLink[];
}

const navLinks: NavLink[] = [
  {
    href: "/",
    title: "Home",
    description: "Home",
    subLinks: [],
  },
  {
    href: "/premise",
    title: "Premise",
    description: "Premise",
    subLinks: [],
  },
  {
    href: "",
    title: "In Production",
    description: "Production",
    subLinks: [
      {
        href: "/program",
        title: "Program",
        description: "Production credits in the digital program",
        subLinks: [],
      },
      {
        href: "/photos_publicity",
        title: "Publicity Photos",
        description: "Publicity photos by Joe Mazza / brave lux inc.",
        subLinks: [],
      },
      {
        href: "/photos_performance",
        title: "Performance Photos",
        description: "Performance photos by Michael Brosilow",
        subLinks: [],
      },
      {
        href: "/reviews",
        title: "Press Reviews",
        description: "In the words of the critics...",
        subLinks: [],
      },
    ],
  },
  {
    href: "/performer",
    title: "Performer",
    description: "Performer",
    subLinks: [],
  },
  {
    href: "/booking",
    title: "Booking",
    description: "Booking",
    subLinks: [],
  },
  {
    href: "/contact",
    title: "Contact",
    description: "Contact",
    subLinks: [],
  },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="w-full h-fit z-50 flex flex-col justify-center items-center">
        <nav className="text-xs sm:text-sm md:text-base  w-full flex justify-between py-4 px-4 sm:px-12 lg:px-16 bg-neutral-800 border-b border-neutral-700">
          <HeaderLogo pathname={pathname} />
          <HeaderNavLinks navLinks={navLinks} pathname={pathname} />
          <HeaderHamburger toggleMenu={toggleMenu} />
        </nav>
      </div>

      <HeaderOverlayMenu
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        navLinks={navLinks}
        pathname={pathname}
      />
    </>
  );
}
