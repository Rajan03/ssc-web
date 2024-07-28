import React, {useState} from "react";
import Head from "next/head";
import {PageBanner, SectionHeader} from "@/components";
import {GetStaticProps} from "next";
import {getFeedbackPage} from "@/services/sanityService";
import {IFeedbackPage} from "@/types/sanity";
import {FormTabs, IndividualForm, ManagerForm, TeamForm} from "@/modules/feedback";
import {Tab} from "@headlessui/react";
import {IManagerFormSchema, IndividualFormSchema, IService, ITeam, ITeamFormSchema} from "@/types";
import {GetCoachesData, GetServices} from "@/services/AppService";
import toast from "react-hot-toast";

interface Props {
    data: IFeedbackPage;
    coaches: ITeam[];
}

const Feedback: React.FC<Props> = ({data, coaches}) => {
    const {banner, services, sectionHeader} = data;
    const [loading, setLoading] = useState<boolean>(false);

    const orderedServices = services?.sort((a, b) => a.title > b.title ? 1 : -1)

    const sendFormAsEmail = async (data: ITeamFormSchema | IndividualFormSchema | IManagerFormSchema) => {
        try {
            setLoading(true);
            const res = await fetch('/api/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(data),
            })

            if ((await res.json()).status === 200) {
                setLoading(false);
                toast.success('Feedback Sent successfully');
                return {ok: true}
            }

            setLoading(false);
            toast.error('Something went wrong');
            return {ok: false}
        } catch (e) {
            toast.error('Something went wrong');
            return {ok: false}
        }
    }

    return (
        <>
            <Head>
                <title>SSC | Feedback</title>
            </Head>
            <main className={`relative min-h-[inherit] p-for-nav`}>
                {/* Page Banner */}
                <PageBanner route={banner.subtitle} title={banner.title} image={banner.image}/>

                <div className={'container mx-auto flex flex-col items-stretch'}>
                    {/* Form Heading */}
                    <div className={'flex flex-col items-center my-24'}>
                        <SectionHeader title={sectionHeader.subtitle} showLine className="mb-8"/>
                        <div className="text-6xl font-bold text-dark leading-sm text-center">
                            {sectionHeader.title}
                        </div>
                        <div className="text-2xl font-normal text-gray-500 leading-sm text-center mt-4">
                            {sectionHeader.description}
                        </div>
                    </div>

                    {/* Feedback Form */}
                    <Tab.Group as="div" className="flex flex-col items-stretch justify-start w-full">
                        <FormTabs categories={orderedServices}/>

                        <Tab.Panels as={React.Fragment}>
                            {orderedServices.map((s, i) => {
                                switch (i) {
                                    case 0:
                                        return <IndividualForm key={s._id} coaches={coaches} loading={loading}
                                                               submitForm={sendFormAsEmail} />;
                                    case 1:
                                        return <ManagerForm key={s._id} coaches={coaches} loading={loading}
                                                            submitForm={sendFormAsEmail} />;
                                    case 2:
                                        return <TeamForm key={s._id} coaches={coaches} loading={loading}
                                                         submitForm={sendFormAsEmail} />;
                                }
                            })}
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </main>
        </>
    );
};


export const getStaticProps: GetStaticProps<Props> = async () => {
    const data = await getFeedbackPage();
    const services: { message: string; code: number; data: IService[]; } = await GetServices();
    const coaches: { message: string; code: number; data: ITeam[]; } = await GetCoachesData(false);

    data.services = JSON.parse(JSON.stringify(services.data));
    return {
        props: {
            data,
            coaches: JSON.parse(JSON.stringify(coaches.data)),
        },
        revalidate: 20,
    }
}
export default Feedback;
