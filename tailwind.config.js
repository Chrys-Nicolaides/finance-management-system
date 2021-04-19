const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: [
        "-apple-system",
        "BlinkMacSystemFont",
        "-apple-system",
        "Roboto",
        "Helvetica",
        "sans-serif",
        "Apple Color Emoji",
      ],
      body: [
        "-apple-system",
        "BlinkMacSystemFont",
        "-apple-system",
        "Roboto",
        "Helvetica",
      ],
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
        indigo: { bright: "#99AAFF" },
      },
    },
  },
  variants: {
    extend: {
      textColor: ["odd", "even"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
