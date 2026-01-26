// src/components/LoadingScreen.tsx
import { useState, useEffect } from 'react';

const LoadingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) {
          clearInterval(progressInterval);
          return 95;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    // Hide loading screen after page loads
    const handleLoad = () => {
      setProgress(100);
      setTimeout(() => setIsLoading(false), 400);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => {
        window.removeEventListener('load', handleLoad);
        clearInterval(progressInterval);
      };
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1e3b8a 0%, #2563eb 100%)',
      }}
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div 
          className="absolute w-96 h-96 bg-white rounded-full blur-3xl"
          style={{
            top: '-10%',
            left: '-10%',
            animation: 'float 6s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-[#ff6b36] rounded-full blur-3xl"
          style={{
            bottom: '-10%',
            right: '-10%',
            animation: 'float 8s ease-in-out infinite reverse',
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 w-full max-w-md">
        {/* Logo/Brand area - you can replace with actual logo */}
        <div className="mb-8 transform scale-100 animate-pulse">
          <div className="w-20 h-20 mx-auto bg-white rounded-2xl shadow-2xl flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#ff6b36] to-[#ff8c5a] rounded-lg"></div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Sample Contractor
          </h1>
        </div>

        {/* Premium spinner */}
        <div className="relative w-24 h-24 mx-auto mb-8">
          {/* Outer ring */}
          <div 
            className="absolute inset-0 border-4 border-white/20 rounded-full"
          />
          {/* Animated ring */}
          <div 
            className="absolute inset-0 border-4 border-transparent border-t-[#ff6b36] border-r-[#ff6b36] rounded-full"
            style={{
              animation: 'spin 1s cubic-bezier(0.4, 0, 0.2, 1) infinite',
            }}
          />
          {/* Inner glow */}
          <div className="absolute inset-3 bg-gradient-to-br from-[#ff6b36]/20 to-transparent rounded-full blur-md" />
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-xs mx-auto mb-4">
          <div className="h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
            <div 
              className="h-full bg-gradient-to-r from-[#ff6b36] to-[#ff8c5a] rounded-full transition-all duration-300 ease-out shadow-lg"
              style={{ 
                width: `${progress}%`,
                boxShadow: '0 0 20px rgba(255, 107, 54, 0.6)',
              }}
            />
          </div>
          <p className="text-white/80 text-sm mt-3 font-medium">
            {Math.round(progress)}% Complete
          </p>
        </div>

        {/* Loading text with dots animation */}
        <p className="text-white text-lg font-semibold flex items-center justify-center gap-1">
          <span>Preparing your experience</span>
          <span className="flex gap-1">
            <span className="animate-bounce" style={{ animationDelay: '0ms' }}>.</span>
            <span className="animate-bounce" style={{ animationDelay: '150ms' }}>.</span>
            <span className="animate-bounce" style={{ animationDelay: '300ms' }}>.</span>
          </span>
        </p>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
