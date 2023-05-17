import Image from "next/image";

const Card = () => {
  return (
    <div className="absolute  w-full top-[2%] mb-[20px] h-[500px]">
      <div className="relative  w-[100%] mt-[300px]  h-[500px]">
        <img 
          className="object-cover w-[100%] h-full"
          src="https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15874.jpg?"
        />
        <div className="absolute w-[800px] top-0 left-0 h-full bg-gradient-to-r from-black to-gray-900 rounded-br-full rounded-tr-[20%]">
          <div className="flex mr-[40%] text-right flex-col  p-6 mt-[200px]">
            <h1 className="mb-2 text-2xl font-medium text-white dark:text-neutral-50">
              HOME |<span className="text-red-500"> COMPANY ABOUT</span>
            </h1>
            <h2 className="mb-2 text-5xl text-white dark:text-neutral-50">
              <strong>COMPANY ABOUT</strong>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

const Grid = () => {
  return (
    <div className="relative top-[200px]  h-[600px] mt-[800px] ml-[300px] align-center justify-center">
      <div className="ml-20 grid grid-cols-4 gap-4">
        <div className="h-[600px]">
          <img
            src="https://img.freepik.com/free-photo/diverse-businesspeople-discussing-management-paperwork-standing-conference-table_482257-14061.jpg?w=1060&t=st=1683825222~exp=1683825822~hmac=a43bc8b29779d19b901298631f8d4987247e5b81087545b4510ce8f3c91035af"
            alt="Image 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-[500px]">
          <img
            src="https://img.freepik.com/free-photo/front-view-woman-working-home_23-2148470977.jpg?size=626&ext=jpg&ga=GA1.2.745640877.1667035334&semt=ais"
            alt="Image 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-red-500 h-[300px] absolute w-[300px] ml-[350px] mt-[250px] text-center text-black flex justify-center items-center">
          <div>
            <h1 className="font-bold text-4xl mb-2">180+</h1>
            <h2 className="font-medium text-xl">Get National Award</h2>
          </div>
        </div>
        <div className="h-[600px] mt-10 w-[500px] mx-20">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
            <h1 className='relative  mx-20 mb-5 font-bold text-2xl  text-red-500 '>ABOUT OUR COMPANY</h1>
            <h2 className="font-medium   mx-20 mb-5 text-4xl  text-black">Find Out More About Our Business Consulting</h2>
            <p className='font-medium  ml-20 mb-8 mx-20 text-xl  text-black'>Fusce Quis Lacus Laoreet, Dignissim Quam Eu, Scelerisque Tortor. Cras Volutpat Aliquet Efficitur. Quisque Dignissim Justo Ac Erat Tincidunt Tristique. Curabitur Id Tortor Ipsum. Suspendisse Suscipit Commodo Turpis Eu Interdum</p>
            <button className="btn ml-20 mb-5 w-[180px] h-[60px]
            relative inline-flex items-center justify-center 
            overflow-hidden transition-all bg-black rounded hover:bg-black group">

  <span className="w-0 h-0 rounded bg-red-500 
  absolute top-0 left-0 ease-out duration-500 
  transition-all group-hover:w-full group-hover:h-full -z-1"></span>
  <span className="w-full text-white transition-colors
   duration-300 ease-in-out group-hover:text-white z-10">
    READ MORE 
  </span>
</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <Card />
      <Grid />
    </div>
  );
}