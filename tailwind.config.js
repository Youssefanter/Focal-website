/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      ubu: "Ubuntu , sans-serif",
    },
    extend: {
      colors: {
        navGrey: "hsl(0, 0%, 16%)",
        navText: "hsl(0, 0%, 81%)",
        yellowButton: "hsl(64, 100%, 60%)",
        hoverYellowButton: "hsl(63, 84%, 56%)",
      },
    },
  },
  plugins: [],
};
