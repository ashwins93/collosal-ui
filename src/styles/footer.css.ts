import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";
import { container } from "./app.css";

export const footer = style([
  container,
  {
    display: "flex",
    padding: "50px 16px",
    justifyContent: "space-between",
    gap: 8,
  },
]);

export const footerSectionHead = style({
  color: "#fff",
  fontSize: 14,
  letterSpacing: 1.4,
  fontWeight: 600,
  textTransform: "uppercase",
  marginBottom: 24,
});

export const mutedText = style({
  fontSize: 16,
  color: vars.color.muted,
  fontWeight: 400,
  textDecoration: "none",
});

export const logoWrapper = style({
  marginBottom: 24,
});

export const footerLinks = style({
  display: "flex",
  flexDirection: "column",
  gap: 16,
});
