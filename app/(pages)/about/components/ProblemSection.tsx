import { ContainerFluid, Section } from "@/app/components/ui";

export function ProblemSection() {
  return (
    <Section className="bg-white">
      <ContainerFluid className="px-6 sm:px-10">
        <div className="border-x border-iris-cream">
          <div className="px-8 pt-20 pb-14 md:pt-24 md:pb-16">
            <div className="max-w-3xl">
              <div className="inline-flex flex-col items-start gap-2">
                <p className="text-sm font-semibold uppercase tracking-wide text-iris-teal">
                  FOUNDATION
                </p>
                <div className="h-0.5 w-full bg-iris-orange" />
              </div>

              <h2 className="mt-8 font-serif text-[40px] md:text-[56px] leading-none font-flecha-s-regular text-iris-dark">
                The problem we solve
              </h2>

              <div className="mt-2 max-w-xl text-base tracking-normal text-iris-teal font-camera-plain-regular">
                <p>Marketing tools handle tactics. None handle strategy.</p>
                <p className="mt-8">
                  Teams spend weeks on competitive analysis, persona research, and content
                  planning before executing anything. Small companies cannot afford strategic
                  expertise. Large teams drown in disconnected tools.
                </p>
                <p className="mt-6">
                  AI made content creation fast but strategy harder. Now teams produce
                  mediocre content at scale.
                </p>
                <p className="mt-6">
                  Iriscale solves strategy first. Expert-level thinking, accessible to any
                  company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContainerFluid>
    </Section>
  );
}
