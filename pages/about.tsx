import {PageBanner} from "@/components";
import {About as AboutHome} from '@/modules/home'
import {HistorySection, ImplementSolution, WhoAreWe} from "@/modules/about";
import Head from "next/head";
import React from "react";

const About = () => {

    return (<>
            <Head>
                <title>SSC | About</title>
            </Head>

            <main className={`relative h-[inherit] p-for-nav`}>
                {/* Banner section */}
                <PageBanner title={'About Us'} route={'Home | About Us'}
                            image={'https://img.freepik.com/free-photo/friendly-atmosphere-group-young-freelancers-office-have-conversation-smiling_146671-13630.jpg?size=626&ext=jpg&ga=GA1.1.745640877.1667035334&semt=ais'}/>

                {/* About Company section */}
                <AboutHome title={"Find Out More About Our Business Consulting"}
                           subtitle={"ABOUT OUR COMPANY"}
                           description={"Pellentesque eget dictum est. Pellentesque blandit eget mauris ac faucibus. Curabitur varius a quam sit amet placerat. Pellentesque ut venenatis felis.Proin malesuada porttitor eros."}
                           images={[
                               'https://img.freepik.com/free-photo/diverse-businesspeople-discussing-management-paperwork-standing-conference-table_482257-14061.jpg?w=1060&t=st=1683825222~exp=1683825822~hmac=a43bc8b29779d19b901298631f8d4987247e5b81087545b4510ce8f3c91035af',
                               'https://img.freepik.com/free-photo/diverse-businesspeople-discussing-management-paperwork-standing-conference-table_482257-14061.jpg?w=1060&t=st=1683825222~exp=1683825822~hmac=a43bc8b29779d19b901298631f8d4987247e5b81087545b4510ce8f3c91035af'
                           ]}/>

                {/* Implement Solution section */}
                <ImplementSolution/>

                {/* Who are we section */}
                <WhoAreWe/>

                {/* Company History section */}
                <HistorySection/>
            </main>
        </>
    );
};

export default About;
