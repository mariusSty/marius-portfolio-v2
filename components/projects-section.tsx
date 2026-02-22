"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ProjectCard, type Project } from "./project-card";

const projects: Project[] = [
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

function getIndex(current: number, offset: number) {
  return (current + offset + projects.length) % projects.length;
}

export function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((i) => getIndex(i, -1));
  };
  const next = () => {
    setDirection(1);
    setCurrentIndex((i) => getIndex(i, 1));
  };

  const visibleProjects = [-1, 0, 1].map((offset) => ({
    offset,
    project: projects[getIndex(currentIndex, offset)],
  }));

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="max-w-5xl mx-auto">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Projets Personnels
          </h2>
          <p className="text-muted-foreground text-lg">
            Mes projets réalisés lors de mon temps libre
          </p>
        </div>

        <div className="relative flex items-center">
          <Button
            variant="outline"
            size="icon"
            className="absolute -left-12 z-20 bg-background"
            onClick={prev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="grid grid-cols-3 gap-4 w-full overflow-hidden">
            <AnimatePresence
              mode="popLayout"
              initial={false}
              custom={direction}
            >
              {visibleProjects.map(({ offset, project }) => (
                <motion.div
                  key={`${currentIndex}-${offset}`}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 200, scale: 0.9 }}
                  animate={{
                    opacity: offset === 0 ? 1 : 0.5,
                    x: 0,
                    scale: offset === 0 ? 1 : 0.85,
                  }}
                  exit={{ opacity: 0, x: direction * -200, scale: 0.9 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                  className="h-full"
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute -right-12 z-20 bg-background"
            onClick={next}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
