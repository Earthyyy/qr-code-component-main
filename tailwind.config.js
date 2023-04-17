/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "primary": "hsl(212, 45%, 89%)",
        "secondary": "hsl(0, 0%, 100%)",
      },
      textColor: {
        "primary": "hsl(218, 44%, 22%)",
        "secondary": "hsl(220, 15%, 55%)",
      },
      screens: {
        "mobile": "375px",
        "desktop": "1440px",
      }
    },
  },
  plugins: [],
}