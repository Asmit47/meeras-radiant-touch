import { useState, useEffect } from "react";
import { Eye } from "lucide-react";

const GallerySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector("#gallery");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  // Placeholder jewelry images - in a real app, these would be actual product photos
  const jewelryImages = [
    {
      id: 1,
      title: "Diamond Elegance Ring",
      category: "Diamond",
      image: "/api/placeholder/400/400"
    },
    {
      id: 2,
      title: "Gold Heritage Necklace",
      category: "Gold",
      image: "/api/placeholder/400/400"
    },
    {
      id: 3,
      title: "Bridal Pearl Set",
      category: "Bridal",
      image: "/api/placeholder/400/400"
    },
    {
      id: 4,
      title: "Rose Gold Earrings",
      category: "Gold",
      image: "/api/placeholder/400/400"
    },
    {
      id: 5,
      title: "Diamond Tennis Bracelet",
      category: "Diamond",
      image: "/api/placeholder/400/400"
    },
    {
      id: 6,
      title: "Traditional Bangles",
      category: "Gold",
      image: "/api/placeholder/400/400"
    },
    {
      id: 7,
      title: "Sapphire Pendant",
      category: "Gemstone",
      image: "/api/placeholder/400/400"
    },
    {
      id: 8,
      title: "Bridal Complete Set",
      category: "Bridal",
      image: "/api/placeholder/400/400"
    }
  ];

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Our Exquisite
            <span className="block text-primary-rose">Collection</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Each piece tells a story of craftsmanship, tradition, and timeless beauty
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {jewelryImages.map((item, index) => (
            <div
              key={item.id}
              className={`group relative card-elegant overflow-hidden hover-lift cursor-pointer transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(item.image)}
            >
              {/* Image */}
              <div className="aspect-square relative overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary-rose/10 to-primary-gold/10 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary-rose/20 flex items-center justify-center">
                      <Eye className="w-8 h-8 text-primary-rose" />
                    </div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-muted-foreground mt-1">{item.category}</p>
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Eye className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-medium">View Details</p>
                  </div>
                </div>
              </div>

              {/* Product info */}
              <div className="p-4 sm:p-6">
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-primary-rose uppercase tracking-wide">{item.category}</p>
              </div>

              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 overflow-hidden"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className={`text-center mt-12 sm:mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg text-muted-foreground mb-6">
            Ready to find your perfect piece?
          </p>
          <button
            onClick={() => window.open("https://wa.me/1234567890?text=Hello! I'd like to know more about your jewelry collection.", "_blank")}
            className="btn-elegant"
          >
            Start Your Journey
          </button>
        </div>
      </div>

      {/* Simple image modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-2xl w-full">
            <img
              src={selectedImage}
              alt="Jewelry detail"
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-primary-rose transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;