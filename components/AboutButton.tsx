import React from 'react';

interface HoverButtonProps {
  text: string;
}

const HoverButton: React.FC<HoverButtonProps> = ({ text }) => {
  return (
    <div className="group">
      <button
        className=" mx-10  w-[180px] h-[60px] 
        relative inline-flex items-center justify-center border-radius-5
        overflow-hidden transition-all bg-black rounded hover:bg-black"
      >
        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-500 ease-out bg-red-500 rounded group-hover:w-full group-hover:h-full -z-1 border-radius-5"></span>
        <span className="z-10 w-full text-white transition-colors duration-300 ease-in-out group-hover:text-white">
          {text}
        </span>
      </button>
    </div>
  );
};

export default HoverButton;
