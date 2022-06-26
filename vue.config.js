module.exports = {
  lintOnSave: true,
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json', '.css'],
      alias: {
        assets: '@/assets',
        components: '@/components',
        view: '@/view',
        common: '@/common',
        network: '@/network',
      },
    },
  },
  // chainWebpack: (config) => {
  //   config.module
  //     .rule('url-loader')
  //     .test(/\.(png|jpg|gif)$/)
  //     .use('url-loader')
  //     .loader('url-loader')
  //     .options({
  //       limit: 18195,
  //     })
  //     .end()
  // },
}
