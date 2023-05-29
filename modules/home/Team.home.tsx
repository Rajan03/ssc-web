import { SectionHeader, TeamCard } from '@/components';
import { SanityTeamsHome } from '@/types/sanity';

const Teams: React.FC<SanityTeamsHome> = ({ title, subtitle, coaches }) => {
  return (
    <section className="container mx-auto relative flex flex-col justify-start items-stretch pb-20 pt-40">
      <SectionHeader showLine title={subtitle} className="mb-8" />
      <div className="text-6xl font-bold text-dark leading-sm text-start">
        {title}
      </div>

      {/* Team Cards - 4 Only */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-28 mt-16">
        {coaches?.map((coach) => (
          <TeamCard key={coach._id} {...coach} />
        ))}
      </div>
    </section>
  );
};

export default Teams;
