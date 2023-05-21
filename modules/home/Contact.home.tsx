import { Button, SectionHeader } from '@/components';
import { SanityContactHome } from '@/types/sanity';
import Image from 'next/image';
import { BiSend } from 'react-icons/bi';

const Contact: React.FC<SanityContactHome> = ({
  title,
  subtitle,
  image,
  description,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <section className="bg-dark/80 relative px-8 py-24 mt-40">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden z-[-1]">
        <Image
          src={image}
          fill
          alt={title}
          className="object-cover object-top"
        />

        {/* Background Overlay */}
        <div className="absolute w-[30rem] h-full bg-primary-400/60 skew-x-12 animate-linear" />
      </div>

      <div className="container mx-auto flex justify-start items-stretch gap-12 flex-col md:flex-row">
        {/* Title, Subtitle and description */}
        <div className="py-20 flex-1 flex flex-col justify-start items-stretch">
          <SectionHeader showLine title={subtitle} className="mb-8" />
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
            className="w-full xl:w-[80%] flex flex-col justify-start items-stretch gap-y-8 p-8 bg-white rounded-md absolute top-[40%]"
          >
            <h4 className="text-6xl font-bold text-dark leading-sm text-start self-center">
              Get in touch
            </h4>
            <input
              type="text"
              placeholder="Name"
              className="w-full web-input"
            />

            <input
              type="text"
              placeholder="Email"
              className="w-full web-input"
            />

            <textarea
              placeholder="Message"
              className="w-full web-input resize-none h-[9rem]"
            />

            <Button
              type="submit"
              text="Send"
              size="large"
              onClick={handleSubmit}
              Icon={BiSend}
              iconPosition="right"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
