module.exports = {
  plugins: ["prettier-plugin-organize-attributes", "@shopify/prettier-plugin-liquid", "prettier-plugin-tailwindcss"],
  overrides: [
    { files: "_includes/**/*.html", options: { parser: "liquid-html" } },
    { files: "_layouts/**/*.html", options: { parser: "liquid-html" } },
  ],
  printWidth: 180,
  endOfLine: "auto",
  objectWrap: "collapse",
};
