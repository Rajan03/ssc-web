import React from 'react';
import {BsFillBookmarkStarFill} from "react-icons/bs";
import Image from "next/image";
import clsx from "clsx";
import {IService} from "@/types";
import {Button} from "@/components/index";
import {BiChevronsRight} from "react-icons/bi";

interface Props extends IService {
    rtl?: boolean;
}

const ServiceTimelineCard: React.FC<Props> = ({image, shortDescription, rtl = false, title, shortTag, _id}) => {
    const cls = clsx('relative w-full min-h-[40rem] flex flex-col items-center gap-x-12 gap-y-8 ',
        rtl ? 'sm:flex-row-reverse' : 'sm:flex-row')

    const txtClass = clsx('flex-1 flex flex-col justify-start sm:px-4', rtl ? 'sm:items-end' : 'sm:items-start');
    const txtAlign = rtl ? 'sm:text-end' : 'sm:text-start';

    return (
        <div className={cls}>
            {/* Image Section */}
            <div className="relative min-h-[inherit] w-full flex-1">
                <Image
                    className="object-cover"
                    fill
                    loading="lazy"
                    src={image}
                    alt=""
                />
            </div>

            {/* Divider */}
            <div className={'absolute top-0 bottom-0 left-1/2 right-1/2 hidden sm:block min-h-full w-1 ' +
                'border-dashed border-l border-primary-600'}/>

            {/* Text Section */}
            <div className={txtClass}>
                <div className="flex flex-row items-center justify-start gap-x-6">
                    <BsFillBookmarkStarFill className="text-6xl text-primary-600"/>
                    <h3 className="text-4xl md:text-6xl font-bold text-primary-600">
                        {shortTag}
                    </h3>
                </div>

                <h2 className={"text-5xl font-medium text-dark mt-4 sm:mt-20 " + txtAlign}>
                    {title}
                </h2>

                <p className={"text-xl font-normal text-justify text-dark mt-4 " + txtAlign}>
                    {shortDescription}
                </p>

                <Button link={'/services/' + _id} text={'View More'} size={'medium'}
                        Icon={BiChevronsRight} iconPosition={'right'}
                        className={'mt-8 ' + (rtl ? 'self-end' : 'self-end')} onlyText/>
            </div>
        </div>
    )
};

export default ServiceTimelineCard;
