import { FaDocker, FaPython, FaJsSquare, FaReact, FaHtml5, FaPhp, FaGitAlt } from 'react-icons/fa'; // Import icons
import { SiVercel, SiMysql, SiRedis, SiFlask, SiNextdotjs, SiLaravel, SiTraefikproxy, SiGithub, SiGunicorn, SiCelery, SiOpenai, SiSocketdotio, SiGo, SiTypescript, SiVuedotjs, SiNuxtdotjs, SiFlutter, SiJquery, SiAnsible, SiNginx, SiTailwindcss, SiGithubactions, SiGnubash } from "react-icons/si";

export function KnowledgeList() {

  const skills = {
    "Programming Languages": [
      { id: 'html', name: 'HTML', icon: <FaHtml5 /> },
      { id: 'js', name: 'JavaScript', icon: <FaJsSquare /> },
      { id: 'ts', name: 'TypeScript', icon: <SiTypescript /> },
      { id: 'python', name: 'Python', icon: <FaPython /> },
      { id: 'php', name: 'PHP', icon: <FaPhp /> },
      { id: 'sql', name: 'SQL', icon: <SiMysql /> },
      { id: 'go', name: 'Go', icon: <SiGo /> },
      { id: 'bash', name: 'Bash', icon: <SiGnubash /> },
    ],
    "Frameworks": [
      { id: 'react', name: 'React', icon: <FaReact /> },
      { id: "nextjs", name: "Next.js", icon: <SiNextdotjs /> },
      { id: 'laravel', name: 'Laravel', icon: <SiLaravel /> },
      { id: 'flask', name: 'Flask', icon: <SiFlask /> },
      { id: 'vuejs', name: 'Vue.js', icon: <SiVuedotjs /> },
      { id: 'nuxtjs', name: 'Nuxt.js', icon: <SiNuxtdotjs /> },
      { id: 'flutter', name: 'Flutter', icon: <SiFlutter /> },
      { id: 'jquery', name: 'jQuery', icon: <SiJquery /> },
    ],
    "Tools / Software": [
      { id: 'docker', name: 'Docker', icon: <FaDocker /> },
      { id: 'ansible', name: 'Ansible', icon: <SiAnsible /> },
      { id: 'redis', name: 'Redis', icon: <SiRedis /> },
      { id: 'traefik', name: 'Traefik', icon: <SiTraefikproxy /> },
      { id: 'gunicorn', name: 'Gunicorn', icon: <SiGunicorn /> },
      { id: 'celery', name: 'Celery', icon: <SiCelery /> },
      { id: 'websockets', name: 'Websockets', icon: <SiSocketdotio /> },
      { id: 'git', name: 'Git', icon: <FaGitAlt /> },
      { id: 'githubactions', name: 'GitHub Actions', icon: <SiGithubactions /> },
      { id: 'openai', name: 'OpenAI', icon: <SiOpenai /> },
      { id: 'nginx', name: 'Nginx', icon: <SiNginx /> },
      { id: 'tailwind', name: 'Tailwind', icon: <SiTailwindcss /> },
    ],
    "Cloud / Platforms": [
      { id: 'github', name: 'GitHub', icon: <SiGithub /> },
      { id: "vercel", name: "Vercel", icon: <SiVercel /> },
    ],
    "Techniques / Solutions": [
      { id: 'loadbalancing', name: 'Load Balancing', icon: null },
      { id: 'cicd', name: 'CI/CD Pipelines', icon: null },
      { id: 'scrum', name: 'Scrum', icon: null },
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
