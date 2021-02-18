module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["@jdf221/eslint-config-basic"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {},
  ignorePatterns: ["dist"],
};
