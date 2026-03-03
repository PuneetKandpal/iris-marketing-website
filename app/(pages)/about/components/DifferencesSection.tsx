import { ContainerFluid, Section } from "@/app/components/ui";

const differences = [
  {
    title: "Strategy before execution",
    description: "Know what to create and why before generating content.",
    highlighted: true,
  },
  {
    title: "Quality at scale",
    description: "AI speed with expert-level thinking built in.",
  },
  {
    title: "Intelligence that compounds",
    description: "Marketing gets easier over time, not harder.",
  },
  {
    title: "Accessible expertise",
    description: "Strategic capabilities without the strategic salary.",
  },
];

export function DifferencesSection() {
  return (
    <Section className="bg-white border-b border-iris-cream">
      <ContainerFluid className="px-6 sm:px-10">
        <div className="border-x border-iris-cream">
          <div className="px-8 py-20 md:py-24">
            <h2 className="font-serif text-[40px] leading-none tracking-tight text-iris-dark md:text-[56px]">
              How we&apos;re different
            </h2>

            <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)]">
              <div className="max-w-2xl space-y-6">
                {differences.map((item, index) => (
                  <div key={item.title} className="flex gap-4">
                    <span
                      className={
                        "mt-1 h-[calc(100%-0.25rem)] w-1 rounded-full " +
                        (index === 0 ? "bg-iris-orange" : "bg-iris-cream")
                      }
                      aria-hidden
                    />
                    <div>
                      <p className="font-serif text-[28px] leading-tight tracking-tight text-iris-dark md:text-[32px]">
                        {item.title}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-iris-teal md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="w-full">
                <div className="relative aspect-4/3 w-full overflow-hidden bg-[url('/images/img-17.png')] bg-cover bg-center">
                  <div className="absolute inset-0 flex items-center justify-center px-6 py-10 md:px-12">
                    <div className="w-full max-w-[360px] border border-iris-cream bg-iris-light px-6 py-8 md:px-10 md:py-12 shadow-sm">
                      <p className="text-sm font-semibold text-iris-teal">
                        [Mockup showing Company Intelligence dashboard with:]
                      </p>
                      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-iris-teal">
                        <li className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-iris-teal" />
                          <span>Persona cards displaying pain points</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-iris-teal" />
                          <span>Keyword list with opportunity scores</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-iris-teal" />
                          <span>Competitor analysis summary</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-iris-teal" />
                          <span>Connected data showing how intelligence flows to content</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerFluid>
    </Section>
  );
}
