/** @type {import('tailwindcss').Config} */
import { defaultTheme } from "tailwindcss/defaultTheme";

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Helvetica Neue',
          ...defaultTheme.fontFamily.sans,
        ]
      }
    },
  },
  plugins: [],
};
