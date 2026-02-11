import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ReviewsSection from '@/components/ReviewsSection';
import CarsSection from '@/components/CarsSection';
import WhyUsSection from '@/components/WhyUsSection';
import PolicySection from '@/components/PolicySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import FloatingContact from '@/components/FloatingContact';
import MobileBookingBar from '@/components/MobileBookingBar';

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ReviewsSection />
      <CarsSection />
      <WhyUsSection />
      <PolicySection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
      <FloatingContact />
      <MobileBookingBar />
    </main>
  );
};

export default Index;
