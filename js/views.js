UserShoppingCartView = Backbone.View.extend({
	initialize: function() {
		console.log("RENDER shoppingcart");
		this.render();
	},
	render: function() {
		console.log(this.collection.models);
		var that = this;
		var get = $.ajax({
			type: "GET",
	        dataType: "text",
	        url: "templates/shoppingcart-template.html"
    	});

    	/*	Here "this" refers to the view object
		console.log(this);	*/
		
    	get.done(function(data) {
    		/* 	Here "this" refers to the get function
    			console.log(this); 	*/
    		var template = _.template(data, { items: that.collection.models });
			that.$el.html(template);
    	});
	}
});