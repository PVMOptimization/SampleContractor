import { Phone, AlertCircle } from 'lucide-react';

export default function EmergencyServices() {
  return (
    <section className="py-16 bg-gradient-to-r from-red-600 via-orange-600 to-secondary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <div className="flex justify-center mb-6 animate-pulse">
            <AlertCircle className="w-20 h-20" />
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            24/7 Emergency Services Available
          </h2>

          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
            Burst pipe? Electrical emergency? Roof leak? We're here when you need us most.
          </p>

          <a
            href="tel:5551234567"
            className="inline-flex items-center gap-3 bg-white text-red-600 px-12 py-6 rounded-lg font-bold text-2xl transition-all hover:scale-105 shadow-2xl hover:shadow-3xl"
          >
            <Phone className="w-8 h-8" />
            CALL NOW FOR EMERGENCY SERVICE: (555) 123-4567
          </a>

          <p className="mt-6 text-lg opacity-90">
            Available 24 hours a day, 7 days a week • Rapid response guaranteed
          </p>
        </div>
      </div>
    </section>
  );
}
