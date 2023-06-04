import Image from "next/image";
import {AnimatedBtn} from "@/components";
import React from "react";

const ImplementSolution = () => {

    return (
        <div className="relative min-h-[500px] my-24 py-12 overflow-hidden flex flex-col items-center justify-center">
            <Image alt="" loading="lazy" fill className="object-cover absolute inset-0 grayscale"
                   src="https://img.freepik.com/free-photo/staff-meeting-group-young-modern-people-smart-casual-wear-discussing-something-while-working-creative-office-business-time_496169-1626.jpg?size=626&ext=jpg&ga=GA1.1.745640877.1667035334&semt=ais"/>
            <div className="absolute inset-0 bg-black opacity-50"/>

            <p className="relative mt-4 mx-auto text-7xl md:text-9xl text-center font-bold text-white">
                Implement Solutions & Achieve Goals
            </p>
            <AnimatedBtn text="Discover" theme={"bg-primary-600"} hoverTheme={"bg-black"} className={"mt-12"}/>
        </div>
    )
}

export default ImplementSolution;
