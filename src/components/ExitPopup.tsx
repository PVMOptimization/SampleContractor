// src/components/ExitPopup.tsx
import { useEffect, useState } from 'react';

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
    window.location.href = '#contact';
    handleClose();
  };

  if (!show) return null;

  return (
    <>
      {/* Backdrop with blur */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={handleClose}
      />

      {/* Popup container */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div 
          className={`relative bg-white rounded-2xl shadow-2xl max-w-lg w-full pointer-events-auto overflow-hidden transition-all duration-300 ${
            isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Decorative top bar */}
          <div className="h-2 bg-gradient-to-r from-[#1e3b8a] via-[#ff6b36] to-[#1e3b8a]" />

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
            aria-label="Close popup"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="p-8 md:p-10">
            {/* Icon */}
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-[#ff6b36] to-[#ff8c5a] rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                {/* Pulsing ring */}
                <div className="absolute inset-0 bg-[#ff6b36] rounded-full animate-ping opacity-20" />
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3b8a] mb-4 text-center leading-tight">
              Wait! Special Offer 🎁
            </h2>

            {/* Subheadline */}
            <p className="text-lg text-gray-700 mb-2 text-center font-medium">
              Get <span className="text-[#ff6b36] font-bold text-2xl">10% OFF</span> Your First Project
            </p>
            <p className="text-gray-600 mb-8 text-center">
              Limited time offer for new customers only
            </p>

            {/* Benefits list */}
            <div className="mb-8 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#ff6b36]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#ff6b36]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Free detailed estimate within 24 hours</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#ff6b36]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#ff6b36]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Licensed & insured professionals</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#ff6b36]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#ff6b36]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">100% satisfaction guarantee</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleClaim}
                className="w-full bg-[#ff6b36] hover:bg-[#ff5722] text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                Claim My 10% Discount Now
              </button>
              <button
                onClick={handleClose}
                className="w-full text-gray-500 hover:text-gray-700 py-2 text-sm font-medium transition-colors"
              >
                No thanks, I'll pay full price
              </button>
            </div>

            {/* Trust badge */}
            <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-center gap-2 text-sm text-gray-600">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Offer valid for new customers only</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExitPopup;
