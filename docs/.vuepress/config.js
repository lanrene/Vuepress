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
    navbar: [{ text: '首页', link: '/' }, {
      text: '关于作者',
      children: [
        { text: 'Github', link: 'https://github.com/lanrene/vuepress' },
        { text: 'QQ 群', link: 'https://qm.qq.com/cgi-bin/qm/qr?k=c1Y_oGnLOEOmLJoS3zkX0Uj2N_zFhIv4&jump_from=webapi&authKey=m8iiNbdWca/hyYhSICA0SFOA0MxJm6HeMBmMa7QVXTjRTpxKlrkkYJbCpWzX2vOv' },
        { text: 'Bilibili', link: 'https://space.bilibili.com/255577731' },
      ]
    },],
    sidebar: [
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
        text: 'QQ阅读器',
        link: '/qq-read/',
        prefix: '/qq-read/',
        collapsible: true,
        children: [
          'cr316-25.md',
          'app.md'
        ]
      },
      {
        text: '奇淫技巧',
        link: '/generic/',
        prefix: '/generic/',
        collapsible: true,
        children: [
          'use_weread.md'
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
