/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "400px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },

      colors: {
        primary: "rgba(var(--background))",
        secondary: "rgba(var(--secondary))",
        "clr-main": "rgba(var(--main))",
        "clr-two": "rgba(var(--clr-two))",
      },
      transitionTimingFunction: {
        background: "cubic-bezier(0,-1.2, 0.25, 0.48)",
      },
      fontFamily: {
        main: ["SUSE", "sans-serif"],
      },
      width: {
        "1/7": "14.28%",
        "2/7": "28.57%",
        "3/7": "42.86%",
        "4/7": "57.14%",
        "5/7": "71.43%",
        "6/7": "85.71%",
        "7/7": "100%",
      },
    },
  },
  plugins: [],
};
