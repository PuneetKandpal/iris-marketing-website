import { ContainerFluid } from "@/app/components/ui";

export function SlantSeparator() {
  return (
    <div className="bg-white border-b border-iris-cream">
      <ContainerFluid className="px-6 sm:px-10">
        <div className="border-x border-iris-cream overflow-hidden">
          <div
  className="h-16 w-full"
  style={{
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12'%3E%3Cline x1='0' y1='12' x2='12' y2='0' stroke='%23e5e5e5' stroke-width='1'/%3E%3C/svg%3E")`,
  }}
/>
        </div>
      </ContainerFluid>
    </div>
  );
}