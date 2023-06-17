import { ContactCard } from '@/components';
import { MdCall, MdEmail, MdLocationOn } from 'react-icons/md';

const CardsSection = () => {
  return (
    <div className="mt-24 container mx-auto grid gap-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <ContactCard
        Icon={MdLocationOn}
        subtitle={'You Are Most Welcome To Visit Office.'}
        text1={'8502 preston rd. inglewood,maine 98380'}
        text2={'maine 98380'}
        title={'Office Location'}
      />
      <ContactCard
        Icon={MdCall}
        subtitle={'Keeping You Always Better Connected'}
        text1={'+125 (874) 452 645'}
        text2={'+125 (895) 658 568'}
        title={'Talk With US'}
      />
      <ContactCard
        Icon={MdEmail}
        subtitle={'Drop Us A Mail We Will Answer You Asap'}
        text1={'info.ssc@gmail.com'}
        text2={'soka@gmail.com'}
        title={'Quick Email'}
      />
    </div>
  );
};

export default CardsSection;
