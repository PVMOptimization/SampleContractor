import { useEffect, useState } from 'react';
import { X, Gift, CheckCircle, Shield, Clock, Star } from 'lucide-react';

const ExitPopup: React.FC = () => {
  const [show, setShow] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem('exit_popup_seen');
    if (hasSeen) return;

    const triggerPopup = () => {
      setShow(true);
      sessionStorage.setItem('exit_popup_seen', 'true');
    };

    // Desktop: mouse leaves top
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) triggerPopup();
    };

    // Mobile: fast scroll up to top
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (lastScrollY > 100 && currentScrollY < 50) {
        triggerPopup();
      }
      lastScrollY = currentScrollY;
    };

    // Mobile + desktop: tab switch / minimize
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        triggerPopup();
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShow(false);
      setIsClosing(false);
    }, 300);
  };

  const handleClaim = () => {
    window.location.href = '#contact-form';
    handleClose();
  };

  if (!show) return null;

  return (
    <>
      {/* Premium Backdrop with Gradient Overlay */}
      <div 
        className={`fixed inset-0 bg-gradient-to-br from-primary/95 via-dark/90 to-primary/95 
                   backdrop-blur-md z-50 transition-opacity duration-500 ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={handleClose}
      >
        {/* Animated Background Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px] animate-pulse" />
      </div>

      {/* Popup Container */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div 
          className={`relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full pointer-events-auto 
                     overflow-hidden transition-all duration-500 ${
            isClosing ? 'scale-90 opacity-0 rotate-3' : 'scale-100 opacity-100 rotate-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Premium Gradient Top Bar with Shimmer Effect */}
          <div className="h-3 bg-gradient-to-r from-secondary via-yellow-400 to-secondary bg-[length:200%_100%] animate-[shimmer_3s_ease_infinite]" />

          {/* Close Button - Premium Style */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center 
                     rounded-full bg-gray-100 hover:bg-secondary/10 border-2 border-gray-200 
                     hover:border-secondary transition-all duration-300 z-10 
                     hover:scale-110 hover:rotate-90 group"
            aria-label="Close popup"
          >
            <X className="w-5 h-5 text-gray-600 group-hover:text-secondary transition-colors" />
          </button>

          {/* Content */}
          <div className="p-8 md:p-12">
            
            {/* Premium Icon with Glow */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-secondary to-accent rounded-full 
                              flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.4)]">
                  <Gift className="w-12 h-12 text-white animate-bounce" />
                </div>
                {/* Pulsing rings */}
                <div className="absolute inset-0 bg-secondary rounded-full animate-ping opacity-20" />
                <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-10" 
                     style={{ animationDelay: '0.5s' }} />
              </div>
            </div>

            {/* Headline - Premium Typography */}
            <h2 className="text-4xl md:text-5xl font-heading font-black text-primary mb-4 text-center leading-tight">
              Wait! Don't Miss This
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                Special Offer 🎁
              </span>
            </h2>

            {/* Discount Badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-block px-8 py-4 rounded-2xl 
                            bg-gradient-to-r from-secondary to-accent
                            shadow-[0_0_30px_rgba(212,175,55,0.4)]
                            transform rotate-2">
                <p className="text-primary font-heading font-black text-3xl md:text-4xl">
                  10% OFF
                </p>
                <p className="text-primary/80 font-bold text-sm">
                  Your First Project
                </p>
              </div>
            </div>

            {/* Subheadline */}
            <p className="text-lg text-gray-600 mb-8 text-center font-medium">
              Limited time offer for new customers only
            </p>

            {/* Premium Benefits List */}
            <div className="mb-10 space-y-4 max-w-lg mx-auto">
              {[
                { icon: Clock, text: 'Free detailed estimate within 24 hours' },
                { icon: Shield, text: 'Licensed & $2M insured professionals' },
                { icon: Star, text: '100% satisfaction guarantee or money back' },
              ].map((benefit, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-secondary/5 to-accent/5
                           border-2 border-secondary/20 hover:border-secondary/40 
                           transition-all duration-300 hover:scale-105"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-accent 
                                flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium leading-relaxed pt-2">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Premium CTA Buttons */}
            <div className="space-y-4">
              <button
                onClick={handleClaim}
                className="w-full bg-gradient-to-r from-secondary via-accent to-secondary 
                         bg-[length:200%_100%] hover:bg-[position:100%_0]
                         text-primary font-heading font-black py-5 px-8 rounded-xl 
                         shadow-[0_10px_40px_rgba(212,175,55,0.4)] 
                         hover:shadow-[0_15px_50px_rgba(212,175,55,0.6)] 
                         transform hover:scale-105 active:scale-95 
                         transition-all duration-300 text-lg md:text-xl
                         border-2 border-accent"
              >
                Claim My 10% Discount Now →
              </button>
              
              <button
                onClick={handleClose}
                className="w-full text-gray-500 hover:text-gray-700 py-3 text-sm font-medium 
                         transition-colors underline decoration-gray-300 hover:decoration-gray-500"
              >
                No thanks, I'll pay full price
              </button>
            </div>

            {/* Trust Badge with Premium Styling */}
            <div className="mt-8 pt-6 border-t-2 border-secondary/20 
                          flex items-center justify-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <span className="text-gray-600 font-medium">
                Offer valid for new customers • Expires in 24 hours
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </>
  );
};

export default ExitPopup;
