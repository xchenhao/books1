module.exports = {
  title: '不可思议',
  description: 'xchenhao.gitee.io',
  plugins: [
    'flowchart'  // https://flowchart.vuepress.ulivz.com/
  ],
  // 文档 https://www.vuepress.cn/theme/default-theme-config.html
  // 主题 https://antdocs.seeyoz.cn/guide/
  // https://segmentfault.com/a/1190000017055963 VuePress搭建个人技术文档网站教程
  // https://github.com/yulilong/front-end-doc/blob/master/.vuepress/config.js

  // https://vuepress.vuejs.org/zh/guide/markdown.html
  theme: 'antdocs',
  themeConfig: {
    lastUpdated: 'Last Updated',
    backToTop: true,
    // 导航栏
    // https://blog.csdn.net/weixin_43972992/article/details/108135923 VuePress生成多个侧边栏
    nav: [
      {
        text: '数据库',
        items: [
          {text: 'Hive', link: '/Hive'},
          {text: 'MongoDB', link: '/mongodb/MongoBasis'}
        ],
      },
     // {text: '语言', link: '/Python'},
     {
       text: '语言', 
       items: [
        {text: 'Python 基础', link: '/Python'}
       ],
     },
    ],
    // 侧边栏
    sidebar: [
      // https://www.jianshu.com/p/7b78f570fc4e 自动生成侧边栏
      {
        title: '数据库',
        // path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2,    // 可选的, 默认值是 1
        children: [
          // [<link>, <title>] 格式：['/Hive', 'Hive'],
          // 或 {title: <title>, path: <path>}
          {title: 'Hive', path: '/Hive'},
          {title: 'ODPS', path: '/ODPS'},
          {title: 'MySQL 笔记 1', path: '/mysql-note-1'},
          {title: 'MongoDB 基础', path: '/mongodb/MongoBasis'},
          {title: 'MongoDB 起步', path: '/mongodb/MongoBegin'},
        ]
      },
      {
        title: '语言',
        collapsable: false,
        children: [
          {title: 'Python 基础', path: '/Python'},
          {title: 'Python 笔记 1', path: '/python-note-1'},
          {title: 'Python 笔记 2', path: '/python-note-2'},
          {title: 'Python 笔记 3', path: '/python-note-3'},
          {title: 'Python 笔记 4', path: '/python-note-4'},
          {title: 'Python 笔记 5', path: '/python-note-5'},
          {title: 'Shell 脚本笔记 1', path: '/shell-learning-1'},
        ]
      },
      // {
      //   title: 'Git',
      //   path: '/Git',
      // },
      {
        title: '工具',
        children: [
          {title: 'JSON 格式化', path: 'https://xchenhao.gitee.io/jsonformatter/'},
        ]
      },
      {
        title: '其它',
        children: [
          {title: 'JetBrains IDE 破解教程', path: '/JetBrainsCrack'},
          {title: 'WebTorrent 下载磁力链接工具', path: '/WebTorrent'},
          {title: 'HTTP 协议', path: '/HTTP-Protocol'},
          {title: 'TDD 笔记', path: '/TDD-note'},
          {title: 'Vim 笔记', path: '/vim-note'},
          {title: '网络笔记', path: '/network-note-1'},
          {title: 'grep & sed & awk', path: '/grep-sed-awk'},
          {title: 'Git', path: '/Git'},
          {title: 'Docker', path: '/Docker-note'},
        ]
      },
      {
        title: '读书笔记',
        path: '/books-note',
      },
      {
        title: '更新记录',
        path: '/update_log',
      },
    ]
  }
}
