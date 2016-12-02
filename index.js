/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'mk-videojs-record',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included: function(app) {
    if (!process.env.EMBER_CLI_FASTBOOT) {
      // var options = app.options.videojs || {};

      // app.import({
      //   development: path.join(app.bowerDirectory, 'video.js/dist/video-js.css'),
      //   production:  path.join(app.bowerDirectory, 'video.js/dist/video-js.min.css')
      // });

      // app.import(path.join(app.bowerDirectory, 'video.js/dist/font/VideoJS.eot'), { destDir: 'assets/font' });
      // app.import(path.join(app.bowerDirectory, 'video.js/dist/font/VideoJS.svg'), { destDir: 'assets/font' });
      // app.import(path.join(app.bowerDirectory, 'video.js/dist/font/VideoJS.ttf'), { destDir: 'assets/font' });
      // app.import(path.join(app.bowerDirectory, 'video.js/dist/font/VideoJS.woff'), { destDir: 'assets/font' });

      // app.import('vendor/mk-videojs-record/shims.js', {
      //   exports: {
      //     videojs: ['default']
      //   }
      // });

      // app.import({
      //   development: path.join(app.bowerDirectory, 'video.js/dist/video.js'),
      //   production:  path.join(app.bowerDirectory, 'video.js/dist/video.min.js')
      // });

      // (options.languages || []).forEach(function(language) {
      //   app.import(path.join(app.bowerDirectory, 'video.js/dist/lang/' + language + '.js'));
      // });

      // app.import(path.join(app.bowerDirectory, 'video.js/dist/video-js.swf'), { destDir: 'assets' });

      // app.import(path.join(app.bowerDirectory, 'recordrtc/RecordRTC.js'));
      // app.import(path.join(app.bowerDirectory, 'videojs-record/src/js/videojs.record.js'));
      // // app.import(path.join(app.bowerDirectory, 'video.js/dist/video.js'));
      // app.import(path.join(app.bowerDirectory, 'videojs-record/src/css/videojs.record.css'));
      // app.import(path.join(app.bowerDirectory, 'videojs-record/src/css/font/videojs-record.eot'), { destDir: 'assets/font' });
      // app.import(path.join(app.bowerDirectory, 'videojs-record/src/css/font/videojs-record.svg'), { destDir: 'assets/font' });
      // app.import(path.join(app.bowerDirectory, 'videojs-record/src/css/font/videojs-record.ttf'), { destDir: 'assets/font' });
      // app.import(path.join(app.bowerDirectory, 'videojs-record/src/css/font/videojs-record.woff'), { destDir: 'assets/font' });
    }
  }
};
