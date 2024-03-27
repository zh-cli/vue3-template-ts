module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-essential'
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [ '.eslintrc.{js,cjs}' ],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: [ '@typescript-eslint', 'vue' ],
    rules: {
        'vue/attribute-hyphenation': 0,
        // 自定义组件名称 - 驼峰和连字符
        'vue/component-definition-name-casing': 0,
        // html 闭括号-换行
        'vue/html-closing-bracket-newline': [
            2,
            {
                singleline: 'never',
                multiline: 'always',
            },
        ],
        'array-bracket-spacing': [ 'error', 'always' ],
        'object-curly-spacing': [ 'error', 'always' ],
        // html 闭括号之前无空格
        'vue/html-closing-bracket-spacing': 2,
        //箭头函数空格
        'arrow-spacing': [ 'error', {
            'before': true, 'after': true
        } ],
        // html 需要有结束标签，除了自闭合标签
        'vue/html-end-tags': 2,
        // 缩进html
        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: [],
            },
        ],
        'vue/max-attributes-per-line': [
            2,
            {
                singleline: 4,
                multiline: 4,
            },
        ],
        // 要求或不允许尾随逗号
        'comma-dangle': 'off',
        // 禁止组件已注册但未使用的情况
        'vue/no-unused-components': [ 2 ],
        'no-multiple-empty-lines': 2,
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-constant-condition': 2, // 禁止在条件中使用常量表达式 if(true) if(1)
        'no-trailing-spaces': 1, // 一行结束后面不要有空格
        'no-var': 2, // 禁用var，用let和const代替
        'consistent-this': [ 2, 'that' ], // this别名
        indent: [ 'error', 4 ],
        'no-dupe-args': [ 2 ],
        '@typescript-eslint/no-namespace': 'off',
        // 文件的最大行数
        'max-lines': [
            'error',
            {
                max: 600,
                skipBlankLines: true, // 忽略空白行
                skipComments: true, // 忽略只包含注释的行
            },
        ],
        'key-spacing': [
            2,
            {
                beforeColon: false,
                afterColon: true,
            },
        ], // 对象字面量中冒号的前后空格
        // any类型
        '@typescript-eslint/no-explicit-any': 'off',
        // 遇见对象花括号换行
        'object-curly-newline': [
            'error',
            {
                ObjectExpression: 'always',
                ObjectPattern: {
                    multiline: true,
                },
                ImportDeclaration: 'never',
                ExportDeclaration: {
                    multiline: true,
                    minProperties: 3,
                },
            },
        ],
        quotes: [
            2,
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true,
            },
        ],
        semi: [
            2,
            'never',
            {
                beforeStatementContinuationChars: 'never',
            },
        ],
    },
}