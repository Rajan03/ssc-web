import Image from 'next/image';
import React from 'react';
import {IResource} from "@/types";

const ResourceCard: React.FC<IResource> = ({ title, shortDescription, image }) => {
    return (
        <div className="min-h-[30rem] h-full w-full relative flex flex-col items-center justify-end group cursor-pointer">
            <div className="h-full w-full overflow-hidden relative">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover object-top group-hover:scale-110 transition-transform duration-300 ease-in-out"
                />
            </div>

            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-dark to-transparent" />

            <div className="absolute bottom-6 m-auto flex flex-col items-center justify-center gap-3 px-4">
                <div className="max-w-full text-3xl font-bold text-white text-center truncate">
                    {title}
                </div>
                <div className="max-w-full text-lg font-extralight text-white text-center">
                    {shortDescription}
                </div>
            </div>
        </div>
    );
};

export default ResourceCard;
