import {IService} from "@/types";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import {BsCheck2All} from "react-icons/bs";
import Link from "next/link";
import {AnimatedBtn} from "@/components";
import {GetServices} from "@/services/AppService";

interface ServicePageProps {
    service: IService;
    services: IService[];
}

export default function ServicePage({service, services}: ServicePageProps) {

    return (
        <>
            <Head>
                <title>SSC | {service.title}</title>
            </Head>

            <main className="relative min-h-[inherit] p-for-nav">
                <div className={'container mx-auto py-16 md::px-8 grid grid-cols-1 lg:grid-cols-[65%,_35%] gap-x-8'}>
                    {/* SERVICE BANNER IMAGE */}
                    <div className={'min-h-[40rem] w-full relative'}>
                        <Image src={service.image} alt={service.title} fill className={'object-cover object-top'}/>
                    </div>

                    <div className={'hidden lg:flex flex-col justify-start row-span-2 sticky top-from-nav'}>
                        {/* SOLUTIONS CONTENT */}
                        <div className={'flex-1 flex flex-col justify-start bg-neutral-200 p-12 rounded-md '}>
                            <h1 className={'text-5xl capitalize text-dark font-bold text-start'}>Solutions</h1>
                            <p className={'text-justify text-dark font-normal text-2xl mt-8'}>We offer a wide range of
                                solutions to help you achieve your goals.</p>
                            <div className={'mt-12 flex flex-col gap-6'}>
                                {
                                    services?.map((s, index) => (
                                        <Link href={'/services/' + s._id} key={index}
                                              className={'flex flex-row justify-start items-center space-x-6 ' +
                                                  'px-4 py-4 border-neutral-400 border-b hover:bg-neutral-300/50 hover:border-transparent ' +
                                                  'cursor-pointer'}>
                                            <BsCheck2All className={'text-3xl text-primary-600'}/>
                                            <p className={'text-2xl text-dark font-normal'}>{s.title}</p>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>

                        {/* NEED HELP CARD */}
                        <div className={'flex-1 flex flex-col mt-16 justify-end items-center relative'}>
                            <div className={'h-[80%] w-full absolute top-0'}>
                                <Image src={services[0].image} alt={'help'} fill className={'object-cover absolute'}/>
                                <div className={'absolute top-0 left-0 w-full h-full bg-black/40'}/>
                            </div>

                            <div
                                className={'flex flex-col justify-start gap-y-4 bg-white px-16 py-8 rounded-md relative z-10 shadow-2xl'}>
                                <h1 className={'text-5xl capitalize text-dark font-bold text-start'}>Need Help?</h1>
                                <AnimatedBtn link={'/contact'} text={'Contact Us'} className={'mt-8'}/>
                            </div>
                        </div>
                    </div>

                    {/* SERVICE DESCRIPTION */}
                    <div className={'flex flex-col mt-16 items-start'}>
                        <h1 className={'text-5xl capitalize text-dark font-bold text-start'}>{service.title}</h1>
                        <p className={'text-justify text-dark font-light text-2xl mt-8'}>{service.description}</p>
                        <p className={'text-justify text-dark font-normal text-2xl mt-8'}>{service.shortDescription}</p>
                    </div>

                    {/* SERVICE SECTIONS */}
                    <div className={'flex flex-col items-start'}>
                        {
                            service.sections?.map((section, index) => (
                                <>
                                    <div key={index} className={'h-1 w-full bg-gray-200 mt-16 rounded-full'}/>
                                    <div key={index} className={'flex flex-col mt-16 items-start'}>
                                        <h1 className={'text-4xl capitalize text-dark font-bold text-start'}>{section.title}</h1>
                                        <p className={'text-justify text-dark font-light text-xl mt-8'}>{section.description}</p>

                                        <div className={'mt-12 grid grid-cols-1 md:grid-cols-2 gap-6'}>
                                            {
                                                section.list?.map((item, i) => (
                                                    <div key={i}
                                                         className={'flex flex-row items-start justify-start gap-4'}>
                                                        <div
                                                            className={'min-h-[15px] h-[15px] mt-1 min-w-[15px] w-[15px] bg-primary-600 rounded-full'}/>
                                                        <p className={'text-start text-dark font-normal text-xl'}>{item}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                </div>
            </main>
        </>
    )
}


// Get Static Props
export const getStaticPaths = async () => {
    const services = await GetServices(false);
    const paths = services.data.map((service: IService) => ({
        params: {id: service._id.toString()}
    }))

    return {paths, fallback: false}
}

// Get Static Props
export const getStaticProps = async (context: any) => {
    // @ts-ignore
    const {id} = context.params;
    const res = await fetch(`${process.env.NEXY_PUBLIC_BASE_URL}/service/${id}`);
    const service = await res.json();

    return {
        props: {
            service: JSON.parse(JSON.stringify(service.data))
        }
    }
}
