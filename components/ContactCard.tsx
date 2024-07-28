import React from 'react';
import Image from "next/image";
import {ContactCardProps} from "@/types/sanity";

const ContactCard: React.FC<ContactCardProps> = (props) => {
    const {Icon,info, subtitle, title} = props;

    return (
        <div className="w-full h-[20rem] max-h-[20rem] relative hover:scale-105 group shadow-xl transition-all duration-[5000] ease-linear">
            <div className={'absolute inset-0 bg-black invisible group-hover:visible rounded-lg'}>
                <Image src={'/bg-abstract.png'} alt={''} fill className={'object-cover object-right'}/>
            </div>

            <div className={"absolute inset-0 bg-white group-hover:bg-transparent p-12 " +
                "flex flex-col justify-end items-start text-dark group-hover:text-white rounded-lg"}>
                <h3 className="text-4xl font-medium text-primary-600 group-hover:text-white">{title}</h3>
                <h4 className="text-2xl font-normal mt-4 mb-8">{subtitle}</h4>
                {info?.map((item, i) => (
                    <p key={item + i} className="text-xl font-light">{item}</p>
                ))}
            </div>

            <div className={'absolute -top-9 right-12 p-5 bg-primary-600 rounded-full group-hover:animate-bounce'}>
                {Icon && <Icon className="text-6xl text-white "/>}
                <div className={'absolute -top-3 -bottom-3 -left-3 -right-3 border-primary-600 border border-dashed rounded-full animate-spin'}/>
            </div>
        </div>
    );
};

export default ContactCard;
