/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0098ea",
        secondary: "#17181f",
        medium: "#20212d",
        light: "#30313d",
        main: " #fefefe",
        sub: "#90919d",
      }
    },
  },
  plugins: [],
}