import React from "react";
import Head from "next/head";
import {PageBanner, SectionHeader} from "@/components";
import {GetStaticProps} from "next";
import {getFeedbackPage} from "@/services/sanityService";
import {IFeedbackPage} from "@/types/sanity";
import FormTabs from "@/modules/feedback";
import {Tab} from "@headlessui/react";
import {IService} from "@/types";
import {GetServices} from "@/services/AppService";

interface Props {
    data: IFeedbackPage;
}

const Feedback: React.FC<Props> = ({data}) => {
    const {banner, services} = data;

    return (
        <>
            <Head>
                <title>SSC | Feedback</title>
            </Head>
            <main className={`relative min-h-[inherit] p-for-nav`}>
                {/* Page Banner */}
                <PageBanner route={banner.subtitle} title={banner.title} image={banner.image}/>

                {/* Form Heading */}
                <div className={'flex flex-col items-center my-24'}>
                    <SectionHeader title={'Any Feedback'} showLine className="mb-8"/>
                    <div className="text-6xl font-bold text-dark leading-sm text-start">
                        Want to give us feedback?
                    </div>
                    <div className="text-2xl font-normal text-gray-500 leading-sm text-center">
                        So, you had a great experience with us? Or you have some suggestions for us? We would love to hear
                        from you.
                    </div>
                </div>

                {/* Feedback Form */}
                <Tab.Group as="div" className="container mx-auto flex flex-col items-stretch justify-start w-full">
                    <FormTabs categories={services} />


                </Tab.Group>
            </main>
        </>
    );
};


export const getStaticProps: GetStaticProps<Props> = async () => {
    const data = await getFeedbackPage();
    const services: { message: string; code: number; data: IService[]; } = await GetServices();

    data.services = JSON.parse(JSON.stringify(services.data));
    return {
        props: {
            data
        },
        revalidate: 20,
    }
}
export default Feedback;
