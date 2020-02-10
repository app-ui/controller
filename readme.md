# APP UI: Controls

Display a UI element for on screen navigation.

**Note:** This is a UI component to create on-screen controls (as in gamepad controls); not to be confused with a router/controller which is a logic construct in an MVC structure.


## Examples

...


## Dependencies

This component relies on the following third-party libraries:

* [APP](http://makesites.org/projects/app)
* [jQuery](http://jquery.com)
* [Underscore](http://underscorejs.org)


## Install

Download the component and extract in 'components/app-ui-controls'
```
cd [project folder]
wget https://github.com/app-ui/controls/archive/master.zip
unzip master.zip -d ./components/
```

Using bower: (Old method)
```
bower install app.ui.controls
```


## Usage

The component is built on top of [APP](http://makesites.org/projects/app) which should be loaded before the component in the <head> section of your website. This library uses the non-standard method of "html imports" for loading custom elements. 


1. Include APP library

```html
<script src="components/app/build/app.min.js"></script>
```

2. Import Custom Element:
```html
<link rel="import" href="components/app-ui-controls">
```

3. Start using it!

```html
<div is="app-ui-controls"></div>
```
Currently the component extends the ```<div>``` tag.


## Options

These are the set of options you can use as attributes in your custom element:

* **opacity** (0-1) : how transparent are the controls
* **type** (kiost,gamepad) : define the controls layout


## Events

...


## Credits

Initiated by Makis Tracend ( [@tracend](http://github.com/tracend) )

Distributed through [Makesites.org](http://makesites.org/)


### License

Released under the [MIT License](http://makesites.org/licenses/MIT)


