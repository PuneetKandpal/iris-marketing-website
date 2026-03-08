import { ContainerFluid, Section } from "@/app/components/ui";
import Image from "next/image";


const articles = [
  {
    category: 'Foundation',
    title: 'This is a headline about a case study from a company that had great success',
    image: '/images/platform/platform_foundation.svg',
    background_image: "/images/platform/background_foundation.png"
  },
  {
    category: 'Strategy',
    title: 'A tip for how to use Iriscale and why somebody should care',
    image: '/images/platform/platform_strategy.svg',
    background_image: "/images/platform/background_strategy.png"
    
  },
  {
    category: 'Execution',
    title: 'How Iriscale turns nothing into something useful',
    image: '/images/platform/platform_execution.svg',
    background_image: "/images/platform/background_execution.png"
  },
];

export function HowIriscaleworks() {
  return (
    <Section className="pt-24 pb-24 bg-white">
      <ContainerFluid>
        {/* Main Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto text-center">
            <p className="text-sm  font-medium text-iris-teal uppercase mb-4 border-b-2 border-iris-orange inline-block">
                How Iriscale works
            </p>
            <h2 className="text-[40px] md:text-5xl lg:text-[56px] font-serif leading-[1.1] text-iris-dark">
                Strategy, execution and growth in <br/>three connected steps
            </h2>
            <p className="text-iris-teal text-base text-center px-0 lg:px-55 leading-relaxed">
                Iriscale replaces disconnected marketing tools with one intelligent system. Build your foundation once, then scale content creation without quality loss.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="overflow-hidden bg-slate-100 mb-6 relative aspect-4/3">
                <Image
                  src={item.background_image}
                  alt=""
                  fill
                  className="object-cover"
                />

                <div className="relative z-10 flex h-full w-full items-center justify-center p-8">
                  <div className="w-full max-w-[360px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>

              <p className="text-3xl md:text-2xl lg:text-[40px] font-normal font-serif text-iris-dark mb-3 ">
                {item.category}
              </p>
              <h3 className=" font-normal text-base text-iris-teal ">
                {item.title}
              </h3>
              
            </div>
          ))}
        </div>
      </ContainerFluid>
    </Section>
  );
}