import { Button, ContainerFluid, Section } from "@/app/components/ui";
import Image from "next/image";

export function WesolveStrategy() {
  return (
    <Section className="pt-24 pb-24">
      <ContainerFluid className="text-center">
        <div className="text-left">
           <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
              <h2 className="text-[40px] md:text-[40px] lg:text-5xl font-serif text-[#112225] leading-none tracking-tight max-w-md">
                We solve Strategy, Not Writing
              </h2>
              <p className="text-[#0B363C] text-base max-w-md leading-relaxed">
                This is a description about Iriscale. It should be a few lines long so it will wrap nicely and help fill this space while telling a compelling story about how it is the greatest software ever created.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#0B363C] p-12 min-h-[320px] md:min-h-[250px] lg:min-h-[320px] flex flex-col justify-between text-white">
                 <span className="text-[56px] font-serif tracking-tighter">20 yrs</span>
                 <p className="text-sm text-white">trained on 20 years of data</p>
              </div>
              <div className="bg-[#0E1A1C] p-12 min-h-[320px] md:min-h-[250px] lg:min-h-[320px] flex flex-col justify-between text-white">
                 <span className="text-[56px] font-serif tracking-tighter">300%</span>
                 <p className="text-sm text-white">Organic traffic up</p>
              </div>
              <div className="bg-[#EE6D3B] p-12 min-h-[320px] md:min-h-[250px] lg:min-h-[320px] flex flex-col justify-between text-white">
                 <span className="text-[56px] font-serif tracking-tighter">1290</span>
                 <p className="text-sm text-white">of another stat</p>
              </div>
           </div>
        </div>
      </ContainerFluid>
    </Section>
  );
}