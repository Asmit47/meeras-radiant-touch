import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, MessageCircle, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    interest: "",
    message: ""
  });
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector("#contact");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.whatsapp || !formData.interest) {
      toast({
        title: "Please fill in all required fields",
        description: "Name, WhatsApp number, and interest area are required.",
        variant: "destructive"
      });
      return;
    }

    // In a real app, this would submit to Google Sheets or backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Thank you for your interest!",
      description: "We'll get back to you soon on WhatsApp.",
    });

    // Reset form
    setFormData({
      name: "",
      whatsapp: "",
      interest: "",
      message: ""
    });
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/1234567890?text=Hello! I'm interested in your jewelry collection.", "_blank");
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Boutique",
      content: "123 Heritage Street, Jewelry District",
      subContent: "City Center, PIN 123456"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 98765 43210",
      subContent: "Available 10 AM - 8 PM"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@meerasjewelry.com",
      subContent: "We reply within 24 hours"
    },
    {
      icon: Clock,
      title: "Store Hours",
      content: "Mon - Sat: 10 AM - 8 PM",
      subContent: "Sunday: 11 AM - 6 PM"
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Let's Create Something
            <span className="block text-primary-rose">Beautiful Together</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to find your perfect piece? Get in touch with us today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="font-display font-bold text-2xl text-foreground mb-8">
              Get In Touch
            </h3>

            <div className="space-y-6 mb-10">
              {contactInfo.map((item, index) => (
                <div
                  key={item.title}
                  className={`flex items-start gap-4 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}
                  style={{ transitionDelay: `${(index + 3) * 200}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-rose/10 rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary-rose" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-muted-foreground">{item.content}</p>
                    <p className="text-sm text-muted-foreground">{item.subContent}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick WhatsApp */}
            <div className="card-elegant p-6">
              <h4 className="font-display font-semibold text-xl text-foreground mb-4">
                Need Quick Assistance?
              </h4>
              <p className="text-muted-foreground mb-6">
                Chat with us on WhatsApp for instant support and personalized recommendations.
              </p>
              <Button
                onClick={handleWhatsApp}
                className="btn-elegant w-full flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Start WhatsApp Chat
              </Button>
            </div>

            {/* Google Map placeholder */}
            <div className="mt-8 h-64 bg-gradient-to-br from-primary-rose/10 to-primary-gold/10 rounded-lg card-elegant flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-12 h-12 mx-auto mb-3 text-primary-rose" />
                <p className="font-medium">Interactive Map</p>
                <p className="text-sm">Store location will be displayed here</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="card-elegant p-6 sm:p-8">
              <h3 className="font-display font-bold text-2xl text-foreground mb-6">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    WhatsApp Number *
                  </label>
                  <Input
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Interest Area *
                  </label>
                  <Select onValueChange={(value) => setFormData({ ...formData, interest: value })}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="What are you looking for?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gold">Gold Jewelry</SelectItem>
                      <SelectItem value="diamond">Diamond Collection</SelectItem>
                      <SelectItem value="bridal">Bridal Sets</SelectItem>
                      <SelectItem value="custom">Custom Design</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your preferences, occasion, or any specific requirements..."
                    rows={4}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  className="btn-elegant w-full flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                We respect your privacy and never share your contact information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;