/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        DarkBlue: "hsl(209 23% 22%)", //(Dark Mode Elements)
        VeryDarkBlue: "hsl(207 26% 17%)", //(Dark Mode Background)
        VeryDarkBlueLT: "hsl(200 15% 8%)", //(Light Mode Text)
        DarkGray: "hsl(0 0% 52%)", //(Light Mode Input)
        VeryLightGray: "hsl(0 0% 98%)", //(Light Mode Background)
        White: "hsl(0 0% 100%)", //(Dark Mode Text & Light Mode Elements)
      },
      fontFamily: {
        Nunito: ["Nunito sans", "sans-serif"]
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}

