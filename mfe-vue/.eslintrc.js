module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:prettier/recommended', // Integrates Prettier with ESLint
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'vue',
    'prettier', // Enables ESLint to run Prettier as an ESLint rule
  ],
  rules: {
    'prettier/prettier': 'error', // Turns on Prettier errors
    // Add other rules here
  },
};
