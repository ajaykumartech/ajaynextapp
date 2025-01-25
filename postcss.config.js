module.exports = {
  plugins: [
    require('postcss-nesting'), // Nesting should be before Tailwind
    require('tailwindcss'),
    require('autoprefixer')
  ],
};
