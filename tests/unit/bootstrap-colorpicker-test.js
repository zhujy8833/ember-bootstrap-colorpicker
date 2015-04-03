import Ember                        from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('ember-bootstrap-colorpicker', 'component:bootstrap-colorpicker');

var colorpickerClassName = 'colorpicker-element';
var colorpickerAddonSelector = '.input-group-addon';

test('it has correct defaults', function(assert) {
  assert.expect(3);

  var component = this.subject();

  assert.ok(component, 'component exists');
  assert.equal(component.get('color'), '#000000', 'default color correct');
  assert.equal(component.get('format'), 'hex', 'default format correct');
});

test('it has rendered elements', function(assert) {
  assert.expect(4);
  var component = this.subject({
    color: '#e5e5e5'
  });

  this.render();
  assert.equal(component.get('color'), '#e5e5e5', 'setup color correct');
  assert.equal(component.$().hasClass(colorpickerClassName), true, 'element created');
  assert.equal(component.$(colorpickerAddonSelector).length, 1);
  assert.equal(component.$().attr('data-color'), component.get('color'));
});

test('update color', function(assert) {
  assert.expect(1);
  var component = this.subject({
    color: '#e5e5e5'
  });

  this.render();

  component.$().on('changeColor.colorpicker', function() {
    assert.ok(true, 'change color function triggered');
  });
  component.set('color', '#f7f7f7');
});

