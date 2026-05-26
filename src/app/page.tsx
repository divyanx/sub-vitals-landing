import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ProblemSolution } from "@/components/ProblemSolution";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { HowItWorks } from "@/components/HowItWorks";
import { BuiltFor } from "@/components/BuiltFor";
import { TechStack } from "@/components/TechStack";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProblemSolution />
        <FeaturesGrid />
        <HowItWorks />
        <BuiltFor />
        <TechStack />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
