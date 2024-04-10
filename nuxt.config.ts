// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app:{
        head:{
            title: "西部魔影 - 英雄联盟官方网站 - 腾讯游戏",
            meta: [
                { name: 'description', content: '英雄联盟官方网站，海量风格各异的英雄，丰富、便捷的物品合成系统，游戏内置的匹配、排行和竞技系统，独创的“召唤师”系统及技能、符文、天赋等系统组合，必将带你进入一个崭新而又丰富多彩的游戏世界。' },
            ],
        }
    },
    css: [
        '@/assets/css/tailwind.css',
    ],
    modules:[
        '@nuxtjs/tailwindcss'
    ]
})
