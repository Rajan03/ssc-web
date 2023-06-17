import Image from 'next/image';

const Logo = ({light}: {light?: boolean}) => {
  return (
    <Image
      priority
      src={light ? '/HLogoWhite.png' : '/HLogo.png'}
      alt={''}
        width={100}
        height={100}
      className="w-[18rem] h-full aspect-w-4 aspect-h-3"
    />
  );
};

export default Logo;
