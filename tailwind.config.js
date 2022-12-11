/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './app/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: '"Inter", sans-serif',
        caveat: '"Caveat", sans-serif',
      },
    },
  },
  plugins: [],
};
