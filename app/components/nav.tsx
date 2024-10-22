"use client";

import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center items-center border-b border-gray-400">
      <nav className="text-xs sm:text-sm md:text-base  bg-gray-200 w-full flex justify-center p-2">
        <ul className="flex space-x-4">
          <li>
            {pathname === "/" ? (
              <span className="font-bold text-gray-900">Home</span>
            ) : (
              <a href="/" className="text-gray-600 hover:underline">
                Home
              </a>
            )}
          </li>
          <li>
            {pathname === "/explore" ? (
              <span className="font-bold text-gray-900">Explore</span>
            ) : (
              <a href="/explore" className="text-gray-600 hover:underline">
                Explore
              </a>
            )}
          </li>
          <li>
            {pathname === "/artist" ? (
              <span className="font-bold text-gray-900">Artist</span>
            ) : (
              <a href="/artist" className="text-gray-600 hover:underline">
                Artist
              </a>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
