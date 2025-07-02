import { LuConstruction } from "react-icons/lu";
import { ProjectItem } from "./ProjectItem";

export default function Projects() {

  const projects = {

    "Current": [
      {
        title: "Technical Operations Manager @ Dokibird",
        link: "https://www.youtube.com/@Dokibird",
        companyLogo: "/dokibird-logo.jpg",
        altText: "Dokibird Logo",
        period: "June 2025 - Present",
        description: "Managing end-to-end technical infrastructure and operational efficiency for globally recognized content creator Dokibird (85M+ YouTube views, 200K+ followers on Twitch). Ensuring seamless streaming operations and technical excellence.",
        section: "Current",
        duties: [
          "Managing complete technical infrastructure stack",
          "Optimizing streaming and content creation workflows",
          "Ensuring 99.9% uptime for critical streaming operations",
          "Implementing automation for operational efficiency"
        ]
      },

      {
        title: "Founding Lead Architect & Developer @ UltraServers",
        link: "https://ultraservers.com",
        companyLogo: "/ultraservers_logo_transparent.png",
        altText: "UltraServers Logo",
        period: "July 2022 - Present",
        description: "As a foundational member from UltraServers' inception, pioneered the development of a high-performance game hosting service, laying the groundwork for its significant growth and success in supporting thousands of concurrent users and a rapidly expanding global community.",
        section: "Current",
        duties: [
          "Engineering robust infrastructure designed to exceed industry standards",
          "Providing technical leadership in platform development",
          "Driving innovation and optimizing complex systems for peak performance",
          "Maintaining high code quality standards and scalability",
          "Full-stack development in Next.js, Python, PHP and SQL"
        ]
      },

      {
        title: "CEO @ AB Buddleja",
        link: "https://astroom.dev",
        companyLogo: "/ab-buddleja.png",
        altText: "AB Buddleja Logo",
        period: "October 2022 - Present",
        description: "As a self-employed professional operating through my own limited company, I provide specialized technical operations services to a diverse portfolio of clients, focusing on delivering high-impact solutions and driving operational excellence.",
        duties: [
          "Managing the company operations (accounting, filing taxes, business development)",
          "Providing technical operations consultancy services",
          "Delivering high-quality solutions to meet diverse client needs",
          "Building long-term client relationships"
        ]
      },

      {
        title: "Popuply",
        link: "https://popuply.net",
        companyLogo: "/popuply.png",
        altText: "Popuply Logo",
        period: "2024",
        description: "Side project web engagement platform designed to convert visitors into engaged customers using configurable, high-impact popup toasts.",
        duties: [
          "Full-stack development with Next.js, Vanilla JS, Websockets and Postgres",
          "User experience optimization and conversion rate improvement",
          "Building scalable SaaS infrastructure"
        ]
      },
    ],

    "Previous": [
      {
        title: "Full-Stack Developer @ Pine Hosting",
        link: "https://pinehosting.com",
        companyLogo: "/pine-hosting-logo.png",
        altText: "Pine Hosting Logo",
        period: "April 2022 - January 2023",
        description: "Drove new feature development for Pine Hosting's game server solution during a key growth phase. Delivered commissioned enhancements that expanded core functionality and significantly elevated the game panel's user experience, contributing to their notable growth and market presence.",
        section: "Previous",
        duties: [
          "Full-stack development of game server management features",
          "Enhancing user experience and interface design",
          "Implementing new functionality during company growth phase"
        ]
      },

      {
        title: "Lead Game Server Engineer @ 365Hosts",
        link: "https://365hosts.com",
        companyLogo: "/365hosts.png",
        altText: "365Hosts Logo",
        period: "June 2021 - August 2023",
        description: "Engineered and oversaw the complete lifecycle of 365Hosts' game server hosting division, from initial development to ongoing management. My role involved establishing and scaling the specialized infrastructure required to cater directly to hundreds of individual gamers and their diverse communities across a robust server fleet.",
        section: "Previous",
        duties: [
          "Engineering complete game server hosting infrastructure from ground up",
          "Managing and scaling server fleet to support hundreds of gamers",
          "Establishing robust infrastructure for diverse gaming communities",
          "Overseeing complete lifecycle from development to ongoing management"
        ]
      },
    ]
  }

  return (
    <div className="max-w-5xl mx-auto px-9 py-12 bg-gradient-to-b from-gray-900 to-black text-white rounded-md">
      <h1 className="text-4xl font-bold mb-6 text-blue-300">Experience & Projects</h1>
      <p className="text-lg mb-12 leading-relaxed">
        These are my current professional roles and previous experiences that have shaped my expertise in DevOps engineering, full-stack development, and technical operations.
      </p>

      {Object.entries(projects).map(([section, projectItems]) => (
        <div key={section} className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-right text-blue-200 border-b border-blue-500/30 pb-2">
            {section}
          </h2>
          <div className="grid gap-12 md:grid-cols-2">
            {projectItems.map((project) => (
              <ProjectItem key={project.title} section={section} {...project} />
            ))}
          </div>
        </div>
      ))}

      <div className="mt-16 flex flex-col items-center text-lg text-neutral-300 bg-gray-800 rounded-lg p-8 shadow-lg">
        <LuConstruction size={64} className="text-yellow-500 mb-4" />
        <span className="text-center">Always working on something new - more exciting projects and experiences coming soon!</span>
      </div>
    </div>
  );
}
