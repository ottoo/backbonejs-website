define([
	"jquery",
	"underscore",
	"backbone",
	"text!templates/login-template.html",
	"text!templates/profile-menu-template.html"
], function($, _, Backbone, loginTemplate, profileMenuTemplate) {
	var LoginView = Backbone.View.extend({
		el: $("#login-container"),
		initialize: function() {
			console.log("RENDER \t Login");

			$("#login-username").focus(function() {
				$("#login-username").attr("placeholder", "Username");
				$("#login-username").removeClass("form-error");
			})
			$("#login-password").focus(function() {
				$("#login-password").attr("placeholder", "Password");
				$("#login-password").removeClass("form-error");
			});

			this.render(loginTemplate);
		},
		render: function(templateToRender) {
			var template = _.template(templateToRender, {});
			this.$el.html(template);			
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
				console.log(data.session);
				if (data.session != true) {
					$("#login-username").val("");
					$("#login-password").val("");
					$("#login-username").attr("placeholder", "Wrong username!");
					$("#login-username").addClass("form-error");
					$("#login-password").attr("placeholder", "Wrong password!");
					$("#login-password").addClass("form-error");
				} else {
					self.render(profileMenuTemplate);
				}
			}).error(function() {
				console.log("error");
			});

			return false;
		}
	});
	return LoginView;
});