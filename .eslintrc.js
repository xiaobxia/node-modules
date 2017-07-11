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
};