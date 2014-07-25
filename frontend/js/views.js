function getTemplate(templateUrl) {
	var get = $.ajax({
		type: "GET",
		dataType: "text",
		url: templateUrl
	});
	return get;
}

MainView = Backbone.View.extend({
	initialize: function() {
		console.log("RENDER Main");
		this.render();
	},
	render: function() {
		var self = this;

		/*	Here "this" refers to the view object
		console.log(this);	*/

		getTemplate("templates/main-template.html").done(function(data) {
			/* 	Here "this" refers to the get function
    			console.log(this); 	*/
			var template = _.template(data, {});
			self.$el.html(template);
		});
	}
});

UserShoppingCartView = Backbone.View.extend({
	initialize: function() {
		console.log("RENDER shoppingcart");
		this.render();
	},
	render: function() {
		var self = this;

		/*	Here "this" refers to the view object
		console.log(this);	*/

		getTemplate("templates/shoppingcart-template.html").done(function(data) {
			/* 	Here "this" refers to the get function
    			console.log(this); 	*/
			var template = _.template(data, {
				items: self.collection.models
			});
			self.$el.html(template);
		});
	}
});