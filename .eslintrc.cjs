module.exports = {
  env: { browser: true, es2020: true },
  parser: '@typescript-eslint/parser',
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  plugins: ['react', 'react-refresh', 'import'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'arrow-parens': ['warn', 'as-needed'],
    'comma-dangle': ['warn', 'always-multiline'],
    'import/newline-after-import': [
      'warn',
      { count: 1, exactCount: true, considerComments: true },
    ],
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'index',
          'object',
        ],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: 'react*{,/**}',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@/{types,data,utils}{/,}**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/{App,components}{,/}**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '{./!(*.scss),../**}',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@/{assets,public}/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '{@/styles/**,./**.module.scss}',
            group: 'index',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        warnOnUnassignedImports: true,
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    indent: ['error', 2],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-unused-vars': ['off'],
    'object-curly-newline': [
      'warn',
      {
        ObjectExpression: { consistent: true, multiline: true },
        ObjectPattern: { consistent: true, multiline: true },
        ImportDeclaration: 'never',
        ExportDeclaration: { multiline: true, minProperties: 4 },
      },
    ],
    'object-curly-spacing': ['warn', 'always'],
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: '*', next: ['return', 'export'] },
    ],
    'prefer-const': 2,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-unused-vars': ['warn'],
  },
};
