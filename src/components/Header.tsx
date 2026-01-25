import { Phone, FileText, Award } from 'lucide-react';

export default function Header() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="bg-primary text-white py-2 text-center text-sm">
        <p className="flex items-center justify-center gap-2 flex-wrap px-4">
          <span className="font-bold text-secondary">🔥 Special Offer:</span>
          <span>Call within 24 hours for 10% off your project</span>
          <span className="hidden sm:inline">•</span>
          <span className="font-semibold">Limited slots this month!</span>
        </p>
      </div>

      <header className="sticky top-0 z-50 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4 gap-4">
            <div className="flex-shrink-0">
              <h1 className="text-xl sm:text-2xl font-bold text-primary flex items-center gap-2">
                <Award className="w-6 h-6 text-secondary" />
                <span className="hidden sm:inline">Premier Home Services</span>
                <span className="sm:hidden">Premier</span>
              </h1>
              <p className="text-xs text-gray-600">Licensed & Insured • TECL 12345</p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="tel:5551234567"
                className="flex items-center gap-2 bg-secondary hover:bg-orange-600 text-white px-4 sm:px-6 py-3 rounded-lg font-bold text-base sm:text-xl transition-all hover:scale-105 shadow-lg"
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>(555) 123-4567</span>
              </a>

              <button
                onClick={scrollToForm}
                className="hidden lg:flex items-center gap-2 bg-primary hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-bold text-base transition-all hover:scale-105"
              >
                <FileText className="w-5 h-5" />
                Free Estimate
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
