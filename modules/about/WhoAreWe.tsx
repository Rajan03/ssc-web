import Image from "next/image";
import {AnimatedBtn, SectionHeader} from "@/components";
import React from "react";
import useCounter from "@/hooks/counter";

const WhoAreWe = () => {
    const count = useCounter(180);

    return (
        <div className="container mx-auto my-24 py-12 h-full flex flex-col-reverse lg:flex-row gap-x-12 gap-y-16">
            {/*Text and Content */}
            <div className="flex-1 flex flex-col justify-start lg:px-8 items-start lg:justify-center">
                <SectionHeader showLine title={'WHO WE ARE'} className="mb-8"/>
                <div className="text-6xl font-bold text-dark leading-sm text-start">
                    Best Consulting Company Especially In Business
                </div>

                <p className="text-xl text-dark mt-12 max-w-[80%] text-start">
                    Aenean Ac Vulputate Nibh, Sed Fringilla Metus. Pellentesque Porttitor Felis Eu Nunc Feugiat,
                    Nec Condimentum Magna Ultricies. Nam Vitae Est Accumsan Nunc
                </p>

                <div className="mt-20 flex items-center gap-x-6">
                    <span className="relative px-4 py-2 h-[55px] w-[95px]">
                        <span className="relative z-10 text-5xl font-extrabold text-white">{count}k</span>
                        <span className="absolute inset-0 bg-primary-600 -skew-y-6"/>
                    </span>
                    <span className="text-xl font-medium text-dark"> Project Completed Last Year</span>
                </div>

                <AnimatedBtn text="Discover More" className={"mt-12"}/>
            </div>

            {/* Image */}
            <div className={'flex-1 relative h-full'}>
                <Image className="object-cover" loading="lazy" fill alt=""
                       src="https://img.freepik.com/free-photo/into-success-group-young-freelancers-office-have-conversation-smiling_146671-13567.jpg?size=626&ext=jpg&ga=GA1.1.745640877.1667035334&semt=ais"
                />
            </div>
        </div>
    )
}

export default WhoAreWe;
