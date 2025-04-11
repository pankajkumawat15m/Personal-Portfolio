/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1a1a1a', // Deep dark background
        accent: '#ff6200', // Vibrant orange
        light: '#ffffff', // White text
        gray: '#4a4a4a', // Gray for secondary text
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

