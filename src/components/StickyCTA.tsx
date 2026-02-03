import React, { useState, useEffect } from "react";
import { Phone, FileText, X } from "lucide-react";

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isDismissed || !isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 
                animate-[slideUp_0.4s_ease-out]
                safe-area-inset-bottom"
    >
      {/* Gradient Background with Blur */}
      <div className="relative bg-gradient-to-r from-primary via-dark to-primary 
                    backdrop-blur-md border-t-2 border-secondary/40
                    shadow-[0_-10px_40px_rgba(0,0,0,0.3)]">
        
        {/* Animated Top Border */}
        <div className="absolute top-0 left-0 w-full h-0.5 
                      bg-gradient-to-r from-transparent via-secondary to-transparent 
                      animate-pulse" />

        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            
            {/* Text with Icon */}
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="hidden sm:flex w-10 h-10 rounded-full 
                            bg-gradient-to-br from-secondary to-accent
                            items-center justify-center flex-shrink-0
                            shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                <Phone className="w-5 h-5 text-white animate-pulse" />
              </div>
              <div>
                <span className="block text-white font-heading font-bold text-lg sm:text-xl">
                  Ready to Transform Your Space?
                </span>
                <span className="block text-secondary text-sm font-medium">
                  10 February spots remaining • Free estimates
                </span>
              </div>
            </div>

            {/* Premium CTA Buttons */}
            <div className="flex gap-3 justify-center sm:justify-end flex-wrap sm:flex-nowrap">
              
              {/* Primary CTA - Call Now */}
              <a
                href="tel:5551234567"
                className="flex items-center gap-2 
                         bg-gradient-to-r from-secondary to-accent
                         text-primary font-bold px-6 py-3 rounded-xl
                         shadow-[0_8px_20px_rgba(212,175,55,0.3)]
                         hover:shadow-[0_12px_30px_rgba(212,175,55,0.5)]
                         hover:scale-105 active:scale-95
                         transition-all duration-300
                         text-sm sm:text-base whitespace-nowrap"
              >
                <Phone className="w-5 h-5" />
                <span className="font-heading">555-123-4567</span>
              </a>

              {/* Secondary CTA - Get Estimate (Desktop) */}
              <a
                href="#contact-form"
                className="hidden sm:flex items-center gap-2
                         border-2 border-secondary text-secondary
                         hover:bg-secondary hover:text-primary
                         px-6 py-3 rounded-xl font-bold
                         transition-all duration-300
                         hover:scale-105 active:scale-95
                         text-sm whitespace-nowrap
                         backdrop-blur-sm bg-secondary/5"
              >
                <FileText className="w-5 h-5" />
                Free Estimate
              </a>

              {/* Dismiss Button */}
              <button
                onClick={() => setIsDismissed(true)}
                className="hidden sm:flex w-10 h-10 items-center justify-center
                         rounded-lg border-2 border-white/20 text-white/60
                         hover:border-secondary/40 hover:text-secondary
                         transition-all duration-300 hover:scale-110
                         backdrop-blur-sm bg-white/5"
                aria-label="Dismiss banner"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Glow Effect */}
        <div className="absolute -bottom-px left-0 w-full h-px 
                      bg-gradient-to-r from-transparent via-secondary/50 to-transparent 
                      blur-sm" />
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default StickyCTA;
