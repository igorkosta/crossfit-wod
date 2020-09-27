module.exports = {
  plugins: ['node', 'security'],
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:security/recommended'
  ],
  parser: 'babel-eslint',
  parserOptions:{
    ecmaVersion: 2020
  },
  env: {
    commonjs: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true
  },
  rules: {
    indent: [ 'error', 2 ],
    semi: ['error', 'never'],
    eqeqeq: ['error', 'always'],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'no-console': 0,
    'comma-dangle': [ 'error', 'never' ],
    'comma-spacing': [ 'error', { before: false, after: true } ],
    'no-trailing-spaces': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': 'error',
    'object-curly-spacing': [ 'error', 'always' ],
    'template-curly-spacing': ['error', 'never'],
    'no-var': 'error',
    'quote-props': ['error', 'as-needed'],
    'node/no-unpublished-require': ['error', {
      allowModules: ['aws-sdk']
    }]
  },
  overrides: [{
    files: '**/*.test.js',
    rules: {
      'node/no-unpublished-require': 0,
      'node/no-missing-require': 0
    }
  }]
}

