import { PricingSection } from "./components/PricingSection";
import { CompareCostsSection } from "./components/CompareCostsSection";
import { Testimonials } from "./components/Testimonials";
import { LatestNews } from "./components/LatestNews";
import { StartBuilding } from "./components/StartBuilding";
import { Faq } from "./components/Faq";


export default function PricingPage() {
  return (
    <div className="flex flex-col w-full">
      <PricingSection />
      <CompareCostsSection />
      <Testimonials />
      <LatestNews />
      <StartBuilding />
      <Faq />
    </div>
  );
}
