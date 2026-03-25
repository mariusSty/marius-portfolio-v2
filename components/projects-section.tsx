"use client";

import { AndroidIcon } from "@/components/icons/android-icon";
import { AppleIcon } from "@/components/icons/apple-icon";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Carousel as ShadcnCarousel,
} from "@/components/ui/carousel";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
  TypeScript: "typescript",
  NestJS: "nestjs",
  NodeJS: "nodejs",
  PostgreSQL: "postgresql",
  MongoDB: "mongodb",
  Angular: "angular",
  Express: "expressjs",
  Git: "git",
  Storybook: "storybook",
  Expo: "expo",
  Linear: "linear",
  Jira: "jira",
  Notion: "notion",
  Prisma: "prisma",
  Vercel: "vercel",
  Zustand: "zustand",
  "Socket.IO": "socketio",
  Playwright: "playwright",
  Sentry: "sentry",
  PostHog: "posthog",
  Resend: "resend",
  zod: "zod",
  Cloudflare: "cloudflare",
};

type Project = {
  title: string;
  description: string;
  cover: string;
  images?: string[];
  technologies: string[];
  github?: string;
  demo?: string;
  ios?: string;
  android?: string;
};

const projects: Project[] = [
  {
    title: "Moveo",
    description:
      "Réalisation d'une plateforme web pour permettre aux organisations d'événements de gérer leur planning, membres et communications + application mobile pour les inscriptions des membres",
    cover: "/mockup-moveo.png",
    images: ["/moveo-1.png", "/moveo-2.png", "/moveo-bis.png"],
    technologies: [
      "Next.js",
      "React",
      "Expo",
      "React Native",
      "TypeScript",
      "TailwindCSS",
      "ShadcnUI",
      "PostgreSQL",
      "Prisma",
      "Vercel",
      "Resend",
      "zod",
      "Sentry",
      "PostHog",
    ],
    demo: "http://moveo.fit/",
    ios: "https://apps.apple.com/fr/app/moveo-app/id6759037393",
    android:
      "https://play.google.com/store/apps/details?id=com.mariussty.bookslotapp",
  },
  {
    title: "Playlist Game",
    description:
      "Jeu mobile en temps réel. A chaque manche, un thème musical est posé, chaque joueur choisit une chanson anonymement, puis tout le monde écoute les extraits et tente de deviner qui a choisi quoi.",
    cover: "/mockup-playlist-game.png",
    images: ["/playlist-game.png", "/playlist-game-bis.png"],
    technologies: [
      "Expo",
      "React Native",
      "NestJS",
      "NodeJS",
      "Prisma",
      "PostgreSQL",
      "TypeScript",
      "React",
      "TailwindCSS",
      "Socket.IO",
      "Playwright",
      "Sentry",
      "Zustand",
    ],
    ios: "https://apps.apple.com/fr/app/playlist-game/id6760018355",
    android:
      "https://play.google.com/store/apps/details?id=com.mariussty.playlistgame",
  },
  {
    title: "Who are you",
    description:
      "Application mobile de quiz de personnalité. Répondez à des questions et découvrez qui vous êtes...",
    cover: "/mockup-who-are-you.png",
    images: ["/who-are-you.png"],
    technologies: [
      "Expo",
      "React Native",
      "TypeScript",
      "React",
      "TailwindCSS",
      "Zustand",
      "zod",
      "Cloudflare",
    ],
    ios: "https://apps.apple.com/fr/app/who-are-you-quiz/id6740519498",
    android:
      "https://play.google.com/store/apps/details?id=com.mariussty.whoareyou",
  },
  {
    title: "Cube Galaxy",
    description:
      "Réalisation d'un timer de SpeedCubing (Rubik's Cube): génération de mélanges aléatoires, chronomètrage des résolutions par l'utilisateur",
    cover: "/mockup-cube-galaxy.png",
    images: ["/cube-galaxy.png"],
    technologies: [
      "Next.js",
      "React",
      "TailwindCSS",
      "ThreeJS",
      "TypeScript",
      "Vercel",
    ],
    github: "https://github.com/mariusSty/cube-galaxy",
    demo: "https://cube-galaxy.vercel.app/",
  },
  {
    title: "Computer Scene",
    description:
      "Création d'élements en 3D avec Blender, et intégration de la scène en Javascript. Exercice intégré à une formation ThreeJS que j'ai suivi en autonomie.",
    cover: "/mockup-computer-scene.png",
    images: ["/computer-scene.png"],
    technologies: ["ThreeJS", "Javascript", "Vercel"],
    github: "https://github.com/mariusSty/computer-scene-vanilla",
    demo: "https://computer-scene-vanilla.vercel.app",
  },
];

function ProjectExpandedContent({ project }: { project: Project }) {
  return (
    <div className="space-y-8">
      {/* Links */}
      <div className="flex flex-wrap items-center gap-3">
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            <ShimmerButton className="text-sm" borderRadius="12px">
              <ExternalLink className="mr-2 h-4 w-4" />
              Site web
            </ShimmerButton>
          </a>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <ShimmerButton className="text-sm" borderRadius="12px">
              <Github className="mr-2 h-4 w-4" />
              Code source
            </ShimmerButton>
          </a>
        )}
        {project.ios && (
          <a href={project.ios} target="_blank" rel="noopener noreferrer">
            <ShimmerButton className="text-sm" borderRadius="12px">
              <AppleIcon className="mr-2 h-4 w-4" />
              App IOS
            </ShimmerButton>
          </a>
        )}
        {project.android && (
          <a href={project.android} target="_blank" rel="noopener noreferrer">
            <ShimmerButton className="text-sm" borderRadius="12px">
              <AndroidIcon className="mr-2 h-4 w-4" />
              App Android
            </ShimmerButton>
          </a>
        )}
      </div>

      {/* Description */}
      <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
        {project.description}
      </p>

      {/* Tech stack as avatar group */}
      <div className="flex items-center">
        <div className="flex gap-2">
          {project.technologies.map((tech) => {
            const iconName = techIconMap[tech];
            if (!iconName) return null;
            return (
              <Tooltip key={tech}>
                <TooltipTrigger asChild>
                  <span className="inline-flex cursor-default">
                    <StackIcon
                      name={iconName as Parameters<typeof StackIcon>[0]["name"]}
                      className="size-10"
                    />
                  </span>
                </TooltipTrigger>
                <TooltipContent>{tech}</TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </div>

      {/* Images carousel */}
      {project.images && project.images.length > 0 && (
        <ShadcnCarousel className="w-full">
          <CarouselContent>
            {project.images.map((img, i) => (
              <CarouselItem key={img} className="flex items-center">
                <Image
                  src={img}
                  alt={`${project.title} - capture ${i + 1}`}
                  width={1200}
                  height={800}
                  className="w-full max-h-[500px] object-contain"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </ShadcnCarousel>
      )}
    </div>
  );
}

export function ProjectsSection() {
  const cards = projects.map((project, index) => (
    <Card
      key={project.title}
      card={{
        src: project.cover,
        title: project.title,
        category: "",
        content: <ProjectExpandedContent project={project} />,
      }}
      index={index}
    />
  ));

  return (
    <section
      id="projects"
      className="py-24 bg-linear-to-b from-background to-muted/20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="space-y-4 mb-8 text-center px-6">
          <h2 className="text-3xl font-bold tracking-tight">
            Projets Personnels
          </h2>
          <p className="text-muted-foreground text-lg">
            Mes projets réalisés lors de mon temps libre
          </p>
        </div>
        <Carousel items={cards} />
      </div>
    </section>
  );
}
