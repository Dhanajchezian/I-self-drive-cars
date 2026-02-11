import { vehicles } from '@/data/vehicles';
import CarCard from './CarCard';

const CarsSection = () => {
  return (
    <section id="cars" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-gold font-medium tracking-[0.15em] uppercase text-sm mb-3">Our Fleet</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choose Your Ride
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From budget-friendly hatchbacks to premium SUVs. All vehicles are well-maintained and ready for your Chennai adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((vehicle) => (
            <CarCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarsSection;
