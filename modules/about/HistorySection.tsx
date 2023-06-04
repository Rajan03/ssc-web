import {CompanyHistory, SectionHeader} from "@/components";
import React from "react";

const HistorySection = () => {

    return (
        <div className="container mx-auto flex flex-col gap-y-16 my-24 py-12">
            <div className="self-center flex flex-col items-center">
                <SectionHeader showLine title={'Our History'} className="mb-8"/>
                <div className="text-6xl font-bold text-dark leading-sm text-start">
                    Timeline of Our Company
                </div>
            </div>

            <div className={"flex flex-col justify-start items-stretch gap-y-12"}>
                {Array.of(1, 2, 3,).map((item, index) => (
                    <CompanyHistory
                        key={index}
                        rtl={item % 2 === 0}
                        image={'https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15861.jpg?size=626&ext=jpg&ga=GA1.2.745640877.1667035334&semt=sph'}
                        year="2003"
                        achievement="Start Company"
                        description="Aliquam Sit Amet Massa Quis Augue Porta Consequat Eu Eu Lectus. Praesent A Ipsum A Sem Tristique Aliquam Sit Amet Massa Quis Augue Porta Consequat Eu Eu Lectus. Praesent A Ipsum A Sem Tristique"
                    />
                ))}
            </div>

        </div>
    )
}

export default HistorySection;
