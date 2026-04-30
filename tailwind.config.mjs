/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#00BCD4',
          dark: '#0097A7',
          glow: 'rgba(0,188,212,0.25)',
        },
        dark: {
          DEFAULT: '#111111',
          2: '#181818',
          3: '#222222',
        },
        black: '#0A0A0A',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        'hero': 'clamp(2.6rem, 4.5vw, 4rem)',
        'section': 'clamp(1.8rem, 2.8vw, 2.4rem)',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'blobFloat 8s ease-in-out infinite',
        'bar-grow': 'barGrow 1s ease both',
        'fade-up': 'fadeUp 0.6s ease both',
      },
      keyframes: {
        blobFloat: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(20px,-30px) scale(1.05)' },
        },
        barGrow: {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
