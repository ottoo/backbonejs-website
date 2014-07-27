define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone) {
	var Item = Backbone.Model.extend({
		defaults: {
			id: 0,
			type: "",
			name: "",
			price: 0,
			amount: 0
		},
		initialize: function() {
			console.log("New item created");
		}
	});
	return Item;
});