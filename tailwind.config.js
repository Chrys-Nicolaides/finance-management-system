const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: [
        "-apple-system",
        // "system-ui",
        "BlinkMacSystemFont",
        "-apple-system",
        "Helvetica",
        "Roboto",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
      ],
      body: ["Source Sans Pro", "Roboto"],
    },
    extend: {
      fontSize: {
        xxs: ".625rem",
        "5xl": "2.5rem",
      },
      strokeWidth: {
        3: "3",
        4: "4",
        5: "5",
      },
      colors: {
        teal: colors.teal,
        orange: colors.orange,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
