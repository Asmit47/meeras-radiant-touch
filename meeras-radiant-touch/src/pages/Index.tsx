import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import StorySection from "@/components/StorySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <GallerySection />
      <StorySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;