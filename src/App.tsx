import Header from './components/Header';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import ServiceArea from './components/ServiceArea';
import EmergencyServices from './components/EmergencyServices';
import ContactForm from './components/ContactForm';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ExitPopup from './components/ExitPopup';
import StickyCTA from './components/StickyCTA';
import BeforeAfter from './components/BeforeAfter';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TrustBadges />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Process />
      <ServiceArea />
      <EmergencyServices />
      <ContactForm />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
