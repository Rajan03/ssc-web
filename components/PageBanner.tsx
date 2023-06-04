import Image from 'next/image';
import {QUOTE_BG} from "@/utils/constant";
import React from "react";

interface Props {
    title: string;
    route: string;
    image: string;
}

const PageBanner: React.FC<Props> = ({title, image, route}) => {
    const routeArray = route.split(' | ');

    return (
        <>
            <div className="relative w-full min-h-[60%] flex flex-col justify-center items-center">
                {/* Banner Image */}
                <Image src={image} alt="" priority fill className="hidden lg:block z-[-1] object-cover object-bottom w-full h-full"/>

                {/* Banner Gradient and Pattern image */}
                <div className={'absolute top-0 left-0 w-full lg:w-[60%] h-full z-[-1] bg-gradient-to-r ' +
                    'from-black to-gray-900 lg:rounded-br-full lg:border-r-8 lg:border-r-white lg:rounded-tr-[20%]'}>
                    <Image src={QUOTE_BG} alt={''} fill priority
                           className="object-cover object-right opacity-40"/>
                </div>

                {/* Banner Text */}
                <div className={'container mx-auto z-10 h-full flex justify-center items-center lg:items-start flex-col gap-y-8'}>
                    <h1 className="text-4xl font-semibold flex gap-x-8 uppercase text-center lg:text-left">
                        <span className="text-white">{routeArray[0]}</span>
                        <span className="text-white">|</span>
                        <span className="text-primary-500">{routeArray[1]}</span>
                    </h1>
                    <h2 className="text-6xl font-semibold text-white uppercase text-center lg:text-left leading-base">
                        {title}
                    </h2>
                </div>
            </div>
        </>
    );
};

export default PageBanner;
