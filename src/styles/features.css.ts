import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";
import { container } from "./app.css";
import { mutedText } from "./footer.css";

export const featuresWrapper = style([
  container,
  {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 20,
    padding: "50px 16px",
  },
]);

export const card = style({
  background: vars.color.light,
  borderRadius: 5,
  padding: "32px 40px",
});

export const cardIconWrapper = style({
  padding: 13,
  background: vars.color.lighter,
  borderRadius: 3,
  display: "inline-flex",
});

export const cardTitle = style({
  fontSize: 18,
  fontWeight: 700,
  marginTop: 30,
});

export const cardText = style([
  mutedText,
  {
    lineHeight: 2,
    marginTop: 8,
  },
]);
