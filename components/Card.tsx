import Image from "next/image";

const Card: React.FC = () => {
  return (
    <>
      <div className="w-full mb-4 md:mb-20 h-[500px] md:h-[500px]">
        <div className="relative w-full h-full mt-8 md:mt-0">
          <Image
            className="object-cover w-full h-full"
            src="https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15874.jpg?"
            alt="Company Image"
            layout="fill"
          />
          <div className="absolute w-[50%] top-0 left-0 h-full bg-gradient-to-r from-black to-gray-900 rounded-br-full rounded-tr-[20%]">
            <div className="flex items-end justify-end flex-col p-6 mt-[100px] md:mt-24 md:mr-[20%]">
              <h1 className="mb-2 text-4xl mt-[100px] font-bold text-white dark:text-neutral-50 md:mt-30 md:mr-[30%]">
                HOME | <span className="text-red-500">COMPANY ABOUT</span>
              </h1>
              <h2 className="relative mb-10 text-6xl md:mr-[20%] text-white dark:text-neutral-50">
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
