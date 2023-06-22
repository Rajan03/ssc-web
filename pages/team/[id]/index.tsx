import Image from "next/image";
import {MdCall, MdEmail} from "react-icons/md";
import {AnimatedBtn} from "@/components";
import React from "react";
import {GetServerSideProps, GetStaticProps} from "next";
import {ITeam} from "@/types";
import {useContactModal} from "@/hooks/modals";
import Head from "next/head";
import {GetCoach, GetCoachesData} from "@/services/AppService";

interface TeamMemberProps {
    team: ITeam
}

export default function TeamMember({team}: TeamMemberProps) {
    const {setIsOpen: setContactModal, setTeam} = useContactModal();

    const getInTouch = () => {
        setTeam(team);
        setContactModal(true);
    }

    return (
        <>
            <Head>
                <title>SSC | Coach</title>
            </Head>
            <main className="container mx-auto grid grid-rows-[1fr,_2fr_,2fr,_1fr] grid-cols-1
            lg:grid-cols-[50%,_50%] gap-x-12 p-for-nav mt-8">
                {team.image && (<div className="row-span-4 relative rounded-md w-full min-h-[50rem]">
                    <Image src={team.image} alt={'modal image'} fill
                           className={'rounded-[inherit] object-cover object-top'}/>
                </div>)}

                {/* MODAL TITLE */}
                <div className='border-b border-neutral-200 text-dark flex flex-col items-center p-6'>
                    <p className='text-4xl font-bold uppercase'>{team.name}</p>
                    <p className='text-lg font-normal capitalize'>{team.position}</p>
                    <div className='flex flex-row justify-center items-center space-x-4 mt-3'>
                        {team.skills?.map((skill, index) => (
                            <p key={index}
                               className='text-lg font-medium text-dark bg-primary-600/20 px-3 py-1 rounded-full truncate'>
                                {skill.name}
                            </p>
                        ))}
                    </div>
                </div>

                {/* CONTACT LOCATION ABOUT */}
                <div className="flex flex-col justify-start items-stretch gap-y-8 mt-8">
                    {/* MODAL CONTACT */}
                    <div className='flex flex-col justify-start items-start'>
                        <p className='text-2xl font-bold text-dark'>Contact</p>
                        <div className='flex flex-row justify-start items-center space-x-12 mt-3'>
                            <a href={`tel:${team.phone}`}
                               className='flex flex-row justify-start items-center space-x-2'>
                                <MdCall className='text-2xl text-primary-600'/>
                                <p className='text-xl font-normal text-dark'>{team.phone}</p>
                            </a>
                            <a href={`mailto:${team.email}`}
                               className='flex flex-row justify-start items-center space-x-2'>
                                <MdEmail className='text-2xl text-primary-600'/>
                                <p className='text-xl font-normal text-dark'>{team.email}</p>
                            </a>
                        </div>
                    </div>

                    {/* MODAL LOCATION */}
                    <div className='flex flex-col justify-start items-start'>
                        <p className='text-2xl font-bold text-dark'>Location</p>
                        <p className='text-xl font-normal text-dark mt-3'>{team.location}</p>
                    </div>

                    {/* MODAL BODY */}
                    <div className='flex flex-col justify-start items-start'>
                        <p className='text-2xl font-bold text-dark'>About</p>
                        <p className='text-xl font-normal text-justify text-dark mt-3'>{team.description}</p>
                    </div>
                </div>

                {/* EXPERIENCE */}
                <div className="flex flex-col justify-start items-stretch gap-y-8 mt-8">
                    {/* MODAL EXPERIENCE */}
                    <div className='flex-1 flex flex-col justify-start items-stretch'>
                        <p className='text-2xl font-bold text-dark'>Experience</p>
                        <div
                            className='flex-1 flex flex-col sm:flex-row lg:flex-col justify-start items-center md:items-start gap-6 mt-6 mb-12'>
                            {team.experience && team.experience.length > 0
                                ? team.experience.map((e, i) => (
                                    <div key={e._id}
                                         className={`max-w-[40rem] flex flex-col justify-around items-start border border-neutral-100
                                        p-4 rounded-md bg-white text-dark shadow-md shadow-gray-200 w-full
                                        relative overflow-hidden min-h-[10rem]`}>
                                        <p className='text-2xl font-bold capitalize truncate'>{e.name}</p>
                                        <p className='text-xl font-normal mt-6'>
                                            <span>{e.duration}</span>
                                            <span
                                                className={'ml-2 text-primary-600 font-semibold'}>({e.position})</span>
                                        </p>
                                        <p className='text-5xl font-semibold text-white bg-primary-600 w-40 h-40 rounded-full
                                    absolute top-[-20px] right-[-20px] flex justify-start items-end pl-16 pb-8'>{i + 1}</p>
                                    </div>
                                ))
                                : <p className='self-center py-8 text-3xl font-normal text-neutral-400 capitalize'>
                                    No prior experience
                                </p>}
                        </div>
                    </div>
                </div>

                {/* Action */}
                <div className='flex flex-row justify-end items-end'>
                    <AnimatedBtn onClick={getInTouch} text={'Get In touch'}/>
                </div>
            </main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    // @ts-ignore
    const {id} = context.params;
    console.log('>>>>>>>>>> ID: ', id)
    const team = await GetCoach(id);

    console.log('>>>>>>>>>> TEAM PAGE: ', team)
    if (team.code !== 200) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            team: JSON.parse(JSON.stringify(team.data))
        }
    }
}

