module.exports.content = {
    "env": {
        "browser": true,
        "es6": true
    },
    "plugins": [
        "prettier"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "parser": "babel-eslint",
    "rules": {
        "prettier/prettier": "error"
    }
}