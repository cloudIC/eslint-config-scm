const env = require('./lib/env');
const parser = require('./lib/parser');
const parserOptions = require('./lib/parserOptions');
const rules = require('./lib/rules');

module.exports = {
  env,
  parser,
  parserOptions,
  rules,
  extends: 'eslint:recommended',
};
