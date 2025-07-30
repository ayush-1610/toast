/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Bw Gradual', 'system-ui', 'sans-serif'],
    },
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
      colors: {
        primary: '#111217', // Space gray (main accent/background)
        secondary: '#23272F', // Darker gray (nav/footer)
        accent: '#FFFFFF', // White for highlights/buttons
        neutral: '#F5F6FA', // Light gray canvas
        black: '#000000',
        gray: {
          50: '#F5F6FA',
          900: '#111217',
        },
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
      },
      boxShadow: {
        card: '0 4px 24px 0 rgba(35, 39, 47, 0.08)',
      },
    },
  },
  plugins: [],
};