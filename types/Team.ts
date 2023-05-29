export interface ITeam {
  _id: string;
  name: string;
  position: string;
  image: string;
  description: string;
  showOnHome: boolean;
  email: string;
  phone?: string;
  linkedin?: string;
  location: string;
  active: boolean;
  experience: IExperience[];
  skills: ISkill[];
}

export interface IExperience {
  _id: string;
  name: string;
  position: string;
  description?: string;
  duration: string;
}

export interface ISkill {
  _id: string;
  name: string;
  percentage: number;
}
