import Image from "next/image";

const Card: React.FC = () => {
  return (
    <>
      <div className=" w-full top-[500px] mb-4 sm:mb-20 h-[500px] sm:h-[500px]">
        <div className="relative w-full mt-8 sm:mt-0 h-full">
          <Image
            className="object-cover w-full h-full"
            src="https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15874.jpg?"
            alt="Company Image"
            layout="fill"
          />
          <div className="absolute w-[50%] top-0 left-0 h-full bg-gradient-to-r from-black to-gray-900 rounded-br-full rounded-tr-[20%]">
            <div className="flex items-end justify-end flex-col p-6 mt-[100px] sm:mt-24 sm:mr-[20%]">
            <h1 className="mb-2 text-5xl mt-[100px] font-bold text-white dark:text-neutral-50 sm:mt-30 sm:mr-[30%]">
  HOME | <span className="text-red-500">COMPANY ABOUT</span>
</h1>
<h2 className="mb-10 text-9xl text-white dark:text-neutral-50 pl-[100px]">
  <strong>COMPANY ABOUT</strong>
</h2>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
