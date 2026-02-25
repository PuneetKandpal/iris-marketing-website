import { CheckCircle2 } from "lucide-react";
import { Container, Section } from "@/app/components/ui";

const features = [
  {
    title: "Real-time Analytics",
    description: "Get instant insights into your business metrics with our powerful dashboard.",
  },
  {
    title: "Seamless Integration",
    description: "Connect with your favorite tools in just a few clicks.",
  },
  {
    title: "Advanced Security",
    description: "Enterprise-grade encryption keeps your data safe and compliant.",
  },
];

export function FeatureHighlight() {
  return (
    <Section className="py-24">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-3xl font-serif font-light tracking-tight sm:text-4xl mb-4">
                Everything you need to scale
              </h2>
              <p className="text-lg text-muted">
                Stop juggling multiple tools. Iriscale brings your entire operation
                into one unified, intelligent platform.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1 bg-accent/10 p-2 rounded-full h-fit">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-muted">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="relative aspect-square md:aspect-4/3 rounded-2xl overflow-hidden border border-border bg-surface shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center text-muted">
                <span className="text-sm">Platform UI Image Space</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
