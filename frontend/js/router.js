define([
	'jquery',
	'underscore',
	'backbone',
	'views/MainView',
	'views/ProfileView',
	'views/AboutView',
	'views/ContactView',
	'domReady'
], function($, _, Backbone, MainView, ProfileView, AboutView, ContactView, domReady) {

	var AppRouter = Backbone.Router.extend({
		routes: {
			"profile": "getProfile",
			"test/:id": "testRoute",
			"about": "getAbout",
			"contact": "getContact",
			"*actions": "index"		
		},
		getProfile: function() {
			console.log("ON \t\t profile route");
			var profileView = new ProfileView();
		},
		getAbout: function() {
			var aboutView = new AboutView();
		},
		getContact: function() {
			var contactView = new ContactView();
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
