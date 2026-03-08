import { ContainerFluid, Section } from "@/app/components/ui";
import Image from "next/image";

function WithoutIriscaleCard() {
  return (
    <div className="relative overflow-hidden px-3 py-10 md:px-10 md:py-5 lg:px-12 lg:py-12 flex flex-col leading-none justify-between text-iris-dark bg-white">
      <div className="relative z-10 text-center space-y-6">
        <p className="text-sm text-iris-teal font-semibold uppercase relative inline-block mb-8">
          WITHOUT IRISCALE
        </p>

        <h3 className="text-[40px] md:text-3xl font-flecha-s-regular font-{400} leading-tight">
          Every tool forgets your context.<br />
          You&apos;re the human API.
        </h3>

        <p className="text-sm md:text-base text-center inline-block max-w-md text-iris-body">
          Brief ChatGPT. Again. Copy keywords from Semrush. Again. Explain your positioning. Again. Review for consistency. Again.
        </p>
      </div>

      <div className="relative z-10 mt-10 flex flex-col items-center">
        <div className="relative w-full h-[260px]">
          <Image
            src="/images/home/hero_every_tool.png"
            alt="preview"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

function WithIriscleCard() {
  return (
    <div className="relative overflow-hidden px-3 py-10 md:px-10 md:py-5 lg:px-12 lg:py-12 flex flex-col leading-none justify-between text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/img-3.png"
          alt="background"
          fill
          className=""
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 text-center space-y-6">
        <p className="text-sm font-semibold uppercase relative inline-block mb-8 text-white/70">
          WITH IRISCALE
        </p>

        <h3 className="text-[40px] md:text-3xl font-flecha-s-regular font-{400} leading-tight">
          Build intelligence once.<br />
          Strategic agents execute.
        </h3>

        <p className="text-sm md:text-base text-center inline-block max-w-md text-white/80">
          Content knows your products. Keywords connect automatically. Brand voice stays consistent. Everything compounds.
        </p>
      </div>

      <div className="relative z-10 mt-10 flex flex-col items-center">
        <div className="relative w-full h-[260px]">
          <Image
            src="/images/home/hero_bio.svg"
            alt="preview"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export function WithWithoutIriscle() {
  return (
    <Section className="pt-24">
      <ContainerFluid>
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[56px] md:text-[56px] lg:text-[56px] font-flecha-s-regular font-light leading-none tracking-tight">
            The broken loop you&apos;re stuck in
          </h2>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-15">
          <WithoutIriscaleCard />
          <WithIriscleCard />
        </div>
      </ContainerFluid>
    </Section>
  );
}