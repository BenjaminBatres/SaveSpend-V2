import HeroSection from "./components/Sections/HeroSection";
import Navbar from "./components/Navbar";
import FeaturesSction from "./components/Sections/FeaturesSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSction />
    </>
  );
}
