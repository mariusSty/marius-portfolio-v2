import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { AnimatedSpan, Terminal, TypingAnimation } from "./ui/terminal";
import { Particles } from "./ui/particles";
import { ShimmerButton } from "./ui/shimmer-button";
import { BorderBeam } from "./ui/border-beam";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <Particles
        className="absolute inset-0 z-0"
        quantity={300}
        ease={80}
        color="#000000"
        refresh
      />
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex gap-4">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-balance">
                Marius STEPHANY
                <br />
                <span className="text-muted-foreground">
                  Développeur Fullstack
                </span>
              </h1>
            </div>
          </div>

          <div className="flex items-center justify-evenly">
            <a href="#projects">
              <ShimmerButton>Voir mes projets</ShimmerButton>
            </a>

            <div className="border relative overflow-hidden rounded-full py-2 px-6 flex items-center gap-2">
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
              <BorderBeam duration={4} />
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <Terminal>
            <TypingAnimation>Hello ! I&apos;m Marius STEPHANY</TypingAnimation>
            <AnimatedSpan className="text-blue-600">
              ❤︎ Love coding with JavaScript
            </AnimatedSpan>
            <AnimatedSpan className="text-green-500">
              ❤︎ Love creating new projects
            </AnimatedSpan>
            <AnimatedSpan className="text-orange-600">
              ★ Ready for new opportunities
            </AnimatedSpan>
            <AnimatedSpan className="text-purple-600">
              → Send me an email :)
            </AnimatedSpan>
          </Terminal>
        </div>
      </div>
    </section>
  );
}
