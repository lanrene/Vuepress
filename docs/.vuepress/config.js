import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({

  lang: 'zh-CN',
  base: '/vuepress/',
  title: 'Make Old Devices Great Again',
  description: '让旧设备重新变得可用，并尽可能获得更好的使用体验。',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',
    subSidebar: 'auto',
    navbar: [{ text: '首页', link: '/' }, '/get-started'],
    // sidebar: [
    //   {
    //       title: '欢迎学习',
    //       path: '/',
    //       collapsable: false, // 不折叠
    //       children: [
    //           { title: "学前必读", path: "/" }
    //       ]
    //   },
    //   {
    //     title: "基础学习",
    //     path: '/handbook/ConditionalTypes',
    //     collapsable: false, // 不折叠
    //     children: [
    //       { title: "条件类型", path: "/handbook/ConditionalTypes" },
    //       { title: "泛型", path: "/handbook/Generics" }
    //     ],
    //   }
    // ],
  }),

  bundler: viteBundler(),
});
