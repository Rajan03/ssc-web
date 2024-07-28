import Image from 'next/image';

const Logo = ({url}: {url: string}) => {
  return (
    <Image
      priority
      src={url}
      alt={''}
        width={100}
        height={100}
      className="w-[18rem] h-full aspect-w-4 aspect-h-3"
    />
  );
};

export default Logo;
