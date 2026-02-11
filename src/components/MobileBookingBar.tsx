import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/data/vehicles';

const MobileBookingBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-card/95 backdrop-blur-md border-t border-border p-3">
      <a
        href={getWhatsAppLink('Hi, I would like to book a self drive car in Chennai.')}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full bg-gold text-gold-foreground py-3 rounded-lg font-semibold text-sm gold-glow"
      >
        <MessageCircle size={18} />
        Book on WhatsApp
      </a>
    </div>
  );
};

export default MobileBookingBar;
