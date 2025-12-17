import type { Works, Experiences } from "@/types";

export const menus = <const>["Works", "Experience", "Contact"];

export const works: Works = [
  {
    title: "Housefit (2025)",
    description:
      "Designed and developed a custom admin dashboard to manage members, memberships, QR-code check-ins, and inventory, streamlining daily gym operations and reducing manual tracking by 500%.",
    link: {
      name: "https://housefitgym.com/",
      url: "https://housefitgym.com/",
    },
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Clerk",
      "Supabase",
    ],
  },
];

export const experiences: Experiences = [
  {
    company: "Bounty",
    role: "Software Developer",
    yearStarted: 2023,
    yearEnded: 2024,
    responsibilities: [
      "Architected, built, and maintained 100% of the frontend application using React and TypeScript, delivering a scalable production platform.",
      "Implemented server-driven workflows and API integrations using Prisma and tRPC, improving data consistency and reducing failed requests.",
      "Collaborated closely with product and backend teams through PR reviews and RFC-style discussions, accelerating feature delivery by 8 weeks.",
      "Optimized state management, cache invalidation, and optimistic update using React Query, reducing redundant network calls twice or more and improving perceived performance.",
    ],
  },
  {
    company: "Jewel Paymentech",
    role: "Frontend Developer",
    yearStarted: 2021,
    yearEnded: 2023,
    responsibilities: [
      "Developed and scaled a multi-tenant React frontend supporting multiple enterprise clients on a single codebase, reducing maintenance overhead.",
      "Implemented client-specific UI logic and theming systems, enabling rapid customization while maintaining performance and design consistency.",
      "Added automated unit and component tests using React Testing Library, increasing test coverage to 92% and preventing regressions.",
    ],
  },
  {
    company: "StackTrek Enterprise",
    role: "Software Engineer",
    yearStarted: 2018,
    yearEnded: 2021,
    responsibilities: [
      " Delivered multiple production web and mobile applications using React, Node.js, and Firebase, supporting applications with 10,000+ users.",
      "Built API-driven features with Feathers.js, implementing graceful degradation for third-party service failures.",
      "Collaborated with QA and product stakeholders to meet performance, scalability, and accessibility requirements, achieving 99% uptime targets.",
      "Designed secure authentication flows using OAuth and token-based strategies, reducing authentication-related issues.",
    ],
  },
];
