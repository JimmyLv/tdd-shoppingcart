# tdd-shoppingcart

使用 TDD 开发购物车

## 安装
```
yarn install 
// or
npm i
```

## 使用
### 本地开发
```
yarn start
```

### 构建
```
yarn build
```

### 测试

```shell script
// 运行所有测试
yarn test

// 运行单元测试
yarn test:unit

// 运行 e2e 测试(命令行)
yarn test:e2e
// 运行 e2e 测试(GUI)
yarn cy:oopen 
```

## 技术栈

### 框架
1. React ( hooks )
2. [UmiJS](https://umijs.org/zh/)
3. [DvaJS](https://dvajs.com/)
4. [styled-components](https://www.styled-components.com/)

### 测试

#### e2e:
1. [cypress](https://www.cypress.io/)

#### unit test:
1. [jest](https://jestjs.io/) 
2. [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

#### styles:
1. [storybook](https://storybook.js.org/)

## 开发规范

### 方式
使用 TDD 方式开发

参考链接：
1. [Learn TDD in React](https://learntdd.in/react/)


### 代码风格
使用 [eslint](https://eslint.org/) + [prettier](https://prettier.io/) 

> commit 时自动运行


### commit 

commit提交脚本

```
yarn ci
```

#### git提交信息规范

- short description
`#需求编号 提交信息 (#time 耗时h)`

    1. 需求编号：为tapd内的需求编号。
    2. 提交信息：为当次提交代码的信息精简版。
    3. 耗时：单位小时，最小为0.5h，小于0.5可不写.
    
使用 [Angular 规范](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.fpepsvr2gqby)
