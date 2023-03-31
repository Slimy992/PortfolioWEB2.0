const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      screens: {
        'xs': { 'raw': '(min-width: 535px)' },
        'lgplus': { 'raw': '(min-width: 1148px)' },
      },
      animation: {
        'spin-slow': 'spin 60s linear infinite',
      }
    },
  },
  plugins: [require('tailwind-hamburgers')],
};
