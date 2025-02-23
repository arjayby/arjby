import type { Works, Experiences } from "@/types";

export const menus = <const>["Works", "Experience", "Contact"];

export const works: Works = [
  {
    title: "Bounty",
    description:
      "A platform that allows users to get paid for posting about their favorite brands on TikTok and Instagram.",
    link: {
      name: "https://www.bounty.co",
      url: "https://www.bounty.co",
    },
    technologies: ["React", "Redux", "Chakra UI", "GraphQL", "Apollo"],
  },
  {
    title: "Join Bounty",
    description:
      "A platform aimed at enhancing employee performance and retention through automated rewards and recognition.",
    link: {
      name: "https://joinbounty.ai",
      url: "https://joinbounty.ai",
    },
    technologies: [
      "React",
      "Zustand",
      "Chakra UI",
      "tRPC",
      "React Query",
      "PropelAuth",
    ],
  },
  {
    title: "Capture",
    description:
      "A service that digitizes merchant onboarding application forms, simplifies workflows, and detects potential fraudulent applications early on to enhance safety for businesses.",
    link: {
      name: "https://www.jewelpaymentech.com",
      url: "https://www.jewelpaymentech.com/capture.html",
    },
    technologies: [
      "React",
      "Redux",
      "React Testing Library",
      "Semantic UI",
      "Axios",
    ],
  },
  {
    title: "StackEd",
    description:
      "Stack Education (StackEd) provides free cloud-based educational tech to schools for job-ready programming graduates, aiming to bridge the education-employment gap.",
    link: {
      name: "https://stackeducation.org",
      url: "https://stackeducation.org",
    },
    technologies: [
      "React",
      "Redux",
      "Material UI",
      "Phoenix Framework",
      "TypeScript",
    ],
  },
  {
    title: "FindiSport",
    description:
      "Connects coaches and students in any sport, allowing students to find the right coach, compare prices and locations, and book instantly through the platform.",
    link: {
      name: "https://findisport.com",
      url: "https://findisport.com/en",
    },
    technologies: ["React", "React Native", "Expo", "NativeBase", "Firebase"],
  },
  {
    title: "Roots",
    description:
      "Provides customer-centric online mortgage application, rate rebate comparison, and smart mortgage computer services to simplify property purchasing.",
    link: {
      name: "https://hkroots.io",
      url: "https://hkroots.io",
    },
    technologies: [
      "React",
      "Material UI",
      "Node.js",
      "Express.js",
      "Feathers.js",
      "MongoDB",
    ],
  },
];

export const experiences: Experiences = [
  {
    company: "Bounty",
    role: "Software Engineer",
    yearStarted: 2023,
    yearEnded: 2024,
    responsibilities: [
      "Developed automated, performance-based rewards systems to improve employee engagement and retention.",
      "Conducted maintenance and bug fixing, along with adding new features to enhance the platform’s functionality.",
      "Technologies used and worked on are React, Zustand, Chakra UI, tRPC, React Query, PropelAuth, GraphQL.",
    ],
  },
  {
    company: "Jewel Paymentech",
    role: "Frontend Developer",
    yearStarted: 2021,
    yearEnded: 2023,
    responsibilities: [
      "Expanding the frontend capabilities to serve multiple clients with different requirements on a single product. This allows the application to use custom features based on certain clients like Atome, Grab and Hoolah.",
      "Conducting thorough research and analysis prior to implementing change requests from various clients without breaking the existing features and affecting the other clients.",
      "Completed the migration of our frontend testing from Enzyme to React Testing Library allowing us to upgrade to the latest feature of React v18.",
      "Technologies used and worked on are React, Redux, React Testing Library, SCSS, Semantic UI and Axios.",
    ],
  },
  {
    company: "StackTrek Enterprise",
    role: "Software Engineer",
    yearStarted: 2018,
    yearEnded: 2021,
    responsibilities: [
      "Developed multiple web applications and a mobile application for various startup companies. This enabled the company to attract more new clients and grow.",
      "Worked with software development and testing team members to design and develop solutions to meet client requirements for functionality, scalability, and performance.",
      "Proficient in using a diverse range of programming languages, including JavaScript/TypeScript and Elixir, library and frameworks like React and Phoenix Framework.",
      "Technologies used and worked on different projects are Node.js, Express.js, Feathers.js, OAuth (Facebook, Google), MongoDB, PostgreSQL, Firebase, HTML5, CSS3, Material UI and styled-components.",
    ],
  },
];
