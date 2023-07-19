module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/yoda-admin-template/vue/'
    : '/',
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: ['./node_modules', './src/assets'],
        },
      },
    },
  },
}
