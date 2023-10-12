import { style } from "@vanilla-extract/css";
import { container } from "./app.css";

export const logo = style({
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  color: "#fff",
  gap: 18,
  fontSize: 24,
  fontWeight: 700,
});

export const nav = style({
  display: "flex",
  gap: 50,
  alignItems: "center",
  listStyle: "none",
});

export const header = style([
  container,
  {
    display: "flex",
    justifyContent: "space-between",
    padding: "50px 16px",
  },
]);

export const navLink = style({
  color: "rgba(255, 255, 255, 0.80)",
  textDecoration: "none",
  fontWeight: 400,
});
