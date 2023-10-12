import { style } from "@vanilla-extract/css";
import { mutedText } from "./footer.css";

export const hero = style({
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  padding: "50px 15px",
});

export const heroText = style([
  mutedText,
  {
    maxWidth: 540,
    lineHeight: 2,
    marginTop: 24,
  },
]);

export const heroActions = style({
  display: "flex",
  gap: 24,
  marginTop: 40,
});
