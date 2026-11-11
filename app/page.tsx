import HeroSection from "./components/Sections/HeroSection";
import Navbar from "./components/Navbar";
import HighlightsSection from "./components/Sections/HighlightsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HighlightsSection />
    </>
  );
}
