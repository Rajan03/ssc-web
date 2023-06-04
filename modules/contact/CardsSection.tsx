import { ContactCard } from '@/components';
import { MdCall, MdEmail, MdLocationOn } from 'react-icons/md';

const CardsSection = () => {
  return (
    <div className=" mt-[10%] container mx-auto grid gap-10 grid-cols-3">
      <ContactCard
        Icon={MdLocationOn}
        isLink
        subtitle={'You Are Most Welcome To Visit Office.'}
        text1={'8502 preston rd. inglewood,maine 98380'}
        text2={'   '}
        title={'Office Location'}
      />
      <ContactCard
        Icon={MdCall}
        isLink
        subtitle={'Keeping You Always Better Connected        '}
        text1={'+125 (874) 452 645'}
        text2={'+125 (895) 658 568'}
        title={'Talk With US'}
      />
      <ContactCard
        Icon={MdEmail}
        isLink
        subtitle={'Drop Us A Mail We Will Answer You Asap        '}
        text1={'info.conbix@gmail.com'}
        text2={'conbix@gmail.com'}
        title={'Quick Email        '}
      />
    </div>
  );
};

export default CardsSection;
