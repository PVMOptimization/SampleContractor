import { Phone } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-16 bg-secondary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl sm:text-2xl text-white/90 mb-8">
          Call now for your free, no-obligation estimate
        </p>

        <a
          href="tel:5551234567"
          className="inline-block text-3xl sm:text-4xl font-bold text-white hover:text-gray-100 transition-colors mb-8"
        >
          (555) 123-4567
        </a>

        <div>
          <a
            href="tel:5551234567"
            className="inline-flex items-center gap-3 bg-white text-primary px-12 py-5 rounded-lg font-bold text-2xl transition-all hover:scale-105 shadow-2xl hover:shadow-3xl"
          >
            <Phone className="w-8 h-8" />
            CALL NOW
          </a>
        </div>

        <p className="mt-8 text-white/80 text-lg">
          Free estimates • Licensed & Insured • Same-day service available
        </p>
      </div>
    </section>
  );
}
