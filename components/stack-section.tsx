"use client";

import StackIcon from "tech-stack-icons";

const stack = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs2" },
  { name: "Angular", icon: "angular" },
  { name: "TailwindCSS", icon: "tailwindcss" },
  { name: "ShadcnUI", icon: "shadcnui" },
  { name: "MaterialUI", icon: "materialui" },
  { name: "SASS", icon: "sass" },
  { name: "React Native", icon: "react" },
  { name: "NestJS", icon: "nestjs" },
  { name: "Express.js", icon: "expressjs" },
  { name: ".NET", icon: "csharp" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Elasticsearch", icon: "elastic" },
  { name: "Redis", icon: "redis" },
  { name: "Three.js", icon: "threejs" },
  { name: "Jest", icon: "jest" },
  { name: "Cypress", icon: "cypress" },
  { name: "Git", icon: "git" },
  { name: "Storybook", icon: "storybook" },
];

export function StackSection() {
  return (
    <section id="stack" className="py-24 px-6 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight">
            Stack &amp; Outils
          </h2>
          <p className="text-muted-foreground text-lg">
            Les technologies que j&apos;utilise au quotidien
          </p>
        </div>

        <div className="grid grid-cols-4 gap-6 justify-items-center">
          {stack.map((tool) => (
            <div
              key={tool.name}
              className="group flex flex-col items-center gap-2"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-lg border border-muted bg-card p-2.5 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-md group-hover:border-primary/30">
                <StackIcon
                  name={tool.icon as Parameters<typeof StackIcon>[0]["name"]}
                  className="w-9 h-9 grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
