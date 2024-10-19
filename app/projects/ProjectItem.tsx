import React from 'react';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

type ProjectItemProps = {
  section: string;
  title: string;
  link: string;
  companyLogo: string;
  altText: string;
  period: string;
  description: string;
  duties: string[];
};

export const ProjectItem = ({ section, title, link, companyLogo, altText, period, description, duties }: ProjectItemProps) => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 shadow-lg hover:shadow-blue-500/20 transition-all duration-300 border border-blue-500/10 hover:border-blue-500/30">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="bg-white/10 p-2 rounded-full">
            <Image
              src={companyLogo}
              alt={altText}
              width={48}
              height={48}
              quality={80}
              className="rounded-full"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-300">
              {link ? (
                <Link href={link} target="_blank" className="hover:underline flex items-center group">
                  {title} <FaExternalLinkAlt className="ml-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ) : (
                title
              )}
            </h3>
            <p className="text-sm text-gray-400">{period}</p>
          </div>
        </div>
      </div>
      <p className="text-gray-300 mb-4 bg-gray-800/50 p-3 rounded-md">{description}</p>
      {duties && duties.length > 0 && (
        <div>
          <h4 className="text-lg font-semibold text-blue-200 mb-2">
            {section === "Current" ? "What I Do" : "What I Did"}
          </h4>
          <ul className="list-none text-gray-300 space-y-2">
            {duties.map((duty, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>{duty}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
