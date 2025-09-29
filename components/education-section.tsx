import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BorderBeam } from "./ui/border-beam";

const education = [
  {
    school: "Institut G4",
    degree: "Titre RNCP niveau 1 (Bac +5)",
    period: "2015 — 2018",
    description: "Ecole de management et d'informatique en alternance",
  },
  {
    school: "Université Claude Bernard Lyon 1",
    degree: "DUT Informatique (Bac +2)",
    period: "2013 — 2015",
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

        <div className="grid grid-cols-2 gap-4">
          {/* Education */}
          {education.map((edu, index) => (
            <Card key={index} className="border-none relative">
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h4 className="text-lg font-semibold">{edu.degree}</h4>
                      <p className="text-primary font-medium">{edu.school}</p>
                    </div>
                    <Badge variant="outline" className="text-nowrap">
                      {edu.period}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground text-sm">
                    {edu.description}
                  </p>
                </div>
              </CardContent>
              <BorderBeam />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
