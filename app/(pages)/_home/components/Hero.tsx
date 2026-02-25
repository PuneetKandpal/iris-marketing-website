import { Button, Container, Section } from "@/app/components/ui";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <Section className="pt-24 pb-32">
      <Container className="text-center">
        <h1 className="mx-auto max-w-4xl font-flecha-s-regular text-5xl font-normal tracking-tight sm:text-7xl">
          Scale your operations with intelligent automation
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">
          Iriscale provides the infrastructure you need to streamline workflows,
          connect your tools, and grow your business faster than ever before.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="accent" size="lg" className="w-full sm:w-auto">
            Start your free trial
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto group">
            See how it works
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
