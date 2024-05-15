/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightgray: '#D9D9D9',
        lightorange: '#F3781F',
        lightgreen: '#A3F024',
        lightblue: '#D4E5F3'
      },
      screens: {
        'sm': '640px', // Media query para pantallas pequeñas
        'md': '768px', // Media query para pantallas medianas
        'lg': '1024px', // Media query para pantallas grandes
        'xl': '1280px', // Media query para pantallas extra grandes
      },
    },
  },
  plugins: [
    ('daisyui'),
  ],
}

