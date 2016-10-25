define(['jquery'],function($) {
	var until = {
		addTimeStamp: function(url) {
			var sep = '?';
			if (url.indexOf('?') > -1) {
				sep = '&';
			}
			var timestamp = Date.parse(new Date());
			url = url + sep + 'timestamp=' + timestamp;
			return url;
		}
	}
	return until;
});