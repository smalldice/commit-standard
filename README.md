### 项目介绍

这是一个用于提升工程化能力的项目

#### 搭建流程

step1. Commitizen

packages:

<ol>
 <li>cz-conventional-changelog </li>
 <li>commitizen </li>
 <li>cz-customizable </li>
</ol>
配置之后产生以下特性
使用 git cz 代替 git commit 进行符合 Angular 规范的 Commit Message 信息提交
代码提交之前会通过 husky 配合 git hook 进行提交信息校验，一旦提交信息不符合 Angular 规范，则提交会失败
执行 npm run changelog 会在根目录下自动生成 CHANGELOG.md 版本日志

`

````

step2. Typescript

```js
;`TypeScript 背景
工具函数库的实现采用 TypeScript，除了可以自动生成 ts 声明文件供外部更好的提示使用之外，也可以避免 JavaScript 动态性所带来的一些无法预料的错误信息（具体可查看 Top 10 JavaScript errors from 1000+ projects (and how to avoid them)），从而使算法的设计更加严谨。TypeScript 的构建方式有很多种，除了原生编译器 tsc 以外，还包括 Webpack、Rollup、Babel 以及 Gulp 等（更多构建工具的集成可查看 Integrating with Build Tools）:

Webpack 主要用于页面应用的模块化构建，使用 Webpack 构建会增加构建库的体积，因此简单工具库的制作使用 Webpack 完全是 "杀鸡用牛刀"。
Rollup 是一个构建工具库非常不错的轻量选择，它持有的 Tree Shaking 以及构建 ES Module 的特性使得它被 tsdx、microbundle 甚至 Vue 等广泛使用。
Babel 对于 TypeScript 可使用 @babel/preset-typescript 去除 TypeScript 类型标记，但是不做类型编译检查，更多关于 Babel 对于 TypeScript 支持的限制可查看 @babel/plugin-transform-typescript - Caveats 或 Babel 7 or TypeScript。
Gulp 是一个非常轻量的构建工具，并且也是 TypeScript 官方推荐的构建工具，具体可查看 TypeScript - Building，简单的 Gulp 配置可查看 TypeScript 中文网 - Gulp。`
````

step3. eslint

1. why eslint?

TypeScript 的代码检查工具主要有 TSLint 和 ESLint 两种。早期的 TypeScript 项目一般采用 TSLint 进行检查。TSLint 和 TypeScript 采用同样的 AST 格式进行编译，但主要问题是对于 JavaScript 生态的项目支持不够友好，因此 TypeScript 团队在 2019 年宣布全面转向 ESLint（具体可查看 TypeScript 官方仓库的 .eslintrc.json 配置），更多关于转向 ESLint 的原因可查看：

https://medium.com/palantir/tslint-in-2019-1a144c2317a9
https://github.com/microsoft/TypeScript/issues/30553
TypeScript 和 ESLint 使用不同的 AST 进行解析，因此为了在 ESLint 中支持 TypeScript 代码检查需要制作额外的自定义解析器（Custom Parsers，ESLint 的自定义解析器功能需要基于 ESTree），目的是为了能够解析 TypeScript 语法并转成与 ESLint 兼容的 AST。@typescript-eslint/parser 在这样的背景下诞生，它会处理所有 ESLint 特定的配置并调用 @typescript-eslint/typescript-estree 生成 ESTree-compatible AST（需要注意不仅仅兼容 ESLint，也能兼容 Prettier）。

2. eslint config

parser: '@typescript-eslint/parser'：使用 ESLint 解析 TypeScript 语法
plugins: ['@typescript-eslint']：在 ESLint 中加载插件 @typescript-eslint/eslint-plugin，该插件可用于配置 TypeScript 校验规则。
extends: [ ... ]：在 ESLint 中使用共享规则配置，其中 eslint:recommended 是 ESLint 内置的推荐校验规则配置（也被称作最佳规则实践），plugin:@typescript-eslint/recommended 是类似于 eslint:recommended 的 TypeScript 推荐校验规则配置。

3. eslint in package.json

```json
"scripts": {
  "lint": "eslint src",
}
```

step4 lint-staged

在 Git Commit Message 中使用了 commitlint 工具配合 husky 可以防止生成不规范的 Git Commit Message，从而阻止用户进行不规范的 Git 代码提交，其原理就是监听了 Git Hook 的执行脚本（会在特定的 Git 执行命令诸如 commit、push、merge 等触发之前或之后执行相应的脚本钩子）。Git Hook 其实是进行项目约束非常好用的工具，它的作用包括但不限于：

Git Commit Message 规范强制统一
ESLint 规则统一，防止不符合规范的代码提交
Prettier 自动格式化（类似的还包括 Style 样式格式等）
代码稳定性提交，提交之前确保测试用例全部通过
发送邮件通知
CI 集成（服务端钩子）
