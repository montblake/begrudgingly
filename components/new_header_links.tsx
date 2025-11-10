"use client";
import { forwardRef } from "react";
import Link from "next/link";

import { Mail } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList className="gap-1 md:gap-4 lg:gap-4 xl:gap-6">
        {navLinks.map((link) => (
          <NavigationMenuItem key={link.title}>
            {link.subLinks.length > 0 ? (
              <MenuItemWithSubLinks
                title={link.title}
                subLinks={link.subLinks}
                pathname={pathname}
              />
            ) : (
              <MenuItem
                href={link.href}
                title={link.title}
                pathname={pathname}
              />
            )}
          </NavigationMenuItem>
        ))}
        <a
          href="http://eepurl.com/i2jCO2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-8 h-8 rounded-full flex flex-col items-center justify-center gap-1 bg-gradient-to-b from-amber-400/80 via-amber-500/80 to-amber-600/80 border-2 border-black hover:scale-105 transition-all duration-300 active:border-neutral-300 text-neutral-950 active:text-neutral-300">
            <Mail size={12} className="" />
          </div>
        </a>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function MenuItem({
  href,
  title,
  pathname,
}: {
  href: string;
  title: string;
  pathname: string;
}) {
  return (
    <div className="flex justify-center items-center">
      {pathname !== href ? (
        <Link
          href={href}
          prefetch={false}
          scroll={false}
          className={`text-xs xl:text-sm text-neutral-400 hover:text-neutral-300 active:underline focus:border-b-2 focus:border-blue-400 focus:outline-none`}
        >
          {title}
        </Link>
      ) : (
        <p className="text-xs xl:text-sm text-neutral-200">{title}</p>
      )}
    </div>
  );
}

function MenuItemWithSubLinks({
  title,
  subLinks,
  pathname,
}: {
  title: string;
  subLinks: NavLink[];
  pathname: string;
}) {
  return (
    <>
      <NavigationMenuTrigger className="group inline-flex w-max items-center justify-center rounded bg-none text-xs xl:text-sm text-neutral-400 font-medium transition-colors hover:text-neutral-200 focus:border-b-2 focus:border-blue-500 focus:outline-none disabled:pointer-events-none disabled:opacity-50 relative flex justify-center items-center">
        {title}
      </NavigationMenuTrigger>
      <NavigationMenuContent className="">
        <div className="w-[410px] lg:w-[540px] grid grid-cols-2 p-8 bg-neutral-800 gap-4 lg:gap-8 rounded-xl">
          <div className="flex flex-col justify-between">
            <p className="text-base text-neutral-200">
              Charles Dickens
              <br /> Begrudgingly Performs
              <br />
              <span className="italic">A Christmas Carol</span>
              <br /> Again
            </p>
            <div className="flex flex-col gap-2 text-xs text-neutral-200">
              <p>
                Created and performed by
                <br /> Blake Montgomery
              </p>
              <p>
                Produced by <br />
                Blake Montgomery / CLOWNSHOW
              </p>
              <p>
                December 5-22, 2024
                <br />
                The Den Theatre in Chicago.
              </p>
            </div>
          </div>

          <ul className="flex flex-col gap-4">
            {subLinks?.map((link) => (
              <SubMenuItem
                key={link.title}
                title={link.title}
                href={link.href}
                description={link.description}
                pathname={pathname}
              />
            ))}
          </ul>
        </div>
      </NavigationMenuContent>
    </>
  );
}

function SubMenuItem({
  href,
  title,
  description,
  pathname,
}: {
  href: string;
  title: string;
  description: string;
  pathname: string;
}) {
  return (
    <Link
      href={href}
      scroll={false}
      prefetch={false}
      className={`w-full flex flex-col gap-0 p-4 rounded-xl border border-neutral-700 ${
        pathname === href
          ? "bg-neutral-200"
          : "bg-gradient-to-br from-yellow-200/75 to-yellow-900/75 hover:bg-neutral-300 active:scale-95 transition-all duration-300"
      }`}
    >
      <p className="text-neutral-950 font-bold text-sm">{title}</p>

      <p className="text-neutral-800 text-xs">{description}</p>
    </Link>
  );
}

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          "block text-xs xl:text-sm text-neutral-300 select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-neutral-200 active:underline focus:text-white",
          className
        )}
        {...props}
      >
        <div className="text-xs xl:text-sm font-medium leading-none">
          {title}
        </div>
        <p className="line-clamp-2 text-sm leading-snug text-neutral-400">
          {children}
        </p>
      </a>
    </NavigationMenuLink>
  );
});
ListItem.displayName = "ListItem";
