import Socials from "@/components/socials";
import Stats from "@/components/stats";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-full">
      <section className="h-full mt-8 flex flex-col justify-center items-center">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center xl:flex-row xl:pt-8 xl:pb-24">
            <div className="text-center">
              <span className="text-xl text-white/85">Web Developer</span>
              <h1 className="mb-s h1">
                Hello I&apos;m <br />{" "}
                <span className="text-accent">Luka Tomi&#263;</span>
              </h1>
              <p className="max-w-[35rem] mb-9 text-white/80">
                I excel at crafting elegant digital experiences and I am proficient
                in various programming languages and technologies.
              </p>

              <div className="flex flex-col items-center gap-8 xl:flex-row justify-center">
                <Link href="/resume">
                  <Button
                    variant={"outline"}
                    size={"lg"}
                    className="flex gap-2 uppercase items-center transition-colors"
                  >
                    <span>Find out more</span>
                  </Button>
                </Link>
                <div className="mb-8 xl:mb-0">
                  <Socials
                    containerStyles="flex gap-6 "
                    iconsStyles="w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Stats />
      </section>
    </main>
  );
}
