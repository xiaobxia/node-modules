/**
 * Created by xiaobxia on 2017/7/11.
 */
let eslintConfig = {};
/**
 * 配置文件在根目录，默认是父目录
 */
eslintConfig.root = true;
/**
 * 解析器默认为espree，如果要使用其他的需要用npm安装解析器
 * 如Esprima，Babel-ESLint
 */
//eslintConfig.parser = 'espree';
/**
 * 配置环境
 */
eslintConfig.env = {
    browser: true,
    node: true,
    commonjs: true,
    'shared-node-browser': true,
    es6: true,
    // worker: true,
    // amd: true,
    // mocha: true,
    // jasmine: true,
    // jest: true,
    // phantomjs: true,
    // protractor: true,
    // qunit: true,
    // jquery: true,
    // prototypejs: true,
    // shelljs: true,
    // meteor: true,
    // mongo: true,
    // applescript: true,
    // nashorn: true,
    // serviceworker: true,
    // atomtest: true,
    // embertest: true,
    // webextensions: true,
    // greasemonkey: true,
};
/**
 * 定义全局变量
 */
eslintConfig.globals = {
    'xiaobxia': true
};
/**
 * 启用eslint核心配置
 * eslint:recommended，用子集
 * eslint:all，用全集
 * standard，标准
 */
eslintConfig.extends = 'eslint:recommended';
/**
 * 配置规则
 * http://eslint.org/docs/rules/
 */
eslintConfig.rules = {
    /**
     * 可能出错的
     */
    //不能与-0比较
    'no-compare-neg-zero': true,
    //在条件表达式当中禁止运算符
    'no-cond-assign': true,
    //不能有log，但是可以有warn和error
    //'no-console': ["error", { allow: ["warn", "error"] }],
    //禁止if(a),这样的表达
    //'no-constant-condition': true,
    //禁止重复定义参数
    'no-dupe-args':true,
    //禁止在对象中重复定义key
    'no-dupe-keys':true,
    //禁止在case中出现重复
    'no-duplicate-case':true,
    //禁止块语句内为空
    'no-empty':true,
    //禁止正则中的空字符类
    'no-empty-character-class':true,
    //禁止多余的判断，如!!!a
    'no-extra-boolean-cast': true,
    //禁止使用var
    'no-var': 'off',





    // 要求或禁止 var 声明中的初始化
    'init-declarations': 2,
    // 强制使用单引号
    'quotes': ['error', 'single'],
    // 要求或禁止使用分号而不是 ASI
    'semi': ['error', 'never'],
    // 禁止不必要的分号
    'no-extra-semi': 'error',
    // 强制使用一致的换行风格
    'linebreak-style': ['error', 'unix'],
    // 空格2个
    'indent': ['error', 2, {'SwitchCase': 1}],
    // 指定数组的元素之间要以空格隔开(,后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
    'array-bracket-spacing': [2, 'never'],
    // 在块级作用域外访问块内定义的变量是否报错提示
    'block-scoped-var': 0,
    // if while function 后面的{必须与if在同一行，java风格。
    'brace-style': [2, '1tbs', {'allowSingleLine': true}],
    // 双峰驼命名格式
    'camelcase': 2,
    // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，
    'comma-dangle': [2, 'never'],
    // 控制逗号前后的空格
    'comma-spacing': [2, {'before': false, 'after': true}],
    // 控制逗号在行尾出现还是在行首出现
    'comma-style': [2, 'last'],
    // 圈复杂度
    'complexity': [2, 9],
    // 以方括号取对象属性时，[ 后面和 ] 前面是否需要空格, 可选参数 never, always
    'computed-property-spacing': [2, 'never'],
    // 'consistent-return': 0
};