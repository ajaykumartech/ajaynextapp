/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        custom: ['mono', 'sans'], // 'Roboto' is the imported font, 'sans' is the default sans-serif fallback
      },
      transitionProperty: {
        'fade': 'opacity',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 3s ease-in-out',
      },
    },
  },
  plugins: [],
}

