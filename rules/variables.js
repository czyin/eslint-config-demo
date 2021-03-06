module.exports = {
  rules: {
    'init-declarations': ['off'],

    'no-catch-shadow': ['off'],

    'no-delete-var': ['error'],

    'no-label-var': ['error'],

    'no-restricted-globals': ['off'],

    'no-shadow-restricted-names': ['error'],

    'no-shadow': ['error'],

    'no-undef-init': ['error'],

    'no-undef': ['error'],

    'no-undefined': ['off'],

    'no-unused-vars': ['error', {
      vars: 'local',
      arg: 'after-used'
    }],

    'no-use-before-define': ['error']
  }
}
