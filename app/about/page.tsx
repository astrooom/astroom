import { KnowledgeList } from "./KnowledgeList";
import { Timeline } from "./Timeline";
import Image from "next/image";

export default function About() {
  const getAge = () => {
    const birthDate = new Date("2000-11-30");
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    const month = currentDate.getMonth() - birthDate.getMonth();
    return month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate()) ? age - 1 : age;
  };

  const highlights = [
    "🚀 DevOps Engineer & Full-Stack Developer",
    "🌍 Based in Gothenburg, Sweden",
    "📱 +46707228827 | olle.ljung@gmail.com",
    "🏗️ Founding Lead Architect at UltraServers",
    "🎓 Bachelor's in Informatics from University of Gothenburg",
    "🏢 CEO of AB Buddleja - Technical Operations Consultancy",
    "📚 Passionate about continuous learning and innovation"
  ];

  return (
    <div className="max-w-5xl mx-auto px-9 py-12 bg-gradient-to-b from-gray-900 to-black text-white rounded-md">
      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-6 text-blue-300">About Me</h1>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="md:w-2/3">
            <div className="text-xl mb-6 leading-relaxed">
              Hey there! 👋 I&apos;m Olle, a {getAge()}-year-old results-driven DevOps Engineer and Full-Stack Developer from Gothenburg, Sweden.
            </div>
            <div className="text-lg mb-6 leading-relaxed text-gray-300">
              With deep experience in building and maintaining scalable, high-performance infrastructure for web applications and game hosting platforms, I specialize in automation, containerization, and system optimization to deliver reliable, efficient, and secure deployments.
            </div>
            <div className="text-lg mb-6 leading-relaxed text-gray-300">
              I have a proven track record of leading technical operations from the ground up, ensuring stability in fast-paced, high-demand environments. I&apos;m passionate about continuous learning and always excited to explore new tools, technologies, and best practices within the DevOps and infrastructure domain.
            </div>
            <ul className="space-y-3">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-center text-lg">
                  <span className="text-blue-300">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <Image
              src="/astroom_main_transparent.png"
              alt="Olle Ljung"
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