module.exports = {
  description: 'mk-videojs-record',

  afterInstall: function() {
    return this.addBowerPackageToProject('mc-videojs-record', '1.5.0');
  },

  normalizeEntityName: function() {
    // This prevents an error when the entityName is not specified.
  }
};
