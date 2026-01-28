// src/components/StickyCTA.tsx
import React from "react";

const StickyCTA: React.FC = () => {
  return (
    <div
      className="
        fixed bottom-0 left-0 right-0 z-40
        bg-gradient-to-r from-[#1e3b8a] to-[#2563eb]
        text-white
        px-4 py-4
        shadow-2xl border-t-2 border-white/10
        safe-area-inset-bottom
      "
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Text */}
        <span className="text-lg font-semibold text-center sm:text-left tracking-tight">
          Ready to transform your space?
        </span>

        {/* Buttons */}
        <div className="flex gap-2 justify-start sm:justify-end -ml-2 sm:ml-0">
          <a
            href="tel:5551234567"
            className="
              bg-[#ff6b36] hover:bg-[#ff5722]
              text-white
              px-4 py-2 sm:px-6 sm:py-2.5
              rounded-lg
              font-bold text-xs sm:text-sm
              shadow-lg hover:shadow-xl
              transition-all duration-200
              active:scale-95
              whitespace-nowrap
            "
          >
            📞 Call Now
          </a>

          <a
            href="#contact"
            className="
              border-2 border-white
              text-white hover:bg-white hover:text-[#1e3b8a]
              px-4 py-2 sm:px-6 sm:py-2.5
              rounded-lg
              font-semibold text-xs sm:text-sm
              transition-all duration-200
              active:scale-95
              whitespace-nowrap
            "
          >
            Free Estimate
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
