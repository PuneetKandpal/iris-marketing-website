import { Hero } from "./(pages)/_home/components/Hero";
import { LogoTicker } from "./(pages)/_home/components/LogoTicker";
import { FeatureHighlight } from "./(pages)/_home/components/FeatureHighlight";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <LogoTicker />
      <FeatureHighlight />
    </div>
  );
}
