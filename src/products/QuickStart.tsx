import { PromptSelector } from "@/components/PromptSelector";

export const QuickStart = () => {
  type Project = {
    name: string;
    initials: string;
    href: string;
    members: number;
    bgColor: string;
    aiModal: any;
  };

  const projects: Project[] = [
    {
      name: "Graph API",
      initials: "GA",
      href: "#",
      members: 16,
      bgColor: "bg-pink-600",
      aiModal: "",
    },
    {
      name: "Component Design",
      initials: "CD",
      href: "#",
      members: 12,
      bgColor: "bg-purple-600",
      aiModal: "",
    },
    {
      name: "Templates",
      initials: "T",
      href: "#",
      members: 16,
      bgColor: "bg-yellow-500",
      aiModal: "",
    },
    {
      name: "React Components",
      initials: "RC",
      href: "#",
      members: 8,
      bgColor: "bg-green-500",
      aiModal: "",
    },
  ];
  return (
    <div>
      <PromptSelector projects={projects} />
    </div>
  );
};
