define([
	'jquery',
	'underscore',
	'backbone',
	'models/ItemModel'
], function($, _, Backbone, ItemModel) {
	var ItemCollection = Backbone.Collection.extend({
		model: ItemModel,
		initialize: function(models, options) {
		
		}
	});
	return ItemCollection;
});