import { Button, ContainerFluid, Section } from "@/app/components/ui";



export function Comparison() {
  return (
    <Section className="max-w-7xl mx-auto px-4 py-20 font-sans text-iris-dark">
        <ContainerFluid>
            <div className="text-center mb-16 max-w-4xl mx-auto">
                <p className="text-sm leading-[25px] font-medium text-iris-teal uppercase mb-4 border-b-2 border-iris-orange inline-block">
                    COMPARISON
                </p>
                <h2 className="text-[40px] md:text-5xl lg:text-[56px] font-serif leading-[1.1] text-iris-dark mb-8">
                    Versus your current <br className="hidden sm:block" /> approach
                </h2> 
                <Button variant="blackcustom" size="lg" className="w-auto sm:w-auto">
                    Start for Free
                </Button>
                <p className="mt-12 text-2xl text-iris-dark font-serif">Manual Strategy and Execution</p>
            </div>
           

            <div className="grid grid-cols-1 lg:grid-cols-2 border border-iris-border shadow-sm rounded-sm overflow-hidden">
                <div className="py-10 px-5 md:px-12 md:py-12 bg-white">
                    <h3 className="text-[26px] lg:text-[26px] font-serif mb-10">Current approach:</h3>
                    <ul className="space-y-4 text-sm md:text-base">
                        <li className="block gap-1 lg:flex lg:gap-2">
                        <span>Competitive research:</span>
                        <span className="font-medium"> 20+ hours manually</span>
                        </li>
                        <li className="block gap-1 lg:flex lg:gap-2">
                        <span>Persona development:</span>
                        <span className="font-medium"> 40+ hours with interviews</span>
                        </li>
                        <li className="block gap-1 lg:flex lg:gap-2">
                        <span>Content strategy:</span>
                        <span className="font-medium"> 60+ hours planning</span>
                        </li>
                        <li className="block gap-1 lg:flex lg:gap-2">
                        <span>Content creation:</span>
                        <span className="font-medium"> 4-6 hours per piece</span>
                        </li>
                        <li className="block gap-1 lg:flex lg:gap-2">
                        <span>Consistency checks:</span>
                        <span className="font-medium"> Ongoing manual review</span>
                        </li>
                    </ul>
                    <div className="mt-12 pt-4">
                        <p className="text-base font-medium">Time for 40 pieces: 200+ hours</p>
                    </div>
                </div>

                <div className="p-8 md:p-12 bg-iris-cream">
                    <h3 className="text-[26px] lg:text-[26px] font-serif mb-10">With Iriscale:</h3>
                    <ul className="space-y-4 text-sm md:text-base">
                        <li className="block gap-1 lg:flex lg:gap-2">
                        <span>Competitive research:</span>
                        <span className="font-medium"> 15 minutes automated</span>
                        </li>
                        <li className="block gap-1 lg:flex lg:gap-2">
                        <span>Persona development:</span>
                        <span className="font-medium"> Included in 1-hour setup</span>
                        </li>
                        <li className="block gap-1 lg:flex lg:gap-2">
                        <span>Content strategy:</span>
                        <span className="font-medium"> 15 minutes automated</span>
                        </li>
                        <li className="block gap-1 lg:flex lg:gap-2">
                        <span>Content creation:</span>
                        <span className="font-medium"> 5 minutes per piece</span>
                        </li>
                        <li className="block gap-1 lg:flex lg:gap-2">
                        <span>Consistency checks:</span>
                        <span className="font-medium"> Automatic</span>
                        </li>
                    </ul>
                    <div className="mt-12 pt-4">
                        <p className="text-base font-medium">Time for 40 pieces: 5 hours</p>
                    </div>
                </div>

            </div>
        </ContainerFluid>
    </Section>
  );
};

