'use strict';

exports = module.exports = function(req, res, next) {
	var callback = req.query.callback;
	if (callback) {
		res.jsonp = function(json) {
			res.setHeader('Content-Type', 'script/javascript');
			if (typeof json === 'object' && json !== null) {
				res.send(callback + '(' + JSON.stringify(json) + ');');
			} else if (typeof json === 'string') {
				try {
					JSON.parse(json);
					res.send(callback + '(' + json + ');');
				} catch (e) {
					throw new Error('Malformed JSON string in JSONP call');
				}
				// Assume it's stringified
			}
		};
	} else {
		res.jsonp = function() {
			res.send(400, 'Callback function not specified');
		};
	}
	next();
};