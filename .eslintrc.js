const OFF = 0
const WARN = 1
const ERROR = 2

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  globals: {
    window: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': ERROR,
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': WARN,
    'react/jsx-uses-react': WARN,
    'react/jsx-uses-vars': WARN,
    'react/prop-types': OFF,
    'react/react-in-jsx-scope': OFF,
    'react/no-danger': OFF,
    'no-console': [ERROR, { allow: ['log', 'warn', 'error'] }],
    'arrow-body-style': [
      ERROR,
      'as-needed',
      { requireReturnForObjectLiteral: true },
    ],
    'no-undef': WARN,
    'no-unused-vars': WARN,
    'no-dupe-keys': OFF,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
