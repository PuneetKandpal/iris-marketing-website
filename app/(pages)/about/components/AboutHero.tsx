import Image from "next/image";

import { Button, ContainerFluid, Section } from "@/app/components/ui";

export function AboutHero() {
  return (
    <Section variant="lightCream" className="border-b border-iris-cream">
      <ContainerFluid className="pt-14 pb-14 md:pt-20 md:pb-24">
        <div className="max-w-2xl">
          <h1 className="font-serif text-[44px] leading-none text-iris-dark md:text-7xl">
            Marketing expertise built into software
          </h1>
          <p className="mt-6 text-lg md:text-xl leading-snug font-camera-plain-regular text-iris-dark max-w-xl">
            20 years of proven strategy, systematized for growing companies.
          </p>

          <div className="mt-10 flex flex-row items-start justify-start gap-4">
            <div className="w-full sm:w-auto">
              <div className="md:hidden">
                <Button variant="blackcustom" size="lg" className="w-full sm:w-auto">
                  Try for Free
                </Button>
              </div>
              <div className="hidden md:block">
                <Button variant="accent" className="w-full sm:w-auto">
                  Try for Free
                </Button>
              </div>
            </div>
            <Button
              variant="outline_black"
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
