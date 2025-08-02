import { Heart, MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/1234567890?text=Hello! I'm interested in your jewelry collection.", "_blank");
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img 
              src="/lovable-uploads/00cc804b-1b3f-4e1e-9ecc-c2659e710b5f.png"
              alt="Meera's Jewelry Boutique"
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Crafting timeless elegance with passion and tradition. Every piece tells a story 
              of heritage, craftsmanship, and the celebration of life's precious moments.
            </p>
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-2 bg-primary-rose hover:bg-primary-rose/90 
                         text-white px-6 py-3 rounded-lg transition-colors duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("#home")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#gallery")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#story")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-rose mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  123 Heritage Street<br />
                  Jewelry District, City Center<br />
                  PIN 123456
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-rose flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-rose flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">hello@meerasjewelry.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Store Hours */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-display font-semibold text-primary-rose mb-2">Store Hours</h4>
              <p className="text-primary-foreground/80 text-sm">
                Monday - Saturday: 10 AM - 8 PM<br />
                Sunday: 11 AM - 6 PM
              </p>
            </div>
            <div>
              <h4 className="font-display font-semibold text-primary-rose mb-2">Collections</h4>
              <p className="text-primary-foreground/80 text-sm">
                Gold • Diamond • Bridal<br />
                Custom Designs • Heritage Pieces
              </p>
            </div>
            <div>
              <h4 className="font-display font-semibold text-primary-rose mb-2">Services</h4>
              <p className="text-primary-foreground/80 text-sm">
                Custom Design • Repair • Cleaning<br />
                Consultation • Certification
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60 text-sm flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-primary-rose" /> by Meera's Jewelry Boutique
          </p>
          <p className="text-primary-foreground/60 text-xs mt-2">
            © 2024 Meera's Jewelry Boutique. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;