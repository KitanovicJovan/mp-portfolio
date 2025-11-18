/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          900: '#3730a3',
        },
        secondary: '#06b6d4',
      },

      fontFamily: {
        heading: ['Inter', ...defaultTheme.fontFamily.sans],
        body: ['Roboto', ...defaultTheme.fontFamily.sans],
      },

      fontSize: {
        'xs-custom': '0.75rem',
        'sm-custom': '0.875rem',
        'base-custom': '1rem',
        'lg-custom': '1.125rem',
        'xl-custom': '1.25rem',
        '2xl-custom': '1.5rem',
        '3xl-custom': '1.875rem',
        '4xl-custom': '2.25rem',
      },
    },
  },
  plugins: [],
};
