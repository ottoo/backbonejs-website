define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/profile-template.html'
], function($, _, Backbone, profileTemplate) {
	var ProfileView = Backbone.View.extend({
		el: $("#template"),
		initialize: function() {
			console.log("RENDER \t profile");
			this.render();
		},
		render: function() {
			var template = _.template(profileTemplate, {});
			this.$el.html(template);			
		}
	});
	return ProfileView;
});