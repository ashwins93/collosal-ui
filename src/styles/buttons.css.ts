import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./theme.css";

export const button = recipe({
  base: {
    borderRadius: 3,
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 15px 30px 0px rgba(0, 0, 0, 0.10);",
    border: "none",
    color: "white",
  },

  variants: {
    size: {
      medium: {
        padding: "10px 30px",
        fontSize: 14,
      },
      large: {
        padding: "15px 55px",
        fontSize: 16,
      },
    },

    color: {
      primary: {
        background: vars.color.primary,
      },
      light: {
        background: vars.color.buttonLight,
      },
    },
  },

  defaultVariants: {
    size: "medium",
    color: "light",
  },
});
