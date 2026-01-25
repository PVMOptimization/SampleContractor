import { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Clock, CreditCard, Send, AlertCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function ContactForm() {
  const { ref, isVisible } = useScrollAnimation();
  const nameInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    description: '',
    contactMethod: 'phone',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (isVisible && nameInputRef.current) {
      setTimeout(() => nameInputRef.current?.focus(), 300);
    }
  }, [isVisible]);

  const services = [
    'Kitchen Remodeling',
    'Bathroom Renovation',
    'Home Addition',
    'Flooring',
    'Painting',
    'Roofing',
    'Deck/Patio',
    'Electrical',
    'Plumbing',
    'HVAC',
    'Emergency Repair',
    'Other',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        description: '',
        contactMethod: 'phone',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact-form" ref={ref} className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Get Your Free Estimate Today
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            Most estimates provided within 24 hours
          </p>
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary px-6 py-3 rounded-full text-secondary font-bold">
            <AlertCircle className="w-5 h-5" />
            Limited slots available this month - Call now to secure yours!
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Your Estimate</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  ref={nameInputRef}
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-4 text-base sm:text-lg border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-4 text-base sm:text-lg border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-4 text-base sm:text-lg border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Needed *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-4 text-base sm:text-lg border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                >
                  <option value="">Select a service...</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-4 text-base sm:text-lg border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Preferred Contact Method
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="phone"
                      checked={formData.contactMethod === 'phone'}
                      onChange={handleChange}
                      className="w-4 h-4 text-primary focus:ring-primary"
                    />
                    <span className="ml-2 text-gray-700">Phone</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="email"
                      checked={formData.contactMethod === 'email'}
                      onChange={handleChange}
                      className="w-4 h-4 text-primary focus:ring-primary"
                    />
                    <span className="ml-2 text-gray-700">Email</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-secondary hover:bg-orange-600 text-white px-8 py-5 rounded-lg font-bold text-xl transition-all hover:scale-110 shadow-lg hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-6 h-6" />
                    GET MY FREE ESTIMATE
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-success/10 border border-success rounded-lg text-success font-semibold text-center">
                  Thank you! We'll contact you within 24 hours.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-100 border border-red-400 rounded-lg text-red-700 font-semibold text-center">
                  Something went wrong. Please call us at (555) 123-4567.
                </div>
              )}
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-primary text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Clock className="w-8 h-8" />
                Business Hours
              </h3>
              <div className="space-y-3 text-lg">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-semibold">7:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-semibold">8:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-semibold">Emergency Only</span>
                </div>
                <div className="border-t border-white/20 pt-4 mt-4">
                  <a
                    href="tel:5551234567"
                    className="text-secondary hover:text-orange-400 font-bold text-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-6 h-6" />
                    24/7 Emergency: (555) 123-4567
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-700">Phone</div>
                    <a href="tel:5551234567" className="text-lg text-primary hover:text-secondary">
                      (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-700">Email</div>
                    <a href="mailto:info@premierservices.com" className="text-lg text-primary hover:text-secondary">
                      info@premierservices.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-700">Address</div>
                    <div className="text-lg text-gray-600">
                      123 Main St<br />Austin, TX 78701
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-success to-green-600 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <CreditCard className="w-8 h-8" />
                Payment Options
              </h3>
              <p className="text-lg mb-4">We accept:</p>
              <ul className="space-y-2 text-lg">
                <li>✓ Cash</li>
                <li>✓ Check</li>
                <li>✓ All Major Credit Cards</li>
                <li>✓ Financing Available</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
