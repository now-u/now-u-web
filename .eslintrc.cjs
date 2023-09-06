module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "standard-with-typescript",
    "prettier",
    "next",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  plugins: ["react"],
  ignorePatterns: ["src/services/causesApiTypes.ts", "src/vite-env.d.ts"],
  rules: {
    "@typescript-eslint/no-misused-promises": [2, {
      "checksVoidReturn": {
        "attributes": false
      }
    }],
    "@typescript-eslint/naming-convention": 1
  },
  settings: {
    react: { version: "18.2.0" },
  },
};
