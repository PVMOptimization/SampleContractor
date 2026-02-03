// src/components/TrustindexWidget.tsx
import { useEffect, useRef } from 'react';

const TrustindexWidget: React.FC = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.trustindex.io/loader.js?2761049635269637e4269482259';
    script.defer = true;
    script.async = true;

    if (widgetRef.current) {
      widgetRef.current.appendChild(script);
    }

    return () => {
      if (widgetRef.current && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Trusted by Our Customers
        </h2>
        <div ref={widgetRef}></div>
      </div>
    </section>
  );
};

export default TrustindexWidget;
