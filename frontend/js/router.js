define([
	'jquery',
	'underscore',
	'backbone',
	'views/MainView',
	'views/ProfileView',
	'domReady'
], function($, _, Backbone, MainView, ProfileView, domReady) {

	var AppRouter = Backbone.Router.extend({
		routes: {
			"profile": "getProfile",
			"test/:id": "testRoute",
			"*actions": "index"		
		},
		getProfile: function() {
			console.log("ON \t\t profile route");
			var profileView = new ProfileView();
		},
		testRoute: function(id) {
			console.log(id);
		},
		index: function() {
			console.log("ON \t\t default route");
			var mainView = new MainView();		
		}
	});
	
	var initialize = function() {
			console.log("INIT \t router");
			var router = new AppRouter();
			Backbone.history.start({ root: "/frontend/backbonejs" });		
	};
	return {
		initialize: initialize
	};
});
