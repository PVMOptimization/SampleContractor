import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    'Services',
    'About Us',
    'Reviews',
    'Service Areas',
    'Contact',
  ];

  const topServices = [
    'Kitchen Remodeling',
    'Bathroom Renovation',
    'Roofing & Repairs',
    'Electrical Services',
    'Plumbing Services',
    'Emergency Repairs',
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-secondary mb-4">
              Premier Home Services
            </h3>
            <p className="text-gray-400 mb-4">
              Austin's trusted contractor for over 15 years. Licensed, insured, and dedicated to excellence.
            </p>
            <div className="flex items-center gap-2 text-success">
              <span className="text-2xl">⭐</span>
              <span className="font-bold">4.9/5</span>
              <span className="text-gray-400">(500+ Reviews)</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-secondary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {topServices.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-secondary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <a href="tel:5551234567" className="text-gray-300 hover:text-secondary transition-colors">
                    (555) 123-4567
                  </a>
                  <div className="text-sm text-gray-500">24/7 Emergency</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <a href="mailto:info@premierservices.com" className="text-gray-300 hover:text-secondary transition-colors">
                  info@premierservices.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <div className="text-gray-300">
                  123 Main St<br />Austin, TX 78701
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <div className="text-gray-300 text-sm">
                  Mon-Fri: 7AM-6PM<br />
                  Sat: 8AM-4PM<br />
                  Sun: Emergency Only
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <div>
              © 2025 Premier Home Services. All rights reserved.
            </div>
            <div className="flex items-center gap-2">
              <span>Licensed & Insured</span>
              <span>•</span>
              <span className="text-success font-semibold">TECL #12345</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
