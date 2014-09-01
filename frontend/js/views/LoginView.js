define([
	"jquery",
	"underscore",
	"backbone",
	"models/UserModel",
	"text!templates/login-template.html",
	"text!templates/profile-menu-template.html"
], function($, _, Backbone, UserModel, LoginTemplate, ProfileMenuTemplate) {
	var LoginView = Backbone.View.extend({
		el: $("#login-container"),
		initialize: function() {
			console.log("RENDER \t Login");
			$("#login-username").focus(function() {
				$("#login-username").attr("placeholder", "Username");
				$("#login-username").removeClass("form-error");
			});
			$("#login-password").focus(function() {
				$("#login-password").attr("placeholder", "Password");
				$("#login-password").removeClass("form-error");
			});
			this.model = new UserModel();
			/*this.model.set({ id: "53d2b41daf685d4f6c3ed624" });
			this.model.fetch();
			console.log(this.model.get('email'));*/
			this.render(LoginTemplate);
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
				if (data.session !== true) {
					$("#login-username").val("");
					$("#login-password").val("");
					$("#login-username").attr("placeholder", "Wrong username!");
					$("#login-username").addClass("form-error");
					$("#login-password").attr("placeholder", "Wrong password!");
					$("#login-password").addClass("form-error");
				} else {
					self.model.set({ id: data.currentUser._id });
					self.model.fetch({
						success: function() {
							console.log(self.model.get('email'));
						},
						error: function() {
							console.log("Error while fetching a model..");
						}
					});
					self.render(ProfileMenuTemplate);
				}
			}).error(function() {
				console.log("error");
			});

			return false;
		}
	});
	return LoginView;
});