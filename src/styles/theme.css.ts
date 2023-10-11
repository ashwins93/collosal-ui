import { createTheme } from "@vanilla-extract/css";

export const [theme, vars] = createTheme({
  color: {
    buttonLight: "hsla(0deg 0% 100% / 0.1)",
    cardDark: "hsl(240deg 30% 12%)",
    muted: "hsla(0deg 0% 100% / 0.6)",
  },
});
