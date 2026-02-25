import { CheckCircle2 } from "lucide-react";
import { Button, Container, Section } from "@/app/components/ui";

const tiers = [
  {
    name: "Starter",
    price: "$49",
    description: "Perfect for small teams getting started.",
    features: [
      "Up to 5 users",
      "Basic analytics",
      "24/7 email support",
      "10GB storage",
    ],
    highlighted: false,
    cta: "Start Free Trial",
  },
  {
    name: "Professional",
    price: "$99",
    description: "Everything you need for a growing business.",
    features: [
      "Up to 20 users",
      "Advanced analytics",
      "Priority support",
      "100GB storage",
      "Custom integrations",
    ],
    highlighted: true,
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Advanced features for large organizations.",
    features: [
      "Unlimited users",
      "Custom reporting",
      "Dedicated account manager",
      "Unlimited storage",
      "SSO & advanced security",
    ],
    highlighted: false,
    cta: "Contact Sales",
  },
];

export function PricingCards() {
  return (
    <Section className="py-24">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight mb-6">
            Simple, transparent pricing
          </h1>
          <p className="text-lg text-muted">
            No hidden fees. No surprise charges. Choose the plan that best fits your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 flex flex-col ${
                tier.highlighted
                  ? "border-accent border-2 shadow-lg relative"
                  : "border border-border bg-background"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-semibold mb-2">{tier.name}</h3>
              <p className="text-muted mb-6">{tier.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{tier.price}</span>
                {tier.price !== "Custom" && <span className="text-muted">/month</span>}
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={tier.highlighted ? "accent" : "outline"}
                className="w-full"
                size="lg"
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
