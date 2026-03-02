import Image from "next/image";

import { Button, ContainerFluid, Section } from "@/app/components/ui";

export function AboutCtaSection() {
  return (
    <Section className="bg-white">
      <ContainerFluid className="pt-20 pb-20 md:pt-24 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-iris-orange" />
              <div className="h-10 w-10 rounded-full bg-iris-teal" />
              <div className="h-10 w-10 rounded-full bg-iris-cream border border-iris-border" />
            </div>

            <h2 className="mt-10 font-serif text-[44px] md:text-[64px] leading-tight tracking-tight text-iris-teal">
              Start building your marketing strategy
            </h2>
            <p className="mt-4 text-lg md:text-xl text-iris-teal leading-snug">
              See how Iriscale creates your competitive analysis, persona research,
              and content strategy in the first hour.
            </p>

            <div className="mt-10">
              <Button variant="blackcustom" size="lg" className="w-full sm:w-auto">
                Try Iriscale free for 14 days
              </Button>
            </div>

            <p className="mt-4 text-sm text-iris-teal">
              No credit card • 1-hour setup • Full access • Cancel anytime
            </p>
          </div>

          <div className="relative min-h-[320px] md:min-h-[420px]">
            <div className="absolute right-0 top-0 h-48 w-48 md:h-56 md:w-56 overflow-hidden">
              <Image src="/images/img-10.jpg" alt="" fill className="object-cover" />
            </div>
            <div className="absolute right-16 top-28 h-56 w-56 md:h-72 md:w-72 overflow-hidden">
              <Image src="/images/img-11.jpg" alt="" fill className="object-cover" />
            </div>
          </div>
        </div>
      </ContainerFluid>
    </Section>
  );
}
