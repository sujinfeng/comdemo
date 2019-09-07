// vue.config.js
module.exports = {
  // 修改src目录为 examples 目录
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },

  // 扩展webpack配置,使packages加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
        .add('/packages')
        .end()
      .use('babel')
        .loader('babel-loader')
        .tap(options => {
          //修改它的选项
          return options
        })
  },
  css: {
    extract: false
  }
}

