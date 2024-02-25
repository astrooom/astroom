import { KnowledgeList } from "./KnowledgeList";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto text-left divide-y divide-neutral-400 flex flex-col gap-y-6">
      <div>
        <h1 className="text-2xl font-semibold mb-4">About Me</h1>
        <p className="text-lg mb-4">
          Hello! I'm a passionate developer and system administrator based in the vibrant city of Gothenburg, Sweden. With a keen interest in technology and innovation, I've dedicated myself to exploring the depths of software development and system architecture.
        </p>
        <p className="text-lg mb-4">
          My journey in the tech industry has been a blend of curiosity, learning, and overcoming challenges. From crafting dynamic web applications to optimizing robust systems, I've navigated through various facets of technology to enhance my skills and contribute meaningful solutions.
        </p>
        <p className="text-lg">
          Beyond my professional endeavors, I find joy in sharing knowledge, collaborating with fellow tech enthusiasts, and staying updated with the latest trends in technology. Below, you can discover the technologies and tools that I've become proficient in over the years.
        </p>
      </div>

      <div className="py-4">
        <KnowledgeList />
      </div>
    </div>
  );
}
