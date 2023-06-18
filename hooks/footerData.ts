import {SanityFooter} from "@/types/sanity";
import {create} from "zustand";
import {sanityGet} from "@/sanity";
import {GET_FOOTER} from "@/lib/sanityQueries";

interface FooterDataState {
    data: SanityFooter;
    setFooterData: (_data: SanityFooter) => void;
    getFooterData: () => Promise<SanityFooter>;
}

export const useFooterData = create<FooterDataState>((set) => ({
        data: {
            copyRight: '',
            description: '',
            links: [],
            logo: '',
            socialLinks: [],
            developer: {
                title: '',
                url: ''
            }
        },
        setFooterData: (data) => set({data}),
        getFooterData: async () => {
            const data: SanityFooter = await sanityGet(GET_FOOTER);
            set({data});
            return data;
        },
    }));
