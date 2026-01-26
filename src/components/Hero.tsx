import { Phone, FileText } from 'lucide-react';

export default function Hero() {
  const scrollToForm = () => {
    document
      .getElementById('contact-form')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[100svh] sm:min-h-[700px] flex items-start sm:items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000)',
        }}
      >
        <div className="absolute inset-0 bg-primary/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in pt-24 sm:pt-0">
        {/* Badge */}
        <div className="inline-block bg-secondary/20 border-2 border-secondary px-4 py-2 rounded-full text-white font-bold mb-6">
          🏆 BBB A+ Rated • Family Owned Since 2009
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Premier Home Services
          <br />
          <span className="text-secondary">
            Emergency Repairs Within 24 hours
          </span>
        </h1>

        {/* Trust bullets */}
        <div className="flex flex-wrap justify-center gap-3 text-white text-base sm:text-xl mb-8">
          <span>✓ Licensed</span>
          <span className="hidden sm:inline">•</span>
          <span>✓ $2M Insured</span>
          <span className="hidden sm:inline">•</span>
          <span>✓ 15+ Years</span>
          <span className="hidden sm:inline">•</span>
          <span>✓ Free Estimates</span>
        </div>
        <span className="font-bold text-secondary">⏱️10 Spots Availible for Februrary Projects:</span>
        <div>
          <div>
          </div>
          
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <a
            href="tel:5551234567"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-secondary text-white px-8 py-5 rounded-lg font-bold text-lg sm:text-xl shadow-xl transition-transform sm:hover:scale-105"
          >
            <Phone className="w-6 h-6" />
            CALL NOW: (555) 123-4567
          </a>

          <button
            onClick={scrollToForm}
            className="w-full sm:w-auto flex items-center justify-center gap-3 border-2 border-white text-white px-8 py-5 rounded-lg font-bold text-lg sm:text-xl transition-colors sm:hover:bg-white/10"
          >
            <FileText className="w-6 h-6" />
            Get Free Estimate
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-white pb-12">
          <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl font-bold text-secondary">⭐ 4.9</div>
            <div className="text-sm font-semibold">500+ Reviews</div>
          </div>
          <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl font-bold text-secondary">2,500+</div>
            <div className="text-sm font-semibold">Projects</div>
          </div>
          <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl font-bold text-secondary">98%</div>
            <div className="text-sm font-semibold">Satisfaction</div>
          </div>
          <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg p-4 col-span-2 sm:col-span-1">
            <div className="text-3xl font-bold text-secondary">⚡</div>
            <div className="text-sm font-semibold">Same-Day Service</div>
          </div>
        </div>
      </div>
    </section>
  );
}
