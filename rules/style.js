module.exports = {
  rules: {
    'array-bracket-spacing': ['error', 'never'],

    'block-spacing': ['error', 'always'],

    'brace-style': ['error', '1tbs', {
      allowSingleLine: true
    }],

    'camelcase': ['error', {
      properties: 'never'
    }],

    'capitalized-comments': ['off', 'never', {
      line: {
        ignorePattern: '.*',
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
      block: {
        ignorePattern: '.*',
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
    }],

    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],

    'comma-spacing': ['error', {
      before: false,
      after: true
    }],

    'comma-style': ['error', 'last'],

    'computed-property-spacing': ['error', 'never'],

    'consistent-this': ['off'],

    'eol-last': ['error', 'always'],

    'func-call-spacing': ['error', 'never'],

    'func-name-matching': ['off', 'always', {
      includeCommonJSModuleExports: false
    }],

    'func-names': ['warn'],

    'func-style': ['off', 'expression'],

    'id-blacklist': ['off'],

    'id-length': ['off'],

    'id-match': ['off'],

    'indent': ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      FunctionDeclaration: {
        parameters: 1,
        body: 1
      },
      FunctionExpression: {
        parameters: 1,
        body: 1
      }
    }],

    'jsx-quotes': ['off', 'prefer-double'],

    'key-spacing': ['error', {
      beforeColon: false,
      afterColon: true
    }],

    'keyword-spacing': ['error', {
      before: true,
      after: true,
      overrides: {
        return: {
          after: true
        },
        throw: {
          after: true
        },
        case: {
          after: true
        }
      }
    }],

    'line-comment-position': ['off', {
      position: 'above',
      ignorePattern: '',
      applyDefaultPatterns: true,
    }],

    'linebreak-style': ['error', 'unix'],

    'lines-around-comment': ['off'],

    'lines-around-directive': ['error', {
      before: 'always',
      after: 'always',
    }],

    'max-depth': ['off', 4],

    'max-len': ['error', 100, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],

    'max-lines': ['off', {
      max: 300,
      skipBlankLines: true,
      skipComments: true
    }],

    'max-nested-callbacks': ['off'],

    'max-params': ['off', 3],

    'max-statements-per-line': ['off', {
      max: 1
    }],

    'max-statements': ['off', 10],

    'multiline-ternary': ['off', 'never'],

    'new-cap': ['error', {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
    }],

    'new-parens': ['error'],

    'newline-after-var': ['off'],

    'newline-before-return': ['off'],

    'newline-per-chained-call': ['error', {
      ignoreChainWithDepth: 4
    }],

    'no-array-constructor': ['error'],

    'no-bitwise': ['error'],

    'no-continue': ['error'],

    'no-inline-comments': ['off'],

    'no-lonely-if': ['error'],

    'no-mixed-operators': ['error', {
      groups: [
        ['+', '-', '*', '/', '%', '**'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof']
      ],
      allowSamePrecedence: false
    }],

    'no-mixed-spaces-and-tabs': ['error'],

    'no-multiple-empty-lines': ['error', {
      max: 2,
      maxEOF: 1
    }],

    'no-negated-condition': ['off'],

    'no-nested-ternary': ['error'],

    'no-new-object': ['error'],

    'no-plusplus': ['error'],

    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'ForOfStatement',
      'LabeledStatement',
      'WithStatement',
    ],

    'no-tabs': ['error'],

    'no-ternary': ['off'],

    'no-trailing-spaces': ['error'],

    'no-underscore-dangle': ['error', {
      allowAfterThis: false
    }],

    'no-unneeded-ternary': ['error', {
      defaultAssignment: false
    }],

    'no-whitespace-before-property': ['error'],

    'object-curly-newline': ['off', {
      ObjectExpression: {
        minProperties: 0,
        multiline: true
      },
      ObjectPattern: {
        minProperties: 0,
        multiline: true
      }
    }],

    'object-curly-spacing': ['error', 'always'],

    'object-property-newline': ['error', {
      allowMultiplePropertiesPerLine: true,
    }],

    'one-var-declaration-per-line': ['error', 'always'],

    'one-var': ['error', 'never'],

    'operator-assignment': ['error', 'always'],

    'operator-linebreak': ['off'],

    'padded-blocks': ['error', 'never'],

    'quote-props': ['error', 'as-needed', {
      keywords: false,
      unnecessary: true,
      numbers: false
    }],

    'quotes': ['error', 'single', {
      avoidEscape: true
    }],

    'require-jsdoc': ['off'],

    'semi-spacing': ['error', {
      before: false,
      after: true
    }],

    'semi': ['error', 'always'],

    'sort-keys': ['off', 'asc', {
      caseSensitive: false,
      natural: true
    }],

    'sort-vars': ['off'],

    'space-before-blocks': ['error'],

    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }],

    'space-in-parens': ['error', 'never'],

    'space-infix-ops': ['error'],

    'space-unary-ops': ['error', {
      words: true,
      nonwords: false,
      overrides: {},
    }],

    'spaced-comment': ['error', 'always', {
      line: {
        exceptions: ['-', '+'],
        markers: ['=', '!'],
      },
      block: {
        exceptions: ['-', '+'],
        markers: ['=', '!'],
        balanced: false,
      }
    }],

    'unicode-bom': ['error', 'never'],

    'wrap-regex': ['off']
  }
}
