/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#D4AF37',
      },
      fontFamily: {
        sans: ['"Neue Haas Grotesk"', 'Helvetica', 'Arial', 'sans-serif'],
        heading: ['"BW Gradual"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
