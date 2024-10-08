"use client";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// about data

const about = {
  title: "About Me",
  description:
    "I am a passionate and dedicated individual with a strong interest in web development and design. With over a year of experience, I have honed my skills in various technologies and tools. I am always eager to learn and take on new challenges to further enhance my abilities.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Luka Tomić",
    },
    {
      fieldName: "Phone",
      fieldValue: "+1234567890",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ Years",
    },
    {
      fieldName: "Age",
      fieldValue: "15",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Croatian",
    },
    {
      fieldName: "Email",
      fieldValue: "example@example.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Croatian, English, German",
    },
  ],
};

// experience data

// const experience = {
//   icon: "",
//   title: "My Experience",
//   description:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien",
//   items: [
//     {
//       position: "Frontend Developer",
//       duration: "2021 - Present",
//       company: "Company Name",
//     },
//     {
//       position: "UI/UX Designer",
//       duration: "2020 - 2021",
//       company: "Company Name",
//     },
//     {
//       position: "Web Developer",
//       duration: "2019 - 2020",
//       company: "Company Name",
//     },
//     {
//       position: "Intern Developer",
//       duration: "2018 - 2019",
//       company: "Company Name",
//     },
//   ],
// };

// education data
const education = {
  icon: "",
  title: "My Education",
  description:
    "Throughout my educational journey, I have gained a solid foundation in both academic and practical skills. From high school to specialized online courses, each step has contributed to my growth and development.",
  items: [
    {
      institution: "Antun Horvat Vocational High School",
      degree: "High School Diploma",
      duration: "2024 - Now",
    },
    {
      institution: "Udemy",
      degree: "The Web Developer Bootcamp",
      duration: "Summer 2023",
    },
    {
      institution: "Vladimir Nazor Elementary School",
      degree: "Elementary School Diploma",
      duration: "2016 - 2024",
    },
  ],
};

// skills data
const skills = {
  title: "My Skills",
  description:
    "I have a diverse set of skills, ranging from design to development. My expertise includes both frontend and backend technologies, as well as design tools. Below is a list of some of the key skills I have acquired over the years.",
  skillList: [
    {
      icon: <FaHtml5 />,
      title: "HTML5",
    },
    {
      icon: <FaCss3Alt />,
      title: "CSS3",
    },
    {
      icon: <FaJs />,
      title: "JavaScript",
    },
    {
      icon: <FaReact />,
      title: "React",
    },
    {
      icon: <SiNextdotjs />,
      title: "Next.js",
    },
    {
      icon: <FaNodeJs />,
      title: "Node.js",
    },
    {
      icon: <SiTailwindcss />,
      title: "Tailwind.CSS",
    },
    {
      icon: <FaFigma />,
      title: "Figma",
    },
  ],
};

export default function Resume() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 2.2, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto mb-8">
        <Tabs defaultValue="education" className="flex flex-col xl:flex-row gap-16">
          <TabsList className="flex flex-col w-full max-w-96 mx-auto xl:max-0 gap-6">
            {/* <TabsTrigger value="experience">Experience</TabsTrigger> */}
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full ">
            {/* <TabsContent value="experience" className="w-full">
              <div className="flex flex-col text-center xl:text-left">
                <h3 className="text-4xl font-bold mb-xs">{experience.title}</h3>
                <p className="max-w-[37.5rem] text-white/60 mx-auto xl:mx-0 mb-l">
                  {experience.description}
                </p>
                <ScrollArea className="h-[25rem]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] w-full h-44 py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-64 text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[0.375rem] h-[0.375rem] rounded-full bg-accent"></span>
                          <p>{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent> */}

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col text-center xl:text-left">
                <h3 className="text-4xl font-bold mb-xs">{education.title}</h3>
                <p className="max-w-[37.5rem] 2xl:max-w-[50rem] text-white/60 mx-auto xl:mx-0 mb-xl">
                  {education.description}
                </p>
                <ScrollArea className="h-[25rem] xl:max-w-[40rem] 2xl:max-w-[60rem] ">
                  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-full max-h-52 py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-xs"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl 2xl:max-w-96 text\center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[0.375rem] h-[0.375rem] rounded-full bg-accent"></span>
                          <p>{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col">
                <div className="flex flex-col gap-s mb-l">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[37.5rem] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-8 gap-4">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-36 bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.title}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col  text-center xl:text-left">
                <h3 className="text-4xl font-bold mb-xs">{about.title}</h3>
                <p className="max-w-[37.5rem] text-white/60 mx-auto xl:mx-0 mb-xl">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2  gap-y-6 max-w-[38.75rem] 2xl:max-w-[50rem] mx-auto xl:mx-0 gap-x-2 3xl:gap-x-4">
                  {about.info.map((info, index) => (
                    <li
                      key={index}
                      className="bg-[#232329] h-24 py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-xs"
                    >
                      <span className="text-accent">{info.fieldName}</span>
                      <h3 className="text-xl max-w-64  text-center lg:text-left">
                        {info.fieldValue.includes("ć")
                          ? info.fieldValue.replace(/ć/g, "\u0107")
                          : info.fieldValue}
                      </h3>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.main>
  );
}

{
  /* Copilot Suggestions, pretty good
             <TabsContent value="experience">
            <h2 className="text-3xl font-bold mb-4">{experience.title}</h2>
            <p className="text-gray-500 mb-8">{experience.description}</p>
            <ul>
              {experience.items.map((item, index) => (
                <li key={index} className="mb-8">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-500">{item.date}</p>
                  <p className="text-gray-500 mt-2">{item.description}</p>
                </li>
              ))}
            </ul>
          </TabsContent> */
}
