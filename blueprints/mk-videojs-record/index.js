module.exports = {
  description: 'mk-videojs-record',

  afterInstall: function() {
    // this.addBowerPackageToProject('video.js', '~5.12');
    this.addBowerPackageToProject('mc-videojs-record', '1.5.1');
    // return this.addBowerPackageToProject('videojs-record', '^1.5.0');
    return this.addBowerPackageToProject('git@github.com:multicora/videojs-record.git');
  },

  normalizeEntityName: function() {
    // This prevents an error when the entityName is not specified.
  }
};
