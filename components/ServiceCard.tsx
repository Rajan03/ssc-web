import { IService } from '@/types';
import Image from 'next/image';
import { HiExternalLink } from 'react-icons/hi';
import Button from './Button';
import Link from "next/link";

const ServiceCard = (props: IService) => {
  return (
    <>
      <Link href={'/services/' + props._id} className="relative w-full h-full min-h-[48rem] overflow-hidden rounded flex flex-col justify-end group">
        <Image
          src={props.image}
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
            {props.title}
          </div>

          {/* Description */}
          <div className="text-xl text-dark mt-4">{props.shortDescription}</div>

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
      </Link>
    </>
  );
};

export default ServiceCard;
