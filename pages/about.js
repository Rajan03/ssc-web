import Image from "next/image";

export default function Home() {
  return (
    <div className="absolute max-w-[1536px] w-[300%] left-20 ml-[200px] h-80">
      <div className="relative  w-[100%] mt-[300px]  h-80">
        <img 
          className="object-cover w-[100%] h-full"
          src="https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15874.jpg?"
        />
        <div className="absolute w-[800px] top-0 left-0 h-full bg-gradient-to-r from-black to-gray-900 rounded-br-full rounded-tr-[20%]">
          <div className="flex mr-[10%] text-right flex-col  p-6 mt-[50px]">
            <h1 className="mb-2 text-xl font-medium text-white dark:text-neutral-50">
              HOME |<span className="text-red-500"> COMPANY ABOUT</span>
            </h1>
            <h2 className="mb-2 text-2xl text-white dark:text-neutral-50">
              <strong>COMPANY ABOUT</strong>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
