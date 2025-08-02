import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, MessageCircle, ArrowDown } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWhatsApp = () => {
    window.open("https://wa.me/1234567890?text=Hello! I'm interested in your jewelry collection.", "_blank");
  };

  const scrollToGallery = () => {
    const element = document.querySelector("#gallery");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-subtle"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-10">
        <Sparkles className="w-8 h-8 text-primary-gold animate-gentle-bounce" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10">
        <Sparkles className="w-6 h-6 text-primary-rose animate-gentle-bounce" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Logo */}
        <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <img 
            src="/lovable-uploads/00cc804b-1b3f-4e1e-9ecc-c2659e710b5f.png"
            alt="Meera's Jewelry Boutique"
            className="h-24 sm:h-32 md:h-40 w-auto mx-auto mb-6"
          />
        </div>

        {/* Main heading */}
        <h1 className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Handcrafted
          <span className="block text-primary-rose">Elegance</span>
        </h1>

        {/* Subtitle */}
        <p className={`text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Discover exquisite jewelry pieces crafted with passion, tradition, and modern elegance for life's most precious moments.
        </p>

        {/* Call to action buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button
            onClick={scrollToGallery}
            size="lg"
            className="btn-elegant w-full sm:w-auto"
          >
            Explore Collection
          </Button>
          <Button
            onClick={handleWhatsApp}
            variant="outline"
            size="lg"
            className="btn-outline-elegant w-full sm:w-auto flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Chat with Us
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button
            onClick={scrollToGallery}
            className="text-muted-foreground hover:text-primary-rose transition-colors duration-300 flex flex-col items-center gap-2 mx-auto"
          >
            <span className="text-sm font-medium">Discover More</span>
            <ArrowDown className="w-5 h-5 animate-gentle-bounce" />
          </button>
        </div>
      </div>

      {/* Mobile optimized spacing */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;