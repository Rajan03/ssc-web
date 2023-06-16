import React from "react";
import Head from "next/head";
import {PageBanner} from "@/components";
import {GetStaticProps} from "next";
import {IResourcesPage} from "@/types";
import {getResourcesPage} from "@/services/sanityService";
import {GetResources, GetResourcesCategory} from "@/services/AppService";
import {CategoryWiseResources} from "@/modules/resources";

// Component Props
type Props = {
    data: IResourcesPage
}
const Resource: React.FC<Props> = ({data}) => {
    const {banner, resources, categories} = data;

    return (
        <>
            <Head>
                <title>SSC | Resources</title>
            </Head>
            <main className={`relative h-[inherit] p-for-nav`}>

                {/* Page Banner */}
                <PageBanner route={banner.subtitle} title={banner.title} image={banner.image}/>

                {/* Resources */}
                <CategoryWiseResources categories={categories} resources={resources}/>
            </main>
        </>
    );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
    const res = await getResourcesPage();
    const categories = await GetResourcesCategory();
    const resources = await GetResources();

    if (categories.code === 200 && resources.code === 200) {
        res.categories = JSON.parse(JSON.stringify(categories.data));
        res.resources = JSON.parse(JSON.stringify(resources.data));
    }

    return {
        props: {
            data: res
        },
        revalidate: 20,
    }
};

export default Resource;
