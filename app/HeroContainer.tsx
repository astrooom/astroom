"use client";

import { TypewriterEffectSmooth, Boxes } from "@components/ui";

export function HeroContainer() {

  const helloWords = [
    {
      text: "Hello,",
      className: "text-white"
    },
    {
      text: "I'm",
      className: "text-white"
    },
    {
      text: "astroom.",
      className: "text-blue-500",
    }
  ];


  return (
    <div className="flex flex-col items-center justify-center h-[40rem]">
      {/* <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" /> */}

      {/* <Boxes /> */}
      <TypewriterEffectSmooth words={helloWords} className="z-20" />
      {/* <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base my-2">
        Developer | Designer | Creator | System Engineer
      </p> */}
      {/* <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 z-20">

        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div> */}
    </div>
  );
}
