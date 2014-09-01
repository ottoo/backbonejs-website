define([
	'jquery',
	'underscore',
	'backbone',
	'collections/ItemCollection'
], function($, _, Backbone, ItemCollection) {
	var User = Backbone.Model.extend({
		defaults: {
			id: "",
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
		urlRoot: function() {
			/*if (this.isNew()) {
				return '/api/users/';
			} else {
				return '/api/users/' + this.id;
			}*/

			return '/api/users/';
		},
		initialize: function() {
			this.shoppingCart = new ItemCollection();
		},
		addItemToShoppingCart: function(item) {
			this.shoppingCart.add(item);
		},
		echo: function() {
			console.log(this.id);
		}
	});
	return User;
});