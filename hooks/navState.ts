import {create} from "zustand";

interface NavState {
    isOpen: boolean;
    setIsOpen: (_data: boolean) => void;
}
export const useNavState = create<NavState>((set) => ({
    isOpen: false,
    setIsOpen: (isOpen) => set({isOpen}),
}));
