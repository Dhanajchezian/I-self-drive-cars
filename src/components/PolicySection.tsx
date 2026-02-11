import { FileText, CreditCard, MapPin, Droplets, Car, Fuel, AlertTriangle, ShieldCheck } from 'lucide-react';

const policies = [
  {
    icon: FileText,
    title: 'ID Proof Requirement',
    content: 'Original government-issued ID proofs (Aadhaar, Driving License, Passport) are mandatory. The number of IDs required varies by vehicle. Photocopies are not accepted.',
  },
  {
    icon: CreditCard,
    title: 'Refundable Deposit',
    content: 'A security deposit is collected at the time of vehicle pickup and will be fully refunded upon safe return of the vehicle in the same condition.',
  },
  {
    icon: Car,
    title: 'Extra KM Charges',
    content: 'Each rental includes a daily kilometer limit. Any distance traveled beyond the limit will be charged at the per-km rate specified for each vehicle.',
  },
  {
    icon: Droplets,
    title: 'Cleaning Charges',
    content: 'A cleaning fee applies if the vehicle is returned in an unclean condition. Charges vary by vehicle type. Keeping the car clean waives this charge.',
  },
  {
    icon: MapPin,
    title: 'Delivery Charges',
    content: 'Vehicles can be delivered to Chennai Airport, Egmore, and Central stations at applicable charges. Self-pickup from our location is free of charge.',
  },
  {
    icon: ShieldCheck,
    title: 'Vehicle Return Policy',
    content: 'Return the vehicle on time and in the same condition. Late returns will incur additional daily charges. Report any issues immediately via WhatsApp.',
  },
  {
    icon: Fuel,
    title: 'Fuel Policy – Tank Full → Return Full',
    content: 'Pick up the car with a full tank and return it the same way. Simple and fair. Any shortage will be charged at prevailing fuel rates.',
  },
  {
    icon: AlertTriangle,
    title: 'Toll, Parking & Damage Policy',
    content: 'All toll and parking charges during your trip are borne by the customer. In case of any damage, you pay the complete repair cost including both repair expenses and rental charges for the days the car is in the service center.',
  },
];

const PolicySection = () => {
  return (
    <section id="policy" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-gold font-medium tracking-[0.15em] uppercase text-sm mb-3">Rental Policy</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Terms &amp; Conditions
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We believe in complete transparency. Read our rental policies before booking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {policies.map((policy) => (
            <div
              key={policy.title}
              className="flex gap-4 p-5 rounded-xl border border-border bg-card hover:border-gold/20 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                <policy.icon size={18} className="text-gold" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1.5">{policy.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{policy.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PolicySection;
