module.exports = {
    title: 'Hello Unar.js',
    description: 'Description about Unar.js',
    themeConfig: {
        // displayAllHeaders: true, // 默认值：false
        nav: [
            { text: 'home', link: '/' }, 
            { text: '教程', link: '/doc/' }, 
            { text: '博客', link: '/blog/' }, 
            { text: 'git', link: 'https://github.com/lkdghzh' }, // 外部链接
        ],
        sidebar: {
            '/doc/': [
                '',
                'first',
                'second'
            ],
            '/blog/': [
                '',
                'first',
                'second'
            ],
            '/': [],
        }
    }
}