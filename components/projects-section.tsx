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
import { Lens } from "./ui/lens";

const projects = [
  {
    title: "Moveo",
    description:
      "Réalisation d'une plateforme web pour permettre aux organisations d'événements de gérer leur planning, membres et communications + application mobile pour les inscriptions des membres",
    image: "/moveo.png",
    technologies: ["Next.js", "React Native", "TailwindCSS", "ShadcnUI"],
    demo: "http://moveo.fit/",
  },
  {
    title: "Cube Galaxy",
    description:
      "Réalisation d'un timer de SpeedCubing (Rubik's Cube): génération de mélanges aléatoires, chronomètrage des résolutions par l'utilisateur",
    image: "/cube-galaxy.png",
    technologies: ["Next.js", "TailwindCSS", "ThreeJS"],
    github: "https://github.com/mariusSty/cube-galaxy",
    demo: "https://cube-galaxy.vercel.app/",
  },
  {
    title: "Computer Scene",
    description:
      "Création d'élements en 3D avec Blender, et intégration de la scène en Javascript",
    image: "/computer-scene.png",
    technologies: ["ThreeJS", "Javascript", "Blender"],
    github: "https://github.com/mariusSty/computer-scene-vanilla",
    demo: "https://computer-scene-vanilla.vercel.app",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight">
            Projets Personnels
          </h2>
          <p className="text-muted-foreground text-lg">
            Mes projets réalisés lors de mon temps libre
          </p>
        </div>

        <div className="grid gap-8">
          <div className="grid lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <Lens zoomFactor={2} lensSize={150} isStatic={false}>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </Lens>
                </div>
                <CardContent className="p-6 flex flex-col justify-between gap-3 h-[calc(100%-192px)]">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs"
                      >
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
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
