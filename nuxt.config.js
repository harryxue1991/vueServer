module.exports = {
        /*
        ** TDK设置
        */
        head: {
                title: 'project',
                meta: [
                        { charset: 'utf-8' },
                        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                        { hid: 'description', name: 'description', content: 'Nuxt.js project' }
                ],
                link: [
                        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
                ]
        },
        /*
        ** 进度条颜色
        */
        loading: { color: '#3B8070' }, 
        /*
        ** css全局配置
        */
        css: [
                'element-ui/lib/theme-chalk/index.css'
        ],
        /*
        ** 构建配置
        */
        plugins: ['~plugins/element-ui'],  //使用elementui 插件
        build: {
                vendor: ['axios','element-ui'],
                /*
                ** Run ESLint on save
                */
                extend (config, { isDev, isClient }) {
                        if (isDev && isClient) {
                                config.module.rules.push(
                                        {
                                                enforce: 'pre',
                                                test: /\.(js|vue)$/,
                                                loader: 'eslint-loader',
                                                exclude: /(node_modules)/
                                        }
                                )
                        }
                }
        }
}
