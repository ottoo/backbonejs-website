$(document).ready(function() {

	$("#submitBtn").click(function() {
		$("#login-email").attr("placeholder", "Wrong email address!");
		$("#login-email").addClass("form-error");
		$("#login-password").attr("placeholder", "Wrong password!");
		$("#login-password").addClass("form-error");

		$("#login-email").focus(function() {
			$("#login-email").attr("placeholder", "Email");
			$("#login-email").removeClass("form-error");
		})
		$("#login-password").focus(function() {
			$("#login-password").attr("placeholder", "Password");
			$("#login-password").removeClass("form-error");
		});
	});

	var log = log4javascript.getDefaultLogger();

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

	var main_view = new MainView({
		el: $("#template")
	});
	/*var shoppingcart_view = new UserShoppingCartView({
		el: $("#template"),
		collection: user.shoppingCart
	});*/
});