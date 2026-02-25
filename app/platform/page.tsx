import { PlatformHero } from "./components/PlatformHero";
import { FeatureGrid } from "./components/FeatureGrid";

export default function PlatformPage() {
  return (
    <div className="flex flex-col w-full">
      <PlatformHero />
      <FeatureGrid />
    </div>
  );
}
