import {ITeam} from '@/types';
import Image from 'next/image';
import React from 'react';
import Link from "next/link";

const TeamCard: React.FC<ITeam> = (props) => {
    const {name, image, location, _id} = props;

    return (
        <Link href={'/team/' + _id}
              className="min-h-[40rem] w-full relative flex flex-col items-center justify-end group cursor-pointer">
            <div className="h-full w-full overflow-hidden relative">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover object-top group-hover:scale-110 transition-transform duration-300 ease-in-out"
                />
            </div>

            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-dark to-transparent"/>

            <div
                className="absolute -bottom-[10%] mx-auto w-3/4 h-1/4 bg-white flex flex-col items-center justify-center shadow-xl rounded-sm px-4">
                <div className="max-w-full text-3xl font-bold text-dark text-cente truncate">
                    {name}
                </div>
                <div className="max-w-full text-xl font-bold text-primary-600 text-center truncate">
                    {location}
                </div>
            </div>
        </Link>
    );
};

export default TeamCard;
