import React from 'react';
import {BsFillBookmarkStarFill} from "react-icons/bs";
import Image from "next/image";
import clsx from "clsx";

interface CompanyHistoryProps {
    year: string;
    achievement: string;
    description: string;
    image: string;
    rtl?: boolean;
}

const CompanyHistory: React.FC<CompanyHistoryProps> = ({
                                                           year,
                                                           achievement,
                                                           image,
                                                           description,
                                                           rtl = false
                                                       }) => {
    const cls = clsx('relative w-full min-h-[40rem] flex flex-col items-center gap-x-12 gap-y-16 ',
        rtl ? 'lg:flex-row-reverse' : 'lg:flex-row')

    const txtClass = clsx('flex-1 flex flex-col justify-start px-4', rtl ? 'items-end' : 'items-start');
    const txtAlign = rtl ? 'text-end' : 'text-start';

    return (
        <div className={cls}>
            {/* Image Section */}
            <div className="relative min-h-[inherit] flex-1">
                <Image
                    className="object-cover"
                    fill
                    loading="lazy"
                    src={image}
                    alt=""
                />
            </div>

            {/* Divider */}
            <div className={'absolute top-0 bottom-0 left-1/2 right-1/2 hidden lg:block min-h-full w-1 border-dashed border-l border-primary-600'} />

            {/* Text Section */}
            <div className={txtClass}>
                <div className="flex flex-row items-center justify-start gap-x-6">
                    <BsFillBookmarkStarFill className="text-6xl text-primary-600"/>
                    <h3 className="text-4xl md:text-6xl font-bold text-primary-600">
                        {year}
                    </h3>
                </div>

                <h2 className={"text-5xl font-medium text-dark mt-20 " + txtAlign}>
                    {achievement}
                </h2>

                <p className={"text-xl font-normal text-justify text-dark mt-4 " + txtAlign}>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default CompanyHistory;
