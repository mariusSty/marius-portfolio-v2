import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo: string;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="h-full">
      <Card className="overflow-hidden group hover:shadow-lg transition-shadow h-full flex flex-col">
        <div className="relative h-48 shrink-0 overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={500}
            height={500}
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
          />
        </div>
        <CardContent className="p-6 flex flex-col flex-1 justify-between gap-3">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 3).map((tech, techIndex) => (
              <Badge key={techIndex} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge
                      variant="secondary"
                      className="text-xs cursor-pointer"
                    >
                      +{project.technologies.length - 3}
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{project.technologies.slice(3).join(", ")}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
          <div className="flex gap-2 pt-2">
            <Button
              size="sm"
              variant="outline"
              className="flex-1 bg-transparent"
              asChild
            >
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-3 w-3" />
                Voir le site
              </a>
            </Button>
            {project.github ? (
              <Button
                size="sm"
                variant="outline"
                className="flex-1 bg-transparent"
                asChild
              >
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
              <Button
                size="sm"
                variant="outline"
                className="flex-1 bg-transparent"
                disabled
              >
                <Github className="mr-1 h-3 w-3" />
                Privé
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
