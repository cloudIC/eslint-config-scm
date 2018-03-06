/**
 * typescript style for eslint
 * dependencies: typescript-eslint-parser eslint-plugin-typescript
 */
const env = require('./lib/env');
const parserOptions = require('./lib/parserOptions');
const rules = require('./lib/rules');

module.exports = {
  env,
  parser: 'typescript-eslint-parser',
  parserOptions,
  rules,
  extends: [
    'eslint:recommended',
  ],
  plugins: [
    'typescript',
  ],
};
