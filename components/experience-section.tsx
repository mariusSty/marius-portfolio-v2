import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    company: "The Surge",
    period: "Février 2025 — Septembre 2025",
    role: "Développeur Full Stack - Freelance",
    description:
      "The Surge est une startup qui développe des applications dans le domaine de la blockchain et du trading",
    missions: [
      "Lead technique sur le frontend du bot de trading",
      "Développement d'un backend avec une architecture en DDD",
      "Mentorat d’un alternant (relecture de code, formation aux bonnes pratiques)",
      "Intégration des maquettes pour le site de présentation du bot",
      "Création d’un bot Telegram gérant le système d’affiliation",
    ],
    skills: [
      "NestJS",
      "NextJS",
      "TailwindCSS",
      "ShadcnUI",
      "Elasticsearch",
      "Redis",
      "BullMQ",
      "Jest",
      "PostgreSQL",
    ],
  },
  {
    company: "Krafteo",
    period: "Janvier 2024 — Décembre 2024",
    role: "Développeur Full Stack - Freelance",
    description:
      "Krafteo est une start-up qui édite une solution de planning et pilotage d'activité pour le secteur de la menuiserie.",
    missions: [
      "Conception et développement d’une application web et mobile",
      "Déploiement de l'application sur les stores Android et Apple",
      "Ajout de fonctionnalités sur l'API REST",
      "Mise en place d’une lambda serverless pour automatiser des traitements back-end",
    ],
    skills: [
      "NextJS",
      "ExpressJS",
      "React Native",
      "TailwindCSS",
      "ShadcnUI",
      "react-big-calendar",
      "Serverless",
      "PostgreSQL",
    ],
  },
  {
    company: "Masteos",
    period: "Mai 2022 — Août 2023",
    role: "Développeur Full Stack - CDI",
    description:
      "Masteos est une startup française, ayant pour objectif de simplifier l'investissement immobilier pour les particuliers",
    missions: [
      "Développement des interfaces web et mobiles de la plateforme",
      "Conception et mise en place d’une API REST pour le backoffice et d’une API GraphQL pour les applications clientes",
      "Création d’un backoffice interne avec la librairie React-Admin pour la gestion des opérations",
      "Enrichissement du design system via de nouveaux composants réutilisables",
      "Rédaction et automatisation de tests unitaires et d’intégration",
    ],
    skills: [
      "NestJS",
      "React Native",
      "React",
      "Storybook",
      "Jest",
      "Cypress",
      "Brevo",
      "Zapier",
      "Hubspot",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    company: "Fulll",
    period: "Juin 2020 — Septembre 2021",
    role: "Développeur web - CDI",
    description:
      "Fulll est une agence du groupe InExtenso. Leur objectif est de digitaliser tous les aspects de la comptabilité. Le projet Pilotage avait pour but de fournir un tableau de bord aux directeurs des cabinets d'experts comptables pour piloter leurs équipes",
    missions: [
      "Création des vues avec la librairie MaterialUI",
      "Mise en place des tests end2end avec Cypress et Cucumber",
      "Gestion de la volumétrie avec ElasticSearch",
      "Conception d'une API Graphql",
    ],
    skills: [
      "React",
      "ExpressJS",
      "Elasticsearch",
      "Jest",
      "Cypress",
      "MaterialUI",
      "MongoDB",
    ],
  },
  {
    company: "Métropole de Lyon",
    period: "Octobre 2019 — Mai 2020",
    role: "Développeur frontend - CDI",
    description:
      "La Métropole de Lyon possède un réseau social d'entrepreneurs lyonnais mettant en lien différents corps de métiers, ainsi que des incubateurs",
    missions: [
      "Ajout des fonctionnalités sur l'application existante (likes, parcours de formation, réservation de salles ...)",
      "Création d'un site web annexe pour un évenement",
      "Modification et développement des nouvelles routes",
    ],
    skills: ["Angular", "ExpressJS", "SASS", "Jest"],
  },
  {
    company: "Astek",
    period: "Septembre 2017 — Août 2018",
    role: "Développeur Full Stack - Alternance",
    description:
      "Prestation pour le client les Scouts d'Europe. Refonte du système d'information de l'assocation (inscription, donation, événements, etc...)",
    missions: [
      "Développement des fonctionnalités de gestion de comptes utilisateurs",
      "Création des premières entités du modèle de données",
      "Mise en place de la première architecture front-end",
    ],
    skills: ["Angular", "Java", "SASS"],
  },
  {
    company: "Sopra Steria",
    period: "Septembre 2015 — Août 2017",
    role: "Développeur Full Stack - Alternance",
    description:
      "La SNCF possède un centre de services, basé à Roanne, Pour piloter leurs équipes, le manageur a besoin d'une application qui fournit un reporting.",
    missions: [
      "Création de l'application en .NET. Génération de fichiers .CSV. Calculs de KPI grâce à des requêtes MySQL",
      "Conception d'une application de monitioring chargée de répértorier les données d'un centre de services de la SNCF",
      "Récupération et centralisation des données via Talend",
    ],
    skills: [".NET", "Talend", "MySQL"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight">
            Expérience Professionnelle
          </h2>
          <p className="text-muted-foreground text-lg">
            Mon parcours professionnel dans le développement web et mobile
          </p>
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
                          <p className="text-primary font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <Badge variant="outline" className="w-fit">
                          {exp.period}
                        </Badge>
                      </div>

                      <p className="text-muted-foreground text-sm">
                        {exp.description}
                      </p>

                      <div className="space-y-3">
                        <h4 className="font-medium text-sm">
                          Missions réalisées :
                        </h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {exp.missions.map((mission, missionIndex) => (
                            <li
                              key={missionIndex}
                              className="flex items-start gap-2"
                            >
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
                            <Badge
                              key={skillIndex}
                              variant="secondary"
                              className="text-xs"
                            >
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
  );
}
