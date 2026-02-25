import { Container, Section } from "@/app/components/ui";

export function PlatformHero() {
  return (
    <Section variant="surface" className="py-20 border-b border-border">
      <Container className="text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight mb-6">
          The all-in-one platform for modern teams
        </h1>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          Discover how Iriscale connects your data, automates your workflows, and gives you the insights you need to grow.
        </p>
      </Container>
    </Section>
  );
}
