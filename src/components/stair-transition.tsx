"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Stairs from "./stairs";

export default function StairTransition() {
  const pathname = usePathname();

  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="fixed top-0 left-0 right-0 z-40 flex w-screen h-screen pointer-events-none ">
            <Stairs />
          </div>

          <motion.div
            key={pathname}
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: {
                delay: 1,
                duration: 0.4,
                ease: "easeInOut",
              },
            }}
            className="w-screen h-screen fixed top-0 bg-primary pointer-events-none"
          />
        </div>
      </AnimatePresence>
    </>
  );
}
