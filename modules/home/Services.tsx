import { Button, SectionHeader, ServiceCard } from '@/components';
import { SectionLayout } from '@/layouts';
import { FaArrowAltCircleRight } from 'react-icons/fa';

type Props = {
  title: string;
  subtitle: string;
};
const Services: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="bg-dark ">
      <SectionLayout
        withContainer
        columnFlex
        className="relative justify-start px-8 items-center sm:items-stretch pb-20 pt-40"
      >
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
            onClick={() => {}}
          />
          {/* TODO: Add href to services page */}
        </div>

        {/* Services */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-16">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </SectionLayout>
    </div>
  );
};

export default Services;
