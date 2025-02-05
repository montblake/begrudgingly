"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import HeaderLogo from "./header_logo";
import HeaderNavLinks from "./new_links";
import HeaderOverlayMenu from "./new_overlay";
import HeaderHamburger from "./header_hamburger";

interface NavLink {
  href: string;
  title: string;
  description: string;
  subLinks?: NavLink[];
}

const navLinks: NavLink[] = [
  {
    href: "/",
    title: "Home",
    description: "Home",
  },
  {
    href: "/premise",
    title: "Premise",
    description: "Premise",
  },
  {
    href: "/production",
    title: "Production",
    description: "Production",
    subLinks: [
      {
        href: "/production/program",
        title: "Program",
        description: "Production credits in the digital program",
      },
      {
        href: "/production/photos_publicity",
        title: "Publicity Photos",
        description: "Publicity photos by Joe Mazza / brave lux inc.",
      },
      {
        href: "/production/photos_performance",
        title: "Performance Photos",
        description: "Performance photos by Michael Brosilow",
      },
      {
        href: "/production/reviews",
        title: "Press Reviews",
        description: "In the words of the critics...",
      },
    ],
  },
  {
    href: "/performer",
    title: "Performer",
    description: "Performer",
  },
  {
    href: "/booking",
    title: "Booking",
    description: "Booking",
  },
  {
    href: "/contact",
    title: "Contact",
    description: "Contact",
  },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isProductionLinksOpen, setIsProductionLinksOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const toggleProductionLinks = () => {
  //   setIsProductionLinksOpen(!isProductionLinksOpen);
  // };

  // useEffect(() => {
  //   if (pathname.includes("/production")) {
  //     setIsProductionLinksOpen(true);
  //   } else {
  //     setIsProductionLinksOpen(false);
  //   }
  // }, [pathname]);

  return (
    <>
      <div className="w-full h-fit z-50 flex flex-col justify-center items-center">
        <nav className="text-xs sm:text-sm md:text-base  w-full flex justify-between py-4 px-4 sm:px-12 lg:px-16 bg-neutral-800 border-b border-neutral-700">
          <HeaderLogo pathname={pathname} />
          <HeaderNavLinks navLinks={navLinks} pathname={pathname} />
          <HeaderHamburger toggleMenu={toggleMenu} />
        </nav>
        {/* {isProductionLinksOpen && <ProductionLinks />} */}
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
