"use client";

import CountUp from "react-countup";

const stats = [
  {
    number: 15,
    text: "Years Old",
  },
  {
    number: 20,
    text: "Projects Completed",
  },
  {
    number: 8,
    text: "Technologies Mastered",
  },
  {
    number: 200,
    text: "Code Commits",
  },
];

export default function Stats() {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => (
            <div
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              key={index}
            >
              <CountUp
                className="text-4xl xl:text-6xl font-extrabold"
                end={stat.number}
                duration={5}
                delay={2.15}
              />
              <p
                className={`${
                  stat.text.length < 15 ? "max-w-24" : "max-w-36"
                } leading-snug text-white/80`}
              >
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
