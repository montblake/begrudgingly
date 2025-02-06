"use client";

import Image from "next/image";
import Tooltip from "@mui/material/Tooltip";

export default function HeaderLogo({ pathname }: { pathname: string }) {
  return (
    <ul className="flex space-x-6 items-center justify-center mr-8">
      {pathname === "/" ? (
        <li>
          <Image
            src="/cdb_logo.png"
            alt="Home"
            width={200}
            height={32}
            priority
            className="h-5 w-auto relative z-100 -top-[1px] opacity-90 mix-blend-screen"
          />
        </li>
      ) : (
        <li>
          <Tooltip title="Home" arrow>
            <a
              href="/"
              className="text-neutral-200 flex items-center focus:outline-none focus:border-b-2 focus:border-blue-400"
            >
              <Image
                src="/cdb_logo.png"
                alt="Home"
                width={200}
                height={32}
                priority
                className="h-5 w-auto relative z-100 -top-[1px] hover:scale-95 transition-all duration-300 opacity-90 mix-blend-screen"
              />
            </a>
          </Tooltip>
        </li>
      )}
    </ul>
  );
}
