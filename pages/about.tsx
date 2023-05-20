import HoverButton from "@/components/AboutButton";
import Card from "@/components/card";
import useCounter from "@/components/counter";
import Grid from "@/components/grid";


const About = () => {
  const count = useCounter(180); 

  return (
    <div>
    
      <div className="relative -full md:top-[250px] h-10 md:h-20 lg:h-60 xl:h-40">
        <Card />
      </div>
      <div className=" md:ml-[15%] flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <div className="relative h-auto md:h-[600px]  md:mt-[80%]">
            <Grid />
          </div>
        </div>
        <div className="w-full ml-10 md:w-1/2">
          <div className="relative md:w-[600px] md:mr-5  md:mt-[95%]">
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
            <h1 className="relative mx-4 text-4xl font-bold text-red-500 md:mx-20 mb-7">
              ABOUT OUR COMPANY
            </h1>
            <h2 className="relative mx-4 text-4xl font-medium text-black md:mx-20 mb-7">
              Find Out More About Our Business Consulting
            </h2>
            <p className="relative mx-4 mb-20 ml-4 text-2xl font-medium text-justify text-black md:mx-20 md:ml-20">
              Fusce Quis Lacus Laoreet, Dignissim Quam Eu, Scelerisque Tortor. Cras
              Volutpat Aliquet Efficitur. Quisque Dignissim Justo Ac Erat Tincidunt
              Tristique. Curabitur Id Tortor Ipsum. Suspendisse Suscipit Commodo Turpis
              Eu Interdum
            </p>
            <HoverButton text="Read More" />
          </div>
     
        </div>



      </div>
      <div className="md:m-[18%] md:mt-[10%] flex flex-col md:flex-row">
  <div className="w-full ml-10 md:w-1/2">
    <div className="relative md:w-[600px] md:mt-[20%]">
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
      <h1 className="relative mx-4 text-4xl font-bold text-red-500 md:mx-20 mb-7">
      WHO WE ARE
      </h1>
      <h2 className="relative mx-4 text-4xl font-bold text-black md:mx-20 mb-7">
      Best Company Especially In Business
      </h2>
      <p className="relative mx-4 mb-20 ml-4 text-2xl font-medium text-justify text-black md:mx-20 md:ml-20">
      Aenean Ac Vulputate Nibh, Sed Fringilla Metus. Pellentesque Porttitor Felis Eu Nunc Feugiat, Nec Condimentum Magna Ultricies. Nam Vitae Est Accumsan Nunc
      </p>
      <div className="mb-20 ml-20">
      <h3 className="mb-2 text-4xl font-bold text-black">{count}k
      <span className='ml-10 text-xl font-medium'>Project Completed Last Year</span>
      <span className="mb-2 ml-20 text-4xl font-bold text-black">{count}k</span>
      <span className='ml-10 text-xl font-medium'>Happy Customer Worlwide</span>

      </h3>
      </div>
      
      <HoverButton text="Discover More" />
      
    </div>
  </div>
  <div className="w-full md:w-1/2  md:mt-[10%] md:h-[300px]">
    <div className="relative h-auto  md:h-[500px]">
      <img
        src="https://img.freepik.com/free-photo/hallway-hotel_23-2149397540.jpg?size=626&ext=jpg&ga=GA1.2.745640877.1667035334&semt=ais"
        alt="Image 1"
        className="object-cover w-full md:h-full"
      />
    </div>
  </div>
</div>
<div>
<div className="relative md:h-[300px] mt-5">
      <img
        src="https://img.freepik.com/free-photo/wide-shot-two-females-standing-huge-glass-window-looking-view-high-rise-buildings_181624-3422.jpg?w=996&t=st=1684254902~exp=1684255502~hmac=92f5c78fe54ea705940d2ec37e788761d119dfce6c5db6f389fbc0523078ae4d"
        alt="Image 1"
        className="object-cover w-full h-full filter grayscale"></img>
      
      <h1 className="absolute text-[60px] text-white font-bold md:top-1/2 md:left-[250px]  -translate-y-1/2">
      Implement Solutions & Achieve Goals.
      </h1>
      <div className="absolute  font-bold md:top-1/2 md:right-[200px]  -translate-y-1/2"><HoverButton text="Discover More" /></div>
      
    </div>
</div>
          </div>

        
  );
};

export default About;
