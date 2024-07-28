import {ContactCard} from '@/components';
import {MdCall, MdEmail, MdLocationOn} from 'react-icons/md';
import {SanityContactInfo} from "@/types/sanity";

interface Props {
    card: SanityContactInfo;
}

const cardsIcon = [
    MdLocationOn, MdCall, MdEmail
]
const CardsSection: React.FC<Props> = ({card}) => {
    card.location.Icon = cardsIcon[0];
    card.phone.Icon = cardsIcon[1];
    card.email.Icon = cardsIcon[2];

    return (
        <div className="mt-24 container mx-auto grid gap-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <ContactCard  {...card.location} />
            <ContactCard  {...card.phone} />
            <ContactCard  {...card.email} />
        </div>
    );
};

export default CardsSection;
