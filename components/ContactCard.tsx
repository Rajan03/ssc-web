import { QUOTE_BG } from '@/utils/constant';
import React, { useState } from 'react';
import { IconType } from 'react-icons';

interface ContactCardProps {
  title: string;
  subtitle: string;
  text1: string;
  text2: string;
  Icon: IconType;
  isLink: boolean;
}

const ContactCard: React.FC<ContactCardProps> = ({
  Icon,
  isLink,
  text2,
  text1,
  subtitle,
  title,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardStyle = {
    backgroundColor: isHovered ? 'black' : 'white',
    backgroundImage: isHovered ? `url(${QUOTE_BG})` : '',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    transition: 'background-color 0.3s',
  };

  const textStyle = {
    color: isHovered ? 'white' : '#000',
    transition: 'color 0.3s',
  };

  return (
    <div className="col-span-1 md:col-span-1 lg:col-span-1">
      <div className="relative">
        <div
          className="bg-white rounded-lg shadow-lg py-[30%] px-10"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={cardStyle}
        >
          <h1 className="text-lg md:text-4xl font-bold mb-4  text-primary-600">
            <span style={textStyle}>{title}</span>
          </h1>
          <h2 className="text-3xl font-medium text-dark mb-20">
            <span style={textStyle}>{subtitle}</span>
          </h2>
          <p className="text-xl font-normal text-justify text-dark">
            <span style={textStyle}>{text1}</span>
          </p>
          <p className="text-xl font-normal text-justify text-dark ">
            <span style={textStyle}>{text2}</span>
          </p>
        </div>
        <div className="absolute top-0 left-20 transform -translate-x-1/2 -translate-y-1/2">
          <Icon className="text-[100px] ml-10 text-primary-600" />
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
