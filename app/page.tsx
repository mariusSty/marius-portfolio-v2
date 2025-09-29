import { HeroSection } from "@/components/hero-section";
import { ExperienceSection } from "@/components/experience-section";
import { EducationSection } from "@/components/education-section";
import { ProjectsSection } from "@/components/projects-section";
import { Navigation } from "@/components/navigation";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
      </main>
    </div>
  );
}
