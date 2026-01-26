// src/components/StickyCTA.tsx

const StickyCTA: React.FC = () => {
  return (
    <div
      className="
        fixed bottom-0 left-0 right-0 z-40
        bg-[#1e3b8a] text-white
        px-4 py-3
        flex flex-col gap-3
        sm:flex-row sm:items-center sm:justify-between
        safe-area-inset-bottom
      "
    >
      {/* Text */}
      <span className="font-semibold text-center sm:text-left">
        Ready to get started?
      </span>

      {/* Buttons */}
      <div className="flex gap-3 w-full sm:w-auto">
        <a
          href="tel:5551234567"
          className="
            flex-1 sm:flex-none
            bg-[#ff6b36] text-white
            px-5 py-3 rounded-lg
            font-bold text-center
            shadow-md
            active:scale-95 transition
          "
        >
          Call Now
        </a>

        <a
          href="#contact"
          className="
            flex-1 sm:flex-none
            border-2 border-[#ff6b36]
            text-[#ff6b36]
            px-5 py-3 rounded-lg
            font-semibold text-center
            bg-white
            active:scale-95 transition
          "
        >
          Free Estimate
        </a>
      </div>
    </div>
  );
};

export default StickyCTA;
