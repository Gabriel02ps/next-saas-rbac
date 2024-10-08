/** @type{import("eslint").Linter.Config} */
module.exports = {
  extends: ['@rocketseat/eslint-config/node'],
  plugins: ['simple-import-sort'],
  rule: {
    'simple-import-sort/imports': 'error'
  }
}