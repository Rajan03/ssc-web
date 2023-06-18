import React from 'react';

type Props = {
    title: string;
    description?: string;
    showLine?: boolean;
    className?: string;
};

const SectionHeader: React.FC<Props> = ({title, showLine, className, description}) => {
    return (
        <>
            <div className={'flex flex-col items-stretch justify-start '+ (description ? 'h-auto ' : 'h-6 ') + className}>
                <div className="flex items-center justify-start">
                    {/* Lines */}
                    {showLine && (
                        <div className="w-20 h-full mr-4 border-t-2 border-b-2 border-primary-600"></div>
                    )}

                    {/* Title */}
                    <h5 className="text-3xl leading-8 uppercase font-bold text-start text-primary-600">
                        {title}
                    </h5>
                </div>

                {/* Description */}
                {description && (
                    <p className="text-[1.3rem] leading-6 text-start text-gray-500 mt-2">{description}</p>
                )}
            </div>


        </>
    );
};

export default SectionHeader;
