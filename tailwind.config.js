/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00A8E8',
          50: '#E5F7FF',
          100: '#CCF0FF',
          200: '#99E1FF',
          300: '#66D2FF',
          400: '#33C3FF',
          500: '#00A8E8',
          600: '#0087BA',
          700: '#00668C',
          800: '#00445E',
          900: '#002330',
        },
        secondary: {
          DEFAULT: '#F3F4F6',
          50: '#FFFFFF',
          100: '#F9FAFB',
          200: '#F3F4F6',
          300: '#E5E7EB',
          400: '#D1D5DB',
          500: '#9CA3AF',
          600: '#6B7280',
          700: '#4B5563',
          800: '#374151',
          900: '#1F2937',
        },
        accent: {
          DEFAULT: '#2E8B57',
          50: '#E8F5ED',
          100: '#D1EBDB',
          200: '#A3D7B7',
          300: '#75C393',
          400: '#47AF6F',
          500: '#2E8B57',
          600: '#256F46',
          700: '#1C5335',
          800: '#133823',
          900: '#0A1C12',
        },
        premium: {
          DEFAULT: '#D4AF37',
          50: '#FBF8EC',
          100: '#F7F1D9',
          200: '#EFE3B3',
          300: '#E7D58D',
          400: '#DFC767',
          500: '#D4AF37',
          600: '#AA8C2C',
          700: '#7F6921',
          800: '#554616',
          900: '#2A230B',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        'display-1': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'display-2': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'scale-in': 'scaleIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
