import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const footer = style({
  display: "flex",
  maxWidth: 992,
  padding: "50px 16px",
  margin: "0 auto",
  justifyContent: "space-between",
  gap: 8,
});

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
