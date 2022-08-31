module.exports = {
  lintOnSave: false,
  configureWebpack: {},
  chainWebpack: () => {},
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 192 //设计稿的分辨率/10
          })
        ]
      }
    }
  }
}
