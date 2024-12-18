/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': "0 0 50px -12px rgb(0 0 0 / 0.25)",
      },
      colors: {
        green: "#39DB4A",
        white: "#ffffff",
        black: "#000000",
        para: "#4A4A4A",
        navbar: "#272727",
        red: "#FF6868",
        popular: "#C1F1C6",
        social: "#EDFFEF",
      },
    },
  },
  plugins: [],
};
