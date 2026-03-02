import { PricingCards } from "./components/PricingCards";
import { PlatformHero } from "./components/PlatformHero";
import { Testimonials } from "./components/Testimonials";
import { LatestNews } from "./components/LatestNews";
import { StartBuilding } from "./components/StartBuilding";
import { Faq } from "./components/Faq";


export default function PricingPage() {
  return (
    <div className="flex flex-col w-full">
      {/* <PricingCards /> */}
      <PlatformHero />
      <Testimonials />
      <LatestNews />
      <StartBuilding />
      <Faq />
    </div>
  );
}
