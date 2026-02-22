import { CompaniesSection } from "@/components/companies-section";
import { HeroSection } from "@/components/hero-section";
import { Navigation } from "@/components/navigation";
import { ProjectsSection } from "@/components/projects-section";
import { StackSection } from "@/components/stack-section";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ProjectsSection />
        <StackSection />
        <CompaniesSection />
        <TestimonialsSection />
      </main>
    </div>
  );
}
