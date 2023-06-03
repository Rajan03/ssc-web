import React from 'react';

interface TextMenuProps {
  svgPath: string;
  title: string;
  subtitle: string;
  description: string;
  pathAlignment: 'left' | 'center' | 'right';
}

const TextMenu: React.FC<TextMenuProps> = ({
  svgPath,
  title,
  subtitle,
  description,
  pathAlignment = 'left', // Default value is 'start'
}) => {
  return (
    <div className="relative w-full">
      <div className="relative mx-10 mb-7">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="red"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={svgPath}
            textAnchor={pathAlignment}
          />
        </svg>
        <h1 className="relative text-4xl font-bold text-red-500 sm:text-5xl mt-10">
          {title}
        </h1>
        <h2 className="relative text-3xl font-medium text-black sm:text-4xl mt-10">
          {subtitle}
        </h2>
        <p className="relative mt-10 text-lg font-medium text-justify text-black ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TextMenu;
