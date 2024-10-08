"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Web Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "/contact",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "/contact",
  },
  {
    number: "03",
    title: "Logo Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "/contact",
  },
  {
    number: "04",
    title: "SEO Optimization",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "/contact",
  },
];

export default function Services() {
  return (
    <main>
      <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 xl:pb-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.15, ease: "easeIn" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-[3.75rem]"
          >
            <article className="w-full flex flex-col justify-between gap-6 group h-full bg-gradient-to-r from-accent/90 to-accent/70 p-6 rounded-lg shadow-lg transform transition-transform duration-500 xl:hover:scale-[1.02] col-span-2 max-xl:hover:scale-95">
              <header className="w-full flex gap-x-m items-center">
                <Link
                  target="_blank"
                  href="https://e-tomic.hr"
                  className="w-16 h-16 rounded-full bg-white group-hover:bg-accent transition-all duration-300 flex justify-center items-center hover:-rotate-45 order-2"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>

                <h2 className="text-[2.625rem] font-bold leading-none text-white group-hover:text-white/80 transition-all duration-500 order-1">
                  My Dad&apos;s Portfolio
                </h2>
              </header>
              <p className="text-white">
                Check out my dad&apos;s amazing work at e-tomic.hr.
              </p>
              <div className="border-b border-white/20 w-full"></div>
            </article>
            {services.map((service, index) => (
              <article
                key={index}
                className="flex-1 flex flex-col justify-between gap-6 group h-full"
              >
                <header className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-300">
                    {service.number}
                  </div>
                  <Link
                    href={service.href || "/"}
                    className="w-16 h-16 rounded-full bg-white group-hover:bg-accent transition-all duration-300 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </header>

                <h2 className="text-[2.625rem] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </article>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}

{
  /*Copilot suggestion, pretty good!
   <section className="container mx-auto">
    <h2 className="text-3xl font-bold text-center text-white">Our Services</h2>
    <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-4">
      {services.map((service, index) => (
        <motion.div
          key={index}
          className="p-6 bg-white shadow-lg rounded-lg"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center justify-center w-12 h-12 text-white bg-accent rounded-full">
            {service.number}
          </div>
          <h3 className="mt-4 text-xl font-semibold text-gray-800">
            {service.title}
          </h3>
          <p className="mt-2 text-gray-600">{service.description}</p>
          <Link
            href={service.href || "/"}
            className="flex items-center mt-4 text-accent hover:text-accent-hover"
          >
            Learn more <BsArrowDownRight className="ml-2" />
          </Link>
        </motion.div>
      ))}
    </div>
  </section> */
}
