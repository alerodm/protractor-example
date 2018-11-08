'use strict';

module.exports = {
  extends: [
    'airbnb-base',
    'plugin:promise/recommended'
  ],
  parserOptions: {
    ecmaVersion: 8
  },
  'env': {
    jasmine: true,
    protractor: true,
  },
  plugins: [
    'promise'
  ],
  rules: {
    'no-console': 'off',
    'max-len': ['error', { code: 120 }]
  }
};