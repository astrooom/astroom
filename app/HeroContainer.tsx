import { cn } from "@/utils/cn";
import { TypewriterEffectSmooth } from "@components/ui";
import { FaArrowRightLong, FaGithub } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

export function HeroContainer({ className }: { className?: string }) {
  const helloWords = [
    { text: "Hello,", className: "text-blue-300" },
    { text: "I'm", className: "text-blue-300" },
    { text: "astroom.", className: "text-white font-bold" }
  ];

  return (
    <div className={cn("flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4", className)}>
      <div className="relative mb-8">
        <Image
          src="/astroom_main_transparent.png"
          alt="astroom"
          width={220}
          height={220}
          className="rounded-full border-4 border-blue-500 shadow-lg shadow-blue-500/50"
        />
      </div>

      <TypewriterEffectSmooth words={helloWords} className="text-4xl mb-4" />

      <div className="text-blue-300 text-lg mb-8 text-center">
        <span className="inline-block px-2 py-1 rounded-full bg-blue-500/10 backdrop-blur-sm m-1">Web Developer</span>
        <span className="inline-block px-2 py-1 rounded-full bg-purple-500/10 backdrop-blur-sm m-1">System Administrator</span>
        <span className="inline-block px-2 py-1 rounded-full bg-green-500/10 backdrop-blur-sm m-1">Tech Enthusiast</span>
      </div>

      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
        <Link
          className="px-6 py-3 bg-blue-600 text-white rounded-full font-bold transform hover:-translate-y-1 transition duration-300 ease-in-out flex items-center justify-center space-x-2 shadow-lg hover:shadow-blue-500/50"
          href="/about"
        >
          <span>About Me</span>
          <FaArrowRightLong className="inline-block" />
        </Link>
        <Link
          className="px-6 py-3 bg-purple-600 text-white rounded-full font-bold transform hover:-translate-y-1 transition duration-300 ease-in-out flex items-center justify-center space-x-2 shadow-lg hover:shadow-purple-500/50"
          href="/projects"
        >
          <span>Projects</span>
          <FaArrowRightLong className="inline-block" />
        </Link>
      </div>

      <Link
        href="https://github.com/astrooom"
        target="_blank"
        className="z-10 text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
      >
        <FaGithub className="text-3xl" />
      </Link>
    </div>
  );
}