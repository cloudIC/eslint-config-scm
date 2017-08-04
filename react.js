/**
 * react style for eslint
 * dependencies: babel-eslint eslint-plugin-react eslint-plugin-import eslint-plugin-jsx-a11y
 */
const env = require('./lib/env');
const parser = require('./lib/parser');
const parserOptions = require('./lib/parserOptions');
const rules = require('./lib/rules');

module.exports = {
  env,
  parser,
  parserOptions,
  rules,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: [
    'react',
    'import',
    'jsx-a11y',
  ],
};
