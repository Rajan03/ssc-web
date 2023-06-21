import { Button, SectionHeader, ServiceCard } from '@/components';
import { IService } from '@/types';
import { FaArrowAltCircleRight } from 'react-icons/fa';

type Props = {
  title: string;
  subtitle: string;
  services?: IService[];
};
const Services: React.FC<Props> = ({ title, subtitle, services }) => {
  return (
    <div className="bg-dark ">
      <div className="container mx-auto relative flex flex-col justify-start items-stretch pb-20 pt-40">
        <SectionHeader showLine title={subtitle} className="mb-8" />

        {/* Header and btn */}
        <div className="flex justify-between items-center">
          <div className="text-6xl font-bold text-white leading-sm text-start">
            {title}
          </div>
          <Button
            text="View All"
            Icon={FaArrowAltCircleRight}
            iconPosition="right"
            className="absolute right-0 text-secondary text-3xl hidden md:flex"
            size="large"
            onlyText
            link={'/services'}
          />
        </div>

        {/* Services */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-16">
          {services?.map((service) => (
            <ServiceCard key={service._id} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
