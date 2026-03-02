import Image from "next/image";

import { ContainerFluid, Section } from "@/app/components/ui";

const differences = [
  {
    title: "Strategy before execution",
    description: "Know what to create and why before generating content.",
    highlighted: true,
  },
  {
    title: "Quality at scale",
    description: "AI speed with expert-level thinking built in.",
  },
  {
    title: "Intelligence that compounds",
    description: "Marketing gets easier over time, not harder.",
  },
  {
    title: "Accessible expertise",
    description: "Strategic capabilities without the strategic salary.",
  },
];

export function DifferencesSection() {
  return (
    <Section className="bg-white">
      <ContainerFluid className="pt-20 pb-20 md:pt-24 md:pb-24">
        <h2 className="font-serif text-[40px] md:text-[56px] leading-none tracking-tight text-iris-dark">
          How we&apos;re different
        </h2>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
          <div className="flex flex-col">
            {differences.map((item) => (
              <div
                key={item.title}
                className={
                  "border-l-4 pl-6 py-4 " +
                  (item.highlighted ? "border-iris-orange" : "border-iris-cream")
                }
              >
                <p className="font-serif text-2xl md:text-[30px] leading-tight tracking-tight text-iris-dark">
                  {item.title}
                </p>
                <p className="mt-2 text-base text-iris-teal leading-relaxed max-w-md">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-md min-h-[320px] bg-iris-dark">
            <Image
              src="/images/img-18.png"
              alt=""
              fill
              className="object-cover opacity-80"
            />
          </div>
        </div>
      </ContainerFluid>
    </Section>
  );
}
