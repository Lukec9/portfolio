import Link from "next/link";
import Nav from "./nav";
import { Button } from "./ui/button";
import MobileNav from "./mobile-nav";

export default function Header() {
  return (
    <header className="py-8 text-white xl:py-12">
      <div className="container flex items-center justify-between mx-auto">
        {/* logo */}
        <Link href={"/"}>
          <h1 className="text-4xl font-semibold">
            Luka <span className="text-accent">.</span>
          </h1>
        </Link>
        {/* desktop nav*/}
        <div className="items-center hidden gap-8 xl:flex">
          <Nav />
          <Link href={"/contact"}>
            <Button>Hire me</Button>
          </Link>
        </div>
        {/* mobile nav*/}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
