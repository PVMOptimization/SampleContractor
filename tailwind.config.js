/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a',
        secondary: '#ff6b35',
        success: '#10b981',
      },
      fontSize: {
        // Mobile-first font sizes
        'hero-mobile': '2rem',      // 32px for mobile hero
        'hero-desktop': '3rem',     // 48px for desktop hero
        'cta-mobile': '1.125rem',   // 18px for mobile CTAs
        'cta-desktop': '1.25rem',   // 20px for desktop CTAs
      },
      spacing: {
        'safe': 'max(1rem, env(safe-area-inset-left))', // For notch phones
      },
    },
  },
  plugins: [],
};
