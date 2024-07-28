import {Button, Modal} from "@/components";
import {useContactModal, useTeamModal} from "@/hooks/modals";
import Image from "next/image";
import React from "react";
import {MdCall, MdEmail} from "react-icons/md";

export default function TeamModal() {
    const {open, setIsOpen, team} = useTeamModal();
    const {setIsOpen: setContactModal, setTeam} = useContactModal();

    if (!team) return null;
    const handleCancel = () => {
        setIsOpen(false);
    }

    const getInTouch = () => {
        setTeam(team);
        setContactModal(true);

        setIsOpen(false)
    }


    return (
        <>
            <Modal isOpen={open} onClose={handleCancel} className={'relative max-h-[70rem] overflow-y-auto scrollbar-hide p-0'}>
                <div className="grid grid-cols-[60%,_40%] max-w-[32rem] vsm:max-w-[40rem] md:max-w-[55rem]">
                    {team.image && (<div className="col-span-2 relative h-[25rem] rounded-t-2xl w-full">
                        <Image src={team.image} alt={'modal image'} fill
                               className={'rounded-[inherit] object-cover object-top'}/>
                    </div>)}

                    {/* MODAL TITLE */}
                    <div className='col-span-2 border-b border-neutral-200 text-dark flex flex-col items-center p-6'>
                        <p className='text-3xl font-bold uppercase'>{team.name}</p>
                        <p className='text-lg font-normal capitalize'>{team.position}</p>
                        <div className='flex flex-row justify-center items-center space-x-4 mt-3'>
                            {team.skills?.map((skill, index) => (
                                <p key={index} className='text-lg font-medium text-dark bg-primary-600/20 px-3 py-1 rounded-full truncate'>
                                    {skill.name}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* LEFT */}
                    <div className="col-span-2 md:col-span-1 flex flex-col justify-start items-stretch gap-y-8 p-6 md:pr-2">
                        {/* MODAL CONTACT */}
                        <div className='flex flex-col justify-start items-start'>
                            <p className='text-lg font-bold text-dark'>Contact</p>
                            <div className='flex flex-row justify-start items-center space-x-8 mt-1'>
                                <a href={`tel:${team.phone}`}
                                   className='flex flex-row justify-start items-center space-x-2'>
                                    <MdCall className='text-2xl text-primary-600'/>
                                    <p className='text-lg font-normal text-dark'>{team.phone}</p>
                                </a>
                                <a href={`mailto:${team.email}`}
                                   className='flex flex-row justify-start items-center space-x-2'>
                                    <MdEmail className='text-2xl text-primary-600'/>
                                    <p className='text-lg font-normal text-dark'>{team.email}</p>
                                </a>
                            </div>
                        </div>

                        {/* MODAL LOCATION */}
                        <div className='flex flex-col justify-start items-start'>
                            <p className='text-lg font-bold text-dark'>Location</p>
                            <p className='text-lg font-normal text-dark'>{team.location}</p>
                        </div>

                        {/* MODAL BODY */}
                        <div className='flex flex-col justify-start items-start'>
                            <p className='text-lg font-bold text-dark'>About</p>
                            <p className='text-lg font-normal text-justify text-dark mt-1'>{team.description}</p>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="col-span-2 md:col-span-1 flex flex-col justify-start items-stretch p-6 md:pl-2">
                        {/* MODAL EXPERIENCE */}
                        <div className='flex flex-col justify-start items-start'>
                            <p className='text-lg font-bold text-dark'>Experience</p>
                            {team.experience
                                ? team.experience.map((e, i) => (
                                    <div key={e._id}
                                         className='flex flex-col justify-start items-start my-2 border border-neutral-200
                                        space-y-2 p-4 rounded-md bg-white text-dark shadow-sm w-full relative'>
                                        <p className='text-lg font-bold capitalize'>{e.name}</p>
                                        <p className='text-lg font-normal'>
                                            <span>{e.duration}</span>
                                            <span
                                                className={'ml-2 text-primary-600 font-semibold'}>({e.position})</span>
                                        </p>
                                        <p className='text-lg font-normal'>{i}</p>
                                    </div>
                                ))
                                : <p className='text-lg font-normal text-dark'>No experience</p>}
                        </div>
                    </div>
                </div>

                {/* Action */}
                <div className='sticky bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex flex-row justify-end items-center p-6'>
                    <Button onClick={getInTouch} text={'Get In touch'}
                            size={'medium'} Icon={MdEmail} iconPosition={'left'} />
                </div>
            </Modal>
        </>
    )
}
