import { globalStyle, style } from "@vanilla-extract/css";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
});

globalStyle("*", {
  margin: 0,
});

globalStyle("body", {
  lineHeight: 1.5,
  WebkitFontSmoothing: "antialiased",
  background: "url(/background.png)",
  backgroundSize: "cover",
  backgroundPosition: "top center",
  fontFamily: "'Noto Sans', sans-serif",
  color: "#fff",
});

globalStyle("img, picture, video, canvas, svg", {
  display: "block",
  maxWidth: "100%",
});

globalStyle("input, button, textarea, select", {
  font: "inherit",
});

globalStyle("p, h1, h2, h3, h4, h5, h6", {
  overflowWrap: "break-word",
});

export const container = style({
  maxWidth: 1056,
  margin: "0 auto",
  paddingLeft: 16,
  paddingRight: 16,
});
