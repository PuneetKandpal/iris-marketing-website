import { Container, Section } from "@/app/components/ui";
import Image from "next/image";

const steps = [
  {
    step: "Step 1: FOUNDATION",
    title: "Expert strategy without the expert",
    description:
      "Connect your site and answer questions. Iriscale maps your products to customer pain points, extracts personas, and builds the marketing intelligence expert teams spend months creating.",
    image: "/images/img-6.png",
    statusLabel: "Build intelligence",
    progress: "75/100",
  },
  {
    step: "STEP 2: STRATEGY",
    title: "Content mapped to what customers actually need",
    description:
      "Agents analyze each persona's buying journey and create strategies addressing their specific pain points at every stage. You know exactly what to create and why it matters.",
    image: "/images/img-7.png",
    statusLabel: "Agents Build Strategy",
    progress: "75/100",
  },
  {
    step: "Step 3: EXECUTION",
    title: "Post-ready content optimized for conversion",
    description:
      "Generate SEO-optimized, AI-search-ready, CRO-focused content that addresses persona pain points and maintains your brand voice. Just review and publish.",
    image: "/images/img-8.png",
    statusLabel: "Company overview",
    progress: "75/100",
  },
];

export function HowIriscaleworks() {
  return (
    <Section className="pt-24 bg-white">
      <Container>
        {/* Main Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <p className="text-[14px] leading-[25px] font-semibold text-[#0b363c] uppercase mb-4 border-b-2 border-[#EC632F] inline-block">
            How Iriscale works
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-serif leading-tight text-[#112225]">
            Marketing that thinks like a strategist, executes like a machine
          </h2>
        </div>

        {/* Steps Wrapper */}
        <div className="space-y-15">
          {steps.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-12 lg:gap-15 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image Side with "Grainy" Background effect */}
              <div className="w-full md:w-1/2 relative aspect-[4/3] flex items-center justify-center p-8 bg-slate-100 overflow-hidden group">
                {/* Background Image (The grainy texture) */}
                <Image
                  src={item.image}
                  alt="Background texture"
                  fill
                  className="opacity-90 transition-transform"
                />
                
                {/* Floating UI Card Mockup */}
                <div className="relative z-10 bg-[#F0EFE9] backdrop-blur-sm p-20 shadow-xl w-full max-w-sm">
                  <div className="flex justify-between bg-white p-3 items-center mb-6 rounded-md">
                     <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs font-medium text-gray-800 ">{item.statusLabel}</span>
                     </div>
                     <span className="text-lg text-[#112225] font-flecha-s-regular">{item.progress}</span>
                  </div>
                  <div className="space-y-2 bg-white p-3 rounded-md">
                    <p className="text-xs text-[#112225] leading-relaxed">
                        This is some placeholder text about the platform and what it does.
                    </p>
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2 space-y-6">
                <div className="inline-block border-b-2 border-[#EC632F] pb-1">
                    <p className="text-sm font-bold text-[#0B363C] uppercase">
                        {item.step}
                    </p>
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-4xl font-serif text-[#112225]  font-normal leading-tight max-w-md">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}