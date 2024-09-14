
import { LuConstruction } from "react-icons/lu";
import { ProjectItem } from "./ProjectItem";

export default function Projects() {

  const projects = {

    "Current": [
      {
        title: "Lead Developer @ ULTRASERVERS",
        link: "https://ultraservers.com",
        companyLogo: "/ultraservers_logo_transparent.png",
        altText: "Ultraservers Logo",
        period: "August 2022 - Present",
        description: "ULTRASERVERS is the most ambitious game hosting service out there. It offers high-performance servers for a variety of games, going above and beyond it's competitors in the field to provide the best possible experience for game server administrators.",
        section: "Current",
        duties: [
          "Fullstack development in Next.js, Python, PHP and SQL (among others...)",
          "Managing core infrastructure and development workflow pipelines",
          "Optimizing website performance and user experience"
        ]
      },

      {
        title: "Popuply.net",
        link: "https://popuply.net",
        companyLogo: "/popuply.png",
        altText: "Popuply Logo",
        period: "September 2024",
        description: "Popuply is a simple tool for creating simple popup toasts for your website without needing any coding.",
        duties: [
          "Fullstack development with Next.js, Vanilla JS, Websockets and Postgres."
        ]
      },

      {
        title: "SpeedyWrite.com",
        link: "https://speedywrite.com",
        companyLogo: "/speedywrite.svg",
        altText: "SpeedyWrite Logo",
        period: "July 2024",
        description: "SpeedyWrite is an all-in-one platform to generate AI content and start making money in minutes. ",
        duties: [
          "Fullstack development with PHP Laravel, JavaScript and the OpenAI API."
        ]
      },

      {
        title: "SiteChatty [WIP]",
        link: "https://github.com/astrooom/sitechatty",
        companyLogo: "/sitechatty.png",
        altText: "SiteChatty Logo",
        period: "May 2024 - Present",
        description: "SiteChatty is a AI-driven chatbot trained on sources from your website.",
        duties: [
          "Fullstack development with Next.js, Flask, Vector Databases and the OpenAI API."
        ]
      },

      {
        title: "Owner of BUDDLEJA CORPORATION",
        link: "https://astroom.dev",
        companyLogo: "/ab-buddleja.png",
        altText: "Buddleja Limited Company Logo",
        period: "October 2022 - Present",
        description: "I started my own company in Sweden for self-employment, AB Buddleja (limited company), which focuses on providing fullstack development & system administration services to clients.",
        duties: [
          "Managing the company (Accounting, filing taxes and all that stuff)",
          "Finding new clients",
          "Delivering high-quality services to clients"
        ]
      },
    ],

    "Previous": [
      {
        title: "System Administrator @ 365HOSTS",
        link: "https://365hosts.com",
        companyLogo: "/365hosts.png",
        altText: "365Hosts Logo",
        period: "June 2021 - August 2023",
        description: "365Hosts is a web hosting company that provides a wide range of hosting solutions. My role was to manage game servers, troubleshoot technical issues, and ensure the best possible user experience.",
        section: "Previous",
        duties: [
          "Managing core-infrastructure related to game server hosting",
          "Handle support tickets related to Game Servers such as Minecraft",
        ]
      },
    ]
  }


  return (
    <div className="max-w-5xl mx-auto px-9 py-12 bg-gradient-to-b from-gray-900 to-black text-white rounded-md">
      <h1 className="text-4xl font-bold mb-6 text-blue-300">Projects</h1>
      <p className="text-lg mb-12 leading-relaxed">
        These are the projects I'm currently engaged in and have worked on in the past.
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
        <span className="text-center">Under construction - more exciting projects coming soon!</span>
      </div>
    </div>


  );
}
