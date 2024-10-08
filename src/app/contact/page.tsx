"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "+1 234 567 890",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "example@example.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    value: "1234 Street Name, City Name, Country Name",
  },
];

export default function Contact() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.4,
          delay: 2.1,
          ease: "easeIn",
        },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-8">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl max-w-4xl">
              <h3 className="text-3xl sm:text-4xl text-accent">
                Let&apos;s Work Together
              </h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
                distinctio officiis fugit laudantium veniam hic voluptatum..
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="First Name" />
                <Input type="text" placeholder="Last Name" />
                <Input type="email" placeholder="Email" />
                <Input type="tel" placeholder="Phone Number" />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Choose a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI/UX Design</SelectItem>
                    <SelectItem value="mst">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea placeholder="Type your message here" className="h-48" />
              {/* button */}
              <Button size="md" type="submit" className="w-full max-w-40">
                Send Message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mbn-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item) => (
                <li key={item.title} className="flex gap-6 items-center mb-4">
                  <div className="w-12 h-12 xl:w-20 xl:h-20 bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <span className="text-[1.875rem]">{item.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className=" text-white/60">{item.title}</h4>
                    <p className="text-xl">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
