// Importando os módulos necessários usando require
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'max': '640px'},
        'md': '768px',
        'lg': '1024px',
        'max-xl': {'max' :'1280px'},
        'xl': '1280px',
        '2xl': '1800px',
        '3xl': '2480px',
      }
    },
  },
  plugins: [
    tailwindcss,
    autoprefixer,
  ],
};