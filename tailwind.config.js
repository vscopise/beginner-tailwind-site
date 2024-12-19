/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      colors : {
        'violeta': '#000000'
      }
    },
  },
  plugins: [],
}

