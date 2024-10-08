"use client";

import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

import LnWorld from "@/public/work/thumb1.png";
import TodoApp from "@/public/work/thumb2.png";
import ChatApp from "@/public/work/thumb3.png";
import ThreadsApp from "@/public/work/thumb4.png";

import { useState } from "react";

const projects = [
  {
    number: "01",
    category: "Fullstack",
    title: "Light Novel World",
    description:
      "A platform to read and share light novels. Built with a modern tech stack to ensure a smooth and engaging user experience.",
    stack: [
      { name: "JavaScript" },
      { name: "MongoDB" },
      { name: "Express" },
      { name: "React" },
      { name: "Node.js" },
    ],
    image: LnWorld,
    live: "https://lnworld-clone.onrender.com/",
    github: "https://github.com/Lukec9/LightNovelWorld-Clone",
  },
  {
    number: "02",
    category: "Fullstack",
    title: "Todo App",
    description:
      "A simple and efficient todo application to manage your daily tasks. Features include task creation, editing, deletion and much more.",
    stack: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "React" },
      { name: "Next.js" },
    ],
    image: TodoApp,
    live: "https://todo-app-81lx.onrender.com/",
    github: "https://github.com/Lukec9/todo-app",
  },
  {
    number: "03",
    category: "Fullstack",
    title: "Chat App",
    description:
      "A real-time chat application that allows users to communicate instantly. Built with scalability and performance in mind.",
    stack: [
      { name: "React" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "Express" },
      { name: "Socket.IO" },
    ],
    image: ChatApp,
    live: "https://chat-app-415o.onrender.com/",
    github: "https://github.com/Lukec9/chat-app",
  },
  {
    number: "04",
    category: "Fullstack",
    title: "Threads App",
    description:
      "A clone of the popular Threads app, allowing users to post and chat in real-time. Built with a focus on performance and scalability.",
    stack: [
      { name: "React" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "Express" },
      { name: "Socket.IO" },
    ],
    image: ThreadsApp,
    live: "https://threads-clone-zk75.onrender.com/",
    github: "https://github.com/Lukec9/threads-app",
  },
];

export default function Work() {
  const [project, setProject] = useState(projects[0]); // Current project
  const [activeIndex, setActiveIndex] = useState(0); // Active carousel index

  // Function to update project based on active index
  const handleNext = () => {
    const newIndex = (activeIndex + 1) % projects.length; // Loop around at end
    setActiveIndex(newIndex);
    setProject(projects[newIndex]);
  };

  const handlePrevious = () => {
    const newIndex = (activeIndex - 1 + projects.length) % projects.length; // Loop around at beginning
    setActiveIndex(newIndex);
    setProject(projects[newIndex]);
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.2, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-8">
          <div className="w-full xl:w-[50%] xl:max-w-xl xl:h-[28.75rem] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col h-[50%] max-w-xl">
              <div className="text-6xl sm:text-8xl leading-none font-extrabold text-transparent text-outline mb-xs">
                {project.number}
              </div>
              <h2 className="text-2xl sm:text-[2.625rem] font-bold leading-none text-white group-hover:text-accent transition-all duration-300 capitalize mb-s">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-white/50 mb-s">
                {project.category} Project
              </p>
              <p className="text-base sm:text-lg text-white/60 mb-s">
                {project.description}
              </p>
              <ul className="flex gap-2 gap-y-1 sm:gap-4 mb-s flex-wrap">
                {project.stack.map((stack, index) => (
                  <li key={stack.name} className="text-lg sm:text-xl text-accent">
                    {stack.name}
                    {index < project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20 mb-m" />
              <div className="flex items-center gap-2 sm:gap-4">
                <Link target="_blank" href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-2xl sm:text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link target="_blank" href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-2xl sm:text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[60%]">
            <Carousel>
              <CarouselContent>
                {projects.map((project) => (
                  <CarouselItem key={project.number}>
                    <div className="h-[28.75rem] relative group flex justify-center items-center">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full flex justify-center items-center">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover xl:w-auto"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Make better placing */}
              <CarouselPrevious
                className="disabled:opacity-40 left-3 bottom-1/2"
                onClick={handlePrevious}
              />
              <CarouselNext
                className="disabled:opacity-40 right-3 bottom-1/2"
                onClick={handleNext}
              />
            </Carousel>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
