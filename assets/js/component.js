/* replace with component lib */

(function( APP ){

	APP = APP || window.APP;

	var View = APP.View.extend({

		options: {
			silentRender: true
		},

		url: "../assets/html/template.html",

		events: {
			"click .arrows li": "clickArrow",
			"click .buttons li": "clickButton",
			"mousemove .analog": "moveAnalog"
		},

		// events
		clickArrow: function( e ){
			console.log("click arrow!!");
			// find arrow
		},

		clickButton: function( e ){
			console.log("click button!!");
			// find arrow
		},

		moveAnalog: function( e ){
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
			this.params.set("analog", { x: axis.x/(size.width/2), y: axis.x/(size.height/2) });

		}
	});

	APP.UI = APP.UI || {};
	APP.UI.Controls = View;
})( this.APP );
