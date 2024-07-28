import {PageBanner, ServiceCard} from "@/components";
import Head from "next/head";
import React from "react";
import {getServicesPage} from "@/services/sanityService";
import {IServicesPage} from "@/types/sanity";

interface ServicesPageProps {
    data: IServicesPage;
}

export default function ServicesPage({data}: ServicesPageProps) {
    const {services, banner} = data;
    return (
        <>
            <Head>
                <title>SSC | Services</title>
            </Head>
            <main
                className="relative min-h-[inherit] p-for-nav">
                <PageBanner title={banner?.title} route={banner?.subtitle} image={banner?.image}/>

                <div className={'container mx-auto mt-32'}>
                    <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-16'}>
                        {services?.map((service) => (
                            <ServiceCard key={service._id} {...service} />
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}

export async function getStaticProps() {
    const servicePage = await getServicesPage();
    return {
        props: {
            data: servicePage,
        },
        revalidate: 30,
    };
}
