import { defineConfig } from 'vitepress'

// 导入主题的配置
import { blogTheme } from './blog-theme'

// 如果使用 GitHub/Gitee Pages 等公共平台部署
// 通常需要修改 base 路径，通常为“/仓库名/”
// 如果项目名已经为 name.github.io 域名，则不需要修改！
// const base = process.env.GITHUB_ACTIONS === 'true'
//   ? '/vitepress-blog-sugar-template/'
//   : '/'

// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: blogTheme,
  base: '/viteblog/',
  lang: 'zh-cn',
  title: '12222e',
  description: '基于 vitepress 实现',
  lastUpdated: true,
  // 详见：https://vitepress.dev/zh/reference/site-config#head
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    // ['link', { rel: 'icon', href: `${base}favicon.ico` }], // 修改了 base 这里也需要同步修改
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    // 展示 2,3 级标题在目录中
    outline: {
      level: [2, 3],
      label: '目录'
    },
    // 默认文案修改
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '相关文章',
    // 设置logo
    logo: '/logo.png',
    // editLink: {
    //   pattern:
    //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
    //   text: '去 GitHub 上编辑内容'
    // },
    nav: [
      { text: '💫 技术笔记',
        items: [
          { text: '技术教程', link: '/notes/learnguide'},
          { text: '源码学习', link: '/notes/sourcecode' },
          { text: '工程化能力', link: '/notes/experience'},
          { text: '日常踩坑记录', link: '/notes/bugfixed'},
        ]
      },
      { text: '💻 计算机基础',
        items: [
          { text: '计网', link: '/computerbasic/network'},
          { text: '数据结构与算法', link: '/computerbasic/algorithm'},
          { text: '操作系统', link: '/computerbasic/os'},

        ]
      },
      { text: '🥝 大前端',
        items: [
          { text: 'JS', link: '/fontend/js'},
          { text: 'CSS', link: '/fontend/css'},
          { text: '框架-vue', link: '/fontend/vue'},
          { text: '框架-react', link: '/fontend/react'},
          { text: '浏览器', link: '/fontend/browser'},
          { text: '性能', link: '/fontend/performance'},
          { text: 'node', link: '/fontend/node'},
          { text: '部署工程化', link: '/fontend/deploy'},
          { text: '小程序', link: '/fontend/mp'},
        ]
      },
      { text: '🍪 手撕',
        items: [
          { text: 'JS', link: '/handcode/js'},
          { text: '算法', link: '/handcode/vue'},
          { text: 'CSS', link: '/handcode/css'},
        ]
      },
      { text: '🍉 面试',
        items: [
          { text: '复习自查', link: '/interview/study'},
          { text: '反向思考', link: '/interview/think'},
        ]
      },
      { text: '🔮 投资理财',
        link: '/invest/'
      },
      { text: '🍑 认知成长',
        link: '/growth/'
      },
      { text: '🪄 攒攒',
        link: '/ideas/'
      },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/ATQQ/sugar-blog/tree/master/packages/theme'
      }
    ]
  }
})
