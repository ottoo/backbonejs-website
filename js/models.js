var log = log4javascript.getDefaultLogger();

var User = Backbone.Model.extend({
	defaults: function() {
		return {
			username: "username",
			password: "password",
			email: "email",
		}
	},
	initialize: function() {
		this.shoppingCart = new ShoppingCart;
	},
	addItemToShoppingCart: function(item) {
		this.shoppingCart.add(item);
	}
});

var Item = Backbone.Model.extend({
	defaults: {
		id: 0,
		type: "",
		name: "",
		price: 0,
		amount: 0
	},
	initialize: function() {

	}
});

var ShoppingCart = Backbone.Collection.extend({
	model: Item
});

/*user.shoppingCart.each(function(item) {
	console.log(item.get("type"));
});*/