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
    fontSize: {
      'xs' : ['12px','12px'],
      sm : ['16px','16px'],
      base: ['20px','20px'],
      'baseplus' :  ['24px','24px'],
      lg: ['28px','28px'],
      'lgplus' :  ['32px','32px'],
      xl : ['36px','36px'],
      'xlplus' : ['40px','40px'],
      '2xl': ['44px','44px'],
      '2xlplus': ['52px','52px'],
      '3xl': ['82px','82px'],
      '4xl': ['133px','133px'],
    },
    screens: {
      'xs': '535px',
      'sm': '640px',
      'smplus': '680px',
      'md': '768px',
      'mdplus': '920px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'primary-60': '#18181b',
        'secondary-30': '#FFFFFF',
        'action-10': '#dc2626',
      },
      keyframes :{
        dropDown : {
          '0%' : {	opacity: '0', transform: 'translateY(-100%)'},
          '100%' : { opacity: '1', transform: 'translateY(0)'},
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        slideDown: {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'spin-slow': 'spin 60s linear infinite',
        'drop-down' : 'dropDown 0.7s ease 0s 1 normal forwards',
        'fadeIn': "fadeIn 2s ease-in forwards",
        'slideDown': 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        'slideUp': 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      }
    },
  },
  plugins: [
    require('tailwind-hamburgers'),
  ],
};
