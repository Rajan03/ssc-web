import {create} from "zustand";
import {SanityNavbar} from "@/types/sanity";
import {sanityGet} from "@/sanity";
import {GET_NAVBAR} from "@/lib/sanityQueries";

interface NavState {
    isOpen: boolean;
    setIsOpen: (_data: boolean) => void;
}

export const useNavState = create<NavState>((set) => ({
    isOpen: false,
    setIsOpen: (isOpen) => set({isOpen}),
}));


interface NavDataState {
    data: SanityNavbar;
    setNavData: (_data: SanityNavbar) => void;
    getNavData: () => Promise<SanityNavbar>;
}

export const useNavData = create<NavDataState>((set) => ({
    data: {
        phone: '',
        email: '',
        logo: '',
        links: [],
        tagline: '',
    },
    setNavData: (data) => set({data}),
    getNavData: async () => {
        const data: SanityNavbar = await sanityGet(GET_NAVBAR);
        set({data});
        return data;
    },
}))
;
