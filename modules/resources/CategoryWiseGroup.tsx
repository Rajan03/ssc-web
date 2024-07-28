import {NoDataFound, ResourceCard, SectionHeader} from "@/components";
import React from "react";
import {IResource, IResourceCategory} from "@/types";

interface CategoryWiseResourcesProps {
    resources: IResource[]
    category: IResourceCategory
}
export default function CategoryWiseResources(props: CategoryWiseResourcesProps) {
    const {resources, category} = props;

    return(
        <section className={`container mx-auto px-4 sm:px-6 lg:px-8 py-16`}>
            <SectionHeader title={category.title} description={category.description}
                           showLine={false} className={'mb-12'}/>

            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16`}>
                {
                    resources?.length > 0
                        ? resources.map((resource) => (
                            <ResourceCard key={resource._id} {...resource} />))
                        : <div className={'col-span-1 sm:col-span-2 lg:col-span-3'}>
                            <NoDataFound text={'No ' + category.title + ' Resources Found!!'}/>
                        </div>
                }
            </div>
        </section>
    )
}
