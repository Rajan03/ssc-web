import {AnimatedBtn, PageBanner, SectionHeader} from "@/components";
import {About as AboutHome} from '@/modules/home'
import useCounter from "@/hooks/counter";
import Image from "next/image";
import Head from "next/head";
import React from "react";

const About = () => {
    const count = useCounter(180);

    return (<>
            <Head>
                <title>SSC | About</title>
            </Head>

            <main className={`relative h-[inherit] p-for-nav`}>
                {/* Banner section */}
                <PageBanner title={'About Us'} route={'Home | About Us'}
                            image={'https://img.freepik.com/free-photo/friendly-atmosphere-group-young-freelancers-office-have-conversation-smiling_146671-13630.jpg?size=626&ext=jpg&ga=GA1.1.745640877.1667035334&semt=ais'}/>

                {/* About Company section */}
                <AboutHome title={"Find Out More About Our Business Consulting"}
                           subtitle={"ABOUT OUR COMPANY"}
                           description={"Pellentesque eget dictum est. Pellentesque blandit eget mauris ac faucibus. Curabitur varius a quam sit amet placerat. Pellentesque ut venenatis felis.Proin malesuada porttitor eros."}
                           images={[
                               'https://img.freepik.com/free-photo/diverse-businesspeople-discussing-management-paperwork-standing-conference-table_482257-14061.jpg?w=1060&t=st=1683825222~exp=1683825822~hmac=a43bc8b29779d19b901298631f8d4987247e5b81087545b4510ce8f3c91035af',
                               'https://img.freepik.com/free-photo/diverse-businesspeople-discussing-management-paperwork-standing-conference-table_482257-14061.jpg?w=1060&t=st=1683825222~exp=1683825822~hmac=a43bc8b29779d19b901298631f8d4987247e5b81087545b4510ce8f3c91035af'
                           ]}/>

                {/* Implement Solution section */}
                <div className="relative min-h-[500px] my-24 overflow-hidden flex flex-col items-center justify-center">
                    <Image alt="" loading="lazy" fill className="object-cover absolute inset-0 grayscale"
                           src="https://img.freepik.com/free-photo/staff-meeting-group-young-modern-people-smart-casual-wear-discussing-something-while-working-creative-office-business-time_496169-1626.jpg?size=626&ext=jpg&ga=GA1.1.745640877.1667035334&semt=ais"/>
                    <div className="absolute inset-0 bg-black opacity-50"/>

                    <p className="relative mt-4 mx-auto text-7xl md:text-9xl text-center font-bold text-white">
                        Implement Solutions & Achieve Goals
                    </p>
                    <AnimatedBtn text="Discover" theme={"bg-primary-600"} hoverTheme={"bg-black"} className={"mt-12"}/>
                </div>

                {/* 4th section Todo: Extract in section in module folder */}
                <div className="container mx-auto h-full flex flex-col-reverse lg:flex-row gap-x-12 gap-y-16">

                    <div className="flex-1 flex flex-col justify-start lg:px-8 items-start lg:justify-center">
                        <SectionHeader showLine title={'WHO WE ARE'} className="mb-8"/>
                        <div className="text-6xl font-bold text-dark leading-sm text-start">
                            Best Consulting Company Especially In Business
                        </div>

                        <p className="text-xl text-dark mt-12 max-w-[80%] text-start">
                            Aenean Ac Vulputate Nibh, Sed Fringilla Metus. Pellentesque Porttitor Felis Eu Nunc Feugiat,
                            Nec Condimentum Magna Ultricies. Nam Vitae Est Accumsan Nunc
                        </p>

                        <div className="mt-12 flex items-center gap-x-6">
                            <span className="relative px-4 py-2 h-[55px] w-[95px]">
                                <span className="relative z-10 text-5xl font-extrabold text-white">{count}k</span>
                                <span className="absolute inset-0 bg-primary-600 -skew-y-6"/>
                            </span>
                            <span className="text-xl font-medium text-dark"> Project Completed Last Year</span>
                        </div>

                        <AnimatedBtn text="Discover More" className={"mt-12"}/>
                    </div>

                    <div className={'flex-1 relative h-full'}>
                        <Image className="object-cover" loading="lazy" fill alt=""
                               src="https://img.freepik.com/free-photo/into-success-group-young-freelancers-office-have-conversation-smiling_146671-13567.jpg?size=626&ext=jpg&ga=GA1.1.745640877.1667035334&semt=ais"
                        />
                    </div>

                </div>

            </main>
        </>
    );
};

export default About;
