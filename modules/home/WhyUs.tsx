import { SectionHeader, SolutionCard } from '@/components';
import { SanityWhyUsHome } from '@/types';
import Image from 'next/image';

const WhyUs: React.FC<SanityWhyUsHome> = ({
  title,
  subtitle,
  image,
  solutions,
}) => {
  return (
    <div className="container mx-auto flex flex-col py-24">
      <SectionHeader showLine title={subtitle} className="mb-8" />
      <div className="lg:max-w-[50%] text-6xl font-bold text-dark leading-sm text-start capitalize">
        {title}
      </div>

      <div className="flex flex-col lg:flex-row mt-8">
        <div className="flex-[40%] py-12">
          <Image
            src={image}
            alt="why us"
            width={100}
            height={100}
            loading="lazy"
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="flex-[60%] flex flex-col md:flex-row justify-evenly items-end gap-x-12 p-12">
          {solutions.map((solution) => (
            <SolutionCard key={solution._id} {...solution} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
