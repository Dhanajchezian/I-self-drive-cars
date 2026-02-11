import { useState } from 'react';
import { Fuel, Settings, ChevronDown, MapPin, FileText, MessageCircle } from 'lucide-react';
import { Vehicle, getBookingLink } from '@/data/vehicles';

interface CarCardProps {
  vehicle: Vehicle;
}

const CarCard = ({ vehicle }: CarCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 card-shine">
      {/* Image */}
      <div className="relative aspect-[5/4] bg-primary/5 overflow-hidden">
        <img
          src={vehicle.image}
          alt={`${vehicle.name} self drive car rental in Chennai`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <span className="absolute top-3 right-3 bg-gold/90 text-gold-foreground text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
          Limited Availability
        </span>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-display text-xl font-bold text-foreground mb-2">{vehicle.name}</h3>

        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
            <Fuel size={12} /> {vehicle.fuel}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
            <Settings size={12} /> {vehicle.transmission}
          </span>
        </div>

        <div className="flex items-end gap-1 mb-4">
          <span className="text-2xl font-bold text-foreground">₹{vehicle.pricePerDay.toLocaleString()}</span>
          <span className="text-sm text-muted-foreground mb-0.5">/day</span>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-center gap-2 border border-border text-foreground py-2.5 rounded-lg text-sm font-medium hover:bg-muted transition-colors"
        >
          View Details
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      {/* Expanded details */}
      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out ${
          expanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 pb-5 border-t border-border pt-4 space-y-3">
          {/* Pricing table */}
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex justify-between col-span-2 py-1.5 border-b border-border/50">
              <span className="text-muted-foreground">Daily Rate</span>
              <span className="font-semibold">₹{vehicle.pricePerDay.toLocaleString()}/day</span>
            </div>
            <div className="flex justify-between col-span-2 py-1.5 border-b border-border/50">
              <span className="text-muted-foreground">KM Limit</span>
              <span className="font-semibold">{vehicle.kmLimit} KM</span>
            </div>
            <div className="flex justify-between col-span-2 py-1.5 border-b border-border/50">
              <span className="text-muted-foreground">Extra KM</span>
              <span className="font-semibold">₹{vehicle.extraKmCharge}/km</span>
            </div>
            <div className="flex justify-between col-span-2 py-1.5 border-b border-border/50">
              <span className="text-muted-foreground">Deposit</span>
              <span className="font-semibold">₹{vehicle.deposit.toLocaleString()}</span>
            </div>
            {vehicle.cleaningCharge > 0 && (
              <div className="flex justify-between col-span-2 py-1.5 border-b border-border/50">
                <span className="text-muted-foreground">Cleaning</span>
                <span className="font-semibold">₹{vehicle.cleaningCharge}</span>
              </div>
            )}
          </div>

          {/* Delivery charges */}
          {vehicle.delivery && (
            <div className="mt-3">
              <h4 className="flex items-center gap-1.5 text-sm font-semibold text-foreground mb-2">
                <MapPin size={14} /> Delivery Charges
              </h4>
              <div className="grid grid-cols-1 gap-1 text-sm">
                {vehicle.delivery.airport && (
                  <div className="flex justify-between py-1">
                    <span className="text-muted-foreground">Airport</span>
                    <span className="font-medium">₹{vehicle.delivery.airport}</span>
                  </div>
                )}
                {vehicle.delivery.egmore && (
                  <div className="flex justify-between py-1">
                    <span className="text-muted-foreground">Egmore</span>
                    <span className="font-medium">₹{vehicle.delivery.egmore}</span>
                  </div>
                )}
                {vehicle.delivery.central && (
                  <div className="flex justify-between py-1">
                    <span className="text-muted-foreground">Central</span>
                    <span className="font-medium">₹{vehicle.delivery.central}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ID Proofs */}
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground pt-1">
            <FileText size={14} />
            <span>{vehicle.idProofs} original ID proof{vehicle.idProofs > 1 ? 's' : ''} required</span>
          </div>

          {/* Book button */}
          <a
            href={getBookingLink(vehicle.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 w-full inline-flex items-center justify-center gap-2 bg-gold text-gold-foreground py-3 rounded-lg font-semibold text-sm hover:bg-gold/90 transition-all gold-glow"
          >
            <MessageCircle size={16} />
            Book on WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
};

export default CarCard;
