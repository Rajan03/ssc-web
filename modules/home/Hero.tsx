import { Button, SectionHeader } from '@/components';
import { SanityHeroHome } from '@/types';
import clsx from 'clsx';
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
        <div className="flex flex-col justify-start px-8 items-center sm:items-start flex-[55%]">
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
          className="relative flex-[45%] h-3/4 flex items-center justify-center gap-y-6 "
          onDragStart={changeImage}
        >
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={'image'}
              fill
              priority
              className={clsx(
                'rounded select-none object-cover object-center w-full h-full transition-transform duration-200',
                index === activeImage ? 'scale-100' : 'scale-90'
              )}
            />
          ))}

          {/* Dots */}
          <div className="flex flex-col justify-start items-center gap-y-8 absolute bottom-0 -left-16">
            {images.map((_, i) => (
              <span
                key={i}
                onClick={() => setActiveImage(i)}
                className={clsx(
                  'h-6 w-6 rounded-full ',
                  i === activeImage
                    ? 'bg-primary-600 '
                    : 'border-4 border-primary-600',
                  'transition-all duration-200 cursor-pointer',
                  i === activeImage ? 'scale-125' : 'scale-100',
                  i === activeImage &&
                    'before:h-full before:w-full before:absolute before:rounded-full before:border-2 before:border-primary-600 before:opacity-50 before:scale-150 before:transform before:-translate-x-1 before:-translate-y-1'
                )}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
