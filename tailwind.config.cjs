/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
        secondary: ['Aboreto', 'cursive'],
      },
      backgroundImage: {
        texture: "url('/src/assets/griffin.png')",
      },
    },
  },
  plugins: [],
};
