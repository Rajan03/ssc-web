import Image from "next/image";
import {AnimatedBtn, SectionHeader} from "@/components";
import React from "react";
import {SanityAboutWhoWeAre} from "@/types/sanity";

const WhoAreWe: React.FC<SanityAboutWhoWeAre> = ({title, subtitle, description, image, count, countText}) => {

    return (
        <div className="container mx-auto my-24 py-12 flex flex-col-reverse lg:flex-row gap-x-12 gap-y-16">
            {/*Text and Content */}
            <div className="flex-1 flex flex-col justify-start lg:px-8 items-start lg:justify-center">
                <SectionHeader showLine title={subtitle} className="mb-8"/>
                <div className="text-6xl font-bold text-dark leading-sm text-start">
                    {title}
                </div>

                <p className="text-xl text-dark mt-12 max-w-[80%] text-start">
                    {description}
                </p>

                <div className="mt-20 flex items-center gap-x-6">
                    <span className="relative px-4 py-2 h-[55px] w-[95px]">
                        <span className="relative z-10 text-5xl font-extrabold text-white">{count}</span>
                        <span className="absolute inset-0 bg-primary-600 -skew-y-6"/>
                    </span>
                    <span className="text-xl font-medium text-dark">{countText}</span>
                </div>

                <AnimatedBtn text="Discover More" className={"mt-12"}/>
            </div>

            {/* Image */}
            <div className={'flex-1 relative self-stretch min-h-[40rem]'}>
                <Image className="object-cover" loading="lazy" fill alt="" src={image}/>
            </div>
        </div>
    )
}

export default WhoAreWe;
