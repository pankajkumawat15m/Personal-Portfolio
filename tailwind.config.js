/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // 👈 Enable dark mode using class strategy
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: 'rgb(var(--bg-dark) / <alpha-value>)',
        offset: 'rgb(var(--bg-offset) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        light: 'rgb(var(--text-light) / <alpha-value>)',
        gray: 'rgb(var(--text-gray) / <alpha-value>)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
