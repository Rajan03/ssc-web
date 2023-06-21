import Image from "next/image";
import {AnimatedBtn} from "@/components";
import React from "react";
import {SanityAboutSolution} from "@/types/sanity";

const ImplementSolution: React.FC<SanityAboutSolution> = ({title, image}) => {

    return (
        <div className="relative min-h-[500px] my-24 py-12 overflow-hidden flex flex-col items-center justify-center">
            <Image alt="" loading="lazy" fill className="object-cover absolute inset-0 grayscale" src={image}/>
            <div className="absolute inset-0 bg-black opacity-50"/>

            <p className="relative mt-4 mx-auto text-7xl md:text-9xl text-center font-bold text-white">
                {title}
            </p>
            <AnimatedBtn text="Expert Team" link={'/coach'} theme={"bg-primary-600"} hoverTheme={"bg-black"}
                         className={"mt-12"}/>
        </div>
    )
}

export default ImplementSolution;
