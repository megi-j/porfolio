/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        black01: "#151515",
        black02: "#242424",
        white: "#fff",
        grey: "#D9D9D9",
        green: "#4EE1A0",
      },
      fontFamily: {
        font: "Space Grotesk",
      },
    },
  },
  plugins: [],
};
