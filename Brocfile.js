/* jshint node: true */
/* global require, module */

var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

var app = new EmberAddon();
var pickFiles = require('broccoli-static-compiler');

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

app.import('bower_components/mjolnic-bootstrap-colorpicker/dist/js/bootstrap-colorpicker.js');
app.import('bower_components/mjolnic-bootstrap-colorpicker/dist/css/bootstrap-colorpicker.css');

var bootstrapColorPickerImages = pickFiles('bower_components/mjolnic-bootstrap-colorpicker/dist/img/bootstrap-colorpicker', {
  srcDir: '/',
  files: ['*'],
  destDir: '/img/bootstrap-colorpicker'
});

module.exports = app.toTree([bootstrapColorPickerImages]);
