/**
 * vue style for eslint
 * dependencies: babel-eslint eslint-plugin-vue
 */
const env = require('./lib/env');
const parser = require('./lib/parser');
const parserOptions = require('./lib/parserOptions');
const rules = require('./lib/rules');

// custom rules
rules['vue/jsx-uses-vars'] = 'error';

module.exports = {
  env,
  parser,
  parserOptions,
  rules,
  plugins: ['vue', 'html'],
  extends: ['eslint:recommended'],
};
