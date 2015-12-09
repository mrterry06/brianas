module.exports = function(config) {
  config.set({
    frameworks: [
      'jasmine'
    ],

    files: [
      'node_modules/sinon/pkg/sinon.js',
      'karma.entry.js'
    ],

    preprocessors: {
      'karma.entry.js': ['webpack', 'sourcemap']
    },

    // webpack config
    webpack: require('./webpack.config.test'),

    // webpack server config
    webpackServer: {
      noInfo: true
    },

    reporters: ['dots'],

    logLevel: config.LOG_INFO,

    autoWatch: true,

    singleRun: false,

    browserNoActivityTimeout: 180000, // 3 mins

    customLaunchers: {
      TRAVIS_CHROME: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    browsers: process.env.TRAVIS ? ['TRAVIS_CHROME'] : ['Chrome']
  });
};
