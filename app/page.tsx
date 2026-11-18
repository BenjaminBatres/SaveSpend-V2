import HeroSection from "./components/Sections/HeroSection";
import Navbar from "./components/layouts/Navbar";
import FeaturesSction from "./components/Sections/FeaturesSection";
import HowItWorksSection from "./components/Sections/HowItWorksSection";
import AboutSection from "./components/Sections/AboutSection";
import Footer from "./components/layouts/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSction />
      <HowItWorksSection />
      <AboutSection />
      <Footer />
    </>
  );
}
