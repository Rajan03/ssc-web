import React from "react";
import {IconType} from "react-icons";

interface ContactCardProps {
    title: string
    subtitle: string
    text1: string
    text2: string
    Icon: IconType;

    isLink: boolean
}

const ContactCard: React.FC<ContactCardProps> = ({Icon, isLink, text2, text1, subtitle, title}) => {

    return (
        <>
            <Icon/>
        </>
    )
}

export default ContactCard
