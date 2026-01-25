import { Phone, FileText } from 'lucide-react';

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[600px] sm:h-[700px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000)',
        }}
      >
        <div className="absolute inset-0 bg-primary/85"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
        <div className="inline-block bg-secondary/20 border-2 border-secondary px-4 py-2 rounded-full text-white font-bold mb-6 animate-pulse">
          🏆 BBB A+ Rated • Family Owned & Operated Since 2009
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Premier Home Services
          <br />
          <span className="text-secondary">Expert Contractors You Can Trust</span>
        </h1>

        <div className="flex flex-wrap justify-center gap-4 text-white text-lg sm:text-xl mb-8">
          <span className="flex items-center">✓ Licensed TECL 12345</span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center">✓ $2M Insured</span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center">✓ 15+ Years Experience</span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center">✓ Free Estimates</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a
            href="tel:5551234567"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-secondary hover:bg-orange-600 text-white px-8 py-5 rounded-lg font-bold text-xl transition-all hover:scale-110 hover:shadow-2xl shadow-xl"
          >
            <Phone className="w-7 h-7" />
            CALL NOW: (555) 123-4567
          </a>

          <button
            onClick={scrollToForm}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-5 rounded-lg font-bold text-xl transition-all hover:scale-110"
          >
            <FileText className="w-7 h-7" />
            Get Free Estimate
          </button>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-white">
          <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl sm:text-4xl font-bold text-secondary">⭐ 4.9</div>
            <div className="text-sm font-semibold">500+ Reviews</div>
          </div>
          <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl sm:text-4xl font-bold text-secondary">2,500+</div>
            <div className="text-sm font-semibold">Projects Done</div>
          </div>
          <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl sm:text-4xl font-bold text-secondary">98%</div>
            <div className="text-sm font-semibold">Satisfaction</div>
          </div>
          <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg p-4 col-span-2 sm:col-span-1">
            <div className="text-3xl sm:text-4xl font-bold text-secondary">⚡</div>
            <div className="text-sm font-semibold">Same-Day Service</div>
          </div>
        </div>
      </div>
    </section>
  );
}
