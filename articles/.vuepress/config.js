module.exports = {
  title: '不可思议',
  description: 'xchenhao.gitee.io',
  //  闽ICP备17026538号-3 books1.cn
  markdown: {
    toc: {
      includeLevel:[1, 2, 3, 4]
    }
  },
  plugins: [
    'flowchart',  // https://flowchart.vuepress.ulivz.com/
    [
      "vuepress-plugin-toolbar",
      {
        // https://zq99299.github.io/vuepress-plugin/vuepress-plugin-toolbar
        // https://github.com/zq99299?tab=repositories
        pageNav: {name: '导航'},
      }
    ],
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
        collapsable: true, // 可选的, 默认值是 true,
        // sidebarDepth: 2,    // 可选的, 默认值是 1
        children: [
          // [<link>, <title>] 格式：['/Hive', 'Hive'],
          // 或 {title: <title>, path: <path>}
          {title: 'Hive', path: '/Hive'},
          {title: 'ODPS', path: '/ODPS'},
          {title: 'MongoDB 基础', path: '/mongodb/MongoBasis'},
          {title: 'MongoDB 起步', path: '/mongodb/MongoBegin'},
          {title: '随机排序的一种优化实现', path: '/orderbyrand.md'},
          {title: '数据库分页的几种实现', path: '/db_pagination.md'},
          {title: 'SQLite UDF/UDAF 的实现', path: '/sqlite_udf_udaf'},
        ]
      },
      {
        title: 'MySQL',
        collapsable: true,
        children: [
          {title: 'MySQL 笔记 1', path: '/mysql/note1'},
          {title: '版本类问题', path: '/mysql/about_version'},
          {title: '用户管理类问题', path: '/mysql/about_user'},
          {title: '服务器配置类问题', path: '/mysql/about_config'},
          {title: '日志类问题', path: '/mysql/about_log'},
          {title: '存储引擎类问题', path: '/mysql/about_engine'},
        ]
      },
      {
        title: 'Python',
        collapsable: true,
        children: [
          {title: 'Python 基础', path: '/Python'},
          {title: 'Python 笔记 1', path: '/python-note-1'},
          {title: 'Python 笔记 2', path: '/python-note-2'},
          {title: 'Python 笔记 3', path: '/python-note-3'},
          {title: 'Python 笔记 4', path: '/python-note-4'},
          {title: 'Python 笔记 5', path: '/python-note-5'},
        ]
      },
      {
        title: 'Shell',
       // sidebarDepth: 0,
        children: [
          {title: '笔记', path: 'shell-learning-1'},
          {title: 'grep & sed & awk', path: '/grep-sed-awk'},
        ],
      },
      {
        title: 'Node.js',
        collapsable: true,
        sidebarDepth: 2,
        children: [
          {title: '01-Node.js基础', path: '/nodejs/basics/01-Node.js基础.md'},
          {title: '02-Yarn入门', path: '/nodejs/basics/02-yarn.md'},
          {title: '03-Express', path: '/nodejs/basics/03-Express.md'},
          {title: '04-Koa2', path: '/nodejs/basics/04-Koa2.md'},
          {title: '05-MongoDB', path: '/nodejs/basics/05-MongoDB.md'},
          {title: '06-socket编程', path: '/nodejs/basics/06-socket.md'},
          {title: '进阶：01-Node中间件', path: '/nodejs/advanced/01-Node中间件.md'},
          {title: '进阶：02-Node事件循环', path: '/nodejs/advanced/02-Node事件循环.md'},
          // 参考：https://gitee.com/lurongtao/felixbooks-gp19-Node.js
          // https://www.jianshu.com/p/81b6ebc0dd85
         // {title: '进阶：03-Node中间层', path: '/nodejs/advanced/03-Node中间层.md'},
        ],
      },
      {
        title: '工具',
        collapsable: true,
        children: [
          {title: '时间戳与日期转换', path: 'https://xchenhao.gitee.io/time.html'},
          {title: 'JSON 格式化', path: 'https://xchenhao.gitee.io/jsonformatter/'},
          {title: '常用网站', path: '/good_sites'},
        ]
      },
      {
        title: '其它',
        collapsable: true,
        children: [
          {title: 'JetBrains IDE 破解教程', path: '/JetBrainsCrack'},
          {title: 'WebTorrent 下载磁力链接工具', path: '/WebTorrent'},
          {title: 'HTTP 协议', path: '/HTTP-Protocol'},
          {title: 'TDD 笔记', path: '/TDD-note'},
          {title: 'Vim 笔记', path: '/vim-note'},
          {title: '网络笔记', path: '/network-note-1'},
          {title: 'Git', path: '/Git'},
          {title: 'Docker', path: '/Docker-note'},
          {title: 'OpenResty', path: '/openresty/openresty'},
          {title: 'Neo4j', path: '/neo4j'},
          {title: '复盘', path: '/fupan/fupan'},
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
