import {AnimatedBtn, SectionHeader, InputWithIcon} from "@/components";
import React, {useState} from "react";
import {BiUser} from "react-icons/bi";
import {CiMail} from "react-icons/ci";
import toast from "react-hot-toast";
// import {sendContactForm} from "@/services/AppService";


const ContactForm = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [subject, setSubject] = useState<string>('');

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (name === '' || email === '' || message === '') {
            toast.error('Please fill all the fields')
            return;
        }

        try {
            setLoading(true);
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({name, email, message}),
            })

            if ((await res.json()).status === 200) {
                setLoading(false);
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
                toast.success('Message sent successfully');
            } else {
                setLoading(false);
                toast.error('Something went wrong');
            }
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
                        <InputWithIcon Icon={BiUser} value={name} type="text" placeholder={'Full Name'} disabled={loading}
                                       label={'Full Name'} onChange={e => setName(e.target.value)}/>
                        <InputWithIcon Icon={CiMail} value={email} type="email" placeholder={'Email'} disabled={loading}
                                       label={'Email'} onChange={e => setEmail(e.target.value)}/>
                    </div>

                    <InputWithIcon type="text" placeholder={'Subject'} value={subject} className={'mt-10'} disabled={loading}
                                   label={'Subject'} onChange={e => setSubject(e.target.value)}/>
                    <InputWithIcon placeholder={'Message'} value={message} className={'h-40 mt-10'} disabled={loading}
                                   label={'Message'} onChange={e => setMessage(e.target.value)}/>

                    <AnimatedBtn disabled={loading} loading={loading} type={'submit'} text={'Send'} className={'mt-16'}/>
                </form>
            </div>
        </>
    )
}

export default ContactForm
