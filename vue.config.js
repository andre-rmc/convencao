const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  assetsDir: 'assets',
  publicPath: 'http://localhost:8080/',
  outputDir: 'dist',
  runtimeCompiler: false,
  productionSourceMap: true,
  parallel: true,
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options['transformAssetUrls'] = {
          img: 'src',
          image: 'xlink:href',
          'b-img': 'src',
          'b-img-lazy': ['src', 'blank-src'],
          'b-card': 'img-src',
          'b-card-img': 'img-src',
          'b-carousel-slide': 'img-src',
          'b-embed': 'src'
        }

        return options
      })
  },
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        routes: ['/']
      })
    ],
    resolve: {
      alias: {
        'bootstrap-components': path.resolve(
          __dirname,
          'node_modules/bootstrap-vue/es/components'
        )
      }
    }
  },

  css: {
    sourceMap: true
  }
}
