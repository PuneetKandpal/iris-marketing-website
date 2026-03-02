import { ContainerFluid, Section } from "@/app/components/ui";
import Image from "next/image";


const articles = [
  {
    category: 'Foundation',
    title: 'This is a headline about a case study from a company that had great success',
    image: '/images/img-13.png',
  },
  {
    category: 'Strategy',
    title: 'A tip for how to use Iriscale and why somebody should care',
    image: '/images/img-14.png',
  },
  {
    category: 'Execution',
    title: 'How Iriscale turns nothing into something useful',
    image: '/images/img-15.png',
  },
];

export function HowIriscaleworks() {
  return (
    <Section className="pt-24 bg-white">
      <ContainerFluid>
        {/* Main Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto text-center">
            <p className="text-sm  font-medium text-[#0B363C] uppercase mb-4 border-b-2 border-[#EC632F] inline-block">
                How Iriscale works
            </p>
            <h2 className="text-[40px] md:text-5xl lg:text-[56px] font-serif leading-[1.1] text-[#112225]">
                Marketing that thinks like a strategist, executes like a machine
            </h2>
            <p className="text-[#0B363C] text-base text-center px-0 lg:px-55 leading-relaxed">
                Iriscale replaces disconnected marketing tools with one intelligent system. Build your foundation once, then scale content creation without quality loss.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className=" overflow-hidden bg-slate-100 mb-6 relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-3xl md:text-2xl lg:text-[40px] font-normal font-serif text-[#112225] mb-3 ">
                {item.category}
              </p>
              <h3 className=" font-normal text-base text-[#0B363C] ">
                {item.title}
              </h3>
              
            </div>
          ))}
        </div>
      </ContainerFluid>
    </Section>
  );
}