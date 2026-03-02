import { ContainerFluid, Section } from "@/app/components/ui";

const columns = [
  {
    title: "Marketing Manager",
    rows: [
      "Annual cost: $120,000+",
      "Benefits: $30,000+",
      "Total: $150,000/year",
    ],
    highlighted: false,
  },
  {
    title: "Agency",
    rows: [
      "Monthly retainer: $5,000–15,000",
      "Setup fees: $10,000+",
      "Total: $70,000+/year",
    ],
    highlighted: false,
  },
  {
    title: "Iriscale",
    rows: [
      "Monthly cost: $199–399",
      "Setup: Included",
      "Total: $2,388–4,788/year",
    ],
    highlighted: true,
  },
] as const;

export function CompareCostsSection() {
  return (
    <Section className="bg-white">
      <ContainerFluid className="px-6 sm:px-10 pt-20 pb-12">
        <h2 className="font-serif font-normal text-iris-dark text-[44px] sm:text-[56px] leading-none tracking-[-1.68px] text-center mb-16">
          Compare to your
          <br />
          current costs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 border border-iris-cream">
          {columns.map((col, idx) => (
            <div
              key={col.title}
              className={
                "border-t border-iris-cream p-12 " +
                (idx < 2 ? "md:border-r " : "") +
                (col.highlighted ? "bg-iris-cream" : "bg-white")
              }
            >
              <h3 className="font-serif font-normal text-iris-dark text-[26px] tracking-[-0.78px] leading-none mb-10">
                {col.title}
              </h3>
              <div className="flex flex-col gap-2 text-iris-dark text-sm tracking-[-0.14px] leading-[1.6]">
                {col.rows.map((row) => (
                  <p key={row}>{row}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ContainerFluid>
    </Section>
  );
}
