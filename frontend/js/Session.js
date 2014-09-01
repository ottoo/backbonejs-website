define([
		"jquery"
], function($) {
	var Session = {
		getSession: function() {
			var jqxhr = $.get("/node/api/session");
			return jqxhr;
		}
	};

	return Session;
});