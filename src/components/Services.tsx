import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Services() {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: '🍳',
      name: 'Kitchen Remodeling',
      description: 'Transform your kitchen into a modern, functional space with custom cabinets, countertops, and professional installation.',
    },
    {
      icon: '🛁',
      name: 'Bathroom Renovation',
      description: 'Create your dream bathroom with expert tile work, fixture installation, and complete renovation services.',
    },
    {
      icon: '🏠',
      name: 'Home Additions',
      description: 'Expand your living space with professionally designed and constructed room additions that blend seamlessly.',
    },
    {
      icon: '📐',
      name: 'Flooring Installation',
      description: 'Expert installation of hardwood, tile, laminate, and vinyl flooring with precision and attention to detail.',
    },
    {
      icon: '🎨',
      name: 'Painting (Interior & Exterior)',
      description: 'Professional painting services using premium materials for a flawless, long-lasting finish.',
    },
    {
      icon: '🏗️',
      name: 'Roofing & Repairs',
      description: 'Complete roofing solutions from repairs to full replacements with quality materials and workmanship.',
    },
    {
      icon: '🪴',
      name: 'Deck & Patio Construction',
      description: 'Build beautiful outdoor living spaces with custom decks and patios designed for your lifestyle.',
    },
    {
      icon: '⚡',
      name: 'Electrical Work',
      description: 'Licensed electrical services including installations, repairs, and upgrades to keep your home safe.',
    },
    {
      icon: '🚰',
      name: 'Plumbing Services',
      description: 'Expert plumbing repairs, installations, and maintenance from leaks to complete system upgrades.',
    },
    {
      icon: '❄️',
      name: 'HVAC Installation & Repair',
      description: 'Keep your home comfortable year-round with professional heating and cooling solutions.',
    },
    {
      icon: '🧱',
      name: 'Drywall & Texturing',
      description: 'Flawless drywall installation, repair, and texturing for smooth, professional walls and ceilings.',
    },
    {
      icon: '🚨',
      name: 'Emergency Repairs',
      description: '24/7 emergency service for urgent repairs when you need help fast.',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Complete Contracting Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From small repairs to major renovations, we handle it all with expertise and professionalism
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-2xl hover:-translate-y-2 hover:border-secondary transition-all duration-300 cursor-pointer group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
              <button className="flex items-center gap-2 text-secondary font-semibold group-hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={scrollToForm}
            className="bg-secondary hover:bg-orange-600 text-white px-12 py-5 rounded-lg font-bold text-xl transition-all hover:scale-110 shadow-lg hover:shadow-2xl"
          >
            REQUEST FREE ESTIMATE
          </button>
          <p className="mt-4 text-gray-600 text-lg">
            ⚡ Quick response time • 📞 Call us at{' '}
            <a href="tel:5551234567" className="text-secondary font-bold hover:underline text-xl">
              (555) 123-4567
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
