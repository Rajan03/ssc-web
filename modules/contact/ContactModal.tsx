import {Modal} from "@/components";
import {useContactModal} from "@/hooks/modals";
import React from "react";
import {BiUser} from "react-icons/bi";
import {CiMail} from "react-icons/ci";
import {AnimatedBtn, InputWithIcon} from "@/components";

export default function ContactModal() {
    const {open, setIsOpen, team} = useContactModal();

    if (!team) return null;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const handleCancel = () => {
        setIsOpen(false);
    }

    const getInTouch = () => {

    }


    return (
        <>
            <Modal isOpen={open} onClose={handleCancel} className={'px-12 py-12'}>
                {/* MODAL TITLE */}
                <div className='col-span-2 border-b border-neutral-200 text-dark flex flex-col items-center p-4'>
                    <p className='text-3xl font-bold uppercase'>Drop a mail to {team.name} ?</p>
                    <p className='text-lg text-gray-400 font-normal max-w-2xl text-center mt-2'>
                        Want to connect with {team.name} for any consultancy query, Please fill the form below
                    </p>
                </div>

                {/* MODAL FORM */}
                <form onSubmit={handleSubmit} className={'mt-8 min-w-3xl'}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <InputWithIcon type="text" placeholder={'Full Name'} label={'Full Name'}/>
                        <InputWithIcon type="email" placeholder={'Email'} label={'Email'}/>
                    </div>

                    <InputWithIcon type="text" placeholder={'Subject'} label={'Subject'} className={'mt-10'}/>
                    <InputWithIcon placeholder={'Message'} value={''} className={'h-40 mt-10'} label={'Message'}/>

                    <AnimatedBtn type={'submit'} text={'Send'} className={'mt-16 mx-auto'}/>
                </form>
            </Modal>
        </>
    )
}
