import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MagicCard } from "./ui/magic-card";

const education = [
  {
    school: "Institut G4 (Bac +5)",
    degree: "Titre RNCP niveau 1 - Chef de projet en système d'information",
    period: "Septembre 2015 — Juillet 2018",
    description: "Ecole de management et d'informatique en alternance",
  },
  {
    school: "Université Claude Bernard Lyon 1 (Bac +2)",
    degree: "DUT Informatique",
    period: "Septembre 2013 — Juillet 2015",
    description:
      "Formation universitaire généraliste en informatique et programmation",
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight">Formation</h2>
          <p className="text-muted-foreground text-lg">
            Mon parcours académique et mes diplômes
          </p>
        </div>

        <div className="grid gap-12">
          {/* Education */}
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="border-none">
                <MagicCard gradientColor="#D9D9D955" className="p-0">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <h4 className="text-lg font-semibold">
                            {edu.degree}
                          </h4>
                          <p className="text-primary font-medium">
                            {edu.school}
                          </p>
                        </div>
                        <Badge variant="outline">{edu.period}</Badge>
                      </div>

                      <p className="text-muted-foreground text-sm">
                        {edu.description}
                      </p>
                    </div>
                  </CardContent>
                </MagicCard>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
