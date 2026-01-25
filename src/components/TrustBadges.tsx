import { Star, Shield, Zap, CheckCircle, DollarSign, Award, Users, Clock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function TrustBadges() {
  const { ref, isVisible } = useScrollAnimation();

  const badges = [
    {
      icon: <Star className="w-12 h-12 text-secondary" />,
      text: '4.9/5 Stars',
      subtext: '500+ Reviews',
    },
    {
      icon: <Shield className="w-12 h-12 text-success" />,
      text: 'Licensed & Insured',
      subtext: '$2M Coverage',
    },
    {
      icon: <Zap className="w-12 h-12 text-secondary" />,
      text: 'Same-Day Service',
      subtext: 'Available 24/7',
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-success" />,
      text: '100% Satisfaction',
      subtext: 'Guaranteed',
    },
    {
      icon: <DollarSign className="w-12 h-12 text-primary" />,
      text: 'Upfront Pricing',
      subtext: 'No Hidden Fees',
    },
    {
      icon: <Award className="w-12 h-12 text-secondary" />,
      text: 'BBB A+ Rated',
      subtext: 'Accredited',
    },
    {
      icon: <Users className="w-12 h-12 text-success" />,
      text: 'Family Owned',
      subtext: 'Since 2009',
    },
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      text: '15+ Years',
      subtext: 'Experience',
    },
  ];

  return (
    <section ref={ref} className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="mb-3">{badge.icon}</div>
              <div className="font-bold text-gray-900 text-lg">{badge.text}</div>
              <div className="text-sm text-gray-600 font-semibold">{badge.subtext}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
