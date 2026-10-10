export type TechGroup = {
  id: string;
  group: string;
  blurb: string;
  items: string[];
};

export const TECH_STACK: TechGroup[] = [
  {
    id: "01",
    group: "Programming Languages",
    blurb: "Languages I reach for most.",
    items: ["Java", "JavaScript", "TypeScript"],
  },
  {
    id: "02",
    group: "Frontend Development",
    blurb: "Building interfaces and apps.",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    id: "03",
    group: "Backend Development",
    blurb: "APIs, servers, and data layers.",
    items: ["Node.js", "Express.js", "Prisma","Spring-boot"],
  },
  {
    id: "04",
    group: "Databases",
    blurb: "Modelling and querying data.",
    items: ["PostgreSQL", "MongoDB"],
  },
  {
    id: "05",
    group: "Mobile Development",
    blurb: "Cross-platform mobile apps.",
    items: [ "Expo"],
  },
  {
    id: "06",
    group: "Testing",
    blurb: "Writing tests that matter.",
    items: ["Jest"],
  },
];