/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './app/components/**/*.{ts,tsx}'],
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
