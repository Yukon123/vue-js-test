const IS_PROD = process.env.NODE_ENV === 'production'
module.exports = {
  productionSourceMap: true,
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
  chainWebpack(config) {
    if (IS_PROD) {
      config.optimization.splitChunks({
        cacheGroups: {
          // common: {
          //   name: 'chunk-common', // 打包后的文件名
          //   chunks: 'initial', //
          //   minChunks: 2,
          //   maxInitialRequests: 5,
          //   minSize: 0,
          //   priority: 1,
          //   // reuseExistingChunk: true,
          // },
          // vendors: {
          //   name: 'chunk-vendors',
          //   test: /[\\/]node_modules[\\/]/,
          //   chunks: 'initial',
          //   priority: 2,
          //   // reuseExistingChunk: true,
          //   // enforce: true,
          // },
          echarts: {
            name: 'chunk-echarts',
            test: /[\\/]node_modules[\\/]echarts[\\/]/,
            chunks: 'initial',
            priority: 3,
            // reuseExistingChunk: true,
            // enforce: true,
          },
        },
      })
    }
  },
}
