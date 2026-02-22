import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee";

const firstRow = [
  {
    name: "Prénom Nom",
    role: "CTO",
    company: "The Surge",
    avatar: "/avatars/placeholder.jpg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Marius a fait un travail exceptionnel sur notre plateforme de trading.",
  },
  {
    name: "Prénom Nom",
    role: "Product Owner",
    company: "Krafteo",
    avatar: "/avatars/placeholder.jpg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Une collaboration très efficace sur notre application mobile et web.",
  },
  {
    name: "Prénom Nom",
    role: "Lead Developer",
    company: "Fulll",
    avatar: "/avatars/placeholder.jpg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Marius a su monter en compétence rapidement sur Elasticsearch.",
  },
];

const secondRow = [
  {
    name: "Prénom Nom",
    role: "Engineering Manager",
    company: "Masteos",
    avatar: "/avatars/placeholder.jpg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Très bon développeur, autonome et force de proposition.",
  },
  {
    name: "Prénom Nom",
    role: "Tech Lead",
    company: "Métropole de Lyon",
    avatar: "/avatars/placeholder.jpg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bonne capacité d'adaptation et très bon esprit d'équipe.",
  },
  {
    name: "Prénom Nom",
    role: "Chef de projet",
    company: "Astek",
    avatar: "/avatars/placeholder.jpg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Un alternant impliqué et rigoureux dans son travail.",
  },
];

function TestimonialCard({
  name,
  role,
  company,
  avatar,
  quote,
}: (typeof firstRow)[number]) {
  return (
    <Card className="w-80 shrink-0 border-muted">
      <CardContent className="p-6 space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed italic">
          &ldquo;{quote}&rdquo;
        </p>
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="text-xs">
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-semibold">{name}</p>
            <p className="text-xs text-muted-foreground">
              {role} — {company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-muted/10">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Témoignages</h2>
          <p className="text-muted-foreground text-lg">
            Ce que mes collaborateurs disent de moi
          </p>
        </div>
      </div>

      <div className="relative space-y-4">
        <Marquee pauseOnHover className="[--duration:30s]">
          {firstRow.map((testimonial) => (
            <TestimonialCard key={testimonial.company} {...testimonial} />
          ))}
        </Marquee>

        <Marquee pauseOnHover reverse className="[--duration:30s]">
          {secondRow.map((testimonial) => (
            <TestimonialCard key={testimonial.company} {...testimonial} />
          ))}
        </Marquee>

        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}
