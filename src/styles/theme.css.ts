import { createTheme } from "@vanilla-extract/css";

export const [theme, vars] = createTheme({
  color: {
    buttonLight: "hsl(0 0% 100% / 0.1)",
    cardDark: "hsl(240 30% 12%)",
    muted: "hsl(0 0% 100% / 0.6)",
    green: "hsl(169 97% 54% / 1)",
    primary: "hsl(259 97% 54% / 1)",
    light: "hsl(0 0% 100% / 0.05)",
    lighter: "hsl(0 0% 100% / 0.03)",
  },
});
