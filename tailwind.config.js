/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom1: ["Architects Daughter", 'sans-serif'],
        custom2:["Sansita Swashed", "system-ui"] // Replace with your font name
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'), // Add this line
  ],
}

