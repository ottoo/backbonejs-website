define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/about-template.html'
], function($, _, Backbone, aboutTemplate) {
	var AboutView = Backbone.View.extend({
		el: $("#template"),
		initialize: function() {
			console.log("RENDER \t about");
			this.render();
		},
		render: function() {
			var template = _.template(aboutTemplate, {});
			this.$el.html(template);			
		}
	});
	return AboutView;
});