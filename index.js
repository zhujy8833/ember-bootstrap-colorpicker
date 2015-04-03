/* jshint node: true */
'use strict';
 var pickFiles = require('broccoli-static-compiler');

module.exports = {
  name: 'ember-bootstrap-colorpicker',
  included: function(app) {
    var bootstrapPath = 'bower_components/mjolnic-bootstrap-colorpicker/dist';
    var destDir = '/img/bootstrap-colorpicker';
    this._super.included(app);
    app.import(bootstrapPath + '/js/bootstrap-colorpicker.js');
    app.import(bootstrapPath + '/css/bootstrap-colorpicker.css');
    //bootstrap color picker assets
    app.import(bootstrapPath + '/img/bootstrap-colorpicker/alpha-horizontal.png', { destDir: destDir });
    app.import(bootstrapPath + '/img/bootstrap-colorpicker/alpha.png', { destDir: destDir });
    app.import(bootstrapPath + '/img/bootstrap-colorpicker/hue-horizontal.png', { destDir: destDir });
    app.import(bootstrapPath + '/img/bootstrap-colorpicker/hue.png', { destDir: destDir });
    app.import(bootstrapPath + '/img/bootstrap-colorpicker/saturation.png', { destDir: destDir });
  }
};
