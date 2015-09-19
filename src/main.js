(function() {
	// Creates an object based in the HTML Element prototype
	var el = Object.create(HTMLElement.prototype);

	// Fires when an instance of the element is created
	el.createdCallback = function() {

		// gather options
		var options = {
			monitor: ["mouse"]
		};
		// ...
		// shadowroot option
		var hidden = false;
		options.el = ( hidden ) ? this.createShadowRoot() : this;
		// instantiate view
		this.view = new APP.UI.Controls( options );

	};

	// Fires when an instance was inserted into the document
	el.attachedCallback = function() {};

	// Fires when an instance was removed from the document
	el.detachedCallback = function() {
		this.view.destroy();
	};

	// Fires when an attribute was added, removed, or updated
	el.attributeChangedCallback = function(attr, oldVal, newVal) {};

	document.registerElement('ui-controls', {
		prototype: el
	});

}());
