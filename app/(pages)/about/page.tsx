import { AboutFaqSection } from "./components/AboutFaqSection";
import { AboutHero } from "./components/AboutHero";
import { DifferencesSection } from "./components/DifferencesSection";
import { ProblemSection } from "./components/ProblemSection";
import { ResultsSection } from "./components/ResultsSection";
import { SlantSeparator } from "./components/SlantSeparator";
import { StartBuilding } from "./components/StartBuilding";
import { UpdatesSection } from "./components/UpdatesSection";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      <AboutHero />
      <ProblemSection />
      <SlantSeparator />
      <ResultsSection />
      <DifferencesSection />
      {/* <UpdatesSection />
      <StartBuilding /> */}
    </div>
  );
}
