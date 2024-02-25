import { FaCalendarCheck } from "react-icons/fa";

export function Timeline() {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">

      <li className="mb-10 ms-4 relative">
        <div className="absolute w-4 h-4 -left-6 top-0 z-10 bg-black flex items-center justify-center rounded">
          <FaCalendarCheck className="text-neutral-200 text-xl" />
        </div>

        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">August 2022 - Today</time>
        <h3 className="text-lg font-semibold text-neutral-200 dark:text-white">Lead Developer @ UltraServers</h3>
        <p className="mb-4 text-base font-normal text-neutral-400 dark:text-gray-400">
          I'm currently working as a lead developer at UltraServers, a game hosting company that offers high-performance servers for a variety of games. My role involves developing new features, finding the best solution to problems, maintaining the existing codebase, as well as collaborating with the team to ensure the best possible user experience.
        </p>
      </li>

      <li className="mb-10 ms-4">

        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">October 2022 - Today</time>
        <h3 className="text-lg font-semibold text-neutral-200 dark:text-white">Started AB Buddleja</h3>
        <p className="mb-4 text-base font-normal text-neutral-400 dark:text-gray-400">
          I started my own company for self-employment, AB Buddleja, which focuses on providing development & system administration services to clients. I'm responsible for managing the company, finding new clients, and delivering high-quality services to meet their needs.
        </p>
      </li>

      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 2021 - August 2023</time>
        <h3 className="text-lg font-semibold text-neutral-200 dark:text-white">System Administrator @ 365Hosts</h3>
        <p className="mb-4 text-base font-normal text-neutral-400 dark:text-gray-400">
          I worked as a system administrator at 365Hosts, a web hosting company that provides a wide range of hosting solutions. My responsibilities included managing servers, troubleshooting technical issues, and ensuring the smooth operation of the hosting infrastructure.
        </p>
      </li>

    </ol>
  );
}
