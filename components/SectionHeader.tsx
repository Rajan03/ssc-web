import React from 'react';

type Props = {
  title: string;
  showLine?: boolean;
};

const SectionHeader: React.FC<Props> = ({ title, showLine }) => {
  return (
    <>
      <div className="flex items-center justify-start h-6">
        {/* Lines */}
        {showLine && (
          <div className="w-20 h-full mr-4 border-t-2 border-b-2 border-primary"></div>
        )}

        {/* Title */}
        <h5 className="text-4xl leading-4 font-bold text-start text-primary">
          {title}
        </h5>
      </div>
    </>
  );
};

export default SectionHeader;
