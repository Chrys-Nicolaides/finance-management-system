import colors from "tailwindcss/colors";
import resolveConfig from "tailwindcss/resolveConfig";

const { theme } = resolveConfig({
  theme: {
    colors: {
      red: colors.red,
      indigo: colors.indigo,
      teal: colors.teal,
      blue: colors.blue,
      yellow: colors.yellow,
      orange: colors.orange,
      pink: colors.pink,
      gray: colors.coolGray,
    },
  },
});

export default theme;
