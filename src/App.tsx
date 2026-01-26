import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import TestimonialsSection from './components/TestimonialsSection';
import Process from './components/Process';
import ServiceArea from './components/ServiceArea';
import EmergencyServices from './components/EmergencyServices';
import ContactForm from './components/ContactForm';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ExitPopup from './components/ExitPopup';
import StickyCTA from './components/StickyCTA';
import BeforeAfter from './components/BeforeAfter';
import VideoTestimonial from './components/VideoTestimonial';

const projectData = [
  {
    before: '/before1.jpg',
    after: '/after1.jpg',
    description: 'Roof replacement in Dallas',
  },
];


function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.trustindex.io/loader.js?840a12a63552195cea763d0ef4b';
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <BeforeAfter projects={projectData} /> {/* NEW - did you add this? */}
      {/* Trustindex Widget - it will load via the script above */}
      <section className="py-8">
        <div id="trustindex-widget"></div>
      </section>
      <TestimonialsSection /> {/* Your testimonials */}
      {/* Video Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Video Testimonials
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <VideoTestimonial
              videoId="G59jvxywKcA"
              author="John Smith"
              location="Fort Worth, TX"
            />
          </div>
        </div>
      </section>
      <TrustBadges />
      <Services />
      <WhyChooseUs />
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
