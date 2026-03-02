import { ContainerFluid, Section, Button } from "@/app/components/ui";

export function PlatformHero() {
  return (
    <Section variant="lightCream" className="py-20 border-b border-iris-cream">
      <ContainerFluid >
        <div className="max-w-2xl">
          <h1 className="text-iris-dark font-serif text-[44px] md:text-6xl lg:text-7xl leading-[1.1] mb-5">
            Strategic marketing platform that builds and executes
          </h1>

          <p className="text-iris-dark text-xl md:text-xl lg:text-xl font-sans max-w-xl leading-relaxed mb-10">
            Analyze competitors, map customer journeys, create content strategies, 
            and generate optimized content for every platform. Complete marketing 
            operations in one system.
          </p>

          <div className="mt-10 flex flex-row items-start justify-start gap-4">
            <Button variant="accent" size="lg" className="w-full sm:w-auto">
              Try for Free
            </Button>
            <Button
              variant="outline_black"
              size="lg"
              className="w-full sm:w-auto group"
            >
              Book Demo
            </Button>
          </div>
        </div>
      </ContainerFluid>
    </Section>
    
  );
}
