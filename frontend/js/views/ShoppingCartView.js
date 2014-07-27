define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/shoppingcart-template.html'
], function($, _, Backbone, profileTemplate) {
	var ShoppingCartView = Backbone.View.extend({
		initialize: function() {
			console.log("RENDER \t shoppingcart");
			this.render();
		},
		render: function() {
			var template = _.template(data, {
				items: this.collection.models
			});
			this.$el.html(template);
		}
	});
	return ShoppingCartView;
});