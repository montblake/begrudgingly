"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import HeaderLogo from "./header_logo";
import HeaderNavLinks from "./new_header_links";
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
    title: "Chicago 2025",
    description:
      "The 2025 production of Charles Dickens Begrudgingly Performs A Christmas Carol Again.",
    subLinks: [],
  },
  {
    href: "/history",
    title: "Production History",
    description:
      "The history of the production of Charles Dickens Begrudgingly Performs A Christmas Carol Again.",
    subLinks: [],
  },
  {
    href: "/creator",
    title: "Creative Team",
    description:
      "The creative team behind the 2025 production of Charles Dickens Begrudgingly Performs A Christmas Carol Again.",
    subLinks: [],
  },
  {
    href: "/contact",
    title: "Contact",
    description: "Contact",
    subLinks: [],
  },
  {
    href: "/2024",
    title: "2024 Scrapbook",
    description:
      "Photos, Reviews, and more from the 2024 production of Charles Dickens Begrudgingly Performs A Christmas Carol Again.",
    subLinks: [
      // {
      //   href: "/2024/photos-publicity",
      //   title: "Publicity Photos",
      //   description: "by Joe Mazza / brave lux inc.",
      //   subLinks: [],
      // },
      // {
      //   href: "/2024/photos-performance",
      //   title: "Performance Photos",
      //   description: "by Michael Brosilow",
      //   subLinks: [],
      // },
      // {
      //   href: "/2024/reviews",
      //   title: "Press Reviews",
      //   description: "in the words of the critics...",
      //   subLinks: [],
      // },
      // {
      //   href: "/2024/program",
      //   title: "Digital Program",
      //   description: "credits for artistic and production team",
      //   subLinks: [],
      // },
    ],
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
      <div className="w-full h-[3rem] z-50 flex flex-col justify-center items-center bg-neutral-800 border-b border-neutral-700 sticky top-0">
        <nav className="text-xs sm:text-sm md:text-base w-full flex justify-between items-center py-4 px-4 sm:pr-8 lg:px-16 ">
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
