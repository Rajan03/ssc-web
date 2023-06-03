import React from 'react';

interface CompanyHistoryProps {
  title: string;
  subtitle: string;
  description: string;
}

const CompanyHistory: React.FC<CompanyHistoryProps> = ({
  title,
  subtitle,
  description,
}) => {
  return (
    <div>
      <div className="container mx-4">
        <svg
          className="h-16 w-16 md:h-48 md:w-48 fill-red-500 mb-4 sm:mb-0"
          viewBox="0 0 24 24"
          fill="red-500"
          stroke="currentColor"
          strokeWidth={0}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>

        <div className="mx-10 sm:ml-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-red-500 mb-20 sm:mb-6">
            {title}
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black mt-20 sm:mb-6">
            {subtitle}
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-justify text-black">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyHistory;
