/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
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
    },
  },
  plugins: [],
};