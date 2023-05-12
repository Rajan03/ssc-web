/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './modules/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E5DAFF',
          100: '#D3C2FF',
          200: '#BFAAFF',
          300: '#AB91FF',
          400: '#9569FF',
          500: '#7F41FF',
          600: '#5320C6',
          700: '#4D1DB3',
          800: '#35117A',
          900: '#280D5D',
        },
        secondary: '#F2F2F2',
        dark: '#141414',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      lineHeight: {
        xl: '2.5',
        lg: '2',
        md: '1.5',
        sm: '1.25',
        base: '1',
      },
    },
  },
  plugins: [],
};
