import {
  TypescriptIcon,
  AngularIcon,
  JavascriptIcon,
  MongodbIcon,
  NestjsIcon,
  ReactIcon,
  PythonIcon,
  GitIcon,
} from "../assets/icons/index";

export interface TechStackList {
  icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  experience: number;
  name: string;
}

const techStackArray: TechStackList[] = [
  {
    icon: TypescriptIcon,
    experience: 2,
    name: "Typescript",
  },
  {
    icon: JavascriptIcon,
    experience: 3,
    name: "Javascript",
  },
  {
    icon: AngularIcon,
    experience: 1,
    name: "Angular",
  },
  {
    icon: ReactIcon,
    experience: 2,
    name: "React",
  },
  {
    icon: MongodbIcon,
    experience: 1,
    name: "Mongo DB",
  },
  {
    icon: NestjsIcon,
    experience: 1,
    name: "Nest JS",
  },
  {
    icon: PythonIcon,
    experience: 2,
    name: "Python",
  },
  {
    icon: GitIcon,
    experience: 2,
    name: "Git",
  },
];

export default techStackArray;
