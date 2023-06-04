import {CompanyHistory, SectionHeader} from "@/components";
import React from "react";
import {SanityAboutTimeline} from "@/types/sanity";

const HistorySection: React.FC<SanityAboutTimeline> = ({timeline, title, subtitle}) => {

    return (
        <div className="container mx-auto flex flex-col gap-y-16 my-24 py-12">
            <div className="md:self-center flex flex-col md:items-center">
                <SectionHeader showLine title={subtitle} className="mb-8"/>
                <div className="text-6xl font-bold text-dark leading-sm text-start">
                    {title}
                </div>
            </div>

            <div className={"flex flex-col justify-start items-stretch gap-y-28 sm:gap-y-12"}>
                {timeline?.map((item, index) => (
                    <CompanyHistory
                        key={item._key}
                        rtl={index % 2 !== 0}
                        image={item.image}
                        year={item.year}
                        achievement={item.title}
                        description={item.description}
                    />
                ))}
            </div>

        </div>
    )
}

export default HistorySection;
