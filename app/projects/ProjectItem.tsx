import React from 'react';
import NextImage from 'next/image';
import Link from 'next/link';

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
    <div>
      <div className="flex items-center gap-2">
        <div>
          <h3 className="text-neutral-100 font-semibold text-lg">
            {link ? (
              <Link className="hover:underline text-blue-300" target="_blank" href={link}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h3>
          <p>{period}</p>
        </div>
        <div>
          <NextImage
            src={companyLogo}
            alt={altText}
            width={48}
            height={48}
            quality={60}
          />
        </div>
      </div>

      <p className="text-neutral-300 tracking-wide leading-relaxed mt-2">{description}</p> {/* Added some top margin */}

      {/* What I Do Section */}
      {duties && duties.length > 0 && ( // Check if duties exist
        <div className="mt-4">
          <h4 className="text-neutral-100 font-semibold">{section === "Current" ? "What I Do" : "What I Did"}</h4>
          <ul className="list-disc list-inside text-neutral-300">
            {duties.map((duty, index) => (
              <li key={index}>{duty}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
