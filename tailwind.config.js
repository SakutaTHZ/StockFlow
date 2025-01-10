/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideRight: {
          '0%': { transform: 'translateX(-100px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideLeft: {
          '0%': { transform: 'translateX(100px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        appear: {
          '0%': { transform: 'scale(.9)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        move1: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(200px, -50px)' },
          '50%': { transform: 'translate(-200px, 50px)' },
          '75%': { transform: 'translate(50px, -200px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        move2: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(-50px, 200px)' },
          '50%': { transform: 'translate(200px, -200px)' },
          '75%': { transform: 'translate(-200px, 50px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        dropDown: {
          '0%': { transform: 'translateY(-30px) scale(.8)', opacity: 0 },
          '100%': { transform: 'translateY(0) scale(1)', opacity: 1 },
        },
      },
      animation: {
        slideUp: 'slideUp 0.6s ease-out',
        slideDown: 'slideDown 0.6s ease-out',
        dropDown: 'dropDown 0.4s ease-in-out',
        slideRight: 'slideRight 0.6s ease-out',
        slideLeft: 'slideLeft 0.6s ease-out',
        appear: 'appear 0.6s ease-out',
        moveCircle1: 'move1 15s infinite alternate ease-in-out',
        moveCircle2: 'move2 25s infinite alternate ease-in-out',
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.animation-alternate': { 'animation-direction': 'alternate' },
      });
    }),
  ],
}