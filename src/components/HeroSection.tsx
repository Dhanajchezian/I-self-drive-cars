import { Phone, MessageCircle } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import { PHONE_PRIMARY, getWhatsAppLink } from '@/data/vehicles';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Self drive car rental in Chennai - premium car on road"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 hero-gradient" />

      <div className="relative z-10 container mx-auto px-6 text-center py-32">
        <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4 section-fade-in">
          I Self Drive Cars
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 section-fade-in text-balance leading-tight">
          Self Drive Cars in Chennai
        </h1>
        <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 section-fade-in">
          Affordable &bull; Flexible &bull; 24 Hour Rental &bull; Airport Delivery Available
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 section-fade-in">
          <a
            href={`tel:+91${PHONE_PRIMARY}`}
            className="inline-flex items-center gap-2.5 bg-gold text-gold-foreground px-8 py-3.5 rounded-full text-base font-semibold hover:bg-gold/90 transition-all gold-glow"
          >
            <Phone size={18} />
            Call Now
          </a>
          <a
            href={getWhatsAppLink('Hi, I am interested in renting a self drive car in Chennai.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-full text-base font-semibold hover:bg-primary-foreground/10 transition-all"
          >
            <MessageCircle size={18} />
            WhatsApp Now
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
