"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProductionLinks() {
  const pathname = usePathname();

  const links = [
    {
      href: "/production/program",
      label: "Digital Program",
    },
    {
      href: "/production/photos_publicity",
      label: "Publicity Photos",
    },
    {
      href: "/production/photos_performance",
      label: "Performance Photos",
    },
    {
      href: "/production/reviews",
      label: "Press Reviews",
    },
  ];

  return (
    <div className="flex flex-row justify-center items-center gap-4 sm:gap-8 py-4 bg-black w-full h-fit border-b border-neutral-200/20 px-8">
      {links.map((link) => {
        const isCurrentPage = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`${isCurrentPage ? "pointer-events-none" : ""}`}
          >
            <h2
              className={`text-xs ${
                isCurrentPage
                  ? "text-white"
                  : "text-neutral-400 hover:text-neutral-200 active:underline"
              }`}
            >
              {link.label}
            </h2>
          </Link>
        );
      })}
    </div>
  );
}
