/**
 * All site content lives here. Components only render it.
 */

export const profile = {
  name: "astroom",
  alias: "astroom",
  title: "System Administrator & Full-Stack Developer",
  location: "Gothenburg, Sweden",
  email: "contact@buddleja.co",
  phone: "+46707228827",
  website: "https://astroom.dev",
  github: "https://github.com/astrooom",
  x: "https://x.com/astroomdev",
  xHandle: "@astroomdev",
  discord: "astroom",
  company: {
    name: "AB Buddleja",
    description: "Technical Operations Consultancy",
  },
  summary: [
    "Results-driven DevOps Engineer and Full-Stack Developer with deep experience in building and maintaining scalable, high-performance infrastructure for web applications and game hosting platforms. I specialize in automation, containerization, and system optimization to deliver reliable, efficient, and secure deployments.",
    "Proven history of leading technical operations from the ground up, ensuring stability in fast-paced, high-demand environments. Successfully built systems supporting thousands of concurrent users.",
    "Passionate about continuous learning and always excited to explore new tools, technologies, and best practices within the DevOps and infrastructure domain.",
  ],
  competencies: [
    "Automation & Containerization",
    "System Optimization & Performance Tuning",
    "Reliable, Efficient & Secure Deployments",
    "Technical Operations Leadership",
  ],
};

export type Entry = {
  title: string;
  org: string;
  url?: string;
  logo?: string;
  period: string;
  description: string;
  bullets?: string[];
  stack?: string;
};

export const experience: Entry[] = [
  {
    title: "Technical Operations Manager",
    org: "Dokibird",
    url: "https://www.youtube.com/@Dokibird",
    logo: "/dokibird-logo.jpg",
    period: "June 2025 – Present",
    description:
      "Managing end-to-end technical infrastructure and operational efficiency for globally recognized content creator Dokibird (85M+ YouTube views, 200K+ followers on Twitch). Ensuring seamless streaming operations and technical excellence.",
    bullets: [
      "Managing complete technical infrastructure stack",
      "Optimizing streaming and content creation workflows",
      "Ensuring 99.9% uptime for critical streaming operations",
      "Implementing automation for operational efficiency",
    ],
  },
  {
    title: "CEO",
    org: "AB Buddleja",
    logo: "/ab-buddleja.png",
    period: "October 2022 – Present",
    description:
      "As a self-employed professional operating through my own limited company, I provide specialized technical operations services to a diverse portfolio of clients, focusing on delivering high-impact solutions and driving operational excellence.",
    bullets: [
      "Managing the company operations (accounting, filing taxes, business development)",
      "Providing technical operations consultancy services",
      "Delivering high-quality solutions to meet diverse client needs",
      "Building long-term client relationships",
    ],
  },
  {
    title: "Founding Lead Architect & Developer",
    org: "UltraServers",
    url: "https://ultraservers.com",
    logo: "/ultraservers_logo_transparent.png",
    period: "July 2022 – Present",
    description:
      "As a foundational member from UltraServers' inception, pioneered the development of a high-performance game hosting service, laying the groundwork for its significant growth and success in supporting thousands of concurrent users and a rapidly expanding global community.",
    bullets: [
      "Engineering robust infrastructure designed to exceed industry standards",
      "Providing technical leadership in platform development",
      "Driving innovation and optimizing complex systems for peak performance",
      "Maintaining high code quality standards and scalability",
      "Full-stack development in Next.js, Python, PHP and SQL",
    ],
  },
  {
    title: "Full-Stack Developer (part-time)",
    org: "Pine Hosting",
    url: "https://pinehosting.com",
    logo: "/pine-hosting-logo.png",
    period: "April 2022 – January 2023",
    description:
      "Drove new feature development for Pine Hosting's game server solution during a key growth phase. Delivered commissioned enhancements that expanded core functionality and significantly elevated the game panel's user experience, contributing to their notable growth and market presence.",
    bullets: [
      "Full-stack development of game server management features",
      "Enhancing user experience and interface design",
      "Implementing new functionality during company growth phase",
    ],
  },
  {
    title: "Lead Game Server Engineer",
    org: "365Hosts",
    url: "https://365hosts.com",
    logo: "/365hosts.png",
    period: "June 2021 – August 2023",
    description:
      "Engineered and oversaw the complete lifecycle of 365Hosts' game server hosting division, from initial development to ongoing management. My role involved establishing and scaling the specialized infrastructure required to cater directly to hundreds of individual gamers and their diverse communities across a robust server fleet.",
    bullets: [
      "Engineering complete game server hosting infrastructure from ground up",
      "Managing and scaling server fleet to support hundreds of gamers",
      "Establishing robust infrastructure for diverse gaming communities",
      "Overseeing complete lifecycle from development to ongoing management",
    ],
  },
];

export const projects: Entry[] = [
  {
    title: "Creator & Developer",
    org: "TweetThreadify",
    url: "https://tweetthreadify.com",
    period: "August 2025 – Present",
    description:
      "AI Twitter Thread Generator – Create Viral X Threads in Seconds.",
  },
  {
    title: "Side project",
    org: "Popuply",
    url: "https://popuply.net",
    logo: "/popuply.png",
    period: "2024",
    description:
      "Web engagement platform designed to convert visitors into engaged customers using configurable, high-impact popup toasts.",
    bullets: [
      "User experience optimization and conversion rate improvement",
      "Building scalable SaaS infrastructure",
    ],
    stack: "Next.js, Vanilla JS, WebSockets, Postgres",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["HTML", "JavaScript", "TypeScript", "Python", "PHP", "SQL", "Go", "Bash"],
  },
  {
    group: "Frameworks",
    items: ["React", "Next.js", "Laravel", "Flask", "Vue.js", "Nuxt.js", "Flutter", "jQuery"],
  },
  {
    group: "Tools",
    items: [
      "Docker",
      "Ansible",
      "Redis",
      "Traefik",
      "Git",
      "GitHub Actions",
      "Nginx",
      "Tailwind",
      "Gunicorn",
      "Celery",
      "WebSockets",
    ],
  },
  {
    group: "Techniques",
    items: ["Load Balancing", "CI/CD Pipelines", "Scrum"],
  },
  {
    group: "Platforms",
    items: ["GitHub", "Vercel", "OpenAI API"],
  },
];

export const education = {
  degree: "Bachelor of Science in Informatics",
  school: "University of Gothenburg",
  period: "August 2020 – June 2023",
  description:
    "The program combined technical depth with organizational and systems thinking, covering software engineering, user-centered design, information systems, and organizational knowledge.",
};

export const languages = ["English", "Swedish", "Spanish"];
