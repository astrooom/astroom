"use client";

import { TypewriterEffectSmooth, Boxes } from "@components/ui";

export function HeroContainer() {

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
      className: "text-neutral-200",
    }
  ];


  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" /> */}

      {/* <Boxes /> */}
      <TypewriterEffectSmooth words={helloWords} />
      <p className="text-neutral-400 text-xs sm:text-base my-2">
        Developer | Creator | System Administrator.
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 my-4">
        <a className="flex items-center justify-center w-40 h-10 rounded-xl bg-white border border-transparent text-black text-sm hover:bg-neutral-200" href="/about">
          About
        </a>
        {/* <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button> */}
      </div>
    </div>
  );
}
