module.exports = {
  root: true,

  env: {
    browser: true,
    mocha: true
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  extends: [
    'standard',
    'plugin:vue/recommended'
  ],

  plugins: [
    'vue',
    'mocha',
    'chai-friendly'
  ],

  globals: {
    expect: true,
    should: true
  },

  rules: {
    'no-new': 0,
    'no-unused-expressions': 0,
    'chai-friendly/no-unused-expressions': 2,
    'vue/html-self-closing': 0,
    'vue/no-v-html': 0,
    "vue/max-attributes-per-line": [
      "error", {
        "singleline": 16
      }
    ]
  }
}
