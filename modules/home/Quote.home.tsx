import { Button } from '@/components';
import { SanityQuoteHome } from '@/types';
import Image from "next/image";
import {QUOTE_BG} from "@/utils/constant";

const Quote: React.FC<SanityQuoteHome> = ({ title, subtitle }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
  };
  return (
    <div className="relative h-[30rem] w-full bg-primary-600 mt-[8rem] p-16 overflow-hidden">
      <Image src={QUOTE_BG} alt={'bg'} fill />

      <div className="h-full container mx-auto flex justify-between items-center flex-1 gap-8 flex-col md:flex-row">
        {/* TEXT */}
        <div className=" flex flex-col justify-start items-center md:items-start gap-y-4 max-w-[65%]">
          <h2 className="text-6xl font-bold text-white">{title}</h2>
          <p className="text-2xl font-medium text-white hidden md:block">
            {subtitle}
          </p>
        </div>

        {/* Button */}
        <div className="flex flex-col justify-center items-center md:items-start gap-y-4">
          <Button theme={'secondary'} size={'large'} onClick={() => console.log('clicked')}
                  className="w-[20rem] h-[6rem] text-3xl shadow-2xl animate-bounce hover:animate-none " text={'Let\'s Connect'} />
        </div>
      </div>
    </div>
  );
};
export default Quote;
