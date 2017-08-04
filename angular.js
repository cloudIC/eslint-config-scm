/**
 * angular style for eslint
 * dependencies: babel-eslint eslint-plugin-angular
 */
const env = require('./lib/env');
const parser = require('./lib/parser');
const parserOptions = require('./lib/parserOptions');
const rules = require('./lib/rules');

// custom rules
rules['angular/controller-name'] = ['error', '/[A-Z].*Ctrl$/'];
rules['angular/document-service'] = 'off';
rules['angular/json-functions'] = 'off';
rules['angular/window-service'] = 'off';

module.exports = {
  env,
  parser,
  parserOptions,
  rules,
  extends: [
    'eslint:recommended',
    'plugin:angular/johnpapa',
  ],
  plugins: [
    'angular'
  ],
};
