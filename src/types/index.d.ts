export type Work = {
  title: string;
  description: string;
  link: {
    name: string;
    url: string;
  };
  technologies: string[];
};

export type Works = Work[];

export type Experience = {
  company: string;
  role: string;
  yearStarted: number;
  yearEnded: number;
  responsibilities: string[];
};

export type Experiences = Experience[];
