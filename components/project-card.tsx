import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { MagicCard } from "@/components/ui/magic-card";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import StackIcon from "tech-stack-icons";

const techIconMap: Record<string, string> = {
  "Next.js": "nextjs2",
  "React Native": "react",
  React: "react",
  TailwindCSS: "tailwindcss",
  ShadcnUI: "shadcnui",
  ThreeJS: "threejs",
  Javascript: "js",
  Blender: "blender",
  TypeScript: "typescript",
  NestJS: "nestjs",
  PostgreSQL: "postgresql",
  MongoDB: "mongodb",
  Angular: "angular",
  Express: "expressjs",
  Git: "git",
};

export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo: string;
};

export function ProjectCard({
  project,
  isActive = false,
}: {
  project: Project;
  isActive?: boolean;
}) {
  return (
    <MagicCard
      className="h-full overflow-hidden group hover:shadow-lg transition-shadow flex flex-col rounded-xl"
      gradientColor="#9c40ff10"
    >
      <div className="relative h-48 shrink-0 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={500}
          height={500}
          className={cn(
            "w-full h-full object-cover transition-all duration-300",
            !isActive && "grayscale",
          )}
        />
      </div>
      <CardContent className="p-6 flex flex-col flex-1 gap-3">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {project.description}
        </p>
        <div className="overflow-hidden">
          <Marquee className="[--duration:10s]">
            {project.technologies.map((tech) => {
              const iconName = techIconMap[tech];
              if (!iconName) return null;
              return (
                <div
                  key={tech}
                  className={cn(
                    "flex items-center gap-1.5 mx-2",
                    !isActive && "grayscale opacity-50",
                  )}
                >
                  <StackIcon name={iconName} className="h-5 w-5" />
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {tech}
                  </span>
                </div>
              );
            })}
          </Marquee>
        </div>
        <div className="flex gap-2 pt-2 mt-auto">
          <Button size="sm" className="flex-1" asChild>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-1 h-3 w-3" />
              Voir le site
            </a>
          </Button>
          {project.github ? (
            <Button size="sm" className="flex-1" asChild>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-1 h-3 w-3" />
                Code
              </a>
            </Button>
          ) : (
            <Button size="sm" className="flex-1" disabled>
              <Github className="mr-1 h-3 w-3" />
              Privé
            </Button>
          )}
        </div>
      </CardContent>
    </MagicCard>
  );
}
