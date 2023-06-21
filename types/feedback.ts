import {Opinions} from "@/utils/constants";

export interface IndividualFormSchema {
    type?: string;
    firstName: string;
    lastName: string;
    email: string;
    coachName: string;
    date: string;
    principles: Opinions;
    talentStrength: Opinions;
    collectiveStrength: Opinions;
    strategy: Opinions;
    comments: string;
}

export interface IManagerFormSchema {
    type?: string;
    firstName: string;
    lastName: string;
    email: string;
    coachName: string;
    date: string;
    principles: Opinions;
    talentStrength: Opinions;
    collectiveStrength: Opinions;
    strategy: Opinions;
    comments: string;
}


export interface ITeamFormSchema {
    type?: string;
    firstName: string;
    lastName: string;
    email: string;
    coachName: string;
    teamName: string;
    date: string;
    principles: Opinions;
    talentStrength: Opinions;
    collectiveStrength: Opinions;
    strategy: Opinions;
    comments: string;
}
