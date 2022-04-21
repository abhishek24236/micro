module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: [
    "airbnb-base",
    "plugin:vue/recommended"
  ],
  plugins: [
    "vue",
    "html"
  ],
  rules: {
    "space-before-function-paren": [
      2,
      {
        "anonymous": "always",
        "named": "never"
      }
    ],
    "vue/html-closing-bracket-spacing": "off",
    "vue/singleline-html-element-content-newline": "off",
  },
};
