"use client";

import HeaderNavLinks from "./new_header_links";
import HeaderHamburger from "./header_hamburger";
import { usePathname } from "next/navigation";

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
