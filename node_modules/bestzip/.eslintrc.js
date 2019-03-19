module.exports = {
    "env": {
        "node": true,
        "es6": true
    },
    "extends": ["eslint:recommended", "plugin:prettier/recommended"],
    "rules": {
        "strict": [
            "error",
            "global"
        ],
        "prefer-const": "error"
    }
};
