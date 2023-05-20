import React from 'react';

interface HoverButtonProps {
  text: string;
}

const HoverButton: React.FC<HoverButtonProps> = ({ text }) => {
  return (
    <div className="group">
      <button className="ml-20  w-[180px] h-[60px] sm:w-[240px] sm:h-[80px]
        relative inline-flex items-center justify-center border-radius-5
        overflow-hidden transition-all bg-black rounded hover:bg-black"
      >
        <span className="w-0 h-0 rounded bg-red-500 
          absolute top-0 left-0 ease-out duration-500 
          transition-all group-hover:w-full group-hover:h-full -z-1 border-radius-5"
        ></span>
        <span className="w-full text-white transition-colors
          duration-300 ease-in-out group-hover:text-white z-10"
        >
          {text}
        </span>
      </button>
    </div>
  );
};

export default HoverButton;
