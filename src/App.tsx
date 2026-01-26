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
import ExitPopup from './components/ExitPopup';
import StickyCTA from './components/StickyCTA';
import BeforeAfter from './components/BeforeAfter';

const projectData = [
  {
    before: '/before1.jpg',
    after: '/after1.jpg',
    description: 'Roof replacement in Dallas',
  },
  {
    before: '/before2.jpg',
    after: '/after2.jpg',
    description: 'Storm damage repair',
  },
];


function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <BeforeAfter projects={projectData} /> {/* NEW - did you add this? */}
      <TestimonialsSection /> {/* Your testimonials */}
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
      <ExitPopup />
      <StickyCTA />
    </div>
  );
}

export default App;
