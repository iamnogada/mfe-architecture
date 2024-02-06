/** @type {import("eslint").Linter.Config} */
module.exports = {
    extends: ['plugin:astro/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      jsconfigRootDir: __dirname,
      sourceType: 'module',
      ecmaVersion: 'latest'
    },
    overrides: [
      {
        files: ['*.astro'],
        parser: 'astro-eslint-parser',
        // parserOptions: {
        //   parser: '@typescript-eslint/parser',
        //   extraFileExtensions: ['.astro']
        // },
        rules: {
          // override/add rules settings here, such as:
          // "astro/no-set-html-directive": "error"
        }
      }
    ]
  }