import {AnimatedBtn, Card,Grid, TextMenu} from "@/components";
// NOTE: Imports from index.tsx in components folder and ABout btn rename krke AnimatedBtn kra hai bca vo puri website me use hoga (not specific to about page)
import useCounter from "@/hooks/counter";
import Image from "next/image";

const About = () => {
  const count = useCounter(180);

  return (
    <div>
      {/* first section */}
      <div className="relative h-full p-for-nav">
        <Card />
      </div>
      <div className="relative flex items-center justify-center min-h-screen">
        <div className="container">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="w-full md:w-1/2">
              <Grid />
            </div>
            <div className="w-full md:w-1/2">
              <TextMenu
                svgPath="M4 6h16M4 12h16M4 18h7"
                title="ABOUT OUR COMPANY"
                subtitle="Find Out More About Our Business Consulting"
                description="Fusce Quis Lacus Laoreet, Dignissim Quam Eu, Scelerisque Tortor. Cras Volutpat Aliquet Efficitur. Quisque Dignissim Justo Ac Erat Tincidunt Tristique. Curabitur Id Tortor Ipsum. Suspendisse Suscipit Commodo Turpis Eu Interdum"
              />
              <AnimatedBtn text="Read More" />
            </div>
          </div>
        </div>
      </div>
      {/* second section */}
      <div className="relative flex mb-[10%] items-center justify-center gap-4 t-[30%]">
        <div className="container">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="w-full ml-5 mr-5 md:w-1/2">
              <TextMenu
                svgPath="M4 6h16M4 12h16M4 18h7"
                title="WHO WE ARE"
                subtitle="Best Company Especially In Business"
                description="Aenean Ac Vulputate Nibh, Sed Fringilla Metus. Pellentesque Porttitor Felis Eu Nunc Feugiat, Nec Condimentum Magna Ultricies. Nam Vitae Est Accumsan Nunc"
              />
              <div className="mb-10 ml-[10%]">
                <h3 className="mb-2 text-4xl font-bold text-black">
                  {count}k
                  <span className="ml-10 text-xl font-medium">
                    Project Completed Last Year
                  </span>
                  <span className="mb-2 ml-20 text-4xl font-bold text-black">
                    {count}k
                  </span>
                  <span className="ml-10 text-xl font-medium">
                    Happy Customer Worldwide
                  </span>
                </h3>
              </div>
              <AnimatedBtn text="Discover More" />
            </div>
            <div className="ml-5 w-full md:w-1/2 md:h-[450px]">
              <Image
                className="object-cover w-[500px] h-full"
                height={500}
                loading="lazy"
                width={500}

                src="https://img.freepik.com/free-photo/diverse-businesspeople-discussing-management-paperwork-standing-conference-table_482257-14061.jpg?w=1060&t=st=1683825222~exp=1683825822~hmac=a43"

            alt="Image 2"
          />
          </div>
          </div>
          </div>
    </div>
    <div className="relative md:h-[300px] ">
      <Image  className="object-cover w-full h-full filter grayscale"
       height={500}
       loading="lazy"
       width={500}

        src="https://img.freepik.com/free-photo/abstract-business-people-city-buildings_53876-139657.jpg?size=626&ext=jpg&ga=GA1.1.745640877.1667035334&semt=ais"
        alt="Image 3"
      />

      <h1 className="absolute text-[60px] text-white font-bold md:top-1/2 md:left-[250px]  -translate-y-1/2">
      Implement Solutions & Achieve Goals.
      </h1>
      <div className="absolute  font-bold md:top-1/2 md:right-[200px]  -translate-y-1/2"><AnimatedBtn text="Discover More" /></div>

    </div>

    </div>
  );
};

export default About;
