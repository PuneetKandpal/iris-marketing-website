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
    <Section className="bg-white border-b border-iris-cream">
      <ContainerFluid className="px-6 sm:px-10">
        <div className="border-x border-iris-cream">
          <div className="px-8 py-20 md:py-24">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <div className="inline-flex flex-col gap-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-iris-teal">
                    Latest News
                  </p>
                  <div className="h-0.5 w-16 bg-iris-orange" />
                </div>
                <h2 className="mt-6 font-serif text-[40px] leading-none tracking-tight text-iris-dark md:text-[56px]">
                  Keep up to date on the latest from Iriscale
                </h2>
                <p className="mt-4 text-base text-iris-teal md:text-lg">
                  Strategy, systems, and what we&apos;re learning building Iriscale.
                </p>
              </div>
              <div className="hidden md:block">
                <Button variant="outline_black" size="md">
                  View all
                </Button>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {updates.map((item) => (
                <div key={item.title} className="group cursor-pointer">
                  <div className="relative mb-6 aspect-16/10 overflow-hidden bg-iris-cream">
                    <Image src={item.image} alt="" fill className="object-cover" />
                  </div>
                  <h3 className="mb-4 font-serif text-2xl font-normal text-iris-dark">
                    {item.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-iris-body">
                    {item.description}
                  </p>
                  <a
                    href="#"
                    className="text-sm font-semibold text-iris-teal underline decoration-iris-teal underline-offset-4"
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
          </div>
        </div>
      </ContainerFluid>
    </Section>
  );
}
