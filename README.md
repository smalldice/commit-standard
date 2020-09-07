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
