module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: [
        'plugin:react/recommended',
        'standard'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'script'
    },
    plugins: [
        'react'
    ],
    rules: {
        "comma-dangle": [
            2, "always-multiline"
        ],
        "indent": [
            2, 4
        ],
      "no-console": "off",
      "quotes": "off"
    }
}
