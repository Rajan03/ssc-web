import {AnimatedBtn, InputWithIcon, Modal} from "@/components";
import {useResourceModal} from "@/hooks/modals";
import React, {useState} from "react";
import {BiUser} from "react-icons/bi";
import {CiMail} from "react-icons/ci";
import toast from "react-hot-toast";

export default function ResourceModal() {
    const {open, setIsOpen, resource} = useResourceModal();
    const [loading, setLoading] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    if (!resource) return null;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (name === '' || email === '') {
            toast.error('Please fill all the fields')
            return;
        }

        try {
            setLoading(true);
            const res = await fetch('/api/resource/request', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({name, email, resource: resource.title}),
            })
            if ((await res.json()).status === 200) {
                setLoading(false);
                setName('');
                setEmail('');
                toast.success('Resource request sent successfully! You will be notified through email.');
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
        setLoading(false);
    }

    return (
        <>
            <Modal isOpen={open} onClose={handleCancel}>
                {/* MODAL TITLE */}
                <div className='col-span-2 border-b border-neutral-200 text-dark flex flex-col items-start p-4'>
                    <p className='text-3xl font-bold uppercase'>Purchase {resource.title} ?</p>
                    <p className='text-lg text-gray-400 font-normal max-w-2xl text-center mt-2'>
                        Drop a mail to us and we will get back to you as soon as possible.
                    </p>
                </div>

                {/* MODAL DESC */}
                <div className="flex flex-col justify-start items-stretch gap-y-8 p-4">
                    <div className='flex flex-col justify-start items-start'>
                        <p className='text-lg font-bold text-dark'>Description</p>
                        <p className='text-lg font-light text-gray-400 max-w-5xl text-start'>{resource.description}</p>
                    </div>

                    <div className='flex flex-col justify-start items-start'>
                        <p className='text-lg font-bold text-dark'>{resource.title} includes - </p>
                        <ul className='list-disc list-inside'>
                            {resource.included?.map((feature, index) => (
                                <li key={index} className='text-lg font-light text-gray-400'>{feature}</li>
                            ))}
                        </ul>
                    </div>

                </div>


                {/* MODAL FORM */}
                <form onSubmit={handleSubmit} className={'mt-12 min-w-3xl'}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <InputWithIcon Icon={BiUser} type="text" placeholder={'Full Name'} label={'Full Name'}
                                       disabled={loading}
                                       value={name} onChange={e => setName(e.target.value)}/>
                        <InputWithIcon Icon={CiMail} type="email" placeholder={'Email'} label={'Email'}
                                       disabled={loading}
                                       value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>

                    <InputWithIcon type="text" placeholder={'Resource Name'} disabled={true} label={'Resource Name'}
                                   value={resource.title} className={'mt-8'}/>

                    <AnimatedBtn disabled={loading} loading={loading} type={'submit'} text={'Send'}
                                 className={'mt-12 mx-auto'}/>
                </form>
            </Modal>
        </>
    )
}
