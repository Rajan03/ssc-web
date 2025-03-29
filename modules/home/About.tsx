import { AnimatedBtn, SectionHeader } from '@/components';
import { SanityAboutHome } from '@/types';
import Image from 'next/image';
import React from 'react';

const About: React.FC<SanityAboutHome> = ({
  title,
  subtitle,
  description,
  count,
  images,
}) => {
  return (
    <>
      <div className="min-h-full container mx-auto gap-y-16 gap-x-8 flex flex-col lg:flex-row py-8 sm:py-12">
        {/* Image Section */}
        <div className="relative min-h-[inherit] flex-[65%] flex justify-start items-stretch gap-x-12 sm:py-20">
          <div className="relative min-h-[50vh] w-full sm:w-1/2">
            <Image
              src={images ? images[0] : ''}
              alt=""
              fill
              className="rounded select-none object-cover object-right w-full h-full"
            />
          </div>

          <div className="relative hidden sm:inline-flex w-1/2 min-h-[50vh]">
            <Image
              src={images ? images[1] : ''}
              alt=""
              fill
              className="rounded select-none object-cover object-right w-full h-full"
            />
          </div>

          {count && (
            <div
              className="hidden vsm:flex absolute sm:bottom-12 sm:left-[10%] h-[28rem] w-[22rem] bg-primary-600
            text-white flex-col justify-start items-center p-6 pt-12"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 76%, 0% 100%)' }}
            >
              <p className="text-7xl uppercase font-bold text-start ">
                {count}
              </p>
              <span className="h-[1px] w-1/2 bg-neutral-100 mb-6" />
              <p className="text-2xl sm:text-3xl leading-[2.5rem] font-normal text-center">
                Years Experience On Business Consulting
              </p>
            </div>
          )}
        </div>

        {/* Text Section */}
        <div className="flex-[45%] flex flex-col justify-start lg:px-8 items-start lg:justify-center">
          <SectionHeader showLine title={subtitle} className="mb-8" />
          <div className="text-6xl font-bold text-dark leading-sm text-start">
            {title}
          </div>
          {description && (
            <p className="text-xl text-dark mt-12 max-w-[80%] text-start">
              {description}
            </p>
          )}
          <AnimatedBtn
            text="Discover More"
            className="mt-12 text-xl"
            link="/about#services"
          />
        </div>
      </div>
    </>
  );
};

export default About;
