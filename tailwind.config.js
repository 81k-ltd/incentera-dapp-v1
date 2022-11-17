/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-linear': 'linear-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ["Helvetica Neue"],
      },
    },
  },
  plugins: [],
};
