/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#39DB4A",
        white: "#ffffff",
        black: "#000000",
        para: "#4A4A4A",
        navbar: "#272727",
        red: "#FF6868",
      },
    },
  },
  plugins: [],
};
