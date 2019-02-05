module.exports = {
  parser: "babel-eslint",
  extends: "airbnb",
  rules: {
    "no-param-reassign": 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    localStorage: true,
    fetch: true
  },
  env: {
    browser: true,
    node: true
  }
};
