define([
	'jquery',
	'underscore',
	'backbone',
	'views/LoginView',
	'text!templates/main-template.html',
	'Session',
	'bootstrap'
], function($, _, Backbone, LoginView, mainTemplate, Session) {
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
			var template = _.template(mainTemplate, {});
			this.$el.html(template);

			Session.getSession().done(function(data) {
				console.log("Session: " + data.session);
				if (data.session !== true) {
					var loginView = new LoginView();			
				}
			});
		}		
	});	
	return MainView;
});