import {AnimatedBtn} from '@/components';
import {SanityQuoteHome} from '@/types';
import Image from "next/image";

const Quote: React.FC<SanityQuoteHome> = ({ title, subtitle }) => {

  return (
    <div className="relative min-h-[30rem] w-full bg-primary-600 mt-[8rem] p-16 overflow-hidden">
      <Image src={'/bg-abstract.png'} alt={'bg'} fill />

      <div className="h-full container mx-auto flex justify-between items-center flex-1 gap-8 flex-col md:flex-row">
        {/* TEXT */}
        <div className=" flex flex-col justify-start items-center md:items-start gap-y-4 md:max-w-[65%]">
          <h2 className="text-6xl font-bold text-white text-center md:text-start">{title}</h2>
          <p className="text-2xl font-medium text-white hidden md:block">
            {subtitle}
          </p>
        </div>

        {/* Button */}
        <div className="flex flex-col justify-center items-center md:items-start gap-y-4">
          <AnimatedBtn text={'Let\'s Connect'} theme={"bg-black"} hoverTheme={"bg-neutral-800"} className={'text-3xl'} />
          </div>
      </div>
    </div>
  );
};
export default Quote;
