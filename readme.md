# APP UI: Controls

Display a UI element for on screen navigation.

**Note:** This is a UI component to create on-screen controls (as in gamepad controls); not to be confused with a router/controller which is a logic construct in an MVC structure.


## Install

Using bower:
```
bower install app.ui.controls
```

Import from github
```
git pull git://github.com/app-ui/controls.git master
```


## Usage

1. Import Web Components' polyfill

```html
<script src="components/webcomponentsjs/webcomponents.js"></script>
```

2. Import Custom Element:
```html
<link rel="import" href="components/app.ui.controls">
```

3. Start using it!

```html
<ui-controls></ui-controls>
```


## Options

Following are the attributes you can use with this custom element

* **opacity** (0-1) : how transparent are the controls
* **type** (kiost,gamepad) : define the controls layout


## Events

...


## Credits

Initiated by Makis Tracend ( [@tracend](http://github.com/tracend) )

Distributed through [Makesites.org](http://makesites.org/)

### Mentions

Part of the [APP UI](http://github.com/app-ui) components.

### License

Released under the [MIT License](http://makesites.org/licenses/MIT)
