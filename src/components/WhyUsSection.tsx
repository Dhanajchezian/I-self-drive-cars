import { BadgeCheck, MapPin, Wrench, MessageCircle, IndianRupee, Clock } from 'lucide-react';

const reasons = [
  { icon: IndianRupee, title: 'Transparent Pricing', desc: 'No hidden charges. What you see is what you pay.' },
  { icon: BadgeCheck, title: 'No Hidden Fees', desc: 'Clear breakdown of all costs upfront before booking.' },
  { icon: MapPin, title: 'Airport Delivery', desc: 'Pick up and drop your car at Chennai Airport hassle-free.' },
  { icon: Wrench, title: 'Well Maintained', desc: 'Every vehicle is regularly serviced and thoroughly cleaned.' },
  { icon: MessageCircle, title: 'Quick WhatsApp Booking', desc: 'Book in seconds via WhatsApp. No apps, no forms.' },
  { icon: Clock, title: 'Flexible Rentals', desc: 'Daily, weekly, or custom durations to suit your plans.' },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-gold font-medium tracking-[0.15em] uppercase text-sm mb-3">Why Choose Us</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Trusted by Hundreds in Chennai
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-xl border border-border bg-background hover:border-gold/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <item.icon size={22} className="text-gold" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
