import { Button, SectionHeader } from '@/components';
import { SanityHeroHome } from '@/types';
import Image from 'next/image';
import { DragEvent, DragEventHandler, useState } from 'react';

const Hero: React.FC<SanityHeroHome> = (props) => {
  const { name, subtitle, description, images } = props;
  const [activeImage, setActiveImage] = useState(0);

  const changeImage: DragEventHandler<HTMLImageElement> = (
    e: DragEvent<HTMLImageElement>
  ) => {
    e.preventDefault();
    setActiveImage((activeImage + 1) % images.length);
  };

  return (
    <>
      <section className="container mx-auto h-full flex flex-col sm:flex-row items-center justify-center">
        {/* HERO Text Section */}
        <div className="flex flex-col justify-start px-8 items-center sm:items-start flex-1">
          <SectionHeader title={subtitle} className="mb-4" />
          <div className="text-6xl font-bold text-dark leading-sm text-center sm:text-start">
            {name}
          </div>
          {description && (
            <p className="text-xl text-dark mt-8 max-w-[80%] text-center sm:text-start">
              {description}
            </p>
          )}
          <Button
            text="Get Started"
            size="large"
            className="mt-8"
            onClick={() => console.log('Hello Hero Btn')}
          />
        </div>

        {/* HERO Images Section */}
        <div
          className="relative flex-1 h-1/2 flex items-center justify-center gap-y-6 overflow-hidden"
          onDragStart={changeImage}
        >
          <Image
            src={images[activeImage]}
            alt={'image'}
            fill
            className="rounded-xl select-none object-cover object-center w-full h-full transition-transform duration-200"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
