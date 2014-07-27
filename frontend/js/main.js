require.config({
	urlArgs: "bust=" +  (new Date()).getTime(), //Debug
	enforceDefine: true,
	paths: {		
		jquery: 'lib/jquery-min',
		underscore: 'lib/underscore-min',
		backbone: 'lib/backbone-min',
		bootstrap: 'lib/bootstrap',
		templates: '../templates'
	},
	shim: {
		'bootstrap': {
			deps: ['jquery'],
			exports: '$.fn.popover'
		}
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