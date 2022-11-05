// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app:{
        head:{
            title: "周年庆-王者荣耀-腾讯游戏",
            meta: [
                { name: 'description', content: '周年庆-王者荣耀-腾讯游戏' },
            ],
        }
    },
    css: [
        '@/assets/css/tailwind.css',
    ],
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    }
})
