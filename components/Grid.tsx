import Image from 'next/image';
import useCounter from "@/hooks/counter";

const Grid = () => {
  const count = useCounter(180);

  return (
    <div className="relative   md:h-[600px] mt-8 md:mt-0">
      <div className="absolute grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2">
        <div className="md:h-[600px]">
          <Image
            className="object-cover w-full h-full"
            height={500}
            loading="lazy"
            width={500}
            src="https://img.freepik.com/free-photo/diverse-businesspeople-discussing-management-paperwork-standing-conference-table_482257-14061.jpg?w=1060&t=st=1683825222~exp=1683825822~hmac=a43bc8b29779d19b901298631f8d4987247e5b81087545b4510ce8f3c91035af"
            alt="Image 2"
          />
        </div>
        <div className="md:h-[500px]">
          <Image
            className="object-cover w-full h-full"
            height={500}
            loading="lazy"
            width={500}
            src="https://img.freepik.com/free-photo/front-view-woman-working-home_23-2148470977.jpg?size=626&ext=jpg&ga=GA1.2.745640877.1667035334&semt=ais"
            alt="Image 1"
          />
        </div>
        <div className="relative bg-red-500 h-[300px]
        w-full md:absolute md:w-[200px] md:top-[250px] ml-20
        md:ml-[40%] xl:ml-[40%] text-center text-white flex justify-center items-center">
          <div>
            <h1 className="mb-2 text-5xl font-bold text-white">{count}+</h1>
            <h2 className="text-3xl font-bold text-white">Get National Award</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
