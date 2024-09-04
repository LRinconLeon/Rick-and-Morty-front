/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}', 
  ],
  theme: {
    extend: {
      fontFamily: {
        'rick-and-morty': ['RickAndMortyFont', 'sans-serif'],
      },
      textShadow: {
        'green-border': '0px 0px 2px #00FF00, 1px 1px 2px #00FF00, 1px -1px 2px #00FF00, -1px 1px 2px #00FF00, -1px -1px 2px #00FF00',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
};
