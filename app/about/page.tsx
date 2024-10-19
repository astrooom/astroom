
import { KnowledgeList } from "./KnowledgeList";
import { Timeline } from "./Timeline";
import Image from "next/image";

export default function About() {
  const getAge = () => {
    const birthDate = new Date("2000-11-30");
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    const month = currentDate.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate())) {
      return age - 1;
    }
    return age;
  };

  return (
    <div className="max-w-5xl mx-auto px-9 py-12 bg-gradient-to-b from-gray-900 to-black text-white rounded-md">
      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-6 text-blue-300">About Me</h1>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="md:w-2/3">
            <p className="text-lg mb-4 leading-relaxed">
              Hey there! I&apos;m a {getAge()}-year-old developer and system admin from Gothenburg, Sweden. I love working with technology and solving complex problems.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              My experience covers web development, system administration, and everything in between. I enjoy learning new technologies and applying them to create efficient solutions.
            </p>
            <p className="text-lg leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring new tech trends, contributing to open-source projects, or sharing knowledge with fellow developers.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <Image
              src="/astroom_main_transparent.png"
              alt="About me"
              width={300}
              height={300}
              quality={80}
              className="rounded-full border-4 border-blue-500 shadow-lg shadow-blue-500/50"
            />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-blue-300">Skills & Technologies</h2>
          <KnowledgeList />
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-blue-300">Career Timeline</h2>
          <Timeline />
        </div>
      </div>
    </div>
  );
}