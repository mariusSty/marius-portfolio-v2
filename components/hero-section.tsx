import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary" className="w-fit">
              Disponible pour de nouvelles opportunités
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-balance">
              Développeur
              <br />
              <span className="text-muted-foreground">Fullstack</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Je crée des expériences web modernes et performantes en combinant
              design élégant et code robuste. Passionné par les technologies
              JavaScript et l'écosystème React.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Button size="lg" asChild>
              <a href="#projects">
                Voir mes projets
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:marius.stephany@gmail.com">Me contacter</a>
            </Button>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/mariusSty"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/marius-stephany-8bb7542a2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:marius.stephany@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 rounded-2xl bg-muted overflow-hidden">
              <Image
                src="/profile.jpeg"
                alt="Photo de profil"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-mono text-sm">
              {"{ fullstack }"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
