module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      gridTemplateRows: {
        layout: "130px 1fr minmax(100px, max-content)",
      },
      backgroundImage: {
        radial:
          "radial-gradient(circle, hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
      },
      fontFamily: {
        barlow: ["Barlow Semi Condensed", "sans-serif"],
      },
      boxShadow: {
        rock: "inset 0px 6px rgb(211, 211, 211), 0px 7px hsl(349, 66%, 44%)",
        scissors: "inset 0px 6px rgb(211, 211, 211), 0px 7px hsl(39, 86%, 42%)",
        paper: "inset 0px 6px rgb(211, 211, 211), 0px 7px hsl(230, 56%, 48%)",
      },
      colors: {
        rock: "hsl(349, 71%, 52%)",
        scissors: "hsl(39, 89%, 49%)",
        paper: "hsl(230, 89%, 62%)",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1124px",
        xl: "1124px",
        lg: "1124px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
