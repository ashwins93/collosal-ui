import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";
import { hero } from "./hero.css";

export const headingSmall = style({
  color: vars.color.green,
  fontWeight: 600,
  letterSpacing: 1.6,
  textTransform: "uppercase",

  selectors: {
    [`${hero} &`]: {
      marginBottom: 14,
    },
  },
});

export const headingLarge = style({
  color: "#fff",
  fontWeight: 700,
  fontSize: 36,
});
