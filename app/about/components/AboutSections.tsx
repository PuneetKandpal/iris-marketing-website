import Image from "next/image";

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-founder",
    imageUrl: "https://placehold.co/400x400/png?text=Sarah",
  },
  {
    name: "Michael Rodriguez",
    role: "CTO & Co-founder",
    imageUrl: "https://placehold.co/400x400/png?text=Michael",
  },
  {
    name: "Emily Taylor",
    role: "VP of Product",
    imageUrl: "https://placehold.co/400x400/png?text=Emily",
  },
  {
    name: "David Kim",
    role: "Head of Engineering",
    imageUrl: "https://placehold.co/400x400/png?text=David",
  },
];

export function AboutHero() {
  return (
    <section className="bg-muted/30 py-24 border-b">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-medium tracking-tight mb-6">
            We&apos;re building the operating system for modern business
          </h1>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Founded in 2023, Iriscale was born from a simple observation: 
            growing companies spend too much time managing their tools and 
            not enough time building their product.
          </p>
        </div>
      </div>
    </section>
  );
}

export function TeamSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-medium mb-4">Meet the Team</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We&apos;re a team of engineers, designers, and operators who have scaled some of the world&apos;s fastest-growing companies.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-background shadow-xl">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-brand font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
