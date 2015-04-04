# Ember-bootstrap-colorpicker
[![Build Status](https://travis-ci.org/zhujy8833/ember-bootstrap-colorpicker.svg?branch=master)](https://travis-ci.org/zhujy8833/ember-bootstrap-colorpicker)

Simple Bootstrap colorpicker Ember addon component, based on [Bootstrap Colorpicker](http://mjolnic.com/bootstrap-colorpicker/)

## Installation 
```sh
npm install --save-dev ember-bootstrap-colorpicker
ember g ember-bootstrap-colorpicker
```

##Usage
```javascript
//templates/components/example.hbs
{{ember-bootstrap-colorpicker color=model.color}}
```
You can bind the color property to your model, so that it will be updated by two-way bindings.
The ember addon component also accepts other options, you can find detailed documentation: <http://mjolnic.com/bootstrap-colorpicker>

If you want to customize this component by extending it and override the default behaviors, you could do something like 
```javascript
//app/components/my-bootstrap-colorpicker.js
import BootstrapColorpicker from 'ember-bootstrap-colorpicker/components/ember-bootstrap-colorpicker';

export default BootstrapColorpicker.extend({
	format: 'rgba',
	horizontal: true
});
```

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
