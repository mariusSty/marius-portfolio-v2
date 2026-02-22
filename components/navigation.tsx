"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { HyperText } from "./ui/hyper-text";

const navItems = [
  { name: "À propos", href: "#hero" },
  { name: "Projets", href: "#projects" },
  { name: "Stack", href: "#stack" },
  { name: "Entreprises", href: "#companies" },
  { name: "Témoignages", href: "#testimonials" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "projects",
        "stack",
        "companies",
        "testimonials",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <HyperText className="font-mono text-sm font-medium">
            Portfolio — Marius STEPHANY
          </HyperText>
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant={
                  activeSection === item.href.slice(1) ? "default" : "ghost"
                }
                size="sm"
                asChild
              >
                <a href={item.href} className="text-sm">
                  {item.name}
                </a>
              </Button>
            ))}
            <div className="ml-2 flex items-center border-l border-border pl-2">
              <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                <a
                  href="https://github.com/mariusSty"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                <a
                  href="https://www.linkedin.com/in/marius-stephany-8bb7542a2/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                <a href="mailto:marius.stephany@gmail.com">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
