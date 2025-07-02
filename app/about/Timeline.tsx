export function Timeline() {

  const timelineData = [
    {
      id: 0,
      date: "June 2025 - Present",
      title: "Technical Operations Manager for Dokibird",
      description: "Managing end-to-end technical infrastructure and operational efficiency for globally recognized content creator Dokibird (85M+ YouTube views, 200K+ followers on Twitch)."
    },
    {
      id: 1,
      date: "2024",
      title: "Released Popuply",
      description: "Side project web engagement platform designed to convert visitors into engaged customers using configurable, high-impact popup toasts."
    },
    {
      id: 2,
      date: "October 2022 - Present",
      title: "CEO of AB Buddleja",
      description: "As a self-employed professional operating through my own limited company, I provide specialized technical operations services to a diverse portfolio of clients, focusing on delivering high-impact solutions and driving operational excellence."
    },
    {
      id: 3,
      date: "July 2022 - Present",
      title: "Founding Lead Architect & Developer @ UltraServers",
      description: "As a foundational member from UltraServers' inception, pioneered the development of a high-performance game hosting service, laying the groundwork for its significant growth and success in supporting thousands of concurrent users and a rapidly expanding global community."
    },
    {
      id: 4,
      date: "April 2022 - January 2023",
      title: "Full-Stack Developer @ Pine Hosting (part-time)",
      description: "Drove new feature development for Pine Hosting's game server solution during a key growth phase. Delivered commissioned enhancements that expanded core functionality and significantly elevated the game panel's user experience."
    },
    {
      id: 5,
      date: "June 2021 - August 2023",
      title: "Lead Game Server Engineer @ 365Hosts",
      description: "Engineered and oversaw the complete lifecycle of 365Hosts' game server hosting division, from initial development to ongoing management. My role involved establishing and scaling the specialized infrastructure required to cater directly to hundreds of individual gamers."
    },
    {
      id: 6,
      date: "August 2020 - June 2023",
      title: "Bachelor of Science in Informatics",
      description: "Graduated from University of Gothenburg with a major in Informatics. The program combined technical depth with organizational and systems thinking, covering software engineering, user-centered design, information systems, and organizational knowledge."
    }
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4 text-neutral-50">Timeline</h2>
      <ol className="relative border-s border-gray-200">
        {timelineData.map((item) => (
          <li key={item.id} className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-neutral-200">{item.date}</time>
            <h3 className="text-lg font-semibold text-neutral-100">{item.title}</h3>
            <p className="mb-4 text-lg font-normal text-neutral-200">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}