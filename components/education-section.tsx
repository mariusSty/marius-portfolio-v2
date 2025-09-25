import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"

const education = [
  {
    school: "École Supérieure d'Informatique",
    degree: "Master en Développement Web et Mobile",
    period: "2017 — 2019",
    description: "Formation spécialisée en développement d'applications web et mobiles",
    highlights: ["Mention Très Bien", "Projet de fin d'études sur React Native"],
  },
  {
    school: "Université de Technologie",
    degree: "Licence Informatique",
    period: "2014 — 2017",
    description: "Formation généraliste en informatique et programmation",
    highlights: ["Major de promotion", "Stage de 6 mois chez WebDev Corp"],
  },
]

const certifications = [
  {
    name: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    year: "2023",
  },
  {
    name: "React Developer Certification",
    issuer: "Meta",
    year: "2022",
  },
  {
    name: "Google Analytics Certified",
    issuer: "Google",
    year: "2021",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight">Formation</h2>
          <p className="text-muted-foreground text-lg">Mon parcours académique et mes certifications</p>
        </div>

        <div className="grid gap-12">
          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold">Diplômes</h3>
            </div>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <h4 className="text-lg font-semibold">{edu.degree}</h4>
                          <p className="text-primary font-medium">{edu.school}</p>
                        </div>
                        <Badge variant="outline">{edu.period}</Badge>
                      </div>

                      <p className="text-muted-foreground text-sm">{edu.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <Badge key={highlightIndex} variant="secondary" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold">Certifications</h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">{cert.name}</h4>
                      <p className="text-muted-foreground text-xs">{cert.issuer}</p>
                      <Badge variant="outline" className="text-xs w-fit">
                        {cert.year}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
