import { Button, SectionHeader } from '@/components';
import { SanityAboutHome } from '@/types';
import React from 'react';

const About: React.FC<SanityAboutHome> = ({ title, subtitle, description }) => {
  return (
    <>
      <section className="container mx-auto h-full flex flex-col sm:flex-row items-center justify-center">
        {/* Text Section */}
        <div className="flex flex-col justify-start px-8 items-center sm:items-start flex-[55%]">
          <SectionHeader showLine title={subtitle} className="mb-4" />
          <div className="text-6xl font-bold text-dark leading-sm text-center sm:text-start">
            {title}
          </div>
          {description && (
            <p className="text-xl text-dark mt-8 max-w-[80%] text-center sm:text-start">
              {description}
            </p>
          )}
          <Button
            text="Get Started"
            size="large"
            className="mt-8 text-xl"
            onClick={() => console.log('Hello Hero Btn')}
          />
        </div>

        {/* Image Section */}
        <div className="flex flex-col justify-center items-center sm:items-end flex-[45%]"></div>
      </section>
    </>
  );
};

export default About;
