/* replace with component lib */

(function( APP ){

	APP = APP || window.APP;

	var View = APP.View.extend({

		options: {
			silentRender: true, // this is required to avoid an infinite loop (triggering createdCallback on .show() )
		},

		url: "../assets/html/template.html",

		events: {
			"click .arrows li": "clickArrow",
			"click .buttons li": "clickButton",
			"mousemove .analog": "moveAnalog"
		},

		/*
		initialize: function( options ){
			//console.log("options", options);
			this._bindEvents();
			return APP.View.prototype.initialize.call(this, options);
		},
		*/

		/*
		// move these event methods to backbone app
		_bindEvents: function(){
			var self = this;

			this.el.host.addEventListener("click", function( e ){
				self._eventClick( e );
			});
			this.el.host.addEventListener("mousemove", function( e ){
				self._eventMouseMove( e );
			});
			this.el.host.addEventListener("mouseup", function( e ){
				self._eventMouseUp( e );
			});
			this.el.host.addEventListener("mousedown", function( e ){
				self._eventMouseDown( e );
			});
		},

		_eventClick: function( e ){
			// condition re-render...
			//console.log( "click",  );
			$(e.path[0]).trigger("click");
		},

		_eventMouseUp: function( e ){
			// condition re-render...
			//console.log( "move", e);
			$(e.path[0]).trigger("mouseup");
		},

		_eventMouseDown: function( e ){
			// condition re-render...
			console.log( "move", e);
		},

		_eventMouseMove: function( e ){
			// condition re-render...
			//console.log( "move", e);
		},
		*/
		update: function(){
			// condition re-render...
		},
		/*
		postRender:function(){
			//if( this.params.get("rendered") ) return;
			// events (execute once)
			// reset events
			$(this.el).find(".arrows li").off("click").on("click", _.bind(this.clickArrow, this));
			$(this.el).find(".buttons li").off("click").on("click", _.bind(this.clickButton, this));
			$(this.el).find(".analog").off("mousemove").on("mousemove", _.bind(this.moveAnalog, this));
			//
			//this.params.set("rendered", true);
		},
		*/
		// events
		clickArrow: function( e ){
			console.log("click arrow!!");
			// find arrow

			// broadcast event
		},

		clickButton: function( e ){
			console.log("click button!!");
			// find arrow

			// broadcast event

		},

		moveAnalog: function( e ){
			//console.log("moveAnalog", e);
			// prerequisites
			if( !this.state.get("pressing") ) return;
			// variables
			var el = this.$el.find(".analog")[0];
			var mouse = this.params.get("mouse");
			var pos = {
				x: mouse.x - el.offsetLeft,
				y: mouse.y - el.offsetTop
			};
			var size = {
				width: el.offsetWidth,
				height: el.offsetHeight
			};
			// normalize axis (based on center)
			// set bounderies
			var axis = {
				x: pos.x - (size.width/2),
				y: pos.y - (size.height/2)
			}
			// set bounderies
			axis.x = Math.max( axis.x, -size.width/2);
			axis.x = Math.min( axis.x, size.width/2);
			axis.y = Math.max( axis.y, -size.height/2);
			axis.y = Math.min( axis.y, size.height/2);
			// position the after element
			$(el).pseudo("after", "margin-top", axis.y +"px");
			$(el).pseudo("after", "margin-left", axis.x +"px");
			//
			// save the value in the params (as a percentage)
			var force = { x: axis.x/(size.width/2), y: axis.x/(size.height/2) };
			this.params.set("analog", force);
			// tba: multiple analog
			// trigger event
			//this.trigger("analog", { id: 1, coords: coords });
			// events
			//this.view.on('analog', function(data){
				var event = new CustomEvent('analog', { detail: { id: 1, force: force }});
				this.el.dispatchEvent(event);
			//});
		}
	});

	APP.UI = APP.UI || {};
	APP.UI.Controls = View;
})( this.APP );
