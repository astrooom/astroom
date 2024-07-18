export function Timeline() {

  const timelineData = [
    {
      id: 0,
      date: "May 2024 - Today",
      title: "Building SiteChatty",
      description: "I'm currently building a chatbot that can answer questions about your website. I'm using Next.js, Flask, and the OpenAI API to build it."
    },
    {
      id: 1,
      date: "August 2022 - Today",
      title: "Lead Developer @ ULTRASERVERS",
      description: "I'm currently working as a lead developer at ULTRASERVERS, a game hosting company that offers high-performance servers for a variety of games. My role involves developing new features, finding the best solution to problems, maintaining the existing codebase, as well as collaborating with the team to ensure the best possible user experience."
    },
    {
      id: 2,
      date: "October 2022 - Today",
      title: "Started AB Buddleja",
      description: "I started my own company for self-employment, AB Buddleja, which focuses on providing development & system administration services to clients. I'm responsible for managing the company, finding new clients, and delivering high-quality services to meet their needs."
    },
    {
      id: 3,
      date: "June 2021 - August 2023",
      title: "System Administrator @ 365Hosts",
      description: "I worked as a system administrator at 365Hosts, a web hosting company that provides a wide range of hosting solutions. My responsibilities included managing servers, troubleshooting technical issues, and ensuring the smooth operation of the hosting infrastructure."
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