module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import \'@/scss/_variables\';'
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: []
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/spring-financial-frontend-assignment/'
    : '/'
};
