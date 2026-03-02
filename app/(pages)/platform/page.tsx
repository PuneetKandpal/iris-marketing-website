import { PlatformHero } from "./components/PlatformHero";
import { FeatureGrid } from "./components/FeatureGrid";
import { HowIriscaleworks } from "./components/HowIriscaleworks";
import { Foundation } from "./components/Foundation";
import { StrategicPlanning } from "./components/StrategicPlanning";
import { ExecutionatScale } from "./components/ExecutionatScale";
import { Testimonials } from "./components/Testimonials";
import { PlatformFeatures } from "./components/PlatformFeatures";
import { WhatyouGet } from "./components/WhatyouGet";
import { Comparison } from "./components/Comparison";
import { LatestNews } from "./components/LatestNews";
import { BuildOnce } from "./components/BuildOnce";
import { Faq } from "./components/Faq";




export default function PlatformPage() {
  return (
    <div className="flex flex-col w-full">
      <PlatformHero />
      {/* <FeatureGrid /> */}
      <HowIriscaleworks />
      <Foundation />
      <StrategicPlanning />
      <ExecutionatScale />
      <Testimonials />
      <PlatformFeatures />
      <WhatyouGet />
      <Comparison />
      <LatestNews />
      <BuildOnce />
      <Faq />
    </div>
  );
}
