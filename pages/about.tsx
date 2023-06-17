import {PageBanner} from "@/components";
import {About as AboutHome} from '@/modules/home'
import {HistorySection, ImplementSolution, WhoAreWe} from "@/modules/about";
import Head from "next/head";
import React from "react";
import {GetStaticProps} from "next";
import {IAboutPage} from "@/types";
import {getAboutPage} from "@/services/sanityService";

interface Props {
    data: IAboutPage;
}
const About: React.FC<Props> = ({data}) => {
    const {banner, about, timeline, solution, whoWeAre} = data;
    return (<>
            <Head>
                <title>SSC | About</title>
            </Head>

            <main className={`relative min-h-[inherit] p-for-nav`}>
                {/* Banner section */}
                <PageBanner title={banner.title} route={banner.subtitle} image={banner.image}/>

                {/* About Company section */}
                <AboutHome {...about} />

                {/* Implement Solution section */}
                <ImplementSolution {...solution} />

                {/* Who are we section */}
                <WhoAreWe {...whoWeAre} />

                {/* Company History section */}
                <HistorySection {...timeline} />
            </main>
        </>
    );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
    const data = await getAboutPage();

    return {
        props: {
            data
        },
        revalidate: 20,
    }
}

export default About;
