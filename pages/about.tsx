import Image from 'next/image';

const About = () => {
  return (
    <div className="relative h-full p-for-nav">
      <div className="relative w-[100%] h-1/2 flex justify-end">
        <Image
          className="object-cover min-w-[70%] h-full object-top"
          height={500}
          loading="lazy"
          width={500}
          alt="Picture of the author"
          src="https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15874.jpg?"
        />

        <div
          className="absolute w-full sm:w-[80%] lg:w-[60%] top-0 left-0 h-full 
        bg-gradient-to-r from-black to-gray-900 sm:rounded-br-full sm:rounded-tr-[20%]
        flex justify-center items-center"
        >
          <div className="flex flex-col justify-center items-center sm:items-end gap-y-6">
            <h1 className="text-3xl font-medium flex justify-center items-center gap-x-8">
              <span className="text-white">HOME</span>
              <span className="text-red-500"> | </span>
              <span className="text-red-500"> COMPANY ABOUT</span>
            </h1>
            <h2 className="text-5xl sm:text-7xl text-white">
              <strong>COMPANY ABOUT</strong>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

/*
 
*/
