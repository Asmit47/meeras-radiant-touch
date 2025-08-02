import { useEffect, useState } from "react";
import { Heart, Sparkles, Award } from "lucide-react";

const StorySection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector("#story");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Heart,
      title: "Passion Driven",
      description: "Every piece crafted with love and dedication to perfection"
    },
    {
      icon: Sparkles,
      title: "Heritage Meets Modern",
      description: "Blending traditional craftsmanship with contemporary elegance"
    },
    {
      icon: Award,
      title: "Trusted Excellence",
      description: "Years of experience creating jewelry for life's special moments"
    }
  ];

  return (
    <section id="story" className="py-16 sm:py-24 gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              The Story of
              <span className="block text-primary-rose">Meera's Journey</span>
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                Meera's passion for jewelry began in her teenage years, inspired by her grandmother's antique collection that sparkled with stories of generations past. Each intricate piece held memories, traditions, and the artistry of skilled craftsmen.
              </p>
              
              <p className="text-lg leading-relaxed">
                After years of studying traditional Indian jewelry-making techniques and perfecting her craft, Meera launched her first boutique in the heart of the city. Her vision was simple yet profound: to create jewelry that honors heritage while embracing modern elegance.
              </p>
              
              <p className="text-lg leading-relaxed">
                Today, every piece that leaves our boutique carries forward this legacy of craftsmanship, elegance, and personalization. We believe that jewelry is not just an accessory—it's a celebration of life's most precious moments.
              </p>
            </div>

            {/* Brand values */}
            <div className="mt-12 space-y-6">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className={`flex items-start gap-4 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-rose/10 rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary-rose" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Visual */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              {/* Placeholder for founder image */}
              <div className="aspect-[4/5] bg-gradient-to-br from-primary-rose/20 to-primary-gold/20 rounded-2xl card-elegant flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary-rose/20 flex items-center justify-center">
                    <Heart className="w-12 h-12 text-primary-rose" />
                  </div>
                  <p className="font-display font-semibold text-2xl text-foreground mb-2">Meera's Craftsmanship</p>
                  <p className="text-muted-foreground">Heritage • Passion • Excellence</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-gold rounded-full opacity-60 animate-gentle-bounce"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary-rose/30 rounded-full opacity-80" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>
        </div>

        {/* Vision statement */}
        <div className={`mt-16 sm:mt-24 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="card-elegant p-8 sm:p-12 max-w-4xl mx-auto">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-6">
              Our Vision
            </h3>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed italic">
              "To create timeless pieces that celebrate life's most precious moments, 
              where every customer finds not just jewelry, but a piece of art that tells their unique story."
            </p>
            <div className="mt-6 text-right">
              <p className="font-display font-semibold text-primary-rose">— Meera</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;