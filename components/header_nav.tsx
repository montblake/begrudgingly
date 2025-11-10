"use client";

// import HeaderNavLinks from "./new_header_links";
// import HeaderHamburger from "./header_hamburger";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
const HeaderNavLinks = dynamic(() => import("./new_header_links"));
const HeaderHamburger = dynamic(() => import("./header_hamburger"));

interface NavLink {
  href: string;
  title: string;
  description: string;
  subLinks: NavLink[];
}

export default function HeaderNav({ navLinks }: { navLinks: NavLink[] }) {
  const pathname = usePathname();
  return (
    <div className="flex flex-row items-center justify-center gap-2">
      <HeaderNavLinks navLinks={navLinks} pathname={pathname} />
      <HeaderHamburger navLinks={navLinks} pathname={pathname} />
    </div>
  );
}
