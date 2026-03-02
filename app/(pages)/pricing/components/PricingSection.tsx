import { Button, ContainerFluid, Section } from "@/app/components/ui";
import { Check } from "lucide-react";

const includedItems = {
  research: ["30 credits", "Knowledge base", "Competitor Analysis"],
  content: [
    "AI Rank Tracking",
    "Content Architect",
    "Social Posts & Scheduling",
    "SEO & AI Optimization",
  ],
} as const;

export function PricingSection() {
  return (
    <>
      <Section variant="lightCream" className="border-b border-iris-cream">
        <ContainerFluid className="px-6 sm:px-10 pt-[76px] pb-12">
          <div className="max-w-[649px]">
            <h1 className="font-serif font-normal text-iris-dark text-[56px] sm:text-[64px] lg:text-[72px] leading-none tracking-[-2.16px] mb-[23px]">
              Pricing built for growing companies
            </h1>
            <p className="font-normal text-iris-dark text-xl leading-[1.3] tracking-[-0.6px] max-w-[496px] mb-[52px]">
              Get CMO-level strategy and execution for less than your software
              subscriptions. All plans include 14-day free trial.
            </p>
            <div className="flex gap-2">
              <Button variant="accent" size="lg" className="rounded-[4px]">
                Try for Free
              </Button>
              <Button variant="outline_black" size="lg" className="rounded-[4px]">
                Book Demo
              </Button>
            </div>
          </div>
        </ContainerFluid>
      </Section>

      <Section id="plans" className="bg-white">
        <ContainerFluid className="px-6 sm:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-iris-cream">
            <div className="border-l border-r border-t border-iris-cream p-12 flex flex-col gap-10">
              <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-6">
                  <h3 className="font-serif font-normal text-iris-dark text-2xl tracking-[-0.72px] leading-[1.1]">
                    Startup
                  </h3>
                  <div className="flex items-baseline">
                    <span className="font-serif font-normal text-iris-dark text-[48px] tracking-[-1.44px] leading-[1.1]">
                      $199
                    </span>
                    <span className="font-serif font-normal text-iris-muted text-2xl tracking-[-0.72px] leading-[1.1] ml-1">
                      /mo
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <p className="text-iris-dark text-[16px] leading-[1.6] tracking-[-0.32px]">
                    For teams just booting up.
                  </p>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full rounded-[4px] bg-iris-cream text-iris-teal hover:bg-iris-border"
                  >
                    Get Started
                  </Button>
                </div>
              </div>

              <div className="h-px w-full bg-black/10" />

              <div className="flex flex-col gap-10">
                <h4 className="font-serif font-normal text-iris-dark text-[26px] tracking-[-0.78px] leading-none">
                  30 credits
                </h4>

                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-3">
                    <p className="text-iris-dark text-sm font-medium tracking-[-0.14px] leading-[1.6]">
                      Research & Strategy
                    </p>
                    <ul className="flex flex-col gap-2">
                      {includedItems.research.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-1.5 text-iris-body text-sm tracking-[-0.28px] leading-[1.6]"
                        >
                          <Check className="w-4 h-4 mt-[3px] shrink-0 text-iris-teal" strokeWidth={2.5} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-3">
                    <p className="text-iris-dark text-sm font-medium tracking-[-0.14px] leading-[1.6]">
                      Content & Distribution
                    </p>
                    <ul className="flex flex-col gap-2">
                      {includedItems.content.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-1.5 text-iris-body text-sm tracking-[-0.28px] leading-[1.6]"
                        >
                          <Check className="w-4 h-4 mt-[3px] shrink-0 text-iris-teal" strokeWidth={2.5} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-iris-cream p-12 flex flex-col gap-10">
              <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-6">
                  <h3 className="font-serif font-normal text-iris-dark text-2xl tracking-[-0.72px] leading-[1.1]">
                    Small Business
                  </h3>
                  <div className="flex items-baseline">
                    <span className="font-serif font-normal text-iris-dark text-[48px] tracking-[-1.44px] leading-[1.1]">
                      $399
                    </span>
                    <span className="font-serif font-normal text-iris-muted text-2xl tracking-[-0.72px] leading-[1.1] ml-1">
                      /mo
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <p className="text-iris-dark text-[16px] leading-[1.6] tracking-[-0.32px]">
                    For content & social teams.
                  </p>
                  <Button
                    variant="blackcustom"
                    size="lg"
                    className="w-full rounded-[4px]"
                  >
                    Get Started
                  </Button>
                </div>
              </div>

              <div className="h-[2px] w-full bg-iris-orange" />

              <div className="flex flex-col gap-10">
                <h4 className="font-serif font-normal text-iris-dark text-[26px] tracking-[-0.78px] leading-none">
                  100 credits
                </h4>

                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-3">
                    <p className="text-iris-dark text-sm font-medium tracking-[-0.14px] leading-[1.6]">
                      Research & Strategy
                    </p>
                    <ul className="flex flex-col gap-2">
                      {[...includedItems.research, "Another feature"].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-1.5 text-iris-body text-sm tracking-[-0.28px] leading-[1.6]"
                        >
                          <Check className="w-4 h-4 mt-[3px] shrink-0 text-iris-teal" strokeWidth={2.5} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-3">
                    <p className="text-iris-dark text-sm font-medium tracking-[-0.14px] leading-[1.6]">
                      Content & Distribution
                    </p>
                    <ul className="flex flex-col gap-2">
                      {includedItems.content.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-1.5 text-iris-body text-sm tracking-[-0.28px] leading-[1.6]"
                        >
                          <Check className="w-4 h-4 mt-[3px] shrink-0 text-iris-teal" strokeWidth={2.5} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l border-r border-t border-iris-cream p-12 flex flex-col gap-10">
              <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-6">
                  <h3 className="font-serif font-normal text-iris-dark text-2xl tracking-[-0.72px] leading-[1.1]">
                    Enterprise
                  </h3>
                  <div className="flex items-baseline">
                    <span className="font-serif font-normal text-iris-dark text-[48px] tracking-[-1.44px] leading-[1.1]">
                      Custom
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <p className="text-iris-dark text-[16px] leading-[1.6] tracking-[-0.32px]">
                    For multi-brand organizations.
                  </p>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full rounded-[4px] bg-iris-cream text-iris-teal hover:bg-iris-border"
                  >
                    Get Started
                  </Button>
                </div>
              </div>

              <div className="h-px w-full bg-black/10" />

              <div className="flex flex-col gap-10">
                <h4 className="font-serif font-normal text-iris-dark text-[26px] tracking-[-0.78px] leading-none">
                  Unlimited credits
                </h4>

                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-3">
                    <p className="text-iris-dark text-sm font-medium tracking-[-0.14px] leading-[1.6]">
                      Enterprise features
                    </p>
                    <ul className="flex flex-col gap-2">
                      {[
                        "Everything in Small Business",
                        "Knowledge base",
                        "Competitor Analysis",
                        "Dedicated CSM",
                        "Custom integrations",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-1.5 text-iris-body text-sm tracking-[-0.28px] leading-[1.6]"
                        >
                          <Check className="w-4 h-4 mt-[3px] shrink-0 text-iris-teal" strokeWidth={2.5} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-3">
                    <p className="text-iris-dark text-sm font-medium tracking-[-0.14px] leading-[1.6]">
                      Content & Distribution
                    </p>
                    <ul className="flex flex-col gap-2">
                      {includedItems.content.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-1.5 text-iris-body text-sm tracking-[-0.28px] leading-[1.6]"
                        >
                          <Check className="w-4 h-4 mt-[3px] shrink-0 text-iris-teal" strokeWidth={2.5} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContainerFluid>
      </Section>

      <Section className="bg-white border-b border-iris-cream">
        <ContainerFluid className="px-6 sm:px-10">
          <div className="border-l border-r border-iris-cream py-4 text-center">
            <p className="text-iris-teal text-[16px] tracking-[-0.32px] leading-[1.5]">
              All plans include 14-day free trial • No credit card required •
              Cancel anytime
            </p>
          </div>
        </ContainerFluid>
      </Section>
    </>
  );
}
