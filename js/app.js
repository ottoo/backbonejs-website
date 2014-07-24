$(document).ready(function() {

	var user = new User({
		username: "ottoki",
		password: "salasana",
		email: "ottoki@gmail.com"
	});

	var cheeseItem = new Item({
		id: 1,
		type: "cheese",
		name: "Example Cheese",
		price: 0.99,
		amount: 2
	});

	var milkItem = new Item({
		id: 2,
		type: "milk",
		name: "Example Milk",
		price: 0.99,
		amount: 1
	});

	user.addItemToShoppingCart(cheeseItem);
	user.addItemToShoppingCart(milkItem);

	var shoppingcart_view = new UserShoppingCartView({
		el: $("#template"),
		collection: user.shoppingCart
	});
});