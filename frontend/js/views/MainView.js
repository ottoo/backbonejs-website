define([
	'jquery',
	'underscore',
	'backbone',
	'views/LoginView',
	'text!templates/main-template.html'
], function($, _, Backbone, LoginView, mainTemplate) {
	var MainView = Backbone.View.extend({
		el: $("#template"),
		initialize: function() {
			console.log("RENDER \t Main");
			this.render();	
		},
		render: function() {
			var template = _.template(mainTemplate, {});
			this.$el.html(template);
			var loginView = new LoginView();
		}
	});	
	return MainView;
});