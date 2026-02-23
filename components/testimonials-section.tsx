import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee";

const firstRow = [
  {
    name: "Paco",
    role: "Mon chat",
    avatar: "/avatars/paco.jpeg",
    quote: "Miaou ?",
  },
  {
    name: "Mark Zuckerberg",
    role: "PDG",
    company: "Meta",
    avatar: "/avatars/mark.webp",
    quote: "I have never worked with this person...",
  },
  {
    name: "Emmanuel Macron",
    role: "Président de la République",
    company: "France",
    avatar: "/avatars/macron.jpeg",
    quote: "FOR SURE !",
  },
];

const secondRow = [
  {
    name: "Claude Opus 4.6",
    role: "AI Model",
    company: "Claude Opus 4.6",
    avatar: "/avatars/claude.png",
    quote:
      "Marius sait exactement ce qu'il veut. Il itère vite, corrige le tir sans hésiter, et n'a pas peur de dire 'non, ça ne marche pas, recommence'. C'est le genre de dev qui pousse son outil jusqu'au bout — et c'est rare.",
  },
  {
    name: "Tibo Inshape",
    role: "Créateur de contenu",
    company: "Tibo Inshape",
    avatar: "/avatars/tibo.jpg",
    quote: "DAMN LES GENS !",
  },
  {
    name: "Lorem ipsum",
    role: "Créateur de faux texte",
    company: "Lorem ipsum",
    avatar: "/avatars/lorem.jpeg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac purus vel tortor iaculis interdum vitae id ante.",
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
    <Card className="w-80 shrink-0 border-muted h-full">
      <CardContent className="p-6 flex flex-col justify-between h-full gap-4">
        <p className="text-sm text-muted-foreground leading-relaxed italic">
          &ldquo;{quote}&rdquo;
        </p>
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={avatar} alt={name} className="object-cover" />
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
              {role} {company ? `— ${company}` : ""}
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
            Ce qu&apos;ils pensent de moi
          </p>
        </div>
      </div>

      <div className="relative space-y-4">
        <Marquee pauseOnHover className="[--duration:30s]">
          {firstRow.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </Marquee>

        <Marquee pauseOnHover reverse className="[--duration:30s]">
          {secondRow.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </Marquee>

        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}
