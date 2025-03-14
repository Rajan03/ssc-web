import {AnimatedBtn, SectionHeader} from '@/components';
import {SanityHeroHome} from '@/types';
import Image from 'next/image';

const Hero: React.FC<SanityHeroHome> = (props) => {
    const {name, subtitle, description, image} = props;

    return (
        <>
            <section className="relative overflow-hidden min-h-[inherit]">
                <div
                    className="lg:w-[60%] md:w-[80%] bg-primary-600 left-6 absolute w-full h-full
        md:rounded-br-[70%]"
                />

                {/* HERO Text Section */}
                <div
                    className="lg:w-[60%] md:w-[80%] lg:max-w-[60%] absolute left-0 w-full h-full bg-dark md:hero-clip-dark md:rounded-br-[70%]
         flex flex-col items-center
        md:items-start justify-center px-4 sm:px-16 md:max-w-[80%]"
                >
                    {/* SUBTITLE */}
                    <SectionHeader title={subtitle} className="mb-8"/>

                    {/* TITLE */}
                    <h1 className="text-6xl md:text-8xl font-bold text-white leading-sm text-center md:text-start">
                        {name}
                    </h1>

                    {/* DESCRIPTION */}
                    {description && (
                        <p className="w-[80%] text-2xl text-white mt-8 text-center md:text-start">
                            {description}
                        </p>
                    )}

                    {/* BUTTON */}
                    <AnimatedBtn
                        theme={'bg-primary-600'}
                        hoverTheme={'bg-primary-900'}
                        text="Get Started"
                        className="mt-20"
                        link={'/contact'}
                    />
                </div>

                {/* HERO Images Section */}
                <Image
                    src={image}
                    alt={'image'}
                    fill
                    priority
                    className={
                        'hidden md:block rounded select-none object-cover object-center absolute inset-0 z-[-1] animate-fase-in'
                    }
                />
            </section>
        </>
    );
};

export default Hero;
