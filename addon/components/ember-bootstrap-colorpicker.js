import Ember from 'ember';

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
    'slidersHorz',
    'template'
  ],

  colorFormatting: {
    'hex':  'toHex',
    'rgb':  'toRGB',
    'rgba': 'toRGB',
    'hsl':  'toHSL',
    'hsla': 'toHSLA'
  },

  didInsertElement: function() {
    var self = this;
    var opts = {};
    var optionsGroup = this.get('options');
    var colorFormatting = this.get('colorFormatting');

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
        self.set('color', event.color[colorFormatting[self.get('format')]].call(event.color));
      });

  },

  updateColor: function() {
    this.$().colorpicker('setValue', this.get('color'));
  }.observes('color'),

  willDestroyElement: function() {
    this.$().colorpicker('destroy');
    this._super();
  }
});