"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
export default function Nav() {
  const pathname = usePathname();
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center items-center border-b border-gray-400 ">
      <nav className="text-xs sm:text-sm md:text-base  bg-gray-200 w-full flex justify-between py-2 px-12 sm:px-24 md:px-32 lg:px-48 xl:px-48 landscape:px-16">
        <ul className="flex space-x-6 items-center">
          <li>
            {pathname === "/" ? (
              <Image
                src="/charles-full.jpg"
                alt="Home"
                width={32}
                height={32}
                className="h-8 w-auto mix-blend-multiply mr-4"
              />
            ) : (
              <a href="/" className="text-gray-600 hover:underline">
                <Image
                  src="/charles-full.jpg"
                  alt="Home"
                  width={32}
                  height={32}
                  className="h-8 w-auto mix-blend-multiply"
                />
              </a>
            )}
          </li>
        </ul>
        <ul className="flex space-x-6 items-center">
          <li>
            {pathname === "/explore" ? (
              <span className="font-bold text-gray-900">Explore Show</span>
            ) : (
              <a href="/explore" className="text-gray-600 hover:underline">
                Explore Show
              </a>
            )}
          </li>
          <li>
            {pathname === "/artist" ? (
              <span className="font-bold text-gray-900">Meet Artist</span>
            ) : (
              <a href="/artist" className="text-gray-600 hover:underline">
                Meet Artist
              </a>
            )}
          </li>
          <li>
            {pathname === "/performances" ? (
              <span className="font-bold text-gray-900">
                Choose Performances
              </span>
            ) : (
              <a href="/performances" className="text-gray-600 hover:underline">
                Choose Performances
              </a>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
