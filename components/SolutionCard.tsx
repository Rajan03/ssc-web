import Image from 'next/image';

type SolutionCardProps = {
  title: string;
  description: string;
  image: string;
};

const SolutionCard: React.FC<SolutionCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <>
      <div className="w-full min-h-[25rem] shadow-lg rounded-lg p-12 flex flex-col justify-center items-start">
        <Image
          src={image}
          alt={title}
          height={60}
          width={60}
          className="object-cover object-center"
        />

        <h5 className="text-dark font-bold text-3xl mt-8">{title}</h5>
        <p className="text-dark font-normal text-lg mt-4">{description}</p>
      </div>
    </>
  );
};

export default SolutionCard;
