import useCounter from './counter';

const Grid = () => {
  const count = useCounter(180); // Pass the last number as an argument


  return (
    <div className="md:ml-[400px] relative  top-[80px] h-[600px] mt-[800px] align-center justify-center">
      <div className="absolute grid grid-cols-1 gap-4 ml-20 sm:grid-cols-2 md:grid-cols-4">
        <div className="h-[600px]">
          <img
            src="https://img.freepik.com/free-photo/diverse-businesspeople-discussing-management-paperwork-standing-conference-table_482257-14061.jpg?w=1060&t=st=1683825222~exp=1683825822~hmac=a43bc8b29779d19b901298631f8d4987247e5b81087545b4510ce8f3c91035af"
            alt="Image 2"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="h-[500px]">
          <img
            src="https://img.freepik.com/free-photo/front-view-woman-working-home_23-2148470977.jpg?size=626&ext=jpg&ga=GA1.2.745640877.1667035334&semt=ais"
            alt="Image 1"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative bg-red-500 h-[300px] w-full md:absolute md:w-[300px] md:mt-[250px] ml-[90%] md:ml-[100%] xl:ml-[22%] text-center text-white flex justify-center items-center">


          <div>
          <h1 className="mb-2 text-5xl font-bold text-white">{count}+</h1>
            <h2 className="text-3xl font-bold text-white">Get National Award</h2>
          </div>
        </div>
        <div className="h-[600px] md:w-[500px] mt-2 ">
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
            <h1 className="relative mx-20 mb-5 text-2xl font-bold text-red-500">
              ABOUT OUR COMPANY
            </h1>
            <h2 className="mx-20 mb-5 text-4xl font-medium text-black">
              Find Out More About Our Business Consulting
            </h2>
            <p className="mx-20 mb-8 ml-20 text-xl font-medium text-black">
              Fusce Quis Lacus Laoreet, Dignissim Quam Eu, Scelerisque Tortor.
              Cras Volutpat Aliquet Efficitur. Quisque Dignissim Justo Ac Erat
              Tincidunt Tristique. Curabitur Id Tortor Ipsum. Suspendisse
              Suscipit Commodo Turpis Eu Interdum
            </p>
<button className=" ml-20 mb-5 w-[180px] h-[60px] sm:w-[240px] sm:h-[80px]
relative inline-flex items-center justify-center 
overflow-hidden transition-all bg-black rounded hover:bg-black ">

<span className="absolute top-0 left-0 w-0 h-0 transition-all duration-500 ease-out bg-red-500 rounded group-hover:w-full group-hover:h-full -z-1"></span>
<span className="z-10 w-full text-white transition-colors duration-300 ease-in-out group-hover:text-white">
READ MORE 
</span>
</button>
</div>
        </div>
      </div>
    </div>
  );
};
export default Grid;
