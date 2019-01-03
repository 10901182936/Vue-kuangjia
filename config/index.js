'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {
      env: require('./dev.env'),
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/': {
        target: 'http://192.168.1.112:8002/salesman/',
        // target: 'http://192.168.0.101:8002/',
        changeOrigin: true,
          pathRewrite:{
              '^/': ''
          }
      }
    },

    // Various Dev Server settings
    host: '192.168.56.6', // can be overwritten by process.env.HOST
    //host: 'localhost', // can be overwritten by process.env.HOST
    port: 8001, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,
    devtool: 'cheap-module-eval-source-map',
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
      // env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    productionSourceMap: true,
    devtool: '#source-map',
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
