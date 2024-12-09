import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "fcl 文档",
  description: "fcl启动器文档",
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/fcl-logo.png' }]
  ], 
  
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '文档首页', link: '/' },
      { text: '下载安装', link: '/download' },
      { text: '快速入门', link: '/docs/intro' },
      { text: '详细文档', 
        items: [
          { text: '介绍', link: '/docs/intro' },
          { text: '渲染器', link: '/docs/GL' },
          { text: '禁忌的模组', link: '/docs/mods' },
        ]
       },
    ],

    sidebar: [
      {
        text: '开始',
        items: [
          { text: '下载安装', link: '/download' },
          { text: '快速入门', link: '/docs/intro' }
        ]
      },
      {
        text: '详细文档',
        items: [
          { text: '介绍', link: '/docs/intro' },
          { text: '渲染器', link: '/docs/GL' },
          { text: '禁忌的模组', link: '/docs/mods' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/FCL-Team/FoldCraftLauncher' }
    ],
    footer: {
      copyright: '© 2024 @柠枺，此网站仅学习而建，请不要与fcl团队产生任何挂钩！'
    }
  }
})
