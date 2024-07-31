"use client";

import { cn } from "@/utils/cn";
import { TypewriterEffectSmooth, Boxes } from "@components/ui";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import NextImage from "next/image";
export function HeroContainer({ className }: Readonly<{ className?: string; }>) {

  const helloWords = [
    {
      text: "Hello,",
      className: "text-neutral-400"
    },
    {
      text: "I'm",
      className: "text-neutral-400"
    },
    {
      text: "astroom.",
      className: "text-neutral-100",
    }
  ];


  return (
    <div className={cn("flex flex-col items-center justify-center h-screen", className)}>
      {/* <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" /> */}

      {/* <Boxes /> */}
      
      <NextImage src="/astroom_main_transparent.png" alt="astroom" width={196} height={196} />

      <TypewriterEffectSmooth words={helloWords} />

      <p className="text-neutral-400 text-xs sm:text-base my-2">
        Web Developer | System Administrator.
      </p>

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 my-4">
        <Link className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400" href="/about">
          About Me <FaArrowRightLong className="inline-block" />
        </Link>

        <Link className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400" href="/projects">
          Projects <FaArrowRightLong className="inline-block" />
        </Link>
      </div>
    </div >

  );
}
