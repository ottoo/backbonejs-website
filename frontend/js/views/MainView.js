define([
	'jquery',
	'underscore',
	'backbone',
	'views/LoginView',
	'text!templates/main-template.html',
	'text!templates/profile-menu-template.html',
	'Session',
	'bootstrap'
], function($, _, Backbone, LoginView, MainTemplate, ProfileMenuTemplate, Session) {
	var MainView = Backbone.View.extend({
		el: $("#template"),
		initialize: function() {
			console.log("RENDER \t Main");
			$(".navbar-nav li").hover(function() {
				$(this).addClass("active");
			}, function() {
				$(this).removeClass("active");
			});

			this.render();
		},
		render: function() {
			var template = _.template(MainTemplate, {});
			this.$el.html(template);

			Session.getSession().done(function(data) {
				console.log("Session: " + data.session);
				new LoginView({
					loggedin: data.session
				});
			});
		}
	});
	return MainView;
});