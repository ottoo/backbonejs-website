define([
	'jquery',
	'underscore',
	'backbone',
	'collections/ItemCollection'
], function($, _, Backbone, ItemCollection) {
	var User = Backbone.Model.extend({
		defaults: {
			_id: "",
			username: "username",
			password: "password",
			email: "email",
			address: {
				street: "",
				state: "",
				zip: 0,
				country: ""
			}
		},
		url: function() {
			return "/api/users/" + this._id;
		},
		initialize: function() {
			this.shoppingCart = new ItemCollection;
		},
		addItemToShoppingCart: function(item) {
			this.shoppingCart.add(item);
		}
	});
	return User;
});