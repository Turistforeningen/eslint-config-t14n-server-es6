module.exports = {
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  rules: {
    'max-len': [2, { code: 79, tabWidth: 2 }],
    'no-console': [0],
    'brace-style': [2, 'stroustrup', { allowSingleLine: true }],
    'no-param-reassign': [2, {'props': false}],
    'no-underscore-dangle': [0],
    'no-unused-vars': [2, {'args': 'none'}],
    'function-paren-newline': [2, 'consistent'],
    'arrow-parens': [2, 'always'],
    'new-cap': ["error", { "properties": false }],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'ignore'
    }],
  }
};
