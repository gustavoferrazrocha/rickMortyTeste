/** @type {import('tailwindcss').Config} */
import { tailwindcss, autoprefixer} from 'tailwindcss'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'max': '640px'},
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1800px',
        // => @media (min-width: 1536px) { ... }
        '3xl': '2480px',
      }
    },
  },
  plugins: [
    tailwindcss,
    autoprefixer
  ],
}