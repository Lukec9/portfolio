"use client";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { usePathname } from "next/navigation";
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-[2rem] text-accent" />
      </SheetTrigger>
      <SheetContent
        aria-describedby="Navigation Menu"
        className="flex flex-col items-center justify-center"
      >
        <VisuallyHidden>
          <SheetTitle>Navigation Menu</SheetTitle>
        </VisuallyHidden>
        <div className="mt-32 text-2xl text-center mb-m">
          <Link href="/">
            <h2 className="text-4xl font-semibold">
              Luka <span className="text-accent">.</span>
            </h2>
          </Link>
        </div>
        <nav className="flex flex-col items-center justify-center gap-8 mt-auto mb-auto">
          {links.map((link, i) => (
            <Link
              className={`
                ${
                  pathname === link.path
                    ? "text-accent border-b-2 border-accent"
                    : ""
                } capitalize font-medium hover:text-accent transition-all text-xl`}
              href={link.path}
              key={i}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
