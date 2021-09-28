module.exports = {
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
}
