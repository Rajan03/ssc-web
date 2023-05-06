import { SectionHeader } from '@/components';
import { SanityHeroHome } from '@/types';

const Hero: React.FC<SanityHeroHome> = (props) => {
  const { name, subtitle, description } = props;
  return (
    <>
      <section className="container mx-auto h-full flex items-center justify-center">
        {/* HERO Text Section */}
        <div className="flex flex-col items-start justify-start gap-y-6">
          <SectionHeader title={subtitle} />
          <div className="text-5xl font-bold text-center text-dark">{name}</div>
          <p className="text-xl text-center text-dark">{description}</p>
        </div>

        {/* HERO Images Section */}
        <div className="flex flex-col items-center justify-center gap-y-6"></div>
      </section>
    </>
  );
};

export default Hero;
