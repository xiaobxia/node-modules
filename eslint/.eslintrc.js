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
 *
 * 也可以引用配置
 */
eslintConfig.extends = 'eslint:recommended';
// 本质上是eslintConfig.extends =  [{},{}]
// eslintConfig.extends =  [
//     './rules/best-practices',
//     './rules/strict',
//     './rules/variables',
//     './rules/style',
//     './rules/node',
//     './rules/errors',
// ].map(require.resolve)
/**
 * 解析设置
 */
eslintConfig.parserOptions = {
    //es的版本
    "ecmaVersion": 5,
    //默认script
    "sourceType": "module",
};
/**
 * 配置规则
 * http://eslint.org/docs/rules/
 */
eslintConfig.rules = {};