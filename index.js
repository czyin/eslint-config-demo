module.exports = {
  extends: [
    './rules/errors.js',
    './rules/best-practices.js',
    './rules/strict.js',
    './rules/variables.js',
    './rules/node.js',
    './rules/style.js',
    './rules/es6.js',
    './rules/import.js'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    strict: 'error'
  }
}
