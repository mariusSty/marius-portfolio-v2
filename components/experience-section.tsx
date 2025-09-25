import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    company: "TechCorp Solutions",
    period: "2023 — Présent",
    role: "Développeur Fullstack Senior",
    description: "Entreprise spécialisée dans les solutions digitales pour les PME",
    missions: [
      "Développement d'applications web avec React et Node.js",
      "Architecture et optimisation de bases de données PostgreSQL",
      "Mise en place de pipelines CI/CD avec GitHub Actions",
      "Encadrement d'une équipe de 3 développeurs juniors",
    ],
    skills: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
  },
  {
    company: "StartupInnovante",
    period: "2021 — 2023",
    role: "Développeur Frontend",
    description: "Startup fintech développant des solutions de paiement mobile",
    missions: [
      "Création d'interfaces utilisateur responsive avec React et TypeScript",
      "Intégration d'APIs REST et GraphQL",
      "Optimisation des performances et de l'accessibilité",
      "Collaboration étroite avec l'équipe UX/UI",
    ],
    skills: ["React", "TypeScript", "GraphQL", "Tailwind CSS", "Jest"],
  },
  {
    company: "WebAgency Pro",
    period: "2019 — 2021",
    role: "Développeur Web",
    description: "Agence web créant des sites vitrine et e-commerce",
    missions: [
      "Développement de sites web avec WordPress et PHP",
      "Création de thèmes personnalisés et plugins",
      "Optimisation SEO et performances web",
      "Maintenance et support client",
    ],
    skills: ["PHP", "WordPress", "MySQL", "JavaScript", "SASS"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight">Expérience Professionnelle</h2>
          <p className="text-muted-foreground text-lg">Mon parcours professionnel dans le développement web</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex gap-8">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 flex justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full border-4 border-background" />
                </div>

                <Card className="flex-1">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-semibold">{exp.role}</h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                        <Badge variant="outline" className="w-fit">
                          {exp.period}
                        </Badge>
                      </div>

                      <p className="text-muted-foreground text-sm">{exp.description}</p>

                      <div className="space-y-3">
                        <h4 className="font-medium text-sm">Missions réalisées :</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {exp.missions.map((mission, missionIndex) => (
                            <li key={missionIndex} className="flex items-start gap-2">
                              <span className="w-1 h-1 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                              {mission}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-medium text-sm">Compétences :</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
