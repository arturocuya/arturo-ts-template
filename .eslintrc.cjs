module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    env: {
        node: true,
        mocha: true,
        es6: true
    },
    parserOptions: {
        project: ['./tsconfig.json'],
        createDefaultProgram: true
    },
    plugins: [
        '@typescript-eslint',
        'no-only-tests',
        'github'
    ],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    rules: {
        'eol-last': ['error', 'always'],
        'semi': ['error', 'always', { omitLastInOneLineBlock: true }],
        'quotes': ['error', 'single']
    },
    //disable some rules for certain files
    overrides: [{
        files: ['*.spec.ts'],
        rules: {
            '@typescript-eslint/no-unsafe-assignment': 'off',
            '@typescript-eslint/no-unsafe-call': 'off',
            '@typescript-eslint/no-unsafe-member-access': 'off',
            '@typescript-eslint/no-unsafe-return': 'off',
            '@typescript-eslint/no-unused-expressions': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars-experimental': 'off',
            '@typescript-eslint/dot-notation': 'off',
            '@typescript-eslint/no-unsafe-argument': 'off',
            'github/array-foreach': 'off',
            'new-cap': 'off',
            'no-shadow': 'off',
            'prefer-arrow-callback': 'off',
            'func-names': 'off',
            '@typescript-eslint/no-misused-promises': 'off'
        }
    }]
};
