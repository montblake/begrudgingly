"use client";

import Link from "next/link";
import { Mail } from "lucide-react";

interface NavLink {
  href: string;
  title: string;
  description: string;
  subLinks: NavLink[];
}

export default function HeaderNavLinks({
  navLinks,
  pathname,
}: {
  navLinks: NavLink[];
  pathname: string;
}) {
  return (
    <div className="hidden md:block ">
      <nav className="flex justify-center items-center gap-4 w-full">
        {navLinks.map((link) => (
          <Link
            href={link.href}
            className={`text-xs lg:text-sm text-neutral-400 hover:text-neutral-300 active:underline focus:border-b-2 focus:border-blue-400 focus:outline-none ${
              pathname === link.href ? "text-neutral-200" : ""
            }`}
            key={link.href}
          >
            {link.title}
          </Link>
        ))}
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
      </nav>
    </div>
  );
}
