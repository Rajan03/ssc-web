import { Button, SectionHeader } from '@/components';
import { SectionLayout } from '@/layouts';
import { FaArrowAltCircleRight } from 'react-icons/fa';

type Props = {
  title: string;
  subtitle: string;
};
const Services: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <SectionLayout
      withContainer
      columnFlex
      className="justify-start px-8 items-start py-20"
    >
      <SectionHeader showLine title={subtitle} className="mb-8" />

      <div className="flex justify-between items-center">
        <div className="text-6xl font-bold text-dark leading-sm text-start">
          {title}
        </div>
        <Button
          text="View All"
          Icon={FaArrowAltCircleRight}
          iconPosition="right"
          className="text-primary-600 text-3xl"
          size="large"
          onlyText
          onClick={() => {}}
        />{' '}
        {/* TODO: Add href to services page */}
      </div>
    </SectionLayout>
  );
};

export default Services;
