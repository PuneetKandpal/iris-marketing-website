import { ContainerFluid, Section } from "@/app/components/ui";
import Image from "next/image";

function StepFoundation() {
  return (
    <div className="flex flex-col items-center gap-12 lg:gap-15 md:flex-row">
      <div className="w-full md:w-1/2 relative aspect-4/3 overflow-hidden">
        <Image
          src="/images/img-6.png"
          alt="Foundation texture"
          fill
          className="object-cover opacity-90 transition-transform"
        />

        <div className="relative z-10 flex h-full w-full items-center justify-center p-8">
          <div className="w-full max-w-[320px] md:max-w-[420px] lg:max-w-[520px]">
            <Image
              src="/images/home/home_foundation.svg"
              width={520}
              height={240}
              alt="Foundation illustration"
            />
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 space-y-6">
        <div className="inline-block border-b-2 border-iris-orange pb-1">
          <p className="text-sm font-bold text-iris-teal uppercase">Step 1: FOUNDATION</p>
        </div>
        <h3 className="text-3xl md:text-3xl lg:text-4xl font-serif text-iris-dark font-normal leading-tight max-w-md">
          Expert strategy without the expert
        </h3>
        <p className="text-iris-teal text-base lg:text-lg leading-relaxed max-w-lg">
          Connect your site and answer questions. Iriscale maps your products to customer pain points, extracts personas, and builds the marketing intelligence expert teams spend months creating.
        </p>
      </div>
    </div>
  );
}

function StepStrategy() {
  return (
    <div className="flex flex-col items-center gap-12 lg:gap-15 md:flex-row-reverse">
      <div className="w-full md:w-1/2 relative aspect-4/3 overflow-hidden">

        <Image
          src="/images/img-7.png"
          alt="Strategy texture"
          fill
          className="object-cover opacity-90 transition-transform"
        />

        <div className="relative z-10 h-full w-full">
          <Image
            src="/images/home/home_strategy.svg"
            fill
            alt="Strategy illustration"
            className="object-cover"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 space-y-6">
        <div className="inline-block border-b-2 border-iris-orange pb-1">
          <p className="text-sm font-bold text-iris-teal uppercase">STEP 2: STRATEGY</p>
        </div>
        <h3 className="text-3xl md:text-3xl lg:text-4xl font-serif text-iris-dark font-normal leading-tight max-w-md">
          Content mapped to what customers actually need
        </h3>
        <p className="text-iris-teal text-base lg:text-lg leading-relaxed max-w-lg">
          Agents analyze each persona&apos;s buying journey and create strategies addressing their specific pain points at every stage. You know exactly what to create and why it matters.
        </p>
      </div>
    </div>
  );
}

function StepExecution() {
  return (
    <div className="flex flex-col items-center gap-12 lg:gap-15 md:flex-row">
      <div className="w-full md:w-1/2 relative aspect-4/3 overflow-hidden">
        <Image
          src="/images/img-8.png"
          alt="Execution texture"
          fill
          className="object-cover opacity-90 transition-transform"
        />

        <div className="relative z-10 flex h-full w-full items-center justify-center p-8">
          <div className="w-full max-w-[320px] md:max-w-[420px] lg:max-w-[520px]">
            <Image
              src="/images/home/home_execution.svg"
              width={520}
              height={240}
              alt="Execution illustration"
            />
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 space-y-6">
        <div className="inline-block border-b-2 border-iris-orange pb-1">
          <p className="text-sm font-bold text-iris-teal uppercase">Step 3: EXECUTION</p>
        </div>
        <h3 className="text-3xl md:text-3xl lg:text-4xl font-serif text-iris-dark font-normal leading-tight max-w-md">
          Post-ready content optimized for conversion
        </h3>
        <p className="text-iris-teal text-base lg:text-lg leading-relaxed max-w-lg">
          Generate SEO-optimized, AI-search-ready, CRO-focused content that addresses persona pain points and maintains your brand voice. Just review and publish.
        </p>
      </div>
    </div>
  );
}

export function HowIriscaleworks() {
  return (
    <Section className="pt-24 bg-white">
      <ContainerFluid>
        {/* Main Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <p className="text-sm leading-[25px] font-semibold text-iris-teal uppercase mb-4 border-b-2 border-iris-orange inline-block">
            How Iriscale works
          </p>
          <h2 className="text-[40px] md:text-5xl lg:text-[56px] font-serif leading-tight text-iris-dark">
            Marketing that thinks like a strategist, executes like a machine
          </h2>
        </div>

        <div className="space-y-15">
          <StepFoundation />
          <StepStrategy />
          <StepExecution />
        </div>
      </ContainerFluid>
    </Section>
  );
}