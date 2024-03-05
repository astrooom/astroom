
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
        title: "Owner of AB Buddleja",
        link: "https://astroom.dev",
        companyLogo: "/ab-buddleja.png",
        altText: "AB Buddleja Logo",
        period: "October 2022 - Present",
        description: "I started my own company in Sweden for self-employment, AB Buddleja, which focuses on providing fullstack development & system administration services to clients.",
        duties: [
          "Managing the company (Accounting, filing taxes and all that stuff)",
          "Finding new clients",
          "Delivering high-quality services to clients"
        ]
      }
    ],

    // "Previous": [
    //   {
    //     title: "System Administrator @ 365HOSTS",
    //     link: "https://ultraservers.com",
    //     companyLogo: "/ultraservers_logo_transparent.png",
    //     altText: "Ultraservers Logo",
    //     period: "August 2022 - Present",
    //     description: "ULTRASERVERS is the most ambitious game hosting service...  I contribute to the design, development, and maintenance of the platform.",
    //     section: "Previous",
    //     duties: [
    //       "Design and implement scalable web applications",
    //       "Collaborate with cross-functional teams",
    //       "Optimize website performance and user experience"
    //     ]
    //   },
    // ]
  }


  return (
    <div className="flex flex-col gap-y-12 pb-12">

      <div>
        <h1 className="text-2xl font-semibold mb-4 text-neutral-50">Projects</h1>
        <p>These are the projects I'm currently engaged in and have worked on in the past.</p>
      </div>

      {Object.entries(projects).map(([section, projectItems]) => (
        <div key={section}> {/* Key for the section div */}
          <h2 className="text-right text-xl font-semibold text-neutral-50 border-t border-white/70 p-4">{section}</h2>
          <div className="flex flex-col gap-y-8">
            {projectItems.map((project) => (
              <ProjectItem key={project.title} {...project} />
            ))}
          </div>
        </div>
      ))}


      <p className="my-4 flex flex-col items-center text-lg text-neutral-300">
        <LuConstruction size={48} className="inline" />
        <span>Under construction - more projects coming soon!</span>
      </p>

    </div>


  );
}
