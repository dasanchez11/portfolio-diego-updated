import { IconComponents } from "utils/tech-icons";

export interface CardData {
  _id: string;
  title: string;
  shortDescription: string;
  resources: IconComponentKeys[];
  gitHubLink: string;
  liveLink: string;
  tags: string[];
  machineLearningId: string;
  image: string;
  date: string;
}

export type IconComponentKeys = keyof typeof IconComponents;
