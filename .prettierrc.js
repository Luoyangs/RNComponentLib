module.exports = {
  jsxBracketSameLine: false,
  singleQuote: true,
  trailingComma: 'es5',
  bracketSpacing: true,
  printWidth: 80,
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      options: {
        parser: 'babel-flow',
      },
    },
  ],
};
