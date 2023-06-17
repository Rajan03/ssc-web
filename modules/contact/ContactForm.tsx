import {AnimatedBtn, SectionHeader} from "@/components";
import React, {useState} from "react";
import {BiUser} from "react-icons/bi";
import {CiMail} from "react-icons/ci";
import {InputWithIcon} from "@/components";
import toast from "react-hot-toast";
import {SendContactForm} from "@/services/AppService";


const ContactForm = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [subject, setSubject] = useState<string>('');

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (name === '' || email === '' || message === '') {
            alert('Please fill all the fields');
            return;
        }

        try {
            await SendContactForm({name, email, message});
            setName('');
            setEmail('');
            setMessage('');
            toast.success('Message sent successfully');
        }
        catch (e) {
            toast.error('Something went wrong');
        }
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
                        <InputWithIcon Icon={BiUser} value={name} type="text" placeholder={'Full Name'}
                                       label={'Full Name'} onChange={e => setName(e.target.value)}/>
                        <InputWithIcon Icon={CiMail} value={email} type="email" placeholder={'Email'}
                                       label={'Email'} onChange={e => setEmail(e.target.value)}/>
                    </div>

                    <InputWithIcon type="text" placeholder={'Subject'} value={subject} className={'mt-10'}
                                   label={'Subject'} onChange={e => setSubject(e.target.value)}/>
                    <InputWithIcon placeholder={'Message'} value={message} className={'h-40 mt-10'}
                                   label={'Message'} onChange={e => setMessage(e.target.value)}/>

                    <AnimatedBtn type={'submit'} text={'Send'} className={'mt-16'}/>
                </form>
            </div>
        </>
    )
}

export default ContactForm
