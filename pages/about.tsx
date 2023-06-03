import {
  AnimatedBtn,
  Card,
  CompanyHistory,
  Grid,
  TextMenu,
} from '@/components';
import useCounter from '@/hooks/counter';
import Image from 'next/image';

const About = () => {
  const count = useCounter(180);

  return (
    <div>
      {/* First section */}
      <div className="relative h-full w-screen p-for-nav">
        <Card />
      </div>

      {/* second section */}
      <div className="container w-screen mx-auto mb-20">
        <div className="flex flex-col sm:flex-row space-4">
          <div className="w-screen">
            <Grid />
          </div>
          <div className="w-screen mx-auto mt-4">
            <TextMenu
              svgPath="M4 6h16M4 12h16M4 18h7"
              title="ABOUT OUR COMPANY"
              subtitle="Find Out More About Our Business Consulting"
              description="Fusce Quis Lacus Laoreet, Dignissim Quam Eu, Scelerisque Tortor. Cras Volutpat Aliquet Efficitur. Quisque Dignissim Justo Ac Erat Tincidunt Tristique. Curabitur Id Tortor Ipsum. Suspendisse Suscipit Commodo Turpis Eu Interdum"
              pathAlignment="left"
            />
            <AnimatedBtn text="Read More" />
          </div>
        </div>
      </div>

      {/* third section */}
      <div className="container w-screen mx-auto mb-20">
        <div className="flex flex-col-reverse sm:flex-row space-4">
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
          <div className="w-screen mx-auto mt-4">
            <TextMenu
              svgPath="M4 6h16M4 12h16M4 18h7"
              title="WHO WE ARE"
              subtitle="Best Company Especially In Business"
              description="Aenean Ac Vulputate Nibh, Sed Fringilla Metus. Pellentesque Porttitor Felis Eu Nunc Feugiat, Nec Condimentum Magna Ultricies. Nam Vitae Est Accumsan Nunc"
              pathAlignment="left"
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
        </div>
      </div>

      {/* Fourth section */}
      <div className="relative h-[300px] mx-auto mb-20">
        <div className="absolute inset-0 object-cover h-full w-full">
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
        <div className="relative z-10 md:mb-20 flex flex-col items-center justify-center h-full">
          <p className="mt-4 mx-auto md:text-9xl sm:text-7xl font-bold text-red-500">
            Implement Solutions & Achieve Goals
          </p>
          <AnimatedBtn text="Get Free Consultancy" />
        </div>
      </div>

      {/* Fifth section */}
      <div className=" w-screen mx-auto mb-20 text-center text-8xl font-bold text-red-500 sm:text-5xl ">
        <h1>Our Company History</h1>
      </div>

      <div className="container w-screen mx-auto mb-20">
        <div className="flex flex-col-reverse sm:flex-row space-4 mx-10 divide-red-600 divide-x divide-dashed sm-divide-hidden md-divide-block">
          <div className="w-screen mx-20">
            <Image
              className="object-cover w-full h-full mx-auto"
              height={500}
              loading="lazy"
              width={500}
              src="https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15861.jpg?size=626&ext=jpg&ga=GA1.2.745640877.1667035334&semt=sph"
              alt="Image 2"
            />
          </div>
          <div className="w-screen mx-auto ">
            <CompanyHistory
              title="2003"
              subtitle="Start Company"
              description="Aliquam Sit Amet Massa Quis Augue Porta Consequat Eu Eu Lectus. Praesent A Ipsum A Sem Tristique"
            />
          </div>
        </div>
      </div>

      <div className="container w-screen mx-auto mb-20">
        <div className="flex flex-col-reverse sm:flex-row space-4 mx-10 divide-red-600 divide-x divide-dashed sm-divide-hidden md-divide-block">
          <div className="w-screen mx-20  mt-4">
            <CompanyHistory
              title="2008"
              subtitle="Opening Office"
              description="Aliquam Sit Amet Massa Quis Augue Porta Consequat Eu Eu Lectus. Praesent A Ipsum A Sem Tristique"
            />
          </div>
          <div className="w-screen ">
            <Image
              className="object-cover w-full h-full mx-20"
              height={500}
              loading="lazy"
              width={500}
              src="https://img.freepik.com/free-photo/close-up-people-learning-job_23-2149300762.jpg?size=626&ext=jpg&ga=GA1.2.745640877.1667035334&semt=sph"
              alt="Image 2"
            />
          </div>
        </div>
      </div>

      <div className="container w-screen mx-auto mb-20">
        <div className="flex flex-col-reverse sm:flex-row space-4 mx-10 divide-red-600 divide-x divide-dashed sm-divide-hidden md-divide-block">
          <div className="w-screen mx-20">
            <Image
              className="object-cover w-full h-full mx-auto"
              height={500}
              loading="lazy"
              width={500}
              src="https://img.freepik.com/free-photo/group-young-business-people-working-office_158595-5209.jpg?size=626&ext=jpg&ga=GA1.1.745640877.1667035334&semt=sph"
              alt="Image 2"
            />
          </div>
          <div className="w-screen mx-auto ">
            <CompanyHistory
              title="2013"
              subtitle="Improve Management"
              description="Aliquam Sit Amet Massa Quis Augue Porta Consequat Eu Eu Lectus. Praesent A Ipsum A Sem Tristique"
            />
          </div>
        </div>
      </div>

      <div className="container w-screen mx-auto mb-20">
        <div className="flex flex-col-reverse sm:flex-row space-4 mx-10 divide-red-600 divide-x divide-dashed sm-divide-hidden md-divide-block">
          <div className="w-screen mx-20 mt-4">
            <CompanyHistory
              title="2018"
              subtitle="Open Research Team"
              description="Aliquam Sit Amet Massa Quis Augue Porta Consequat Eu Eu Lectus. Praesent A Ipsum A Sem Tristique"
            />
          </div>
          <div className="w-screen mx-20">
            <Image
              className="object-cover w-full h-full mx-20"
              height={500}
              loading="lazy"
              width={500}
              src="https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15773.jpg?size=626&ext=jpg&ga=GA1.1.745640877.1667035334&semt=sph"
              alt="Image 2"
            />
          </div>
        </div>
      </div>

      <div className="container w-screen mx-auto mb-20">
        <div className="flex flex-col-reverse sm:flex-row space-4 mx-10 divide-red-600 divide-x divide-dashed sm-divide-hidden md-divide-block">
          <div className="w-screen mx-20">
            <Image
              className="object-cover w-full h-full mx-auto"
              height={500}
              loading="lazy"
              width={500}
              src="https://img.freepik.com/free-photo/blurred-soft-people-meeting-table-business-people-talking-modern-office-generative-ai_1258-150801.jpg?size=626&ext=jpg&ga=GA1.1.745640877.1667035334&semt=sph"
              alt="Image 2"
            />
          </div>
          <div className="w-screen mx-auto ">
            <CompanyHistory
              title="2023"
              subtitle="Winning Award"
              description="Aliquam Sit Amet Massa Quis Augue Porta Consequat Eu Eu Lectus. Praesent A Ipsum A Sem Tristique"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
