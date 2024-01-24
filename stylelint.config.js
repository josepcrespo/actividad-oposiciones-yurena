module.exports = {
  customSyntax: 'postcss-html',
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue',
    'stylelint-config-prettier',
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configure#rules
  rules: {
    "at-rule-no-unknown": [true, { "ignoreAtRules": ["extend"] }]
  }
}
