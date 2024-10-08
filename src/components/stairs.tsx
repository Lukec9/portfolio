import { motion } from "framer-motion";

// Define the stair animation using translateY for smoother transitions
const stairAnimation = {
  initial: {
    transform: "translateY(0%)",
  },
  animate: {
    transform: "translateY(100%)",
  },
  exit: {
    transform: "translateY(0%)",
  },
};

// Calculate the reverse index for staggered delay
const reverseIndex = (i: number) => 6 - i;

export default function Stairs() {
  return (
    <div className="relative w-full h-full">
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-full bg-white"
          style={{ left: `${i * 16.66}%`, width: "16.66%" }}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(i) * 0.1,
          }}
        />
      ))}
    </div>
  );
}
