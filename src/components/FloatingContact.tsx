import { Phone } from 'lucide-react';
import { PHONE_PRIMARY } from '@/data/vehicles';

const FloatingContact = () => {
  return (
    <a
      href={`tel:+91${PHONE_PRIMARY}`}
      className="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-float"
      style={{ backgroundColor: '#0B72E3' }}
      aria-label="Call us"
    >
      <Phone size={20} color="white" />
    </a>
  );
};

export default FloatingContact;
