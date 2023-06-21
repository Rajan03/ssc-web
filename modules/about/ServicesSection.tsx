import {SectionHeader, ServiceTimelineCard} from "@/components";
import React from "react";
import {SanityAboutTimeline} from "@/types/sanity";

const ServicesSection: React.FC<SanityAboutTimeline> = ({services, title, subtitle}) => {

    return (
        <div id={'#services'} className="container mx-auto flex flex-col gap-y-16 my-24 py-12">
            <div className="md:self-center flex flex-col md:items-center">
                <SectionHeader showLine title={subtitle} className="mb-8"/>
                <div className="text-6xl font-bold text-dark leading-sm text-start">
                    {title}
                </div>
            </div>

            <div className={"flex flex-col justify-start items-stretch gap-y-28 sm:gap-y-12"}>
                {services?.map((item, index) => (
                    <ServiceTimelineCard
                        key={item._id} rtl={index % 2 !== 0} shortTag={item.shortTag || `0${index + 1}`}
                        title={item.title} description={item.description} image={item.image}
                        _id={item._id} sections={item.sections} shortDescription={item.shortDescription}
                        showOnHome={item.showOnHome}/>
                ))}
            </div>
        </div>
    )
}

export default ServicesSection;
