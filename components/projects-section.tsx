import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Plateforme e-commerce complète avec gestion des commandes, paiements et tableau de bord administrateur.",
    image: "/modern-ecommerce-interface.png",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    featured: true,
  },
  {
    title: "Task Management App",
    description: "Application de gestion de tâches collaborative avec temps réel et notifications push.",
    image: "/task-management-dashboard.png",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
  {
    title: "Weather Dashboard",
    description: "Dashboard météo avec géolocalisation, prévisions et graphiques interactifs.",
    image: "/weather-dashboard.png",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API", "SASS"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
  {
    title: "Portfolio CMS",
    description: "Système de gestion de contenu pour portfolios créatifs avec éditeur visuel.",
    image: "/cms-content-management-interface.jpg",
    technologies: ["React", "Express.js", "MySQL", "AWS S3"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
  {
    title: "Crypto Tracker",
    description: "Tracker de cryptomonnaies avec alertes de prix et analyse technique.",
    image: "/cryptocurrency-tracking-dashboard.jpg",
    technologies: ["Angular", "RxJS", "CoinGecko API", "Bootstrap"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
  {
    title: "Recipe Sharing App",
    description: "Application mobile de partage de recettes avec système de notation et favoris.",
    image: "/recipe-sharing-mobile-app-interface.jpg",
    technologies: ["React Native", "Firebase", "Expo", "Styled Components"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight">Projets Personnels</h2>
          <p className="text-muted-foreground text-lg">
            Une sélection de mes projets les plus récents et significatifs
          </p>
        </div>

        <div className="grid gap-8">
          {/* Featured Project */}
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground">Projet Phare</Badge>
                    </div>
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3 pt-2">
                        <Button size="sm" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Démo
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                      <div className="flex gap-2 pt-2">
                        <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-1 h-3 w-3" />
                            Démo
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-1 h-3 w-3" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
