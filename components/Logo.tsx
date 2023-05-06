import LOGO from '@/public/HLogo.png';
import Image from 'next/image';

const Logo = () => {
  return (
    <Image
      priority
      src={LOGO}
      alt={''}
      className="w-[18rem] h-full aspect-video"
    />
  );
};

export default Logo;
