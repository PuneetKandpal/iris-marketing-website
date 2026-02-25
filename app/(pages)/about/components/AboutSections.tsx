import { Container, Section } from "@/app/components/ui";

const team = [
  { name: "Sarah Chen", role: "CEO & Co-founder", initials: "SC" },
  { name: "Michael Rodriguez", role: "CTO & Co-founder", initials: "MR" },
  { name: "Emily Taylor", role: "VP of Product", initials: "ET" },
  { name: "David Kim", role: "Head of Engineering", initials: "DK" },
];

export function AboutHero() {
  return (
    <Section variant="surface" className="py-24 border-b border-border">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight mb-6">
            We&apos;re building the operating system for modern business
          </h1>
          <p className="text-xl text-muted mb-10 leading-relaxed">
            Founded in 2023, Iriscale was born from a simple observation:
            growing companies spend too much time managing their tools and
            not enough time building their product.
          </p>
        </div>
      </Container>
    </Section>
  );
}

export function TeamSection() {
  return (
    <Section className="py-24">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-light mb-4">Meet the Team</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            We&apos;re a team of engineers, designers, and operators who have scaled some of the world&apos;s fastest-growing companies.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full bg-surface-dark text-background flex items-center justify-center mb-4 shadow-xl text-3xl font-semibold">
                {member.initials}
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-accent font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
