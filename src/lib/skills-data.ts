export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillProps {
  skill: SkillItem;
}

export const SKILLS_DATA: SkillItem[] = [
  { name: "JavaScript", icon: "/skills_icons/JavaScript.svg" },
  { name: "TypeScript", icon: "/skills_icons/TypeScript.svg" },
  { name: "NextJs", icon: "/skills_icons/Next.js.svg" },
  { name: "NestJs", icon: "/skills_icons/Nest.js.svg" },
  { name: "NodeJs", icon: "/skills_icons/Node.js.svg" },
  { name: "React", icon: "/skills_icons/React.svg" },
  { name: "Tailwind CSS", icon: "/skills_icons/Tailwind CSS.svg" },
  { name: "PostgresSQL", icon: "/skills_icons/PostgresSQL.svg" },
];
