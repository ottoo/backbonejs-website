require.config({
	urlArgs: "bust=" +  (new Date()).getTime(), //Debug
	enforceDefine: true,
	paths: {
		templates: '../templates',
		jquery: 'lib/jquery-min',
		underscore: 'lib/underscore-min',
		backbone: 'lib/backbone-min'
	}
});

define([
	'app',
	'jquery',
	'underscore',
	'backbone',
	'domReady'
], function(App, $, _, Backbone, domReady) {
	console.log(typeof $);
	console.log(typeof _);
	console.log(typeof Backbone);
	domReady(function() {
		App.initialize();
	});
		
});