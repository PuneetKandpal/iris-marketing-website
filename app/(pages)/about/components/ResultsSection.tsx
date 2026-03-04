import { ContainerFluid, Section } from "@/app/components/ui";

const results = [
  {
    title: "$0 to $1B in 4 years",
    description: "Amazon Business growth team experience",
  },
  {
    title: "10x customer growth",
    description: "Fortune 100 B2B scaling",
  },
  {
    title: "Zero to millions",
    description: "Multiple websites grown from launch to massive organic traffic",
  },
  {
    title: "20 years systematized",
    description: "Every strategy in Iriscale comes from proven methods, not theory",
  },
];

export function ResultsSection() {
  return (
    <Section className="bg-white">
      <ContainerFluid className="px-6 sm:px-10">
        <div className="border-x border-iris-cream">
          <div className="px-8 pt-20 md:pt-18 text-center">
            <h2 className="font-serif text-[40px] md:text-[56px] leading-none tracking-tight text-iris-dark">
              Built on real results
            </h2>
          </div>

          <div className="border-b border-iris-cream px-8 pb-10 mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
              {results.map((item) => (
                <div key={item.title} className="flex flex-col items-center gap-2">
                  <p className="font-serif text-2xl md:text-[30px] leading-tight tracking-tight text-iris-dark">
                    {item.title}
                  </p>
                  <p className="text-sm md:text-base text-iris-teal leading-relaxed max-w-xs">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContainerFluid>
    </Section>
  );
}
