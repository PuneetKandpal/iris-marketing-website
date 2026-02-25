import { Hero } from "./_home/components/Hero";
import { LogoTicker } from "./_home/components/LogoTicker";
import { FeatureHighlight } from "./_home/components/FeatureHighlight";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <LogoTicker />
      <FeatureHighlight />
    </div>
  );
}
