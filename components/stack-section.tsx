"use client";

import StackIcon from "tech-stack-icons";

const mainStack = [
  { name: "Next.js", icon: "nextjs2" },
  { name: "NestJS", icon: "nestjs" },
  { name: "React", icon: "react" },
  { name: "NodeJS", icon: "nodejs" },
  { name: "TailwindCSS", icon: "tailwindcss" },
  { name: "ShadcnUI", icon: "shadcnui" },
  { name: "Expo", icon: "expo" },
  { name: "Vercel", icon: "vercel" },
];

const secondaryStack = [
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Redis", icon: "redis" },
  { name: "Elasticsearch", icon: "elastic" },
  { name: "Express.js", icon: "expressjs" },
  { name: "React Query", icon: "reactquery" },
  { name: "Zod", icon: "zod" },
  { name: "Three.js", icon: "threejs" },
  { name: "Jest", icon: "jest" },
  { name: "Cypress", icon: "cypress" },
  { name: "Playwright", icon: "playwright" },
  { name: "Storybook", icon: "storybook" },
  { name: "Slack", icon: "slack" },
  { name: "GitHub", icon: "github" },
  { name: "Linear", icon: "linear" },
  { name: "Notion", icon: "notion" },
];

export function StackSection() {
  return (
    <section id="stack" className="py-24 px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Stack &amp; Outils
          </h2>
          <p className="text-muted-foreground text-lg">
            Les technologies que j&apos;utilise au quotidien
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px border-2 bg-border">
            {mainStack.map((tool) => (
              <div
                key={tool.name}
                className="group flex flex-col items-center justify-center gap-2 w-full aspect-square bg-card p-4 transition-all duration-300 hover:bg-muted/30"
              >
                <StackIcon
                  name={tool.icon as Parameters<typeof StackIcon>[0]["name"]}
                  className="w-10 h-10 grayscale group-hover:grayscale-0 group-hover:-translate-y-2 transition-all duration-300"
                />
                <span className="text-xs text-muted-foreground opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 w-full text-center truncate">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-8 gap-px border-2 bg-border -mt-px">
            {secondaryStack.map((tool) => (
              <div
                key={tool.name}
                className="group flex flex-col items-center justify-center gap-1 w-full aspect-square bg-card p-2 transition-all duration-300 hover:bg-muted/30"
              >
                <StackIcon
                  name={tool.icon as Parameters<typeof StackIcon>[0]["name"]}
                  className="w-6 h-6 grayscale group-hover:grayscale-0 group-hover:-translate-y-1 transition-all duration-300"
                />
                <span className="text-[10px] text-muted-foreground opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 w-full text-center truncate">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
