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
    },
  },
  plugins: [],
};
