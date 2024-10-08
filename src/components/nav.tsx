"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, i) => (
        <Link
          className={`
            ${
              pathname === link.path ? "text-accent border-b-2 border-accent" : ""
            } capitalize font-medium hover:text-accent transition-all`}
          href={link.path}
          key={i}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
