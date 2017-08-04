/**
 * react-native style for eslint
 * dependencies: babel-eslint eslint-plugin-react eslint-plugin-react-native
 */
const env = require('./lib/env');
const parser = require('./lib/parser');
const parserOptions = require('./lib/parserOptions');
const rules = require('./lib/rules');

// custom style
rules['class-methods-use-this'] = ['error', {
  exceptMethods: [
    'render',
    'getInitialState',
    'getDefaultProps',
    'getChildContext',
    'componentWillMount',
    'componentDidMount',
    'componentWillReceiveProps',
    'shouldComponentUpdate',
    'componentWillUpdate',
    'componentDidUpdate',
    'componentWillUnmount',
  ]
}];
rules['react-native/no-color-literals'] = 'off';

module.exports = {
  env,
  parser,
  parserOptions,
  rules,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
  ],
  plugins: [
    'react',
    'react-native',
  ],
};
