import {AnimatedBtn, InputWithIcon, Modal} from "@/components";
import {useContactModal} from "@/hooks/modals";
import React, {useState} from "react";
import toast from "react-hot-toast";

export default function ContactModal() {
    const {open, setIsOpen, team} = useContactModal();
    const [loading, setLoading] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    if (!team) return null;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
                setMessage('');
                toast.success('Message sent successfully');
            } else {
                setLoading(false);
                toast.error('Something went wrong');
            }
        } catch (e) {
            toast.error('Something went wrong');
        }
    }

    const handleCancel = () => {
        setIsOpen(false);
        setName('');
        setEmail('');
        setMessage('');
    }


    return (
        <>
            <Modal isOpen={open} onClose={handleCancel} className={'p-12'}>
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
                        <InputWithIcon value={name} type="text" placeholder={'Full Name'} disabled={loading}
                                       label={'Full Name'} onChange={e => setName(e.target.value)}/>
                        <InputWithIcon value={email} type="email" placeholder={'Email'} disabled={loading}
                                       label={'Email'} onChange={e => setEmail(e.target.value)}/>
                    </div>

                    <InputWithIcon placeholder={'Message'} value={message} className={'h-40 mt-10'} disabled={loading}
                                   label={'Message'} onChange={e => setMessage(e.target.value)}/>

                    <AnimatedBtn disabled={loading} loading={loading} type={'submit'} text={'Send'} className={'mt-16 mx-auto'}/>
                </form>
            </Modal>
        </>
    )
}
