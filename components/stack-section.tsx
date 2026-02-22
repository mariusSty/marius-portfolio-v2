"use client";

import StackIcon from "tech-stack-icons";

const mainStack = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs2" },
  { name: "TailwindCSS", icon: "tailwindcss" },
  { name: "React Native", icon: "react" },
  { name: "NestJS", icon: "nestjs" },
  { name: "Express.js", icon: "expressjs" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "MongoDB", icon: "mongodb" },
];

const secondaryStack = [
  { name: "Angular", icon: "angular" },
  { name: "ShadcnUI", icon: "shadcnui" },
  { name: "MaterialUI", icon: "materialui" },
  { name: "SASS", icon: "sass" },
  { name: ".NET", icon: "csharp" },
  { name: "Elasticsearch", icon: "elastic" },
  { name: "Redis", icon: "redis" },
  { name: "Three.js", icon: "threejs" },
  { name: "Jest", icon: "jest" },
  { name: "Cypress", icon: "cypress" },
  { name: "Git", icon: "git" },
  { name: "Storybook", icon: "storybook" },
  { name: "Expo", icon: "expo" },
  { name: "Linear", icon: "linear" },
  { name: "Jira", icon: "jira" },
  { name: "Notion", icon: "notion" },
];

export function StackSection() {
  return (
    <section
      id="stack"
      className="py-24 px-6 bg-[radial-gradient(circle_at_center,_var(--muted)_1px,_transparent_1px)] bg-[length:24px_24px]"
    >
      <div className="max-w-3xl mx-auto">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Stack &amp; Outils
          </h2>
          <p className="text-muted-foreground text-lg">
            Les technologies que j&apos;utilise au quotidien
          </p>
        </div>

        <div className="grid grid-cols-4">
          {mainStack.map((tool) => (
            <div
              key={tool.name}
              className="group flex flex-col items-center justify-center gap-2 w-full aspect-square border border-muted bg-card p-4 transition-all duration-300 group-hover:shadow-md group-hover:border-primary/30"
            >
              <StackIcon
                name={tool.icon as Parameters<typeof StackIcon>[0]["name"]}
                className="w-10 h-10 grayscale group-hover:grayscale-0 group-hover:-translate-y-2 transition-all duration-300"
              />
              <span className="text-xs text-muted-foreground opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {tool.name}
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-8">
          {secondaryStack.map((tool) => (
            <div
              key={tool.name}
              className="group flex flex-col items-center justify-center gap-1 w-full aspect-square border border-muted bg-card p-2 transition-all duration-300 group-hover:shadow-md group-hover:border-primary/30"
            >
              <StackIcon
                name={tool.icon as Parameters<typeof StackIcon>[0]["name"]}
                className="w-6 h-6 grayscale group-hover:grayscale-0 group-hover:-translate-y-1 transition-all duration-300"
              />
              <span className="text-[10px] text-muted-foreground opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
