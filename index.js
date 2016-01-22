'use strict';

var path = require('path');
var defaultsDeep = require('lodash.defaultsdeep');
var browserSync = require('browser-sync').create();

module.exports = function (gulp, gulpConfig) {

  gulpConfig = gulpConfig || { basePath: '.' };
  // Pass back the browsersync object;
  gulpConfig.browserSync = browserSync;
  // Merge default config with gulp config.
  var defaultConfig = {
    browserSyncOptions: {
      proxyServer: false
    }
  };

  var config = defaultsDeep(gulpConfig, defaultConfig).browserSyncOptions;

  gulp.task('serve', function() {
    if (config.proxyServer !== false) {
      browserSync.init({
          proxy: config.proxyServer
      });
    }
    else {
      browserSync.init({
        server: {
          baseDir: gulpConfig.basePath
        }
      });
    }

  });
};
