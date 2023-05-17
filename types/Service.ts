export interface IService {
  _id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  sections: Section[];
  showOnHome: boolean;
}

export interface Section {
  title: string;
  description: string;
  list: string[];
}
