/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.tsx', './app/components/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        inter: '"Inter", sans-serif',
        caveat: '"Caveat", sans-serif',
      },
      animation: {
        blink: 'blink .7s infinite alternate-reverse',
      },
      keyframes: {
        blink: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      colors: {
        'blog-palette--gray': '#f3f3f3',
        'blog-palette--post': '#fff',
        'blog-palette--block-border': '#e7e7e7',
      },
    },
  },
  plugins: [],
};
