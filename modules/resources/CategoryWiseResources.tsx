import React from "react";
import {IResource, IResourceCategory} from "@/types";
import CategoryWiseGroup from "./CategoryWiseGroup";

interface CategoryWiseResourcesProps {
    resources: IResource[]
    categories: IResourceCategory[]
}
export default function CategoryWiseResources(props: CategoryWiseResourcesProps) {
    const {resources, categories} = props;

    return(
        <section className={`container mx-auto px-4 sm:px-6 lg:px-8 py-16`}>
            {
                categories.map((category) => (
                    <CategoryWiseGroup key={category._id} category={category}
                                       resources={resources.filter(r => r.category === category._id)} />
                ))
            }
        </section>
    )
}
