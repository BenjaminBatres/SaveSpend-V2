import HeroSection from "./components/Sections/HeroSection";
import Navbar from "./components/Navbar";
import FeaturesSction from "./components/Sections/FeaturesSection";
import HowItWorksSection from "./components/Sections/HowItWorksSection";
import AboutSection from "./components/Sections/AboutSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSction />
      <HowItWorksSection />
      <AboutSection />
    </>
  );
}
