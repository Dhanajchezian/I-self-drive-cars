import { PHONE_PRIMARY, PHONE_SECONDARY } from '@/data/vehicles';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display text-xl font-bold mb-3">I Self Drive Cars</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Premium self drive car rental service in Chennai. Affordable rates, well-maintained vehicles, and hassle-free booking.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#cars" className="hover:text-gold transition-colors">Our Cars</a></li>
              <li><a href="#why-us" className="hover:text-gold transition-colors">Why Us</a></li>
              <li><a href="#policy" className="hover:text-gold transition-colors">Rental Policy</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href={`tel:+91${PHONE_PRIMARY}`} className="hover:text-gold transition-colors">{PHONE_PRIMARY}</a>
              </li>
              <li>
                <a href={`tel:+91${PHONE_SECONDARY}`} className="hover:text-gold transition-colors">{PHONE_SECONDARY}</a>
              </li>
              <li>Chennai, Tamil Nadu</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-6 text-center text-sm text-primary-foreground/50">
          &copy; {new Date().getFullYear()} I Self Drive Cars. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
