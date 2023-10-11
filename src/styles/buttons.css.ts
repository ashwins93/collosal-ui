import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./theme.css";

export const button = recipe({
  base: {
    borderRadius: 3,
    padding: "10px 30px",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    background: vars.color.buttonLight,
    boxShadow: "0px 15px 30px 0px rgba(0, 0, 0, 0.10);",
    border: "none",
    color: "white",
    fontSize: 14,
  },
});
