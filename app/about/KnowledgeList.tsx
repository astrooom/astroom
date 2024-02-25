import { FaDocker, FaPython, FaJsSquare, FaReact } from 'react-icons/fa'; // Import icons
import { SiNextdotjs } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { SiVercel } from "react-icons/si";

export function KnowledgeList() {
  const skills = {
    "Programming Languages": [
      { id: 'js', name: 'JavaScript', icon: <FaJsSquare /> },
      { id: 'python', name: 'Python', icon: <FaPython /> },
      // { id: 'react', name: 'React', icon: <FaReact /> },
    ],
    "Frameworks": [
      { id: 'react', name: 'React', icon: <FaReact /> },
      { id: "nextjs", name: "Next.js", icon: <SiNextdotjs /> },
      { id: 'flask', name: 'Flask', icon: <SiFlask /> },
      // Add more frameworks or other sections as needed
    ],
    "Tools": [
      { id: 'docker', name: 'Docker', icon: <FaDocker /> },
      { id: "pterodactyl", name: "Pterodactyl" }
      // Add more tools or other sections as needed
    ],
    "Cloud": [
      { id: "vercel", name: "Vercel", icon: <SiVercel /> },
      // Add more cloud providers or other sections as needed
    ],
  };

  return (
    <div>
      {Object.entries(skills).map(([sectionTitle, skillsList]) => (
        <div key={sectionTitle} className="mb-8">
          <h2 className="text-lg font-semibold mb-4">{sectionTitle}</h2>
          <ul className="list-none p-0 flex flex-col gap-y-2.5">
            {skillsList.map((skill) => (
              <li key={skill.id} className="flex">
                {skill.icon && <span className="mr-2 flex items-center">{skill.icon}</span>}
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
