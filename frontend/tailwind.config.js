/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}","./public/index.html",],
  theme: {
    extend: {
      colors: {
        "NovaStore-red": "#ea2e0e",
      },
    },
  },
  plugins: [],
};
