import {CardsSection, ContactForm} from "@/modules/contact";
import Head from "next/head";
import React from "react";
import {PageBanner} from "@/components";
import {GetStaticProps} from "next";
import {getContactPage} from "@/services/sanityService";
import {IContactPage} from "@/types/sanity";

interface Props {
    data: IContactPage;
}

const Contact: React.FC<Props> = ({data}) => {

    if (!data) return (<></>);

    return (
        <>
            <Head>
                <title>SSC | Contact</title>
            </Head>

            <main className={`relative min-h-[inherit] p-for-nav`}>
                {/*Banner */}
                <PageBanner title={data.banner.title} route={data.banner.subtitle} image={data.banner.image} />

                {/*Cards */}
                <CardsSection card={data.contactInfo} />

                {/*Contact Form */}
                <ContactForm />
            </main>
        </>
    )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const data = await getContactPage();

    return {
        props: {
            data
        },
        revalidate: 20,
    }
}
export default Contact
