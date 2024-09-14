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
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-blue-500/20 transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <Image
            src={companyLogo}
            alt={altText}
            width={64}
            height={64}
            quality={80}

          />
          <div>
            <h3 className="text-xl font-semibold text-blue-300">
              {link ? (
                <Link href={link} target="_blank" className="hover:underline flex items-center">
                  {title} <FaExternalLinkAlt className="ml-2 text-sm" />
                </Link>
              ) : (
                title
              )}
            </h3>
            <p className="text-sm text-gray-400">{period}</p>
          </div>
        </div>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      {duties && duties.length > 0 && (
        <div>
          <h4 className="text-lg font-semibold text-blue-200 mb-2">
            {section === "Current" ? "What I Do" : "What I Did"}
          </h4>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            {duties.map((duty, index) => (
              <li key={index}>{duty}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
