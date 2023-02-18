module.exports = {
  "root": true,
  "env": {
    "es6": true,
    "node": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.lint.json"
  },
  "plugins": ["import", "@typescript-eslint"],
  "extends": [
    "eslint:recommended",
    "plugin:eslint-comments/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/strict",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier"
  ],
  "settings": {
    "import/resolver": {
      "typescript": {
        "project": "tsconfig.json"
      }
    }
  },
  "rules": {
    "import/order": [
      "error",
      {
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }
    ],
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/require-await": "off",
    "import/no-extraneous-dependencies": "error",
    "import/no-mutable-exports": "error",
    "import/no-unused-modules": "error",
    "@typescript-eslint/array-type": "off",
    "no-restricted-syntax": [
      "error",
      {
        selector:
            "CallExpression[callee.object.name='console'][callee.property.name=/^(log|warn|error|info|trace)$/]",
        message:
            "Don't use console, use pino logger (or another library) instead",
      },
      {
        selector: "TSEnumDeclaration",
        message: "Don't declare enums",
      },
      {
        selector: "CallExpression[callee.property.name='save']",
        message: "Don't use typeorm save, use insert or update instead",
      },
    ],
  }
};
