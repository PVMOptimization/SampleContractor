import { Phone, FileText, Star, Shield, Award } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll('.scroll-animate');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const scrollToForm = () => {
    document
      .getElementById('contact-form')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-dark to-primary"
    >
      {/* Premium Background with Overlay Pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000)',
          }}
        />
        {/* Gradient Mesh Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/90 via-dark/80 to-primary/95" />
        
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(#D4AF37 1px, transparent 1px),
                            linear-gradient(90deg, #D4AF37 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Animated Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        
        {/* Premium Badge */}
        <div className="scroll-animate text-center mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full 
                        bg-gradient-to-r from-secondary/20 to-accent/20 
                        border-2 border-secondary/40 backdrop-blur-md
                        shadow-[0_0_30px_rgba(212,175,55,0.3)]">
            <Award className="w-5 h-5 text-secondary" />
            <span className="text-white font-bold text-sm tracking-wider">
              BBB A+ RATED • FAMILY OWNED SINCE 2009
            </span>
            <Award className="w-5 h-5 text-secondary" />
          </div>
        </div>

        {/* Hero Headline - MUCH BIGGER */}
        <div className="scroll-animate text-center mb-10 space-y-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl 
                       font-heading font-black text-white 
                       leading-[1.1] tracking-tight
                       drop-shadow-2xl">
            Emergency Roof Repairs
            <br />
            <span className="text-transparent bg-clip-text 
                           bg-gradient-to-r from-secondary via-yellow-400 to-secondary
                           bg-[length:200%_100%] animate-[gradient_3s_ease_infinite]
                           drop-shadow-[0_0_30px_rgba(212,175,55,0.6)]">
              Same Day Service
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-secondary/90 font-heading font-light 
                      max-w-3xl mx-auto tracking-wide">
            Licensed & Insured • Serving 500+ Austin Homes Since 2009
          </p>
        </div>

        {/* Trust Indicators with Icons */}
        <div className="scroll-animate flex flex-wrap justify-center gap-6 mb-12">
          {[
            { icon: Shield, text: 'Licensed' },
            { icon: Award, text: '$2M Insured' },
            { icon: Star, text: '15+ Years' },
            { icon: FileText, text: 'Free Estimates' },
          ].map((item, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-2 px-4 py-2 rounded-lg
                       bg-white/5 backdrop-blur-sm border border-secondary/30
                       hover:bg-secondary/10 hover:border-secondary/50 
                       transition-all duration-300 hover:scale-110"
            >
              <item.icon className="w-5 h-5 text-secondary" />
              <span className="text-white font-semibold">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Urgency Banner */}
        <div className="scroll-animate text-center mb-10">
          <div className="inline-block px-6 py-3 rounded-xl 
                        bg-gradient-to-r from-accent to-secondary
                        shadow-[0_0_30px_rgba(212,175,55,0.4)]
                        animate-glow">
            <span className="text-primary font-bold text-lg flex items-center gap-2">
              ⏱️ <span className="font-heading">10 Spots Available for February Projects</span>
            </span>
          </div>
        </div>

        {/* Premium CTAs */}
        <div className="scroll-animate flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <a
            href="tel:5551234567"
            className="btn-primary flex items-center gap-3 w-full sm:w-auto"
          >
            <Phone className="w-6 h-6" />
            <span className="font-heading">CALL NOW: (555) 123-4567</span>
          </a>

          <button
            onClick={scrollToForm}
            className="btn-secondary flex items-center gap-3 w-full sm:w-auto"
          >
            <FileText className="w-6 h-6" />
            <span className="font-heading">Get Free Estimate</span>
          </button>
        </div>

        {/* Premium Stats Cards with Glassmorphism */}
        <div className="scroll-animate grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { icon: '⭐', value: '4.9', label: '500+ Reviews', delay: 'stagger-1' },
            { icon: '🏠', value: '2,500+', label: 'Projects', delay: 'stagger-2' },
            { icon: '💯', value: '98%', label: 'Satisfaction', delay: 'stagger-3' },
            { icon: '⚡', value: '24/7', label: 'Emergency', delay: 'stagger-4' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className={`glass-card-dark p-6 text-center group
                        hover:scale-105 hover:border-secondary/60
                        transition-all duration-300 cursor-pointer
                        shadow-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]
                        fade-in-up ${stat.delay}`}
            >
              <div className="text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-heading font-bold text-secondary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-white/80 font-medium tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full h-24 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#f5f5f5"
          />
        </svg>
      </div>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
