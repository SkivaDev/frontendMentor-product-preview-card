/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ['Fraunces', 'sans-serif'],
      },
      backgroundColor: {
        'grayish-blue': 'hsl(228, 12%, 48%)',
        'dark-cyan': 'hsl(158, 36%, 37%)',
        'hover-cyan': 'hsl(158, 38%, 25%)',
        'dark-blue': 'hsl(212, 21%, 14%)',
      },
      textColor: {
        'grayish-blue': 'hsl(228, 12%, 48%)',
        'dark-cyan': 'hsl(158, 36%, 37%)',
        'dark-blue': 'hsl(212, 21%, 14%)',
      },
    },
  },
  plugins: [],
}

