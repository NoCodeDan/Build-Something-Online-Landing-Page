/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        warmWhite: '#FAFAF8',
        beige: {
          50: '#F8F6F3',
          100: '#F2EFE9',
          200: '#E8E3D8',
          300: '#DDD5C7',
        },
        sand: '#E8E3D8',
        charcoal: '#1A1A1A',
        warmOrange: {
          400: '#E77849',
          500: '#DB6B3F',
          600: '#C85E37',
        },
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '28px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '14': '56px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
        '28': '112px',
        '32': '128px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
