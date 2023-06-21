import {Tab} from '@headlessui/react'
import {IService} from "@/types";

interface Props {
    categories: IService[];
}

export default function FormTabs({categories}: Props) {

    return (
        <Tab.List className="flex flex-col md:flex-row space-x-1 md:h-20 bg-white shadow">
            {categories?.map((category) => (
                <Tab
                    key={category._id}
                    className={({selected}) =>
                        ('w-full py-6 md:py-2.5 capitalize text-md font-medium leading-5 text-primary-600 focus:outline-none ' +
                            (selected
                                ? 'bg-primary-600 text-white '
                                : 'text-primary-600 hover:bg-primary-600/20'))
                    }
                >
                    {category.title}
                </Tab>
            ))}
        </Tab.List>
    )
}
