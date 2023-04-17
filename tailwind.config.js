/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        carnation: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecacb",
          300: "#fca5a6",
          400: "#f85f61",
          500: "#f04345",
          600: "#dd2527",
          700: "#ba1b1d",
          800: "#9a1a1c",
          900: "#801c1d",
          950: "#450a0b",
        },
        champagne: {
          50: "#fdf6ef",
          100: "#fae7d2",
          200: "#f6d3b2",
          300: "#efb582",
          400: "#e88d4f",
          500: "#e26f2d",
          600: "#d45722",
          700: "#b0421e",
          800: "#8c3620",
          900: "#712e1d",
          950: "#3d150d",
        },
      },
      fontFamily: {
        rubik: ["var(--font-rubik), cursive"],
      },
    },
  },
  plugins: [],
};
