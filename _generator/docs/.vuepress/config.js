module.exports = {
    title: 'Unar.js',
    description: 'Description about Unar.js',
    themeConfig: {
        displayAllHeaders: true, // 默认值：false
        nav: [
            { text: 'home', link: '/' }, 
            { text: '教程', link: '/doc/' }, 
            { text: '设计模式', link: '/design/' }, 
            { text: '算法', link: '/algo/' }, 
            { text: '博客', link: '/blog/' }, 
            { text: 'git', link: 'https://github.com/lkdghzh' }, // 外部链接
        ],
        sidebar: {
            '/doc/': [
                'guide',
                'high',
            ],
            '/algo/': [
                'cache',
            ],
            '/design/': [
                'memo',
            ],
            '/blog/': [
                'mvvm',
                'virtual-dom'
            ],
            '/': [],
        }
    }
}