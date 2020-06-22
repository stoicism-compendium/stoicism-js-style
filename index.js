module.exports = {
  eslint: {
    extends: 'standard',
    rules: {
      'brace-style': ['error', '1tbs'],
      'comma-dangle': ['error', 'always-multiline'],
      curly: ['error', 'all'],
      'object-curly-spacing': ['error', 'never'],
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          asyncArrow: 'always',
          named: 'never',
        },
      ],
    },
  },

  prettier: {
    bracketSpacing: false,
    semi: false,
    singleQuote: true,
    trailingComma: 'all',
  },
}
