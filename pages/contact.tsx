import {CardsSection, ContactForm} from "@/modules/contact";
import Head from "next/head";
import React from "react";
import {PageBanner} from "@/components";

const Contact = () => {
    return (
        <>
            <Head>
                <title>SSC | Contact</title>
            </Head>

            <main className={`relative h-[inherit] p-for-nav`}>
                {/*Banner */}
                <PageBanner title={'Contact Us'} route={'Home | Contact Us'}
                            image={'https://img.freepik.com/free-photo/friendly-atmosphere-group-young-freelancers-office-have-conversation-smiling_146671-13630.jpg?size=626&ext=jpg&ga=GA1.1.745640877.1667035334&semt=ais'}/>

                {/*Cards */}
                <CardsSection/>

                {/*Contact Form */}
                <ContactForm/>
            </main>
        </>
    )
}

export default Contact
