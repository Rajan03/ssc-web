import React from "react";
import Head from "next/head";
import {PageBanner, TeamCard, NoDataFound} from "@/components";
import {GetStaticProps} from "next";
import {ITeamPage} from "@/types";
import {getTeamPage} from "@/services/sanityService";
import {GetCoachesForHome} from "@/services/HomePageService";
import FAQSection from "@/modules/teams/FAQSection";

// Component Props
type Props = {
    data: ITeamPage
}

const Team: React.FC<Props> = ({data}) => {
    const {banner, team, faq} = data;

    return (
        <>
            <Head>
                <title>SSC | Team</title>
            </Head>
            <main className={`relative h-[inherit] p-for-nav`}>

                {/* Page Banner */}
                <PageBanner route={banner.subtitle} title={banner.title} image={banner.image}/>

                {/* Teams Grid */}
                {team && team.length > 0
                    ? <section className="container mx-auto px-5 py-24 grid grid-cols-1 gap-x-16 gap-y-36
                    sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {team.map((member) => (
                            <TeamCard {...member} key={member._id}/>
                        ))}
                    </section>
                    : <NoDataFound text={'No team members Available'}/>}

                {/* FAQ Section */}
                <FAQSection faq={faq}/>
            </main>
        </>
    );
};


export const getStaticProps: GetStaticProps<Props> = async () => {
    const res = await getTeamPage();
    const coaches = await GetCoachesForHome(false);
    res.team = JSON.parse(JSON.stringify(coaches.data));

    return {
        props: {
            data: res
        }
    };
}

export default Team;
