/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        hylia: ["hylia-serif", "serif"],
      },
    },
    letterSpacing: {
      logo: "-.035em",
    },
  },
  plugins: [],
};
