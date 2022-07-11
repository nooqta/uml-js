(function () {
	'use strict';

	module.exports = {
		'inflate': require('./lib/rawinflate.js'),
		'deflate': require('./lib/rawdeflate.js'),
		'encoding': require('./lib/encoding.js'),
		'plantuml': require('./lib/plantuml.js')
	};
}());
