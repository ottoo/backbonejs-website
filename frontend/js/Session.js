define([
		"jquery"
], function($) {
	var Session = {
		getSession: function() {
			var jqxhr = $.get("/api/session");
			return jqxhr;
		}
	};

	return Session;
});