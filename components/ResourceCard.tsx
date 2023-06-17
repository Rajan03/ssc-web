import Image from 'next/image';
import React from 'react';
import {IResource} from "@/types";
import {useResourceModal} from "@/hooks/modals";

const ResourceCard: React.FC<IResource> = (props) => {
    const {title, shortDescription, price, image} = props;
    const {setIsOpen, setResource} = useResourceModal();

    const handleOpen = () => {
        setResource(props);
        setIsOpen(true);
    }

    return (
        <div
            className="min-h-[30rem] h-full w-full relative flex flex-col items-center justify-end group cursor-pointer"
            onClick={handleOpen}>
            <div className="h-full w-full overflow-hidden relative">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover object-top group-hover:scale-110 transition-transform duration-300 ease-in-out"
                />
            </div>

            <div className="absolute top-0 left-0 px-3 h-20 bg-primary-600 flex items-center justify-center">
                <div className="text-2xl font-bold text-white">${price}</div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-dark to-transparent"/>

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
