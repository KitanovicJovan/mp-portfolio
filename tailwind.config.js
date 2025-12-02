/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xxs: '375px', // Manji mobilni telefoni
      xs: '480px', // Veći mobilni telefoni
      sm: '640px', // Standardni mali ekrani/Tableti
      md: '768px', // Tableti/Manji laptopovi
      lg: '1024px', // Laptopovi
      xl: '1280px', // Veći laptopovi
      '2xl': '1536px', // Standardni desktop
      uw: '1920px', // Ultra Wide (Full HD)
      '3xl': '2560px', // QHD/Veliki monitori
      '4xl': '3840px', // 4K ekrani
    },

    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          900: '#082f49',
        },
        secondary: {
          DEFAULT: '#10b981',
          500: '#10b981',
          700: '#047857',
        },
        accent: {
          DEFAULT: '#f97316',
          500: '#f97316',
          700: '#ea580c',
        },
      },

      fontFamily: {
        heading: ['Inter', ...defaultTheme.fontFamily.sans],
        body: ['Roboto', ...defaultTheme.fontFamily.sans],
      },

      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
      },
    },
  },
  plugins: [],
};
