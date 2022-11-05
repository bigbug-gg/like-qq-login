// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app:{
        head:{
            title: "遇见繁星老福特峡谷七周年",
            meta: [
                { name: 'description', content: '遇见繁星老福特峡谷七周年' },
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
