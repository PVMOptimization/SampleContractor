import { MapPin } from 'lucide-react';

export default function ServiceArea() {
  const cities = [
    'Austin',
    'Round Rock',
    'Cedar Park',
    'Pflugerville',
    'Georgetown',
    'Lakeway',
    'Bee Cave',
    'Leander',
    'Hutto',
    '+ 50-mile radius',
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <MapPin className="w-16 h-16 text-secondary" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Proudly Serving Austin & Surrounding Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            We provide expert contracting services throughout the greater Austin metropolitan area, including:
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto mb-12">
          {cities.map((city, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow border border-gray-200"
            >
              <div className="text-lg font-semibold text-primary">{city}</div>
            </div>
          ))}
        </div>

        <div className="text-center bg-white rounded-xl p-8 shadow-md max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-4">
            <span className="font-bold text-secondary">Don't see your city?</span> Call us - we likely serve your area!
          </p>
          <a
            href="tel:5551234567"
            className="inline-block text-2xl font-bold text-primary hover:text-secondary transition-colors"
          >
            (555) 123-4567
          </a>
        </div>
      </div>
    </section>
  );
}
