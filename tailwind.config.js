/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        azure: '#00A8E8',
        sand: '#F3F4F6',
        tidal: '#2E8B57',
        gold: '#D4AF37',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        lagoon: '0 20px 60px -20px rgba(0, 168, 232, 0.25)',
      },
    },
  },
  plugins: [],
}
