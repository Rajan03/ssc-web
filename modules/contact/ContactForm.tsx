import {AnimatedBtn, SectionHeader} from "@/components";
import React from "react";
import {BiUser} from "react-icons/bi";
import {CiMail} from "react-icons/ci";
import {BsFillJournalBookmarkFill} from "react-icons/bs";
import {AiOutlineMessage} from "react-icons/ai";

const InputWithIcon = (props: any) => {
    const {Icon} = props;

    return <div className="relative">
        <input type="text" className={'web-input w-full'} {...props} />
        <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
            <Icon className={'text-3xl text-primary-600'}/>
        </div>
    </div>
}

const ContactForm = () => {
    return (
        <>
            <div className={'max-w-[70%] mx-auto py-20 px-16 shadow-2xl rounded flex flex-col'}>
                <div className={"self-center flex flex-col items-center"}>
                    <SectionHeader title={'Get in touch'} showLine/>
                    <div className="text-6xl font-bold text-dark leading-sm text-start">
                        We are here to help you
                    </div>
                </div>

                <form className={'mt-16'}>
                    <div className="grid grid-cols-2 gap-4">
                        <InputWithIcon Icon={BiUser} type="text" placeholder={'Full Name'}/>
                        <InputWithIcon Icon={CiMail} type="email" placeholder={'Email'}/>
                    </div>

                    <InputWithIcon Icon={BsFillJournalBookmarkFill} type="text" placeholder={'Subject'}
                                   className={'web-input w-full mt-10'}/>
                    <InputWithIcon Icon={AiOutlineMessage} placeholder={'Message'} className={'web-input w-full h-40 mt-10 resize-none'}/>

                    <AnimatedBtn text={'Send'} className={'mt-16'}/>
                </form>
            </div>
        </>
    )
}

export default ContactForm
