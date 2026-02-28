import { ContainerFluid, Section } from "@/app/components/ui";
import Image from "next/image";

const features = [
  {
    title: "Knowledge Base",
    description: "AI extracts company data from websites/docs to power all content generation",
    icon: "/images/chats.png",
  },
  {
    title: "Keyword Repository",
    description: "AI-powered keyword research with volume, competition, and product linking",
    icon: "/images/chats.png",
  },
  {
    title: "Search Ranking Intelligence",
    description: "Track company visibility across ChatGPT, Claude, Gemini, Perplexity, and Grok",
    icon: "/images/chats.png",
  },
  {
    title: "Competitor Analysis",
    description: "Auto-generate competitive intel reports with sales battlecards",
    icon: "/images/chats.png",
  },
  {
    title: "Content Architecture",
    description: "AI builds complete website page hierarchy with SEO and publishing workflows",
    icon: "/images/chats.png",
  },
  {
    title: "Topic Strategy",
    description: "Transform one idea into full-funnel content topics (TOFU/MOFU/BOFU)",
    icon: "/images/chats.png",
  },
  {
    title: "AI Optimization",
    description: "Discover questions customers ask AI systems, auto-generate and place answers on your site",
    icon: "/images/chats.png",
  },
  {
    title: "Articles",
    description: "AI-generated articles with approval workflows and bulk management",
    icon: "/images/chats.png",
  },
  {
    title: "Opportunity Agent",
    description: "AI monitors Reddit/social to find sales opportunities with response drafts",
    icon: "/images/chats.png",
  },
  {
    title: "Social Management",
    description: "Generate, schedule, and publish platform-optimized content across 7 connected platforms",
    icon: "/images/chats.png",
  },
  {
    title: "Organization Management",
    description: "Multi-tenant support with role-based permissions for teams",
    icon: "/images/chats.png",
  },
  {
    title: "Brand Guidelines",
    description: "Auto-generated writing style guide with extracted visual identity for consistent AI content",
    icon: "/images/chats.png",
  },
];

export function WhatyouGet() {
  return (
    <Section variant="blue" className="pt-24 pb-24 text-white">
      <ContainerFluid>
        {/* Header - Centered and Responsive Text */}
        <div className="text-center mb-16 md:mb-20 px-4">
            <div className="inline-block border-b-2 border-orange-500 pb-1 mb-8 "> 
                <span className="text-sm font-semibold uppercase relative inline-block text-white">
                What You Get
                </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif max-w-xl mx-auto leading-[1.15] tracking-tight">
                Built on content strategies that actually work.
            </h2>
        </div>

        {/* Responsive Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-white/10 gap-4 md:gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="group p-8 md:p-10 lg:p-8 bg-[#0B363C] transition-all duration-300 ease-in-out"
            >
                <div className="mb-5 relative w-6 h-6">
                    <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className=""
                    />
                </div>

              {/* Text Content */}
              <div className="space-y-3">
                <h3 className="text-lg md:text-xl lg:text-2xl font-serif leading-tight">
                  {item.title}
                </h3>
                <p className="text-base text-white leading-relaxed font-light ">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ContainerFluid>
    </Section>
  );
}