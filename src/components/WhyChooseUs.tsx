import { Phone, Award, Shield, DollarSign, Wrench } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      title: '15+ Years of Proven Excellence',
      description: [
        'Completed 2,500+ projects',
        '98% customer satisfaction rate',
        'Trusted by Austin families since 2009',
      ],
      icon: <Award className="w-16 h-16 text-secondary" />,
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800',
    },
    {
      title: 'Licensed & Fully Insured',
      description: [
        'TECL #12345',
        '$2M liability coverage',
        'Workers comp insured',
      ],
      icon: <Shield className="w-16 h-16 text-success" />,
      image: 'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?q=80&w=800',
    },
    {
      title: 'Transparent Pricing',
      description: [
        'Free detailed estimates',
        'No hidden fees',
        'Price match guarantee',
      ],
      icon: <DollarSign className="w-16 h-16 text-primary" />,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800',
    },
    {
      title: 'Quality Workmanship',
      description: [
        'Lifetime warranty on workmanship',
        'Top-grade materials only',
        'Clean, professional crews',
      ],
      icon: <Wrench className="w-16 h-16 text-secondary" />,
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Premier Home Services?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference of working with Austin's most trusted contractors
          </p>
        </div>

        <div className="space-y-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 lg:gap-12 items-center`}
            >
              <div className="flex-1">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                />
              </div>

              <div className="flex-1">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  {feature.title}
                </h3>
                <ul className="space-y-4">
                  {feature.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-success text-2xl flex-shrink-0">✓</span>
                      <span className="text-lg text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="tel:5551234567"
            className="inline-flex items-center gap-3 bg-secondary hover:bg-orange-600 text-white px-12 py-5 rounded-lg font-bold text-xl transition-all hover:scale-105 shadow-lg"
          >
            <Phone className="w-6 h-6" />
            CALL (555) 123-4567 FOR FREE ESTIMATE
          </a>
        </div>
      </div>
    </section>
  );
}
