import { Hero } from "./(pages)/_home/components/Hero";
import { LogoTicker } from "./(pages)/_home/components/LogoTicker";
import { FeatureHighlight } from "./(pages)/_home/components/FeatureHighlight";
import { WithWithoutIriscle } from "./(pages)/_home/components/WithWithoutIriscle";
import { HowIriscaleworks } from "./(pages)/_home/components/HowIriscaleworks";
import { WhatyouGet } from "./(pages)/_home/components/WhatyouGet";
import { Testimonials } from "./(pages)/_home/components/Testimonials";
import { Faq } from "./(pages)/_home/components/Faq";
import { WesolveStrategy } from "./(pages)/_home/components/WesolveStrategy";
//import { LatestNews } from "./(pages)/_home/components/LatestNews";


export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      {/* <LogoTicker />
      <FeatureHighlight /> */}
      <WithWithoutIriscle />
      <Testimonials />
      <HowIriscaleworks />
      <WesolveStrategy />
      <WhatyouGet />
      {/* <LatestNews />
      {/* <Faq /> */}
      
    </div>
  );
}
