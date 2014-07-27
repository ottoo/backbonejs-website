var App = App || {};
var IS_LOGGED_IN;

function getTemplate(templateUrl) {
	var get = $.ajax({
		type: "GET",
		dataType: "text",
		url: templateUrl
	});
	return get;
}

App.MainView = Backbone.View.extend({
	initialize: function() {
		console.log("RENDER Main");
		this.render();
		//this.listenTo(loginView, 'change', console.log("Event fired"));		
	},
	render: function() {
		var self = this;

		/*	Here "this" refers to the view object
		console.log(this);	*/

		getTemplate("templates/main-template.html").done(function(data) {
			/* 	Here "this" refers to the get function
    			console.log(this); 	*/
			console.log(self + ' ' + this);
			var template = _.template(data, {});
			self.$el.html(template);
		});

		if (!IS_LOGGED_IN) {
			loginView = new App.LoginView({
				el: $("#login-container")
			});
		}

		return this;
	}
});

App.LoginView = Backbone.View.extend({
	initialize: function() {
		console.log("RENDER Login");

		$("#login-username").focus(function() {
			$("#login-username").attr("placeholder", "Username");
			$("#login-username").removeClass("form-error");
		})
		$("#login-password").focus(function() {
			$("#login-password").attr("placeholder", "Password");
			$("#login-password").removeClass("form-error");
		});

		this.render("templates/login-template.html");
	},
	render: function(templateUrl) {
		var self = this;

		getTemplate(templateUrl).done(function(data) {
			var template = _.template(data, {});
			self.$el.html(template);
		});

		return this;
	},
	events: {
		"click #submitBtn": "loginClickHander"
	},
	loginClickHander: function(event) {
		console.log("Logging in..");
		var self = this;
		$.ajax({
			type: "POST",
			dataType: "json",
			contentType: "application/x-www-form-urlencoded",
			url: "/api/login",
			data: $.param({
				username: $("#login-username").val(),
				password: $("#login-password").val()
			})
		}).done(function(data) {
			console.log(data.status);
			if (data.status == false) {
				$("#login-username").val("");
				$("#login-password").val("");
				$("#login-username").attr("placeholder", "Wrong username!");
				$("#login-username").addClass("form-error");
				$("#login-password").attr("placeholder", "Wrong password!");
				$("#login-password").addClass("form-error");
			} else {
				IS_LOGGED_IN = true;
				self.render("templates/profile-menu-template.html");
			}
		});

		return false;
	}
});

App.ProfileView = Backbone.View.extend({
	initialize: function() {
		console.log("RENDER profile");
		this.render();
	},
	render: function() {
		var self = this;

		/*	Here "this" refers to the view object
		console.log(this);	*/

		getTemplate("templates/profile-template.html").done(function(data) {
			/* 	Here "this" refers to the get function
    			console.log(this); 	*/
			var template = _.template(data, {});
			self.$el.html(template);
		});
	}
});

App.UserShoppingCartView = Backbone.View.extend({
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