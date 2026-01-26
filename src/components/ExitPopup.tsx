// src/components/ExitPopup.tsx
import { useEffect, useState } from 'react';

const ExitPopup: React.FC = () => {
  const [show, setShow] = useState(false);

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

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">
          Wait! Don’t Leave Yet
        </h2>
        <p className="mb-6">
          Get 10% off your first project when you book today
        </p>

        <button
          className="bg-blue-600 text-white px-6 py-3 rounded w-full"
          onClick={() => {
            console.log('Exit popup CTA clicked');
          }}
        >
          Claim Your Discount
        </button>

        <button
          onClick={() => setShow(false)}
          className="mt-4 text-sm text-gray-500"
        >
          No thanks
        </button>
      </div>
    </div>
  );
};

export default ExitPopup;
