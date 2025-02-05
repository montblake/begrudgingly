"use client";

import * as React from "react";
import Link from "next/link";

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
  subLinks?: NavLink[];
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
      <NavigationMenuList className="gap-1 lg:gap-4 xl:gap-6">
        {navLinks.map((link) => (
          <NavigationMenuItem key={link.title}>
            {link.subLinks ? (
              <MenuItemWithSubLinks
                title={link.title}
                subLinks={link.subLinks}
                pathname={pathname}
              />
            ) : (
              // <div className="">
              //   <NavigationMenuTrigger className="focus:text-neutral-200 relative -top-1">
              //     In Production
              //   </NavigationMenuTrigger>
              //   <NavigationMenuContent className="">
              //     <div className="bg-neutral-200 grid grid-cols-2 gap-6 p-6 md:w-[500px] lg:w-[600px]">
              //       <div className="flex flex-col justify-between">
              //         <h1 className="text-xl font-bold">
              //           Charles Dickens Begrudgingly Performs 'A Christmas
              //           Carol' Again
              //         </h1>
              //         <div className="flex flex-col gap-2">
              //           <p className="text-sm leading-tight text-muted-foreground">
              //             Created and performed by Blake Montgomery.
              //           </p>
              //           <p className="text-sm leading-tight text-muted-foreground">
              //             Produced by Blake Montgomery / CLOWNSHOW.
              //           </p>
              //           <p className="text-sm leading-tight text-muted-foreground">
              //             Performed at The Den Theatre in Chicago.
              //           </p>
              //           <p className="text-sm leading-tight text-muted-foreground">
              //             December 5-22, 2024.
              //           </p>
              //         </div>
              //       </div>
              //       <div className="flex flex-col gap-2">
              //         {link.subLinks.map((subLink) => (
              //           <div key={subLink.href} className="bg-neutral-900">
              //             <ListItem href={subLink.href} title={subLink.title}>
              //               {subLink.description}
              //             </ListItem>
              //           </div>
              //         ))}
              //       </div>
              //     </div>
              //   </NavigationMenuContent>
              // </div>
              <MenuItem
                href={link.href}
                title={link.title}
                pathname={pathname}
              />
              // <ListItem href={link.href} title={link.title} />
            )}
          </NavigationMenuItem>
        ))}
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
    <>
      {pathname !== href ? (
        <Link
          href={href}
          className={`text-xs lg:text-sm text-neutral-400 hover:text-neutral-300 active:underline focus:border-b-2 focus:border-blue-400 focus:outline-none`}
        >
          {title}
        </Link>
      ) : (
        <p className="text-xs lg:text-sm text-neutral-200">{title}</p>
      )}
    </>
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
      <NavigationMenuTrigger className="group inline-flex w-max items-center justify-center rounded bg-none text-xs lg:text-sm text-neutral-400 font-medium transition-colors hover:text-neutral-200 focus:border-b-2 focus:border-blue-500 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
        {title}
      </NavigationMenuTrigger>
      <NavigationMenuContent className="">
        <div className="w-[500px] grid grid-cols-2 p-8 bg-neutral-800 gap-8 rounded-xl">
          <div className="flex flex-col justify-between">
            <p className="text-base text-neutral-200">
              Charles Dickens Begrudgingly Performs{" "}
              <span className="italic">A Christmas Carol</span> Again
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
      className={`w-full flex flex-col gap-1 p-4 rounded-xl border border-neutral-700 ${
        pathname === href
          ? "bg-neutral-100"
          : "bg-neutral-400 hover:bg-neutral-300 active:scale-95 transition-all duration-300"
      }`}
    >
      <p className="text-neutral-950 text-sm">{title}</p>
      <p className="text-neutral-800 text-xs">{description}</p>
    </Link>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          "block text-xs lg:text-sm text-neutral-300 select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-neutral-200 active:underline focus:text-white",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-neutral-400">
          {children}
        </p>
      </a>
    </NavigationMenuLink>
  );
});
ListItem.displayName = "ListItem";
