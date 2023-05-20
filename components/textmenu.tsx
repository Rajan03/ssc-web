import React from "react";

interface TextMenuProps {
  svgPath: string;
  title: string;
  subtitle: string;
  description: string;
}

const TextMenu :React.FC<TextMenuProps>= ({ svgPath, title, subtitle, description}) => {
  return (
    <div className="relative w-full md:ml-10 ">
      <div className="relative md:w-[600px] ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={svgPath}
          />
        </svg>
        <h1 className="relative mx-4 text-4xl font-bold text-red-500 md:mx-20 mb-7">{title}</h1>
        <h2 className="relative mx-4 text-4xl font-medium text-black md:mx-20 mb-7">{subtitle}</h2>
        <p className="relative mx-4 mb-20 ml-4 text-2xl font-medium text-justify text-black md:mx-20 md:ml-20">
          {description}
        </p>

      </div>
    </div>
  );
};

export default TextMenu;
