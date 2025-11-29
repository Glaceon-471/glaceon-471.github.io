module.exports = {
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-order"],
  rules: {
    "order/order": [
      "custom-properties",
      "dollar-variables",
      "declarations",
      "at-variables",
      "rules",
      "at-rules",
      "less-mixins"
    ],
    "order/properties-alphabetical-order": true
  }
};
