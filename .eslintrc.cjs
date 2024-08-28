module.exports = {
  env: {
    browser: false,
    es6: true,
    node: true,
  },
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'ecosystem.config',
    'ecosystem.config.cjs',
    'ecosystem.config.js',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'jest'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'prettier',
  ],
  rules: {
    // The following rule is enabled only to supplement the inline suppression
    // examples, and because it is not a recommended rule, you should either
    // disable it, or understand what it enforces.
    // https://typescript-eslint.io/rules/explicit-function-return-type/
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  },
};
