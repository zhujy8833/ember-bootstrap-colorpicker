import Ember from 'ember';

var observer = Ember.observer;

export default Ember.Component.extend({
  color: '#000000',
  format: 'hex',

  options: [
    'color',
    'format',
    'component',
    'input',
    'horizontal',
    'inline',
    'sliders',
    'slidersHorz'
  ],

  didInsertElement: function() {
    var self = this;
    var opts = {};
    var optionsGroup = this.get('options');

    for (var i = 0; i < optionsGroup.length; i++) {
      if(typeof self.get(optionsGroup[i]) !== 'undefined') {
        opts[optionsGroup[i]] = self.get(optionsGroup[i]);
      }
    }

    if(this.get('colorPickerContainer')) {
      opts['container'] = this.get('colorPickerContainer') || false;
    }
    //init
    this.$().attr('data-color', this.get('color'));
    this.$().colorpicker(opts)
      .on('changeColor.colorpicker',function(event){
        self.set('color', event.color.toString(self.get('format')));
      });
  },

  updateColor: observer('color', function() {
    this.$().colorpicker('setValue', this.get('color'));
  }),

  willDestroyElement: function() {
    if(this.$().data('colorpicker')) {
      this.$().colorpicker('destroy');
    }
    this._super();
  }
});