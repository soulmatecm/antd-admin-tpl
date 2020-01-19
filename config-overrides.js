const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
  overrideDevServer
} = require('customize-cra')
const path = require('path')

const devServerConfig = () => config => {
  return {
    ...config,
    proxy: {
      '/api/': {
        target: 'http://127.0.0.1:8001',
        changeOrigin: true,
        pathRewrite: { '^/api': 'api' }
      },
      '/ws/': {
        target: 'ws://127.0.0.1:8001',
        ws: true,
        changeOrigin: true,
        pathRewrite: { '^/ws': 'ws' }
      }
    }
  }
}
module.exports = {
  webpack: override(
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true
    }),
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: { '@primary-color': '#1DA57A' }
    }),
    addWebpackAlias({
      '@': path.resolve('src')
    })
  ),
  devServer: overrideDevServer(devServerConfig())
}
