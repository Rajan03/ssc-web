import React from 'react';

type Props = {
  title: string;
  showLine?: boolean;
  className?: string;
};

const SectionHeader: React.FC<Props> = ({ title, showLine, className }) => {
  return (
    <>
      <div className={'flex items-center justify-start h-6 ' + className}>
        {/* Lines */}
        {showLine && (
          <div className="w-20 h-full mr-4 border-t-2 border-b-2 border-primary-600"></div>
        )}

        {/* Title */}
        <h5 className="text-3xl leading-4 font-bold text-start text-primary-600">
          {title}
        </h5>
      </div>
    </>
  );
};

export default SectionHeader;
