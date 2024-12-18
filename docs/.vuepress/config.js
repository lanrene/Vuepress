import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { markdownImagePlugin } from '@vuepress/plugin-markdown-image'
import { markdownStylizePlugin } from '@vuepress/plugin-markdown-stylize'

export default defineUserConfig({

  base: '/vuepress/',
  lang: 'zh-CN',
  title: 'Make Old Devices Great Again',
  description: '让旧设备重新变得可用，并尽可能获得更好的使用体验。',
  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',
    navbar: [{ text: '首页', link: '/' }, { text: 'Github', link: 'https://github.com/lanrene/vuepress' },],
    sidebar: [
      // SidebarItem
      {
        text: 'Bambook',
        link: '/bambook/',
        prefix: '/bambook/',
        collapsible: true,
        children: [
            'sd988.md'
        ]
      },
      {
        text: 'QQ阅读',
        link: '/qq-read/',
        prefix: '/qq-read/',
        collapsible: true,
        children: [
            'cr316-25.md',
            'app.md'
        ]
      },
    ],
    lastUpdated: false,
    contributors: false,
  
  }),

  bundler: viteBundler(),
  pagePatterns: ['**/*.md', '!**/README.md', '!.vuepress', '!node_modules'],
  plugins: [
    markdownImagePlugin({
      lazyload: true,
      figure: true,
      size: true,
    }),
    markdownStylizePlugin({
      align: true,
      mark: true,
      spoiler: true,
      sup: true,
      sub: true,
    }),
  ],
 
});
