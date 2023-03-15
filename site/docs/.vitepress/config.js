export default {
  title: 'y-command',
  base: process.env.NODE_ENV === 'production' ? '/easyest/' : '/',
  // 默认主题
  appearance: 'dark',

  // 显示更新时间
  lastUpdated: true,
  // 从URL中删除尾随的.html
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: '文档', link: '/guild/introduce' },
      { text: '命令', link: '/commands/moyu' }
    ],
    sidebar: {
      '/guild': [
        {
          text: '引入',
          collapsed: false,
          items: [
            {
              text: '介绍',
              link: '/guild/introduce'
            },
            {
              text: '快速开始',
              link: '/guild/quickstart'
            }
          ]
        },
        {
          text: '开发',
          collapsed: false,
          items: [
            {
              text: '目录结构',
              link: '/guild/tree'
            },
            {
              text: '命令开发',
              link: '/guild/command'
            }
            // {
            //   text: '全局组件',
            //   link: '/guild/global'
            // },

            // {
            //   text: '打包发布',
            //   link: '/guild/build'
            // }
          ]
        }
      ],
      '/commands': [
        {
          text: 'something funny',
          collapsed: false,
          items: [
            {
              text: '摸鱼',
              link: '/commands/moyu'
            },
            {
              text: '下班倒计时',
              link: '/commands/time'
            },
            {
              text: 'ping',
              link: '/commands/ping'
            },
            {
              text: 'emoji查询',
              link: '/commands/emoji'
            },
          ]
        },
        {
          text: '敬请期待~',
          collapsed: false,
          items: [
            {
              text: '待办清单',
              link: '/commands/todo'
            }
          ]
        }
      ]
    },

    markdown: {
      theme: {
        light: 'min-dark',
        dark: 'one-dark-pro',
      },
      lineNumbers: true,
      config: (md) => {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        md.use(require('markdown-it-task-lists'))
      },
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/mengqiuleo/y-command' }],
     // footer
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present y-command',
    },
  }
};