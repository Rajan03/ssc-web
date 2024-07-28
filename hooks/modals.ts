import {create} from "zustand";
import {IResource, ITeam} from "@/types";

interface TeamState {
    team: ITeam | null;
    open: boolean;
    setIsOpen: (_data: boolean) => void;
    setTeam: (_data: ITeam) => void;
}

interface ContactState {
    team: ITeam | null;
    open: boolean;
    setIsOpen: (_data: boolean) => void;
    setTeam: (_data: ITeam) => void;
}

interface ResourceState {
    resource: IResource | null;
    open: boolean;
    setIsOpen: (_data: boolean) => void;
    setResource: (_data: IResource) => void;
}
export const useTeamModal = create<TeamState>((set) => ({
    open: false,
    team: null,
    setIsOpen: (open) => set({open}),
    setTeam: (team) => set({team}),
}));

export const useContactModal = create<ContactState>((set) => ({
    open: false,
    team: null,
    setIsOpen: (open) => set({open}),
    setTeam: (team) => set({team}),
}));

export const useResourceModal = create<ResourceState>((set) => ({
    open: false,
    resource: null,
    setIsOpen: (open) => set({open}),
    setResource: (resource) => set({resource}),
}));
