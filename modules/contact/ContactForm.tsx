import {AnimatedBtn, SectionHeader} from "@/components";
import React from "react";
import {BiUser} from "react-icons/bi";
import {CiMail} from "react-icons/ci";
import {InputWithIcon} from "@/components";


const ContactForm = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <>
            <div
                className={'mt-40 max-w-[100rem] w-[90%] sm:w-[80%] md:w-[70%] mx-auto py-20 px-16 shadow-2xl rounded flex flex-col'}>
                <div className={"self-center flex flex-col items-center"}>
                    <SectionHeader title={'Get in touch'} showLine/>
                    <div className="text-6xl font-bold text-dark leading-sm text-center md:text-start">
                        We are here to help you
                    </div>
                </div>

                <form onSubmit={handleSubmit} className={'mt-16'}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <InputWithIcon Icon={BiUser} type="text" placeholder={'Full Name'} label={'Full Name'}/>
                        <InputWithIcon Icon={CiMail} type="email" placeholder={'Email'} label={'Email'}/>
                    </div>

                    <InputWithIcon type="text" placeholder={'Subject'} className={'mt-10'} label={'Subject'}/>
                    <InputWithIcon placeholder={'Message'} value={''} className={'h-40 mt-10'} label={'Message'}/>

                    <AnimatedBtn type={'submit'} text={'Send'} className={'mt-16'}/>
                </form>
            </div>
        </>
    )
}

export default ContactForm
