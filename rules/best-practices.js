module.exports = {
  rules: {
    'accessor-pairs': ['off'],

    'array-callback-return': ['error'],

    'block-scoped-var': ['error'],

    'class-methods-use-this': ['error', {
      exceptMethods: [],
    }],

    'complexity': ['off', 11],

    'consistent-return': ['error'],

    'curly': ['error', 'multi-line'],

    'default-case': ['error', {
      commentPattern: '^no default$'
    }],

    'dot-location': ['error', 'property'],

    'dot-notation': ['error', {
      allowKeywords: true
    }],

    'eqeqeq': ['error', 'allow-null'],

    'guard-for-in': ['error'],

    'no-alert': ['warn'],

    'no-caller': ['error'],

    'no-case-declarations': ['error'],

    'no-div-regex': ['off'],

    'no-else-return': ['error'],

    'no-empty-function': ['error', {
      allow: [
        'arrowFunctions',
        'functions',
        'methods',
      ]
    }],

    'no-empty-pattern': ['error'],

    'no-eq-null': ['off'],

    'no-eval': ['error'],

    'no-extend-native': ['error'],

    'no-extra-bind': ['error'],

    'no-extra-label': ['error'],

    'no-fallthrough': ['error'],

    'no-floating-decimal': ['error'],

    'no-global-assign': ['error', {
      exceptions: []
    }],

    'no-implicit-coercion': ['off', {
      boolean: false,
      number: true,
      string: true,
      allow: [],
    }],

    'no-implicit-globals': ['off'],

    'no-implied-eval': ['error'],

    'no-invalid-this': ['off'],

    'no-iterator': ['error'],

    'no-labels': ['error', {
      allowLoop: false,
      allowSwitch: false
    }],

    'no-lone-blocks': ['error'],

    'no-loop-func': ['error'],

    'no-magic-numbers': ['off', {
      ignore: [],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false,
    }],

    'no-multi-spaces': ['error'],

    'no-multi-str': ['error'],

    'no-new-func': ['error'],

    'no-new-wrappers': ['error'],

    'no-new': ['error'],

    'no-octal-escape': ['error'],

    'no-octal': ['error'],

    'no-param-reassign': ['error', {
      props: true
    }],

    'no-proto': ['error'],

    'no-redeclare': ['error'],

    'no-restricted-properties': ['error', {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated',
    }, {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      object: 'Math',
      property: 'pow',
      message: 'Use the exponentiation operator (**) instead.',
    }],

    'no-return-assign': ['error'],

    'no-return-await': ['error'],

    'no-script-url': ['error'],

    'no-self-assign': ['error'],

    'no-self-compare': ['error'],

    'no-sequences': ['error'],

    'no-throw-literal': ['error'],

    'no-unmodified-loop-condition': ['off'],

    'no-unused-expressions': ['error', {
      allowShortCircuit: false,
      allowTernary: false,
    }],

    'no-unused-labels': ['error'],

    'no-useless-call': ['off'],

    'no-useless-concat': ['error'],

    'no-useless-escape': ['error'],

    'no-useless-return': ['error'],

    'no-void': ['error'],

    'no-warning-comments': ['off', {
      terms: ['todo', 'fixme', 'xxx'],
      location: 'start'
    }],

    'no-with': ['error'],

    'radix': ['error'],

    'require-await': ['off'],

    'vars-on-top': ['error'],

    'wrap-iife': ['error', 'outside', {
      functionPrototypeMethods: false
    }],

    'yoda': ['error']
  }
};
