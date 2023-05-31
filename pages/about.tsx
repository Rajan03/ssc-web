import {AnimatedBtn, PageBanner,Grid, TextMenu} from "@/components";
// NOTE: Imports from index.tsx in components folder and ABout btn rename krke AnimatedBtn kra hai bca vo puri website me use hoga (not specific to about page)
import useCounter from "@/hooks/counter";
import Image from "next/image";

const About = () => {
  const count = useCounter(180);

  return (
    <div>
      {/* First section */}
      <div className="relative h-full w-screen p-for-nav">
        <PageBanner title={'About Us'} route={'Home | About Us'}
                    image={'https://img.freepik.com/free-photo/friendly-atmosphere-group-young-freelancers-office-have-conversation-smiling_146671-13630.jpg?size=626&ext=jpg&ga=GA1.1.745640877.1667035334&semt=ais'} />
      </div>

      {/* second section */}
      <div className=" container w-screen mx-auto mb-20">
        <div className="flex flex-col sm:flex-row space-4">
          <div className="w-screen ">
            <Grid />
          </div>
          <div className="w-screen mx-auto mt-4">
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

      {/* third section */}
      <div className="container w-screen mx-auto mb-20">
        <div className="flex flex-col-reverse sm:flex-row space-4">
          <div className="w-screen mx-auto mt-4">
            <TextMenu
              svgPath="M4 6h16M4 12h16M4 18h7"
              title="WHO WE ARE"
              subtitle="Best Company Especially In Business"
              description="Aenean Ac Vulputate Nibh, Sed Fringilla Metus. Pellentesque Porttitor Felis Eu Nunc Feugiat, Nec Condimentum Magna Ultricies. Nam Vitae Est Accumsan Nunc"
            />
            <h3 className="mx-10 mb-2 text-4xl font-bold text-black">
              {count}k
              <span className="mx-2 text-xl font-medium">
                Project Completed Last Year
              </span>
            </h3>
            <h4 className="mb-2 mx-10 text-4xl font-bold text-black">
              {count}k
              <span className="mx-2 text-xl font-medium ">
                Happy Customer Worldwide
              </span>
            </h4>

            <AnimatedBtn text="Discover More" />
          </div>
          <div className="w-screen">
            <Image
              className="object-cover w-full h-full mx-auto"
              height={500}
              loading="lazy"
              width={500}
              src="https://img.freepik.com/free-photo/into-success-group-young-freelancers-office-have-conversation-smiling_146671-13567.jpg?size=626&ext=jpg&ga=GA1.1.745640877.1667035334&semt=ais"
              alt="Image 2"
            />
          </div>
        </div>
      </div>

      {/* Fourth section */}

      <div className="relative h-[300px] mb-20">
        <div className="absolute inset-0 object-cover  h-full w-full ">
          <Image
            className="object-cover w-full h-full mx-auto filter grayscale"
            src="https://img.freepik.com/free-photo/staff-meeting-group-young-modern-people-smart-casual-wear-discussing-something-while-working-creative-office-business-time_496169-1626.jpg?size=626&ext=jpg&ga=GA1.1.745640877.1667035334&semt=ais"
            alt=""
            height={500}
            loading="lazy"
            width={500}
            quality={100}
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <p className="mt-4 mx-auto text-9xl font-bold text-white">
            Implement Solutions & Achieve Goals
          </p>
          <AnimatedBtn text="Discover" />
        </div>
      </div>
    </div>
  );
};

export default About;
