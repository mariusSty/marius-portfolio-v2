"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { HyperText } from "./ui/hyper-text";

const navItems = [
  { name: "À propos", href: "#hero" },
  { name: "Expérience", href: "#experience" },
  { name: "Formation", href: "#education" },
  { name: "Projets", href: "#projects" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "experience", "education", "projects"];
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
            Portfolio
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
          </div>
        </div>
      </div>
    </nav>
  );
}
