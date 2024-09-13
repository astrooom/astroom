import { FaDocker, FaPython, FaJsSquare, FaReact, FaHtml5, FaPhp } from 'react-icons/fa'; // Import icons
import { SiVercel, SiMysql, SiPterodactyl, SiRedis, SiFlask, SiNextdotjs, SiLaravel, SiTraefikproxy, SiGithub, SiGunicorn, SiCelery, SiOpenai, SiSocketdotio } from "react-icons/si";
export function KnowledgeList() {

  const skills = {
    "Programming Languages": [
      { id: 'html', name: 'HTML', icon: <FaHtml5 /> },
      { id: 'js', name: 'JavaScript', icon: <FaJsSquare /> },
      { id: 'python', name: 'Python', icon: <FaPython /> },
      { id: 'php', name: 'PHP', icon: <FaPhp /> },
    ],
    "Frameworks": [
      { id: 'react', name: 'React', icon: <FaReact /> },
      { id: "nextjs", name: "Next.js", icon: <SiNextdotjs /> },
      { id: 'flask', name: 'Flask', icon: <SiFlask /> },
      { id: 'laravel', name: 'Laravel', icon: <SiLaravel /> },
    ],
    "Tools": [
      { id: 'docker', name: 'Docker', icon: <FaDocker /> },
      { id: "pterodactyl", name: "Pterodactyl", icon: <SiPterodactyl /> },
      { id: 'sql', name: 'SQL', icon: <SiMysql /> },
      { id: 'redis', name: 'Redis', icon: <SiRedis /> },
      { id: 'traefik', name: 'Traefik', icon: <SiTraefikproxy /> },
      { id: 'gunicorn', name: 'Gunicorn', icon: <SiGunicorn /> },
      { id: 'celery', name: 'Celery', icon: <SiCelery /> },
      { id: 'websockets', name: 'Websockets', icon: <SiSocketdotio /> },
    ],
    "Cloud": [
      { id: 'github', name: 'GitHub', icon: <SiGithub /> },
      { id: "vercel", name: "Vercel", icon: <SiVercel /> },
      { id: 'openai', name: 'OpenAI', icon: <SiOpenai /> },
    ],
  };

  return (
    <div>
      {Object.entries(skills).map(([sectionTitle, skillsList]) => (
        <div key={sectionTitle} className="mb-8">
          <h2 className="text-lg font-semibold mb-4 text-neutral-50">{sectionTitle}</h2>
          <ul className="list-none p-0 flex flex-col gap-y-2.5 text-neutral-100">
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
