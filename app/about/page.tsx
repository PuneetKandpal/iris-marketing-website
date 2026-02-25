import { AboutHero, TeamSection } from "./components/AboutSections";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      <AboutHero />
      <TeamSection />
    </div>
  );
}
