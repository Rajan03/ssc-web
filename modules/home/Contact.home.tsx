import {AnimatedBtn, SectionHeader} from '@/components';
import {SanityContactHome} from '@/types/sanity';
import Image from 'next/image';
import {useState} from "react";
import toast from "react-hot-toast";

const Contact: React.FC<SanityContactHome> = ({title, subtitle, image, description}) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

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
                body: JSON.stringify({name, email, message}),
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                }
            })

            if ((await res.json()).status === 200) {
                setLoading(false);
                setMessage('');
                setName('');
                setEmail('');
                toast.success('Message sent successfully');
            } else {
                setLoading(false);
                toast.error('Something went wrong');
            }
        } catch (e) {
            toast.error('Something went wrong');
        }
    };

    return (
        <section className="bg-dark/80 relative px-8 py-24 my-40">
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden z-[-1]">
                <Image
                    src={image}
                    fill
                    alt={title}
                    className="object-cover object-top"
                />

                {/* Background Overlay */}
                <div className="absolute w-[30rem] h-full bg-primary-400/60 skew-x-12 animate-linear"/>
            </div>

            <div className="container mx-auto flex justify-start items-stretch gap-12 flex-col md:flex-row">
                {/* Title, Subtitle and description */}
                <div className="py-20 flex-1 flex flex-col justify-start items-stretch">
                    <SectionHeader showLine title={subtitle} className="mb-8"/>
                    <div className="text-6xl font-bold text-white leading-sm text-start">
                        {title}
                    </div>

                    <div className="mt-8 text-2xl font-base text-white leading-sm text-start">
                        {description}
                    </div>
                </div>

                {/* FORM */}
                <div className="flex-1 flex justify-center md:justify-end relative">
                    <form
                        onSubmit={handleSubmit}
                        className={"w-full xl:w-[80%] flex flex-col justify-start items-stretch gap-y-8 p-8 bg-white " +
                            "rounded-md relative top-[30%]"}
                    >
                        <h4 className="text-6xl font-bold text-dark leading-sm text-start self-center">
                            Get in touch
                        </h4>
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full web-input"
                        />

                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full web-input"
                        />

                        <textarea
                            placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full web-input resize-none h-[9rem]"
                        />

                        <AnimatedBtn
                            type="submit"
                            text="Send"
                            loading={loading}
                            disabled={loading}
                        />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
