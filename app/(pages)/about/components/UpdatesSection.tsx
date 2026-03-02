import Image from "next/image";

import { Button, ContainerFluid, Section } from "@/app/components/ui";

const updates = [
  {
    title: "A strategic approach",
    description:
      "A system for building marketing foundations and executing with precision.",
    image: "/images/img-16.png",
  },
  {
    title: "How AI changes marketing",
    description: "What actually matters now that content creation is cheap.",
    image: "/images/img-15.png",
  },
  {
    title: "The work behind results",
    description: "How teams operationalize strategy into consistent execution.",
    image: "/images/img-14.png",
  },
];

export function UpdatesSection() {
  return (
    <Section className="bg-white">
      <ContainerFluid className="pt-20 pb-20 md:pt-24 md:pb-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-serif text-[40px] md:text-[56px] leading-none tracking-tight text-iris-dark">
              Keep up to date on the latest from Iriscale
            </h2>
            <p className="mt-4 text-base md:text-lg text-iris-teal max-w-2xl">
              Strategy, systems, and what we&apos;re learning building Iriscale.
            </p>
          </div>
          <div className="hidden md:block">
            <Button variant="outline_black" size="md">
              View all
            </Button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {updates.map((item) => (
            <div key={item.title} className="group cursor-pointer">
              <div className="relative aspect-16/10 overflow-hidden bg-iris-cream mb-6">
                <Image src={item.image} alt="" fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-normal font-serif text-iris-dark mb-4">
                {item.title}
              </h3>
              <p className="text-sm text-iris-body leading-relaxed mb-4">
                {item.description}
              </p>
              <a
                href="#"
                className="text-sm font-bold text-iris-teal underline underline-offset-4 decoration-iris-teal"
              >
                Read more
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 md:hidden">
          <Button variant="outline_black" size="md" className="w-full">
            View all
          </Button>
        </div>
      </ContainerFluid>
    </Section>
  );
}
