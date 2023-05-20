import useCounter from './counter';

const Grid = () => {
  const count = useCounter(180); // Pass the last number as an argument

  return (
    <div className="relative md:top-[20%] h-[600px] mt-[20%] align-center justify-center">
      <div className="absolute grid grid-cols-1 gap-4 ml-20 sm:grid-cols-2 md:grid-cols-2">
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
        <div className="relative bg-red-500 h-[300px] w-full md:absolute md:w-[300px] md:top-[250px] ml-auto md:ml-[40%] xl:ml-[40%] text-center text-white flex justify-center items-center">
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
