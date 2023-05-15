import Image from 'next/image';
import { HiExternalLink } from 'react-icons/hi';
import Button from './Button';

const ServiceCard = () => {
  const imgAdd =
    'https://img.freepik.com/premium-photo/happy-businessman_107420-77330.jpg?size=626&ext=jpg&ga=GA1.1.1629651619.1683994096&semt=ais';
  return (
    <>
      <div className="relative w-full h-full min-h-[48rem] overflow-hidden rounded flex flex-col justify-end group">
        <Image
          src={imgAdd}
          fill
          alt="service"
          className="object-right object-cover absolute inset-0 z-[0] cursor-pointer peer"
        />
        <div
          className="absolute h-full w-full -bottom-[100%] bg-black bg-opacity-40 cursor-pointer z-[0] transition-all duration-500 ease-in-out 
        group-hover:bottom-0 hover:bottom-0"
        />

        <div className="relative w-full min-h-[35%] flex flex-col justify-center p-8 bg-white z-[2] rounded">
          {/* Title */}
          <div className="text-4xl font-bold text-dark leading-sm text-start">
            Service Title
          </div>

          {/* Description */}
          <div className="text-xl text-dark mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, voluptate, quibusdam, quia voluptas quod quos
          </div>

          {/* Button */}
          <Button
            text=""
            Icon={HiExternalLink}
            iconPosition="right"
            iconClassName="h-10 w-10"
            size="large"
            onClick={() => console.log('Hello Hero Btn')}
            className="absolute top-[-16px] right-8 z-[3] group-hover:animate-bounce"
          />
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
