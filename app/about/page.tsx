import { KnowledgeList } from "./KnowledgeList";
import { Timeline } from "./Timeline";
import NextImage from "next/image";

export default function About() {
  return (
    <div className="text-left divide-y divide-neutral-400 flex flex-col gap-y-6">

      <div className="flex justify-between items-center">
        <div className="w-6/12">
          <h1 className="text-2xl font-semibold mb-4 text-neutral-50">About Me</h1>
          <p className="text-lg mb-4 text-neutral-100">
            Hello! I&apos;m a passionate developer and system administrator based in the vibrant city of Gothenburg, Sweden. With a keen interest in technology and innovation, I&apos;ve dedicated myself to exploring the depths of software development and system architecture.
          </p>
          <p className="text-lg mb-4 text-neutral-100">
            My journey in the tech industry has been a blend of curiosity, learning, and overcoming challenges. From crafting dynamic web applications to optimizing robust systems, I&apos;ve navigated through various facets of technology to enhance my skills and contribute meaningful solutions.
          </p>
          <p className="text-lg text-neutral-100">
            Beyond my professional endeavors, I find joy in sharing knowledge, collaborating with fellow tech enthusiasts, and staying updated with the latest trends in technology. Below, you can discover the technologies and tools that I&apos;ve become proficient in over the years, as well as roles that I&apos;ve undertaken in my career.
          </p>
        </div>

        <div className="mx-auto">
          <NextImage
            src={"/about_me.webp"}
            alt={`about me`}
            width={380}
            height={380}
            quality={40}
            className="rounded-full"
          />
        </div>
      </div>

      <div className="mt-8 py-12 flex justify-between gap-x-4">
        <div className="w-6/12">
          <KnowledgeList />
        </div>

        <div className="w-6/12 mt-4">
          <Timeline />
        </div>

      </div >
    </div >
  );
}
