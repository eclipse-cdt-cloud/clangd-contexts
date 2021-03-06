/** @type {import('eslint').Linter.Config} */
module.exports = {
    extends: [
        '../../configs/build.eslintrc.json',
        './overrides.eslintrc.json'
    ],
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: 'compile.tsconfig.json'
    }
};
