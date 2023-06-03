import useCounter from '@/hooks/counter';
import Image from 'next/image';

const Grid = () => {

  return (
    <div className="relative  mt-8 md:mt-0">
      <div className="flex flex-row gap-4 ">
        <div className="md:h-[600px]">
          <Image
            className="object-cover w-full h-full mx-auto"
            height={500}
            loading="lazy"
            width={500}
            src="https://img.freepik.com/free-photo/diverse-businesspeople-discussing-management-paperwork-standing-conference-table_482257-14061.jpg?w=1060&t=st=1683825222~exp=1683825822~hmac=a43bc8b29779d19b901298631f8d4987247e5b81087545b4510ce8f3c91035af"
            alt="Image 2"
          />
        </div>
        <div className="hidden md:block md:h-[500px]">
          <Image
            className="object-cover w-full h-full"
            height={500}
            loading="lazy"
            width={500}
            src="https://img.freepik.com/free-photo/front-view-woman-working-home_23-2148470977.jpg?size=626&ext=jpg&ga=GA1.2.745640877.1667035334&semt=ais"
            alt="Image 1"
          />
        </div>
      </div>
    </div>
  );
};

export default Grid;
