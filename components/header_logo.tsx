"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeaderLogo({ pathname }: { pathname: string }) {
  return (
    <ul className="flex space-x-6 items-center justify-center mr-8">
      {pathname === "/" ? (
        <li>
          <Link
            href="/"
            aria-label="Home"
            scroll={false}
            className="text-neutral-200 flex items-center pointer-events-none"
          >
            <Image
              src="/cdb_logo.avif"
              alt="Home"
              width={200}
              height={32}
              quality={50}
              loading="lazy"
              className={`h-4 w-auto relative z-100 -top-[1px] opacity-90 mix-blend-screen`}
            />
          </Link>
        </li>
      ) : (
        <li>
          <Link
            href="/"
            aria-label="Home"
            title="Home"
            scroll={false}
            className="text-neutral-200 flex items-center focus:outline-none focus:border-b-2 focus:border-blue-400"
          >
            <Image
              src="/cdb_logo.avif"
              alt="Home"
              width={200}
              height={32}
              quality={50}
              loading="lazy"
              className="h-4 w-auto relative z-100 -top-[1px] hover:scale-95 transition-all duration-300 opacity-90 mix-blend-screen"
            />
          </Link>
        </li>
      )}
    </ul>
  );
}
