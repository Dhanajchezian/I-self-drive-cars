import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Cars', href: '#cars' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Policy', href: '#policy' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-card/95 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                  scrolled ? 'text-foreground' : 'text-primary-foreground'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* CTA */}
        <a
          href="#cars"
          className="hidden md:inline-flex bg-gold text-gold-foreground px-7 py-2.5 rounded-full text-sm font-semibold tracking-wide hover:bg-gold/90 transition-all gold-glow"
        >
          Book Now
        </a>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card/98 backdrop-blur-lg border-b border-border">
          <ul className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-foreground hover:text-gold transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#cars"
                onClick={() => setMobileOpen(false)}
                className="inline-flex bg-gold text-gold-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gold/90 transition-all"
              >
                Book Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
