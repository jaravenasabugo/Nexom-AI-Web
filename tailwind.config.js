/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'monospace'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
      colors: {
        'primary-dark': '#000018',
        'primary-blue': '#1E1CA1',
        'accent-purple': '#4B32FF',
        'accent-blue': '#2784FA',
        'light-blue': '#04CFFB',
        'purple-alt': '#5027FE',
        'purple-deep': '#741FFF',
        'blue-alt': '#1359FF',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-30px) translateX(20px)' },
        },
        twinkle: {
          '0%,100%': { opacity: '0.2' },
          '50%': { opacity: '1' },
        },
        shooting: {
          '0%': { top: '-10%', left: '80%', opacity: '0' },
          '10%': { opacity: '1' },
          '50%': { top: '120%', left: '-20%', opacity: '0' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'float-12': 'float 12s ease-in-out infinite',
        'float-15': 'float 15s ease-in-out infinite',
        'float-18': 'float 18s ease-in-out infinite',
        twinkle: 'twinkle 3s ease-in-out infinite',
        shooting: 'shooting 10s linear infinite',
      },
    },
  },
  plugins: [],
};
